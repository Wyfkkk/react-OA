/*
 * @Author: Wyfkkk 2224081986@qq.com
 * @Date: 2024-10-08 23:04:00
 * @LastEditors: Wyfkkk 2224081986@qq.com
 * @LastEditTime: 2024-10-08 23:16:57
 * @FilePath: \react项目\my-app\src\utils\rules\loginRule.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const loginRule = {
    userRule: [
        {required: true, message: '名字不为空！'},
        {max: 16, message:'长度不正确'}
    ],
    passwordRule: [
        {required: true, message: '密码不为空！'},
        {max: 16, message:'长度不正确'}
    ],
    mobileRule: [
        {
            validator: (rule, val) => {
                const mobileReg = /^1[3|4|5|6|7|8][0-9]\d{8}$/;
                switch (true) {
                    case !Boolean(val): 
                        return Promise.reject('手机号不能为空')
                    case !mobileReg.test(val): 
                        return Promise.reject("格式不对u")
                    default:
                        return Promise.resolve()
                }
            }
        }
    ]
}