(this.webpackJsonpfilms=this.webpackJsonpfilms||[]).push([[0],{27:function(e,t,c){},28:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(17),s=c.n(r),i=c(8),o=c.n(i),u=c(11),l=c(4),j=(c(27),c(28),c(9)),m=c(1);function b(e){var t=e.id,c=e.imgUrl,a=e.title,n=e.year,r=e.genres,s=e.summary;return Object(m.jsx)("div",{className:"card",children:Object(m.jsxs)(j.b,{to:{pathname:"/movie/".concat(t),state:{id:t,imgUrl:c,title:a,year:n,genres:r,summary:s}},children:[Object(m.jsx)("div",{className:"card-top",children:Object(m.jsx)("img",{src:c,alt:"poster"})}),Object(m.jsxs)("div",{className:"card-bottom",children:[Object(m.jsx)("p",{className:"card-title",children:a}),Object(m.jsx)("p",{className:"card-year",children:n}),Object(m.jsx)("p",{className:"card-genres",children:r}),Object(m.jsx)("p",{className:"card-summary",children:s.slice(0,140)})]})]})})}var d=c(20),p=c(21),f=function(){function e(){Object(d.a)(this,e)}return Object(p.a)(e,null,[{key:"getAllPosts",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,c,a,n,r=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:10,c=r.length>1&&void 0!==r[1]?r[1]:1,e.next=4,fetch("https://yts.mx/api/v2/list_movies.json?limit=".concat(t,"&page=").concat(c));case 4:return a=e.sent,n=a.json(),e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getPostsbyName",value:function(){var e=Object(u.a)(o.a.mark((function e(t,c,a){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?query_term=".concat(t,"&page=").concat(c,"&limit=").concat(a));case 2:return n=e.sent,r=n.json(),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,c,a){return e.apply(this,arguments)}}()}]),e}();c(35);function O(){return Object(m.jsx)("div",{className:"loader-wrapper",children:Object(m.jsx)("div",{className:"loader"})})}function h(e,t){return Math.ceil(e/t)}c(36);var v=function(e){for(var t=e.totalPages,c=e.currentPage,n=e.pageClick,r=e.leftClick,s=e.rightClick,i=[],o=Object(a.useState)(5),u=Object(l.a)(o,2),j=u[0],b=(u[1],Object(a.useState)(5)),d=Object(l.a)(b,2),p=d[0],f=d[1],O=Object(a.useState)(0),h=Object(l.a)(O,2),v=h[0],x=h[1],g=1;g<=t;g++)i.push(g);var y=i.map((function(e){if(e<p+1&&e>v)return Object(m.jsx)("div",{"data-value":e,className:c==e?"active":"pagination-element",onClick:n,children:e},e)}));return c>p&&(f(p+j),x(v+j)),c-1<v&&(f(p-j),x(v-j)),Object(m.jsxs)("div",{className:"pagination",children:[Object(m.jsx)("div",{className:"pagination-element",onClick:r,children:"prev"}),y,Object(m.jsx)("div",{className:"pagination-element",onClick:s,children:"next"})]})},x=(c(37),function(e){var t=e.searchFunc,c=e.searchValue,n=e.setSeaarchValue,r=Object(a.useState)(""),s=Object(l.a)(r,2);s[0],s[1];return Object(m.jsx)("div",{className:"wrapper",children:Object(m.jsxs)("form",{className:"form",action:"",children:[Object(m.jsx)("input",{className:"form-input",type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a...",value:c,onChange:function(e){n(e.target.value)}}),Object(m.jsx)("input",{className:"form-btn",type:"button",value:"\u041d\u0430\u0439\u0442\u0438",onClick:t})]})})});c(38);function g(){return Object(m.jsxs)("div",{className:"nav",children:[Object(m.jsx)(j.b,{to:"/",children:" \u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(m.jsx)(j.b,{to:"/about",children:" \u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"})]})}var y=c(2),N=[{path:"/",component:function(){var e=Object(a.useState)(!0),t=Object(l.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)([]),s=Object(l.a)(r,2),i=s[0],j=s[1],d=Object(a.useState)(10),p=Object(l.a)(d,2),g=p[0],y=(p[1],Object(a.useState)(1)),N=Object(l.a)(y,2),k=N[0],S=N[1],w=Object(a.useState)(0),C=Object(l.a)(w,2),P=C[0],_=C[1],U=Object(a.useState)(""),V=Object(l.a)(U,2),A=V[0],E=V[1],F=Object(a.useState)(!1),J=Object(l.a)(F,2),M=J[0],q=J[1],B=function(){var e=Object(u.a)(o.a.mark((function e(){var t,c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),t=f.getAllPosts(g,k),e.next=4,t;case 4:c=e.sent,a=c.data,j(a.movies),_(h(a.movie_count,g)),n(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(u.a)(o.a.mark((function e(){var t,c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),q(!0),t=f.getPostsbyName(A,k,g),e.next=5,t;case 5:c=e.sent,a=c.data,j(a.movies),_(h(a.movie_count,g)),n(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){M?I():B()}),[k]),c?Object(m.jsx)(O,{}):Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(x,{searchFunc:I,searchValue:A,setSeaarchValue:function(e){E(e)}}),Object(m.jsx)("div",{className:"cards",children:i.map((function(e){return Object(m.jsx)(b,{id:e.id,imgUrl:e.medium_cover_image,title:e.title,year:e.year,genres:e.genres,summary:e.summary},e.id)}))}),Object(m.jsx)(v,{totalPages:P,itemsPerView:g,currentPage:k,pageClick:function(e){console.log(e.target.dataset.value),S(Number(e.target.dataset.value))},leftClick:function(e){console.log("left"),k>0&&S(k-1)},rightClick:function(e){console.log("right"),S(k+1)}})]})},exact:!0},{path:"/about",component:function(){return Object(m.jsx)("div",{children:"Ab"})},exact:!0},{path:"/movie/:id",component:function(e){var t=e.location.state;return Object(a.useEffect)((function(){void 0===t&&e.history.push("/")}),[]),void 0===t?0:(console.log(t),Object(m.jsx)("div",{className:"container",children:Object(m.jsx)(b,{id:t.id,imgUrl:t.imgUrl,title:t.title,year:t.year,genres:t.genres,summary:t.summary})}))},exact:!0}];c(39);var k=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(j.a,{children:[Object(m.jsx)(g,{}),N.map((function(e){return Object(m.jsx)(y.a,{component:e.component,path:e.path,exact:e.exact},e.path)}))]})})};s.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(k,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.78d5bb5b.chunk.js.map