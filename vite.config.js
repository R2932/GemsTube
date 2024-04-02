import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path  from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Alias for the src directory
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@labels': path.resolve(__dirname, 'src/assets/Labels'),
      '@leftnav': path.resolve(__dirname, 'src/assets/LeftNav'),
      '@navbar': path.resolve(__dirname, 'src/assets/Navbar'),
      '@feed': path.resolve(__dirname, 'src/assets/Feed'),
      '@fetchvideo': path.resolve(__dirname, 'src/assets/FetchVideo'),
      '@home': path.resolve(__dirname, 'src/Home'),
      '@video': path.resolve(__dirname, 'src/Video'),
      '@loader': path.resolve(__dirname,'src/assets/Loader'),
      '@searchbar':path.resolve(__dirname,'src/assets/Searchbar')
    },
  },
})
