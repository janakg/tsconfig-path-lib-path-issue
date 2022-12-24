import { PropsWithChildren } from 'react'
import { getColorHex } from '@sivi/sample-lib'

import styles from './styles.module.sass'

export function Container({ children }: PropsWithChildren<{}>) {
  console.log(getColorHex('yellow'))
  return <section className={styles.container}>{children}</section>
}
