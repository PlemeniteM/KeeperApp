(this["webpackJsonpkeeper-app-part-1-starting"]=this["webpackJsonpkeeper-app-part-1-starting"]||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(5),c=n.n(r),o=n(6),u=n(3);var i=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,"Trello"))},m=new Date;var f=function(){return l.a.createElement("footer",null,l.a.createElement("p",null,"\xa9  ",m.getFullYear()))};var p=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("button",{onClick:function(t){e.onDelete(e.id),t.preventDefault()}},"DELETE"))};var E=function(e){var t=l.a.useState({title:"",content:""}),n=Object(u.a)(t,2),a=n[0],r=n[1];function c(e){var t=e.target,n=t.name,a=t.value;r((function(e){return"title"===n?{title:a,content:e.content}:"content"===n?{title:e.title,content:a}:void 0}))}return l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("input",{onChange:c,name:"title",placeholder:"Title",value:a.title}),l.a.createElement("textarea",{onChange:c,name:"content",placeholder:"Take a note...",rows:"3",value:a.content}),l.a.createElement("button",{onClick:function(t){e.onChecked(a),r({title:"",content:""}),t.preventDefault()}},"Add")))};var v=function(){var e=l.a.useState([]),t=Object(u.a)(e,2),n=t[0],a=t[1];function r(e){a((function(t){return t.filter((function(t,n){return n!==e}))}))}return l.a.createElement("div",null,l.a.createElement(i,null),l.a.createElement(E,{onChecked:function(e){a((function(t){return[].concat(Object(o.a)(t),[e])}))}}),n.map((function(e,t){return l.a.createElement(p,{key:1,id:t,title:e.title,content:e.content,onDelete:r})})),l.a.createElement(f,null))};c.a.render(l.a.createElement(v,null),document.querySelector("#root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.5e2b78db.chunk.js.map