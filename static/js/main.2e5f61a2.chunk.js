(this.webpackJsonprobotfriend=this.webpackJsonprobotfriend||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(7),s=n.n(c),a=(n(12),n(2)),o=n(3),i=n(5),h=n(4),l=(n(13),n(14),n(0)),u=function(e){var t=e.id,n=e.name,r=e.email;return Object(l.jsxs)("div",{className:"tc grow bg-light-green br3 pa2 ma2 dib bw2 shadow-5",children:[Object(l.jsx)("img",{src:"https://robohash.org/".concat(t,"?size=250x250"),alt:"robohash"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:n}),Object(l.jsx)("p",{children:r})]})]})},b=function(e){var t=e.robots;return Object(l.jsx)("div",{children:t.map((function(e,n){return Object(l.jsx)(u,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},j=function(e){var t=e.searchChange;return Object(l.jsx)("div",{className:"pa1",children:Object(l.jsx)("input",{className:"pa2 ba b--green bg-lightest-blue",type:"search",placeholder:"Robot name",onChange:t})})},d=function(e){return Object(l.jsx)("div",{style:{overflowY:"scroll",border:"2px solid black",height:"640px"},children:e.children})},f=function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(o.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(l.jsx)("h1",{children:"Ooop! That is not good"}):this.props.children}}]),n}(r.Component),O=function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).onSearchChange=function(e){r.setState({searchfield:e.target.value})},r.state={robots:[],searchfield:" "},r}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)("h1",{className:"f2",children:"ROBOTFRIEND"}),Object(l.jsx)(j,{searchChange:this.onSearchChange}),Object(l.jsx)(d,{children:Object(l.jsx)(f,{children:Object(l.jsx)(b,{robots:t})})})]})}}]),n}(r.Component),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};s.a.render(Object(l.jsx)(O,{}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.2e5f61a2.chunk.js.map