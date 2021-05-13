(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{20:function(e,s,c){},27:function(e,s,c){"use strict";c.r(s);var t=c(1),i=c.n(t),n=c(14),a=c.n(n),l=(c(20),c(3)),r=c(4),j=c(6),o=c(5),d=c(0),h=function(e){Object(j.a)(c,e);var s=Object(o.a)(c);function c(){return Object(l.a)(this,c),s.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){var e=this.props.resumeData;return Object(d.jsx)(i.a.Fragment,{children:Object(d.jsxs)("header",{id:"home",children:[Object(d.jsxs)("nav",{id:"nav-wrap",children:[Object(d.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(d.jsx)("a",{className:"mobile-btn",href:"#",title:"Hide navigation",children:"Hide navigation"}),Object(d.jsxs)("ul",{id:"nav",className:"nav",children:[Object(d.jsx)("li",{className:"current",children:Object(d.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})})]})]}),Object(d.jsx)("div",{className:"row banner",children:Object(d.jsxs)("div",{className:"banner-text",children:[Object(d.jsxs)("h1",{className:"responsive-headline",children:["I am ",e.name,"."]}),Object(d.jsxs)("h3",{style:{color:"#fff",fontFamily:"sans-serif "},children:["I am a ",e.role,".",e.roleDescription]}),Object(d.jsx)("hr",{}),Object(d.jsx)("ul",{className:"social",children:e.socialLinks&&e.socialLinks.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:e.url,target:"_blank",children:Object(d.jsx)("i",{className:e.className})})},e.name)}))})]})}),Object(d.jsx)("p",{className:"scrolldown",children:Object(d.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(d.jsx)("i",{className:"icon-down-circle"})})})]})})}}]),c}(t.Component),m=function(e){Object(j.a)(c,e);var s=Object(o.a)(c);function c(){return Object(l.a)(this,c),s.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){var e=this.props.resumeData;return Object(d.jsx)("section",{id:"about",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"three columns"}),Object(d.jsxs)("div",{className:"nine columns main-col",children:[Object(d.jsx)("h2",{children:"About Me"}),Object(d.jsx)("p",{children:e.aboutme}),Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"columns contact-details",children:[Object(d.jsx)("h2",{children:"Contact Details"}),Object(d.jsxs)("p",{className:"address",children:[Object(d.jsx)("span",{children:e.name}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{children:e.address}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{children:e.website})]})]})})]})]})})}}]),c}(t.Component),b=function(e){Object(j.a)(c,e);var s=Object(o.a)(c);function c(){return Object(l.a)(this,c),s.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){var e=this.props.resumeData;return Object(d.jsxs)("section",{id:"resume",children:[Object(d.jsxs)("div",{className:"row education",children:[Object(d.jsx)("div",{className:"three columns header-col",children:Object(d.jsx)("h1",{children:Object(d.jsx)("span",{children:"Education"})})}),Object(d.jsx)("div",{className:"nine columns main-col",children:e.education&&e.education.map((function(e){return Object(d.jsx)("div",{className:"row item",children:Object(d.jsxs)("div",{className:"twelve columns",children:[Object(d.jsx)("h3",{children:e.UniversityName}),Object(d.jsxs)("p",{className:"info",children:[e.specialization,Object(d.jsx)("span",{children:"\u2022"})," ",Object(d.jsxs)("em",{className:"date",children:[e.MonthOfPassing," ",e.YearOfPassing]})]}),Object(d.jsx)("p",{children:e.Achievements})]})})}))})]}),Object(d.jsxs)("div",{className:"row work",children:[Object(d.jsx)("div",{className:"three columns header-col",children:Object(d.jsx)("h1",{children:Object(d.jsx)("span",{children:"Work"})})}),Object(d.jsx)("div",{className:"nine columns main-col",children:e.work&&e.work.map((function(e){return Object(d.jsx)("div",{className:"row item",children:Object(d.jsxs)("div",{className:"twelve columns",children:[Object(d.jsx)("h3",{children:e.CompanyName}),Object(d.jsxs)("p",{className:"info",children:[e.specialization,Object(d.jsx)("span",{children:"\u2022"})," ",Object(d.jsxs)("em",{className:"date",children:[e.MonthOfLeaving," ",e.YearOfLeaving]})]}),Object(d.jsx)("p",{children:e.Achievements})]})})}))})]}),Object(d.jsxs)("div",{className:"row skill",children:[Object(d.jsx)("div",{className:"three columns header-col",children:Object(d.jsx)("h1",{children:Object(d.jsx)("span",{children:"Skills"})})}),Object(d.jsxs)("div",{className:"nine columns main-col",children:[Object(d.jsx)("p",{children:e.skillsDescription}),Object(d.jsx)("div",{className:"bars",children:Object(d.jsx)("ul",{className:"skills",children:e.skills&&e.skills.map((function(e){return Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),Object(d.jsx)("em",{children:e.skillname})]})}))})})]})]})]})}}]),c}(t.Component),O=c(12),u=function(e){Object(j.a)(c,e);var s=Object(o.a)(c);function c(){return Object(l.a)(this,c),s.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){var e=this.props.resumeData;return Object(d.jsx)(O.a,{children:Object(d.jsx)("section",{id:"portfolio",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"twelve columns collapsed",children:[Object(d.jsx)("h1",{children:"Check Out Some of My Work!"}),Object(d.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e.portfolio&&e.portfolio.map((function(e){return Object(d.jsx)("div",{className:"columns portfolio-item",children:Object(d.jsxs)("div",{className:"item-wrap",children:[Object(d.jsx)("img",{src:e.img,alt:"portfolio",className:"item-img"}),Object(d.jsx)("div",{className:"overlay",children:Object(d.jsx)(O.b,{to:e.imglink,children:Object(d.jsxs)("div",{className:"portfolio-item-meta",children:[Object(d.jsx)("h5",{children:e.name}),Object(d.jsx)("p",{children:e.description})]})})})]})})}))})]})})})})}}]),c}(t.Component),x=function(e){Object(j.a)(c,e);var s=Object(o.a)(c);function c(){return Object(l.a)(this,c),s.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){var e=this.props.resumeData;return Object(d.jsx)("footer",{children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"twelve columns",children:Object(d.jsx)("ul",{className:"social-links",children:e.socialLinks&&e.socialLinks.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:e.url,children:Object(d.jsx)("i",{className:e.className})})})}))})}),Object(d.jsx)("div",{id:"go-top",children:Object(d.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(d.jsx)("i",{className:"icon-up-open"})})})]})})}}]),c}(t.Component),p={imagebaseurl:"https://github.com/dustinknowles",name:"Dustin knowles",role:"Full Stack Developer",linkedinId:"Your LinkedIn Id",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/dustin-knowles22/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/dustinknowles",className:"fa fa-github"}],aboutme:"I am a Full Stack Developer from San Diego, Ca",education:[{UniversityName:"UCSD Extention",specialization:"Full Stack Development",MonthOfPassing:"May",YearOfPassing:"2021",Achievements:"Certificate"}],work:[{CompanyName:"BuySide",specilization:"Customer Service Specialist"}],skills:[{skillname:"HTML5"},{skillname:"CSS"},{skillname:"Reactjs"}],portfolio:[{name:"Vibe Checkerator",description:"Check your Vibe!",imgurl:"../public/images/vibe-main.jpg",imglink:"https://mpkahn.github.io/thevibe/"}]},v=function(e){Object(j.a)(c,e);var s=Object(o.a)(c);function c(){return Object(l.a)(this,c),s.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(h,{resumeData:p}),Object(d.jsx)(m,{resumeData:p}),Object(d.jsx)(b,{resumeData:p}),Object(d.jsx)(u,{resumeData:p}),Object(d.jsx)(x,{resumeData:p})]})}}]),c}(t.Component),f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,28)).then((function(s){var c=s.getCLS,t=s.getFID,i=s.getFCP,n=s.getLCP,a=s.getTTFB;c(e),t(e),i(e),n(e),a(e)}))};a.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),f()}},[[27,1,2]]]);
//# sourceMappingURL=main.e74c697d.chunk.js.map