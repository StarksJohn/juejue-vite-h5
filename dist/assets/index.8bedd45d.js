var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,l=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,o=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&l(e,a,t[a]);if(n)for(var a of n(t))r.call(t,a)&&l(e,a,t[a]);return e};"undefined"!=typeof require&&require;import{a as c,T as i,r as m,R as p,P as d,I as u,c as _,b as E,D as h,d as y,e as v,K as f,u as g,C as w,f as x,g as N,B as b,M as k,h as S,_ as C,i as j,j as z,t as M,N as A,k as R,q as Y,l as q,F as I,m as T,n as W,o as F,p as D,s as O,v as $,w as B,S as P,x as L,y as K,z as H,A as U,E as X}from"./vendor.1c4e4ab8.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();c.defaults.baseURL="http://api.xxx.wang",c.defaults.withCredentials=!0,c.defaults.headers["Access-Control-Allow-Credentials"]=!0,c.defaults.headers["X-Requested-With"]="XMLHttpRequest",c.defaults.headers["Access-Control-Allow-Origin"]="https://www.douyacun.com",c.defaults.headers.Authorization=`${localStorage.getItem("token")||null}`,c.defaults.headers.post["Content-Type"]="application/json",c.interceptors.request.use((e=>(console.log("axios.js request config=",e),e)),(e=>(console.log("axios.ts interceptors.request error=",e),Promise.reject(e)))),c.interceptors.response.use((e=>"object"!=typeof e.data?(i.show("服务端异常！"),Promise.reject(e)):200!==e.data.code?(e.data.msg&&i.show(e.data.msg),401===e.data.code&&(window.location.href="/login"),413===e.data.code&&i.show("图片不得超过 50kb"),Promise.reject(e.data)):e.data));const Z="http://api.chennick.wang",G=c.get,J=c.post,Q={1:{icon:"canyin"},2:{icon:"fushi"},3:{icon:"jiaotong"},4:{icon:"riyong"},5:{icon:"gouwu"},6:{icon:"xuexi"},7:{icon:"yiliao"},8:{icon:"lvxing"},9:{icon:"renqing"},10:{icon:"qita"},11:{icon:"gongzi"},12:{icon:"jiangjin"},13:{icon:"zhuanzhang"},14:{icon:"licai"},15:{icon:"tuikuang"},16:{icon:"qita"}},V=0,ee=3,te=4,ae=0,ne=2,se=3,re=e=>e&&e.startsWith("http")?e:e=`${Z}${e}`;var le="_popup-type_4v4ui_1",oe="_header_4v4ui_7",ce="_cross_4v4ui_20",ie="_content_4v4ui_28",me="_all_4v4ui_31",pe="_title_4v4ui_38",de="_expense-wrap_4v4ui_43",ue="_income-wrap_4v4ui_44",_e="_active_4v4ui_58";const Ee=m.exports.forwardRef((({onSelect:e},t)=>{const[a,n]=m.exports.useState(!1),[s,r]=m.exports.useState("all"),[l,o]=m.exports.useState([]),[c,i]=m.exports.useState([]);m.exports.useEffect((()=>{(async()=>{const{data:{list:e}}=await G("/api/type/list");o(e.filter((e=>1==e.type))),i(e.filter((e=>2==e.type)))})()}),[]),t&&(t.current={show:()=>{n(!0)},close:()=>{n(!1)}});const E=t=>{r(t.id),n(!1),e(t)};return p.createElement(d,{visible:a,direction:"bottom",onMaskClick:()=>n(!1),destroy:!1,mountContainer:()=>document.body},p.createElement("div",{className:le},p.createElement("div",{className:oe},"请选择类型",p.createElement(u,{type:"wrong",className:ce,onClick:()=>n(!1)})),p.createElement("div",{className:ie},p.createElement("div",{onClick:()=>E({id:"all"}),className:_({[me]:!0,[_e]:"all"==s})},"全部类型"),p.createElement("div",{className:pe},"支出"),p.createElement("div",{className:de},l.map(((e,t)=>p.createElement("p",{key:t,onClick:()=>E(e),className:_({[_e]:s==e.id})},e.name)))),p.createElement("div",{className:pe},"收入"),p.createElement("div",{className:ue},c.map(((e,t)=>p.createElement("p",{key:t,onClick:()=>E(e),className:_({[_e]:s==e.id})},e.name)))))))}));Ee.propTypes={onSelect:E.func};const he=m.exports.forwardRef((({onSelect:e,mode:t="date"},a)=>{const[n,s]=m.exports.useState(!1),[r,l]=m.exports.useState(new Date);return a&&(a.current={show:()=>{s(!0)},close:()=>{s(!1)}}),p.createElement(d,{visible:n,direction:"bottom",onMaskClick:()=>s(!1),destroy:!1,mountContainer:()=>document.body},p.createElement("div",null,p.createElement(h,{visible:n,value:r,mode:t,onOk:a=>{l(a),s(!1),"month"==t?e(y(a).format("YYYY-MM")):"date"==t&&e(y(a).format("YYYY-MM-DD"))},onCancel:()=>s(!1)})))}));he.propTypes={mode:E.string,onSelect:E.func};var ye=u.createFromIconfont("//at.alicdn.com/t/font_2236655_w1mpqp7n1ni.js");var ve={addWrap:"_add-wrap_11omu_1",header:"_header_11omu_7",close:"_close_11omu_10",filter:"_filter_11omu_15",type:"_type_11omu_21",expense:"_expense_11omu_30",active:"_active_11omu_33",income:"_income_11omu_38",time:"_time_11omu_43",arrow:"_arrow_11omu_52",money:"_money_11omu_56",sufix:"_sufix_11omu_61",amount:"_amount_11omu_66",typeWarp:"_type-warp_11omu_70",typeBody:"_type-body_11omu_79",typeItem:"_type-item_11omu_83",iconfontWrap:"_iconfont-wrap_11omu_90",iconfont:"_iconfont_11omu_90",remark:"_remark_11omu_116"};const fe=m.exports.forwardRef((({detail:e={},onReload:t},a)=>{const n=m.exports.useRef(),s=e&&e.id,[r,l]=m.exports.useState(!1),[o,c]=m.exports.useState("expense"),[E,h]=m.exports.useState([]),[g,w]=m.exports.useState([]),[x,N]=m.exports.useState({}),[b,k]=m.exports.useState(""),[S,C]=m.exports.useState(""),[j,z]=m.exports.useState(!1),[M,A]=m.exports.useState(new Date);m.exports.useEffect((()=>{e.id&&(c(1==e.pay_type?"expense":"income"),N({id:e.type_id,name:e.type_name}),C(e.remark),k(e.amount),A(y(Number(e.date)).$d))}),[e]),a&&(a.current={show:()=>{l(!0)},close:()=>{l(!1)}}),m.exports.useEffect((async()=>{const{data:{list:e}}=await G("/api/type/list"),t=e.filter((e=>1==e.type)),a=e.filter((e=>2==e.type));h(t),w(a),s||N(t[0])}),[]);const R=e=>{c(e),N("expense"==e?E[0]:g[0])},Y=async()=>{if(!b)return void i.show("请输入具体金额");const e={amount:Number(b).toFixed(2),type_id:x.id,type_name:x.name,date:1e3*y(M).unix(),pay_type:"expense"==o?1:2,remark:S||""};s?(e.id=s,await J("/api/bill/update",e),i.show("修改成功")):(await J("/api/bill/add",e),k(""),c("expense"),N(E[0]),A(new Date),C(""),i.show("添加成功")),l(!1),t&&t()};return p.createElement(d,{visible:r,direction:"bottom",onMaskClick:()=>l(!1),destroy:!1,mountContainer:()=>document.body},p.createElement("div",{className:ve.addWrap},p.createElement("header",{className:ve.header},p.createElement("span",{className:ve.close,onClick:()=>l(!1)},p.createElement(u,{type:"wrong"}))),p.createElement("div",{className:ve.filter},p.createElement("div",{className:ve.type},p.createElement("span",{onClick:()=>R("expense"),className:_({[ve.expense]:!0,[ve.active]:"expense"==o})},"支出"),p.createElement("span",{onClick:()=>R("income"),className:_({[ve.income]:!0,[ve.active]:"income"==o})},"收入")),p.createElement("div",{className:ve.time,onClick:()=>{n.current&&n.current.show()}},y(M).format("MM-DD")," ",p.createElement(u,{className:ve.arrow,type:"arrow-bottom"}))),p.createElement("div",{className:ve.money},p.createElement("span",{className:ve.sufix},"¥"),p.createElement("span",{className:_(ve.amount,ve.animation)},b)),p.createElement("div",{className:ve.typeWarp},p.createElement("div",{className:ve.typeBody},("expense"==o?E:g).map((e=>p.createElement("div",{onClick:()=>(e=>{N(e)})(e),key:e.id,className:ve.typeItem},p.createElement("span",{className:_({[ve.iconfontWrap]:!0,[ve.expense]:"expense"==o,[ve.income]:"income"==o,[ve.active]:x.id==e.id})},p.createElement(ye,{className:ve.iconfont,type:Q[e.id].icon})),p.createElement("span",null,e.name)))))),p.createElement("div",{className:ve.remark},j?p.createElement(v,{autoHeight:!0,showLength:!0,maxLength:50,type:"text",rows:3,value:S,placeholder:"请输入备注信息",onChange:e=>C(e),onBlur:()=>z(!1)}):p.createElement("span",{onClick:()=>z(!0)},S||"添加备注")),p.createElement(f,{type:"price",onKeyClick:e=>(e=>{if("close"!=(e=String(e)))if("delete"!=e)"ok"!=e?"."==e&&b.includes(".")||"."!=e&&b.includes(".")&&b&&b.split(".")[1].length>=2||k(b+e):Y();else{let e=b.slice(0,b.length-1);k(e)}})(e)}),p.createElement(he,{ref:n,onSelect:e=>{A(e)}})))}));fe.propTypes={detail:E.object,onReload:E.func};var ge={item:"_item_mkxeh_1",headerDate:"_header-date_mkxeh_7",date:"_date_mkxeh_18",money:"_money_mkxeh_22",itemIcon:"_item-icon_mkxeh_37"};const we=({bill:e})=>{const[t,a]=m.exports.useState(0),[n,s]=m.exports.useState(0),r=g();m.exports.useEffect((()=>{const t=e.bills.filter((e=>2==e.pay_type)).reduce(((e,t)=>e+=Number(t.amount)),0);a(t);const n=e.bills.filter((e=>1==e.pay_type)).reduce(((e,t)=>e+=Number(t.amount)),0);s(n)}),[e.bills]);return p.createElement("div",{className:ge.item},p.createElement("div",{className:ge.headerDate},p.createElement("div",{className:ge.date},e.date),p.createElement("div",{className:ge.money},p.createElement("span",null,p.createElement("img",{src:"//s.yezgea02.com/1615953405599/zhi%402x.png",alt:"支"}),p.createElement("span",null,"¥",n.toFixed(2))),p.createElement("span",null,p.createElement("img",{src:"//s.yezgea02.com/1615953405599/shou%402x.png",alt:"收"}),p.createElement("span",null,"¥",t.toFixed(2))))),e&&e.bills.sort(((e,t)=>t.date-e.date)).map((e=>p.createElement(w,{className:ge.bill,key:e.id,onClick:()=>(e=>{r.push(`/detail?id=${e.id}`)})(e),title:p.createElement(p.Fragment,null,p.createElement(ye,{className:ge.itemIcon,type:e.type_id?Q[e.type_id].icon:1}),p.createElement("span",null,e.type_name)),description:p.createElement("span",{style:{color:2==e.pay_type?"red":"#39be77"}},`${1==e.pay_type?"-":"+"}${e.amount}`),help:p.createElement("div",null,y(Number(e.date)).format("HH:mm")," ",e.remark?`| ${e.remark}`:"")}))))};we.propTypes={bill:E.object};var xe="_empty_1wb2f_1";const Ne=({desc:e})=>p.createElement("div",{className:xe},p.createElement("img",{src:"//s.yezgea02.com/1619144597039/empty.png",alt:"暂无数据"}),p.createElement("div",null,e||"暂无数据"));Ne.propTypes={desc:E.string};var be={home:"_home_pyrz3_1",header:"_header_pyrz3_7",dataWrap:"_data-wrap_pyrz3_22",income:"_income_pyrz3_33",typeWrap:"_type-wrap_pyrz3_36",left:"_left_pyrz3_48",arrow:"_arrow_pyrz3_51",contentWrap:"_content-wrap_pyrz3_55",add:"_add_pyrz3_65"};var ke={data:"_data_f4sv2_1",total:"_total_f4sv2_5",time:"_time_f4sv2_13",date:"_date_f4sv2_35",title:"_title_f4sv2_39",expense:"_expense_f4sv2_45",income:"_income_f4sv2_51",structure:"_structure_f4sv2_55",head:"_head_f4sv2_60",tab:"_tab_f4sv2_70",active:"_active_f4sv2_80",content:"_content_f4sv2_88",item:"_item_f4sv2_88",left:"_left_f4sv2_93",type:"_type_f4sv2_100",name:"_name_f4sv2_115",right:"_right_f4sv2_124",percent:"_percent_f4sv2_129",momey:"_momey_f4sv2_135",proportion:"_proportion_f4sv2_138"};let Se=null;var Ce={user:"_user_2wwvo_1",head:"_head_2wwvo_5",info:"_info_2wwvo_14",content:"_content_2wwvo_33",logout:"_logout_2wwvo_43"};var je="_auth_kpur3_1",ze="_head_kpur3_5",Me="_tab_kpur3_16",Ae="_avtive_kpur3_25",Re="_form_kpur3_30",Ye="_operation_kpur3_39",qe="_agree_kpur3_42";var Ie,Te={namespace:"userModel",state:{access_token:"",member_id:""},attributesToBeCached:["access_token"],effects:{saveSomeThing:`userModel/${S.baseEffects.saveSomeThing}`,awaitSaveSomeThing:`userModel/${S.baseEffects.awaitSaveSomeThing}`},reducers:{},action:(Ie=o({},S.baseAction),t(Ie,a({access_token:"access_token"})))};const We=(console.log("dva initDva() "),C([Te])),Fe=Te;var De="_header-warp_12wcp_1",Oe="_block_12wcp_4",$e="_header_12wcp_1";const Be=({title:e=""})=>{const t=g();return p.createElement("div",{className:De},p.createElement("div",{className:Oe},p.createElement(A,{className:$e,left:p.createElement(u,{type:"arrow-left",theme:"primary",onClick:()=>t.goBack()}),title:e})))};Be.propTypes={title:E.string};var Pe={detail:"_detail_1wagh_1",card:"_card_1wagh_8",type:"_type_1wagh_16",expense:"_expense_1wagh_29",income:"_income_1wagh_32",iconfont:"_iconfont_1wagh_35",amount:"_amount_1wagh_38",info:"_info_1wagh_43",time:"_time_1wagh_48",remark:"_remark_1wagh_61",operation:"_operation_1wagh_75",vanIcon:"_van-icon_1wagh_82"};var Le="_account_u7md4_1",Ke="_form_u7md4_4",He="_btn_u7md4_9";var Ue=q()((e=>{const{getFieldProps:t,getFieldError:a}=e.form;return p.createElement(p.Fragment,null,p.createElement(Be,{title:"重制密码"}),p.createElement("div",{className:Le},p.createElement("div",{className:Ke},p.createElement(w,{title:"原密码"},p.createElement(v,o({clearable:!0,type:"text",placeholder:"请输入原密码"},t("oldpass",{rules:[{required:!0}]})))),p.createElement(w,{title:"新密码"},p.createElement(v,o({clearable:!0,type:"text",placeholder:"请输入新密码"},t("newpass",{rules:[{required:!0}]})))),p.createElement(w,{title:"确认密码"},p.createElement(v,o({clearable:!0,type:"text",placeholder:"请再此输入新密码确认"},t("newpass2",{rules:[{required:!0}]}))))),p.createElement(b,{className:He,block:!0,theme:"primary",onClick:()=>{e.form.validateFields((async(e,t)=>{if(!e){if(console.log(t),t.newpass!=t.newpass2)return void i.show("新密码输入不一致");await J("/api/user/modify_pass",{old_pass:t.oldpass,new_pass:t.newpass,new_pass2:t.newpass2}),i.show("修改成功")}}))}},"提交")))}));var Xe="_about_1urnl_1";var Ze={userinfo:"_userinfo_1wov8_1",item:"_item_1wov8_8",title:"_title_1wov8_12",avatar:"_avatar_1wov8_16",avatarUrl:"_avatar-url_1wov8_20",desc:"_desc_1wov8_26",upload:"_upload_1wov8_32",signature:"_signature_1wov8_35"};const Ge={home:{path:"/",component:()=>{const e=m.exports.useRef(),t=m.exports.useRef(),a=m.exports.useRef(),[n,s]=m.exports.useState(0),[r,l]=m.exports.useState(0),[o,c]=m.exports.useState({}),[i,d]=m.exports.useState(y().format("YYYY-MM")),[_,E]=m.exports.useState(1),[h,v]=m.exports.useState([]),[f,g]=m.exports.useState(0),[w,N]=m.exports.useState(V),[b,k]=m.exports.useState(ae);m.exports.useEffect((()=>{S()}),[_,o,i]);const S=async()=>{const{data:e}=await G(`/api/bill/list?date=${i}&type_id=${o.id||"all"}&page=${_}&page_size=5`);v(1==_?e.list:h.concat(e.list)),s(e.totalExpense.toFixed(2)),l(e.totalIncome.toFixed(2)),g(e.totalPage),k(se),N(te)},C=()=>{N(ee),1!=_?E(1):S()};return p.createElement("div",{className:be.home},p.createElement("div",{className:be.header},p.createElement("div",{className:be.dataWrap},p.createElement("span",{className:be.expense},"总支出：",p.createElement("b",null,"¥ ",n)),p.createElement("span",{className:be.income},"总收入：",p.createElement("b",null,"¥ ",r))),p.createElement("div",{className:be.typeWrap},p.createElement("div",{className:be.left,onClick:()=>{e.current&&e.current.show()}},p.createElement("span",{className:be.title},o.name||"全部类型"," ",p.createElement(u,{className:be.arrow,type:"arrow-bottom"}))),p.createElement("div",{className:be.right},p.createElement("span",{className:be.time,onClick:()=>{t.current&&t.current.show()}},i,p.createElement(u,{className:be.arrow,type:"arrow-bottom"}))))),p.createElement("div",{className:be.contentWrap},h.length?p.createElement(x,{animationDuration:200,stayTime:400,refresh:{state:w,handler:C},load:{state:b,distance:200,handler:()=>{_<f&&(k(ne),E(_+1))}}},h.map(((e,t)=>p.createElement(we,{bill:e,key:t})))):p.createElement(Ne,null)),p.createElement("div",{className:be.add,onClick:()=>{a.current&&a.current.show()}},p.createElement(ye,{type:"tianjia"})),p.createElement(Ee,{ref:e,onSelect:e=>{N(ee),E(1),c(e)}}),p.createElement(he,{ref:t,mode:"month",onSelect:e=>{N(ee),E(1),d(e)}}),p.createElement(fe,{ref:a,onReload:C}))},name:"账单"},statistics:{path:"/data",component:()=>{const e=m.exports.useRef(),[t,a]=m.exports.useState("expense"),[n,s]=m.exports.useState(y().format("YYYY-MM")),[r,l]=m.exports.useState(0),[o,c]=m.exports.useState(0),[i,d]=m.exports.useState([]),[E,h]=m.exports.useState([]),[v,f]=m.exports.useState("expense");m.exports.useEffect((()=>(g(),()=>{Se.dispose()})),[n]);const g=async()=>{const{data:e}=await G(`/api/bill/data?date=${n}`);l(e.total_expense),c(e.total_income);const t=e.total_data.filter((e=>1==e.pay_type)).sort(((e,t)=>t.number-e.number)),a=e.total_data.filter((e=>2==e.pay_type)).sort(((e,t)=>t.number-e.number));d(t),h(a),b("expense"==v?t:a)},w=e=>{a(e)},x=e=>{f(e),b("expense"==e?i:E)},b=e=>{window.echarts&&(Se=echarts.init(document.getElementById("proportion")),Se.setOption({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{data:e.map((e=>e.type_name))},series:[{name:"支出",type:"pie",radius:"55%",data:e.map((e=>({value:e.number,name:e.type_name}))),emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}))};return p.createElement("div",{className:ke.data},p.createElement("div",{className:ke.total},p.createElement("div",{className:ke.time,onClick:()=>{e.current&&e.current.show()}},p.createElement("span",null,n),p.createElement(u,{className:ke.date,type:"date"})),p.createElement("div",{className:ke.title},"共支出"),p.createElement("div",{className:ke.expense},"¥",r),p.createElement("div",{className:ke.income},"共收入¥",o)),p.createElement("div",{className:ke.structure},p.createElement("div",{className:ke.head},p.createElement("span",{className:ke.title},"收支构成"),p.createElement("div",{className:ke.tab},p.createElement("span",{onClick:()=>w("expense"),className:_({[ke.expense]:!0,[ke.active]:"expense"==t})},"支出"),p.createElement("span",{onClick:()=>w("income"),className:_({[ke.income]:!0,[ke.active]:"income"==t})},"收入"))),p.createElement("div",{className:ke.content},("expense"==t?i:E).map((e=>p.createElement("div",{key:e.type_id,className:ke.item},p.createElement("div",{className:ke.left},p.createElement("div",{className:ke.type},p.createElement("span",{className:_({[ke.expense]:"expense"==t,[ke.income]:"income"==t})},p.createElement(ye,{type:e.type_id?Q[e.type_id].icon:1})),p.createElement("span",{className:ke.name},e.type_name)),p.createElement("div",{className:ke.progress},"¥",Number(e.number).toFixed(2)||0)),p.createElement("div",{className:ke.right},p.createElement("div",{className:ke.percent},p.createElement(N,{shape:"line",percent:Number(e.number/Number("expense"==t?r:o)*100).toFixed(2),theme:"primary"}))))))),p.createElement("div",{className:ke.proportion},p.createElement("div",{className:ke.head},p.createElement("span",{className:ke.title},"收支构成"),p.createElement("div",{className:ke.tab},p.createElement("span",{onClick:()=>x("expense"),className:_({[ke.expense]:!0,[ke.active]:"expense"==v})},"支出"),p.createElement("span",{onClick:()=>x("income"),className:_({[ke.income]:!0,[ke.active]:"income"==v})},"收入"))),p.createElement("div",{id:"proportion"}))),p.createElement(he,{ref:e,mode:"month",onSelect:e=>{s(e)}}))},name:"统计"},user:{path:"/user",component:()=>{const e=g(),[t,a]=m.exports.useState({}),[n,s]=m.exports.useState(""),[r,l]=m.exports.useState(!1),[o,c]=m.exports.useState("");m.exports.useEffect((()=>{d()}),[]);const d=async()=>{const{data:e}=await G("/api/user/get_userinfo");a(e),c(re(e.avatar)),s(e.signature)};return p.createElement("div",{className:Ce.user},p.createElement("div",{className:Ce.head},p.createElement("div",{className:Ce.info},p.createElement("span",null,"昵称：",t.username),p.createElement("span",null,p.createElement("img",{style:{width:30,height:30,verticalAlign:"-10px"},src:"//s.yezgea02.com/1615973630132/geqian.png",alt:""}),p.createElement("b",null,t.signature||"暂无内容"))),p.createElement("img",{className:Ce.avatar,style:{width:60,height:60,borderRadius:8},src:o,alt:""})),p.createElement("div",{className:Ce.content},p.createElement(w,{hasArrow:!0,title:"用户信息修改",onClick:()=>e.push("/userinfo"),icon:p.createElement("img",{style:{width:20,verticalAlign:"-7px"},src:"//s.yezgea02.com/1615974766264/gxqm.png",alt:""})}),p.createElement(w,{hasArrow:!0,title:"重制密码",onClick:()=>e.push("/account"),icon:p.createElement("img",{style:{width:20,verticalAlign:"-7px"},src:"//s.yezgea02.com/1615974766264/zhaq.png",alt:""})}),p.createElement(w,{hasArrow:!0,title:"关于我们",onClick:()=>e.push("/about"),icon:p.createElement("img",{style:{width:20,verticalAlign:"-7px"},src:"//s.yezgea02.com/1615975178434/lianxi.png",alt:""})})),p.createElement(b,{className:Ce.logout,block:!0,theme:"danger",onClick:async()=>{localStorage.removeItem("token"),e.push("/login")}},"退出登录"),p.createElement(k,{visible:r,title:"标题",closable:!0,onCancel:()=>l(!1),footer:p.createElement(b,{block:!0,theme:"primary",onClick:async()=>{const{data:e}=await J("/api/user/edit_signature",{signature:n});a(e),l(!1),i.show("修改成功")}},"确认")},p.createElement(v,{autoHeight:!0,showLength:!0,maxLength:50,type:"text",rows:3,value:n,placeholder:"请输入备注信息",onChange:e=>s(e)})))},name:"我的"},login:{path:"/login",component:()=>{const e=m.exports.useRef(),[t,a]=m.exports.useState("login"),[n,s]=m.exports.useState(""),[r,l]=m.exports.useState(""),[o,c]=m.exports.useState(""),[d,u]=m.exports.useState(""),E=m.exports.useCallback((e=>{s(e)}),[]);return m.exports.useEffect((()=>{document.title="login"===t?"登录":"注册"}),[t]),p.createElement("div",{className:je},p.createElement("div",{className:ze}),p.createElement("div",{className:Me},p.createElement("span",{className:_({[Ae]:"login"===t}),onClick:()=>a("login")},"登录"),p.createElement("span",{className:_({[Ae]:"register"===t}),onClick:()=>a("register")},"注册")),p.createElement("div",{className:Re},p.createElement(w,{icon:p.createElement(ye,{type:"zhanghao"})},p.createElement(v,{clearable:!0,type:"text",placeholder:"请输入账号",onChange:e=>l(e)})),p.createElement(w,{icon:p.createElement(ye,{type:"mima"})},p.createElement(v,{clearable:!0,type:"password",placeholder:"请输入密码",onChange:e=>c(e)})),"register"===t?p.createElement(w,{icon:p.createElement(ye,{type:"mima"})},p.createElement(v,{clearable:!0,type:"text",placeholder:"请输入验证码",onChange:e=>u(e)}),p.createElement(j,{ref:e,charNum:4,onChange:E})):null),p.createElement("div",{className:Ye},"register"===t?p.createElement("div",{className:qe},p.createElement(z,null),p.createElement("label",{className:"text-light"},"阅读并同意",p.createElement("a",null,"《掘掘手札条款》"))):null,p.createElement(b,{onClick:async()=>{if(r)if(o)try{if("login"===t){const{data:e}=await J("/api/user/login",{username:r,password:o});localStorage.setItem("token",e.token),M.dispatchAnyWhere({type:Fe.effects.saveSomeThing,action:Fe.action.access_token,payload:{access_token:e.token},callback:e=>{console.log("Login dispatchAnyWhere callback=",e)}}),window.location.href="/"}else{if(!d)return void i.show("请输入验证码");if(d!==n)return void i.show("验证码错误");const{data:e}=await J("/api/user/register",{username:r,password:o});i.show("注册成功"),a("login")}}catch(e){i.show(e.msg)}else i.show("请输入密码");else i.show("请输入账号")},block:!0,theme:"primary"},"login"===t?"登录":"注册")))}},detail:{path:"/detail",component:()=>{const e=m.exports.useRef(),t=R(),a=g(),{id:n}=Y.parse(t.search),[s,r]=m.exports.useState({});m.exports.useEffect((()=>{l()}),[]);const l=async()=>{const{data:e}=await G(`/api/bill/detail?id=${n}`);r(e)};return p.createElement("div",{className:Pe.detail},p.createElement(Be,{title:"账单详情"}),p.createElement("div",{className:Pe.card},p.createElement("div",{className:Pe.type},p.createElement("span",{className:_({[Pe.expense]:1===s.pay_type,[Pe.income]:2===s.pay_type})},p.createElement(ye,{className:Pe.iconfont,type:s.type_id?Q[s.type_id].icon:1})),p.createElement("span",null,s.type_name||"")),1===s.pay_type?p.createElement("div",{className:_(Pe.amount,Pe.expense)},"-",s.amount):p.createElement("div",{className:_(Pe.amount,Pe.incom)},"+",s.amount),p.createElement("div",{className:Pe.info},p.createElement("div",{className:Pe.time},p.createElement("span",null,"记录时间"),p.createElement("span",null,y(Number(s.date)).format("YYYY-MM-DD HH:mm"))),p.createElement("div",{className:Pe.remark},p.createElement("span",null,"备注"),p.createElement("span",null,s.remark||"-"))),p.createElement("div",{className:Pe.operation},p.createElement("span",{onClick:()=>{k.confirm({title:"删除",content:"确认删除账单？",onOk:async()=>{await J("/api/bill/delete",{id:n}),i.show("删除成功"),a.goBack()}})}},p.createElement(ye,{type:"shanchu"}),"删除"),p.createElement("span",{onClick:()=>{e.current&&e.current.show()}},p.createElement(ye,{type:"tianjia"}),"编辑"))),p.createElement(fe,{ref:e,detail:s,onReload:l}))}},account:{path:"/account",component:Ue},about:{path:"/about",component:()=>p.createElement(p.Fragment,null,p.createElement(Be,{title:"关于我们"}),p.createElement("div",{className:Xe},p.createElement("h2",null,"关于项目"),p.createElement("article",null,"这个项目的初衷，是想让从事前端开发的同学，进入全栈开发的领域。当然，不能说学完本教程你就能胜任任何全栈开发。但至少，你已经可以从设计数据库表开始，把自己的一个想法转化成实际可见的项目。"),p.createElement("h2",null,"关于作者"),p.createElement("article",null,"从 2015 年实习开始至今，有 6 年前端开发经验。虽然没有在大厂呆过，但是正因如此，我深知奋战在中小厂的前端开发在从业 1 到 3 年后，会遇到什么瓶颈，小册中也详细的描述了怎样从初级到中级的进阶之路。"),p.createElement("h2",null,"关于小册"),p.createElement("article",null,"这是一本全栈小册，服务端采用 Node 上层架构 Egg.js，前端采用 React 框架 + Zarm 移动端组件库。本小册致力于让同学们学会服务端的开发流程，从设计数据库到接口的编写，前端的接口数据对接和页面制作，再到线上环境的部署。由于本人用的是 Mac，为了照顾到 Windows 系统的同学，全程关键步骤都会有 Windows 部分的讲解。")))},userinfo:{path:"/userinfo",component:()=>{const e=g(),[t,a]=m.exports.useState({}),[n,s]=m.exports.useState(""),[r,l]=m.exports.useState(""),o=localStorage.getItem("token");m.exports.useEffect((()=>{d()}),[]);const d=async()=>{const{data:e}=await G("/api/user/get_userinfo");a(e),s(re(e.avatar)),l(e.signature)};return p.createElement(p.Fragment,null,p.createElement(Be,{title:"用户信息"}),p.createElement("div",{className:Ze.userinfo},p.createElement("h1",null,"个人资料"),p.createElement("div",{className:Ze.item},p.createElement("div",{className:Ze.title},"头像"),p.createElement("div",{className:Ze.avatar},p.createElement("img",{className:Ze.avatarUrl,src:n,alt:""}),p.createElement("div",{className:Ze.desc},p.createElement("span",null,"支持 jpg、png、jpeg 格式大小 200KB 以内的图片"),p.createElement(I,{className:Ze.filePicker,onChange:e=>{if(console.log("file.file",e.file),e&&e.file.size>204800)return void i.show("上传头像不得超过 200 KB！！");let t=new FormData;t.append("file",e.file),c({method:"post",url:`${Z}/api/upload`,data:t,headers:{"Content-Type":"multipart/form-data",Authorization:o}}).then((e=>{s(re(e.data))}))},accept:"image/*"},p.createElement(b,{className:Ze.upload,theme:"primary",size:"xs"},"点击上传"))))),p.createElement("div",{className:Ze.item},p.createElement("div",{className:Ze.title},"个性签名"),p.createElement("div",{className:Ze.signature},p.createElement(v,{clearable:!0,type:"text",value:r,placeholder:"请输入个性签名",onChange:e=>l(e)}))),p.createElement(b,{onClick:async()=>{await J("/api/user/edit_userinfo",{signature:r,avatar:n}),i.show("修改成功"),e.goBack()},style:{marginTop:50},block:!0,theme:"primary"},"保存")))}}};var Je="_tab_1udd2_1";const Qe=({showNav:e})=>{const[t,a]=m.exports.useState(R().pathname),n=g();console.log("NavBar history=",n);return p.createElement(T,{visible:e,className:Je,activeKey:t,onChange:e=>{console.log("NavBar chnageTab path=",e),a(e),n.push(e)}},p.createElement(T.Item,{itemKey:Ge.home.path,title:Ge.home.name,icon:p.createElement(ye,{type:"zhangdan"})}),p.createElement(T.Item,{itemKey:Ge.statistics.path,title:Ge.statistics.name,icon:p.createElement(ye,{type:"tongji"})}),p.createElement(T.Item,{itemKey:Ge.user.path,title:Ge.user.name,icon:p.createElement(ye,{type:"wode"})}))};Qe.propTypes={showNav:E.bool};const Ve=()=>{const{pathname:e}=R(),t=[Ge.home.path,Ge.statistics.path,Ge.user.path],[a,n]=m.exports.useState(!1),[s,r]=W([""]),{access_token:l}=F((e=>e.userModel));return console.log("App.jsx access_token=",l),console.log("useCookies==",s),console.log("Cookies.get==",D.get()),console.log("document.cookie=",document.cookie),console.log("cookie.loadAll=",O.loadAll()),m.exports.useEffect((()=>(console.log("app.jsx componentDidMount"),()=>{console.log("app.jsx componentWillUnmount")})),[]),m.exports.useEffect((()=>{n(t.includes(e))}),[e]),p.createElement($,{primaryColor:"#007fff",locale:B},p.createElement(p.Fragment,null,p.createElement(P,null,Object.values(Ge).map((e=>p.createElement(L,{exact:!0,key:e.path,path:e.path},p.createElement(e.component,null))))),p.createElement(Qe,{showNav:a})))};console.log("main.jsx dvaApp=",We);const et=We.getStore();K.render(p.createElement(p.StrictMode,null,p.createElement(H,{store:et},p.createElement(U,null,p.createElement(X,null,p.createElement(Ve,null))))),document.getElementById("root"));
