/*
 * @Author: Wyfkkk 2224081986@qq.com
 * @Date: 2024-10-08 00:48:28
 * @LastEditors: Wyfkkk 2224081986@qq.com
 * @LastEditTime: 2024-10-08 18:00:32
 * @FilePath: \react项目\my-app\.umirc.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from "umi";
// 路径别名映射
const {resolve} = require('path')
export default defineConfig({
  // routes: [
  //   { path: "/", component: "index" },
  //   { path: "/docs", component: "docs" },
  // ],
  alias: {
    utils: resolve(__dirname, './src/utils'),
    components: resolve(__dirname, './src/components'),
    common: resolve(__dirname, './src/common'),
    
  },
  npmClient: 'npm',
});
