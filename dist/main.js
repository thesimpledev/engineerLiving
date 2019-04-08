!function(t){var e={};function a(s){if(e[s])return e[s].exports;var i=e[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=e,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(s,i,function(e){return t[e]}.bind(null,i));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=0)}([function(t,e,a){"use strict";a.r(e);const s={SAN_FRANCISCO:{adjustedSalary:99751,city:"San Francisco",color:"#f1c40f",constant:"SAN_FRANCISCO",class:"city-San-Francisco",diversity:[{ethnicity:"White",percentage:41.4},{ethnicity:"Asian",percentage:33.3},{ethnicity:"Hispanic",percentage:15.3},{ethnicity:"Black",percentage:5.5}],happinessRank:10,medianHomePrice:1331100,medianSalary:12e4,jobs:7947,position:{x:20,y:160},sunnyDays:256,points:0},NEW_YORK:{adjustedSalary:1e5,city:"New York",color:"#2980b9",constant:"NEW_YORK",class:"city-New-York",diversity:[{ethnicity:"White",percentage:32.7},{ethnicity:"Asian",percentage:13.2},{ethnicity:"Hispanic",percentage:28.8},{ethnicity:"Black",percentage:22.6}],happinessRank:90,medianHomePrice:662100,medianSalary:11e4,jobs:8364,position:{x:625,y:135},sunnyDays:224,points:0},BOSTON:{adjustedSalary:90171,city:"Boston",color:"#e74c3c",constant:"BOSTON",class:"city-Boston",diversity:[{ethnicity:"White",percentage:46},{ethnicity:"Asian",percentage:9.1},{ethnicity:"Hispanic",percentage:18.4},{ethnicity:"Black",percentage:22.7}],happinessRank:58,medianHomePrice:587e3,medianSalary:1e5,jobs:3630,position:{x:650,y:100},sunnyDays:200,points:0},PORTLAND:{adjustedSalary:89374,city:"Portland",color:"#e67e22",constant:"PORTLAND",class:"city-Portland",diversity:[{ethnicity:"White",percentage:71.8},{ethnicity:"Asian",percentage:7.4},{ethnicity:"Hispanic",percentage:9.6},{ethnicity:"Black",percentage:5.9}],happinessRank:84,medianHomePrice:427500,medianSalary:9e4,jobs:2359,position:{x:45,y:90},sunnyDays:144,points:0},SEATTLE:{adjustedSalary:105735,city:"Seattle",color:"#1abc9c",constant:"SEATTLE",class:"city-Seattle",diversity:[{ethnicity:"White",percentage:66.2},{ethnicity:"Asian",percentage:14.2},{ethnicity:"Hispanic",percentage:6.4},{ethnicity:"Black",percentage:7.2}],happinessRank:54,medianHomePrice:761800,medianSalary:113242,jobs:10417,position:{x:45,y:40},sunnyDays:152,points:0},AUSTIN:{adjustedSalary:90171,city:"Austin",color:"#34495e",constant:"AUSTIN",class:"city-Austin",diversity:[{ethnicity:"White",percentage:48.7},{ethnicity:"Asian",percentage:6.5},{ethnicity:"Hispanic",percentage:34.8},{ethnicity:"Black",percentage:7.5}],happinessRank:14,medianHomePrice:346500,medianSalary:1e5,jobs:4308,position:{x:320,y:350},sunnyDays:228,points:0},SAN_JOSE:{adjustedSalary:100989,city:"San Jose",color:"#9b59b6",constant:"SAN_JOSE",class:"city-San-Jose",diversity:[{ethnicity:"White",percentage:27.5},{ethnicity:"Asian",percentage:32.9},{ethnicity:"Hispanic",percentage:33.1},{ethnicity:"Black",percentage:2.9}],happinessRank:8,medianHomePrice:1083e3,medianSalary:122500,jobs:3023,position:{x:35,y:190},sunnyDays:204,points:0},RALEIGH:{adjustedSalary:9e4,city:"Raleigh",color:"#f39c12",constant:"RALEIGH",class:"city-Raleigh",diversity:[{ethnicity:"White",percentage:54},{ethnicity:"Asian",percentage:4.3},{ethnicity:"Hispanic",percentage:10.9},{ethnicity:"Black",percentage:28.5}],happinessRank:23,medianHomePrice:260100,medianSalary:94142,jobs:1377,position:{x:600,y:210},sunnyDays:213,points:0},DENVER:{adjustedSalary:85878,city:"Denver",color:"#2980b9",constant:"DENVER",class:"city-Denver",diversity:[{ethnicity:"White",percentage:52.9},{ethnicity:"Asian",percentage:3.4},{ethnicity:"Hispanic",percentage:31.2},{ethnicity:"Black",percentage:9.5}],happinessRank:41,medianHomePrice:421900,medianSalary:9e4,jobs:1973,position:{x:250,y:170},sunnyDays:245,points:0},PHOENIX:{adjustedSalary:86765,city:"Phoenix",color:"#c0392b",constant:"PHOENIX",class:"city-Phoenix",diversity:[{ethnicity:"White",percentage:46},{ethnicity:"Asian",percentage:3.3},{ethnicity:"Hispanic",percentage:40.5},{ethnicity:"Black",percentage:6.5}],happinessRank:127,medianHomePrice:229300,medianSalary:87997,jobs:1491,position:{x:150,y:255},sunnyDays:299,points:0}},i=1e3,n=0,r=d3.easePoly,c=200,l=200,o=100;var d=class{constructor(t,e){this.setChart(t,e),this.setData()}setChart(t,e={topOffset:0,leftOffset:0}){const a=d3.select(t).attr("height",l+2*o).attr("width",c+2*o);this.chart=a.append("g").attr("transform",`translate(${o+e.leftOffset}, ${o/2+e.topOffset})`)}setData(){this.data=s}xAxis(t,e,a=5){this.xScale=d3[e]().domain(t).range([0,c]),this.chart.append("g").call(d3.axisBottom(this.xScale).ticks(a)).attr("transform",`translate(0, ${l})`)}yAxis(t,e,a=5){this.yScale=d3[e]().domain(t).range([0,c]),this.chart.append("g").call(d3.axisLeft(this.yScale).ticks(a))}gridLines(t,e,a=5){this.chart.append("g").attr("class","grid").call(d3[e]().scale(t).tickSize(c,0,0).tickFormat("").ticks(a))}rectangleLabels(t){this.chart.selectAll().data(this.sortedData).enter().append("text").attr("class",t=>`city ${t.class} bar-label`).attr("y",(t,e)=>20.1*e+14).style("fill","#fff").text((e,a)=>"string"==typeof t?e[t]:t.call(e,a)).transition().ease(r).delay((t,e)=>e*n).duration(i).attr("x",5)}labelTop(t){this.chart.append("text").attr("class","label-text").attr("text-anchor","middle").attr("x",c/2).attr("y",-20).text(t)}};var h=class extends d{constructor(t){super(t),this.sortData(),this.xAxis([120,300],"scaleLinear"),this.yAxis(this.sortedData.map(t=>t.city),"scaleBand"),this.rectangles(),this.gridLines(this.xScale,"axisBottom"),this.rectangleLabels("sunnyDays"),this.labelTop("Sunny Days Per Year")}sortData(){this.sortedData=Object.values(this.data).sort((t,e)=>e.sunnyDays-t.sunnyDays)}rectangles(){this.chart.selectAll().data(this.sortedData).enter().append("rect").attr("class",t=>`city ${t.class}`).attr("x",1).attr("y",t=>this.yScale(t.city)).attr("height",this.yScale.bandwidth()).style("fill",t=>t.color).transition().delay((t,e)=>e*n).duration(i).ease(r).attr("width",t=>this.xScale(t.sunnyDays))}};var y=class extends d{constructor(t){super(t),this.sortData(),this.xAxis([0,1350],"scaleLinear"),this.yAxis(this.sortedData.map(t=>t.city),"scaleBand"),this.rectangles(),this.gridLines(this.xScale,"axisBottom"),this.rectangleLabels(function(){return`$${parseInt(this.medianHomePrice/1e3)}K`}),this.labelTop("Median Home Price")}sortData(){this.sortedData=Object.values(this.data).sort((t,e)=>t.medianHomePrice-e.medianHomePrice)}rectangles(){this.chart.selectAll().data(this.sortedData).enter().append("rect").attr("class",t=>`city ${t.class}`).attr("x",1).attr("y",t=>this.yScale(t.city)).attr("height",this.yScale.bandwidth()).style("fill",t=>t.color).transition().ease(r).delay((t,e)=>e*n).duration(i).attr("width",t=>this.xScale(t.medianHomePrice)/1e3)}};var p=class extends d{constructor(t){super(t),this.ethnicities=["White","Asian","Hispanic","Black"],this.xAxis(this.ethnicities,"scaleBand"),this.yAxis([70,0],"scaleLinear"),this.lines(),this.percentageLabels(),this.labelLeft(),this.labelTop("Diversity"),this.gridLines(this.xScale,"axisBottom"),this.gridLines(this.yScale,"axisRight")}lines(){let t=d3.line().x(t=>this.xScale(t.ethnicity)).y(t=>this.yScale(t.percentage));this.chart.selectAll(".line").data(Object.values(this.data)).enter().append("path").attr("transform","translate(25, 5)").attr("class",t=>`line city ${t.class}`).attr("d",e=>t(e.diversity)).style("stroke",t=>t.color).style("stroke-width",2).style("stroke-linecap","round")}percentageLabels(){this.chart.selectAll().data(()=>Object.values(this.data)).enter().append("g").attr("class",t=>`city ${t.class} city-data-toggle`).selectAll(".line-point").data(t=>t.diversity).enter().append("text").text(t=>`${parseInt(t.percentage)}%`).attr("x",(t,e)=>c/4*e+20).attr("y",t=>l-l*(t.percentage/70))}labelLeft(){this.chart.append("text").attr("class","label-text").attr("x",-c/2).attr("y",-50).attr("transform","rotate(-90)").attr("text-anchor","middle").text("% of population")}};var u=class extends d{constructor(t){super(t),this.sortData(),this.rectangles(),this.rectangleLabels(function(t){return`#${t+1} - ${this.city} (overall ${this.happinessRank})`}),this.labelTop("Happiness Ranking")}sortData(){this.sortedData=Object.values(this.data).sort((t,e)=>t.happinessRank-e.happinessRank)}rectangles(){this.chart.selectAll().data(this.sortedData).enter().append("rect").attr("class",t=>`city ${t.class}`).style("fill",t=>t.color).attr("height",l/this.sortedData.length).attr("y",(t,e)=>20*e).transition().delay((t,e)=>e*n).duration(i).ease(r).attr("width",c)}};var g=class extends d{constructor(t){super(t),this.svg=d3.select(t),this.shadowCircle(),this.mainCircle(),this.innerWhiteCircle(),this.cityLabel(),this.ranking()}shadowCircle(){this.svg.selectAll(".shadow").data(Object.values(this.data)).enter().append("circle").attr("r",15).attr("width",10).style("fill",t=>"rgba(0,0,0,0.3)").attr("class",t=>`city ${t.class} city-pinpoint`).transition().ease(r).duration(i).attr("cy",t=>t.position.y+5).attr("cx",t=>t.position.x)}mainCircle(){this.svg.selectAll().data(Object.values(this.data)).enter().append("circle").attr("r",15).style("fill","none").style("cursor","pointer").attr("class",t=>`city ${t.class} city-pinpoint`).transition().ease(r).duration(i).style("fill",t=>t.color).attr("cy",t=>t.position.y).attr("cx",t=>t.position.x)}innerWhiteCircle(){this.svg.selectAll().data(Object.values(this.data)).enter().append("circle").attr("r",10).style("fill",t=>"#fff").attr("class",t=>`city ${t.class} city-pinpoint`).transition().ease(r).duration(i).attr("cy",t=>t.position.y).attr("cx",t=>t.position.x).style("z-index",10).style("cursor","pointer")}cityLabel(){this.svg.selectAll("text").data(Object.values(this.data)).enter().append("text").attr("opacity",0).attr("class",t=>`map-city-label city ${t.class}`).text(t=>t.city).style("font-size",14).style("stroke-width",3).attr("fill",t=>t.color).transition().ease(r).duration(i/1.5).attr("opacity",1).attr("x",t=>"New York"===t.city?t.position.x-90:"Boston"===t.city?t.position.x-75:"Raleign"===t.city?t.position.x-80:t.position.x+25).attr("y",t=>t.position.y+5).style("z-index",10)}ranking(){this.svg.selectAll(".ranking").data(Object.values(this.data)).enter().append("text").text(t=>t.ranking).style("fill",t=>t.color).style("font-size",16).attr("class",t=>`city ${t.class} city-pinpoint`).transition().ease(r).duration(i).attr("y",t=>t.position.y+6).attr("x",t=>t.position.x).style("text-anchor","middle")}};var x=class extends d{constructor(t){super(t,{topOffset:150,leftOffset:80}),this.render()}render(){this.setChartVariables(),this.addPieChart(),this.addCityLabel(),this.addCountLabel(),this.topLabel()}setChartVariables(){this.radius=Math.min(c,l)/2,this.pie=d3.pie().value(t=>t.jobs),this.arc=d3.arc().innerRadius(0).outerRadius(this.radius),this.labelArc=d3.arc().innerRadius(this.radius).outerRadius(this.radius+70),this.percentageArc=d3.arc().innerRadius(this.radius/2).outerRadius(this.radius)}addPieChart(){this.chart.selectAll().data(this.pie(Object.values(this.data))).enter().append("path").attr("class",t=>`city ${t.data.class}`).attr("d",this.arc).attr("fill",t=>t.data.color)}addCityLabel(){this.chart.selectAll().data(this.pie(Object.values(this.data))).enter().append("text").attr("class",t=>`city ${t.data.class}`).attr("text-anchor","middle").attr("transform",t=>`translate(${this.labelArc.centroid(t)})`).text(t=>t.data.city).transition().ease(r).delay((t,e)=>e*n).duration(i).attr("transform",t=>{let e=t.endAngle<Math.PI?t.startAngle/2+t.endAngle/2:t.startAngle/2+t.endAngle/2+Math.PI;return`translate(${this.labelArc.centroid(t)[0]}, ${this.labelArc.centroid(t)[1]}) rotate(-95) rotate(${180*e/Math.PI})`})}addCountLabel(){this.chart.selectAll().data(this.pie(Object.values(this.data))).enter().append("text").attr("class",t=>`city ${t.data.class} city-data-toggle`).attr("text-anchor","middle").attr("transform",t=>`translate(${this.percentageArc.centroid(t)})`).text(t=>t.data.jobs)}topLabel(){this.chart.append("text").attr("text-anchor","middle").attr("class","label-text").text("Open Jobs").attr("y",-175)}};var b=class extends d{constructor(t){super(t),this.sortData(),this.xAxis([75,125],"scaleLinear"),this.yAxis(this.sortedData.map(t=>t.city),"scaleBand"),this.rectanglesMedianSalary(),this.rectanglesAdjustedSalary(),this.gridLines(this.xScale,"axisBottom"),this.rectangleLabels(function(){return`$${parseInt(this.adjustedSalary/1e3)}K`}),this.rectangleMedianLabels(),this.labelTop("Adjusted & Median Salary")}sortData(){this.sortedData=Object.values(this.data).sort((t,e)=>t.cost-e.cost)}rectanglesAdjustedSalary(){this.chart.selectAll().data(this.sortedData).enter().append("rect").attr("class",t=>`city ${t.class} bar-label`).attr("x",1).attr("y",t=>this.yScale(t.city)).attr("height",this.yScale.bandwidth()).style("fill",t=>t.color).transition().ease(r).delay((t,e)=>e*n).duration(i).attr("width",t=>this.xScale(t.adjustedSalary/1e3))}rectanglesMedianSalary(){this.chart.selectAll().data(this.sortedData).enter().append("rect").attr("class",t=>`city ${t.class}`).attr("x",1).attr("y",t=>this.yScale(t.city)).attr("height",this.yScale.bandwidth()).style("fill","#bbb").transition().ease(r).delay((t,e)=>e*n).duration(i).attr("width",t=>this.xScale(t.medianSalary/1e3))}rectangleMedianLabels(){this.chart.selectAll().data(this.sortedData).enter().append("text").style("fill","#aaa").attr("class",t=>`city ${t.class} median-salary`).attr("y",(t,e)=>19.9*e+14).text(t=>`$${parseInt(t.medianSalary/1e3)}K`).transition().ease(r).delay((t,e)=>e*n).duration(i).attr("x",t=>this.xScale(t.medianSalary/1e3)+5)}};var f=class{constructor(){this.filterTicks(),this.filterData(),this.colorTitle()}filterTicks(){d3.selectAll(".tick text").attr("class",function(t){let e=this.textContent;return parseInt(e)||["White","Asian","Hispanic","Black"].includes(e)?"":`city city-${this.textContent.split(" ").join("-")}`})}filterData(){d3.selectAll(".city").on("mouseover",(t,e)=>{let a;a="string"==typeof t?`city-${t.split(" ").join("-")}`:t.data?t.data.class:t.class,document.querySelectorAll(`.city:not(.${a})`).forEach(t=>{t.classList.add("filter")}),document.querySelectorAll(`.${a}.city-data-toggle`).forEach(t=>{t.classList.add("show")})}).on("mouseleave",()=>{document.querySelectorAll(".city").forEach(t=>{t.classList.remove("filter")}),document.querySelectorAll(".city-data-toggle").forEach(t=>{t.classList.remove("show")})})}colorTitle(){const t=d3.select("h1");d3.selectAll(".city").on("mouseenter",e=>{let a;a=e.data?e.data.color:e.color,t.style("color",a)}).on("mouseout",e=>{t.style("color","#777")})}};var m=class{constructor(){this.calculatePointsForSalary(),this.calculatePointsForHappiness(),this.calculatePointsForMedianHomePrice(),this.calculatePointsForSunnyDays(),this.calculatePointsForDiversity(),this.calculatePointsForJobs(),this.setRankings()}calculatePointsForSalary(){this.calculateBy((t,e)=>e.adjustedSalary-t.adjustedSalary,3)}calculatePointsForHappiness(){this.calculateBy((t,e)=>t.happinessRank-e.happinessRank,1.5)}calculatePointsForMedianHomePrice(){this.calculateBy((t,e)=>t.medianHomePrice-e.medianHomePrice,3)}calculatePointsForSunnyDays(){this.calculateBy((t,e)=>e.sunnyDays-t.sunnyDays)}calculatePointsForDiversity(){this.calculateBy((t,e)=>{let a=0,s=0;return t.diversity.forEach(t=>{t.percentage>10&&(a+=1)}),e.diversity.forEach(t=>{t.percentage>10&&(s+=1)}),e.bDiversityPoints-t.aDiversityPoints})}calculatePointsForJobs(){this.calculateBy((t,e)=>e.jobs-t.jobs,2)}setRankings(){Object.values(s).sort((t,e)=>t.points-e.points).forEach((t,e)=>{s[t.constant].ranking=e+1})}calculateBy(t,e=1){let a=Object.values(s).sort(t);console.log(e),a.forEach((t,a)=>s[t.constant].points+=a*e)}};document.addEventListener("DOMContentLoaded",()=>{new m,new h("svg.sunnyDays"),new b("svg.salary"),new y("svg.medianHomeCost"),new p("svg.diversity"),new u("svg.happiness"),new g("svg.map"),new x("svg.jobMarket"),new f})}]);