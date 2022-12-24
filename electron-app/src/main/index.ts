import { app } from 'electron'
import { getColorHex } from '@sivi/sample-lib'

import { makeAppSetup, makeAppWithSingleInstanceLock } from './factories'
import { MainWindow, registerAboutWindowCreationByIPC } from './windows'

makeAppWithSingleInstanceLock(async () => {
  await app.whenReady()
  await makeAppSetup(MainWindow)
  console.log(getColorHex('purple'))

  registerAboutWindowCreationByIPC()
})
