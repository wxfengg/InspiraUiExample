import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import AutoImport from "unplugin-auto-import/vite" // VueApi自动导入
import Components from "unplugin-vue-components/vite" // Vue组件自动导入

// https://vite.dev/config/
export default defineConfig({
  // 使用@ 代替/src
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  plugins: [
    vue(),
    tailwindcss(),
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        'pinia',
      ],
      dts: 'src/types/auto-imports.d.ts', // 自动导入声明文件
      eslintrc: {
        enabled: true, // 启用 ESLint 配置文件生成
        filepath: './.eslintrc-auto-import.json', // ESLint 配置文件路径
      },
      vueTemplate: true, // 支持 Vue 模板中的自动导入
      // 例如：添加 Element Plus 的自动导入
      // resolvers: [ElementPlusResolver()],
      // 例如：添加 Ant Design Vue 的自动导入
      // resolvers: [AntDesignVueResolver()],
      // 例如：添加 Naive UI 的自动导入
      // resolvers: [NaiveUiResolver()],
    }),
    Components({
      resolvers:[],
      // 指定自定义组件位置(默认:src/components)
      dirs: ["src/components", "src/**/components"],
      dts: "src/types/components.d.ts",
    })
  ],
})
