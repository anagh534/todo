(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{11:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),i=n(4),s=n.n(i),o=n(3),r=(n(9),n(0));var l=function(){var t=Object(c.useState)(""),e=Object(o.a)(t,2),n=e[0],a=e[1],i=Object(c.useState)([]),s=Object(o.a)(i,2),l=s[0],d=s[1],j=function(t){var e=l;e.push(t),localStorage.setItem("todoList",JSON.stringify(e)),d(e),window.location.pathname="/react-todoapp/"};return Object(c.useEffect)((function(){var t=localStorage.getItem("todoList");if(t){var e=JSON.parse(t);d(e)}}),[]),Object(r.jsxs)("div",{className:"app",children:[Object(r.jsx)("div",{className:"mainHeading",children:Object(r.jsx)("h1",{children:"ToDo List"})}),Object(r.jsxs)("div",{className:"Toleft",children:[Object(r.jsxs)("div",{className:"input",children:[Object(r.jsx)("input",{type:"text",onChange:function(t){return function(t){var e=t.target.value;a(e)}(t)},id:"input",placeholder:"\ud83d\udd8a\ufe0f Add item...",className:"mr"}),Object(r.jsx)("i",{onClick:function(){document.getElementById("input").value&&function(){var t={};t.Text=n,t.Status=!1,t.Id=Date.now(),j(t)}()},children:"+"})]}),l.map((function(t,e){return Object(r.jsx)("div",{className:"todos",children:Object(r.jsxs)("div",{className:"todo",children:[Object(r.jsxs)("div",{className:"left",children:[Object(r.jsx)("input",{type:"checkbox",onChange:function(e){d(l.filter((function(n){return n.Id===t.Id&&(n.Status=e.target.checked,localStorage.setItem("todoList",JSON.stringify(l))),n})))},checked:t.Status,className:"mr"}),t.Status?Object(r.jsx)("p",{className:"p",children:Object(r.jsx)("del",{children:t.Text})}):Object(r.jsx)("p",{className:"p",children:t.Text})]}),Object(r.jsx)("div",{className:"right",children:Object(r.jsx)("i",{onClick:function(){return function(t){var e=l;e.splice(t,1),localStorage.setItem("todoList",JSON.stringify(e)),d(e),window.location.pathname="/react-todoapp/"}(e)},children:"\xd7"})},e)]})})}))]})]})};n(11);var d=function(){return Object(r.jsx)("div",{children:Object(r.jsxs)("nav",{className:"nav",children:[Object(r.jsx)("button",{onClick:function(){return window.location.pathname="/react-todoapp/"},className:"nav__link",children:Object(r.jsx)("i",{className:"material-icons nav__icon",children:"home"})}),Object(r.jsx)("button",{className:"nav__link",onClick:function(){return alert("wait for next version..")},children:Object(r.jsx)("i",{className:"material-icons nav__icon",children:"format_list_bulleted"})}),Object(r.jsx)("button",{onClick:function(){return window.location.pathname="/react-todoapp/offline.html"},className:"nav__link",children:Object(r.jsx)("span",{className:"material-icons nav__icon",children:"sports_esports"})}),Object(r.jsx)("button",{onClick:function(){navigator.share({title:"Todo",text:"Open the link and click the add to home screen banner",url:"https://anagh534.github.io/react-todoapp/"})},className:"nav__link",children:Object(r.jsx)("i",{className:"material-icons nav__icon",children:"share"})})]})})};s.a.render(Object(r.jsxs)(a.a.StrictMode,{children:[Object(r.jsx)(l,{}),Object(r.jsx)(d,{})]}),document.getElementById("root"))},9:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.d5092a98.chunk.js.map