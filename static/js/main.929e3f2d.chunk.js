(this["webpackJsonpprimer-app"]=this["webpackJsonpprimer-app"]||[]).push([[0],{24:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),c=n(18),s=n.n(c),o=(n(24),n(4)),i=n.n(o),u=n(8),l=n(9),p=n(6),d=n(15);n(36);d.a.initializeApp({apiKey:"AIzaSyB3eTixPwzFobVTrmom_vQpOnP3wZ5hkuA",authDomain:"react-chat-9e283.firebaseapp.com",databaseURL:"https://react-chat-9e283-default-rtdb.firebaseio.com",projectId:"react-chat-9e283",storageBucket:"react-chat-9e283.appspot.com",messagingSenderId:"178991264140",appId:"1:178991264140:web:bdfebce71e614ef73626a9"});var j=d.a.firestore();function b(e){return f.apply(this,arguments)}function f(){return(f=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,j.collection("messages").orderBy("date","asc").onSnapshot((function(e){var n=[];e.forEach((function(e){n.push(Object(p.a)({id:e.id},e.data()))})),t(n)})),e.next=8;break;case 4:throw e.prev=4,e.t0=e.catch(0),console.log(e.t0),new Error("Los mensajes no se pudieron cargar");case 8:case"end":return e.stop()}}),e,null,[[0,4]])})))).apply(this,arguments)}function m(e){return h.apply(this,arguments)}function h(){return(h=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.collection("messages").doc().set(t);case 3:e.next=9;break;case 5:throw e.prev=5,e.t0=e.catch(0),console.log(e.t0),new Error("El mensaje no se pudo enviar.");case 9:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function O(e){return v.apply(this,arguments)}function v(){return(v=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.collection("users").doc().set(t);case 3:e.next=9;break;case 5:throw e.prev=5,e.t0=e.catch(0),console.log(e.t0),new Error("El usuario no se pudo registrar.");case 9:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function x(e){return g.apply(this,arguments)}function g(){return(g=Object(u.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,a=t.password,e.prev=1,e.next=4,j.collection("users").where("username","==",n).where("password","==",a).get();case 4:if(!(r=e.sent).docs[0]){e.next=9;break}return e.abrupt("return",Object(p.a)({id:r.docs[0].id},r.docs[0].data()));case 9:return e.abrupt("return",!1);case 10:e.next=16;break;case 12:throw e.prev=12,e.t0=e.catch(1),console.log(e.t0),new Error("El usuario no se pudo validar.");case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function w(e,t,n){return k.apply(this,arguments)}function k(){return(k=Object(u.a)(i.a.mark((function e(t,n,a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.collection("users").doc(t).update({nickname:n,color:a});case 3:e.next=9;break;case 5:throw e.prev=5,e.t0=e.catch(0),console.log(e.t0),new Error("No se pudieron guardar las preferencias.");case 9:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function y(e){return N.apply(this,arguments)}function N(){return(N=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.collection("messages").doc(t).delete();case 3:e.next=9;break;case 5:throw e.prev=5,e.t0=e.catch(0),console.log(e.t0),new Error("No se pudo eliminar el mensaje.");case 9:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}var C=n(1),S=Object(a.createContext)(),D=function(){return Object(a.useContext)(S)};function E(e){var t=e.children,n=Object(a.useState)(!0),r=Object(l.a)(n,2),c=r[0],s=r[1],o=Object(a.useState)([]),p=Object(l.a)(o,2),d=p[0],j=p[1],f=Object(a.useState)(""),h=Object(l.a)(f,2),O=h[0],v=h[1],x=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b(j);case 3:setTimeout((function(){s(!1)}),500),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0),v(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(""),n={date:new Date,nickname:t.nickname,color:t.color,message:t.message},e.prev=2,e.next=5,m(n);case 5:v("Mensaje enviado"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0),v(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(""),e.prev=1,e.next=4,y(t);case 4:v("Mensaje eliminado."),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),v("No se pudo eliminar el mensaje.");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){x()}),[]),Object(C.jsx)(S.Provider,{value:{loadingMessages:c,messages:d,notification:O,setNotification:v,sendMessage:g,deleteMessage:w},children:t})}var P=Object(a.createContext)(),U=function(){return Object(a.useContext)(P)};function F(e){var t=e.children,n=Object(a.useState)(""),r=Object(l.a)(n,2),c=r[0],s=r[1],o=Object(a.useState)(!1),d=Object(l.a)(o,2),j=d[0],b=d[1],f=Object(a.useState)(!1),m=Object(l.a)(f,2),h=m[0],v=m[1],g=Object(a.useState)({id:"",nickname:"",color:"white"}),k=Object(l.a)(g,2),y=k[0],N=k[1],S=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(""),b(!1),e.prev=2,e.next=5,O(Object(p.a)(Object(p.a)({},t),{},{nickname:"",color:"white"}));case 5:s("Usuario creado. Logueate!"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),s(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(""),b(!1),e.prev=2,e.next=5,x(t);case 5:(n=e.sent)?(N({id:n.id,nickname:n.nickname,color:n.color}),b(!0),v(!0===n.admin),s("Has iniciado sesi\xf3n!")):s("Usuario o contrase\xf1a incorrecto/s."),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),s(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w(y.id,t,n);case 3:N({nickname:t,color:n}),s(""),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),s("No se pudieron guardar las preferencias.");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(C.jsx)(P.Provider,{value:{notification:c,setNotification:s,registerUser:S,loginUser:D,userLogged:j,adminLogged:h,userPrefs:y,logOutUser:function(){b(!1),N({id:"",nickname:"",color:"white"}),s("Ha cerrado sesi\xf3n.")},changeUserPrefs:E},children:t})}var L=n(13);n(28);function M(){var e=U(),t=e.registerUser,n=e.loginUser,r=e.notification,c=e.setNotification,s=Object(a.useState)({username:"",password:""}),o=Object(l.a)(s,2),i=o[0],u=o[1],d=function(e){var t=e.target,n=t.name,a=t.value;u(Object(p.a)(Object(p.a)({},i),{},Object(L.a)({},n,a)))},j=function(){return i.username?!!i.password||(c("La contrase\xf1a est\xe1 vac\xeda."),!1):(c("El usuario est\xe1 vac\xedo."),!1)};return Object(C.jsxs)("form",{className:"loginForm",children:[Object(C.jsxs)("fieldset",{className:"loginData",children:[Object(C.jsx)("label",{htmlFor:"username",children:"Usuario"}),Object(C.jsx)("input",{className:"usernameInput",type:"text",id:"username",name:"username",value:i.username,onChange:d}),Object(C.jsx)("label",{htmlFor:"password",children:"Contrase\xf1a"}),Object(C.jsx)("input",{className:"passwordInput",type:"password",id:"password",name:"password",value:i.password,onChange:d})]}),Object(C.jsxs)("div",{className:"buttonsDiv",children:[Object(C.jsx)("button",{onClick:function(e){e.preventDefault(),j()&&(n(i),u(Object(p.a)(Object(p.a)({},i),{},{password:""})))},children:" Login "}),Object(C.jsx)("button",{onClick:function(e){e.preventDefault(),j()&&(t(i),u(Object(p.a)(Object(p.a)({},i),{},{password:""})))},children:" Registrarse "})]}),Object(C.jsx)("p",{className:"notification",children:r})]})}n(29);function I(){var e=U(),t=e.userLogged,n=e.userPrefs,r=e.logOutUser,c=e.changeUserPrefs,s=D(),o=s.loadingMessages,i=s.notification,u=s.setNotification,d=s.sendMessage,j=Object(a.useState)({nickname:"",color:"white",message:""}),b=Object(l.a)(j,2),f=b[0],m=b[1],h=function(e){var t=e.target,n=t.name,a=t.value;m(Object(p.a)(Object(p.a)({},f),{},Object(L.a)({},n,a)))},O=function(e){if(e&&e.preventDefault(),!o){if(!f.nickname)return u("No ha ingresado un nickname.");if(!f.message)return u("No ha escrito ning\xfan mensaje.");d(f),m(Object(p.a)(Object(p.a)({},f),{},{message:""})),c(f.nickname,f.color)}};return Object(a.useEffect)((function(){m({nickname:n.nickname,color:n.color,message:""})}),[n]),Object(a.useEffect)((function(){var e=document.querySelector(".colorPicker option[value=".concat(f.color,"]"));e&&(e.selected=!0)}),[f.color]),Object(C.jsxs)("form",{className:"messageForm",onSubmit:O,children:[Object(C.jsxs)("fieldset",{className:"transmiterData",children:[Object(C.jsxs)("div",{className:"nicknameDiv",children:[Object(C.jsx)("label",{htmlFor:"nickname",children:"Nickname"}),Object(C.jsx)("input",{disabled:!t,className:"nicknameInput",type:"text",id:"nickname",name:"nickname",value:f.nickname,onChange:h})]}),Object(C.jsxs)("select",{disabled:!t,className:"colorPicker",name:"color",id:"color",onChange:h,children:[Object(C.jsx)("option",{value:"white",children:"\u26aa"}),Object(C.jsx)("option",{value:"red",children:"\ud83d\udd34"}),Object(C.jsx)("option",{value:"green",children:"\ud83d\udfe2"}),Object(C.jsx)("option",{value:"orange",children:"\ud83d\udfe0"}),Object(C.jsx)("option",{value:"yellow",children:"\ud83d\udfe1"}),Object(C.jsx)("option",{value:"blue",children:"\ud83d\udd35"}),Object(C.jsx)("option",{value:"blueviolet",children:"\ud83d\udfe3"})]})]}),Object(C.jsxs)("fieldset",{children:[Object(C.jsx)("label",{htmlFor:"message",children:" Message "}),Object(C.jsx)("textarea",{disabled:!t,className:"messageArea",cols:"30",rows:"6",id:"message",name:"message",value:f.message,onChange:h,onKeyPress:function(e){13!==(e.which||e.keyCode)||e.shiftKey||(e.preventDefault(),O())}})]}),Object(C.jsxs)("div",{className:"buttonsDiv",children:[Object(C.jsx)("button",{disabled:o||!t,type:"submit",children:"ENVIAR"}),Object(C.jsx)("button",{disabled:o||!t,onClick:function(e){e.preventDefault(),r()},children:"Cerrar Sesi\xf3n"})]}),Object(C.jsx)("p",{className:"notification",children:i})]})}n(30);function A(){return Object(C.jsxs)("div",{className:"formsContainer",children:[Object(C.jsx)(M,{}),Object(C.jsx)(I,{})]})}var T=n(19);n(31);function B(e){var t=e.message,n=e.displayDelete,a=e.handleDelete;return Object(C.jsxs)("div",{className:"message",children:[Object(C.jsx)("label",{className:t.color,children:t.nickname}),n&&Object(C.jsx)(T.a,{className:"deleteButton",size:"25px",color:"white",onClick:function(){a(t.id)}}),Object(C.jsx)("p",{children:t.message})]})}n(32);function z(){var e=D(),t=e.loadingMessages,n=e.messages,r=e.deleteMessage,c=U().adminLogged,s=function(e){c&&r(e)};return Object(a.useEffect)((function(){var e=document.querySelector(".messagesContainer");e.scrollTo(0,e.scrollHeight)}),[n]),Object(C.jsxs)("div",{className:"messagesContainer",children:[t&&Object(C.jsx)("h3",{children:"Cargando..."}),n&&n.map((function(e){return Object(C.jsx)(B,{message:e,displayDelete:c,handleDelete:s},e.id)}))]})}n(33);function H(){return Object(C.jsx)(E,{children:Object(C.jsx)(F,{children:Object(C.jsxs)("div",{className:"chatContainer",children:[Object(C.jsx)("h2",{children:" CHAT "}),Object(C.jsxs)("section",{className:"chatSection",children:[Object(C.jsx)(A,{}),Object(C.jsx)(z,{})]})]})})})}n(34);function K(){return Object(C.jsx)("div",{className:"App",children:Object(C.jsx)(H,{})})}var R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(K,{})}),document.getElementById("root")),R()}},[[35,1,2]]]);
//# sourceMappingURL=main.929e3f2d.chunk.js.map