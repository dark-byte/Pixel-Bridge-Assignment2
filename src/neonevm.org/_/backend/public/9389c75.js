(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{444:function(t,e,r){"use strict";r(37);e.a={deserialize:function(input){return{url:input.attributes.url,name:input.attributes.name}}}},451:function(t,e,r){"use strict";e.a={data:function(){return{currentPage:1,pageSize:7}},methods:{setPage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.currentPage=t}}}},462:function(t,e,r){"use strict";var l=r(444);function n(t){return t<new Date}r(316),r(35),r(78),e.a={deserialize:function(input){var t,e,r=input.attributes.startDate?new Date(input.attributes.startDate):"",d=input.attributes.endDate?new Date(input.attributes.endDate):"",o="";return input.attributes.lumaUrl&&(t=input.attributes.lumaUrl,o=new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(t)?input.attributes.lumaUrl:"https://lu.ma/".concat(input.attributes.lumaUrl)),{id:input.id,title:input.attributes.title,list_insight:input.attributes.listDescription,path:input.attributes.route,eventUrl:o,preview:input.attributes.previewUrl?l.a.deserialize(input.attributes.previewUrl.data):void 0,list_place:input.attributes.listLocation,list_title:input.attributes.listTitle,list_date:input.attributes.listDate,start_date:r,end_date:d,insight:input.attributes.listDescription,content:input.attributes.content,place:input.attributes.location,isAllowRegistration:(e=r.setDate(r.getDate()+1),e>=new Date),isEventOver:n(d.setHours(23,59,59,998)),parsedStartDate:r.toLocaleDateString("en-US",{weekday:"short",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}),parsedEndDate:d.toLocaleDateString("en-US",{weekday:"short",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"})}}}},523:function(t,e,r){"use strict";r.r(e);var l=r(16),n=(r(39),r(451)),d=r(79),o=r(172),c=r(462),m={mixins:[n.a],asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$strapi,e.next=3,Object(o.a)(r,d.a.events("?populate=*&sort[0]=startDate:DESC"),c.a);case 3:return data=e.sent,e.abrupt("return",{data:data});case 5:case"end":return e.stop()}}),e)})))()},methods:{contentUrl:function(image){return this.$contentUrl(image.url)}}},v=r(11),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("PostListLayout",{attrs:{black:""}},[r("h1",{staticClass:"mt-6 md:mt-14 text-5xl mb-1 font-bold px-8 md:px-0"},[t._v("Events")]),t._v(" "),r("h2",{staticClass:"text-grey_fb text-2xl mb-12 px-8 md:px-0"},[t._v("Join Neon events all around the globe")]),t._v(" "),r("div",{staticClass:"flex flex-wrap md:-mx-3 px-5 md:px-0"},[t._l(t.data,(function(e,l){return[0===l?[r("nuxt-link",{key:e.id,staticClass:"w-full flex flex-col md:flex-row px-3 mb-10 md:mb-20",attrs:{to:"/events/"+e.path}},[r("div",{staticClass:"w-full md:w-2/3 pb-6 md:pb-0 md:pr-3"},[r("div",{staticClass:"inline-flex w-full rounded-lg overflow-hidden"},[e.preview?r("img",{staticClass:"w-full",attrs:{src:t.contentUrl(e.preview),alt:""}}):t._e()])]),t._v(" "),r("div",{staticClass:"w-full md:w-1/3 md:pl-3"},[r("div",{staticClass:"md:text-5xl md:leading-supertight sm:text-3xl text-2xl font-bold mb-5"},[t._v(t._s(e.list_title))]),t._v(" "),r("div",{staticClass:"text-grey_fb text-base sm:text-lg mb-4"},[t._v(t._s(e.list_insight))]),t._v(" "),r("div",{staticClass:"flex flex-col sm:flex-row md:flex-col"},[r("div",{staticClass:"text-green text-base md:text-lg uppercase font-bold sm:pr-4 md:pr-0"},[t._v(t._s(e.list_date))]),t._v(" "),r("div",[t._v(t._s(e.list_place))])])])])]:[r("nuxt-link",{key:e.id,staticClass:"flex flex-col w-full  md:w-1/3 px-3 mb-10 md:mb-20",attrs:{to:"/events/"+e.path}},[r("div",{staticClass:"inline-flex rounded-lg overflow-hidden mb-4"},[e.preview?r("img",{attrs:{src:t.contentUrl(e.preview),alt:""}}):t._e()]),t._v(" "),r("div",{staticClass:"text-xl font-bold mb-4"},[t._v(t._s(e.list_title))]),t._v(" "),r("div",{staticClass:"text-green uppercase"},[t._v(t._s(e.list_date))]),t._v(" "),r("div",[t._v(t._s(e.list_place))])])]]}))],2)])}),[],!1,null,null,null);e.default=component.exports}}]);