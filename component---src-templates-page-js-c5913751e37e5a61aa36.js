(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{404:function(e,t,a){"use strict";a.r(t);a(88),a(94),a(160),a(161),a(48);var n=a(0),l=a.n(n),r=a(1),s=a.n(r),c=a(89),o=a.n(c),i=a(90),m=a(91),u=(a(405),a(4)),p=a.n(u),d=a(406),f=a.n(d),h=function(e){return e.replace(/[^A-Za-z0-9-.]+/g,"_")},b=function(e){function t(t){var a;(a=e.call(this,t)||this).select=function(e,t){return function(n){var l=a.props.examples,r=l[e||0]?l[e||0].title:null,s=l[e]&&l[e].examples[t||0]?l[e].examples[t||0].title:null;r&&s&&"undefined"!=typeof window&&(window.location.hash=h(r)+"__"+h(s)),a.setState({selected:e,subSelected:t||0})}};var n=null,l=null;if("undefined"!=typeof window&&window.location&&window.location.hash){var r=window.location.hash.replace(/^#+/,"").split("__");if(r.length>=2){var s=t.examples,c=s.findIndex(function(e){return h(e.title)===r[0]});if(c>=0){var o=s[c].examples.findIndex(function(e){return h(e.title)===r[1]});n=c,l=o>=0?o:0}}}return a.state={selected:n,subSelected:l},a}return p()(t,e),t.prototype.render=function(){var e=this,t=this.props.examples,a=function(t){return(e.state.selected||0)===t},n=function(t,n){return a(t)&&(e.state.subSelected||0)===n},r=t[this.state.selected||0],s=r&&r.examples[this.state.subSelected||0]||{};return l.a.createElement("div",{className:"flex bg-black h7 w-100 border-box"},l.a.createElement("div",{className:"w-25 bg-white-20 h-100 pa0 ma0 white w5"},l.a.createElement("ul",{className:"list h-100 ma0 pa1 pa2-ns"},t.map(function(t,r){var s=t.title,c=t.examples;return l.a.createElement("li",{key:s,className:"ma0 pa0"},l.a.createElement("span",{onClick:e.select(r),className:"f7 f6-ns pointer "+(a(r)?"white":"white-60")},a(r)?"▾":"▸"," ",s),a(r)?l.a.createElement("ul",{className:"list pl2 pl3-ns"},c.map(function(t,a){var s=t.title;return l.a.createElement("li",{key:s,className:"f6 pl1-ns"},l.a.createElement("span",{onClick:e.select(r,a),className:"f7 f6-ns pointer "+(n(r,a)?"white":"white-60")},s))})):null)}))),l.a.createElement("div",{className:"w-75 flex flex-column flex-row-l ba br0 b--silver"},l.a.createElement("div",{className:"w-100 w-50-l h-50 h-100-l flex-auto"},l.a.createElement(f.a,{component:"pre",className:"no-shadow f7 pa1 bn br0 h-100 overflow-auto language-"+s.exampleLanguage},s.example)),s.result&&l.a.createElement("div",{className:"w-100 w-50-l h-50 h-100-l flex-auto overflow-auto"},l.a.createElement(f.a,{component:"pre",className:"no-shadow f7 pa1 bt bn-l bl-l br0 b--silver h-100 flex-auto language-"+s.resultLanguage},s.result))))},t}(l.a.Component),g=function(){return l.a.createElement("form",{action:"//graphile.us16.list-manage.com/subscribe/post?u=d103f710cf00a9273b55e8e9b&id=c3a9eb5c4e",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",className:"validate",target:"_blank",noValidate:!0},l.a.createElement("div",{id:"mc_embed_signup_scroll",className:"center hero-block"},l.a.createElement("p",null,"Keep up to date on Graphile and PostGraphile features/changes. Subscribe to our occasional announcements newsletter:"),l.a.createElement("div",{className:"mc-field-group form-inline justify-content-center"},l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"mb2"},l.a.createElement("label",{className:"label--small",htmlFor:"mce-EMAIL"},"Email address:")),l.a.createElement("input",{autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",className:"input-text mb0-ns mb1",id:"mce-EMAIL",name:"EMAIL",spellCheck:"false",type:"email",defaultValue:""}),l.a.createElement("div",{style:{position:"absolute",left:"-5000px"},"aria-hidden":"true"},l.a.createElement("input",{type:"text",name:"b_d103f710cf00a9273b55e8e9b_c3a9eb5c4e",tabIndex:"-1",defaultValue:""})),l.a.createElement("input",{className:"button--solid",id:"mc-embedded-subscribe",name:"subscribe",type:"submit",value:"Subscribe"})),l.a.createElement("div",{id:"mce-responses",className:"clear"},l.a.createElement("div",{className:"response",id:"mce-error-response",style:{display:"none"}}),l.a.createElement("div",{className:"response",id:"mce-success-response",style:{display:"none"}})))))},E=function(){return l.a.createElement("section",{className:"mailinglist"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12"},l.a.createElement("div",{className:"hero-block"},l.a.createElement("h3",null,"Questions, comments or feedback?",l.a.createElement("br",null),"Email"," ",l.a.createElement("a",{href:"mailto:info@graphile.org?subject=Documentation%20question/comment/feedback:)"},"info@graphile.org")),l.a.createElement(g,null))))))},v=a(92);a(60);a.d(t,"pageQuery",function(){return P});var w=function(e){var t,a=e.children,n=e.noLink;return l.a.createElement("span",{dangerouslySetInnerHTML:{__html:_((t=a,t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")),n)}})};function y(e){var t=e.pages,a=e.location,n=e.depth,r=void 0===n?0:n;return l.a.createElement("ul",{className:"page-list nav flex-column "+(0===r?"mb5":null)},t.map(function(e,t){var n=e.to,c=e.title,o=e.subpages;return l.a.createElement("li",{key:t,className:"f6 lh-copy pv1"},l.a.createElement(s.a,{className:"nav-link "+(a.pathname===n?"active":""),to:n},l.a.createElement(w,null,c)),o&&o.length?l.a.createElement(y,{pages:o,location:a,depth:r+1}):null)}))}var N=function(e){var t=e.sections,a=e.pages,n=e.location;return l.a.createElement("aside",{className:"sidebar col-xs-12 col-md-3 last-xs mt3"},t.map(function(e,t){var r,s=e.id,c=e.title;return l.a.createElement("section",{key:t},l.a.createElement("h4",{className:"f6 ttu fw6 mt0 mb3 bb pb2"},l.a.createElement(w,null,c)),l.a.createElement("div",{className:"nested-list-reset"},l.a.createElement(y,{location:n,pages:a.filter((r=s,function(e){return e.sectionId===r}))})))}))},x=function(e,t,a){return void 0===t&&(t=e),void 0===a&&(a=!1),"<"+(a?"span":"a href='/postgraphile/pricing/'")+' class="plan-'+e+"\"><span class='first-letter'>"+t[0]+"</span><span class='rest'>"+t.substr(1)+"</span></"+(a?"span":"a")+">"};function _(e,t){return e.replace(/\[SUPPORTER\]/g,x("supporter","supporter",t)).replace(/\[PRO\]/g,x("pro","pro",t)).replace(/\[ENTERPRISE\]/g,x("enterprise","enterprise",t)).replace(/^.* Gallery$/g,"<strong>$&</strong>")}var P="130048078";t.default=function(e){var t=e.data,a=t.remark,n=a.html,r=a.frontmatter,c=r.title,u=r.showExamples,p=t.nav,d=t.examples,f=e.location,h=e.history,g=_(n),y=f.pathname.split("/")[1],x=p.edges.find(function(e){return e.node.name===y}),P=x&&x.node||{pages:[],sections:[]},k=P.pages,L=P.sections||[],O=function(e,t){var a=e.reduce(function(e,t){return e.push(t),t.subpages&&e.push.apply(e,t.subpages),e},[]),n=a.find(function(e){return e.to===t});if(!n)return{};var l,r,s,c,o=a.indexOf(n);return o>0&&(s=a[o-1].to,c=a[o-1].title),o>=0&&o<a.length-1&&(l=a[o+1].to,r=a[o+1].title),{next:l,nextText:r,prev:s,prevText:c}}(k,f.pathname),T=O.next,I=O.nextText,S=O.prev,j=O.prevText,M="postgraphile"===y;return l.a.createElement(v.a,e,l.a.createElement("div",{className:"template-page "+(f.pathname.match(/^\/(postgraphile|news|support|sponsors?)(\/|$)/)?"postgraphile":"")},l.a.createElement(o.a,{title:(M?"PostGraphile":"Graphile")+" | "+c,meta:[{name:"description",content:"Utilities to build powerful and performant GraphQL APIs"},{name:"keywords",content:"GraphQL, API, Graph, PostgreSQL, PostGraphile, PostGraphQL, Postgres-GraphQL, server, plugins, introspection, reflection"}]}),l.a.createElement(m.a,{location:f,history:h}),l.a.createElement("div",{className:"page-content"},l.a.createElement("section",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row between-xs"},l.a.createElement(N,{sections:L,pages:k,location:f}),l.a.createElement("div",{className:"col-xs-12 col-md-9 first-xs main-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12",style:{width:"100%"}},l.a.createElement("div",{className:"edit-this-page",style:{display:f.pathname.match(/^\/news\//)?"none":""}},l.a.createElement("a",{href:"https://github.com/graphile/graphile.github.io/edit/develop/src/pages"+f.pathname.substr(0,f.pathname.length-1)+".md"},"📝 Suggest improvements to this page")),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:g}})),l.a.createElement("br",null),u&&l.a.createElement(b,{examples:d.edges.filter(function(e){return e.node.category===u}).map(function(e){return e.node})}),l.a.createElement("br",null),l.a.createElement("div",{className:"col-xs-12 mt3 mb5"},l.a.createElement("div",{className:"row between-xs"},l.a.createElement("div",{className:"col-xs-6"},S?l.a.createElement(s.a,{className:"",to:S},l.a.createElement("span",{className:"fas fa-fw fa-arrow-left"})," ",j?l.a.createElement(w,{noLink:!0},j):"Previous"):null),l.a.createElement("div",{className:"col-xs-6 tr"},T?l.a.createElement(s.a,{className:"",to:T},I?l.a.createElement(w,{noLink:!0},I):"Next"," ",l.a.createElement("span",{className:"fas fa-fw fa-arrow-right"})):null)))))))),l.a.createElement(E,null)),l.a.createElement(i.a,null)))}},405:function(e,t,a){"use strict";var n=a(19),l=a(162)(6),r="findIndex",s=!0;r in[]&&Array(1)[r](function(){s=!1}),n(n.P+n.F*s,"Array",{findIndex:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0)}}),a(61)(r)},406:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(407);function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"PrismCode",{enumerable:!0,get:function(){return l(n).default}}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l(n).default}})},407:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a(0),s=(n=r)&&n.__esModule?n:{default:n},c=a(2);function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var i=function(e){function t(){var e,a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,r=Array(l),s=0;s<l;s++)r[s]=arguments[s];return a=n=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r))),n._handleRefMount=function(e){n._domNode=e},o(n,a)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.PureComponent),l(t,[{key:"componentDidMount",value:function(){this._hightlight()}},{key:"componentDidUpdate",value:function(){this._hightlight()}},{key:"_hightlight",value:function(){Prism.highlightElement(this._domNode,this.props.async)}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.component,n=e.children;return s.default.createElement(a,{ref:this._handleRefMount,className:t},n)}}]),t}();i.propTypes={async:c.PropTypes.bool,className:c.PropTypes.string,children:c.PropTypes.any,component:c.PropTypes.node},i.defaultProps={component:"code"},t.default=i}}]);
//# sourceMappingURL=component---src-templates-page-js-c5913751e37e5a61aa36.js.map