(this["webpackJsonpreact-infinite-scroll-app"]=this["webpackJsonpreact-infinite-scroll-app"]||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(24),c=a.n(s),i=(a(77),a(78),a(35)),o=a(8),l=a(36),u=a(15),d=a(16),j=a(123),b=a(103),p=a(135),f=a(136),O=a(134),g=a(126),h=a(127),m=a(128),x=a(129),w=a(2),y=Object(j.a)((function(e){return{root:{display:"flex",background:"#76c7c0",height:"100%",justifyContent:"center",alignItems:"center","& > *":{margin:e.spacing(1),width:"400px",height:"300px",padding:e.spacing(3)}},margin:{margin:e.spacing(3),width:"40ch"},btnMargin:{margin:e.spacing(3)},errorMsg:{color:"red",display:"flex",justifyContent:"center"}}})),v=function(){var e=y(),t=Object(o.f)(),a=r.a.useState({userName:"",password:"",showPassword:!1,helperText:""}),n=Object(d.a)(a,2),s=n[0],c=n[1],i=function(e){return function(t){var a=t.target.value;c(Object(u.a)(Object(u.a)({},s),{},Object(l.a)({},e,a)))}};return Object(w.jsx)("div",{className:e.root,children:Object(w.jsxs)(b.a,{children:[Object(w.jsxs)(p.a,{className:e.margin,variant:"outlined",children:[Object(w.jsx)(f.a,{htmlFor:"outlined-adornment-password",children:"UserName"}),Object(w.jsx)(O.a,{"data-testid":"outlined-adornment-username",type:"text",value:s.userName,onChange:i("userName"),labelWidth:80})]}),Object(w.jsxs)(p.a,{className:e.margin,variant:"outlined",children:[Object(w.jsx)(f.a,{htmlFor:"outlined-adornment-password",children:"Password"}),Object(w.jsx)(O.a,{"data-testid":"outlined-adornment-password",type:s.showPassword?"text":"password",value:s.password,onChange:i("password"),endAdornment:Object(w.jsx)(g.a,{position:"end",children:Object(w.jsx)(h.a,{"aria-label":"toggle password visibility",onClick:function(){c(Object(u.a)(Object(u.a)({},s),{},{showPassword:!s.showPassword}))},onMouseDown:function(e){e.preventDefault()},edge:"end",children:s.showPassword})}),labelWidth:80})]}),s.helperText?Object(w.jsx)(m.a,{className:e.errorMsg,children:s.helperText}):null,Object(w.jsx)(x.a,{variant:"contained",color:"primary",className:e.margin,onClick:function(e){e.preventDefault();var a={userName:s.userName||"",password:s.password||""};localStorage.setItem("user",JSON.stringify(a)),"foo"===s.userName&&"bar"===s.password&&(t.push("/home"),c(Object(u.a)(Object(u.a)({},s),{},{helperText:""}))),"foo"!==s.userName&&c(Object(u.a)(Object(u.a)({},s),{},{helperText:"Wrong username. Please Try again"})),"bar"!==s.password&&c(Object(u.a)(Object(u.a)({},s),{},{helperText:"Wrong password. Please Try again"})),"bar"!==s.password&&"foo"!==s.userName&&c(Object(u.a)(Object(u.a)({},s),{},{helperText:"Wrong username and password. Please Try again"}))},children:"Login"})]})})},C=a(130),N=a(131),D=a(104),S=Object(j.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},stickyHeader:{position:"fixed",top:0},btnContained:{color:"#3F51B5",background:"#FFF"}}})),k=function(){var e=Object(o.f)(),t=S();return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(C.a,{position:"static",className:t.stickyHeader,children:Object(w.jsxs)(N.a,{children:[Object(w.jsx)(D.a,{variant:"h6",className:t.title,children:"User List"}),Object(w.jsx)(x.a,{color:"inherit",className:t.btnContained,variant:"contained",onClick:function(){localStorage.setItem("user",JSON.stringify({})),e.push("/")},children:"Logout"})]})})})},F=a(133),T=a(41),I=a(33),P=a.n(I),W=P.a.create();W.CancelToken=P.a.CancelToken,W.isCancel=P.a.isCancel;var L=P.a.create({baseURL:"https://randomuser.me/"}),R=function(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2),r=a[0],s=a[1],c=Object(n.useState)(!1),i=Object(d.a)(c,2),o=i[0],l=i[1],u=Object(n.useState)(!1),j=Object(d.a)(u,2),b=j[0],p=j[1],f=Object(n.useState)(!0),O=Object(d.a)(f,2),g=O[0],h=O[1];return Object(n.useEffect)((function(){l(!0),p(!1),L({method:"GET",url:"api/",params:{results:20,page:e}}).then((function(e){var t=e.data.results;s((function(e){return Object(T.a)(new Set([].concat(Object(T.a)(e),Object(T.a)(t))))})),l(!1),t.length<20&&h(!1)})).catch((function(e){p(!0)}))}),[e]),{user:r,loading:o,error:b,hasMore:g}},M=a(63),E=Object(j.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"center",marginTop:"60px","& > *":{margin:e.spacing(1),width:e.spacing(86),height:"auto"}}}})),U=function(){var e=Object(n.useState)(1),t=Object(d.a)(e,2),a=t[0],r=t[1],s=R(a),c=s.user,i=s.loading,o=s.error,l=E(),u=Object(n.useRef)(),j=function(){u.current&&u.current.disconnect()},p=Object(n.useCallback)((function(e){if(!i)return j(),u.current=new IntersectionObserver((function(e){e[0].isIntersecting&&r((function(e){return e+1}))})),e&&u.current.observe(e),function(){j()}}),[i,u]);return Object(w.jsx)("div",{className:l.root,children:o?"Error Fetchig Data, Please refresh the page":Object(w.jsxs)(b.a,{children:[c instanceof Array?c.map((function(e){return Object(w.jsx)(M.a,{userDetails:e,isViewRequired:!0},e.login.uuid)})):Object(w.jsx)("p",{children:"No Data"}),Object(w.jsx)("div",{ref:p,children:Object(w.jsx)(F.a,{})})]})})},B=function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(k,{}),Object(w.jsx)(U,{})]})};var G=function(){return Object(w.jsx)("div",{className:"App",children:Object(w.jsx)(i.a,{children:Object(w.jsxs)(o.c,{children:[Object(w.jsx)(o.a,{exact:!0,path:"/",component:v}),Object(w.jsx)(o.a,{exact:!0,path:"/home",component:B})]})})})},J=function(e){e&&e instanceof Function&&a.e(5).then(a.bind(null,154)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))};c.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(G,{})}),document.getElementById("root")),J()},63:function(e,t,a){"use strict";a.d(t,"b",(function(){return j})),a.d(t,"c",(function(){return b}));var n=a(16),r=a(123),s=a(132),c=a(129),i=a(133),o=a(0),l=a.n(o),u=a(2),d=function(e){var t=e.profileDetails,a=b();return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(s.a,{children:Object.keys(t).length?Object.keys(t).map((function(e){return Object(u.jsxs)(s.a,{className:a.profileDetailsWrapper,children:[e.toUpperCase()," : ",j(t[e])?"":t[e]]},e)})):"User data not available"})})},j=function(e){return"undefined"===typeof e||null===e},b=Object(r.a)((function(e){return{root:{flexGrow:1},cardWrapper:{border:"1px solid #f2f2f2",display:"flex",justifyContent:"center",padding:e.spacing(1)},buttonContainer:{display:"flex",justifyContent:"flex-end",alignItems:"center"},userCardContainer:{padding:e.spacing(1)},userDetailWrapperList:{display:"flex",alignSelf:"center",borderRadius:"50px"},userDetailWrapperDetails:{display:"flex",justifyContent:"center",borderRadius:"50px"},userImgSmall:{width:"calc(30% - 30px)",borderRadius:"50%"},userImgLarge:{width:"calc(90% - 30px)",borderRadius:"3%"},userName:{display:"flex",alignItems:"center",justifyContent:"flex-start",paddingLeft:e.spacing(2)},profileDetailsWrapper:{background:"rgba(63, 81, 181, 0.6)",color:"#FFF",borderRadius:"3px",padding:e.spacing(2),margin:e.spacing(1)}}}));t.a=function(e){var t=b(),r=e.userDetails,p=e.isViewRequired,f=l.a.lazy((function(){return Promise.all([a.e(3),a.e(4)]).then(a.bind(null,157))})),O=r&&r.name,g=O.first,h=O.last,m=(r&&r.picture).large,x=r.dob,w=r.gender,y=r.location,v=r.email,C=r.phone,N=Object(o.useState)(!1),D=Object(n.a)(N,2),S=D[0],k=D[1],F=Object(o.useState)({}),T=Object(n.a)(F,2),I=T[0],P=T[1],W=j(g)||j(h)?g||h:"".concat(g," ").concat(h),L={fullName:W,age:x.age,gender:w,email:v,phone:C,country:y.country},R=l.a.useCallback((function(){k(!S),P({userDetails:r,head:"".concat(W," - Personal Information")})}),[S,r,W]);return Object(o.useEffect)((function(){k(!1)}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(s.a,{container:!0,className:t.cardWrapper,children:[Object(u.jsxs)(s.a,{container:!0,justifyContent:"center",children:[Object(u.jsxs)(s.a,{item:!0,xs:6,className:p?t.userDetailWrapperList:t.userDetailWrapperDetails,children:[Object(u.jsx)("img",{src:m,alt:"user-img",className:p?t.userImgSmall:t.userImgLarge}),p?Object(u.jsx)(s.a,{item:!0,xs:8,className:t.userName,children:W}):null]}),p?Object(u.jsx)(s.a,{item:!0,xs:6,className:t.buttonContainer,children:Object(u.jsx)(c.a,{color:"primary",variant:"contained",size:"small",onClick:R,children:"View"})}):null]}),Object(u.jsx)(s.a,{container:!0,justifyContent:"center",children:p?null:Object(u.jsx)(s.a,{item:!0,xs:12,children:Object(u.jsx)(d,{profileDetails:L})})})]}),S?Object(u.jsx)(o.Suspense,{fallback:Object(u.jsx)(i.a,{}),children:Object(u.jsx)(f,{dialogDetails:I,setOpenDialog:k,openDialog:S})}):null]})}},77:function(e,t,a){},78:function(e,t,a){}},[[102,1,2]]]);
//# sourceMappingURL=main.fea851c2.chunk.js.map