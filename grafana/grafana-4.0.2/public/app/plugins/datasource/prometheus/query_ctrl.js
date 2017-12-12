/*! grafana - v4.0.2 - 2016-12-21
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["angular","lodash","app/plugins/sdk"],function(a){var b,c,d,e,f=this&&this.__extends||function(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)};return{setters:[function(a){b=a},function(a){c=a},function(a){d=a}],execute:function(){e=function(a){function d(b,d,e){var f=this;a.call(this,b,d),this.templateSrv=e;var g=this.target;g.expr=g.expr||"",g.intervalFactor=g.intervalFactor||2,this.metric="",this.resolutions=c["default"].map([1,2,3,4,5,10],function(a){return{factor:a,label:"1/"+a}}),b.$on("typeahead-updated",function(){f.$scope.$apply(function(){f.target.expr+=f.target.metric,f.metric="",f.refreshMetricData()})}),this.suggestMetrics=function(a,b){console.log(f),f.datasource.performSuggestQuery(a).then(b)},this.updateLink()}return f(d,a),d.$inject=["$scope","$injector","templateSrv"],d.prototype.refreshMetricData=function(){c["default"].isEqual(this.oldTarget,this.target)||(this.oldTarget=b["default"].copy(this.target),this.panelCtrl.refresh(),this.updateLink())},d.prototype.updateLink=function(){var a=this.panelCtrl.range;if(a){var b=Math.ceil((a.to.valueOf()-a.from.valueOf())/1e3),c=a.to.utc().format("YYYY-MM-DD HH:mm"),d={expr:this.templateSrv.replace(this.target.expr,this.panelCtrl.panel.scopedVars,this.datasource.interpolateQueryExpr),range_input:b+"s",end_input:c,step_input:this.target.step,stacked:this.panelCtrl.panel.stack,tab:0},e=encodeURIComponent(JSON.stringify([d]));this.linkToPrometheus=this.datasource.directUrl+"/graph#"+e}},d.templateUrl="partials/query.editor.html",d}(d.QueryCtrl),a("PrometheusQueryCtrl",e)}}});