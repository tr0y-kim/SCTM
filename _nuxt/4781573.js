(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{509:function(e,t,r){"use strict";r(11),r(14),r(20),r(21);var n=r(2),o=(r(5),r(31),r(13),r(32),r(62),r(492),r(54),r(493),r(494),r(495),r(496),r(497),r(498),r(499),r(500),r(501),r(502),r(503),r(504),r(505),r(63),r(47),r(12),r(81),r(487),r(1)),c=r(111),l=r(0);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=["sm","md","lg","xl"],h=y.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{}),v=y.reduce((function(e,t){return e["offset"+Object(l.u)(t)]={type:[String,Number],default:null},e}),{}),O=y.reduce((function(e,t){return e["order"+Object(l.u)(t)]={type:[String,Number],default:null},e}),{}),m={col:Object.keys(h),offset:Object.keys(v),order:Object.keys(O)};function j(e,t,r){var n=e;if(null!=r&&!1!==r){if(t){var o=t.replace(e,"");n+="-".concat(o)}return"col"!==e||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var S=new Map;t.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},h),{},{offset:{type:[String,Number],default:null}},v),{},{order:{type:[String,Number],default:null}},O),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var r=t.props,data=t.data,o=t.children,l=(t.parent,"");for(var f in r)l+=String(r[f]);var d=S.get(l);if(!d){var y,h;for(h in d=[],m)m[h].forEach((function(e){var t=r[e],n=j(h,e,t);n&&d.push(n)}));var v=d.some((function(e){return e.startsWith("col-")}));d.push((y={col:!v||!r.cols},Object(n.a)(y,"col-".concat(r.cols),r.cols),Object(n.a)(y,"offset-".concat(r.offset),r.offset),Object(n.a)(y,"order-".concat(r.order),r.order),Object(n.a)(y,"align-self-".concat(r.alignSelf),r.alignSelf),y)),S.set(l,d)}return e(r.tag,Object(c.a)(data,{class:d}),o)}})},517:function(e,t,r){var content=r(537);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(23).default)("e2d9e604",content,!0,{sourceMap:!1})},534:function(e,t,r){e.exports=r.p+"img/profile.076a77c.jpg"},535:function(e,t,r){"use strict";r.r(t),t.default='<section><h3>Hi 👋</h3>\n<ul>\n<li>ROKAF, Captain / Cyber Operations Command (19 ~ 22.6) / Defense Counterintelligence Command (22.6 ~)</li>\n<li>Korea University, Bachelor of Cyber Defense(CYDF), 2019 Graduating Top honors</li>\n<li>Ph.D. Student, School of Cybersecurity, Korea University</li>\n<li>Smart Contract <a href="https://github.com/TEAM-C4B/CVE-LIST">CVE</a> Reported CVE-2018-17111 (CVSS3.x 9.8)</li>\n<li><a href="https://www.kitribob.kr/trainee_walk/hall">KITRI BoB Top 10</a> Vulnerability Analysis Track</li>\n<li><a href="https://scholar.google.com/citations?user=b6WI4V4AAAAJ">Google Scholar</a> # of Citation 102 / i10-index 3 (2023.6.25.)</li>\n<li>SCIE mdpi Sensors, hindawi Mobile Information System, Security and Communication Networks</li>\n</ul>\n</section>\n'},536:function(e,t,r){"use strict";r(517)},537:function(e,t,r){var n=r(22)((function(i){return i[1]}));n.push([e.i,".profile-info[data-v-7e0c140e]{padding-left:15px}.full-page[data-v-7e0c140e]{align-items:center;display:flex;height:100%}",""]),n.locals={},e.exports=n},598:function(e,t,r){"use strict";r.r(t);var n=r(195),o=r(509),c=r(527),l=r(278),f=r(594),d={head:{title:"PROFILE"},data:function(){return{}}},y=(r(536),r(88)),component=Object(y.a)(d,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"full-page"},[t(c.a,[t(f.a,{attrs:{"no-gutters":"",align:"center",justify:"center"}},[t(o.a,{attrs:{align:"center",justify:"center"}},[t(f.a,{staticStyle:{"justify-content":"center"}},[t(n.a,{attrs:{size:"200"}},[t(l.a,{attrs:{src:r(534)}})],1)],1),e._v(" "),t(f.a,{staticStyle:{"justify-content":"center"}},[t("div",{staticClass:"profile-info"},[t("h3",[e._v("Kyongmin Kim")]),e._v(" "),t("h5",[e._v("Korea University")])])])],1),e._v(" "),t(o.a,[t("div",{staticClass:"markdown-body",domProps:{innerHTML:e._s(r(535).default)}})])],1)],1)],1)}),[],!1,null,"7e0c140e",null);t.default=component.exports}}]);