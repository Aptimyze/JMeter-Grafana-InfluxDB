/*! grafana - v4.4.1 - 2017-07-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular","app/core/config"],function(a,b){"use strict";var c=a.module("grafana.controllers");c.controller("ChangePasswordCtrl",["$scope","backendSrv","$location","navModelSrv",function(a,c,d,e){a.command={},a.authProxyEnabled=b.authProxyEnabled,a.ldapEnabled=b.ldapEnabled,a.navModel=e.getProfileNav(),a.changePassword=function(){if(a.userForm.$valid)return a.command.newPassword!==a.command.confirmNew?void a.appEvent("alert-warning",["New passwords do not match",""]):void c.put("/api/user/password",a.command).then(function(){d.path("profile")})}}])});