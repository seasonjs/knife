import {defineConfig} from "vite";
import {resolve} from "node:path"
import {builtinModules} from 'node:module'

export default defineConfig(() => {
  const builtins = builtinModules.filter(e => !e.startsWith('_'));
  builtins.push(...builtins.map(m => `node:${m}`))

  return {
    build: {
      lib: {
        // Could also be a dictionary or array of multiple entry points
        entry: {
          'index': resolve(__dirname, 'src/index.ts'),
          'node/index': resolve(__dirname, 'src/node/index.ts')
        },

      },
      rollupOptions: {
        external: builtins,
        output:{
          preserveModules: true,
        },
      },
    },
  }
})
