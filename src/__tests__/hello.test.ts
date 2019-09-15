import { hello } from '../handler'

test(`hello 'World'`, () => {
  expect(hello({}).payload)
    .toBe('Hello, World!')
})

test(`Leonel Richie`, () => {
  expect(hello({name: 'is it me you\'re looking for?'}).payload)
    .toBe('Hello, is it me you\'re looking for?!')
})
