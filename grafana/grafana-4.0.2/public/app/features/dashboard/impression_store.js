/*! grafana - v4.0.2 - 2016-12-21
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["app/core/store","lodash","app/core/config"],function(a){var b,c,d,e,f;return{setters:[function(a){b=a},function(a){c=a},function(a){d=a}],execute:function(){e=function(){function a(){}return a.prototype.addDashboardImpression=function(a){var e=this.impressionKey(d["default"]),f=[];b["default"].exists(e)&&(f=JSON.parse(b["default"].get(e)),c["default"].isArray(f)||(f=[])),f=f.filter(function(b){return a!==b}),f.unshift(a),f.length>50&&f.pop(),b["default"].set(e,JSON.stringify(f))},a.prototype.getDashboardOpened=function(){var a=b["default"].get(this.impressionKey(d["default"]))||"[]";return a=JSON.parse(a),a=c["default"].filter(a,function(a){return c["default"].isNumber(a)})},a.prototype.impressionKey=function(a){return"dashboard_impressions-"+a.bootData.user.orgId},a}(),a("ImpressionsStore",e),f=new e,a("impressions",f)}}});