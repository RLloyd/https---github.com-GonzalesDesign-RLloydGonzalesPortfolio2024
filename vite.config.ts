// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

/**************************************************/
/* original setting w/o env */
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'

export default defineConfig({
   base: "https://www.rlloydgonzales.com/",
   plugins: [react(), tsconfigPaths()],
   resolve: {
      alias: [{ find: "@", replacement: "/src"}],
   }
})

/**************************************************/
/* with .env */
// import { defineConfig, loadEnv } from 'vite'

// export default defineConfig(({ command, mode }) => {
//   // Load env file based on `mode` in the current working directory.
//   // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
//   const env = loadEnv(mode, process.cwd(), '')
//   return {
//     // vite config
//     define: {
//       __APP_ENV__: JSON.stringify(env.APP_ENV),
//     },
//   }
// })
/**************************************************/