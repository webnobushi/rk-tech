<docs>
  @todo 下書き機能をつける
</docs>

<template lang="pug">
  LayoutContainer
    LayoutSection
      template(slot='heading') CONTACT
      template(slot='subHeading') お問い合わせ

      template(slot='contents')
        div.box
          FontIcon(icon="info").is-size-3
          p 直接メールでご連絡またはフォームよりお問い合わせください。
          br
          p
            a(href="mailto:webnobushi@gmail.com").is-size-5 webnobushi@gmail.com

        ValidationObserver(ref="validationObserver")
          div(slot-scope="{ invalid, validated }")
            div(v-if="invalid && validated").box
              p
                FontIcon(icon="info").error.is-size-5
                | 入力内容に不備があります。

            FormSelector(:options="typeOptions" v-model="type" label="お問い合わせの種類")

            ValidationProvider(name="お名前" rules="required" :events="['change', 'blur']")
              div(slot-scope="{ errors }")
                FormInput(
                type="text"
                v-model="name"
                label="お名前"
                :required="true"
                :invalid="errors.length > 0")
                  FormErrorMessage(:messages="errors")

            ValidationProvider(name="メールアドレス" rules="required|email" :events="['change']")
              div(slot-scope="{ errors }")
                FormInput(
                type="email"
                v-model="email"
                label="メールアドレス"
                :required="true"
                :invalid="errors.length > 0")
                  FormErrorMessage(:messages="errors")

            ValidationProvider(name="お問い合わせ内容" rules="required" :events="['change']")
              div(slot-scope="{ errors }")
                FormInput(
                type="textarea"
                v-model="description"
                label="お問い合わせ内容"
                :required="true"
                :invalid="errors.length > 0")
                  FormErrorMessage(:messages="errors")

            LayoutStickyFooter
              div.columns.is-mobile
                div.column
                  Button(
                  @click="submit"
                  :bg="inProgress ? 'gray' : 'black'"
                  :disabled="inProgress"
                  :in-progress="inProgress"
                  color="white") {{ inProgress ? '送信中' : '送信' }}
                div.column
                  Button(
                  color="black"
                  bg="white"
                  :disabled="inProgress"
                  @click="$router.go(-1)"
                  ) キャンセル


</template>

<script>
import { mapActions, mapState } from 'vuex'
import {
  contactMessageTemplate, failedMessageTemplate,
  sendMessage,
  successMessageTemplate
} from '@/assets/js/domain/contact'
import { curry, otherwise, pipe, then } from "ramda";
import { ifTrue as whenValid, log } from "@/assets/js/util/functions";

const typeOptions = [
  { label: '案件のご依頼', value: '案件のご依頼' },
  { label: '案件のご紹介', value: '案件のご紹介' },
  { label: 'その他ご相談', value: 'その他ご相談' },
]

export default {
  name: 'contact',

  data: () => ({
    name: '',
    description: '',
    type: typeOptions[0].value,
    email: '',
    typeOptions
  }),

  mounted() {
    this.validator = this.$refs.validationObserver
  },

  computed: {
    ...mapState(['inProgress'])
  },

  methods: {
    ...mapActions(['changeHeroDisplay', 'enableInProgress', 'disableInProgress']),

    submit() {
      pipe(
        this.validator.validate,
        then(whenValid(pipe(
          this.enableInProgress,
          this.buildContactMessage,
          sendMessage,
          then(pipe(
            this.disableInProgress,
            this.goToTopPage,
            this.buildSuccessMessage,
            this.displayHero)),
          otherwise(pipe(
            this.disableInProgress,
            this.goToTopPage,
            failedMessageTemplate,
            this.displayHero,
          ))),
        ))
      )()
    },

    buildContactMessage() {
      return contactMessageTemplate(this.name, this.type, this.email, this.description)
    },

    buildSuccessMessage() {
      return successMessageTemplate(this.name)
    },

    goToTopPage() {
      this.$router.push({ name: 'index' })
    },

    displayHero(message) {
      return curry(log)(this.changeHeroDisplay)(message)
    },
  }
}

</script>
