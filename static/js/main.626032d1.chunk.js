(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(4),i=n.n(a),r=(n(10),n(3)),o=n.n(r),l=n(5),u=(n(12),n(13),n(0));var m=function(){var e=function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={name:t.target[0].value,message:t.target[1].value,email:t.target[2].value},console.log("env","https://hooks.zapier.com/hooks/catch/11075513/bta8oaj/"),e.next=5,fetch("https://hooks.zapier.com/hooks/catch/11075513/bta8oaj/",{method:"POST",body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){return console.log("this is my data",e)})).catch((function(e){return console.log(e)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("form",{onSubmit:e,className:"d-flex flex-column justify-content-center align-items-center",children:[Object(u.jsxs)("div",{className:"d-flex flex-column w-50",children:[Object(u.jsx)("span",{children:"First Name"}),Object(u.jsx)("input",{type:"text",name:"fname"})]}),Object(u.jsxs)("div",{className:"d-flex flex-column w-50",children:[Object(u.jsx)("span",{children:"Message"}),Object(u.jsx)("input",{type:"text",name:"msg"})]}),Object(u.jsxs)("div",{className:"d-flex flex-column w-50",children:[Object(u.jsx)("span",{children:"Email"}),Object(u.jsx)("input",{type:"email",name:"email",required:!0})]}),Object(u.jsx)("div",{className:"mt-4",children:Object(u.jsx)("input",{className:"btn btn-primary",type:"submit",name:"submit",value:"submit"})})]})})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root")),j()}},[[15,1,2]]]);
//# sourceMappingURL=main.626032d1.chunk.js.map