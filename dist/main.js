!function(t){var a={};function e(i){if(a[i])return a[i].exports;var s=a[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,e),s.l=!0,s.exports}e.m=t,e.c=a,e.d=function(t,a,i){e.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,a){if(1&a&&(t=e(t)),8&a)return t;if(4&a&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)e.d(i,s,function(a){return t[a]}.bind(null,s));return i},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},e.p="",e(e.s=0)}([function(t,a,e){"use strict";e.r(a);const i="SAN_FRANCISCO",s="NEW_YORK",r="BOSTON",n="MIAMI",c="SEATTLE",d="HOUSTON",l="SAN_JOSE",o="RALEIGN",h="DENVER",p="PHOENIX",y={SAN_FRANCISCO:{city:"San Francisco",color:"#f1c40f",class:"city-San-Francisco"},NEW_YORK:{city:"New York",color:"#2980b9",class:"city-New-York"},BOSTON:{city:"Boston",color:"#e74c3c",class:"city-Boston"},MIAMI:{city:"Miami",color:"#e67e22",class:"city-Miami"},SEATTLE:{city:"Seattle",color:"#1abc9c",class:"city-Seattle"},HOUSTON:{city:"Houston",color:"#34495e",class:"city-Houston"},SAN_JOSE:{city:"San Jose",color:"#9b59b6",class:"city-San-Jose"},RALEIGN:{city:"Raleign",color:"#f39c12",class:"city-Raleign"},DENVER:{city:"Denver",color:"#2980b9",class:"city-Denver"},PHOENIX:{city:"Phoenix",color:"#c0392b",class:"city-Phoenix"}},x=750,u=750,g=d3.easePoly,m=200,f=200,v=100;var b=class{constructor(){this.data=y,this.data[i].days=256,this.data[s].days=224,this.data[n].days=248,this.data[r].days=200,this.data[c].days=152,this.data[d].days=204,this.data[l].days=204,this.data[o].days=213,this.data[h].days=245,this.data[p].days=299,this.render()}render(){const t=d3.select("svg.sunnyDays").attr("height",f+2*v).attr("width",m+2*v).append("g").attr("transform",`translate(${v}, ${v})`),a=d3.scaleLinear().domain([150,300]).range([0,m]);t.append("g").call(d3.axisBottom(a)).attr("transform",`translate(0, ${f})`);const e=d3.scaleBand().domain(Object.values(this.data).map(t=>t.city)).range([0,m]).padding(.1);t.append("g").call(d3.axisLeft(e)),t.selectAll().data(Object.values(this.data)).enter().append("rect").attr("class",t=>`city ${t.class}`).attr("x",1).attr("y",t=>e(t.city)).attr("height",e.bandwidth()).style("fill",t=>t.color).transition().ease(g).delay((t,a)=>a*u).duration(x).attr("width",t=>a(t.days)),t.append("g").attr("class","grid").call(d3.axisTop().scale(a).tickSize(-m,0,0).tickFormat("")),t.append("text").attr("class","label-text").attr("x",m/2).attr("y",f+50).attr("text-anchor","middle").text("Days"),t.append("text").attr("class","label-text").attr("x",m/2).attr("y",-20).attr("text-anchor","middle").text("Sunny days per year")}};var j=class{constructor(){this.data=y,this.data[i].cost=1331100,this.data[s].cost=662100,this.data[r].cost=587e3,this.data[n].cost=326e3,this.data[c].cost=761800,this.data[d].cost=175700,this.data[l].cost=1083e3,this.data[o].cost=260100,this.data[h].cost=421900,this.data[p].cost=229300,this.render()}render(){const t=d3.select("svg.medianHomeCost").attr("height",f+2*v).attr("width",m+2*v).append("g").attr("transform","translate(100, 100)"),a=d3.scaleLinear().domain([0,14]).range([0,m]);t.append("g").call(d3.axisBottom(a)).attr("transform",`translate(0, ${f})`);const e=d3.scaleBand().domain(Object.values(this.data).map(t=>t.city)).range([0,f]).padding(.1);t.append("g").call(d3.axisLeft(e)),t.append("text").attr("class","label-text").attr("x",m/2).attr("y",f+50).attr("text-anchor","middle").text("in $100,000"),t.append("text").attr("class","label-text").attr("x",m/2).attr("y",-20).attr("text-anchor","middle").text("Median Home Price"),t.selectAll().data(Object.values(this.data)).enter().append("rect").attr("class",t=>`city ${t.class}`).attr("x",1).attr("y",t=>e(t.city)).attr("height",e.bandwidth()).style("fill",t=>t.color).transition().ease(g).delay((t,a)=>a*u).duration(x).attr("width",t=>a(t.cost)/1e5),t.append("g").attr("class","grid").call(d3.axisTop().scale(a).tickSize(-m,0,0).tickFormat(""))}};var A=class{constructor(){this.ethnicities=["White","Asian","Hispanic","Black"],this.data=y,this.data[i].values=[{ethnicity:"White",percentage:41.4},{ethnicity:"Asian",percentage:33.3},{ethnicity:"Hispanic",percentage:15.3},{ethnicity:"Black",percentage:5.5}],this.data[s].values=[{ethnicity:"White",percentage:32.7},{ethnicity:"Asian",percentage:13.2},{ethnicity:"Hispanic",percentage:28.8},{ethnicity:"Black",percentage:22.6}],this.data[r].values=[{ethnicity:"White",percentage:46},{ethnicity:"Asian",percentage:9.1},{ethnicity:"Hispanic",percentage:18.4},{ethnicity:"Black",percentage:22.7}],this.data[n].values=[{ethnicity:"White",percentage:11.1},{ethnicity:"Asian",percentage:.8},{ethnicity:"Hispanic",percentage:70.7},{ethnicity:"Black",percentage:16.7}],this.data[c].values=[{ethnicity:"White",percentage:66.2},{ethnicity:"Asian",percentage:14.2},{ethnicity:"Hispanic",percentage:6.4},{ethnicity:"Black",percentage:7.2}],this.data[d].values=[{ethnicity:"White",percentage:22.5},{ethnicity:"Asian",percentage:6.3},{ethnicity:"Hispanic",percentage:43.9},{ethnicity:"Black",percentage:22.8}],this.data[l].values=[{ethnicity:"White",percentage:27.5},{ethnicity:"Asian",percentage:32.9},{ethnicity:"Hispanic",percentage:33.1},{ethnicity:"Black",percentage:2.9}],this.data[o].values=[{ethnicity:"White",percentage:54},{ethnicity:"Asian",percentage:4.3},{ethnicity:"Hispanic",percentage:10.9},{ethnicity:"Black",percentage:28.5}],this.data[h].values=[{ethnicity:"White",percentage:52.9},{ethnicity:"Asian",percentage:3.4},{ethnicity:"Hispanic",percentage:31.2},{ethnicity:"Black",percentage:9.5}],this.data[p].values=[{ethnicity:"White",percentage:46},{ethnicity:"Asian",percentage:3.3},{ethnicity:"Hispanic",percentage:40.5},{ethnicity:"Black",percentage:6.5}],this.render()}render(){const t=d3.select("svg.diversity").attr("height",f+2*v).attr("width",m+2*v),a=t.append("g").attr("transform","translate(100, 100)"),e=d3.scaleBand().domain(this.ethnicities).range([0,m]).padding(.1);a.append("g").call(d3.axisBottom(e)).attr("transform",`translate(0, ${f})`);const i=d3.scaleLinear().domain([70,0]).range([0,f]);a.append("g").call(d3.axisLeft(i));let s=d3.line().x(t=>e(t.ethnicity)).y(t=>i(t.percentage));t.append("g").attr("class","lines").selectAll(".line-group").data(Object.values(this.data)).enter().append("g").append("path").attr("transform","translate(122, 100)").attr("class",t=>`line city ${t.class}`).attr("d",t=>s(t.values)).style("stroke",t=>t.color).style("stroke-width",5).style("stroke-linecap","round"),a.append("text").attr("class","label-text").attr("x",m/2).attr("y",f+50).attr("text-anchor","middle").text("Ethnicity"),a.append("text").attr("class","label-text").attr("x",-m/2).attr("y",-50).attr("transform","rotate(-90)").attr("text-anchor","middle").text("% of population"),a.append("text").attr("class","label-text").attr("x",m/2).attr("y",-20).attr("text-anchor","middle").text("Diversity"),a.append("g").attr("class","grid").call(d3.axisLeft().scale(i).tickSize(-m,0,0).tickFormat(""))}};var O=class{constructor(){this.averageViolentCrime=22.7,this.averagePropertyCrime=35.4,this.data=y,this.data[i].violentCrime=39.6,this.data[s].violentCrime=28.2,this.data[r].violentCrime=37.3,this.data[n].violentCrime=48.8,this.data[c].violentCrime=32.3,this.data[d].violentCrime=50.4,this.data[l].violentCrime=25,this.data[o].violentCrime=20.3,this.data[h].violentCrime=30.7,this.data[p].violentCrime=37.5,this.data[i].propertyCrime=79.2,this.data[s].propertyCrime=24.9,this.data[r].propertyCrime=35.8,this.data[n].propertyCrime=62.7,this.data[c].propertyCrime=76.9,this.data[d].propertyCrime=63.2,this.data[l].propertyCrime=36.5,this.data[o].propertyCrime=44.4,this.data[h].propertyCrime=50.8,this.data[p].propertyCrime=52.8,this.render()}render(){const t=d3.select("svg.crimeRates").attr("height",f+2*v).attr("width",m+2*v+100).append("g").attr("transform",`translate(${v}, ${v})`),a=d3.scaleLinear().domain([20,80]).range([0,m]);t.append("g").call(d3.axisBottom(a)).attr("transform",`translate(0, ${f})`);const e=d3.scaleBand().domain(Object.values(this.data).map(t=>t.city)).range([0,f]).padding(.1);t.append("g").call(d3.axisLeft(e)),t.selectAll().data(Object.values(this.data)).enter().append("rect").attr("x",1).attr("y",t=>e(t.city)).attr("height",e.bandwidth()/2).style("fill",t=>t.color).attr("class",t=>`city ${t.class}`).transition().delay((t,a)=>a*u).duration(x).ease(g).attr("width",t=>a(t.violentCrime)),t.selectAll().data(Object.values(this.data)).enter().append("rect").attr("x",1).attr("y",t=>e(t.city)+e.bandwidth()/2+1).attr("height",e.bandwidth()/2).style("fill",t=>t.color).attr("class",t=>`city ${t.class}`).transition().delay((t,a)=>a*u).duration(x).ease(g).attr("width",t=>a(t.propertyCrime)),t.append("text").attr("class","label-text").attr("x",m/2).attr("y",-20).attr("text-anchor","middle").text("Crime Rates"),t.append("text").attr("class","label-text").attr("x",-f/2).attr("y",-80).attr("text-anchor","middle").text("Violent / Property Crime").attr("transform","rotate(-90)"),t.append("text").attr("class","label-text").attr("x",m/2).attr("y",f+50).text("Low to high crime").attr("text-anchor","middle"),t.append("g").attr("class","grid").call(d3.axisTop().scale(a).tickSize(-m,0,0).tickFormat("")),t.append("line").attr("x1",8).attr("y1",0).attr("x2",8).attr("y2",m).attr("stroke","red").style("opacity",.75),t.append("text").attr("class","label-text").text("Average Violent Crime").attr("y",0).attr("x",0).style("font-size","10px").attr("transform","translate(8, 0), rotate(90)"),t.append("line").attr("x1",52).attr("y1",0).attr("x2",52).attr("y2",m).attr("stroke","red").style("opacity",.75),t.append("text").attr("class","label-text").text("Average Property Crime").attr("y",0).attr("x",0).style("font-size","10px").attr("transform","translate(52, 0), rotate(90)")}};var S=class{constructor(){this.data=y,this.data[i].position={x:20,y:160},this.data[s].position={x:650,y:135},this.data[n].position={x:600,y:350},this.data[r].position={x:680,y:100},this.data[c].position={x:40,y:40},this.data[d].position={x:340,y:350},this.data[l].position={x:35,y:190},this.data[o].position={x:610,y:210},this.data[h].position={x:250,y:170},this.data[p].position={x:150,y:255},this.render()}render(){const t=d3.select("svg.map");t.selectAll("circle").data(Object.values(this.data)).enter().append("circle").attr("cx",300).attr("cy",150).attr("r",10).on("mouseenter",(t,a)=>{document.querySelectorAll(`.city:not(.${t.class})`).forEach(t=>{t.classList.add("filter")})}).on("mouseout",()=>{document.querySelectorAll(".city").forEach(t=>{t.classList.remove("filter")})}).style("opacity",0).style("fill",t=>t.color).transition().ease(g).delay((t,a)=>a*u).duration(x).attr("cy",t=>t.position.y).attr("cx",t=>t.position.x).style("opacity",1).style("cursor","pointer").attr("class",t=>`city ${t.class} city-pinpoint`),t.selectAll("text").data(Object.values(this.data)).enter().append("text").attr("opacity",0).attr("class",t=>`map-city-label city ${t.class}`).text(t=>t.city).style("font-size",14).attr("fill",t=>t.color).on("mouseenter",(t,a)=>{document.querySelectorAll(`.city:not(.${t.class})`).forEach(t=>{t.classList.add("filter")})}).on("mouseleave",()=>{document.querySelectorAll(".city").forEach(t=>{t.classList.remove("filter")})}).transition().ease(g).delay((t,a)=>a*u).duration(x/1.5).attr("opacity",1).attr("x",t=>"New York"===t.city?t.position.x-75:"Boston"===t.city?t.position.x-60:t.position.x+15).attr("y",t=>t.position.y+5)}};var C=class{constructor(){this.data=y,this.data[i].jobs=7947,this.data[s].jobs=8364,this.data[r].jobs=3630,this.data[n].jobs=602,this.data[c].jobs=10417,this.data[d].jobs=2909,this.data[l].jobs=3023,this.data[o].jobs=1377,this.data[h].jobs=1973,this.data[p].jobs=1491,this.render()}render(){const t=d3.select("svg.jobMarket").attr("height",f+2*v).attr("width",m+2*v).append("g").attr("transform",`translate(${v+70}, ${v+100})`),a=Math.min(m,f)/2;var e=d3.pie().value(t=>t.jobs);let i=d3.arc().innerRadius(a/2).outerRadius(a),s=d3.arc().innerRadius(a/2).outerRadius(a+110),r=d3.arc().innerRadius(a/2).outerRadius(a);t.selectAll().data(e(Object.values(this.data))).enter().append("path").transition().ease(g).delay((t,a)=>a*u).duration(x).attr("d",i).attr("fill",t=>t.data.color).attr("class",t=>`city ${t.data.class}`),t.selectAll().data(e(Object.values(this.data))).enter().append("text").attr("class",t=>`city ${t.data.class}`).attr("text-anchor","middle").attr("transform",t=>`translate(${s.centroid(t)})`).transition().ease(g).delay((t,a)=>a*u).duration(x).text(t=>t.data.city),t.selectAll().data(e(Object.values(this.data))).enter().append("text").attr("class",t=>`city ${t.data.class}`).attr("text-anchor","middle").attr("transform",t=>`translate(${r.centroid(t)})`).transition().ease(g).delay((t,a)=>a*u).duration(x).text(t=>t.data.jobs)}};var w=class{constructor(){this.data=y,this.data[i].salary=12e4,this.data[i].adjusted=99751,this.data[s].salary=11e4,this.data[s].adjusted=1e5,this.data[n].salary=11e4,this.data[n].adjusted=1e5,this.data[r].salary=1e5,this.data[r].adjusted=90171,this.data[c].salary=113242,this.data[c].adjusted=105735,this.data[d].salary=85e3,this.data[d].adjusted=84493,this.data[l].salary=122500,this.data[l].adjusted=100989,this.data[o].salary=94142,this.data[o].adjusted=9e4,this.data[h].salary=9e4,this.data[h].adjusted=85878,this.data[p].salary=87997,this.data[p].adjusted=86765,this.render()}render(){const t=d3.select("svg.salary").attr("height",f+2*v).attr("width",m+2*v).append("g").attr("transform",`translate(${v}, ${v})`),a=d3.scaleLinear().domain([85,125]).range([0,m]);t.append("g").call(d3.axisBottom(a)).attr("transform",`translate(0, ${f})`);const e=d3.scaleBand().domain(Object.values(this.data).map(t=>t.city)).range([0,m]).padding(.1);t.append("g").call(d3.axisLeft(e)),t.selectAll().data(Object.values(this.data)).enter().append("rect").attr("class",t=>`city ${t.class}`).attr("x",1).attr("y",t=>e(t.city)).attr("height",e.bandwidth()).style("fill","#bbb").transition().ease(g).delay((t,a)=>a*u).duration(x).attr("width",t=>a(t.salary/1e3)),t.selectAll().data(Object.values(this.data)).enter().append("rect").attr("class",t=>`city ${t.class}`).attr("x",1).attr("y",t=>e(t.city)).attr("height",e.bandwidth()).style("fill",t=>t.color).transition().ease(g).delay((t,a)=>a*u).duration(x).attr("width",t=>a(t.adjusted/1e3)),t.append("g").attr("class","grid").call(d3.axisTop().scale(a).tickSize(-m,0,0).tickFormat("")),t.append("text").attr("class","label-text").attr("x",m/2).attr("y",f+50).attr("text-anchor","middle").text("in $1,000"),t.append("text").attr("class","label-text").attr("x",m/2).attr("y",-20).attr("text-anchor","middle").text("Adjusted Salary")}};document.addEventListener("DOMContentLoaded",()=>{new b,new j,new A,new O,new S,new C,new w})}]);