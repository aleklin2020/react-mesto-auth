(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{10:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(18),s=n.n(o),r=(n(10),n(23)),i=n(2),l=n.p+"static/media/Vector.03b78ada.svg",u=(n.p,n.p+"static/media/add-button.d86bb2ed.svg"),d=n(3),p=n(8),m=n(0);var j=function(e){var t=e.loggedIn,n=e.email,a=e.handleSignOut,c=Object(d.h)().pathname,o="".concat("/sign-in"===c?"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f":"\u0412\u043e\u0439\u0442\u0438"),s="".concat("/sign-in"===c?"/sign-up":"/sign-in");return Object(m.jsxs)("header",{className:"header",children:[Object(m.jsx)("img",{className:"header__logo",alt:"Maesto",src:l}),Object(m.jsx)("div",{className:"header__wrap",children:t?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("p",{className:"header__email",children:n}),Object(m.jsx)(p.b,{className:"header__signout",to:"",onClick:a,children:"\u0412\u044b\u0439\u0442\u0438"})]}):Object(m.jsx)(p.b,{className:"header__link",to:s,children:o})})]})},h=c.a.createContext();var f=function(e){var t=c.a.useContext(h),n=e.card.owner===t._id,a="popup_element ".concat(n?"elemenet__icon-delete":""),o=e.card.likes.some((function(e){return e===t._id})),s="element__vector-like ".concat(o?"element__vector-active":"");return Object(m.jsxs)("div",{className:"element",children:[Object(m.jsx)("button",{className:a,onClick:function(){e.onCardDelete(e.card)}}),Object(m.jsx)("img",{className:"element__image",alt:e.card.name,src:e.card.link,onClick:function(){e.onCardClick(e.card)}}),Object(m.jsx)("h2",{className:"element__title",children:e.card.name}),Object(m.jsxs)("div",{className:"element__likes",children:[Object(m.jsx)("button",{className:s,type:"button",onClick:function(){e.onCardLike(e.card)}}),Object(m.jsx)("p",{className:"element__like",children:e.card.likes.length})]})]})};var b=function(e){var t=c.a.useContext(h);return Object(m.jsxs)("main",{className:"main",children:[Object(m.jsxs)("section",{className:"profile-informashion",children:[Object(m.jsxs)("div",{className:"profile",children:[Object(m.jsx)("div",{className:"profile-page",children:Object(m.jsx)("button",{className:"profile__avatar-button",onClick:e.onEditAvatar,children:Object(m.jsx)("img",{className:"profile__avatar",alt:"\u0410\u0432\u0430\u0442\u0430\u0440\u043a\u0430",src:t.avatar})})}),Object(m.jsxs)("div",{className:"profile__info",children:[Object(m.jsxs)("div",{className:"profile__box",children:[Object(m.jsx)("h1",{className:"profile__name",children:t.name}),Object(m.jsx)("button",{className:"profile__bedit-button",type:"button",onClick:e.onEditProfile})]}),Object(m.jsx)("p",{className:"profile__profession",children:t.about})]})]}),Object(m.jsx)("button",{className:"profile-informashion__button",name:"editing",type:"button",onClick:e.onAddPlace,children:Object(m.jsx)("img",{alt:"\u041a\u043d\u043e\u043f\u043a\u0430",src:u})})]}),Object(m.jsx)("section",{className:"elements",children:e.cards.map((function(t){return Object(m.jsx)(f,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})]})};var _=function(){return Object(m.jsx)("footer",{className:"footer",children:Object(m.jsx)("p",{className:"footer__text",children:"\xa9 2020 Alex Lin"})})};var O=function(e){return Object(m.jsx)("div",{className:"popup ".concat(e.formName," ").concat(e.isOpen?"popup_opened":""),children:Object(m.jsxs)("div",{className:"popup__container",children:[Object(m.jsx)("button",{className:"popup__close-icon",type:"button",onClick:e.onClose}),Object(m.jsx)("h2",{className:"popup__title",children:e.popupTitle}),Object(m.jsxs)("form",{className:"form form-save",name:e.formName,onSubmit:e.onSubmit,children:[e.children,Object(m.jsx)("button",{className:"form__submit form__submit_loaded",type:"submit",onClick:e.onClose,children:e.formButtonContent})]})]})})};var x=function(e){return Object(m.jsx)("div",{className:"popup popup_open-blocks ".concat(e.isOpen?"popup_opened":""),children:Object(m.jsxs)("div",{className:"popup__container-blocks",children:[Object(m.jsx)("button",{className:"popup__close-icon",type:"button",onClick:e.onClose}),Object(m.jsx)("img",{className:"popup__image",alt:e.card.name,src:e.card.link}),Object(m.jsx)("h2",{className:"popup__titles",children:e.card.name})]})})},v=n(21),g=n(22),N=new(function(){function e(t){var n=t.link,a=t.headers;Object(v.a)(this,e),this._baseUrl=n,this._headers=a}return Object(g.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject(new Error("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 ${res.status}"))}},{key:"getUserInform",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"setUserInform",value:function(e,t){var n=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return n._checkResponse(e)}))}},{key:"getAvatarProfile",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return t._checkResponse(e)}))}},{key:"getIntialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"photoAddServer",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._checkResponse(e)}))}},{key:"LikeCard",value:function(e,t){var n=this;return t?fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return n._checkResponse(e)})):fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return n._checkResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"updateHeaders",value:function(){this._headers={"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}}]),e}())({link:"http://api.pictures-host.nomoredomains.rocks",headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt")),"Content-Type":"application/json"}});var C=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),o=n[0],s=n[1],r=Object(a.useState)(""),l=Object(i.a)(r,2),u=l[0],d=l[1],p=c.a.useContext(h);return c.a.useEffect((function(){p&&(s(p.name),d(p.about))}),[p]),Object(m.jsxs)(O,{className:"overlay_type_edit",popupTitle:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:e.isOpen,onClose:e.onClose,formName:"profile-popup",formButtonContent:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(t){t.preventDefault(),console.log(t),e.onUpdateUser({name:o,about:u})},children:[Object(m.jsx)("label",{className:"form__label",children:Object(m.jsx)("input",{type:"text",minLength:"2",maxLength:"40",name:"name",className:"form__input form__input_name",required:!0,placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",value:o,onChange:function(e){s(e.target.value)}})}),Object(m.jsx)("span",{className:"form-name-input-error"}),Object(m.jsx)("label",{className:"form__label"}),Object(m.jsx)("input",{type:"text",minLength:"2",maxLength:"200",name:"job",className:"form__input form__input_job",required:!0,placeholder:"\u0412\u0430\u0448\u0430 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044f",value:u,onChange:function(e){d(e.target.value)}}),Object(m.jsx)("span",{className:"form-job-input-error"})]})};var k=function(e){var t=c.a.useRef();return Object(m.jsx)(O,{className:"overlay_type_setAvatar",popupTitle:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:e.isOpen,onClose:e.onClose,formName:"popup_avatar",formButtonContent:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c",onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar(t.current.value)},children:Object(m.jsxs)("label",{className:"form__label",children:[Object(m.jsx)("input",{type:"url",ref:t,name:"newAvatar",className:"form__input form__input_job form__input-active",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043d\u043e\u0432\u044b\u0439 \u0430\u0432\u0430\u0442\u0430\u0440",defaultValue:""}),Object(m.jsx)("span",{className:"form-link-avatar-error"})]})})};var y=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],o=n[1],s=Object(a.useState)(""),r=Object(i.a)(s,2),l=r[0],u=r[1];return Object(m.jsxs)(O,{className:"overlay_type_addPlace",popupTitle:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,onClose:e.onClose,formName:"popup_card",formButtonContent:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",onSubmit:function(t){t.preventDefault();var n={};n.name=c,n.link=l,e.onAddPlace(n)},children:[Object(m.jsxs)("label",{className:"form__label",children:[Object(m.jsx)("input",{type:"text",minLength:"2",maxLength:"30",name:"popup_element",className:"form__input form__input_name",required:!0,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",value:c,onChange:function(e){o(e.target.value)}}),Object(m.jsx)("span",{className:"form-name-input-error"})]}),Object(m.jsx)("input",{type:"url",name:"imgPlace",className:"form__input form__input_job",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",value:l,onChange:function(e){u(e.target.value)}}),Object(m.jsx)("span",{className:"form-job-input-error"})]})},S=n.p+"static/media/authorization-ok.1b6082f8.svg",T=n.p+"static/media/authorization-bad.df8eddf6.svg";var w=function(e){var t=e.authorization,n=c.a.useState(""),a=Object(i.a)(n,2),o=a[0],s=a[1],r=c.a.useState(""),l=Object(i.a)(r,2),u=l[0],d=l[1];return Object(m.jsxs)("section",{className:"start-screen",children:[Object(m.jsx)("h1",{className:"start-screen__title",children:"\u0412\u0445\u043e\u0434"}),Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({email:o,password:u})},className:"start-screen__form",children:[Object(m.jsx)("input",{value:o,className:"start-screen__input",placeholder:"Email",onChange:function(e){s(e.target.value)}}),Object(m.jsx)("input",{value:u,className:"start-screen__input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:function(e){d(e.target.value)}}),Object(m.jsx)("button",{className:"start-screen__submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})};var P=function(e){var t=e.registration,n=c.a.useState(""),a=Object(i.a)(n,2),o=a[0],s=a[1],r=c.a.useState(""),l=Object(i.a)(r,2),u=l[0],d=l[1];return Object(m.jsxs)("section",{className:"start-screen",children:[Object(m.jsx)("h1",{className:"start-screen__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({email:o,password:u})},className:"start-screen__form",children:[Object(m.jsx)("input",{value:o,onChange:function(e){s(e.target.value)},type:"email",className:"start-screen__input",placeholder:"Email"}),Object(m.jsx)("input",{value:u,onChange:function(e){d(e.target.value)},type:"password",className:"start-screen__input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(m.jsx)("button",{className:"start-screen__submit",children:"\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(m.jsxs)(p.b,{className:"start-screen__login",to:"/sign-in",children:[" ","\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"]})]})},E=n(24),A=n(25),U=["component"],L=function(e){var t=e.component,n=Object(A.a)(e,U);return Object(m.jsx)(d.b,{children:function(){return n.loggedIn?Object(m.jsx)(t,Object(E.a)({},n)):Object(m.jsx)(d.a,{to:"/sign-in"})}})};var I=function(e){var t=e.onClose,n=e.isOpen,a=e.message;return Object(m.jsx)("div",{className:"popup popup_type_infotool ".concat(n?"popup_opened":""),children:Object(m.jsxs)("div",{className:"popup__container",children:[Object(m.jsx)("img",{src:a.iconPath,alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 Yes \u0438\u043b\u0438 No",className:"popup__result-icon"}),Object(m.jsx)("p",{className:"popup__title-info",children:a.text}),Object(m.jsx)("button",{type:"button",className:"popup__close-icon",onClick:t})]})})},D="http://api.pictures-host.nomoredomains.rocks",R=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))},B=function(e){return console.log(e),fetch("".concat(D,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(R).then((function(e){return e}))};var z=function(){var e=c.a.useState(""),t=Object(i.a)(e,2),n=t[0],a=t[1],o=c.a.useState(!1),s=Object(i.a)(o,2),l=s[0],u=s[1];c.a.useEffect((function(){l&&N.getUserInform().then((function(e){a(e.data)})).catch((function(e){console.log(e)}))}),[l]);var p=c.a.useState([]),f=Object(i.a)(p,2),v=f[0],g=f[1];c.a.useEffect((function(){l&&N.getIntialCards().then((function(e){g(e)})).catch((function(e){console.log("Error:".concat(e))}))}),[l]);var E=c.a.useState(!1),A=Object(i.a)(E,2),U=A[0],z=A[1],J=c.a.useState(!1),q=Object(i.a)(J,2),F=q[0],H=q[1],G=c.a.useState(!1),M=Object(i.a)(G,2),V=M[0],Y=M[1],$=c.a.useState(!1),K=Object(i.a)($,2),Q=K[0],W=K[1],X=c.a.useState({}),Z=Object(i.a)(X,2),ee=Z[0],te=Z[1];function ne(){H(!1),Y(!1),z(!1),W(!1),te({}),se(!1)}c.a.useEffect((function(){var e=function(e){27===e.keyCode&&ne()};return!0!==F&&!0!==U&&!0!==V&&!0!==Q||window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[F,U,V,Q]);var ae=c.a.useState(!1),ce=Object(i.a)(ae,2),oe=ce[0],se=ce[1],re=c.a.useState({iconPath:"",text:""}),ie=Object(i.a)(re,2),le=ie[0],ue=ie[1],de=c.a.useState(""),pe=Object(i.a)(de,2),me=pe[0],je=pe[1],he=Object(d.g)();function fe(){se(!0)}function be(e){var t=e.iconPath,n=e.text;ue({iconPath:t,text:n})}return c.a.useEffect((function(){var e=localStorage.getItem("jwt");e&&B(e).then((function(e){u(!0),je(e.data.email),he.push("/")})).catch((function(e){return console.log(e)}))}),[he]),Object(m.jsx)(h.Provider,{value:n,children:Object(m.jsx)("div",{className:"page",children:Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)(j,{loggedIn:l,email:me,handleSignOut:function(){u(!1),localStorage.removeItem("jwt"),je(""),he.push("/sign-in")}}),Object(m.jsxs)(d.d,{children:[Object(m.jsx)(d.b,{path:"/sign-in",children:Object(m.jsx)(w,{authorization:function(e){var t=e.email,n=e.password;(function(e){var t=e.email,n=e.password;return fetch("".concat(D,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:n})}).then(R).then((function(e){if(e.token)return localStorage.setItem("jwt",e.token),N.updateHeaders(),e.token}))})({email:t,password:n}).then((function(e){if(!e)throw new Error("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430");B(e).then((function(e){je(e.data.email)})).catch((function(e){return console.log(e)})),u(!0),N.getUserInform().then((function(e){return a(e.data)})).catch((function(e){console.log(e)})),be({iconPath:S,text:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u044b \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043d\u044b!"}),je(t),fe(),setTimeout(he.push,2500,"/"),setTimeout(ne,2e3)})).catch((function(e){be({iconPath:T,text:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437!"}),fe(),setTimeout(ne,2e3),console.log(e)}))}})}),Object(m.jsx)(d.b,{path:"/sign-up",children:Object(m.jsx)(P,{registration:function(e){(function(e,t){return fetch("".concat(D,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(R)})(e.email,e.password).then((function(e){201!==e.statusCode&&(be({iconPath:S,text:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"}),fe(),setTimeout(he.push,3e3,"/sign-in"),setTimeout(ne,2500))})).catch((function(e){be({iconPath:T,text:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437!"}),fe(),setTimeout(ne,2500),console.log(e)}))}})}),Object(m.jsx)(L,{exact:!0,path:"/",component:b,onEditAvatar:function(){z(!0)},onEditProfile:function(){H(!0)},onAddPlace:function(){Y(!0)},onCardClick:function(e){te(e),W(!0)},onCardLike:function(e){var t=e.likes.some((function(e){return e===n._id}));N.LikeCard(e._id,!t).then((function(t){g((function(n){return n.map((function(n){return n===e._id?t:n}))}))})).catch((function(e){console.log(e)}))},onCardDelete:function(e){N.deleteCard(e._id).then((function(){g((function(t){return t.filter((function(t){return t._id!==e._id}))}))})).catch((function(e){console.log(e)}))},cards:v,loggedIn:l}),Object(m.jsx)(d.b,{path:"/",children:l?Object(m.jsx)(d.a,{to:"/main"}):Object(m.jsx)(d.a,{to:"/sign-in"})})]}),Object(m.jsx)(_,{}),Object(m.jsx)(C,{name:"profile-popup",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",submitText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:F,onClose:ne,onUpdateUser:function(e){console.log(e),N.setUserInform(e.name,e.about).then((function(e){a(e.data),ne(),console.log(e)})).catch((function(e){console.log(e)}))}}),Object(m.jsx)(k,{isOpen:U,onClose:ne,onUpdateAvatar:function(e){console.log(e),N.getAvatarProfile(e).then((function(e){a(e.data),ne()})).catch((function(e){console.log(e)}))}}),Object(m.jsx)(y,{isOpen:V,onClose:ne,onAddPlace:function(e){console.log(e),N.photoAddServer(e).then((function(e){g([e].concat(Object(r.a)(v))),ne()})).catch((function(e){console.log(e)}))}}),Object(m.jsx)(x,{card:ee,onClose:ne,isOpen:Q}),Object(m.jsx)(O,{name:"popup_delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b",submitText:"\u0414\u0430",onClose:ne}),Object(m.jsx)(I,{isOpen:oe,onClose:ne,message:le})]})})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),o(e),s(e)}))};s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(p.a,{children:Object(m.jsx)(z,{})})}),document.getElementById("root")),J()}},[[36,1,2]]]);
//# sourceMappingURL=main.4191ab86.chunk.js.map