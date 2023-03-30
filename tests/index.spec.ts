import { Example } from '@/domain/use-cases/example'

describe('Example', () => {
  const sut = new Example()
  it('Should return correct value 1', () => {
    expect(sut.print()).toBe('Hello there')
  })
  it('Should return correct value 1', () => {
    expect(sut.print('dev')).toBe('Hello DEV')
  })
})
