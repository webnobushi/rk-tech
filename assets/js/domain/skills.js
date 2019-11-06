/**
 * @todo call firebase api
 */
export default {
  index() {
    return Promise.resolve([
      {
        name: 'vue',
        label: 'Vue',
        imageSrc: '/images/skill-logo/vue.svg',
        carrier: {
          value: 2.5,
          unit: 'year',
          business: true,
          private: true,
          study: false
        },
        description: `周辺ライブラリの vuex, vue-router などを利用してSPAサイトの構築ができます。
        <br>（F/W の使用経歴は Angular1 -> Riot.js -> Vue.js です。）`
      },

      {
        name: 'es',
        label: 'Ecma Script',
        imageSrc: '/images/skill-logo/es6.svg',
        carrier: {
          value: 2.5,
          unit: 'year',
          business: true,
          private: true,
          study: true
        },
        description: `プライベートプロジェクトでステージの低い機能を積極的に利用して、最新の記法をキャッチアップしています。
        <br>(optional chaining や pipeline operator を積極的に取り入れて学習しています)`
      },

      {
        name: 'typescript',
        label: 'Typescript',
        imageSrc: '/images/skill-logo/ts.png',
        carrier: {
          value: 3,
          unit: 'month',
          business: false,
          private: true,
          study: true
        },
        description: `typescript がデファクトになりつつあると感じているため、プライベートプロジェクトで
        es6 -> typescript へ書き直しをしながら学習しています。`
      },

      {
        name: 'graphql',
        label: 'Graphql',
        imageSrc: '/images/skill-logo/graphql.svg',
        carrier: {
          value: 2.5,
          unit: 'year',
          business: true,
          private: true,
          study: false
        },
        description: `実務では apollo client を用いたクライアント側の実装実績があります。
        <br>プライベートプロジェクトではサーバサイド側も graphql を利用しています。
        <br>現在は <a href="https://www.prisma.io/" target="_blank">prisma</a> を触りながら勉強しています。`
      },

      {
        name: 'node',
        label: 'Nodejs',
        imageSrc: '/images/skill-logo/nodejs.svg',
        carrier: {
          value: 1.5,
          unit: 'year',
          business: false,
          private: true,
          study: false
        },
        description: `プライベートプロジェクトで利用しています。
        <br>主に使っている周辺ライブラリは express, apollo, sequelize, cheerio, passport です。`
      },

      {
        name: 'nuxt',
        label: 'Nuxt',
        imageSrc: '/images/skill-logo/nuxt.svg',
        carrier: {
          value: 6,
          unit: 'month',
          business: true,
          private: false,
          study: true
        },
        description: `経験は多くはありませんが基本的な仕組みや使い方は習得しています。
          <br>本サイトは nuxt を利用して構築しています。`
      },

      {
        name: 'functional-programming-ramda',
        label: 'Ramda',
        imageSrc: '/images/skill-logo/ramda.svg',
        carrier: {
          value: 2,
          unit: 'month',
          business: false,
          private: false,
          study: true
        },
        description: `
          宣言的で状態に依存しないコードを書くことを目指し、Ramda.js を使って関数型プログラミングを学習しています。
        `
      },

      {
        name: 'reactive-programming',
        label: 'Reactive Programming',
        imageSrc: '/images/skill-logo/rxjs.png',
        carrier: {
          value: 2,
          unit: 'month',
          business: false,
          private: false,
          study: true
        },
        description: `
          見通しの良いコードを書くことを目指し、 rxjs を使ってリアクティブプログラミングを学習しています。
        `
      },

      {
        name: 'atomic-design',
        label: 'Atomic Design',
        imageSrc: '/images/skill-logo/atomic-design.png',
        carrier: {
          value: 6,
          unit: 'month',
          business: false,
          private: true,
          study: true
        },
        description: `Atomic Design を利用した sketch デザインのシンボルから vue コンポーネントへ落とし込む作業をしながら学習しています。`
      },

      {
        name: 'openlayers',
        label: 'Open Layers',
        imageSrc: '/images/skill-logo/openlayers.svg',
        carrier: {
          value: 6,
          unit: 'month',
          business: true,
          private: false,
          study: false
        },
        description: `IOTデータ(量販店舗内の顧客移動経路の可視化)で利用しました。`
      },

      {
        name: 'aws',
        label: 'AWS',
        imageSrc: '/images/skill-logo/aws-logo.png',
        carrier: {
          value: 1,
          unit: 'year',
          business: false,
          private: true,
          study: false
        },
        description: `プライベートプロジェクトで利用しています。
        ec2, rds, vpc, alb を使って構築しています。`
      },

      {
        name: 'gcp',
        label: 'GCP',
        imageSrc: '/images/skill-logo/gcp-logo.png',
        carrier: {
          value: 2,
          unit: 'month',
          business: true,
          private: true,
          study: false
        },
        description: `terraform でアプリのエミュレータをクラウド上に構築した実務経験があります。
        gce, memorystore, cloud functions などの使用経験があります。`
      }
    ])
  }
}
