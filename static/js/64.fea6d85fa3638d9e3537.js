webpackJsonp([64],{"/pNl":function(t,e){},aPOT:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Dd8w"),o=a.n(i),r=a("NYxO"),n={name:"Analysis",components:{TagDimension:function(){return a.e(96).then(a.bind(null,"RXyt"))},RangeDimension:function(){return a.e(100).then(a.bind(null,"t+1g"))}},created:function(){this.$store.dispatch("initAnalysisFormData"),this.$store.dispatch("initAnalysisTableData")},mounted:function(){this.activeName="base"},data:function(){return{params:{org:"01000",channel:"ct",bizSector:"1"},rules:{org:[{required:!0,trigger:"change",message:"机构不能为空"}],channel:[{required:!0,trigger:"change",message:"渠道不能为空"}],bizSector:[{required:!0,trigger:"change",message:"业务板块不能为空"}]},activeName:"",chartDimCode:[],chartIndexCode:"",chartDimData:[],chartIndexData:[],dimCode:["useYear"],currentDimensionData:[{id:"comLastCount",type:"tag",title:"商业险上年出险次数",tags:[{code:"noCom",name:"未投保商业险"},{code:"newCar",name:"新车"},{code:"newIns",name:"新保"},{code:"no3",name:"连续3年+未出险"},{code:"no2",name:"连续2年未出险"},{code:"no1",name:"上年未出险"},{code:"1",name:"1次"},{code:"2",name:"2次"},{code:"3",name:"3次"},{code:"4",name:"4次"},{code:"5",name:"5次+"}],split:[{id:"1",title:"未投保商业险",tags:["noCom"]},{id:"2",title:"0次",tags:["newCar","newIns","no3","no2","no1"]},{id:"3",title:"1次",tags:["1"]},{id:"4",title:"2次",tags:["2"]},{id:"5",title:"3次及以上",tags:["3","4","5"]}]},{id:"age",type:"range",title:"年龄",list:[{id:"1",isEdit:!1,title:"20以下",start:"0",end:"20"},{id:"2",isEdit:!1,title:"20-30",start:"20",end:"30"},{id:"3",isEdit:!1,title:"30-45",start:"30",end:"45"},{id:"4",isEdit:!1,title:"45-60",start:"45",end:"60"},{id:"5",isEdit:!1,title:"60以上",start:"60",end:"N"}]},{id:"rci",type:"range",title:"商业险上年出险金额",list:[{id:"1",isEdit:!1,title:"1000以下",start:"0",end:"1000"},{id:"2",isEdit:!1,title:"1000-2000",start:"1000",end:"2000"},{id:"3",isEdit:!1,title:"2000-5000",start:"2000",end:"5000"},{id:"4",isEdit:!1,title:"5000-10000",start:"5000",end:"10000"},{id:"5",isEdit:!1,title:"10000以上",start:"10000",end:"N"}]}],selectShow:!1,selectCollShow:!1,dialogTableVisible:!1}},computed:o()({boxData:function(){return console.log(this.$echarts.dataTool),console.log(this.$echarts.dataTool.prepareBoxplotData([])),this.$echarts.dataTool.prepareBoxplotData([[35.91,36.29,37.12,38.54,38.61,39.89,41.23,42.56],[35.24,36.56,37.01,38.49,38.51,40.96,43.99,45.32],[36.51,37.04,38.05,39.04,39.06,42.88,45.06,48.05],[35.05,37.78,39.46,40.12,40.14,41.56,42.57,43.25],[36.88,37.01,39.06,40.21,40.23,46.65,48.96,49.28],[37.88,38.65,39.88,40.23,40.25,45.95,48.95,49.87],[36.59,38.66,39.26,40.39,40.41,42.25,45.08,46.29]])},tempList:function(){var t=this,e=[],a=this.chartDimData,i=this.chartIndexData;if(i.length>0)return i.forEach(function(i,o){var r=a[o].data,n=a[o].name,l=[];i.data.forEach(function(t,e){l.push({value:t,name:r[e]})}),e.push({id:t.chartDimCode[o],options:[{type:"柱状图",option:{title:{text:i.name+"-"+n+"分析"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:i.name},xAxis:[{data:r,axisPointer:{type:"shadow"},axisLabel:{interval:0,rotate:40}}],yAxis:[{type:"value"}],series:[{name:i.name,type:"bar",barWidth:20,data:i.data}]}},{type:"折线图",option:{title:{text:i.name+"-"+n+"分析"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:i.name},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{data:r,axisPointer:{type:"shadow"},axisLabel:{interval:0,rotate:40}}],yAxis:[{type:"value"}],series:[{name:i.name,type:"line",data:i.data}]}},{type:"面积图",option:{title:{text:i.name+"-"+n+"分析"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:i.name},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{data:r,axisPointer:{type:"shadow"},axisLabel:{interval:0,rotate:40}}],yAxis:[{type:"value"}],series:[{name:i.name,type:"line",areaStyle:{normal:{}},data:i.data}]}},{type:"条形图",option:{title:{text:i.name+"-"+n+"分析"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:i.name},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"value"}],yAxis:[{type:"category",axisTick:{show:!1},data:r}],series:[{name:i.name,type:"bar",label:{normal:{show:!0,position:"inside"}},data:i.data}]}},{type:"饼状图",option:{title:{text:i.name+"-"+n+"分析",subtext:"",left:"left"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{type:"scroll",orient:"vertical",right:10,top:20,bottom:20,data:r},series:[{type:"pie",radius:"65%",center:["50%","50%"],selectedMode:"single",data:l,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}},{type:"散点图",option:{title:{text:i.name+"-"+n+"分析"},xAxis:{},yAxis:{},series:[{symbolSize:20,data:[[10,8.04],[8,6.95],[13,7.58],[9,8.81],[11,8.33],[14,9.96],[6,7.24],[4,4.26],[12,10.84],[7,4.82],[5,5.68]],type:"scatter"}]}},{type:"雷达图",option:{title:{text:i.name+"-"+n+"分析"},tooltip:{},legend:{data:["满期赔付率","合并终极赔付率"]},radar:{name:{textStyle:{color:"#fff",backgroundColor:"#999",borderRadius:3,padding:[3,5]}},indicator:[{name:"家庭自用",max:100},{name:"营业出租租赁",max:100},{name:"营业旅游",max:100},{name:"营业货车",max:100},{name:"非营业机关",max:100},{name:"非营业企业",max:100}]},series:[{name:"满期赔付率 vs 合并终极赔付率",type:"radar",data:[{value:[87.11,78.36,72.36,78.23,69.32,70.32],name:"满期赔付率"},{value:[86.12,77.66,71.25,77.35,68.21,69.36],name:"合并终极赔付率"}]}]}}]})}),e}},Object(r.d)({analysisFormData:function(t){return t.chart.analysisFormData},analysisTableData:function(t){return t.chart.analysisTableData}})),watch:{activeName:function(t){"base"===t||"collect"===t&&this.showChartList()},analysisFormData:function(t){var e=this;t.dimList.forEach(function(t,a){a<10&&"carFlag"!==t.code&&e.chartDimCode.push(t.code)}),t.indexList.forEach(function(t,a){a<1&&(e.chartIndexCode=t.code)})},chartDimCode:function(t){var e=this,a=this.chartIndexCode;if(t.length>0&&""!==a){var i=a,o=this.analysisFormData.indexList.find(function(t){return t.code===i});this.chartDimData=[],this.chartIndexData=[],t.forEach(function(t){var a=[],r=e.analysisFormData.dimList.find(function(e){return e.code===t});if(r.detail.length>0){r.detail.forEach(function(t){return a.push(t.name)}),e.chartDimData.push({code:t,name:r.name,data:a});var n=[];a.forEach(function(t){n.push({dim:t,index:0})}),e.analysisTableData.forEach(function(e){var a=e[t],o=n.findIndex(function(t){return t.dim===a});n[o].index=parseFloat(n[o].index)+parseFloat(e[i])});var l=n.map(function(t){return t.index});e.chartIndexData.push({code:i,name:o.name,data:l})}})}},chartIndexCode:function(t){var e=this,a=this.chartDimCode,i=this.chartIndexCode;if(a.length>0&&""!==i){var o=i,r=this.analysisFormData.indexList.find(function(t){return t.code===o});this.chartDimData=[],this.chartIndexData=[],a.forEach(function(t){var a=[],i=e.analysisFormData.dimList.find(function(e){return e.code===t});if(i.detail.length>0){i.detail.forEach(function(t){return a.push(t.name)}),e.chartDimData.push({code:t,name:i.name,data:a});var n=[];a.forEach(function(t){n.push({dim:t,index:0})}),e.analysisTableData.forEach(function(e){var a=e[t],i=n.findIndex(function(t){return t.dim===a});n[i].index=parseFloat(n[i].index)+parseFloat(e[o])});var l=n.map(function(t){return t.index});e.chartIndexData.push({code:o,name:r.name,data:l})}})}},tempList:function(t){var e=this;t.length>0&&this.$nextTick(function(){t.forEach(function(t,a){a%3==0?e.drawLine(t.id,t.options[0].option):a%3==1?e.drawLine(t.id,t.options[4].option):a%3==2&&e.drawLine(t.id,t.options[3].option)})})}},methods:{showChartList:function(){var t=this,e=["0年","1年","2年","3年","4年","5年","6年+"];this.$nextTick(function(){var a={title:{text:"赔付率分布",left:"center",top:10},grid:{top:"25%",bottom:"10%",left:"5%",right:"8%",containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},legend:{data:["保单数量","赔付率"],itemWidth:15,itemHeight:8,itemGap:8,top:50},xAxis:[{type:"category",data:e,axisPointer:{type:"shadow"}}],yAxis:[{type:"value",min:0,max:12e3,interval:2e3,axisLabel:{formatter:"{value}"}},{type:"value",min:0,max:100,interval:10,axisLabel:{formatter:"{value} %"}}],series:[{name:"保单数量",type:"bar",barWidth:25,data:[10298,6476,8857,6466,5832,7874,9250],itemStyle:{normal:{color:"#0079BA"}}},{name:"赔付率",type:"line",smooth:0,yAxisIndex:1,data:[18.54,38.49,29.04,50.12,40.21,30.23,80.39],itemStyle:{normal:{color:"#FB6670"}}}]};t.drawLine("myChart1",a);var i={title:{text:"保费分析",left:"center",top:10},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},grid:{top:"25%",bottom:"10%",left:"5%",right:"8%",containLabel:!0},legend:{data:["本年","上年同期","本季度","上季度同期","保费占比"],selected:{"本季度":!1,"上季度同期":!1,"本月":!1,"上月同期":!1},itemWidth:15,itemHeight:8,itemGap:8,top:50},xAxis:[{type:"category",data:e,axisPointer:{type:"shadow"}}],yAxis:[{type:"value",min:0,max:5e3,interval:1e3,axisLabel:{formatter:"{value}"}},{type:"value",min:7,max:25,interval:4,axisLabel:{formatter:"{value} %"}}],series:[{name:"本年",type:"bar",data:[4371.3,2914.2,3428.5,2586.6,2724.4,3437,4538],itemStyle:{normal:{color:"#0079BA"}}},{name:"上年同期",type:"bar",data:[4355.3,2902.2,3404.5,2574.6,2902.4,3400,4519],itemStyle:{normal:{color:"#00AAE2"}}},{name:"本季度",type:"bar",data:[1092.83,728.55,607.13,646.65,431.1,359.25,1134.5],itemStyle:{normal:{color:"#FB6670"}}},{name:"上季度同期",type:"bar",data:[1087.83,716.26,596.12,637.58,420.8,348.14,1123.9],itemStyle:{normal:{color:"#6638F0"}}},{name:"本月",type:"bar",data:[364.28,242.85,202.38,215.55,143.7,119.75,378.17],itemStyle:{normal:{color:"#B0F566"}}},{name:"上月同期",type:"bar",data:[353.19,235.75,192.55,209.38,140.6,108.69,369.32],itemStyle:{normal:{color:"#FF5282"}}},{name:"保费占比",type:"line",smooth:0,yAxisIndex:1,data:[21.86,14.57,12.14,14.93,18.62,17.19,22.69],itemStyle:{normal:{color:"#FB6670"}}}]};t.drawLine("myChart2",i);var o={title:[{text:"赔付率分布",left:"center",top:10}],grid:{top:"25%",bottom:"10%",left:"5%",right:"8%",containLabel:!0},tooltip:{trigger:"item",axisPointer:{type:"shadow"}},xAxis:{type:"category",data:["0年","1年","2年","3年","4年","5年","6年+"],axisPointer:{type:"shadow"}},yAxis:{type:"value",min:30,max:60,interval:5,splitArea:{show:!0}},series:[{name:"boxplot",type:"boxplot",boxWidth:18,itemStyle:{normal:{color:"#0079BA",borderColor:"#0079BA",shadowBlur:{shadowColor:"rgba(0, 0, 0, 0)",shadowBlur:0}}},data:t.boxData.boxData,tooltip:{formatter:function(t){return["车龄 "+t.name+": ","upper: "+t.data[5],"Q3: "+t.data[4],"median: "+t.data[3],"Q1: "+t.data[2],"lower: "+t.data[1]].join("<br/>")}}}]};t.drawLine("myChart3",o);var r={title:{text:"保单成本分析",left:"center",top:10},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},grid:{top:"25%",bottom:"10%",left:"5%",right:"8%",containLabel:!0},legend:{data:["赔付率","市场费用率","非市场费用率","优惠比率"],itemWidth:15,itemHeight:8,itemGap:8,top:50},xAxis:[{type:"category",data:e,axisPointer:{type:"shadow"}}],yAxis:[{type:"value",name:"",min:0,max:100,interval:20,axisLabel:{formatter:"{value}"}}],series:[{name:"赔付率",type:"bar",stack:"合计比率",barWidth:25,data:[58.54,56.49,51.97,57.88,54.51,59.58,50.47],itemStyle:{normal:{color:"#0079BA"}}},{name:"市场费用率",type:"bar",stack:"合计比率",barWidth:25,data:[18.54,15.49,20.04,20.12,21.21,20.23,19.39],itemStyle:{normal:{color:"#00AAE2"}}},{name:"非市场费用率",type:"bar",stack:"合计比率",barWidth:25,data:[15.54,18.49,19.04,11.12,18.21,13.23,22.39],itemStyle:{normal:{color:"#D2B1C1"}}},{name:"优惠比率",type:"bar",stack:"合计比率",barWidth:25,data:[7.38,9.53,8.95,10.88,5.97,6.96,7.75],itemStyle:{normal:{color:"#FF5282"}}}]};t.drawLine("myChart4",r);var n={title:{text:"保单数量分布",left:"center",top:10},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},grid:{top:"25%",bottom:"10%",left:"5%",right:"8%",containLabel:!0},legend:{data:["低I","低II","中I","中II","高I","高II"],itemWidth:15,itemHeight:8,itemGap:8,top:50},xAxis:[{type:"category",data:e,axisPointer:{type:"shadow"}}],yAxis:[{type:"value",name:"",min:0,max:4e3,interval:1e3,axisLabel:{formatter:"{value}"}}],series:[{name:"低I",type:"bar",barWidth:25,stack:"保单数量",data:[532,435,420,385,375,365,510],itemStyle:{normal:{color:"#0079BA"}}},{name:"低II",type:"bar",barWidth:25,stack:"保单数量",data:[523,453,402,358,357,356,501],itemStyle:{normal:{color:"#00AAE2"}}},{name:"中I",type:"bar",barWidth:25,stack:"保单数量",data:[532,435,420,385,375,365,510],itemStyle:{normal:{color:"#AAB9CC"}}},{name:"中II",type:"bar",barWidth:25,stack:"保单数量",data:[523,453,402,358,357,356,501],itemStyle:{normal:{color:"#CDA8BA"}}},{name:"高I",type:"bar",barWidth:25,stack:"保单数量",data:[532,435,420,385,375,365,510],itemStyle:{normal:{color:"#F8A2CB"}}},{name:"高II",type:"bar",barWidth:25,stack:"保单数量",data:[523,453,402,358,357,356,501],itemStyle:{normal:{color:"#FF5282"}}}]};t.drawLine("myChart5",n);var l={title:{text:"保单综合分析",left:"center",top:10},grid:{top:"25%",bottom:"10%",left:"5%",right:"0%",containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},legend:{data:["保费收入","赔付率","市场费用率"],itemWidth:15,itemHeight:8,itemGap:8,top:50},xAxis:[{type:"category",data:e,axisPointer:{type:"shadow"}}],yAxis:[{type:"value",position:"left",min:1400,max:4600,interval:800,axisLabel:{formatter:"{value}"}},{type:"value",position:"right",min:38,max:41,interval:2,axisLabel:{formatter:"{value} %"}},{type:"value",position:"right",offset:10,min:20,max:27,interval:3,axisLabel:{formatter:"{value} %"}}],series:[{name:"保费收入",type:"bar",barWidth:25,data:[4371.3,3914.2,3428.5,3586.6,3724.4,3437,4538],itemStyle:{normal:{color:"#0079BA"}}},{name:"赔付率",type:"line",yAxisIndex:1,barWidth:25,smooth:0,data:[38.54,38.49,39.04,40.12,40.21,40.23,40.39],itemStyle:{normal:{color:"#F78AE0"}}},{name:"市场费用率",type:"line",yAxisIndex:2,barWidth:25,smooth:0,data:[25.54,24.49,22.04,23.12,21.21,24.23,25.39],itemStyle:{normal:{color:"#FF5282"}}}]};t.drawLine("myChart6",l)})},drawLine:function(t,e){var a=this.$echarts.init(document.getElementById(t),"macarons");a.clear(),a.setOption(e)}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("el-tabs",{attrs:{type:"border-card"},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"基础分析",name:"base"}},[a("div",{staticClass:"form"},[a("el-form",{ref:"orderForm",attrs:{"label-width":"180px",model:t.params,rules:t.rules,inline:!0}},[a("el-form-item",{attrs:{label:"机构",prop:"org"}},[a("el-select",{attrs:{placeholder:"请选择机构"},model:{value:t.params.org,callback:function(e){t.$set(t.params,"org",e)},expression:"params.org"}},t._l(t.analysisFormData.orgList,function(t){return a("el-option",{key:t.code,attrs:{value:t.code,label:t.name}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"渠道",prop:"channel"}},[a("el-select",{attrs:{placeholder:"请选择渠道"},model:{value:t.params.channel,callback:function(e){t.$set(t.params,"channel",e)},expression:"params.channel"}},t._l(t.analysisFormData.channelList,function(t){return a("el-option",{key:t.code,attrs:{value:t.code,label:t.name}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"业务板块",prop:"bizSector"}},[a("el-select",{attrs:{placeholder:"请选择业务板块"},model:{value:t.params.bizSector,callback:function(e){t.$set(t.params,"bizSector",e)},expression:"params.bizSector"}},t._l(t.analysisFormData.bizList,function(t){return a("el-option",{key:t.code,attrs:{value:t.code,label:t.name}})}))],1),t._v(" "),a("el-form-item",[a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"primary"},on:{click:function(e){t.selectShow=!t.selectShow}}},[a("span",[t._v("归因分析基础配置")]),t._v(" "),t.selectShow?a("i",{staticClass:"el-icon-arrow-up"}):a("i",{staticClass:"el-icon-arrow-down"})])],1)],1)],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.selectShow,expression:"selectShow"}],staticClass:"sector-list"},[a("div",{staticClass:"title"},[t._v("选择维度(可多选)")]),t._v(" "),a("div",{staticClass:"biz-sector"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("el-form",{attrs:{"label-width":"120px",inline:!0}},[a("el-form-item",[a("el-checkbox-group",{model:{value:t.chartDimCode,callback:function(e){t.chartDimCode=e},expression:"chartDimCode"}},t._l(t.analysisFormData.dimList,function(e){return a("el-checkbox",{key:e.code,attrs:{label:e.code}},[t._v(t._s(e.name))])}))],1)],1),t._v(" "),a("div",{staticStyle:{float:"right",position:"relative",top:"8px"}},[a("el-button",{attrs:{type:"text",icon:"iconfont icon-bianji",size:"small"},on:{click:function(e){t.dialogTableVisible=!0}}},[t._v("编辑")])],1)],1)],1)],1)]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.selectShow,expression:"selectShow"}],staticClass:"sector-list"},[a("div",{staticClass:"title"},[t._v("选择指标(单选)")]),t._v(" "),a("div",{staticClass:"biz-sector"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("el-form",{attrs:{"label-width":"120px",inline:!0}},[a("el-form-item",[a("el-radio-group",{model:{value:t.chartIndexCode,callback:function(e){t.chartIndexCode=e},expression:"chartIndexCode"}},t._l(t.analysisFormData.indexList,function(e){return a("el-radio",{key:e.code,attrs:{label:e.code}},[t._v(t._s(e.name))])}))],1)],1)],1)],1)],1)]),t._v(" "),a("div",{staticClass:"data"},[a("el-row",{attrs:{gutter:20}},t._l(t.tempList,function(e){return a("el-col",{key:e.id,staticClass:"chart",attrs:{span:8}},[a("el-card",{attrs:{"body-style":{padding:"0px"}}},[a("div",{staticStyle:{padding:"14px"}},[a("div",{staticClass:" clearfix"},[a("el-button",{staticClass:"option",attrs:{type:"text",icon:"iconfont icon-cc-chart",name:"zhuzhuang"},on:{click:function(a){t.drawLine(e.id,e.options[0].option)}}}),t._v(" "),a("el-button",{staticClass:"option",attrs:{type:"text",icon:"iconfont icon-chart-line"},on:{click:function(a){t.drawLine(e.id,e.options[1].option)}}}),t._v(" "),a("el-button",{staticClass:"option",attrs:{type:"text",icon:"iconfont icon-chartarea"},on:{click:function(a){t.drawLine(e.id,e.options[2].option)}}}),t._v(" "),a("el-button",{staticClass:"option",attrs:{type:"text",icon:"iconfont icon-chart"},on:{click:function(a){t.drawLine(e.id,e.options[3].option)}}}),t._v(" "),a("el-button",{staticClass:"option",attrs:{type:"text",icon:"iconfont icon-chart1"},on:{click:function(a){t.drawLine(e.id,e.options[4].option)}}}),t._v(" "),a("el-button",{staticClass:"option",attrs:{type:"text",icon:"iconfont icon-dotchart"},on:{click:function(a){t.drawLine(e.id,e.options[5].option)}}}),t._v(" "),a("el-button",{staticClass:"option",attrs:{type:"text",icon:"iconfont icon-radarchart"},on:{click:function(a){t.drawLine(e.id,e.options[6].option)}}})],1)]),t._v(" "),a("div",{staticClass:"image",attrs:{id:e.id}})])],1)}))],1)]),t._v(" "),a("el-tab-pane",{attrs:{label:"综合分析",name:"collect"}},[a("div",{staticClass:"form"},[a("el-form",{ref:"orderForm",attrs:{"label-width":"180px",model:t.params,rules:t.rules,inline:!0}},[a("el-form-item",{attrs:{label:"机构",prop:"org"}},[a("el-select",{attrs:{placeholder:"请选择机构"},model:{value:t.params.org,callback:function(e){t.$set(t.params,"org",e)},expression:"params.org"}},t._l(t.analysisFormData.orgList,function(t){return a("el-option",{key:t.code,attrs:{value:t.code,label:t.name}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"渠道",prop:"channel"}},[a("el-select",{attrs:{placeholder:"请选择渠道"},model:{value:t.params.channel,callback:function(e){t.$set(t.params,"channel",e)},expression:"params.channel"}},t._l(t.analysisFormData.channelList,function(t){return a("el-option",{key:t.code,attrs:{value:t.code,label:t.name}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"业务板块",prop:"bizSector"}},[a("el-select",{attrs:{placeholder:"请选择业务板块"},model:{value:t.params.bizSector,callback:function(e){t.$set(t.params,"bizSector",e)},expression:"params.bizSector"}},t._l(t.analysisFormData.bizList,function(t){return a("el-option",{key:t.code,attrs:{value:t.code,label:t.name}})}))],1),t._v(" "),t._l(t.analysisFormData.queryList,function(e){return a("el-form-item",{key:e.code,attrs:{label:e.name,prop:e.name}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.params[e.code],callback:function(a){t.$set(t.params,e.code,a)},expression:"params[query.code]"}},t._l(e.detail,function(t){return a("el-option",{key:t.code,attrs:{value:t.code,label:t.name}})}))],1)}),t._v(" "),a("el-form-item",[a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"primary"},on:{click:function(e){t.selectCollShow=!t.selectCollShow}}},[a("span",[t._v("选择维度")]),t._v(" "),t.selectCollShow?a("i",{staticClass:"el-icon-arrow-up"}):a("i",{staticClass:"el-icon-arrow-down"})])],1)],2)],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.selectCollShow,expression:"selectCollShow"}],staticClass:"sector-list"},[a("div",{staticClass:"title"},[t._v("选择维度")]),t._v(" "),a("div",{staticClass:"biz-sector"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("el-form",{attrs:{"label-width":"120px",inline:!0}},[a("el-form-item",[a("el-checkbox-group",{model:{value:t.dimCode,callback:function(e){t.dimCode=e},expression:"dimCode"}},t._l(t.analysisFormData.dimList,function(e){return a("el-checkbox",{key:e.code,attrs:{label:e.code}},[t._v(t._s(e.name))])}))],1)],1)],1)],1)],1)]),t._v(" "),a("div",{staticClass:"data"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("div",{style:{width:"100%",height:"400px"},attrs:{id:"myChart1"}})]),t._v(" "),a("el-col",{attrs:{span:8}},[a("div",{style:{width:"100%",height:"400px"},attrs:{id:"myChart2"}})]),t._v(" "),a("el-col",{attrs:{span:8}},[a("div",{style:{width:"100%",height:"400px"},attrs:{id:"myChart3"}})])],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("div",{style:{width:"467px",height:"400px"},attrs:{id:"myChart4"}})]),t._v(" "),a("el-col",{attrs:{span:8}},[a("div",{style:{width:"467px",height:"400px"},attrs:{id:"myChart5"}})]),t._v(" "),a("el-col",{attrs:{span:8}},[a("div",{style:{width:"467px",height:"400px"},attrs:{id:"myChart6"}})])],1)],1)])],1),t._v(" "),a("el-dialog",{attrs:{title:"编辑维度",fullscreen:"",visible:t.dialogTableVisible},on:{"update:visible":function(e){t.dialogTableVisible=e}}},[t._l(t.currentDimensionData,function(e){return["tag"===e.type?a("tag-dimension",{key:e.id,attrs:{data:e}}):t._e(),t._v(" "),"range"===e.type?a("range-dimension",{key:e.id,attrs:{data:e}}):t._e()]}),t._v(" "),a("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){t.dialogTableVisible=!1}}},[t._v("保存维度")]),t._v(" "),a("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){t.dialogTableVisible=!1}}},[t._v("关闭")])],1)],2)],1)},staticRenderFns:[]};var s=a("VU/8")(n,l,!1,function(t){a("/pNl")},"data-v-1f2f4d70",null);e.default=s.exports}});