/*! grafana - v4.0.2 - 2016-12-21
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["angular","app/core/core_module","./exporter"],function(a){function b(){return{restrict:"E",templateUrl:"public/app/features/dashboard/export/export_modal.html",controller:f,bindToController:!0,controllerAs:"ctrl"}}var c,d,e,f;return a("dashExportDirective",b),{setters:[function(a){c=a},function(a){d=a},function(a){e=a}],execute:function(){f=function(){function a(a,b,c,d){var f=this;this.backendSrv=a,this.exporter=new e.DashboardExporter(c),this.exporter.makeExportable(b.getCurrent()).then(function(a){d.$apply(function(){f.dash=a})})}return a.$inject=["backendSrv","dashboardSrv","datasourceSrv","$scope"],a.prototype.save=function(){var a=new Blob([c["default"].toJson(this.dash,!0)],{type:"application/json;charset=utf-8"}),b=window;b.saveAs(a,this.dash.title+"-"+(new Date).getTime()+".json")},a.prototype.saveJson=function(){var a=c["default"].toJson(this.dash,!0),b="data:application/json,"+encodeURIComponent(a);window.open(b)},a}(),a("DashExportCtrl",f),d["default"].directive("dashExportModal",b)}}});