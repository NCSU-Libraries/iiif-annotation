(function(t){function e(e){for(var n,s,r=e[0],l=e[1],u=e[2],p=0,d=[];p<r.length;p++)s=r[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,r=1;r<i.length;r++){var l=i[r];0!==o[l]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=i[0]))}return t}var n={},o={app:0},a=[];function s(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=n,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/iiif-annotation/tag-builder/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var c=l;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("64a9"),o=i.n(n);o.a},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("2b0e"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("tagbuilder")],1)},a=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"form"},[t.settings.fullpage&&t.fullpage?i("button",{staticClass:"buttons closebutton",on:{click:t.closeFullpage}},[t._v("Close "),i("i",{staticClass:"fa fa-times"})]):t._e(),i("a",{attrs:{href:"/iiif-annotation/tag-builder/#/?url=https%3A%2F%2Fdnoneill.github.io%2Fannotate%2Fannotations%2Ffullbayeux-list.json&viewtype=iiif-storyboard&listtype=annotationlist&settings=%7B%22tagscolor%22%3A%5B%7B%22tagvalue%22%3A%22%22,%22color%22%3A%22%22%7D%5D,%22additionalinfo%22%3A%22%22,%22fit%22%3A%22horizontal%22%7D&props=%7B%22layers%22%3A%5B%7B%22label%22%3A%22%22,%22xywh%22%3A%22%22,%22image%22%3A%22%22,%22section%22%3A%22%22,%22rotation%22%3A%22%22%7D%5D,%22images%22%3A%5B%5D%7D"}},[t._v("\nBayeux Example")]),i("br"),i("a",{attrs:{href:"/iiif-annotation/tag-builder/#/?url=https://dnoneill.github.io/annotate/annotations/wh234bz9013-0001-list.json&viewtype=iiif-storyboard&listtype=annotationlist"}},[t._v("\nExample with tags")]),i("br"),i("a",{attrs:{href:"/iiif-annotation/tag-builder/#/?url=https://dnoneill.github.io/annotate/annotations/ba-obj-722-conservation-list.json&viewtype=iiif-storyboard&listtype=annotationlist"}},[t._v("\nExample with layers")]),i("br"),i("a",{attrs:{href:"/iiif-annotation/tag-builder/#/?url=https%3A%2F%2Fdnoneill.github.io%2Fannotate%2Fannotations%2F131424-list.json&viewtype=iiif-storyboard&listtype=annotationlist&settings=%7B%22tagscolor%22%3A%5B%7B%22tagvalue%22%3A%22%22,%22color%22%3A%22%23add8e6%22%7D%5D,%22additionalinfo%22%3A%22%22,%22overlaycolor%22%3A%22%23add8e6%22,%22activecolor%22%3A%22%2390ee90%22%7D&props=%7B%22layers%22%3A%5B%7B%22label%22%3A%22%3Ca%20href%3D%5C%5C%27https%3A%2F%2Fwww.wikidata.org%2Fwiki%2FQ4792194%5C%5C%27%3EView%20from%20Arles%3C%2Fa%3E%22,%22xywh%22%3A%22200,200,4750,6513%22,%22image%22%3A%22https%3A%2F%2Ftools.wmflabs.org%2Fzoomviewer%2Fiipsrv.fcgi%2F%3Fiiif%3Dcache%2F8937e1777945b722457fac2cde0cf61b.tif%2Finfo.json%22,%22section%22%3A%22%22,%22rotation%22%3A%22%22%7D%5D,%22images%22%3A%5B%5D%7D"}},[t._v("\nExample with custom layers")]),i("br"),i("a",{attrs:{href:"/iiif-annotation/tag-builder/#/?url=https%3A%2F%2Fncsu-libraries.github.io%2Fiiif-annotation%2Fwebannotations%2Fmc00084-001-te0159-000-001-0001-list.json%3Bhttps%3A%2F%2Fncsu-libraries.github.io%2Fiiif-annotation%2Fwebannotations%2Fua023-015-003-bx0002-004-026-list.json&viewtype=iiif-multistoryboard&listtype=annotationlists"}},[t._v("\nMultistoryboard Example")]),i("br"),i("a",{attrs:{href:'/iiif-annotation/tag-builder/#/?url=https%3A%2F%2Fdnoneill.github.io%2Fannotate%2Fannotations%2F131424-list.json%3B&viewtype=iiif-multistoryboard&listtype=annotationlists&settings={"tagscolor"%3A[{"tagvalue"%3A"","color"%3A"%23add8e6"}],"additionalinfo"%3A"","overlaycolor"%3A"%23add8e6","activecolor"%3A"%2390ee90"}&props={"layers"%3A[],"images"%3A["https%3A%2F%2Ftools.wmflabs.org%2Fzoomviewer%2Fiipsrv.fcgi%2F%3Fiiif%3Dcache%2F8937e1777945b722457fac2cde0cf61b.tif%2Finfo.json"]}'}},[t._v("\nMultistoryboard Example with custom image")]),i("br"),i("a",{attrs:{href:"/iiif-annotation/tag-builder/#/?url=https%3A%2F%2Fdnoneill.github.io%2Fannotate%2Franges%2Frange.json&viewtype=iiif-rangestoryboard&listtype=rangeurl"}},[t._v("\nExample with range. Storyboards have layers.")]),i("br"),i("div",{staticClass:"requiredfields"},[t._l(t.urllength,(function(e,n){return i("span",{key:n+"_urls"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.url[n],expression:"url[index]"}],attrs:{value:"",placeholder:"Annotation URL ",id:n+"_link"},domProps:{value:t.url[n]},on:{change:function(e){return t.buildTags()},input:function(e){e.target.composing||t.$set(t.url,n,e.target.value)}}}),0!=n?i("button",{on:{click:function(e){return t.deleteField("url",n,"urllength")}}},[t._v("\n      Delete Annotation URL\n    ")]):t._e()])})),"iiif-multistoryboard"==t.viewtype?i("span",[i("button",{on:{click:function(e){t.urllength+=1}}},[t._v("\n      Add Annotation URL\n    ")])]):t._e(),i("input",{directives:[{name:"model",rawName:"v-model",value:t.props["manifesturl"],expression:"props['manifesturl']"}],attrs:{placeholder:"Manifest URL (OPTIONAL)"},domProps:{value:t.props["manifesturl"]},on:{change:function(e){return t.buildTags()},input:function(e){e.target.composing||t.$set(t.props,"manifesturl",e.target.value)}}}),i("select",{directives:[{name:"model",rawName:"v-model",value:t.viewtype,expression:"viewtype"}],on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.viewtype=e.target.multiple?i:i[0]},function(e){return t.updateListType()}]}},[i("option",{attrs:{disabled:"",value:""}},[t._v("Please select one")]),i("option",{attrs:{value:"iiif-storyboard"}},[t._v("Storyboard")]),i("option",{attrs:{value:"iiif-annotation"}},[t._v("Image Viewer")]),i("option",{attrs:{value:"iiif-multistoryboard"}},[t._v("Multistoryboard Viewer")]),i("option",{attrs:{value:"iiif-rangestoryboard"}},[t._v("Range Storyboard")])]),this.listoptions.length>0?i("select",{directives:[{name:"model",rawName:"v-model",value:t.listtype,expression:"listtype"}],on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.listtype=e.target.multiple?i:i[0]},function(e){return t.buildTags()}]}},t._l(t.listoptions,(function(e){return i("option",{key:e.value,domProps:{value:e.value}},[t._v("\n      "+t._s(e.text)+"\n    ")])})),0):t._e()],2),t.viewtype?i("button",{staticClass:"buttons clearbutton",on:{click:t.updateListType}},[t._v("Clear all settings")]):t._e(),t.viewtype?i("h2",[t._v("Settings")]):t._e(),t.viewtype?i("div",{class:t.viewtype,attrs:{id:"settings"}},[t.booleanoptions.length>0?i("div",{staticClass:"groupings"},[i("h2",[t._v("Boolean Settings")]),t._l(t.booleanoptions,(function(e){return i("div",{key:e},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.settings[e],expression:"settings[option]"}],attrs:{type:"checkbox",id:"option"},domProps:{value:e,checked:Array.isArray(t.settings[e])?t._i(t.settings[e],e)>-1:t.settings[e]},on:{change:[function(i){var n=t.settings[e],o=i.target,a=!!o.checked;if(Array.isArray(n)){var s=e,r=t._i(n,s);o.checked?r<0&&t.$set(t.settings,e,n.concat([s])):r>-1&&t.$set(t.settings,e,n.slice(0,r).concat(n.slice(r+1)))}else t.$set(t.settings,e,a)},function(e){return t.buildTags()}]}}),i("label",{attrs:{for:e}},[t._v(t._s(e))])])}))],2):t._e(),i("div",{staticClass:"groupings"},[i("h2",[t._v("Free Text fields")]),t._l(t.textsettings,(function(e){return i("div",{key:e},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.settings[e],expression:"settings[setting]"}],attrs:{placeholder:e},domProps:{value:t.settings[e]},on:{change:function(e){return t.buildTags()},input:function(i){i.target.composing||t.$set(t.settings,e,i.target.value)}}})])})),t.viewtype&&"iiif-annotation"!=t.viewtype?i("input",{directives:[{name:"model",rawName:"v-model",value:t.props["ws"],expression:"props['ws']"}],attrs:{placeholder:"websocket"},domProps:{value:t.props["ws"]},on:{change:function(e){return t.buildTags()},input:function(e){e.target.composing||t.$set(t.props,"ws",e.target.value)}}}):t._e(),t.viewtype&&"iiif-annotation"!=t.viewtype?i("span",{attrs:{id:"additionalinfo"}},t._l(t.additionalinfo,(function(e,n){return i("span",{key:n+"_additionalinfo"},[i("h3",[t._v("Additional Info")]),t._l(e,(function(e,o){return i("input",{directives:[{name:"model",rawName:"v-model",value:t.additionalinfo[n][o],expression:"additionalinfo[index][key]"}],key:o,attrs:{placeholder:"Additional Info "+o},domProps:{value:t.additionalinfo[n][o]},on:{change:function(e){return t.buildTags()},input:function(e){e.target.composing||t.$set(t.additionalinfo[n],o,e.target.value)}}})}))],2)})),0):t._e(),t.viewtype&&"iiif-storyboard"==t.viewtype?i("span",{attrs:{id:"additionalinfo"}},[t._l(t.props.layers,(function(e,n){return i("div",{key:n+"_layers"},[i("h4",[t._v("Layer "+t._s(n+1))]),t._l(e,(function(e,o){return i("input",{directives:[{name:"model",rawName:"v-model",value:t.props.layers[n][o],expression:"props.layers[index][key]"}],key:o,attrs:{placeholder:"Layer "+(n+1)+" "+o},domProps:{value:t.props.layers[n][o]},on:{change:function(e){return t.buildTags()},input:function(e){e.target.composing||t.$set(t.props.layers[n],o,e.target.value)}}})})),i("button",{on:{click:function(e){return t.deleteField("props",n,"layers")}}},[t._v("\n        Delete Layer\n      ")])],2)})),i("button",{on:{click:function(e){return t.addListField("props","layers",{label:"",xywh:"",image:"",section:"",rotation:""})}}},[t._v("\n     Add Additional Layer\n    ")])],2):t._e(),t.viewtype&&"iiif-multistoryboard"==t.viewtype?i("span",{attrs:{id:"additionalinfo"}},[t._l(t.props.images,(function(e,n){return i("div",{key:n+"_images"},[i("h4",[t._v("Image "+t._s(n+1))]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.props.images[n],expression:"props.images[index]"}],attrs:{placeholder:"Image "+(n+1)+" "},domProps:{value:t.props.images[n]},on:{change:function(e){return t.buildTags()},input:function(e){e.target.composing||t.$set(t.props.images,n,e.target.value)}}}),i("button",{on:{click:function(e){return t.deleteField("props",n,"images")}}},[t._v("\n        Delete Image\n      ")])])})),i("button",{on:{click:function(e){return t.addListField("props","images","")}}},[t._v("\n     Add Additional Image\n    ")])],2):t._e()],2),t.viewtype&&"iiif-annotation"!=t.viewtype?i("div",{staticClass:"groupings"},[i("h2",[t._v("CSS")]),t._l(t.cssfields,(function(e,n){return i("div",{key:n+"_css"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.css,expression:"css"}],attrs:{type:"checkbox",id:"style.tag"},domProps:{value:e.tag,checked:Array.isArray(t.css)?t._i(t.css,e.tag)>-1:t.css},on:{change:[function(i){var n=t.css,o=i.target,a=!!o.checked;if(Array.isArray(n)){var s=e.tag,r=t._i(n,s);o.checked?r<0&&(t.css=n.concat([s])):r>-1&&(t.css=n.slice(0,r).concat(n.slice(r+1)))}else t.css=a},function(e){return t.buildTags()}]}}),i("label",{attrs:{for:e.tag}},[t._v("Hide "),i("span",{domProps:{innerHTML:t._s(e.icon)}})])])}))],2):t._e(),t.viewtype&&"iiif-annotation"!=t.viewtype?i("div",{staticClass:"groupings"},[i("h2",[t._v("Dropdowns")]),i("p",[t._v("Choose from one of the options")]),t._l(t.dropdowns,(function(e){return i("div",{key:e.field},[t._v("\n    "+t._s(e.field)+": "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.settings[e.field],expression:"settings[dropdown.field]"}],on:{change:[function(i){var n=Array.prototype.filter.call(i.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.settings,e.field,i.target.multiple?n:n[0])},function(e){return t.buildTags()}]}},[i("option",{attrs:{value:""}}),t._l(e.options,(function(e){return i("option",{key:e},[t._v(t._s(e))])}))],2)])}))],2):t._e(),t.viewtype&&"iiif-annotation"!=t.viewtype?i("div",{staticClass:"groupings"},[i("h2",[t._v("Color Choosers")]),t._l(t.colorpickers,(function(e){return i("div",{key:e.field},[i("span",{staticClass:"headerblock"},[t._v(t._s(e.field))]),t.viewtype&&"iiif-annotation"!=t.viewtype?i("color-picker",{attrs:{startColor:e.default,width:100,height:100},on:{"color-change":function(e){return t.buildTags()}},model:{value:t.settings[e.field],callback:function(i){t.$set(t.settings,e.field,i)},expression:"settings[colorfield.field]"}}):t._e()],1)}))],2):t._e(),i("div",{staticClass:"groupings"},[i("h2",[t._v("Tag Color Coding")]),t._l(t.settings.tagscolor,(function(e,n){return i("div",{key:n+"_tagscolor"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.tagscolor[n].tagvalue,expression:"settings.tagscolor[index].tagvalue"}],attrs:{placeholder:"tag field"},domProps:{value:t.settings.tagscolor[n].tagvalue},on:{change:function(e){return t.buildTags()},input:function(e){e.target.composing||t.$set(t.settings.tagscolor[n],"tagvalue",e.target.value)}}}),i("color-picker",{attrs:{width:100,height:100,startColor:t.colorpickers[0].default},on:{"color-change":function(e){return t.buildTags()}},model:{value:t.settings.tagscolor[n].color,callback:function(e){t.$set(t.settings.tagscolor[n],"color",e)},expression:"settings.tagscolor[index].color"}}),i("button",{staticStyle:{"vertical-align":"top"},on:{click:function(e){return t.deleteField("settings",n,"tagscolor")}}},[t._v("\n     Delete Tag\n    ")])],1)})),i("button",{on:{click:function(e){return t.addListField("settings","tagscolor",{tagvalue:"",color:""})}}},[t._v("\n   New Tag\n  ")])],2)]):t._e(),t.tag?i("div",{staticClass:"tagfield"},[i("div",[t._v(t._s(t.tag))]),i("button",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.tag,expression:"tag"}]},[t._v("Copy Tag")])]):t._e(),i("span",{domProps:{innerHTML:t._s(t.tag)}})])},r=[],l=(i("a481"),i("ac6a"),i("456d"),i("28a5"),i("1e8a")),u={name:"tagbuilder",components:{ColorPicker:l["a"]},data:function(){return{url:[],manifesturl:"",viewtype:"",props:{},listoptions:[],listtype:"",settings:{tagscolor:[{tagvalue:"",color:""}]},tag:"",booleanoptions:[],textsettings:[],dropdowns:[],overlay:"",colorpickers:[{field:"overlaycolor",default:"#add8e6"},{field:"activecolor",default:"#90ee90"}],additionalinfo:[{title:"",content:""}],cssfields:[],css:[],urllength:1,fullpage:!0}},created:function(){},watch:{"$route.query":{handler:function(t,e){JSON.stringify(t)!=JSON.stringify(e)&&this.setParams()},immediate:!0}},methods:{deleteField:function(t,e,i){var n=!this[i]||(this[i]-=1);n?this[t][i].splice(e):this[t].splice(e),this.buildTags()},setParams:function(){var t=this.$route.query;this.listtype=t.listtype?t.listtype:"",this.url=t.url?t.url.split(";"):[],this.urllength=this.url.length>1?this.url.length:1,this.viewtype=t.viewtype?t.viewtype:"",this.setDefaults(),t.settings&&(this.settings=JSON.parse(t.settings)),t.props&&(this.props=JSON.parse(t.props)),this.buildTags()},addListField:function(t,e,i){this[t][e].push(i),this.buildTags()},setDefaults:function(){this.tag="","iiif-annotation"!=this.viewtype&&"iiif-storyboard"!=this.viewtype||(this.listoptions=[{value:"annotationlist",text:"Annotation List",selected:!0},{value:"annotationurl",text:"Single Annotation"}]),"iiif-multistoryboard"==this.viewtype&&(this.listoptions=[{value:"annotationlists",text:"Annotation List",selected:!0},{value:"annotationurls",text:"Single Annotation"}]),"iiif-rangestoryboard"==this.viewtype&&(this.listoptions=[{value:"rangeurl",text:"Range URL",selected:!0}]),this.booleanoptions="iiif-annotation"==this.viewtype?["hide_viewlarger","hide_fullobject","hide_tags","image_only","text_only","hide_tagcount"]:["autorun_onload","hide_toolbar","fullpage","hide_annocontrols","toggleoverlay","hide_tags","controller","togglelayers","hide_tagcount"],this.textsettings="iiif-annotation"==this.viewtype?["height","width"]:["autorun_interval","mapmarker","tts","truncate_length","customid","imagecrop","title"],this.dropdowns="iiif-annotation"==this.viewtype?[]:[{field:"fit",options:["fill","horizontal"]},{field:"panorzoom",options:["pan"]},{field:"textposition",options:["top","bottom","right","left"]},{field:"startenddisplay",options:["tags","info"]},{field:"annoview",options:["sidebyside","collapse"]}],this.props.layers="iiif-storyboard"==this.viewtype?[{label:"",xywh:"",image:"",section:"",rotation:""}]:[],this.props.images="iiif-multistoryboard"==this.viewtype?[""]:[],this.cssfields="iiif-annotation"==this.viewtype?[]:[{tag:"#header_toolbar",icon:"Toolbar"},{tag:"#autoRunButton",icon:'<i class="fas fa-magic"></i>'},{tag:"#infoButton",icon:'<i class="fas fa-info-circle"></i>'},{tag:"#overlayButton",icon:'<i class="fas fa-toggle-on"></i>'},{tag:"#zoomInButton",icon:'<i class="fas fa-search-plus"></i>'},{tag:"#zoomOutButton",icon:'<i class="fas fa-search-minus"></i>'},{tag:"#homeZoomButton",icon:'<i class="fas fa-home"></i>'},{tag:"#previousButton",icon:'<i class="fa fa-arrow-left"></i>'},{tag:"#nextButton",icon:'<i class="fa fa-arrow-right"></i>'},{tag:"#fullScreenButton",icon:'<i class="fas fa-expand"></i>'},{tag:"#layerButton",icon:'<i class="fas fa-layer-group"></i>'},{tag:".annotation",icon:"Annotation Box"}]},updateListType:function(){this.css=[],this.props={},this.settings={tagscolor:[{tagvalue:"",color:""}]},this.additionalinfo=[{title:"",content:""}],this.url=this.url.length>1&&"iiif-multistoryboard"==this.viewtype?this.url:[this.url[0]],!(this.url.length>1&&"iiif-multistoryboard"==this.viewtype)||this.url.length,this.setDefaults(),this.listtype=this.listoptions[0]["value"],this.buildTags()},getsettings:function(){for(var t=this,e=this.colorpickers.map((function(t){return t.default})),i=Object.keys(this.settings).filter((function(i){return""!=t.settings[i]&&-1==e.indexOf(t.settings[i])})),n="",o=0;o<i.length;o++){var a=i[o],s=this.settings[a];if("tagscolor"===a){for(var r={},l=0;l<s.length;l++){var u=s[l];""!=u["tagvalue"]&&(r[u["tagvalue"].trim()]=u["color"])}Object.keys(r).length>0&&(n+="".concat(a,": ").concat(JSON.stringify(r),";"))}else n+="".concat(a,": ").concat(s,";");"fullpage"==a&&(this.fullpage=!0)}return n},closeFullpage:function(){this.fullpage=!1,document.getElementsByTagName(this.viewtype)[0].childNodes[0].setAttribute("class","storyboard_viewer")},getAdditionalInfo:function(){for(var t="",e=this.url?this.url[0].split("/").slice(-1)[0].replace(".json",""):"",i="",n=0;n<this.additionalinfo.length;n++){var o=this.additionalinfo[n],a="".concat(e,"_").concat(n,"_additionalinfo");o["content"]&&o["title"]&&(i+="".concat(a,";"),t+='<div id="'.concat(a,'" title="').concat(o["title"],'">').concat(o["content"],"</div>"))}return this.settings["additionalinfo"]=i.slice(0,-1),t},getpropstring:function(){var t="";for(var e in this.props){var i=this.props[e];i="images"==e?i.join(";"):i;var n="layers"==e&&i.length>0?i[0].image:"images"==e&&i.length>0?i[0]:i;i="layers"==e?JSON.stringify(i).replace(/'/g,'\\"'):i,n&&n.length>0&&(t+=" ".concat(e,"='").concat(i,"'"))}return t},buildCSS:function(){for(var t="",e=0;e<this.css.length;e++)t+=0==e?"<style>":"",t+="".concat(this.css[e]," {display: none;}"),t+="".concat("#header_toolbar"==this.css[e]?".annotation {top: 0px!important}":""),t+=e==this.css.length-1?"</style>":"";return t},updateRouter:function(){var t={url:this.url.join(";"),viewtype:this.viewtype,listtype:this.listtype,settings:JSON.stringify(this.settings),props:JSON.stringify(this.props)};if(JSON.stringify(this.$route.query)==JSON.stringify(t))return!1;this.$router.push({name:"tagbuilder",query:t}).catch((function(t){console.log("router error"),console.log(t)}))},buildTags:function(){if(this.url.length>0&&this.listoptions.length>0){this.updateRouter();var t=this.getAdditionalInfo(),e=this.buildCSS(),i="".concat(t?t+"\n":"","\n          ").concat(e?e+"\n":"","<").concat(this.viewtype," ").concat(this.listtype,"='").concat(this.url.join(";"),"'"),n=this.getsettings(),o=this.getpropstring();o&&(i+="".concat(o)),n&&(i+=" styling='".concat(n,"'")),i+="></".concat(this.viewtype,">"),this.tag="",this.tag=i.trim()}}}},c=u,p=(i("b829"),i("2877")),d=Object(p["a"])(c,s,r,!1,null,"fa53f5a0",null),g=d.exports,f={name:"app",components:{tagbuilder:g}},v=f,h=(i("034f"),Object(p["a"])(v,o,a,!1,null,null,null)),y=h.exports,m=i("8c4f"),b=i("af88");n["a"].use(m["a"]),n["a"].use(b["a"]),n["a"].config.productionTip=!1;var _=[{path:"/",component:g,name:"tagbuilder"}],w=new m["a"]({routes:_});new n["a"]({router:w,render:function(t){return t(y)}}).$mount("#app")},"64a9":function(t,e,i){},b829:function(t,e,i){"use strict";var n=i("e2dd"),o=i.n(n);o.a},e2dd:function(t,e,i){}});
//# sourceMappingURL=app.649ce3aa.js.map