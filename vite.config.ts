import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src'],
      exclude: ['**/*.stories.tsx', '**/*.test.tsx']
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'TafuUI',
      formats: ['es', 'cjs'],
      fileName: (format) => `tafu-ui-design.${format === 'es' ? 'mjs' : 'cjs'}`
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'framer-motion',
        '@phosphor-icons/react',
        'react-router-dom'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
          'framer-motion': 'FramerMotion',
          '@phosphor-icons/react': 'PhosphorIcons',
          'react-router-dom': 'ReactRouterDOM'
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'tafu-ui-design.css'
          return assetInfo.name || 'assets/[name][extname]'
        }
      }
    },
    cssCodeSplit: false,
    sourcemap: true
  }
})
