/*
 * @Author: Wyfkkk 2224081986@qq.com
 * @Date: 2024-10-08 12:21:27
 * @LastEditors: Wyfkkk 2224081986@qq.com
 * @LastEditTime: 2024-10-08 12:33:24
 * @FilePath: \react项目\my-app\src\pages\user\[id].jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import { useParams } from 'umi';
export default function index(props) {
  console.log(useParams(), 'props');
  return (
    <div>
      uuser page
    </div>
  )
}
