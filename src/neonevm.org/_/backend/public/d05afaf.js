(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{468:function(t,e,n){var content=n(513);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("22e0066e",content,!0,{sourceMap:!1})},512:function(t,e,n){"use strict";n(468)},513:function(t,e,n){var r=n(31)((function(i){return i[1]}));r.push([t.i,".grid-plate{width:100%;padding-left:2rem;padding-right:2rem}@media (min-width: 1280px){.grid-plate{margin-left:auto;margin-right:auto}.grid-plate{max-width:1040px}.grid-plate{padding-left:0px;padding-right:0px}}@media(min-width:1279px){.md\\:grid-plate{margin-left:auto;margin-right:auto}.md\\:grid-plate{width:100%}.md\\:grid-plate{max-width:1040px}}.grid-col{padding-left:0.5rem;padding-right:0.5rem}@media (min-width: 744px){.grid-col{padding-left:0.75rem;padding-right:0.75rem}}@media (max-width: 743px){.sm-fix\\:grid-col{padding-left:0.5rem;padding-right:0.5rem}}@media (max-width: 1279px){.sm-fix\\:grid-col{padding-left:0.75rem;padding-right:0.75rem}}.content h1, .content h2, .content h3, .content h4, .content h5, .content h6{font-weight:700}.content h1{font-size:3.875em}.content h2{font-size:2.75rem}.content h3{font-size:2rem}.content h4{font-size:1.875rem;line-height:2.25rem}.content h5{font-size:1.5rem;line-height:2rem}.content h6{font-size:1.25rem;line-height:1.75rem}.content a{color:#c121de}.markdown-content h2,.markdown-content h3{font-weight:700;padding-bottom:15px}.markdown-content p{padding:0 0 15px}.markdown-content ul{padding:0 0 15px 15px}.markdown-content ul li{list-style:inside}.markdown-content hr{padding-bottom:25px}.markdown-content table{border:.5px solid #979aac;border-collapse:collapse;margin-bottom:15px}.markdown-content table td,.markdown-content table th{border:1px solid #979aac;padding:15px;vertical-align:top}.markdown-content table th{text-align:center;min-width:130px}.markdown-content a{color:#df42ab}.markdown-content a:hover{color:#c121de;cursor:pointer}",""]),r.locals={},t.exports=r},527:function(t,e,n){"use strict";n.r(e);var r=n(16),o=(n(39),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,o=t.error,e.next=3,n(r.slug||"index").fetch().catch((function(t){o({statusCode:404,message:"Page not found"})}));case 3:return d=e.sent,e.abrupt("return",{page:d});case 5:case"end":return e.stop()}}),e)})))()}}),d=(n(512),n(11)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",[n("div",{staticClass:"page"},[n("div",{staticClass:"w-full bg-black_bg text-black"},[n("div",{staticClass:"page__content"},[n("div",{staticClass:"w-full grid-plate text-center md:flex md:flex-col sm:items-center pt-8 sm:pt-20 md:pt-24 pb-10"},[n("h1",{staticClass:"text-5xl leading-supertight text-white md:text-6xl sm:max-w-lg md:max-w-4xl sm:mx-auto font-bold mb-8 sm:mb-4 md:mb-8 pt-8 sm:pt-0"},[t._v("\n            "+t._s(t.page.title)+"\n          ")])])])]),t._v(" "),n("div",{staticClass:"w-full bg-white_bg text-black"},[n("div",{staticClass:"page__content"},[n("div",{staticClass:"px-8 markdown-content"},[n("nuxt-content",{attrs:{document:t.page}})],1)])])])])}),[],!1,null,null,null);e.default=component.exports}}]);