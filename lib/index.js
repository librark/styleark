import * as url from 'node:url'
import styles from './styles.js'

export { styles }

if (import.meta.url.startsWith('file:')) {
  const modulePath = url.fileURLToPath(import.meta.url)
  if (process.argv[1] === modulePath) {
    console.info(styles)
  }
}
