(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,r){e.exports=r(25)},19:function(e,t,r){},22:function(e,t,r){},23:function(e,t,r){},24:function(e,t,r){},25:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(4),s=r.n(o),c=r(2),i=r.n(c),l=r(10),u=r(5),d=r(6),p=r(7),m=r(8),f=r(11),h=r(9),b=r(12),g=(r(19),r(1)),E=r.n(g),O=E.a.shape({id:E.a.number,name:E.a.string,email:E.a.string}).isRequired,j=(E.a.arrayOf(E.a.shape({id:E.a.number,title:E.a.string,completed:E.a.bool}).isRequired).isRequired,E.a.shape(O).isRequired,E.a.shape({id:E.a.number,title:E.a.string,completed:E.a.bool,user:E.a.shape(O)}).isRequired,r(22),function(e){var t=e.data;return a.a.createElement("div",null,a.a.createElement("p",null,t.name),a.a.createElement("p",null,t.email))}),v=(r(23),function(e){var t=e.todo;return a.a.createElement("li",{className:t.completed?"card bg--green":"card bg--red"},a.a.createElement("div",null,a.a.createElement(j,{data:t.user})),a.a.createElement("p",{className:"card-content"},t.title))}),y=(r(24),function(e){var t=e.todos;return a.a.createElement("div",{className:"todos-list"},t.map(function(e){return a.a.createElement(v,{todo:e,key:e.id})}))});function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var k="https://jsonplaceholder.typicode.com/todos",L="https://jsonplaceholder.typicode.com/users",P=function(e){function t(){var e,r;Object(p.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={todos:[],users:[],isLoading:!1,isLoaded:!1,hasError:!1},r.getTodosWithUsers=function(e,t){return e.map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(r,!0).forEach(function(t){Object(d.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e,{user:t.find(function(t){return t.id===e.userId})})})},r.handleClick=Object(u.a)(i.a.mark(function e(){var t,n,a,o,s,c;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r.setState({isLoading:!0}),e.prev=1,e.next=4,Promise.all([fetch(k),fetch(L)]);case 4:return t=e.sent,n=Object(l.a)(t,2),a=n[0],o=n[1],e.next=10,a.json();case 10:return s=e.sent,e.next=13,o.json();case 13:c=e.sent,r.setState({todos:s,users:c,isLoaded:!0}),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),r.setState({hasError:!0,isLoading:!1});case 20:case"end":return e.stop()}},e,null,[[1,17]])})),r}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.todos,r=e.users,n=e.isLoading,o=e.isLoaded,s=e.hasError,c=s?"Try again":"Load todos";return a.a.createElement("div",{className:"App"},o?a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Static list of todos"),a.a.createElement(y,{todos:this.getTodosWithUsers(t,r)})):a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,s?"Error - failed to fetch":"Load"),a.a.createElement("button",{type:"button",onClick:this.handleClick},n?"Loading..":c)))}}]),t}(n.Component);s.a.render(a.a.createElement(P,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.51ddbc61.chunk.js.map