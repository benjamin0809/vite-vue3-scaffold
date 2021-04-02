import { UserConfig } from 'vite'
import { createMockServer } from 'vite-plugin-mock'
import { resolve, loadEnv } from './build/utils'
import { createVitePlugins } from './build/vite/plugin'
import { createProxy } from './build/vite/proxy'

const viteEnv = loadEnv()
const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY } = viteEnv

const viteConfig: UserConfig = {
  port: VITE_PORT,
  base: VITE_PUBLIC_PATH,
  alias: {
    '/@/': resolve('src'),
    '/@components/': resolve('./src/components'),
  },
  proxy: createProxy(VITE_PROXY),
  plugins: createVitePlugins(viteEnv),
}

export default viteConfig
