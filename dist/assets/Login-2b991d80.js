import{ac as x,E as a,j as e,k as n}from"./render-d5b6b10e.js";import{b as q,w as y,x as N,m}from"./index-c4545837.js";import{F as o}from"./index-1b5d2de5.js";import{I as p}from"./index-d6a4ba23.js";import{B as d}from"./button-419145c3.js";import{R as b}from"./row-d1ac2986.js";import{C}from"./col-d8e98c0a.js";import"./useFlexGapSupport-a785865b.js";import"./index-d48a2202.js";import"./colors-1216520c.js";import"./index-6b4c7132.js";const F="_login_xi6qs_1",v="_header_xi6qs_7",w="_desc_xi6qs_36",I="_main_xi6qs_42",k="_users_xi6qs_47",i={login:F,header:v,"header-logo":"_header-logo_xi6qs_16","icon-react":"_icon-react_xi6qs_16","icon-icon-test":"_icon-icon-test_xi6qs_17","icon-typescript":"_icon-typescript_xi6qs_18","header-title":"_header-title_xi6qs_31",desc:w,main:I,users:k},T=[{email:"huangrong@imooc.com",pass:"huangrong"},{email:"hongqigong@imooc.com",pass:"hongqigong"}];function z(){const h=x(),t=q(),[r]=o.useForm(),c=s=>{t(y(s)).then(_=>{const{errcode:f,token:l}=_.payload.data;f===0&&typeof l=="string"?(t(N(l)),m.success("登录成功"),h("/")):m.error("登录失败")})},g=({values:s})=>{},u=s=>()=>{r.setFieldsValue(s),c(s)};return a("div",{className:i.login,children:[a("div",{className:i.header,children:[a("span",{className:i["header-logo"],children:[e("i",{className:n("iconfont icon-react",i["icon-react"])}),e("i",{className:n("iconfont icon-icon-test",i["icon-icon-test"])}),e("i",{className:n("iconfont icon-typescript",i["icon-typescript"])})]}),e("span",{className:i["header-title"],children:"在线考勤系统"})]}),e("div",{className:i.desc,children:"React + Typescript"}),a(o,{name:"basic",labelCol:{span:6},wrapperCol:{span:18},style:{maxWidth:600},initialValues:{remember:!0},onFinish:c,onFinishFailed:g,autoComplete:"off",className:i.main,form:r,children:[e(o.Item,{label:"邮箱",name:"email",rules:[{required:!0,message:"请输入邮箱"},{type:"email",message:"请输入正确的邮箱地址"}],children:e(p,{placeholder:"请输入邮箱"})}),e(o.Item,{label:"密码",name:"pass",rules:[{required:!0,message:"请输入密码"}],children:e(p.Password,{placeholder:"请输入密码",visibilityToggle:!1})}),e(o.Item,{wrapperCol:{offset:6,span:18},children:e(d,{type:"primary",htmlType:"submit",children:"登录"})})]}),e("div",{className:i.users,children:e(b,{gutter:20,children:T.map(s=>a(C,{span:12,children:[a("h3",{children:["测试账号：",e(d,{onClick:u({email:s.email,pass:s.pass}),children:"一键登录"})]}),a("p",{children:["用户：",s.pass]}),e("p",{children:"密码：********"})]},s.email))})})]})}export{z as default};