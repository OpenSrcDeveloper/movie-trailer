(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-movie-movie"],{"26f7":function(t,e,a){"use strict";var i=a("be7c"),r=a.n(i);r.a},3033:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".player[data-v-4dac37b3]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-color:#000}.movie[data-v-4dac37b3]{width:100%;height:%?440?%}\r\n\r\n/* 影片基本信息 start */.movie-info[data-v-4dac37b3]{padding:%?40?% %?20?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;background-color:#f7f4f9}.cover[data-v-4dac37b3]{width:%?280?%;height:%?380?%}.movie-desc[data-v-4dac37b3]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-left:%?30?%;width:%?400?%}.title[data-v-4dac37b3]{font-size:30px}.basic-info[data-v-4dac37b3]{color:#a9a9a9;font-size:13px;line-height:%?36?%;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}\r\n\r\n/* 影片基本信息 end */\r\n\r\n/* 评分块 start */.score-block[data-v-4dac37b3]{background-color:#fff;margin-top:%?20?%;width:%?360?%;height:%?90?%;padding:%?20?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;\r\n\t/* 追加阴影效果 */-webkit-box-shadow:3px 2px 10px #dedede;box-shadow:3px 2px 10px #dedede}.score-words[data-v-4dac37b3]{font-size:12px;color:grey}.movie-score[data-v-4dac37b3]{font-size:26px;font-weight:700;margin-left:%?8?%;color:#feab2a;line-height:%?60?%}.prise-counts[data-v-4dac37b3]{font-size:12px;color:grey;line-height:%?44?%}\r\n\r\n/* 评分块 end */\r\n\r\n/* 剧情介绍 start */.plots-block[data-v-4dac37b3]{background-color:#f7f4f9;padding:%?20?% %?40?%}.plots-title[data-v-4dac37b3]{color:#a9a9a9;font-size:14px}.plots-desc[data-v-4dac37b3]{margin-top:%?10?%;font-size:16px}\r\n\r\n/* 剧情介绍 end */\r\n\r\n/* 剧照 start */.scroll-block[data-v-4dac37b3]{background-color:#f7f4f9;padding:%?20?% %?40?%\r\n\t/* display: flex;\r\n\tflex-direction: column; */}.scroll-list[data-v-4dac37b3]{width:100%;white-space:nowrap;margin-top:%?20?%}.plot-image[data-v-4dac37b3]{width:%?220?%;height:%?320?%;margin-right:%?10?%}\r\n\r\n/* 剧照 end */\r\n\r\n/* 演职人员 end */.single-actor[data-v-4dac37b3]{width:%?170?%;height:%?240?%;margin-right:%?10?%}.actor-wapper[data-v-4dac37b3]{display:inline-block}.actor-name[data-v-4dac37b3]{width:%?170?%;text-align:center;font-size:15px;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}.actor-role[data-v-4dac37b3]{width:%?170?%;text-align:center;font-size:13px;color:#a9a9a9;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}\r\n\r\n/* 演职人员 end */",""])},"68d1":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"page"},[a("v-uni-view",{staticClass:"player"},[a("v-uni-video",{staticClass:"movie",attrs:{id:"myTrailer",src:t.trailerInfo.trailer,poster:t.trailerInfo.poster,controls:""}})],1),a("v-uni-view",{staticClass:"movie-info"},[a("v-uni-navigator",{attrs:{url:"../cover/cover?cover="+t.trailerInfo.cover}},[a("v-uni-image",{staticClass:"cover",attrs:{src:t.trailerInfo.cover}})],1),a("v-uni-view",{staticClass:"movie-desc"},[a("v-uni-view",{staticClass:"title"},[t._v(t._s(t.trailerInfo.name))]),a("v-uni-view",{staticClass:"basic-info"},[t._v(t._s(t.trailerInfo.basicInfo))]),a("v-uni-view",{staticClass:"basic-info"},[t._v(t._s(t.trailerInfo.originalName))]),a("v-uni-view",{staticClass:"basic-info"},[t._v(t._s(t.trailerInfo.totalTime))]),a("v-uni-view",{staticClass:"basic-info"},[t._v(t._s(t.trailerInfo.releaseDate))]),a("v-uni-view",{staticClass:"score-block"},[a("v-uni-view",{staticClass:"big-score"},[a("v-uni-view",{staticClass:"score-words"},[t._v("综合评分：")]),a("v-uni-view",{staticClass:"movie-score"},[t._v(t._s(t.trailerInfo.score))])],1),a("v-uni-view",{staticClass:"score-stars"},[t.trailerInfo.score>=0?[a("trailerStars",{attrs:{innerScore:t.trailerInfo.score,showNum:"0"}})]:t._e(),a("v-uni-view",{staticClass:"prise-counts"},[t._v(t._s(t.trailerInfo.prisedCounts)+"  人点赞")])],2)],1)],1)],1),a("v-uni-view",{staticClass:"line-wapper"},[a("v-uni-view",{staticClass:"line"})],1),a("v-uni-view",{staticClass:"plots-block"},[a("v-uni-view",{staticClass:"plots-title"},[t._v("剧情介绍")]),a("v-uni-view",{staticClass:"plots-desc"},[t._v(t._s(t.trailerInfo.plotDesc))])],1),a("v-uni-view",{staticClass:"scroll-block"},[a("v-uni-view",{staticClass:"plots-title"},[t._v("演职人员")]),a("v-uni-scroll-view",{staticClass:"scroll-list",attrs:{"scroll-x":""}},[t._l(t.directorArray,function(e,i){return a("v-uni-view",{staticClass:"actor-wapper"},[a("v-uni-image",{staticClass:"single-actor",attrs:{src:e.photo,mode:"aspectFill","data-staffIndex":i},on:{click:function(e){e=t.$handleEvent(e),t.lookStaffs(e)}}}),a("v-uni-view",{staticClass:"actor-name"},[t._v(t._s(e.name))]),a("v-uni-view",{staticClass:"actor-role"},[t._v(t._s(e.actName))])],1)}),t._l(t.actorArray,function(e,i){return a("v-uni-view",{staticClass:"actor-wapper"},[a("v-uni-image",{staticClass:"single-actor",attrs:{src:e.photo,mode:"aspectFill","data-staffIndex":i+t.directorArray.length},on:{click:function(e){e=t.$handleEvent(e),t.lookStaffs(e)}}}),a("v-uni-view",{staticClass:"actor-name"},[t._v(t._s(e.name))]),a("v-uni-view",{staticClass:"actor-role"},[t._v(t._s(e.actName))])],1)})],2)],1),a("v-uni-view",{staticClass:"scroll-block"},[a("v-uni-view",{staticClass:"plots-title"},[t._v("剧照")]),a("v-uni-scroll-view",{staticClass:"scroll-list",attrs:{"scroll-x":""}},t._l(t.plotPicsArray,function(e,i){return a("v-uni-image",{staticClass:"plot-image",attrs:{src:e,mode:"aspectFill","data-imgIndex":i},on:{click:function(e){e=t.$handleEvent(e),t.lookMe(e)}}})}))],1)],1)},r=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return r})},"80ae":function(t,e,a){"use strict";a.r(e);var i=a("68d1"),r=a("d42d");for(var o in r)"default"!==o&&function(t){a.d(e,t,function(){return r[t]})}(o);a("26f7");var s=a("2877"),n=Object(s["a"])(r["default"],i["a"],i["b"],!1,null,"4dac37b3",null);e["default"]=n.exports},8656:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"movie-score-wapper"},[t._l(t.yelloScore,function(t){return a("v-uni-image",{staticClass:"star-ico",attrs:{src:"../../static/icos/star-yellow.png"}})}),t._l(t.grayScore,function(t){return a("v-uni-image",{staticClass:"star-ico",attrs:{src:"../../static/icos/star-gray.png"}})}),1==t.showNum?a("v-uni-view",{staticClass:"movie-score"},[t._v(t._s(t.innerScore))]):t._e()],2)},r=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return r})},9787:function(t,e,a){var i=a("f4e3");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=a("4f06").default;r("0dd7db5a",i,!0,{sourceMap:!1,shadowMode:!1})},b6bc:function(t,e,a){"use strict";a.r(e);var i=a("8656"),r=a("e8f1");for(var o in r)"default"!==o&&function(t){a.d(e,t,function(){return r[t]})}(o);a("f4a2");var s=a("2877"),n=Object(s["a"])(r["default"],i["a"],i["b"],!1,null,"1e70a2aa",null);e["default"]=n.exports},be7c:function(t,e,a){var i=a("3033");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=a("4f06").default;r("e24406be",i,!0,{sourceMap:!1,shadowMode:!1})},d42d:function(t,e,a){"use strict";a.r(e);var i=a("d5a7"),r=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=r.a},d5a7:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(a("b6bc"));function r(t){return t&&t.__esModule?t:{default:t}}var o={data:function(){return{trailerInfo:{},plotPicsArray:[],directorArray:[],actorArray:[]}},onReady:function(){this.videoContext=uni.createVideoContext("myTrailer")},onHide:function(){this.videoContext.pause()},onShow:function(){},onLoad:function(t){var e=this,a=t.trailerId;uni.setNavigationBarColor({frontColor:"#ffffff",backgroundColor:"#000000"});var i=e.serverUrl;uni.request({url:i+"/search/trailer/"+a,method:"POST",success:function(t){if(200==t.data.status){var a=t.data.data;e.trailerInfo=a;var i=JSON.parse(a.plotPics);e.plotPicsArray=i}}}),uni.request({url:i+"/search/staff/"+a+"/1",method:"POST",success:function(t){200==t.data.status&&(e.directorArray=t.data.data)}}),uni.request({url:i+"/search/staff/"+a+"/2",method:"POST",success:function(t){200==t.data.status&&(e.actorArray=t.data.data)}})},onShareAppMessage:function(t){var e=this;return{title:e.trailerInfo.name,path:"/pages/movie/movie?trailerId="+e.trailerInfo.id}},onNavigationBarButtonTap:function(t){var e=t.index,a=this,i=a.trailerInfo,r=i.id,o=i.name,s=i.cover;i.poster;0==e&&uni.share({provider:"weixin",scene:"WXSenceTimeline",type:0,href:"http://www.imovietrailer.com/#/pages/movie/movie?trailerId="+r,title:"NEXT超英预告：《"+o+"》",summary:"NEXT超英预告：《"+o+"》",imageUrl:s,success:function(t){console.log("success:"+JSON.stringify(t))}})},methods:{lookMe:function(t){var e=this,a=t.currentTarget.dataset.imgindex;uni.previewImage({current:e.plotPicsArray[a],urls:e.plotPicsArray})},lookStaffs:function(t){var e=this,a=t.currentTarget.dataset.staffindex,i=e.directorArray,r=e.actorArray,o=[];o=o.concat(i).concat(r);for(var s=[],n=0;n<o.length;n++){var c=o[n].photo;s.push(c)}uni.previewImage({current:s[a],urls:s})}},components:{trailerStars:i.default}};e.default=o},e7ba:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"trailerStars",data:function(){return{yelloScore:0,grayScore:5}},props:{innerScore:0,showNum:0},created:function(){console.log("this.innerScore="+this.innerScore);var t=0;null!=this.innerScore&&void 0!=this.innerScore&&""!=this.innerScore&&(t=this.innerScore);var e=parseInt(t/2),a=5-e;this.yelloScore=e,this.grayScore=a}};e.default=i},e8f1:function(t,e,a){"use strict";a.r(e);var i=a("e7ba"),r=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=r.a},f4a2:function(t,e,a){"use strict";var i=a("9787"),r=a.n(i);r.a},f4e3:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".movie-score-wapper[data-v-1e70a2aa]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.star-ico[data-v-1e70a2aa]{width:%?20?%;height:%?20?%;margin-top:%?6?%}.movie-score[data-v-1e70a2aa]{font-size:12px;color:grey;margin-left:%?8?%}",""])}}]);