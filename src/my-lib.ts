import path from 'node:path'

export function myLib() {
  console.log('Hello from my-lib!')
}

export const isPathString = (test: string): boolean =>
  path.posix.basename(test) !== test || path.win32.basename(test) !== test
