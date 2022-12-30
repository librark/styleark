import { describe, expect, it } from '@jest/globals'
import styles from './styles.js'

describe('Styles', () => {
  it('builds a stylesheet of atomic css clasess', () => {
    expect(styles).toBeTruthy()
  })
})
