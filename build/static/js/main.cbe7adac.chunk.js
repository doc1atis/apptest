(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{26:function(e,t,a){e.exports=a(58)},31:function(e,t,a){},38:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),c=a.n(l),s=(a(31),a(7)),o=(a(38),a(1)),i=a.n(o),p=a(9),u=a(12),h=a(8),d=a(11),m=a(3),f=a(4),k=a(6),v=a(5),b=a(25),E=a.n(b).a.create({baseURL:"https://olgymiom.com/api"}),O=function(e){Object(k.a)(a,e);var t=Object(v.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement("h1",null,"Pet Shelter"),r.a.createElement(s.a,{to:this.props.linkDestination,style:{marginRight:"30px"}},this.props.linkText))}}]),a}(n.Component),y=(a(57),function(e){Object(k.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={name:"",petType:"",description:"",skillOne:"",skillTwo:"",skillThree:"",errors:[]},e.handleChange=function(t){e.setState(Object(d.a)({},t.target.name,t.target.value))},e.handleSubmit=function(){var t=Object(h.a)(i.a.mark((function t(a){var n,r,l,c,o,h,d,m,f,k;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),t.prev=1,n=e.state,r=n.skillOne,l=n.skillTwo,c=n.skillThree,o=Object(u.a)(n,["skillOne","skillTwo","skillThree"]),h=[r,l,c],d=Object(p.a)({skills:h.filter((function(e){return 0!==e.length}))},o),e.props.edit){t.next=13;break}return t.next=8,E.post("/pets/new",d);case 8:m=t.sent,console.log(m.data),Object(s.c)("/"),t.next=18;break;case 13:return t.next=15,E.put("/pets/".concat(e.props.pet._id),d);case 15:f=t.sent,console.log(f.data),Object(s.c)("/pets/".concat(e.props.pet._id,"/detail"));case 18:t.next=24;break;case 20:t.prev=20,t.t0=t.catch(1),k=t.t0.response.data.errors,e.setState({errors:Object.entries(k)});case 24:case"end":return t.stop()}}),t,null,[[1,20]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(f.a)(a,[{key:"componentDidMount",value:function(){if(this.props.edit){for(var e=this.props.pet,t=e.skills,a=Object(u.a)(e,["skills"]),n={skillOne:"",skillTwo:"",skillThree:""},r=0;r<3;r++)t[r]&&(0===r&&(n.skillOne=t[r]),1===r&&(n.skillTwo=t[r]),2===r&&(n.skillThree=t[r]));this.setState(Object(p.a)(Object(p.a)({},n),a))}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(O,{linkDestination:"/",linkText:"back to home"}),r.a.createElement("form",{onSubmit:this.handleSubmit,id:"app-form"},r.a.createElement("span",{id:"app-form-top"},r.a.createElement("span",{id:"app-form-left",className:"form-data"},r.a.createElement("input",{name:"name",type:"text",onChange:this.handleChange,placeholder:"Name",value:this.state.name}),r.a.createElement("input",{name:"petType",type:"text",onChange:this.handleChange,placeholder:"Pet Type",value:this.state.petType}),r.a.createElement("input",{name:"description",type:"text",onChange:this.handleChange,placeholder:"Description",value:this.state.description})),r.a.createElement("span",{id:"app-form-right",className:"form-data"},r.a.createElement("h1",null,"Skills:Optional"),r.a.createElement("input",{name:"skillOne",type:"text",onChange:this.handleChange,placeholder:"Skill 1",value:this.state.skillOne}),r.a.createElement("input",{name:"skillTwo",type:"text",onChange:this.handleChange,placeholder:"Skill 2",value:this.state.skillTwo}),r.a.createElement("input",{name:"skillThree",type:"text",onChange:this.handleChange,placeholder:"Skill 3",value:this.state.skillThree}))),r.a.createElement("input",{type:"submit",value:this.props.edit?"Edit":"create",id:"last-form-button"})),r.a.createElement("span",null,this.state.errors.length?r.a.createElement("ul",null,this.state.errors.map((function(e,t){return r.a.createElement("li",{key:t},e[1].message)}))):null))}}]),a}(n.Component)),j=function(e){Object(k.a)(a,e);var t=Object(v.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Name"),r.a.createElement("th",{scope:"col"},"Type"),r.a.createElement("th",{scope:"col"},"Actions"))),r.a.createElement("tbody",null,this.props.pets.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("th",{scope:"row"},e.name),r.a.createElement("td",null,e.petType),r.a.createElement("td",null,r.a.createElement(s.a,{to:"/pets/".concat(e._id,"/detail"),style:{marginRight:"15px"}},"Detail"),r.a.createElement(s.a,{to:"/pets/".concat(e._id,"/edit")},"Edit")))})))))}}]),a}(n.Component),g=function(e){Object(k.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={pets:[]},e.fetchData=Object(h.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.get("/pets");case 3:a=t.sent,console.log(a.data),e.setState({pets:a.data.pets}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.dir(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e}return Object(f.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(O,{linkDestination:"/pets/new",linkText:"add pet to shelter"}),r.a.createElement(j,{pets:this.state.pets}))}}]),a}(n.Component),x=function(e){Object(k.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={found:!1,liked:!1},e.fetchData=Object(h.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.get("/pets/".concat(e.props.id));case 3:a=t.sent,console.log(a.data),e.setState(Object(p.a)({found:!0},a.data)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.dir(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e.handleClik=Object(h.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,e.state.liked){t.next=7;break}return t.next=4,E.patch("/pets/".concat(e.props.id));case 4:a=t.sent,console.log(a.data),e.setState(Object(p.a)({liked:!e.state.liked},a.data));case 7:t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.dir(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])}))),e.handleAdoption=Object(h.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.delete("/pets/".concat(e.props.id));case 3:a=t.sent,console.log(a.data),Object(s.c)("/"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.dir(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e}return Object(f.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(O,{linkDestination:"/",linkText:"back to home"}),function(){if(e.state.found)return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:e.handleAdoption},"Adopt ",e.state.name),r.a.createElement("h1",null,"Detail About: ",e.state.name),r.a.createElement("h1",null,"Pet Type: ",e.state.petType),r.a.createElement("h1",null,"Likes: ",e.state.likes),r.a.createElement("h1",null,"Skills:"),r.a.createElement("ul",null,e.state.skills.map((function(e,t){return r.a.createElement("li",{key:t},e)}))),r.a.createElement("button",{onClick:e.handleClik},"like ",e.state.name))}())}}]),a}(n.Component),w=function(e){Object(k.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={found:!1},e.fetchdata=Object(h.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.put("/pets/".concat(e.props.id),{});case 3:a=t.sent,console.log(a.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),e}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=Object(h.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.get("/pets/".concat(this.props.id));case 3:t=e.sent,console.log(t.data),this.setState(Object(p.a)({found:!0},t.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,function(){if(e.state.found)return r.a.createElement(y,{edit:!0,pet:e.state})}())}}]),a}(n.Component);var T=function(){return r.a.createElement("div",{className:"App"},"petApp",r.a.createElement(s.b,null,r.a.createElement(g,{path:"/"}),r.a.createElement(y,{path:"/pets/new"}),r.a.createElement(x,{path:"/pets/:id/detail"}),r.a.createElement(w,{path:"/pets/:id/edit"})))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.cbe7adac.chunk.js.map