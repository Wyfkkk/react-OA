/*
 * @Author: Wyfkkk 2224081986@qq.com
 * @Date: 2024-10-08 17:23:37
 * @LastEditors: Wyfkkk 2224081986@qq.com
 * @LastEditTime: 2024-10-08 18:45:21
 * @FilePath: \react项目\my-app\src\pages\users\component\AccountLogin.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import IconMap from "components/IconMap";
import { loginRule } from "utils/rules/loginRule";

export default function AccountLogin({ Input, FormItem }) {
  console.log(loginRule, "rile");
  return (
    <>
      <FormItem name="accountName" rules={loginRule.userRule} hasFeedback>
        <Input placeholder="请输入用户名" prefix={IconMap.userIcon}></Input>
      </FormItem>
      <FormItem name="password" rules={loginRule.passwordRule} hasFeedback>
        <Input placeholder="请输入密码名" type="password" prefix={IconMap.password}></Input>
      </FormItem>
    </>
  );
}
