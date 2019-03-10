<template lang="pug">
  div.footer.bg-theme
    LayoutContainer
      p.has-text-centered.white {{ `Copyright © ${new Date().getFullYear()} RK-Tech. All Rights reserved.` }}

</template>

<script>
export default {
  props: {

  },

  data:() => ({
  }),
}
</script>
