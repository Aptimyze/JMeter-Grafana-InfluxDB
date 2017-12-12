/*! grafana - v4.0.2 - 2016-12-21
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular","lodash","moment","app/core/utils/kbn","./query_builder","./index_pattern","./elastic_response","./query_ctrl"],function(a,b,c,d,e,f,g){"use strict";function h(d,h,i,j,k){this.basicAuth=d.basicAuth,this.withCredentials=d.withCredentials,this.url=d.url,this.name=d.name,this.index=d.index,this.timeField=d.jsonData.timeField,this.esVersion=d.jsonData.esVersion,this.indexPattern=new f(d.index,d.jsonData.interval),this.interval=d.jsonData.timeInterval,this.queryBuilder=new e({timeField:this.timeField,esVersion:this.esVersion}),this._request=function(a,b,c){var d={url:this.url+"/"+b,method:a,data:c};return(this.basicAuth||this.withCredentials)&&(d.withCredentials=!0),this.basicAuth&&(d.headers={Authorization:this.basicAuth}),i.datasourceRequest(d)},this._get=function(a){var c=k.timeRange(),d=this.indexPattern.getIndexList(c.from.valueOf(),c.to.valueOf());return b.isArray(d)&&d.length?this._request("GET",d[0]+a).then(function(a){return a.data.$$config=a.config,a.data}):this._request("GET",this.indexPattern.getIndexForToday()+a).then(function(a){return a.data.$$config=a.config,a.data})},this._post=function(a,b){return this._request("POST",a,b).then(function(a){return a.data.$$config=a.config,a.data})},this.annotationQuery=function(d){var e=d.annotation,f=e.timeField||"@timestamp",g=e.query||"*",h=e.tagsField||"tags",i=e.titleField||"desc",k=e.textField||null,l={};l[f]={from:d.range.from.valueOf(),to:d.range.to.valueOf()},this.esVersion>=2&&(l[f].format="epoch_millis");var m=j.replace(g,{},"lucene"),n={bool:{must:[{range:l}]}},o={bool:{should:[{query_string:{query:m}}]}},p={fields:[f,"_source"],query:{filtered:{query:o,filter:n}},size:1e4},q={search_type:"query_then_fetch",ignore_unavailable:!0};e.index?q.index=e.index:q.index=this.indexPattern.getIndexList(d.range.from,d.range.to);var r=a.toJson(q)+"\n"+a.toJson(p)+"\n";return this._post("_msearch",r).then(function(a){for(var d=[],g=a.responses[0].hits.hits,j=function(a,c){if(c){for(var d=c.split("."),e=a,f=0;f<d.length;f++)if(e=e[d[f]],!e)return console.log("could not find field in annotation: ",c),"";return b.isArray(e)&&(e=e.join(", ")),e}},l=0;l<g.length;l++){var m=g[l]._source,n=g[l].fields,o=m[f];(b.isString(n[f])||b.isNumber(n[f]))&&(o=n[f]);var p={annotation:e,time:c.utc(o).valueOf(),title:j(m,i),tags:j(m,h),text:j(m,k)};d.push(p)}return d})},this.testDatasource=function(){return this._get("/_stats").then(function(){return{status:"success",message:"Data source is working",title:"Success"}},function(b){return b.data&&b.data.error?{status:"error",message:a.toJson(b.data.error),title:"Error"}:{status:"error",message:b.status,title:"Error"}})},this.getQueryHeader=function(b,c,d){var e={search_type:b,ignore_unavailable:!0};return e.index=this.indexPattern.getIndexList(c,d),a.toJson(e)},this.query=function(b){for(var c,d="",e=[],f=j.getAdhocFilters(this.name),i=0;i<b.targets.length;i++)if(c=b.targets[i],!c.hide){var k=this.queryBuilder.build(c,f),l=a.toJson(k),m=c.query||"*";m=j.replace(m,b.scopedVars,"lucene"),m=a.toJson(m),m=m.substr(1,m.length-2),l=l.replace("$lucene_query",m);var n=0===k.size?"count":"query_then_fetch",o=this.getQueryHeader(n,b.range.from,b.range.to);d+=o+"\n",d+=l+"\n",e.push(c)}return 0===e.length?h.when([]):(d=d.replace(/\$interval/g,b.interval),d=d.replace(/\$timeFrom/g,b.range.from.valueOf()),d=d.replace(/\$timeTo/g,b.range.to.valueOf()),d=j.replace(d,b.scopedVars),this._post("_msearch",d).then(function(a){return new g(e,a).getTimeSeries()}))},this.getFields=function(a){return this._get("/_mapping").then(function(c){function d(b){for(var c in b){var h=b[c];if(h.hasOwnProperty("properties"))f.push(c),d(h.properties);else{var i=f.concat(c).join(".");"_"!==c[0]&&(!a.type||a.type&&e[h.type]===a.type)&&(g[i]={text:i,type:h.type})}}f.pop()}var e={"float":"number","double":"number",integer:"number","long":"number",date:"date",string:"string",nested:"nested"},f=[],g={};for(var h in c){var i=c[h];if(i&&i.mappings){var j=i.mappings;for(var k in j){var l=j[k].properties;d(l)}}}return b.map(g,function(a){return a})})},this.getTerms=function(c){var d=k.timeRange(),e=this.getQueryHeader("count",d.from,d.to),f=a.toJson(this.queryBuilder.getTermsQuery(c));return f=f.replace(/\$timeFrom/g,d.from.valueOf()),f=f.replace(/\$timeTo/g,d.to.valueOf()),f=e+"\n"+f+"\n",this._post("_msearch?search_type=count",f).then(function(a){if(!a.responses[0].aggregations)return[];var c=a.responses[0].aggregations[1].buckets;return b.map(c,function(a){return{text:a.key,value:a.key}})})},this.metricFindQuery=function(b){return b=a.fromJson(b),b.query=j.replace(b.query||"*",{},"lucene"),b?"fields"===b.find?this.getFields(b):"terms"===b.find?this.getTerms(b):void 0:h.when([])},this.getTagKeys=function(){return this.getFields({})},this.getTagValues=function(a){return this.getTerms({field:a.key,query:"*"})}}return h.$inject=["instanceSettings","$q","backendSrv","templateSrv","timeSrv"],{ElasticDatasource:h}});