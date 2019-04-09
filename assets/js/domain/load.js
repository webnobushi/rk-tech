/**
 * @todo call firebase api
 */
export default {
  index() {
    return Promise.resolve([
      { date: '2019/4(個人開発)', rate: 1.0, },
      { date: '2019/5(個人開発)', rate: 0.8, },
      { date: '2019/6(個人開発)', rate: 0.8, },
    ])
  }
}
