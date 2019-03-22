!function(t){var e={};function a(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=e,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(r,i,function(e){return t[e]}.bind(null,i));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=0)}([function(t,e,a){"use strict";a.r(e);var r=class{constructor(){this.data=[{city:"San Francisco",days:256,color:"#f1c40f"},{city:"New York",days:224,color:"#2980b9"},{city:"Boston",days:200,color:"#e74c3c"},{city:"Miami",days:248,color:"#e67e22"},{city:"Seattle",days:152,color:"#1abc9c"},{city:"Houston",days:204,color:"#34495e"},{city:"San Jose",days:257,color:"#9b59b6"},{city:"Raleigh",days:213,color:"#f39c12"},{city:"Denver",days:245,color:"#2980b9"},{city:"Phoenix",days:299,color:"#c0392b"}],this.render()}render(){const t=d3.select("svg.sunnyDays").attr("height",400).attr("width",400).append("g").attr("transform","translate(100, 100)"),e=d3.scaleLinear().domain([150,300]).range([0,200]);t.append("g").call(d3.axisBottom(e)).attr("transform","translate(0, 200)");const a=d3.scaleBand().domain(this.data.map(t=>t.city)).range([0,200]).padding(.1);t.append("g").call(d3.axisLeft(a)),t.selectAll().data(this.data).enter().append("rect").attr("x",1).attr("y",t=>a(t.city)).attr("height",a.bandwidth()).attr("width",t=>e(t.days)).style("fill",t=>t.color),t.append("g").attr("class","grid").call(d3.axisTop().scale(e).tickSize(-200,0,0).tickFormat("")),t.append("text").attr("x",100).attr("y",250).attr("text-anchor","middle").text("Days"),t.append("text").attr("x",100).attr("y",-20).attr("text-anchor","middle").text("Sunny days per year")}};var i=class{constructor(){this.data=[{city:"San Francisco",cost:1331100,color:"#f1c40f"},{city:"New York",cost:662100,color:"#2980b9"},{city:"Boston",cost:587e3,color:"#e74c3c"},{city:"Miami",cost:326e3,color:"#e67e22"},{city:"Seattle",cost:761800,color:"#1abc9c"},{city:"Houston",cost:175700,color:"#34495e"},{city:"San Jose",cost:1083e3,color:"#9b59b6"},{city:"Raleigh",cost:260100,color:"#f39c12"},{city:"Denver",cost:421900,color:"#2980b9"},{city:"Phoenix",cost:229300,color:"#c0392b"}],this.render()}render(){const t=d3.select("svg.medianHomeCost").attr("height",400).attr("width",400).append("g").attr("transform","translate(100, 100)"),e=d3.scaleLinear().domain([0,14]).range([0,200]);t.append("g").call(d3.axisBottom(e)).attr("transform","translate(0, 200)");const a=d3.scaleBand().domain(this.data.map(t=>t.city)).range([0,200]).padding(.1);t.append("g").call(d3.axisLeft(a)),t.append("text").attr("x",100).attr("y",250).attr("text-anchor","middle").text("in $100,000"),t.append("text").attr("x",100).attr("y",-20).attr("text-anchor","middle").text("Median Home Price"),t.selectAll().data(this.data).enter().append("rect").attr("x",1).attr("y",t=>a(t.city)).attr("height",a.bandwidth()).attr("width",t=>e(t.cost)/1e5).style("fill",t=>t.color),t.append("g").attr("class","grid").call(d3.axisTop().scale(e).tickSize(-200,0,0).tickFormat(""))}};var c=class{constructor(){this.ethnicities=["White","Asian","Hispanic","Black"],this.data=[{city:"San Francisco",color:"#f1c40f",values:[{ethnicity:"White",percentage:41.4},{ethnicity:"Asian",percentage:33.3},{ethnicity:"Hispanic",percentage:15.3},{ethnicity:"Black",percentage:5.5}]},{city:"New York",color:"#2980b9",values:[{ethnicity:"White",percentage:32.7},{ethnicity:"Asian",percentage:13.2},{ethnicity:"Hispanic",percentage:28.8},{ethnicity:"Black",percentage:22.6}]},{city:"Boston",color:"#e74c3c",values:[{ethnicity:"White",percentage:46},{ethnicity:"Asian",percentage:9.1},{ethnicity:"Hispanic",percentage:18.4},{ethnicity:"Black",percentage:22.7}]},{city:"Miami",color:"#e67e22",values:[{ethnicity:"White",percentage:11.1},{ethnicity:"Asian",percentage:.8},{ethnicity:"Hispanic",percentage:70.7},{ethnicity:"Black",percentage:16.7}]},{city:"Seattle",color:"#1abc9c",values:[{ethnicity:"White",percentage:66.2},{ethnicity:"Asian",percentage:14.2},{ethnicity:"Hispanic",percentage:6.4},{ethnicity:"Black",percentage:7.2}]},{city:"Houston",color:"#34495e",values:[{ethnicity:"White",percentage:22.5},{ethnicity:"Asian",percentage:6.3},{ethnicity:"Hispanic",percentage:43.9},{ethnicity:"Black",percentage:22.8}]},{city:"San Jose",color:"#9b59b6",values:[{ethnicity:"White",percentage:27.5},{ethnicity:"Asian",percentage:32.9},{ethnicity:"Hispanic",percentage:33.1},{ethnicity:"Black",percentage:2.9}]},{city:"Raleigh",color:"#f39c12",values:[{ethnicity:"White",percentage:54},{ethnicity:"Asian",percentage:4.3},{ethnicity:"Hispanic",percentage:10.9},{ethnicity:"Black",percentage:28.5}]},{city:"Denver",color:"#2980b9",values:[{ethnicity:"White",percentage:52.9},{ethnicity:"Asian",percentage:3.4},{ethnicity:"Hispanic",percentage:31.2},{ethnicity:"Black",percentage:9.5}]},{city:"Phoenix",color:"#c0392b",values:[{ethnicity:"White",percentage:46},{ethnicity:"Asian",percentage:3.3},{ethnicity:"Hispanic",percentage:40.5},{ethnicity:"Black",percentage:6.5}]}],this.render()}render(){const t=d3.select("svg.diversity").attr("height",400).attr("width",400),e=t.append("g").attr("transform","translate(100, 100)"),a=d3.scaleBand().domain(this.ethnicities).range([0,200]).padding(.1);e.append("g").call(d3.axisBottom(a)).attr("transform","translate(0, 200)");const r=d3.scaleLinear().domain([70,0]).range([0,200]);e.append("g").call(d3.axisLeft(r));let i=d3.line().x(t=>a(t.ethnicity)).y(t=>r(t.percentage)),c=t.append("g").attr("class","lines");c.selectAll(".line-group").data(this.data).enter().append("g").append("path").attr("transform","translate(122, 100)").attr("class",t=>`line ${t.city} diversity-${t.city}`).style("opacity",.5).attr("d",t=>i(t.values)).style("stroke",t=>t.color).on("mouseover",function(e){t.append("text").attr("class","title-text").text(e.city).attr("text-anchor","middle").attr("x",250).attr("y",75)}).on("mouseenter",function(){d3.selectAll(".line").style("opacity",.25),d3.selectAll(".circle circle").style("opacity",.25),d3.select(this).style("opacity",1).style("cursor","pointer").style("stroke-width",3)}).on("mouseout",function(){t.select(".title-text").remove(),d3.selectAll(".circle circle").style("opacity",.5),d3.selectAll(".line").style("opacity",.5).style("stroke-width",1)}),c.selectAll("circle-group").data(this.data).enter().append("g").style("fill",t=>t.color).selectAll("circle").data(t=>t.values).enter().append("g").attr("class","circle").append("circle").attr("transform","translate(122, 100)").attr("cx",t=>a(t.ethnicity)).attr("cy",t=>r(t.percentage)).attr("r",5).style("opacity",.5).on("mouseover",function(e){t.append("text").text(e.percentage).attr("class","percentage-text").attr("text-anchor","middle").attr("x",250).attr("y",75),d3.select(this).style("opacity",1)}).on("mouseout",function(e){t.select(".percentage-text").remove(),d3.select(this).style("opacity",.5)}),e.append("text").attr("x",100).attr("y",250).attr("text-anchor","middle").text("Ethnicity"),e.append("text").attr("x",-100).attr("y",-50).attr("transform","rotate(-90)").attr("text-anchor","middle").text("% of population"),e.append("text").attr("x",100).attr("y",-20).attr("text-anchor","middle").text("Diversity")}};var n=class{constructor(){this.averageViolentCrime=22.7,this.averagePropertyCrime=35.4,this.data=[{city:"San Francisco",color:"#f1c40f",violentCrime:39.6,propertyCrime:79.2},{city:"New York",color:"#2980b9",violentCrime:28.2,propertyCrime:24.9},{city:"Boston",color:"#e74c3c",violentCrime:37.3,propertyCrime:35.8},{city:"Miami",color:"#e67e22",violentCrime:48.8,propertyCrime:62.7},{city:"Seattle",color:"#1abc9c",violentCrime:32.3,propertyCrime:76.9},{city:"Houston",color:"#34495e",violentCrime:50.4,propertyCrime:63.2},{city:"San Jose",color:"#9b59b6",violentCrime:25,propertyCrime:36.5},{city:"Raleigh",color:"#f39c12",violentCrime:20.3,propertyCrime:44.4},{city:"Denver",color:"#2980b9",violentCrime:30.7,propertyCrime:50.8},{city:"Phoenix",color:"#c0392b",violentCrime:37.5,propertyCrime:52.8}],this.render()}render(){const t=d3.select("svg.crimeRates").attr("height",400).attr("width",500).append("g").attr("transform","translate(100, 100)"),e=d3.scaleLinear().domain([20,80]).range([0,200]);t.append("g").call(d3.axisBottom(e)).attr("transform","translate(0, 200)");const a=d3.scaleBand().domain(this.data.map(t=>t.city)).range([0,200]).padding(.1);t.append("g").call(d3.axisLeft(a)),t.selectAll().data(this.data).enter().append("rect").attr("x",1).attr("y",t=>a(t.city)).attr("width",t=>e(t.violentCrime)).attr("height",a.bandwidth()/2).style("fill",t=>t.color).exit().data(this.data).enter().append("rect").attr("x",1).attr("y",t=>a(t.city)+a.bandwidth()/2).attr("width",t=>e(t.propertyCrime)).attr("height",a.bandwidth()/2).style("fill",t=>t.color).style("opacity",.6),t.append("text").attr("x",100).attr("y",-20).attr("text-anchor","middle").text("Crime Rates"),t.append("text").attr("x",-100).attr("y",-80).attr("text-anchor","middle").text("Violent / Property Crime").attr("transform","rotate(-90)"),t.append("text").attr("x",100).attr("y",250).text("Low to high crime").attr("text-anchor","middle"),t.append("g").attr("class","grid").call(d3.axisTop().scale(e).tickSize(-200,0,0).tickFormat("")),t.append("line").attr("x1",8).attr("y1",0).attr("x2",8).attr("y2",200).attr("stroke","red").style("opacity",.75),t.append("text").text("Average Violent Crime").attr("y",0).attr("x",0).style("font-size","10px").attr("transform","translate(8, 0), rotate(90)"),t.append("line").attr("x1",52).attr("y1",0).attr("x2",52).attr("y2",200).attr("stroke","red").style("opacity",.75),t.append("text").text("Average Property Crime").attr("y",0).attr("x",0).style("font-size","10px").attr("transform","translate(52, 0), rotate(90)")}};var o=class{};document.addEventListener("DOMContentLoaded",()=>{new r,new i,new c,new n,new o})}]);