/*! grafana - v4.0.2 - 2016-12-21
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["angular","lodash"],function(a){var b,c,d;return{setters:[function(a){b=a},function(a){c=a}],execute:function(){d=function(){function a(a,b){var c=this;this.$rootScope=a,this.backendSrv=b,this.backendSrv.get("/api/dashboard/snapshots").then(function(a){c.snapshots=a})}return a.$inject=["$rootScope","backendSrv"],a.prototype.removeSnapshotConfirmed=function(a){var b=this;c["default"].remove(this.snapshots,{key:a.key}),this.backendSrv.get("/api/snapshots-delete/"+a.deleteKey).then(function(){b.$rootScope.appEvent("alert-success",["Snapshot deleted",""])},function(){b.$rootScope.appEvent("alert-error",["Unable to delete snapshot",""]),b.snapshots.push(a)})},a.prototype.removeSnapshot=function(a){var b=this;this.$rootScope.appEvent("confirm-modal",{title:"Delete",text:"Are you sure you want to delete snapshot "+a.name+"?",yesText:"Delete",icon:"fa-trash",onConfirm:function(){b.removeSnapshotConfirmed(a)}})},a}(),a("SnapshotsCtrl",d),b["default"].module("grafana.controllers").controller("SnapshotsCtrl",d)}}});