import {myLib} from '../src/my-lib'
import {describe, it, expect, jest} from 'vitest'

describe('my-lib', () => {
  it('should log a message', () => {
    console.log = jest.fn()
    myLib()
    expect(console.log).toHaveBeenCalledTimes(1)
    expect(console.log).toHaveBeenCalledWith('Hello from my-lib!')
  })
})
