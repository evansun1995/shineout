(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[18],{1493:function(t,e,n){"use strict";n.r(e);var i=n(26),o=n(494),a=n(519),l=["API",{name:"Props",cn:"约定",level:2,component:Object(o.a)(function(){return n.e(4).then(n.t.bind(null,555,7))},!0)},{name:"Classname",level:2,component:Object(o.a)(function(){return n.e(5).then(n.t.bind(null,556,7))},!0)},"CHANGELOG"].concat(Object(i.a)(["1.x.x"].map(function(t){return{name:t,level:2,component:Object(o.a)(function(){return n(655)("./".concat("changelog","/").concat(t,".md"))},!0)}})));e.default=Object(a.a)(l)},519:function(t,e,n){"use strict";var d=n(23),h=n(0),u=n.n(h),m=n(87),b=n(72),p=n(532),f=n(39),v=n(154),g=n(20),O=n(150),E=["Datum.Form","Datum.List"];function y(t,e){return""===e.path?t:"".concat(t,"/").concat(e.path||e.name)}e.a=function(s){return function(t){var n=t.match.url,e=s.find(function(t){return"string"!=typeof t}),i=(t.history.location||{search:""}).search;0===i.indexOf("?example=")&&i.replace("?example=","");var o=Object(h.useState)(window.innerWidth<979),a=Object(d.a)(o,2),l=a[0],c=a[1],r=function(){if(!(979<window.innerWidth)){var t=document.querySelector("#-shineout-menu"),e=!l;e?(c(e),setTimeout(function(){t&&(t.style.display="none")},400)):(setTimeout(function(){return c(e)},16),t&&(t.style.display="block"))}};return Object(h.useEffect)(function(){var t=function(){c(window.innerWidth<979)};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}},[]),u.a.createElement(h.Fragment,null,u.a.createElement("div",{tabIndex:"-1",className:Object(g.d)("nav-open-close")},u.a.createElement(O.a,{name:l?"Menu":"close",onClick:r})),u.a.createElement(p.a,{top:0},u.a.createElement("div",{id:"-shineout-menu",className:Object(g.d)("menu",l&&"hidden")},s.filter(function(t){return-1===E.indexOf(t.name)}).map(function(t,e){return"string"==typeof t?u.a.createElement("label",{key:e},t):u.a.createElement(m.b,{className:Object(g.d)(2===t.level&&"sub"),activeClassName:Object(g.d)("active"),key:t.name,to:y(n,t),onClick:r},u.a.createElement("p",null,t.name,u.a.createElement("span",{style:{margin:"0 0 0 6px"}},Object(f.b)(t.cn))))}))),u.a.createElement("div",{className:Object(g.d)("page")},u.a.createElement(h.Suspense,{fallback:u.a.createElement(v.a,null)},u.a.createElement(b.d,null,u.a.createElement(b.a,{from:n,exact:!0,to:y(n,e)}),s.filter(function(t){return"object"==typeof t}).map(function(t){return u.a.createElement(b.b,{key:t.name+i,path:y(n,t),component:t.component,onEnter:function(){r.bind(null)}})})))))}}},532:function(t,e,n){"use strict";var i=n(15),r=n(30),o=n(4),a=n(5),l=n(6),c=n(3),s=n(24),d=n(7),h=n(1),u=n(0),m=n.n(u),b=n(16),p=n(31),f=n(80),v=n(21),g=n(25),O=["scroll","resize","pageshow","load"],E=Object(p.a)("position","sticky"),y=function(t){function n(t){var e;return Object(o.a)(this,n),(e=Object(l.a)(this,Object(c.a)(n).call(this,t))).state={},e.bindElement=e.bindElement.bind(Object(h.a)(Object(h.a)(e))),e.bindOrigin=e.bindOrigin.bind(Object(h.a)(Object(h.a)(e))),e.bindPlaceholder=e.bindPlaceholder.bind(Object(h.a)(Object(h.a)(e))),e.handlePosition=e.handlePosition.bind(Object(h.a)(Object(h.a)(e))),e}return Object(d.a)(n,t),Object(a.a)(n,[{key:"componentDidMount",value:function(){Object(s.a)(Object(c.a)(n.prototype),"componentDidMount",this).call(this);var t=this.props.target;this.targetElement=Object(p.e)(this.element,t),this.handlePosition(),this.bindScroll()}},{key:"componentWillUnmount",value:function(){Object(s.a)(Object(c.a)(n.prototype),"componentWillUnmount",this).call(this),this.unbindScroll(),this.scrollTimer&&clearTimeout(this.scrollTimer)}},{key:"getStyle",value:function(t,e,n,i){var o,a=this.props.style.zIndex,l=void 0===a?900:a,c=(o={position:"fixed",left:n,width:i},Object(r.a)(o,t,e),Object(r.a)(o,"zIndex",l),o);return this.targetElement&&(E?c.position="sticky":(c.position="absolute",c.transform="translateY(".concat(e).concat(this.targetElement.scrollTop,"px)"),delete c.left)),c}},{key:"setPosition",value:function(){var t=this.props,e=t.bottom,n=t.top,i=t.target,o=this.state,a=o.mode,l=o.scrollWidth,c=this.element.getBoundingClientRect().toJSON(),r=(this.targetElement||document.body).getBoundingClientRect(),s=this.placeholder?this.placeholder.getBoundingClientRect().toJSON():null,d=g.b.height;if(this.origin){var h=this.origin.getBoundingClientRect().width;c.width=h,s&&(s.width=h)}var u,m,b={width:c.width,height:i&&E?0:c.height},p=n,f=d-e;this.targetElement&&(p+=r.top,f=r.bottom-e),void 0!==n&&"bottom"!==a&&(c.top<p?(this.setState({scrollWidth:r.width,mode:"top"}),u=this.getStyle("top",n,c.left,c.width),m=b):s&&c.top<s.top?i&&c.top===p||(this.setState({mode:""}),u={},m=null):this.targetElement&&s?(u=this.getStyle("top",n,c.left,c.width),m=b):l&&s&&l!==r.width&&(this.setState({scrollWidth:r.width,mode:"top"}),u=this.getStyle("top",n,s.left,s.width),m=b)),void 0!==e&&"top"!==a&&(c.bottom>f?(this.setState({scrollWidth:r.width,mode:"bottom"}),u=this.getStyle("bottom",e,c.left,c.width),m=b):s&&(this.targetElement?r.bottom:c.bottom)>s.bottom?(this.setState({mode:""}),u={},m=null):this.targetElement&&s?(u=this.getStyle("bottom",e,c.left,c.width),m=b):l&&s&&l!==r.width&&(this.setState({scrollWidth:r.width,mode:"bottom"}),u=this.getStyle("bottom",e,s.left,s.width),m=b)),void 0!==m&&this.setState({placeholder:m}),u&&this.setState({style:u})}},{key:"handlePosition",value:function(){var t=this;this.locked?this.scrollCount+=1:(this.locked=!0,this.scrollCount=0,this.setPosition(),this.scrollTimer=setTimeout(function(){t.locked=!1,0<t.scrollCount&&t.handlePosition()},48))}},{key:"bindElement",value:function(t){this.element=t}},{key:"bindOrigin",value:function(t){this.origin=t}},{key:"bindPlaceholder",value:function(t){this.placeholder=t}},{key:"bindScroll",value:function(){var e=this;this.targetElement?this.targetElement.addEventListener("scroll",this.handlePosition,f.a):O.forEach(function(t){window.addEventListener(t,e.handlePosition)})}},{key:"unbindScroll",value:function(){var e=this;this.targetElement?this.targetElement.removeEventListener("scroll",this.handlePosition):O.forEach(function(t){window.removeEventListener(t,e.handlePosition)})}},{key:"render",value:function(){var t=this.props,e=t.children,n=t.className,i=t.target,o=this.state.placeholder,a=this.props.style,l=this.state.style;return i&&E&&(a=Object.assign({},a,l),l={}),m.a.createElement("div",{style:a,className:n},m.a.createElement("div",{ref:this.bindElement,style:l},e),m.a.createElement("div",{ref:this.bindOrigin}),o&&m.a.createElement("div",{ref:this.bindPlaceholder,style:o}))}}]),n}(b.b);y.defaultProps=Object(i.a)({},v.a),y.displayName="ShineoutSticky",e.a=y},655:function(t,e,i){var o={"./api-classname.md":[556,5],"./api-props.md":[555,4],"./changelog-rc/1.x.x.md":[1484,54],"./changelog/0.x.x.md":[1482,52],"./changelog/1.x.x.md":[1483,53]};function n(e){var n=o[e];return n?i.e(n[1]).then(function(){var t=n[0];return i.t(t,7)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}n.keys=function(){return Object.keys(o)},n.id=655,t.exports=n}}]);