webpackJsonp([95],{Lk4z:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("NYxO"),s={name:"CommonTable",computed:Object(r.d)({sectors:function(e){return e.individual.sectors},tableHeader:function(e){return e.app.tableHeader}}),props:{showSummary:{type:Boolean,default:!1},columns:{type:Array,required:!0},dataSource:{type:Array,required:!0}}},n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("div",{staticClass:"data"},[t("div",{staticClass:"table"},[t("el-table",{staticStyle:{width:"100%"},attrs:{"show-summary":this.showSummary,data:this.dataSource,stripe:"",border:"","header-cell-style":this.tableHeader}},this._l(this.columns,function(e){return t("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align}})}))],1)])])},staticRenderFns:[]};var i=a("VU/8")(s,n,!1,function(e){a("vB9h")},"data-v-7d469db4",null);t.default=i.exports},vB9h:function(e,t){}});