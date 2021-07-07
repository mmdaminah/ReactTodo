(this["webpackJsonpfinal-react-todo"]=this["webpackJsonpfinal-react-todo"]||[]).push([[0],{127:function(e,t,a){},128:function(e,t,a){},134:function(e,t,a){"use strict";a.r(t);var s=a(1),i=a.n(s),n=a(16),l=a.n(n),c=(a(127),a(14)),r=(a(128),a(89)),o=(a(84),a(75)),d=a(182),j=a(183),u=a(104),b=a(180),O=a(186),h=a(193),k=a(166),x=a(189),T=a(184),m=a(174),f=a(3),v=function(e){var t=e.title,a=e.items,s=e.setFilter,i=e.width;return Object(f.jsxs)(k.a,{variant:"outlined",className:i,children:[Object(f.jsx)(x.a,{id:"demo-simple-select-outlined-label",children:t}),Object(f.jsx)(T.a,{className:"mx-2",name:t,labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",label:"Age",onChange:function(e){var t=e.target;s(t.value)},children:a.map((function(e){return Object(f.jsx)(m.a,{value:e,children:e})}))})]})},g=a(175),y=a(49),D=a(21),S=a(181);function p(e){var t=e.setSelectedDate,a=e.selectedDate;return Object(f.jsx)(D.a,{utils:y.a,children:Object(f.jsx)(g.a,{className:"w-50",container:!0,justify:"space-around",children:Object(f.jsx)(S.a,{margin:"normal",id:"date-picker-dialog",label:"Date picker dialog",format:"MM/dd/yyyy",value:a,onChange:function(e){t(e)},KeyboardButtonProps:{"aria-label":"change date"}})})})}var w=function(e){var t=e.setTaskNameInput,a=e.setPriority,s=e.setStatus,i=e.setSelectedDate,n=e.selectedDate,l=(e.TaskDetails,e.setTaskDetails);return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{children:Object(f.jsxs)("form",{noValidate:!0,autoComplete:"off",children:[Object(f.jsx)(h.a,{className:"mx-2 my-3",onChange:function(e){var a=e.target;t(a.value)},id:"outlined-basic",label:"Task Name",variant:"outlined"}),Object(f.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(f.jsx)(v,{width:"w-25",title:"Priority",items:["Low","Medium","High"],setFilter:a}),Object(f.jsx)(v,{width:"w-25",title:"Status",items:["To do","Doing","Done"],setFilter:s}),Object(f.jsx)(p,{setSelectedDate:i,selectedDate:n})]}),Object(f.jsx)(h.a,{className:"w-100 mx-2 mt-3",id:"outlined-multiline-static",label:"Task Details",multiline:!0,rows:4,onChange:function(e){var t=e.target;l(t.value)},placeholder:"Task Details...",variant:"outlined"})]})})})},N=function(e){var t=e.show,a=e.handleClose,s=e.handleSave,i=e.setTaskNameInput,n=e.setPriority,l=e.setStatus,c=e.setSelectedDate,r=e.selectedDate,o=e.TaskDetails,d=e.setTaskDetails;return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(b.a,{size:"lg",show:t,onHide:a,children:[Object(f.jsx)(b.a.Header,{closeButton:!0,children:Object(f.jsx)(b.a.Title,{children:"New Task"})}),Object(f.jsx)(b.a.Body,{children:Object(f.jsx)(w,{setTaskNameInput:i,setPriority:n,setStatus:l,setSelectedDate:c,selectedDate:r,TaskDetails:o,setTaskDetails:d})}),Object(f.jsxs)(b.a.Footer,{className:"d-flex justify-content-between",children:[Object(f.jsx)(O.a,{variant:"light",onClick:a,children:"CANCEL"}),Object(f.jsx)(O.a,{variant:"primary",onClick:s,children:"SAVE"})]})]})})},P=a(74),C=a(88),A=a(176),F=a(188),M=a(173),H=a(178),L=a(135),E=Object(A.a)({list:{width:250},fullList:{width:"auto"}});function I(e){e.Tasks;var t=e.setTasks,a=e.copiedTasks,n=(e.setCopiedTasks,Object(s.useState)("All")),l=Object(c.a)(n,2),r=l[0],d=l[1],j=Object(s.useState)("All"),u=Object(c.a)(j,2),b=u[0],O=u[1],h=Object(s.useState)("All"),k=Object(c.a)(h,2),x=k[0],T=k[1];Object(s.useEffect)((function(){var e,s,i;"All"!==r&&"All"===b&&"All"===x?t(a.filter((function(e){return e.TaskPriority===r}))):"All"!==b&&"All"===r&&"All"===x?t(a.filter((function(e){return e.TaskStatus===b}))):"All"!==x&&"All"===r&&"All"===b?t(m()):"All"!==b&&"All"!==r&&"All"===x?t(a.filter((function(e){return e.TaskStatus===b})).filter((function(e){return e.TaskPriority===r}))):"All"===b&&"All"!==r&&"All"!==x?t(null===(e=m())||void 0===e?void 0:e.filter((function(e){return e.TaskPriority===r}))):"All"!==b&&"All"===r&&"All"!==x?t(null===(s=m())||void 0===s?void 0:s.filter((function(e){return e.TaskStatus===b}))):"All"!==x&&"All"!==r&&"All"!==b?t(null===(i=m())||void 0===i?void 0:i.filter((function(e){return e.TaskStatus===b})).filter((function(e){return e.TaskPriority===r}))):"All"===x&&"All"==r&&"All"===b&&t(a)}),[x,r,b]);var m=function(){return"Overdue"===x?a.filter((function(e){return e.TaskDeadline.getDate()<(new Date).getDate()})):"For the future"===x?a.filter((function(e){return e.TaskDeadline.getDate()>(new Date).getDate()})):"For today"===x?a.filter((function(e){return e.TaskDeadline.getDate()===(new Date).getDate()})):void 0},g=(E(),i.a.useState({top:!1,left:!1,bottom:!1,right:!1})),y=Object(c.a)(g,2),D=y[0],S=y[1],p=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&S(Object(C.a)(Object(C.a)({},D),{},Object(P.a)({},e,t)))}};return Object(f.jsx)("div",{children:Object(f.jsxs)(i.a.Fragment,{children:[Object(f.jsx)(o.a,{className:"mx-2",style:{width:"25px",height:"25px"},onClick:p("right",!0)}),Object(f.jsx)(F.a,{anchor:"right",open:D.right,onClose:p("right",!1),children:Object(f.jsxs)("div",{role:"presentation",children:[Object(f.jsxs)(M.a,{children:[Object(f.jsx)(L.a,{children:Object(f.jsx)("h1",{children:"Todo Filter"})}),Object(f.jsx)(L.a,{button:!0,children:Object(f.jsx)(v,{width:"w-100",title:"Priority",items:["All","Low","Medium","High"],setFilter:d})},"Priority"),Object(f.jsx)(L.a,{button:!0,children:Object(f.jsx)(v,{width:"w-100",title:"Status",items:["All","To do","Doing","Done"],setFilter:O})},"Status"),Object(f.jsx)(L.a,{button:!0,children:Object(f.jsx)(v,{width:"w-100",title:"Deadline",items:["All","Overdue","For today","For the future"],setFilter:T})},"Deadline")]}),Object(f.jsx)(H.a,{})]})})]},"right")})}var B=function(e){var t=e.Tasks,a=e.setTasks,i=e.copiedTasks,n=e.setCopiedTasks,l=Object(s.useState)(!1),b=Object(c.a)(l,2),O=b[0],h=b[1],k=Object(s.useState)(""),x=Object(c.a)(k,2),T=x[0],m=x[1],v=Object(s.useState)(""),g=Object(c.a)(v,2),y=g[0],D=g[1],S=Object(s.useState)(""),p=Object(c.a)(S,2),w=p[0],P=p[1],C=Object(s.useState)(""),A=Object(c.a)(C,2),F=A[0],M=A[1],H=Object(s.useState)(new Date),L=Object(c.a)(H,2),E=L[0],B=L[1];return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(d.a,{bg:"light",expand:"lg",className:"w-100",children:[Object(f.jsxs)("div",{className:"d-flex justify-content-between w-100",children:[Object(f.jsx)("div",{children:Object(f.jsx)(d.a.Brand,{href:"#home",children:"My To-Do Tasks"})}),Object(f.jsx)("div",{children:Object(f.jsxs)(j.a,{inline:!0,children:[Object(f.jsx)(u.a,{onChange:function(e){var s=e.target;""===s.value?a(i):a(t.filter((function(e){return e.TaskName.startsWith(s.value)})))},type:"text",placeholder:"Search",className:"mr-sm-2"}),Object(f.jsx)(o.b,{className:"mx-2",style:{width:"25px",height:"25px"},onClick:function(){return h(!0)}}),Object(f.jsx)(I,{Tasks:t,setTasks:a,copiedTasks:i,setCopiedTasks:n})]})})]}),Object(f.jsx)(N,{show:O,handleClose:function(){h(!1)},handleSave:function(){var e=Date.now();a([].concat(Object(r.a)(t),[{id:e,TaskName:T,TaskPriority:y,TaskStatus:w,TaskDeadline:E,TaskDetails:F}])),n([].concat(Object(r.a)(t),[{id:e,TaskName:T,TaskPriority:y,TaskStatus:w,TaskDeadline:E,TaskDetails:F}])),h(!1)},setTaskNameInput:m,setPriority:D,setStatus:P,setSelectedDate:B,selectedDate:E,TaskDetails:F,setTaskDetails:M})]})})},V=a(187),K=a(28),J=a(179),z=function(e){var t=e.show,a=e.onHide,i=e.itemTobeEdited,n=e.Tasks,l=(e.setTasks,e.setCopiedTasks,Object(s.useState)(i.TaskName)),r=Object(c.a)(l,2),o=r[0],d=r[1],j=Object(s.useState)(i.TaskPriority),u=Object(c.a)(j,2),v=u[0],p=u[1],w=Object(s.useState)(i.TaskDetails),N=Object(c.a)(w,2),P=N[0],C=N[1],A=Object(s.useState)(i.TaskStatus),F=Object(c.a)(A,2),M=F[0],H=F[1],L=Object(s.useState)(new Date),E=Object(c.a)(L,2),I=E[0],B=E[1];return Object(f.jsxs)(b.a,{show:t,onHide:a,children:[Object(f.jsx)(b.a.Header,{children:Object(f.jsx)(b.a.Title,{children:"Edit Task"})}),Object(f.jsxs)(b.a.Body,{children:[Object(f.jsx)(h.a,{onChange:function(e){var t=e.target;d(t.value)},className:"mx-2 my-3",defaultValue:i.TaskName,id:"outlined-basic",label:"Task Name",variant:"outlined"}),Object(f.jsxs)("div",{children:[Object(f.jsxs)(k.a,{variant:"outlined",className:"w-25",children:[Object(f.jsx)(x.a,{id:"demo-simple-select-outlined-label",children:"Priority"}),Object(f.jsxs)(T.a,{className:"mx-2",name:"Priority",labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",label:"Age",defaultValue:i.TaskPriority,onChange:function(e){var t=e.target;p(t.value)},children:[Object(f.jsx)(m.a,{value:i.TaskPriority,children:i.TaskPriority}),"Low"!=i.TaskPriority&&Object(f.jsx)(m.a,{value:"Low",children:"Low"}),"Medium"!=i.TaskPriority&&Object(f.jsx)(m.a,{value:"Medium",children:"Medium"}),"High"!=i.TaskPriority&&Object(f.jsx)(m.a,{value:"High",children:"High"})]})]}),Object(f.jsxs)(k.a,{variant:"outlined",className:"w-25",children:[Object(f.jsx)(x.a,{id:"demo-simple-select-outlined-label",children:"Priority"}),Object(f.jsxs)(T.a,{className:"mx-2",name:"Priority",labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",label:"Age",defaultValue:i.TaskStatus,onChange:function(e){var t=e.target;H(t.value)},children:[Object(f.jsx)(m.a,{value:i.TaskStatus,children:i.TaskStatus}),"To do"!=i.TaskStatus&&Object(f.jsx)(m.a,{value:"To do",children:"To do"}),"Doing"!=i.TaskStatus&&Object(f.jsx)(m.a,{value:"Doing",children:"Doing"}),"Done"!=i.TaskStatus&&Object(f.jsx)(m.a,{value:"Done",children:"Done"})]})]}),Object(f.jsx)(D.a,{utils:y.a,children:Object(f.jsx)(g.a,{className:"w-50",container:!0,justify:"space-around",children:Object(f.jsx)(S.a,{margin:"normal",id:"date-picker-dialog",label:"Date picker dialog",format:"MM/dd/yyyy",value:I,defaultValue:i.TaskDeadline,onChange:function(e){B(e)},KeyboardButtonProps:{"aria-label":"change date"}})})}),Object(f.jsx)(h.a,{className:"w-100 mx-2 mt-3",id:"outlined-multiline-static",label:"Task Details",multiline:!0,rows:4,onChange:function(e){var t=e.target;C(t.value)},defaultValue:i.TaskDetails,placeholder:"Task Details...",variant:"outlined"})]})]}),Object(f.jsxs)(b.a.Footer,{className:"d-flex justify-content-between",children:[Object(f.jsx)(O.a,{variant:"light",onClick:a,children:"CANCEL"}),Object(f.jsx)(O.a,{variant:"primary",onClick:function(){var e=n.find((function(e){return e.id===i.id}));o&&(e.TaskName=o),v&&(e.TaskPriority=v),M&&(e.TaskStatus=M),I&&(e.TaskDeadline=I),P&&(e.TaskDetails=P),a()},children:"SAVE"})]})]})},W=function(e){var t=e.show,a=e.onHide,s=e.itemTobeShowed;return Object(f.jsxs)(b.a,{show:t,onHide:a,children:[Object(f.jsx)(b.a.Header,{children:Object(f.jsx)(b.a.Title,{children:"Edit Task"})}),Object(f.jsxs)(b.a.Body,{children:[Object(f.jsx)(h.a,{className:"mx-2 my-3",value:s.TaskName,id:"outlined-basic",label:"Task Name",variant:"outlined"}),Object(f.jsxs)("div",{children:[Object(f.jsxs)(k.a,{variant:"outlined",className:"w-25",children:[Object(f.jsx)(x.a,{id:"demo-simple-select-outlined-label",children:"Priority"}),Object(f.jsx)(T.a,{className:"mx-2",name:"Priority",labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",label:"Age",value:s.TaskPriority,children:Object(f.jsx)(m.a,{value:s.TaskPriority,children:s.TaskPriority})})]}),Object(f.jsxs)(k.a,{variant:"outlined",className:"w-25",children:[Object(f.jsx)(x.a,{id:"demo-simple-select-outlined-label",children:"Priority"}),Object(f.jsx)(T.a,{className:"mx-2",name:"Priority",labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",label:"Age",value:s.TaskStatus,children:Object(f.jsx)(m.a,{value:s.TaskStatus,children:s.TaskStatus})})]}),Object(f.jsx)(D.a,{utils:y.a,children:Object(f.jsx)(g.a,{className:"w-50",container:!0,justify:"space-around",children:Object(f.jsx)(S.a,{margin:"normal",id:"date-picker-dialog",label:"Date picker dialog",format:"MM/dd/yyyy",value:s.TaskDeadline,onChange:function(){},KeyboardButtonProps:{"aria-label":"change date"}})})}),Object(f.jsx)(h.a,{className:"w-100 mx-2 mt-3",id:"outlined-multiline-static",label:"Task Details",multiline:!0,rows:4,value:s.TaskDetails,placeholder:"Task Details...",variant:"outlined"})]})]})]})},q=function(e){var t=e.Tasks,a=e.setTasks,i=(e.copiedTasks,e.setCopiedTasks),n=Object(s.useState)(!1),l=Object(c.a)(n,2),r=l[0],o=l[1],d=Object(s.useState)({TaskDeadline:new Date,TaskDetails:"shit",TaskName:"nothing",TaskPriority:"High",TaskStatus:"To do",id:1}),j=Object(c.a)(d,2),u=j[0],b=j[1],O=Object(s.useState)(!1),h=Object(c.a)(O,2),k=h[0],x=h[1],T=Object(s.useState)(0),m=Object(c.a)(T,2),v=m[0],g=m[1],y=function(e){return"High"===e?3:"Medium"===e?2:1},D=Object(s.useState)(!1),S=Object(c.a)(D,2),p=S[0],w=S[1],N=Object(s.useState)(0),P=Object(c.a)(N,2),C=P[0],A=P[1],F=function(e){return"To do"===e?3:"Doing"===e?2:1},M=Object(s.useState)(!1),H=Object(c.a)(M,2),L=H[0],E=H[1],I=Object(s.useState)(0),B=Object(c.a)(I,2),q=B[0],G=B[1],Q=Object(s.useState)(!1),R=Object(c.a)(Q,2),U=R[0],X=R[1],Y=Object(s.useState)({id:0,TaskStatus:"",TaskDeadline:"",TaskName:"",TaskPriority:"",TaskDetails:""}),Z=Object(c.a)(Y,2),$=Z[0],_=Z[1];return Object(f.jsxs)(J.a,{striped:!0,bordered:!0,hover:!0,children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"Task"}),Object(f.jsxs)("th",{onMouseEnter:function(){return x(!0)},onMouseLeave:function(){return x(!1)},onClick:function(){g(v+1),(v+1)%3===0?a(t.sort((function(e,t){return e.id-t.id}))):(v+1)%3===1?a(t.sort((function(e,t){return y(t.TaskPriority)-y(e.TaskPriority)}))):(v+1)%3===2&&a(t.sort((function(e,t){return y(e.TaskPriority)-y(t.TaskPriority)})))},children:["Priority ",v%3===1&&Object(f.jsx)(K.b,{}),v%3===2&&Object(f.jsx)(K.a,{}),k&&v%3===0&&Object(f.jsx)(K.b,{})]}),Object(f.jsxs)("th",{onMouseEnter:function(){return w(!0)},onMouseLeave:function(){return w(!1)},onClick:function(){A(C+1),(C+1)%3===0?a(t.sort((function(e,t){return e.id-t.id}))):(C+1)%3===1?a(t.sort((function(e,t){return F(t.TaskStatus)-F(e.TaskStatus)}))):(C+1)%3===2&&a(t.sort((function(e,t){return F(e.TaskStatus)-F(t.TaskStatus)})))},children:["Status ",C%3===1&&Object(f.jsx)(K.b,{}),C%3===2&&Object(f.jsx)(K.a,{}),p&&C%3===0&&Object(f.jsx)(K.b,{})]}),Object(f.jsxs)("th",{onMouseEnter:function(){return E(!0)},onMouseLeave:function(){return E(!1)},onClick:function(){G(q+1),(q+1)%3===0?a(t.sort((function(e,t){return e.id-t.id}))):(q+1)%3===1?a(t.sort((function(e,t){return t.TaskDeadline-e.TaskDeadline}))):(q+1)%3===2&&a(t.sort((function(e,t){return e.TaskDeadline-t.TaskDeadline})))},children:["Deadline ",q%3===1&&Object(f.jsx)(K.b,{}),q%3===2&&Object(f.jsx)(K.a,{}),L&&q%3===0&&Object(f.jsx)(K.b,{})]}),Object(f.jsx)("th",{children:"Actions"})]})}),Object(f.jsxs)("tbody",{className:"text-center",children:[Object(f.jsx)(W,{show:r,onHide:function(){return o(!1)},itemTobeShowed:u}),Object(f.jsx)(z,{show:U,onHide:function(){return X(!1)},itemTobeEdited:$,Tasks:t,setTasks:a,setCopiedTasks:i}),t.map((function(e){var s=e.TaskDeadline,n="";"High"===e.TaskPriority?n="bg-danger text-white":"Medium"===e.TaskPriority&&(n="bg-warning text-white");var l="";return l="Done"===e.TaskStatus?"bg-success text-white":"To do"===e.TaskStatus?"bg-primary text-white":"bg-warning text-white",Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e.TaskName}),Object(f.jsx)("td",{children:Object(f.jsx)(V.a,{className:n,label:e.TaskPriority})}),Object(f.jsx)("td",{children:Object(f.jsx)(V.a,{className:l,label:e.TaskStatus})}),Object(f.jsx)("td",{children:s.toLocaleDateString()}),Object(f.jsxs)("td",{children:[Object(f.jsx)(K.d,{className:"mx-2",onClick:function(){return function(e){var a=t.find((function(t){return t.id===e}));a&&b(a),o(!0)}(e.id)}}),Object(f.jsx)(K.c,{onClick:function(){return function(e){var a=t.find((function(t){return t.id===e}));a&&_(a),X(!0)}(e.id)},className:"mx-3"}),Object(f.jsx)(K.e,{className:"mx-2",onClick:function(){return s=e.id,a(t.filter((function(e){return s!==e.id}))),void i(t);var s}})]})]})}))]})]})};var G=function(){var e=Object(s.useState)([]),t=Object(c.a)(e,2),a=t[0],i=t[1],n=Object(s.useState)([]),l=Object(c.a)(n,2),r=l[0],o=l[1];return Object(f.jsxs)("div",{children:[Object(f.jsx)(B,{Tasks:a,setTasks:i,copiedTasks:r,setCopiedTasks:o}),Object(f.jsx)(q,{Tasks:a,setTasks:i,copiedTasks:r,setCopiedTasks:o})]})},Q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,194)).then((function(t){var a=t.getCLS,s=t.getFID,i=t.getFCP,n=t.getLCP,l=t.getTTFB;a(e),s(e),i(e),n(e),l(e)}))};l.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(G,{})}),document.getElementById("root")),Q()}},[[134,1,2]]]);
//# sourceMappingURL=main.d932aee6.chunk.js.map