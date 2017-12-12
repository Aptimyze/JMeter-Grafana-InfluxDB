/*! grafana - v4.0.2 - 2016-12-21
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["./editor_ctrl","angular","lodash","app/core/core_module"],function(a){var b,c,d,e;return{setters:[function(a){},function(a){b=a},function(a){c=a},function(a){d=a}],execute:function(){e=function(){function a(a,b,c,d,e){this.$rootScope=a,this.$q=b,this.datasourceSrv=c,this.backendSrv=d,this.timeSrv=e,a.onAppEvent("refresh",this.clearCache.bind(this),a),a.onAppEvent("dashboard-initialized",this.clearCache.bind(this),a)}return a.$inject=["$rootScope","$q","datasourceSrv","backendSrv","timeSrv"],a.prototype.clearCache=function(){this.globalAnnotationsPromise=null,this.alertStatesPromise=null},a.prototype.getAnnotations=function(a){var b=this;return this.$q.all([this.getGlobalAnnotations(a),this.getPanelAnnotations(a),this.getAlertStates(a)]).then(function(b){var d=c["default"].flattenDeep([b[0],b[1]]),e=c["default"].find(b[2],{panelId:a.panel.id});return{annotations:d,alertState:e}})["catch"](function(a){b.$rootScope.appEvent("alert-error",["Annotations failed",a.message||a])})},a.prototype.getPanelAnnotations=function(a){var b=this,c=a.panel,d=a.dashboard;return c&&c.alert?this.backendSrv.get("/api/annotations",{from:a.range.from.valueOf(),to:a.range.to.valueOf(),limit:100,panelId:c.id,dashboardId:d.id}).then(function(a){return b.translateQueryResult({iconColor:"#AA0000",name:"panel-alert"},a)}):this.$q.when([])},a.prototype.getAlertStates=function(a){return a.dashboard.id?a.panel&&!a.panel.alert?this.$q.when([]):"now"!==a.range.raw.to?this.$q.when([]):this.alertStatesPromise?this.alertStatesPromise:(this.alertStatesPromise=this.backendSrv.get("/api/alerts/states-for-dashboard",{dashboardId:a.dashboard.id}),this.alertStatesPromise):this.$q.when([])},a.prototype.getGlobalAnnotations=function(a){var d=this,e=a.dashboard;if(0===e.annotations.list.length)return this.$q.when([]);if(this.globalAnnotationsPromise)return this.globalAnnotationsPromise;var f=c["default"].filter(e.annotations.list,{enable:!0}),g=this.timeSrv.timeRange();return this.globalAnnotationsPromise=this.$q.all(c["default"].map(f,function(a){return a.snapshotData?d.translateQueryResult(a,a.snapshotData):d.datasourceSrv.get(a.datasource).then(function(b){return b.annotationQuery({range:g,rangeRaw:g.raw,annotation:a})}).then(function(c){return e.snapshot&&(a.snapshotData=b["default"].copy(c)),d.translateQueryResult(a,c)})})),this.globalAnnotationsPromise},a.prototype.translateQueryResult=function(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.source=a,d.min=d.time,d.max=d.time,d.scope=1,d.eventType=a.name}return b},a}(),a("AnnotationsSrv",e),d["default"].service("annotationsSrv",e)}}});