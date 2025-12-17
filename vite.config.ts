import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths' 
import tagger from '@dhiwise/component-tagger'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  const isDev = mode === 'development';

  return {
    build: {
      chunkSizeWarningLimit: 2000,
    },
    
    plugins: [
      tsconfigPaths(), 
      react(), 
      tagger()
    ],
    
    server: isDev
      ? {
          // port: 4028,
          // host: "0.0.0.0",
          // strictPort: true,
          // allowedHosts: ['.amazonaws.com', '.builtwithrocket.new'],
          proxy: {
            '/api': {
              target: env.VITE_BASE_HOST,
              changeOrigin: true,
              secure: false,
            },
          },
        }
      : undefined,
  };
});