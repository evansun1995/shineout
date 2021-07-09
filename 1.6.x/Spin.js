(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[43],{1447:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(550),i=t(551),o=t(36),l=t(1448),s=t.n(l),u=t(1449),m=t.n(u),d=Object(o.b)(s.a,m.a),p=[{name:"01-default",title:Object(o.b)('default \n name="default"','default \n name="default"'),component:t(1450).default,rawText:t(1451)},{name:"01-wrapper",title:Object(o.b)("包裹容器 \n 直接把内容内嵌到 Spin 中，将现有容器变为加载状态。","Container \n children in Spin"),component:t(1452).default,rawText:t(1453)},{name:"02-chasing-dots",title:Object(o.b)('chasing-dots \n name="chasing-dots"','chasing-dots \n name="chasing-dots"'),component:t(1454).default,rawText:t(1455)},{name:"03-cube-grid",title:Object(o.b)('cube-grid \n name="cube-grid"','cube-grid \n name="cube-grid"'),component:t(1456).default,rawText:t(1457)},{name:"04-double-bounce",title:Object(o.b)('double-bounce \n name="double-bounce"','double-bounce \n name="double-bounce"'),component:t(1458).default,rawText:t(1459)},{name:"05-fading-circle",title:Object(o.b)('fading-circle \n name="fading-circle"','fading-circle \n name="fading-circle"'),component:t(1460).default,rawText:t(1461)},{name:"06-four-dots",title:Object(o.b)('four-dots \n name="four-dots"','four-dots \n name="four-dots"'),component:t(1462).default,rawText:t(1463)},{name:"07-plane",title:Object(o.b)('plane \n name="plane"','plane \n name="plane"'),component:t(1464).default,rawText:t(1465)},{name:"08-pulse",title:Object(o.b)('pulse \n name="pulse"','pulse \n name="pulse"'),component:t(1466).default,rawText:t(1467)},{name:"09-ring",title:Object(o.b)('ring \n name="ring"','ring \n name="ring"'),component:t(1468).default,rawText:t(1469)},{name:"10-scale-circle",title:Object(o.b)('scale-circle \n name="scale-circle"','scale-circle \n name="scale-circle"'),component:t(1470).default,rawText:t(1471)},{name:"11-three-bounce",title:Object(o.b)('three-bounce \n name="three-bounce"','three-bounce \n name="three-bounce"'),component:t(1472).default,rawText:t(1473)},{name:"12-wave",title:Object(o.b)('wave \n name="wave"','wave \n name="wave"'),component:t(1474).default,rawText:t(1475)}];n.default=Object(c.a)(function(e){return r.a.createElement(i.b,Object.assign({},e,{codes:void 0,source:d,examples:p}))})},1448:function(e,n){e.exports="# Spin *加载中*\n\n部分样式来源于[SpinKit](https://github.com/tobiasahlin/SpinKit)\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| color | string | #6c757d | 颜色 |\n| size | number \\| string | 40 | 尺寸 |\n| name | string | 'fading-circle' | 类型，可选值见示例 |"},1449:function(e,n){e.exports="# Spin\n\nPart of the style comes from [SpinKit](https://github.com/tobiasahlin/SpinKit).\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| color | string | #6c757d | color |\n| size | number \\| string | 40 | size |\n| name | string | 'fading-circle' | type. See the example for optional values. |"},1450:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(43);n.default=function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(c.a,{size:18,color:"green"}),r.a.createElement(c.a,null),r.a.createElement(c.a,{size:"54px",color:"#dc3545"}))}},1451:function(e,n){e.exports='/**\n* cn - default\n     -- name="default"\n* en - default\n     -- name="default"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} color="green" />\n      <Spin />\n      <Spin size="54px" color="#dc3545" />\n    </div>\n  )\n}\n'},1452:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return f});var i=t(5),a=t(6),o=t(7),r=t(8),c=t(3),l=t(0),s=t.n(l),u=t(303),m=t(43),d=t(106);function p(a){return function(){var e,n=Object(c.a)(a);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var t=Object(c.a)(this).constructor;e=Reflect.construct(n,arguments,t)}else e=n.apply(this,arguments);return Object(r.a)(this,e)}}var f=function(e){Object(o.a)(c,e);var r=p(c);function c(){var n;Object(i.a)(this,c);for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(n=r.call.apply(r,[this].concat(t))).state={loading:!0},n.handleChange=function(e){n.setState({loading:e})},n}return Object(a.a)(c,[{key:"render",value:function(){var e=this.state.loading;return s.a.createElement("div",null,s.a.createElement(u.a,{value:e,onChange:this.handleChange,style:{marginBottom:20}}),s.a.createElement(m.a,{loading:e,size:20},s.a.createElement(d.a,{style:{marginBottom:0}},s.a.createElement("h3",null,"This is Title"),"Some Content Here...")))}}]),c}(s.a.Component)},1453:function(e,n){e.exports="/**\n* cn - 包裹容器\n     -- 直接把内容内嵌到 Spin 中，将现有容器变为加载状态。\n* en - Container\n     -- children in Spin\n*/\nimport React from 'react'\nimport { Spin, Alert, Switch } from 'shineout'\n\nexport default class extends React.Component {\n  state = {\n    loading: true,\n  }\n\n  handleChange = v => {\n    this.setState({\n      loading: v,\n    })\n  }\n\n  render() {\n    const { loading } = this.state\n    return (\n      <div>\n        <Switch value={loading} onChange={this.handleChange} style={{ marginBottom: 20 }} />\n        <Spin loading={loading} size={20}>\n          <Alert style={{ marginBottom: 0 }}>\n            <h3>This is Title</h3>\n            Some Content Here...\n          </Alert>\n        </Spin>\n      </div>\n    )\n  }\n}\n"},1454:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(43);n.default=function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(c.a,{size:18,name:"chasing-dots",color:"green"}),r.a.createElement(c.a,{name:"chasing-dots"}),r.a.createElement(c.a,{size:"54px",name:"chasing-dots",color:"#dc3545"}))}},1455:function(e,n){e.exports='/**\n* cn - chasing-dots\n     -- name="chasing-dots"\n* en - chasing-dots\n     -- name="chasing-dots"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="chasing-dots" color="green" />\n      <Spin name="chasing-dots" />\n      <Spin size="54px" name="chasing-dots" color="#dc3545" />\n    </div>\n  )\n}\n'},1456:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(43);n.default=function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(c.a,{size:18,name:"cube-grid",color:"green"}),r.a.createElement(c.a,{name:"cube-grid"}),r.a.createElement(c.a,{size:"54px",name:"cube-grid",color:"#dc3545"}))}},1457:function(e,n){e.exports='/**\n* cn - cube-grid\n     -- name="cube-grid"\n* en - cube-grid\n     -- name="cube-grid"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="cube-grid" color="green" />\n      <Spin name="cube-grid" />\n      <Spin size="54px" name="cube-grid" color="#dc3545" />\n    </div>\n  )\n}\n'},1458:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(43);n.default=function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(c.a,{size:18,name:"double-bounce",color:"green"}),r.a.createElement(c.a,{name:"double-bounce"}),r.a.createElement(c.a,{size:"54px",name:"double-bounce",color:"#dc3545"}))}},1459:function(e,n){e.exports='/**\n* cn - double-bounce\n     -- name="double-bounce"\n* en - double-bounce\n     -- name="double-bounce"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="double-bounce" color="green" />\n      <Spin name="double-bounce" />\n      <Spin size="54px" name="double-bounce" color="#dc3545" />\n    </div>\n  )\n}\n'},1460:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(43);n.default=function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(c.a,{size:18,name:"fading-circle",color:"green"}),r.a.createElement(c.a,{name:"fading-circle"}),r.a.createElement(c.a,{size:"54px",name:"fading-circle",color:"#dc3545"}))}},1461:function(e,n){e.exports='/**\n* cn - fading-circle\n     -- name="fading-circle"\n* en - fading-circle\n     -- name="fading-circle"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="fading-circle" color="green" />\n      <Spin name="fading-circle" />\n      <Spin size="54px" name="fading-circle" color="#dc3545" />\n    </div>\n  )\n}\n'},1462:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(43);n.default=function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(c.a,{size:18,name:"four-dots",color:"green"}),r.a.createElement(c.a,{name:"four-dots"}),r.a.createElement(c.a,{size:"54px",name:"four-dots",color:"#dc3545"}))}},1463:function(e,n){e.exports='/**\n* cn - four-dots\n     -- name="four-dots"\n* en - four-dots\n     -- name="four-dots"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="four-dots" color="green" />\n      <Spin name="four-dots" />\n      <Spin size="54px" name="four-dots" color="#dc3545" />\n    </div>\n  )\n}\n'},1464:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(43);n.default=function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(c.a,{size:18,name:"plane",color:"green"}),r.a.createElement(c.a,{name:"plane"}),r.a.createElement(c.a,{size:"54px",name:"plane",color:"#dc3545"}))}},1465:function(e,n){e.exports='/**\n* cn - plane\n     -- name="plane"\n* en - plane\n     -- name="plane"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="plane" color="green" />\n      <Spin name="plane" />\n      <Spin size="54px" name="plane" color="#dc3545" />\n    </div>\n  )\n}\n'},1466:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(43);n.default=function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(c.a,{size:18,name:"pulse",color:"green"}),r.a.createElement(c.a,{name:"pulse"}),r.a.createElement(c.a,{size:"54px",name:"pulse",color:"#dc3545"}))}},1467:function(e,n){e.exports='/**\n* cn - pulse\n     -- name="pulse"\n* en - pulse\n     -- name="pulse"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="pulse" color="green" />\n      <Spin name="pulse" />\n      <Spin size="54px" name="pulse" color="#dc3545" />\n    </div>\n  )\n}\n'},1468:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(43);n.default=function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(c.a,{size:18,name:"ring",color:"green"}),r.a.createElement(c.a,{name:"ring"}),r.a.createElement(c.a,{size:"54px",name:"ring",color:"#dc3545"}))}},1469:function(e,n){e.exports='/**\n* cn - ring\n     -- name="ring"\n* en - ring\n     -- name="ring"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="ring" color="green" />\n      <Spin name="ring" />\n      <Spin size="54px" name="ring" color="#dc3545" />\n    </div>\n  )\n}\n'},1470:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(43);n.default=function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(c.a,{size:18,name:"scale-circle",color:"green"}),r.a.createElement(c.a,{name:"scale-circle"}),r.a.createElement(c.a,{size:"54px",name:"scale-circle",color:"#dc3545"}))}},1471:function(e,n){e.exports='/**\n* cn - scale-circle\n     -- name="scale-circle"\n* en - scale-circle\n     -- name="scale-circle"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="scale-circle" color="green" />\n      <Spin name="scale-circle" />\n      <Spin size="54px" name="scale-circle" color="#dc3545" />\n    </div>\n  )\n}\n'},1472:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(43);n.default=function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(c.a,{size:18,name:"three-bounce",color:"green"}),r.a.createElement(c.a,{name:"three-bounce"}),r.a.createElement(c.a,{size:"54px",name:"three-bounce",color:"#dc3545"}))}},1473:function(e,n){e.exports='/**\n* cn - three-bounce\n     -- name="three-bounce"\n* en - three-bounce\n     -- name="three-bounce"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="three-bounce" color="green" />\n      <Spin name="three-bounce" />\n      <Spin size="54px" name="three-bounce" color="#dc3545" />\n    </div>\n  )\n}\n'},1474:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(43);n.default=function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(c.a,{size:18,name:"wave",color:"green"}),r.a.createElement(c.a,{name:"wave"}),r.a.createElement(c.a,{size:"54px",name:"wave",color:"#dc3545"}))}},1475:function(e,n){e.exports='/**\n* cn - wave\n     -- name="wave"\n* en - wave\n     -- name="wave"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="wave" color="green" />\n      <Spin name="wave" />\n      <Spin size="54px" name="wave" color="#dc3545" />\n    </div>\n  )\n}\n'},303:function(e,n,t){"use strict";var a=t(52),r=t(21),c=t(125),i=Object(c.a)("switch"),o=t(552),l=Object(r.compose)(a.a,o.b)(i);l.displayName="ShineoutSwitch",l.Switch=i;n.a=l},552:function(e,n,t){"use strict";t.d(n,"a",function(){return o}),t.d(n,"b",function(){return l});var a=t(0),r=t.n(a),c=t(33),i=Object(c.a)(),o=i.Provider,l=function(t){return function(n){return r.a.createElement(i.Consumer,null,function(e){return r.a.createElement(t,Object.assign({},n,e))})}}}}]);