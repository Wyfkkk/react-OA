/*
 * @Author: Wyfkkk 2224081986@qq.com
 * @Date: 2024-10-08 17:23:52
 * @LastEditors: Wyfkkk 2224081986@qq.com
 * @LastEditTime: 2024-10-08 23:36:38
 * @FilePath: \react项目\my-app\src\pages\users\component\SmCodeLogin.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, {useState} from 'react'
import IconMap from 'components/IconMap'
import { loginRule } from "utils/rules/loginRule";
export default function SmCodeLogin({FormItem, Input, Button, form}) {
    const [disabled, setDisabled] = useState(true) ;
    let [currentTime, setCurrentTime] = useState(3);
    const [currentStatus, setCurrentStatus] = useState(true);
    // 检测手机号是否成功
    const checkedMobile = async (val) => {
        try {
            const data = await form.validateFields()
            setDisabled(false)
        } catch(err) {
            setDisabled(true)
        }
    }
    // 处理倒计时
    const runTime = () => {
        const timer = setInterval(() => {
            //console.log(currentTime, 'currentTime');
            if(currentTime === 0) {
                clearInterval(timer);
                setCurrentStatus(true);
                setDisabled(false)
                setCurrentTime(3)
                return
            }
            setCurrentTime(currentTime--)
        }, 1000)
    }
    const _sendSmCode = () => {
        // 显示目前发送中
        setCurrentStatus(false)
        setDisabled(true)
        runTime()
    }
  return (
    <>
       <FormItem name="mobile" rules={loginRule.mobileRule} hasFeedback>
            <Input placeholder="请输入手机号" prefix={IconMap.mobileIcon} onChange={checkedMobile}></Input>
        </FormItem>
        <FormItem hasFeedback>
            <Input 
                placeholder="请输入验证码" 
                prefix={IconMap.codeIcon}
                addonAfter={<Button disabled={disabled} onClick={_sendSmCode}>{currentStatus ? '发送验证码' : `${currentTime}秒后重新发送`}</Button>}
                ></Input>
        </FormItem>
    </>
  )
}
