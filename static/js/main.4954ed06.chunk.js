(this.webpackJsonpnetwork=this.webpackJsonpnetwork||[]).push([[0],[,,function(e,a,t){e.exports={nav:"Navbar_nav__36z-G",item:"Navbar_item__1VENn",active:"Navbar_active__NVkZy"}},,,,,function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__SEZeu",dialogsItems:"Dialogs_dialogsItems__2B2NT",active:"Dialogs_active__4RZNz",messages:"Dialogs_messages__2F8mr",message:"Dialogs_message__Jg0cp"}},,,,,,,function(e,a,t){e.exports={item:"Post_main_item__m_ffV",post_main:"Post_main_post_main__3uask",postsBlock:"Post_main_postsBlock__2fY3S",posts:"Post_main_posts__3NN-d"}},function(e,a,t){e.exports={item:"Post_block_item__2FBt8",post_main:"Post_block_post_main__3XjB4"}},function(e,a,t){e.exports={content:"Main_Info_content__3od_Y",descriptionBlock:"Main_Info_descriptionBlock__ci49k"}},,,,function(e,a,t){e.exports={header:"Header_header__prsWw"}},,,function(e,a,t){e.exports={colorlike:"Like_colorlike__1fWpC"}},function(e,a,t){e.exports=t(37)},,,,,function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(19),l=t.n(i),c=(t(29),t(30),t(20)),o=t.n(c),m=function(){return s.a.createElement("header",{className:o.a.header},s.a.createElement("img",{src:"https://d32dm0rphc51dk.cloudfront.net/AwXYyUz1PC1aFF_05mEDrA/large.jpg",alt:""}))},r=t(2),d=t.n(r),u=t(4),_=function(){return s.a.createElement("nav",{className:d.a.nav},s.a.createElement("div",{className:d.a.item},s.a.createElement(u.b,{to:"/profile",activeClassName:d.a.active},"Profile")),s.a.createElement("div",{className:"".concat(d.a.item," ").concat(d.a.active)},s.a.createElement(u.b,{to:"/news",activeClassName:d.a.active},"News")),s.a.createElement("div",{className:d.a.item},s.a.createElement(u.b,{to:"/dialogs",activeClassName:d.a.active},"Message")),s.a.createElement("div",{className:d.a.item},s.a.createElement(u.b,{to:"/video",activeClassName:d.a.active},"Video")),s.a.createElement("div",{className:d.a.item},s.a.createElement(u.b,{to:"/audio",activeClassName:d.a.active},"Audio")),s.a.createElement("div",{className:d.a.item},s.a.createElement(u.b,{to:"/settings",activeClassName:d.a.active},"Settings")))},v=(t(36),t(14)),p=t.n(v),E=t(15),g=t.n(E),f=t(23),N=t.n(f),k=function(e){return s.a.createElement("div",{className:N.a.colorlike},s.a.createElement("div",null,s.a.createElement("span",null," ",e.likesCount," like")))},h=function(e){return s.a.createElement("div",{className:g.a.post_main},s.a.createElement("div",{className:g.a.item},s.a.createElement("div",null,s.a.createElement("img",{src:"https://www.elsetge.cat/myimg/f/31-317081_server-farm-wallpaper-google-server-rooms-usa.jpg"})),s.a.createElement("div",null,"Post 1 ",s.a.createElement("br",null),e.message),s.a.createElement(k,{likesCount:e.likesCount})))},w=function(e){var a=[{id:1,message:"Hi",likesCount:15},{id:2,message:"Hi, how are you?",likesCount:3},{id:3,message:"idi nahuy",likesCount:24},{id:4,message:"Blya",likesCount:10},{id:5,message:"Pizdec",likesCount:5}].map((function(e){return s.a.createElement(h,{message:e.message,likesCount:e.likesCount})}));return s.a.createElement("div",{className:p.a.postsBlock},s.a.createElement("h3",null,"My post"),s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("textarea",{name:"",id:"",cols:"30",rows:"10"})),s.a.createElement("div",null,s.a.createElement("button",null,"add post"),s.a.createElement("button",null,"remove"))),s.a.createElement("div",{className:p.a.posts},a))},b=t(16),C=t.n(b),B=function(){return s.a.createElement("div",null,s.a.createElement("div",{className:C.a.content},s.a.createElement("img",{src:"https://futurereport.schibsted.com/wp-content/uploads/2016/10/BIG-BRAIN_2.jpg"})),s.a.createElement("div",{className:C.a.descriptionBlock},"ava + dicription"))},y=function(){return s.a.createElement("div",null,s.a.createElement(B,null),s.a.createElement(w,null))},x=t(7),P=t.n(x),I=function(e){return s.a.createElement("div",{className:P.a.message},e.message)},D=function(e){var a="/dialogs/"+e.id;return s.a.createElement("div",{className:P.a.dialog+" "+P.a.active},s.a.createElement(u.b,{to:a},e.name))},z=function(e){var a=[{id:1,name:"Anton"},{id:2,name:"Sveta"},{id:3,name:"Katya"},{id:4,name:"Ira"},{id:5,name:"Dima"}].map((function(e){return s.a.createElement(D,{name:e.name,id:e.id})})),t=[{id:1,message:"Hi"},{id:2,message:"How is your"},{id:3,message:"YO"},{id:4,message:"Blya"},{id:5,message:"Pizdec"}].map((function(e){return s.a.createElement(I,{message:e.message})}));return s.a.createElement("div",{className:P.a.dialogs},s.a.createElement("div",{className:P.a.dialogsItems},a),s.a.createElement("div",{className:P.a.messages},t))},A=t(8),H=function(){return s.a.createElement(u.a,null,s.a.createElement("div",{className:"app-wrapper"},s.a.createElement(m,null),s.a.createElement(_,null),s.a.createElement("div",{className:"app-wrapper-content"},s.a.createElement(A.a,{exact:!0,path:"/profile",component:y}),s.a.createElement(A.a,{exact:!0,path:"/dialogs",component:z}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[24,1,2]]]);
//# sourceMappingURL=main.4954ed06.chunk.js.map