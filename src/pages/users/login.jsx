import React, { useState } from "react";
import AccountLogin from "./component/AccountLogin";
import SmCodeLogin from "./component/SmCodeLogin";
import { Form, Button, Input, Row, Col } from "antd";
import IconMap from "components/IconMap";
import logoImg from 'common/img/logo.svg'
import './css/login.less'
const FormItem = Form.Item;
export default function login() {
  const [form] = Form.useForm();
  const [type, setType] = useState(0);
  // 表单提交事件
  const submitUserInfo = (data) => {
    console.log(data, "data");
  };
  //组件选择的容器函数
  const componentSelector = (props) => {
   return  !type ? <AccountLogin {...props}/> : <SmCodeLogin {...props}/>;
  }
  return (
    <div className="form">
      <div className="logo">
        <img src={logoImg} alt="" />
        <span>人事管理系统</span>
      </div>
      <Form form={form} onFinish={submitUserInfo}>
        {/* 选择当前展示的组件名 */}
        {componentSelector({form, FormItem, Input, Button})}
        <Row>
          <Button block={true} type="primary">登录</Button>
        </Row>
        <Row className="ft-12">
         <Col span={6}>忘记密码？</Col>
         <Col span={18} className="align-right" onClick={() => {setType(!type ? 1 : 0)}}>
          { !type ? '使用手机号登录' : '使用账户名进行登录'}
          {IconMap.arrRowRight}
          </Col>
        </Row>
      </Form>
    </div>
  );
}
