(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(4),r=n.n(a),l=(n(12),n(13),n(14),n(6)),s=n(2);var i=n(0),d=o.a.createContext();function u(e){var t=function(e,t){var n=o.a.useState(!0),c=Object(s.a)(n,2),a=c[0],r=c[1],l=o.a.useState(!1),i=Object(s.a)(l,2),d=i[0],u=i[1],j=o.a.useState(t),O=Object(s.a)(j,2),b=O[0],m=O[1];return o.a.useEffect((function(){setTimeout((function(){try{var n,c=localStorage.getItem(e);c?n=JSON.parse(c):(c.setItem(e,JSON.stringify(t)),n=t),m(n),r(!1)}catch(d){u(d)}}),2e3)})),{item:b,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),m(t)}catch(d){u(d)}},loading:a,error:d}}("TODOS_V1",[]),n=t.item,c=t.saveItem,a=t.loading,r=t.error,u=o.a.useState(""),j=Object(s.a)(u,2),O=j[0],b=j[1],m=o.a.useState(!1),x=Object(s.a)(m,2),p=x[0],f=x[1],h=n.filter((function(e){return!!e.completed})).length,v=n.length,g=[];g=!O.length>=1?n:n.filter((function(e){var t=e.text.toLowerCase(),n=O.toLowerCase();return t.includes(n)}));return Object(i.jsx)(d.Provider,{value:{loading:a,error:r,totalTodos:v,completedTodos:h,searchValue:O,setSearchValue:b,searchedTodos:g,completeTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),o=Object(l.a)(n);o[t].completed=!0,c(o)},addTodo:function(e){var t=Object(l.a)(n);t.push({completed:!1,text:e}),c(t)},deleteTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),o=Object(l.a)(n);o.splice(t,1),c(o)},openModal:p,setOpenModal:f},children:e.children})}function j(){var e=o.a.useContext(d),t=e.totalTodos,n=e.completedTodos;return Object(i.jsxs)("h2",{className:"TodoCounter",children:[" Has completado ",n," de ",t," TODOS "]})}n(16);function O(){var e=o.a.useContext(d),t=e.searchValue,n=e.setSearchValue;return[Object(i.jsx)("input",{className:"TodoSearch",placeholder:"Buscar TODO",value:t,onChange:function(e){n(e.target.value)}})]}n(17);function b(e){return Object(i.jsx)("section",{children:Object(i.jsx)("ul",{children:e.children})})}n(18);function m(e){var t=o.a.useContext(d),n=t.setOpenModal,c=t.openModal;return Object(i.jsx)("button",{className:"CreateTodoButton",onClick:function(){n(!c)},"data-bs-target":"#exampleModal","data-bs-toggle":"modal",children:"+"})}n(19);function x(e){return Object(i.jsxs)("li",{className:"TodoItem",children:[Object(i.jsx)("span",{className:"Icon Icon-check ".concat(e.completed&&"Icon-check--active"),onClick:function(){alert("Completaste el TODO "+e.text)},children:"\u2611"}),Object(i.jsx)("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete"),children:e.text}),Object(i.jsx)("span",{className:"Icon Icon-delete",onClick:function(){alert("Borraste el TODO "+e.text)},children:"\u2717"})]})}n(20);var p=function(e){var t=e.children;return r.a.createPortal(Object(i.jsx)("div",{className:"modalStyles ",children:t}),document.getElementById("modal"))},f=function(){var e=o.a.useState(""),t=Object(s.a)(e,2),n=t[0],c=t[1],a=o.a.useContext(d),r=a.setOpenModal,l=a.openModal,u=a.addTodo;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u(n),r(!1)},children:[Object(i.jsxs)("div",{class:"mb-3",children:[Object(i.jsx)("label",{for:"exampleInputEmail1",class:"form-label",children:"Write you TODO here"}),Object(i.jsx)("textarea",{value:n,onChange:function(e){c(e.target.value)},class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"}),Object(i.jsx)("div",{id:"emailHelp",class:"form-text",children:"It will send to your list TODO."})]}),Object(i.jsx)("button",{type:"submit",class:"btn btn-success",children:"Add"}),Object(i.jsx)("button",{type:"button",class:"btn btn-danger",onClick:function(){r(!l)},children:"Cancel"})]})})};function h(){var e=o.a.useContext(d),t=e.error,n=e.loading,c=e.searchedTodos,a=e.completeTodo,r=e.deleteTodo,l=e.openModal,s=e.setOpenModal;return Object(i.jsxs)(o.a.Fragment,{children:[Object(i.jsx)(j,{}),Object(i.jsx)(O,{}),Object(i.jsxs)(b,{children:[n&&Object(i.jsx)("p",{children:"Estamos cargando, espera un momento mas"}),t&&Object(i.jsx)("p",{children:"Hubo un error, recarga la p\xe1gina"}),!n&&!c.length&&Object(i.jsx)("p",{children:"!CREA TU PRIMER TODO!"}),c.map((function(e){return Object(i.jsx)(x,{text:e.text,completed:e.completed,onComplete:function(){return a(e.text)},onDelete:function(){return r(e.text)}},e.text)}))]}),!!l&&Object(i.jsx)(p,{children:Object(i.jsx)(f,{})}),Object(i.jsx)(m,{setOpenModal:s})]})}var v=function(){return Object(i.jsx)(u,{children:Object(i.jsx)(h,{})})};r.a.render(Object(i.jsx)(v,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.3b755457.chunk.js.map