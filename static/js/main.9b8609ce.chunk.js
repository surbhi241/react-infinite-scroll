(this["webpackJsonpreact-infinite-scroll-app"]=this["webpackJsonpreact-infinite-scroll-app"]||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(25),c=a.n(s),i=(a(79),a(80),a(37)),o=a(8),l=a(38),d=a(16),u=a(17),j=a(105),b=a(130),p=a(21),m=a(138),x=a(139),f=a(137),g=a(132),O=a(133),h=a(134),w=a(107),y=a(2),N=Object(j.a)((function(e){return{root:{display:"flex",height:"100%",justifyContent:"center",alignItems:"center",background:"#FFFFFF"},container:{maxWidth:"500px"},loginWrapper:{background:"#f2f2f2",border:"1px solid #d6cbcb",borderRadius:"4px"},margin:{width:"calc(100% - 10px)"},btnMargin:{margin:e.spacing(3)},errorMsg:{color:"red",display:"flex",justifyContent:"center"},loginHead:{display:"flex",padding:e.spacing(2),borderBottom:"1px solid #d6cbcb"},wrapper:{display:"flex",padding:e.spacing(2)}}})),v=function(){var e=N(),t=Object(o.f)(),a=r.a.useState({userName:"",password:"",showPassword:!1,helperText:""}),n=Object(u.a)(a,2),s=n[0],c=n[1],i=function(e){return function(t){var a=t.target.value;c(Object(d.a)(Object(d.a)({},s),{},Object(l.a)({},e,a)))}};return Object(y.jsx)("div",{className:e.root,children:Object(y.jsx)(b.a,{className:e.container,children:Object(y.jsxs)(p.a,{className:e.loginWrapper,children:[Object(y.jsx)(p.a,{className:e.loginHead,children:"Login"}),Object(y.jsx)(p.a,{item:!0,xs:12,className:e.wrapper,children:Object(y.jsxs)(m.a,{className:e.margin,variant:"outlined",children:[Object(y.jsx)(x.a,{htmlFor:"outlined-adornment-password",children:"UserName"}),Object(y.jsx)(f.a,{"data-testid":"outlined-adornment-username",type:"text",value:s.userName,onChange:i("userName"),labelWidth:80})]})}),Object(y.jsx)(p.a,{item:!0,xs:12,className:e.wrapper,children:Object(y.jsxs)(m.a,{className:e.margin,variant:"outlined",children:[Object(y.jsx)(x.a,{htmlFor:"outlined-adornment-password",children:"Password"}),Object(y.jsx)(f.a,{"data-testid":"outlined-adornment-password",type:s.showPassword?"text":"password",value:s.password,onChange:i("password"),endAdornment:Object(y.jsx)(g.a,{position:"end",children:Object(y.jsx)(O.a,{"aria-label":"toggle password visibility",onClick:function(){c(Object(d.a)(Object(d.a)({},s),{},{showPassword:!s.showPassword}))},onMouseDown:function(e){e.preventDefault()},edge:"end",children:s.showPassword})}),labelWidth:80})]})}),s.helperText?Object(y.jsxs)(p.a,{item:!0,xs:12,className:e.wrapper,children:[Object(y.jsx)(h.a,{className:e.errorMsg,children:s.helperText})," "]}):null,Object(y.jsx)(p.a,{item:!0,xs:12,className:e.wrapper,children:Object(y.jsx)(w.a,{variant:"contained",color:"primary",className:e.margin,onClick:function(e){e.preventDefault();var a={userName:s.userName||"",password:s.password||""};localStorage.setItem("user",JSON.stringify(a)),"foo"===s.userName&&"bar"===s.password&&(t.push("/home"),c(Object(d.a)(Object(d.a)({},s),{},{helperText:""}))),"foo"!==s.userName&&c(Object(d.a)(Object(d.a)({},s),{},{helperText:"Wrong username. Please Try again"})),"bar"!==s.password&&c(Object(d.a)(Object(d.a)({},s),{},{helperText:"Wrong password. Please Try again"})),"bar"!==s.password&&"foo"!==s.userName&&c(Object(d.a)(Object(d.a)({},s),{},{helperText:"Wrong username and password. Please Try again"}))},children:"Login"})})]})})})},C=a(135),D=a(136),F=a(106),k=Object(j.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{marginLeft:e.spacing(2)},stickyHeader:{position:"fixed",top:0},btnContained:{color:"#3F51B5",background:"#FFF"}}})),S=function(){var e=Object(o.f)(),t=k();return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(C.a,{position:"static",className:t.stickyHeader,children:Object(y.jsx)(D.a,{children:Object(y.jsxs)(p.a,{container:!0,children:[Object(y.jsx)(p.a,{item:!0,xs:6,container:!0,justifyContent:"flex-start",children:Object(y.jsx)(F.a,{variant:"h6",className:t.title,children:"User List"})}),Object(y.jsx)(p.a,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:Object(y.jsx)(w.a,{color:"inherit",className:t.btnContained,variant:"contained",onClick:function(){localStorage.setItem("user",JSON.stringify({})),e.push("/")},children:"Logout"})})]})})})})},W=a(108),L=a(109),I=a(43),T=a(35),P=a.n(T),R=P.a.create();R.CancelToken=P.a.CancelToken,R.isCancel=P.a.isCancel;var M=P.a.create({baseURL:"https://randomuser.me/"}),B=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],s=a[1],c=Object(n.useState)(!1),i=Object(u.a)(c,2),o=i[0],l=i[1],d=Object(n.useState)(!1),j=Object(u.a)(d,2),b=j[0],p=j[1],m=Object(n.useState)(!0),x=Object(u.a)(m,2),f=x[0],g=x[1];return Object(n.useEffect)((function(){l(!0),p(!1),M({method:"GET",url:"api/",params:{results:20,page:e}}).then((function(e){var t=e.data.results;s((function(e){return Object(I.a)(new Set([].concat(Object(I.a)(e),Object(I.a)(t))))})),l(!1),t.length<20&&g(!1)})).catch((function(e){p(!0)}))}),[e]),{user:r,loading:o,error:b,hasMore:f}},E=a(34),U=Object(j.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"center",marginTop:"60px","& > *":{margin:e.spacing(1),width:e.spacing(86),height:"auto"}}}})),H=function(){var e=Object(n.useState)(1),t=Object(u.a)(e,2),a=t[0],r=t[1],s=B(a),c=s.user,i=s.loading,o=s.error,l=U(),d=Object(n.useRef)(),j=function(){d.current&&d.current.disconnect()},b=Object(n.useCallback)((function(e){if(!i)return j(),d.current=new IntersectionObserver((function(e){e[0].isIntersecting&&r((function(e){return e+1}))})),e&&d.current.observe(e),function(){j()}}),[i,d]);return Object(y.jsx)("div",{className:l.root,children:o?"Error Fetchig Data, Please refresh the page":Object(y.jsxs)(W.a,{children:[c instanceof Array?c.map((function(e){return Object(y.jsx)(E.a,{userDetails:e,isViewRequired:!0},e.login.uuid)})):Object(y.jsx)("p",{children:"No Data"}),Object(y.jsx)("div",{ref:b,children:Object(y.jsx)(L.a,{})})]})})},J=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(S,{}),Object(y.jsx)(H,{})]})};var z=function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsx)(i.a,{basename:"/react-infinite-scroll",children:Object(y.jsxs)(o.c,{children:[Object(y.jsx)(o.a,{exact:!0,path:"/",component:v}),Object(y.jsx)(o.a,{exact:!0,path:"/home",component:J})]})})})},A=function(e){e&&e instanceof Function&&a.e(5).then(a.bind(null,157)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))};c.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(z,{})}),document.getElementById("root")),A()},34:function(e,t,a){"use strict";a.d(t,"b",(function(){return j})),a.d(t,"c",(function(){return b}));var n=a(17),r=a(105),s=a(21),c=a(107),i=a(109),o=a(0),l=a.n(o),d=a(65),u=a(2),j=function(e){return"undefined"===typeof e||null===e},b=Object(r.a)((function(e){return{root:{flexGrow:1},cardWrapper:{border:"1px solid #f2f2f2",display:"flex",justifyContent:"center",padding:e.spacing(1)},buttonContainer:{display:"flex",justifyContent:"flex-end",alignItems:"center"},userCardContainer:{padding:e.spacing(1)},userDetailWrapperList:{display:"flex",alignSelf:"center",borderRadius:"50px"},userDetailWrapperDetails:{display:"flex",justifyContent:"center",borderRadius:"50px"},userImgSmall:{width:"calc(30% - 30px)",borderRadius:"50%"},userImgLarge:{maxWidth:"200px",borderRadius:"3%"},userName:{display:"flex",alignItems:"center",justifyContent:"flex-start",paddingLeft:e.spacing(2)},profileDetailsWrapper:{background:"rgba(63, 81, 181, 0.6)",color:"#FFF",borderRadius:"3px",padding:e.spacing(2),margin:e.spacing(1)}}}));t.a=function(e){var t=b(),r=e.userDetails,p=e.isViewRequired,m=l.a.lazy((function(){return Promise.all([a.e(3),a.e(4)]).then(a.bind(null,115))})),x=r&&r.name,f=x.first,g=x.last,O=(r&&r.picture).large,h=r.dob,w=r.gender,y=r.location,N=r.email,v=r.phone,C=Object(o.useState)(!1),D=Object(n.a)(C,2),F=D[0],k=D[1],S=Object(o.useState)({}),W=Object(n.a)(S,2),L=W[0],I=W[1],T=j(f)||j(g)?f||g:"".concat(f," ").concat(g),P={fullName:T,age:h.age,gender:w,email:N,phone:v,country:y.country,imgLarge:O},R=l.a.useCallback((function(){k(!F),I({personalDetails:P,head:"Personal Information"})}),[F,P]);return Object(o.useEffect)((function(){k(!1)}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(s.a,{container:!0,className:t.cardWrapper,children:[Object(u.jsxs)(s.a,{container:!0,justifyContent:"center",children:[Object(u.jsxs)(s.a,{item:!0,xs:8,sm:6,md:6,id:"userDetailWrapperDetails",className:p?t.userDetailWrapperList:t.userDetailWrapperDetails,children:[Object(u.jsx)("img",{src:O,alt:"user-img",id:"userImgLarge",loading:"lazy",className:t.userImgSmall}),Object(u.jsx)(s.a,{item:!0,xs:10,sm:8,md:8,className:t.userName,children:T})]}),p?Object(u.jsx)(s.a,{item:!0,xs:4,sm:6,md:6,className:t.buttonContainer,children:Object(u.jsx)(c.a,{color:"primary",variant:"contained",size:"small",onClick:R,children:"View"})}):null]}),Object(u.jsx)(s.a,{container:!0,justifyContent:"center",children:p?null:Object(u.jsx)(s.a,{item:!0,xs:12,children:Object(u.jsx)(d.a,{profileDetails:P})})})]}),F?Object(u.jsx)(o.Suspense,{fallback:Object(u.jsx)(i.a,{}),children:Object(u.jsx)(m,{dialogDetails:L,setOpenDialog:k,openDialog:F})}):null]})}},65:function(e,t,a){"use strict";var n=a(21),r=(a(0),a(34)),s=a(2);t.a=function(e){var t=e.profileDetails,a=Object(r.c)();return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(n.a,{item:!0,sm:12,children:[Object(s.jsx)(n.a,{item:!0,sm:12,container:!0,justify:"center",children:Object(s.jsx)("img",{src:t.imgLarge,alt:"user-img",id:"userImgLarge",className:a.userImgLarge})}),Object.keys(t).length?Object.keys(t).map((function(e){return Object(s.jsxs)(n.a,{xs:12,sm:12,md:12,className:a.profileDetailsWrapper,children:[e.toUpperCase()," : ",Object(r.b)(t[e])?"":t[e]]},e)})):"User data not available"]})})}},79:function(e,t,a){},80:function(e,t,a){}},[[104,1,2]]]);
//# sourceMappingURL=main.9b8609ce.chunk.js.map