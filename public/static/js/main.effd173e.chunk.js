(this["webpackJsonpget-scripts"]=this["webpackJsonpget-scripts"]||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/logo.c2ca9180.png"},35:function(e,t,a){e.exports=a(63)},57:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(32),o=a.n(l),s=a(1),c=a(2),u=a(3),i=a(5),m=a(4),h=a(6),p=a(11),g=a.n(p),d=new(function(){function e(){Object(c.a)(this,e),this.auth=g.a.create({baseURL:"https://post-mix.herokuapp.com",withCredentials:!0})}return Object(u.a)(e,[{key:"signup",value:function(e,t,a,n,r){return this.auth.post("/auth/signup",{username:e,password:t,email:a,name:n,surname:r}).then((function(e){return e.data}))}},{key:"login",value:function(e,t){return this.auth.post("/auth/login",{username:e,password:t}).then((function(e){return e.data}))}},{key:"logout",value:function(){return this.auth.post("/auth/logout",{}).then((function(e){return e.data}))}},{key:"me",value:function(){return this.auth.get("/auth/me").then((function(e){return e.data}))}}]),e}()),b=r.a.createContext(),E=b.Consumer,v=b.Provider,f=function(e){return function(t){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,t),Object(u.a)(a,[{key:"render",value:function(){var t=this;return r.a.createElement(E,null,(function(a){var n=a.login,l=a.signup,o=a.logout,s=a.user,c=a.isLoggedIn;return r.a.createElement(e,Object.assign({user:s,isLoggedIn:c,login:n,signup:l,logout:o},t.props))}))}}]),a}(n.Component)},O=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isLoggedIn:!1,user:null,isLoading:!0},a.signup=function(e,t,n,r,l){d.signup(e,t,n,r,l).then((function(e){return a.setState({isLoggedIn:!0,user:e})})).catch((function(e){return console.log(e)}))},a.login=function(e,t){d.login(e,t).then((function(e){return a.setState({isLoggedIn:!0,user:e})})).catch((function(e){return console.log(e)}))},a.logout=function(){d.logout().then((function(){return a.setState({isLoggedIn:!1,user:null})})).catch((function(e){return console.log(e)}))},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.me().then((function(t){return e.setState({isLoggedIn:!0,user:t,isLoading:!1})})).catch((function(t){return e.setState({isLoggedIn:!1,user:null,isLoading:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.isLoggedIn,n=e.user,l=this.login,o=this.logout,s=this.signup;return r.a.createElement(v,{value:{isLoading:t,isLoggedIn:a,user:n,login:l,logout:o,signup:s}},this.props.children)}}]),t}(r.a.Component),j=(a(57),a(15)),y=a(12),L=a(16),C=a.n(L),N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,r=t.password;a.props.login(n,r)},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(y.a)({},n,r))},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password;return r.a.createElement("div",null,r.a.createElement("div",{className:"frontpage-upper"},r.a.createElement("img",{src:C.a,className:"logo",alt:"logo"})),r.a.createElement("div",{className:"login-form"},r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("input",{placeholder:"Enter your username",type:"text",name:"username",value:t,onChange:this.handleChange}),r.a.createElement("input",{placeholder:"Password",type:"password",name:"password",value:a,onChange:this.handleChange}),r.a.createElement(s.b,{to:"/dashboard",className:"button-text"},r.a.createElement("input",{type:"submit",className:"login-button",value:"LOG IN"})))),r.a.createElement("div",{className:"signup-text"},"Not registered? ",r.a.createElement(s.b,{to:"/signup"},"Sign up")))}}]),t}(n.Component),w=f(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",email:"",name:"",surname:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,r=t.password,l=t.email,o=t.name,s=t.surname;a.props.signup(n,r,l,o,s)},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(y.a)({},n,r))},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password,n=e.name,l=e.surname,o=e.email;return r.a.createElement("div",null,r.a.createElement("div",{className:"signup-upper"},r.a.createElement("img",{src:C.a,className:"logo2",alt:"logo"})),r.a.createElement("div",null,r.a.createElement("h1",{className:"section-header"},"SIGN UP")),r.a.createElement("div",{className:"login-form"},r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{className:"iyo",placeholder:"Username",type:"text",name:"username",value:t,onChange:this.handleChange}),r.a.createElement("label",null,"Name:"),r.a.createElement("input",{type:"text",name:"name",value:n,onChange:this.handleChange}),r.a.createElement("label",null,"Surname:"),r.a.createElement("input",{type:"text",name:"surname",value:l,onChange:this.handleChange}),r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"email",name:"email",value:o,onChange:this.handleChange}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:a,onChange:this.handleChange}),r.a.createElement(s.b,{to:"/dashboard",className:"button-text"},r.a.createElement("input",{type:"submit",className:"login-button",value:"SIGN UP"})))),r.a.createElement("div",{className:"signup-text"},"Already registered? ",r.a.createElement(s.b,{to:"/login"},"Log in")))}}]),t}(n.Component)),S=f(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,r=t.password;a.props.login(n,r)},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(y.a)({},n,r))},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password;return r.a.createElement("div",null,r.a.createElement("div",{className:"frontpage-upper"},r.a.createElement("img",{src:C.a,className:"logo",alt:"logo"})),r.a.createElement("div",{className:"login-form"},r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("input",{placeholder:"Enter your username",type:"text",name:"username",value:t,onChange:this.handleChange}),r.a.createElement("input",{placeholder:"Password",type:"password",name:"password",value:a,onChange:this.handleChange}),r.a.createElement(s.b,{to:"/dashboard",className:"button-text"},r.a.createElement("input",{type:"submit",className:"login-button",value:"LOG IN"})))),r.a.createElement("div",{className:"signup-text"},"Not registered? ",r.a.createElement(s.b,{to:"/signup"},"Sign up")))}}]),t}(n.Component)),k=(n.Component,function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",tasks:[],status:"To-do"},a.getSingleList=function(){var e=a.props.match.params.id;g.a.get("https://post-mix.herokuapp.com"+"/lists/".concat(e)).then((function(e){var t=e.data,n=t.status,r=t.name,l=t.tasks;a.setState({status:n,name:r,tasks:l})})).catch((function(e){return console.log(e)}))},a.deleteList=function(){var e=a.props.match.params.id;g.a.delete("https://post-mix.herokuapp.com"+"/lists/".concat(e),{withCredentials:!0}).then((function(){return a.props.history.push("/dashboard")})).catch((function(e){return console.log(e)}))},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getSingleList()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",null,this.state.name),r.a.createElement(s.b,{to:"/dashboard"},r.a.createElement("button",null,"Back")),r.a.createElement("button",{onClick:function(){return e.deleteList()}},"DELETE LIST"),r.a.createElement("div",null,this.state.tasks.length>0?this.state.tasks.map((function(e,t){return r.a.createElement("p",{key:e._id},e.text)})):null))}}]),t}(n.Component)),x=(n.Component,a(18));var I=f((function(e){var t=e.component,a=e.isLoggedIn,n=Object(x.a)(e,["component","isLoggedIn"]);return(r.a.createElement(j.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(j.a,{to:"/dashboard"}):a?void 0:r.a.createElement(t,e)}})))}));var A=f((function(e){var t=e.component,a=e.isLoggedIn,n=Object(x.a)(e,["component","isLoggedIn"]);return r.a.createElement(j.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):a?void 0:r.a.createElement(j.a,{to:"/login"})}}))})),D=f(function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.user,a=e.logout,n=e.isLoggedIn;return r.a.createElement("nav",{className:"navbar"},r.a.createElement(s.b,{to:"/",id:"home-btn"},r.a.createElement("h4",null,"Home")),n?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Hello",t.username),r.a.createElement("button",{onClick:a},"Logout"),r.a.createElement(s.b,{to:"/new-list"},r.a.createElement("p",null,"NEW LISTS"))):r.a.createElement(r.a.Fragment,null,r.a.createElement(s.b,{to:"/login"}," ",r.a.createElement("button",{className:"navbar-button"},"Login")," "),r.a.createElement("br",null),r.a.createElement(s.b,{to:"/signup"}," ",r.a.createElement("button",{className:"navbar-button"},"Sign Up")," ")))}}]),t}(n.Component)),F=function(e){return r.a.createElement("div",null,e.allLists.map((function(e){return r.a.createElement(s.b,{key:e._id,className:"list",to:"/list/".concat(e._id)},r.a.createElement("h3",null,e.name))})))},P=f(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={allLists:[]},a.getAllLists=function(){g.a.get("https://post-mix.herokuapp.com/lists").then((function(e){var t=e.data;a.setState({allLists:t})})).catch((function(e){return console.log(e)}))},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getAllLists()}},{key:"render",value:function(){var e=this.state.allLists;return e.length?r.a.createElement("div",null,r.a.createElement(D,null),r.a.createElement("h1",null,"DASHBOARD"),r.a.createElement("div",null,r.a.createElement(F,{allLists:e})),r.a.createElement(j.d,null,r.a.createElement(j.b,{exact:!0,path:"/list/:id",render:function(t){return r.a.createElement(k,Object.assign({},t,{allLists:e}))}}))):r.a.createElement("div",null,"NO LISTS YET")}}]),t}(n.Component)),T=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col-sm-12"},r.a.createElement(s.a,null,r.a.createElement(j.d,null,r.a.createElement(j.b,{exact:!0,path:"/",component:N}),r.a.createElement(I,{exact:!0,path:"/signup",component:w}),r.a.createElement(I,{exact:!0,path:"/login",component:S}),r.a.createElement(A,{exact:!0,path:"/dashboard",component:P}),r.a.createElement(A,{exact:!0,path:"/list/:id",component:k}))))))}}]),t}(n.Component);o.a.render(r.a.createElement(s.a,null,r.a.createElement(O,null,r.a.createElement(T,null))),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.effd173e.chunk.js.map