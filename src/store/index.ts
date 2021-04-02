import {App} from 'vue'
import {createStore, createLogger, Plugin} from 'vuex'

import {isDevMode} from '/@/utils/env'

const isDev = isDevMode()
const plugins: Plugin<any>[] = isDev ? [createLogger()] : []

const store = createStore({
  strict: isDev,
  plugins,
})

export function setupStore(app: App): void {
  app.use(store)
}
