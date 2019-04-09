/**
 * @todo call firebase api
 */
export default {
  index() {
    return Promise.resolve([
      {
        name: 'luxa',
        label: 'Luxa',
        url: 'https://luxa.jp',
        imageSrc: {
          mobile: '/images/projects/luxa.mobile.png',
          pc: '/images/projects/luxa.pc.png',
        },
        term: '2018.2 ~ 2019.3',
        skills: ['vue', 'vuex'],
        tags: ['e-commerce'],
        isWork: true,
        description: 'サービスサイトを担当しました。',
      },
      {
        name: 'mode.luxa',
        label: 'Luxa Mode',
        url: 'https://mode.luxa.jp',
        imageSrc: {
          mobile: '/images/projects/mode.luxa.mobile.png',
          pc: '/images/projects/mode.luxa.pc.png',
        },
        term: '2017.6 ~ 2018.1',
        skills: ['vue', 'vuex'],
        tags: ['e-commerce'],
        isWork: true,
        description: 'サービスサイトを担当しました。',
      },

      {
        name: 'iot-visualization',
        label: 'IOT Visualization',
        url: '',
        imageSrc: {
          pc: '/images/projects/iot.gif',
        },
        term: '2018.6 ~ 2019.1',
        skills: ['vue', 'openlayers', 'canvas'],
        tags: ['iot'],
        isWork: true,
        description: '店舗内の顧客の移動経路のIOTデータをアニメーションで可視化する画面を実装しました。',
      },

      {
        name: 'laig',
        label: 'Laig',
        url: 'https://laig.jp',
        imageSrc: {
          mobile: '/images/projects/laig.mobile.png',
          pc: '/images/projects/laig.pc.png',
        },
        term: '2017.2 ~ 2017.10',
        skills: ['vue', 'vuex', 'graphql'],
        tags: ['cms', 'e-commerce', 'spa'],
        isWork: true,
        description: 'CMS管理画面とサービスサイトの一部を担当しました。',
      },

      {
        name: 'rekishi-kan',
        label: '歴史館(in dev)',
        url: 'https://rekishi-kan.jp',
        imageSrc: {
          pc: '/images/projects/rekishi-kan.pc.png',
          mobile: '/images/projects/rekishi-kan.mobile.png',
        },
        term: '2018.1 ~ as of today',
        skills: ['vue', 'graphql', 'nodejs', 'aws', 'sequelize'],
        tags: ['キュレーション'],
        isWork: false,
        description: '歴史情報のキュレーションサイトをコツコツと開発しています。',
      },

      {
        name: 'rk-tech',
        label: '本サイト(github)',
        url: 'https://github.com/webnobushi/rk-tech',
        term: '2019.2 ~ as of today',
        imageSrc: {
          pc: '/images/projects/portfolio.pc.png',
        },
        skills: ['vue', 'nuxt', 'firebase', 'Ramda.js', 'RxJS'],
        tags: ['portfolio'],
        isWork: false,
        description: 'スキルアップのため sandbox の位置付けで色々試しています。',
      },
    ])
  }
}
