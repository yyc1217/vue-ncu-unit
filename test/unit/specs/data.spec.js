import should from 'should'

let names = [
  'degrees',
  'colleges',
  'departments',
  'locales'
]

describe('資料都存在', () => {
  names.forEach((name) => {
    let data = require(`@/data/${name}`)
    it(name, () => {
      should(data).not.be.empty()
    })
  })
})
