/**
 * @todo call firebase api
 */
export default {
  index() {
    return Promise.resolve([
      { date: '2019/10', rate: 1.0, },
      { date: '2019/11', rate: 0.7, },
      { date: '2019/12', rate: 0.7, },
      { date: '2020/01', rate: 0.7, },
      { date: '2020/02', rate: 0.7, },
    ])
  }
}
