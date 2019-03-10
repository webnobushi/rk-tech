/**
 * @todo call firebase api
 */
export default {
  index() {
    return Promise.resolve([
      {
        from: '2004.4',
        to: '2013.4',
        company: 'TIS Co., ltd.',
        role: 'System Engineer'
      },
      {
        from: '2013.5',
        to: '2016.4',
        company: 'Skeed Co., ltd.',
        role: 'Java Programmer',
      },
      {
        from: '2016.5',
        to: 'as of today',
        company: 'Freelance',
        role: 'Frontend Engineer',
      },
    ])
  }
}
