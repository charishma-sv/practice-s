(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{22:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(13),s=n.n(r),a=(n(22),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))}),o=n(6),j=n(2),u=n(10),l=n.n(u),d=n(14),b=n(7),h=n(15),x=n(1);var O=function(){var e=Object(h.a)("pk_test_51JiNn0FSnM5fxxMrzxIXMIkN6QRWSczyksfBPkipUBlI7KlsOCPg66em28XTbJ1E56PXryjgvL3uyMmlbgbG1Ris00vFvwcJH2"),t=i.a.useState("one_time"),n=Object(b.a)(t,2),c=(n[0],n[1]),r=i.a.useState(!1),s=Object(b.a)(r,2),a=s[0],o=s[1],j=i.a.useState(""),u=Object(b.a)(j,2),O=u[0],p=u[1],f=function(e){e.preventDefault(),p(e.target.id)},v=function(e){e.preventDefault(),c(e.target.id)},m=function(){var t=Object(d.a)(l.a.mark((function t(n){var c,i,r,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),o(!0),c=window.location.href.replace(/[^/]*$/,""),t.next=5,e;case 5:return i=t.sent,t.next=8,i.redirectToCheckout({lineItems:[{price:O,quantity:1}],mode:"payment",successUrl:c+"success?session_id={CHECKOUT_SESSION_ID}",cancelUrl:c+"failure?session_id={CHECKOUT_SESSION_ID}"});case 8:r=t.sent,s=r.error,console.log(s);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{id:"one_time",onClick:v,children:"one_time"}),Object(x.jsx)("button",{id:"monthly",onClick:v,children:"monthly"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{id:"price_1JnUWfFSnM5fxxMrmgb4wesu",className:"btn btn-primary",onClick:f,children:"$5"}),Object(x.jsx)("button",{id:"price_1Jnb9NFSnM5fxxMr1969ezhj",className:"btn btn-primary",onClick:f,children:"$10"})]}),Object(x.jsx)("button",{onClick:m,disabled:a,children:"pay"})]})};var p=function(){return Object(x.jsx)("div",{children:Object(x.jsx)("div",{children:"Failure"})})};var f=function(){return Object(x.jsx)("div",{children:Object(x.jsx)("div",{children:"HOme"})})};var v=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{children:"Success"}),Object(x.jsx)(o.b,{to:"/donate",children:"Go to Donate"})]})};var m=function(){return Object(x.jsx)(o.a,{basename:"/practice-s",children:Object(x.jsxs)("div",{children:["my app",Object(x.jsxs)(j.c,{children:[Object(x.jsx)(j.a,{path:"/",component:f,exact:!0}),Object(x.jsx)(j.a,{path:"/donate",component:O}),Object(x.jsx)(j.a,{path:"/success",component:v}),Object(x.jsx)(j.a,{path:"/failure",component:p})]})]})})};s.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(m,{})}),document.getElementById("root")),a()}},[[33,1,2]]]);
//# sourceMappingURL=main.f78f9598.chunk.js.map