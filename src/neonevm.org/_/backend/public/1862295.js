(window.webpackJsonp=window.webpackJsonp||[]).push([[25,9,10],{463:function(t,e,n){var content=n(487);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("3dfe6a48",content,!0,{sourceMap:!1})},472:function(t,e,n){"use strict";n.r(e);n(8),n(57);var r={name:"NeonCommunity",props:{list:{type:Array,require:!0}},methods:{icon:function(t){var e=t.networkIcon;return"".concat(e[0].toUpperCase()).concat(e.slice(1),"BigIcon")}}},l=n(11),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid-plate"},[n("div",{staticClass:"flex flex-col sm:flex-row sm:flex-wrap md:pb-10 sm:-mx-3"},t._l(t.list,(function(e){return n("div",{key:e.id,staticClass:"w-full sm:w-1/2 sm:px-3 mb-3 sm:mb-6"},[n("a",{staticClass:"bg-grey_900 w-full rounded-xl flex justify-between p-4 sm:p-6",attrs:{href:e.url,rel:"noopener noreferrer",target:"_blank"}},[n("div",{staticClass:"flex flex-col"},[n("h4",{staticClass:"text-xl font-bold mb-2"},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"flex items-center"},["user"===e.summaryIcon?n("UserIcon",{staticClass:"fill-green mr-1"}):n("StarIcon",{staticClass:"fill-green mr-1"}),t._v(" "),n("span",{staticClass:"text-bas sm:text-lg opacity-60"},[t._v(t._s(e.summary))])],1)]),t._v(" "),n("div",{staticClass:"flex flex-col justify-center pl-4"},[n(t.icon(e),{tag:"component"})],1)])])})),0)])}),[],!1,null,"5eaa3fc4",null);e.default=component.exports},473:function(t,e,n){"use strict";n.r(e);var r={name:"NeonCommunityHack"},l=n(11),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full grid-plate flex flex-col sm:flex-row py-10 sm:pt-20 sm:pb-11"},[n("div",{staticClass:"w-full mb-20 sm:mb-0 flex flex-col sm:w-1/2 sm:flex-row sm:flex-wrap sm:pr-16"},[t._m(0),t._v(" "),n("h4",{staticClass:"font-bold mb-6 text-4xl md:text-5xl leading-tight"},[t._v("Hack Neon")]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"sm:self-end flex sm:items-end"},[n("Button",{attrs:{className:"w-full sm:w-auto",white:"",to:"https://github.com/neonevm/neon-support"}},[t._v("Report bug\n      ")])],1)]),t._v(" "),n("div",{staticClass:"w-full mb-20 sm:mb-0 flex flex-col sm:w-1/2 sm:flex-row sm:flex-wrap  sm:pl-6 md:pr-16"},[t._m(2),t._v(" "),n("h4",{staticClass:"font-bold mb-6 text-4xl md:text-5xl leading-normal"},[t._v("Beware of Scams")]),t._v(" "),n("p",{staticClass:"text-grey_100 mb-8 md:mb-11"},[t._v("Do not fall victim to fake Telegram channels and phishing sites. We\n      don't sell tokens, we don't do airdrops. Stay safe and\n      "),n("Link",{attrs:{to:"https://discord.com/invite/neonevm",blank:"",inline:"",magenta:""}},[t._v("report fakes")]),t._v("\n      to support our service.\n    ")],1),t._v(" "),n("Button",{attrs:{white:"",className:"sm:self-end",to:"https://linktr.ee/neon_evm"}},[t._v("List of official channels")])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full mb-6"},[e("img",{staticClass:"w-32",attrs:{src:"/images/community/reward.png",alt:"reward image"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"text-grey_100 mb-8"},[t._v("Find a crucial bug or critical vulnerability and report it."),n("br",{staticClass:"hidden sm:inline"}),t._v(" In gratitude we will reward you.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full mb-6"},[e("img",{staticClass:"w-32",attrs:{src:"/images/community/beware.png",alt:"reward image"}})])}],!1,null,"6fe6f8ce",null);e.default=component.exports},486:function(t,e,n){"use strict";n(463)},487:function(t,e,n){var r=n(31)((function(i){return i[1]}));r.push([t.i,".page[data-v-4552b5fc]{position:relative;min-height:100vh;width:100%;--tw-bg-opacity:1;background-color:rgba(6, 1, 13, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}.page__background[data-v-4552b5fc]{position:absolute;z-index:0}@media(max-width:1279px){.page__background[data-v-4552b5fc]{min-height:50vh;display:flex}}.page__content[data-v-4552b5fc]{position:relative;z-index:10}",""]),r.locals={},t.exports=r},520:function(t,e,n){"use strict";n.r(e);var r=n(30),l=n(16),o=(n(39),n(2),n(38),n(42),n(5),n(45),n(171)),c=n(172),m=n(79),d=(n(37),{deserialize:function(input){return{id:input.id,title:input.attributes.name,url:input.attributes.socialUrl,summary:input.attributes.description,summaryIcon:input.attributes.summaryIcon,networkIcon:input.attributes.networkIcon}}}),f={asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,l,o,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$strapi,e.next=3,Promise.all([Object(c.a)(n,m.a.stats(),d)]);case 3:return l=e.sent,o=Object(r.a)(l,1),f=o[0],e.abrupt("return",{stats:f});case 7:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.metadata.title,meta:[{hid:"description",name:"description",content:this.metadata.description}]}},data:function(){var t=this.$store.state.pages.community;return{news:[],stats:[],metadata:(null==t?void 0:t.meta)||o.b}}},v=(n(486),n(11)),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",[n("div",{staticClass:"page"},[n("div",{staticClass:"page__content"},[n("div",{staticClass:"grid-plate sm:text-center sm:flex sm:flex-col sm:items-center pt-10 sm:pt-32 md:pt-52 mb-8 sm:mb-20"},[n("h1",{staticClass:"text-5xl leading-supertight md:text-6xl font-bold sm:max-w-md md:max-w-none mb-8"},[t._v("\n            Join the Neon Evolution")]),t._v(" "),n("h2",{staticClass:"text-base md:text-lg md:w-7/12 sm:max-w-lg md:max-w-none"},[t._v("\n            The Neon community is a home for developers, token holders, operators, and our friends and supporters\n            from all over the world.")])]),t._v(" "),n("NeonCommunity",{attrs:{list:t.stats}}),t._v(" "),n("NeonCommunityHack")],1),t._v(" "),n("div",{staticClass:"w-full bg-white_bg text-black"},[n("Subscriber",{staticClass:"pt-10"})],1)])])}),[],!1,null,"4552b5fc",null);e.default=component.exports;installComponents(component,{NeonCommunity:n(472).default,NeonCommunityHack:n(473).default})}}]);