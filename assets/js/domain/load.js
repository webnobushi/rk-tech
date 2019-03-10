/**
 * @todo call firebase api
 */
export default {
  index() {
    return Promise.resolve([
      { date: '2019/3(LUXA)', rate: .7, },
      { date: '2019/4(個人開発)', rate: .7, },
      { date: '2019/5(個人開発)', rate: .7, },
      { date: '2019/6(個人開発)', rate: .7, },
    ])
  }
}
