(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[10],{1502:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(550),l=n(551),c=n(36),d=n(1503),i=n.n(d),s=n(1504),u=n.n(s),p=Object(c.b)(i.a,u.a),f=[{name:"1-base",title:Object(c.b)("基本用法 \n Card 内部由 Header, Body, Footer 三个自组件组成，可以组合或单独使用","Base \n The card is composed of three components: Header, Body, and Footer. It can be combined or used separately."),component:n(1505).default,rawText:n(1506)},{name:"2-boxshadow",title:Object(c.b)("阴影 \n 可以通过 shadow 属性控制阴影","BoxShadow \n Set the shadow property to determined how to display the shadow."),component:n(1507).default,rawText:n(1508)},{name:"3-form",title:Object(c.b)("表单 \n Card.Submit 可以用来触发 Card 内部表单提交","Form \n Use Card.submit to trigger the submimt event of the form in the card."),component:n(1509).default,rawText:n(1510)},{name:"4-collapse",title:Object(c.b)("折叠 \n 设置 collapsible 可以折叠 Card，通过 collapsed 或 defaultCollapsed 属性控制状态","Collapse \n Set collapsible can collapse the Card panel."),component:n(1511).default,rawText:n(1512)},{name:"5-accordion",title:Object(c.b)("手风琴 \n 使用 Card.Accordion 可以使一组 Card 实现手风琴效果（每次打开一个 Card）","Accordion \n Put a group of Card in the Card.Accordion, only one panel can be expanded at the same time."),component:n(1513).default,rawText:n(1514)}];t.default=Object(o.a)(function(e){return r.a.createElement(l.b,Object.assign({},e,{codes:void 0,source:p,examples:f}))})},1503:function(e,t){e.exports="# Card *卡片*\n\n<example />\n\n## API\n\n### Card\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| className | string | 无 | 扩展className |\n| collapsible | boolean \\| 'bottom' | false | 是否可折叠，'bottom' 表示从下方点击折叠 |\n| collapsed | boolean | 无 | 是否折叠，用于受控状态 |\n| defaultCollapsed | boolean | true | 初始折叠状态（仅在 collapsible 为 true 时有效） |\n| onCollapse | () => void | 无 | 折叠状态改变时回调事件 |\n| shadow | true \\| false \\| 'hover' | false | 是否显示阴影<br />'hover' - 鼠标移到元素上显示<br />true - 总是显示<br />false - 从不显示 |\n| style | object | 无 | 最外层扩展样式 |\n| id | any | 无 | 手风琴下控制展开的值 |\n\n<br />\n\n### Card.Header, Card.Body, Card.Footer\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| className | string | 无 | 扩展className |\n| style | object | 无 | 最外层扩展样式 |\n\n<br />\n\n### Card.Accordion\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| active | any | 无 | 打开的值，全关闭时为 null，用于受控状态。默认为索引，若Card设置id后则为id。 |\n| defaultActive | any | 0 | 默认打开的值，用于非受控状态。默认为索引，若Card设置id后则为id。 |\n| onChange | () => void | 无 | 面板打开回调 |\n\n<br />\n\n### Card.Submit\n\n同 [Button](/components/Button)\n"},1504:function(e,t){e.exports="# Card\n\n<example />\n\n## API\n\n### Card\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| className | string | none | Extend className |\n| collapsible | boolean \\| 'bottom' | false | Whether can be collapsed，'bottom' can collaps on bottom |\n| collapsed | boolean | - | Whether to be collapsed. |\n| defaultCollapsed | boolean | true | Initial collapsed state |\n| onCollapse | () => void | - | Callback when collapsed state changed |\n| shadow | true \\| false \\| 'hover' | false | Whether to show the shadow.<br />'hover' - Display it when the mouse is over the element.<br />true - Always show<br />false - Never show |\n| style | object | - | Container element style |\n| id | any | none | Card.Accordion expand controlled key |\n\n### Card.Header, Card.Body, Card.Footer\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| className | string | - | Extend className |\n| style | object | - | Element style |\n\n### Card.Accordion\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| active | any | none | Active value. It is -1 when fully closed. Used in controlled state. be id while Card.id setted |\n| defaultActive | any | 0 | The default active value for uncontrolled state, be id while Card.id setted|\n| onChange | () => void | none | The callback function when the panel is opened |\n\n### Card.Submit\n\nThe same as [Button](/components/Button)\n"},1505:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(290),l={width:240,height:300,display:"inline-flex",marginRight:20},c={background:"#f7f7f7"};t.default=function(){return r.a.createElement("div",null,r.a.createElement(o.a,{style:l},r.a.createElement(o.a.Header,null,"Header"),r.a.createElement(o.a.Body,null,"Body"),r.a.createElement(o.a.Footer,null,"Footer")),r.a.createElement(o.a,{style:l},r.a.createElement(o.a.Header,{style:c},"Header"),r.a.createElement(o.a.Body,null,"Body"),r.a.createElement(o.a.Footer,{style:c},"Footer")))}},1506:function(e,t){e.exports="/**\n * cn - 基本用法\n *    -- Card 内部由 Header, Body, Footer 三个自组件组成，可以组合或单独使用\n * en - Base\n *    -- The card is composed of three components: Header, Body, and Footer. It can be combined or used separately.\n */\nimport React from 'react'\nimport { Card } from 'shineout'\n\nconst cardStyle = {\n  width: 240,\n  height: 300,\n  display: 'inline-flex',\n  marginRight: 20,\n}\nconst gray = { background: '#f7f7f7' }\n\nexport default function() {\n  return (\n    <div>\n      <Card style={cardStyle}>\n        <Card.Header>Header</Card.Header>\n        <Card.Body>Body</Card.Body>\n        <Card.Footer>Footer</Card.Footer>\n      </Card>\n\n      <Card style={cardStyle}>\n        <Card.Header style={gray}>Header</Card.Header>\n        <Card.Body>Body</Card.Body>\n        <Card.Footer style={gray}>Footer</Card.Footer>\n      </Card>\n    </div>\n  )\n}\n"},1507:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(290),l={width:140,display:"inline-flex",marginRight:20};t.default=function(){return r.a.createElement("div",null,r.a.createElement(o.a,{style:l},r.a.createElement(o.a.Body,null,"Never")),r.a.createElement(o.a,{style:l,shadow:"hover"},r.a.createElement(o.a.Body,null,"Hover")),r.a.createElement(o.a,{style:l,shadow:!0},r.a.createElement(o.a.Body,null,"Always")))}},1508:function(e,t){e.exports="/**\n * cn - 阴影\n *    -- 可以通过 shadow 属性控制阴影\n * en - BoxShadow\n *    -- Set the shadow property to determined how to display the shadow.\n */\nimport React from 'react'\nimport { Card } from 'shineout'\n\nconst cardStyle = {\n  width: 140,\n  display: 'inline-flex',\n  marginRight: 20,\n}\n\nexport default function() {\n  return (\n    <div>\n      <Card style={cardStyle}>\n        <Card.Body>Never</Card.Body>\n      </Card>\n\n      <Card style={cardStyle} shadow=\"hover\">\n        <Card.Body>Hover</Card.Body>\n      </Card>\n\n      <Card style={cardStyle} shadow>\n        <Card.Body>Always</Card.Body>\n      </Card>\n    </div>\n  )\n}\n"},1509:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(290),l=n(231),c=n(74);t.default=function(){return r.a.createElement(o.a,{style:{width:500}},r.a.createElement(o.a.Header,null,"Header"),r.a.createElement(o.a.Body,null,r.a.createElement("br",null),r.a.createElement(l.a,{onSubmit:function(e){console.log(e)}},r.a.createElement(l.a.Item,{label:"User name"},r.a.createElement(c.a,{name:"name",defaultValue:"user"})),r.a.createElement(l.a.Item,{label:"Email"},r.a.createElement(c.a,{name:"email",defaultValue:"test@example.com"})))),r.a.createElement(o.a.Footer,{align:"right"},r.a.createElement(o.a.Submit,null,"Submit")))}},1510:function(e,t){e.exports='/**\n * cn - 表单\n *    -- Card.Submit 可以用来触发 Card 内部表单提交\n * en - Form\n *    -- Use Card.submit to trigger the submimt event of the form in the card.\n */\nimport React from \'react\'\nimport { Card, Form, Input } from \'shineout\'\n\nexport default function() {\n  return (\n    <Card style={{ width: 500 }}>\n      <Card.Header>Header</Card.Header>\n\n      <Card.Body>\n        <br />\n        <Form\n          onSubmit={data => {\n            console.log(data)\n          }}\n        >\n          <Form.Item label="User name">\n            <Input name="name" defaultValue="user" />\n          </Form.Item>\n\n          <Form.Item label="Email">\n            <Input name="email" defaultValue="test@example.com" />\n          </Form.Item>\n        </Form>\n      </Card.Body>\n\n      <Card.Footer align="right">\n        <Card.Submit>Submit</Card.Submit>\n      </Card.Footer>\n    </Card>\n  )\n}\n'},1511:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(290),l=n(299);t.default=function(){return r.a.createElement(o.a,{collapsible:!0},r.a.createElement(o.a.Header,null,"Header"),r.a.createElement(o.a.Body,null,r.a.createElement("div",{style:{height:100}},r.a.createElement(l.a,null))))}},1512:function(e,t){e.exports="/**\n * cn - 折叠\n *    -- 设置 collapsible 可以折叠 Card，通过 collapsed 或 defaultCollapsed 属性控制状态\n * en - Collapse\n *    -- Set collapsible can collapse the Card panel.\n */\nimport React from 'react'\nimport { Card, DatePicker } from 'shineout'\n\nexport default function() {\n  return (\n    <Card collapsible>\n      <Card.Header>Header</Card.Header>\n\n      <Card.Body>\n        <div style={{ height: 100 }}>\n          <DatePicker />\n        </div>\n      </Card.Body>\n    </Card>\n  )\n}\n"},1513:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(290);t.default=function(){return r.a.createElement(o.a.Accordion,{defaultActive:1},r.a.createElement(o.a,null,r.a.createElement(o.a.Header,null,"Header 1"),r.a.createElement(o.a.Body,null,"Body")),r.a.createElement(o.a,null,r.a.createElement(o.a.Header,null,"Header 2"),r.a.createElement(o.a.Body,null,"Body")),r.a.createElement(o.a,null,r.a.createElement(o.a.Header,null,"Header 3"),r.a.createElement(o.a.Body,null,"Body")))}},1514:function(e,t){e.exports="/**\n * cn - 手风琴\n *    -- 使用 Card.Accordion 可以使一组 Card 实现手风琴效果（每次打开一个 Card）\n * en - Accordion\n *    -- Put a group of Card in the Card.Accordion, only one panel can be expanded at the same time.\n */\nimport React from 'react'\nimport { Card } from 'shineout'\n\nexport default function() {\n  return (\n    <Card.Accordion defaultActive={1}>\n      <Card>\n        <Card.Header>Header 1</Card.Header>\n        <Card.Body>Body</Card.Body>\n      </Card>\n      <Card>\n        <Card.Header>Header 2</Card.Header>\n        <Card.Body>Body</Card.Body>\n      </Card>\n      <Card>\n        <Card.Header>Header 3</Card.Header>\n        <Card.Body>Body</Card.Body>\n      </Card>\n    </Card.Accordion>\n  )\n}\n"},290:function(e,t,n){"use strict";var a=n(12),r=n(5),o=n(6),l=n(2),c=n(7),d=n(8),i=n(3),s=n(0),u=n.n(s),p=n(14),f=n.n(p),m=n(28),h=n(30),b=n(1),y=n(165),C=n(21),v=n(169),j=n(168);function O(a){return function(){var e,t=Object(i.a)(a);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(i.a)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return Object(d.a)(this,e)}}var E=function(e){Object(c.a)(a,e);var n=O(a);function a(e){var t;return Object(r.a)(this,a),(t=n.call(this,e)).state={collapsed:e.defaultCollapsed,formStatus:""},t.bindElement=t.bindElement.bind(Object(l.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(l.a)(t)),t.handleCollapse=t.handleCollapse.bind(Object(l.a)(t)),t.setFormStatus=t.setFormStatus.bind(Object(l.a)(t)),t}return Object(o.a)(a,[{key:"getCollapsed",value:function(){var e=this.props,t=e.collapsible,n=e.collapsed;if(t)return void 0!==n?n:this.state.collapsed}},{key:"setFormStatus",value:function(e){e!==this.state.formStatus&&this.setState({formStatus:e})}},{key:"bindElement",value:function(e){this.element=e;var t=this.props.forwardedRef;t&&t(e)}},{key:"handleCollapse",value:function(){var e=!this.getCollapsed();this.props.onCollapse?this.props.onCollapse(e):this.setState({collapsed:e})}},{key:"handleSubmit",value:function(e){var t=this.element.querySelector("form");t?Object(h.dispatchEvent)(t,"submit",e):console.error(new Error("No form found."))}},{key:"render",value:function(){var e=this.props.collapsible,t=this.getCollapsed(),n=!0===this.props.shadow?"shadow":this.props.shadow,a=f()(Object(b.d)("_",n,e&&"collapsible",t&&"collapsed"),this.props.className),r={onCollapse:this.handleCollapse,collapsible:e,collapsed:t,formStatus:this.state.formStatus,onSubmit:this.handleSubmit,setFormStatus:this.setFormStatus};return u.a.createElement("div",{className:a,ref:this.bindElement,style:this.props.style},u.a.createElement(y.a,{value:r},this.props.children))}}]),a}(s.PureComponent);E.defaultProps=Object(a.a)(Object(a.a)({},m.a),{},{defaultCollapsed:!0,collapsible:!1});var g=Object(C.compose)(Object(j.a)(".".concat(Object(b.d)("header"))),v.a)(E),S=n(16),B=n(58);function w(a){return function(){var e,t=Object(i.a)(a);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(i.a)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return Object(d.a)(this,e)}}var H=function(e){Object(c.a)(a,e);var n=w(a);function a(e){var t;return Object(r.a)(this,a),(t=n.call(this,e)).handleClick=t.handleClick.bind(Object(l.a)(t)),t}return Object(o.a)(a,[{key:"handleClick",value:function(e){var t=this;e.persist(),setTimeout(function(){t.props.onSubmit(e.target)},50)}},{key:"render",value:function(){var e=this.props,t=(e.onSubmit,e.loading),n=e.children,a=e.formStatus,r=Object(S.a)(e,["onSubmit","loading","children","formStatus"]);return u.a.createElement(B.a,Object.assign({type:"primary"},r,{disabled:r.disabled||"disabled"===a,loading:"pending"===a||t,onClick:this.handleClick}),n)}}]),a}(s.PureComponent),R=n(40);function x(a){return function(){var e,t=Object(i.a)(a);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(i.a)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return Object(d.a)(this,e)}}var F=function(e){Object(c.a)(n,e);var t=x(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"renderIndicator",value:function(){if(void 0!==this.props.collapsed){var e=Object(b.d)("indicator");return u.a.createElement("span",{className:e},R.a.AngleRight)}}},{key:"render",value:function(){var e=this.props,t=e.style,n=e.align,a=e.className,r=e.children,o=e.onCollapse,l=e.collapsed,c=f()(Object(b.d)("header",n),a),d="boolean"==typeof l?o:void 0;return u.a.createElement("div",{style:t,onClick:d,className:c},this.renderIndicator(),r)}}]),n}(s.PureComponent),k=n(59);function A(a){return function(){var e,t=Object(i.a)(a);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(i.a)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return Object(d.a)(this,e)}}var N=Object(k.a)(["collapse"],"fast"),D=function(e){Object(c.a)(n,e);var t=A(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.collapsed,a=e.collapsible,r=e.onCollapse,o=Object(S.a)(e,["className","collapsed","collapsible","onCollapse"]),l=f()(Object(b.d)("body"),t);if(!a)return u.a.createElement("div",Object.assign({},o,{className:l}));var c="boolean"==typeof n?r:void 0;return u.a.createElement(N,{show:!n},u.a.createElement("div",Object.assign({},o,{className:l}),o.children,"bottom"===a&&u.a.createElement("div",{className:Object(b.d)("foldup"),onClick:c},u.a.createElement("span",null))))}}]),n}(s.PureComponent);function P(a){return function(){var e,t=Object(i.a)(a);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(i.a)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return Object(d.a)(this,e)}}var I=function(e){Object(c.a)(n,e);var t=P(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.align,n=e.className,a=Object(S.a)(e,["align","className"]),r=f()(Object(b.d)("footer",t),n);return u.a.createElement("div",Object.assign({},a,{className:r}))}}]),n}(s.PureComponent),T=n(17);function U(a){return function(){var e,t=Object(i.a)(a);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(i.a)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return Object(d.a)(this,e)}}var V=function(e){Object(c.a)(a,e);var n=U(a);function a(e){var t;return Object(r.a)(this,a),(t=n.call(this,e)).state={active:e.active||e.defaultActive},t}return Object(o.a)(a,[{key:"getActive",value:function(){return void 0!==this.props.active?this.props.active:this.state.active}},{key:"handleActive",value:function(e){e===this.state.active&&(e=null),this.setState({active:e}),this.props.onChange&&this.props.onChange(e)}},{key:"render",value:function(){var l=this,c=this.getActive();return s.Children.toArray(this.props.children).map(function(e,t){var n,a,r=(a=t,(n=e)&&n.props&&void 0!==n.props.id?n.props.id:a),o={collapsed:c!==r,collapsible:!0,className:f()("object"==typeof e&&e.className,Object(b.d)("accordion")),onCollapse:l.handleActive.bind(l,r)};return Object(s.cloneElement)(e,o)})}}]),a}(T.b);V.defaultProps={defaultActive:0};var W=V;g.Header=Object(y.b)(F,["collapsed","onCollapse"]),g.Body=Object(y.b)(D,["collapsed","collapsible","onCollapse"]),g.Footer=I,g.Submit=Object(y.b)(H,["onSubmit","formStatus"]),g.Accordion=W,g.Body.displayName="ShineoutCardBody",g.Header.displayName="ShineoutCardHeader",g.displayName="ShineoutCard";t.a=g}}]);