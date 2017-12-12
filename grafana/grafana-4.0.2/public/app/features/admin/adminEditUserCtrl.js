/*! grafana - v4.0.2 - 2016-12-21
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular","lodash"],function(a,b){"use strict";var c=a.module("grafana.controllers");c.controller("AdminEditUserCtrl",["$scope","$routeParams","backendSrv","$location",function(a,c,d,e){a.user={},a.newOrg={name:"",role:"Editor"},a.permissions={},a.init=function(){c.id&&(a.getUser(c.id),a.getUserOrgs(c.id))},a.getUser=function(b){d.get("/api/users/"+b).then(function(c){a.user=c,a.user_id=b,a.permissions.isGrafanaAdmin=c.isGrafanaAdmin})},a.setPassword=function(){if(a.passwordForm.$valid){var b={password:a.password};d.put("/api/admin/users/"+a.user_id+"/password",b).then(function(){e.path("/admin/users")})}},a.updatePermissions=function(){var b=a.permissions;d.put("/api/admin/users/"+a.user_id+"/permissions",b).then(function(){e.path("/admin/users")})},a.create=function(){a.userForm.$valid&&d.post("/api/admin/users",a.user).then(function(){e.path("/admin/users")})},a.getUserOrgs=function(b){d.get("/api/users/"+b+"/orgs").then(function(b){a.orgs=b})},a.update=function(){a.userForm.$valid&&d.put("/api/users/"+a.user_id,a.user).then(function(){e.path("/admin/users")})},a.updateOrgUser=function(b){d.patch("/api/orgs/"+b.orgId+"/users/"+a.user_id,b).then(function(){})},a.removeOrgUser=function(b){d["delete"]("/api/orgs/"+b.orgId+"/users/"+a.user_id).then(function(){a.getUserOrgs(a.user_id)})},a.orgsSearchCache=[],a.searchOrgs=function(c,e){return a.orgsSearchCache.length>0?void e(b.map(a.orgsSearchCache,"name")):void d.get("/api/orgs",{query:""}).then(function(c){a.orgsSearchCache=c,e(b.map(c,"name"))})},a.addOrgUser=function(){if(a.addOrgForm.$valid){var c=b.find(a.orgsSearchCache,{name:a.newOrg.name});c&&(a.newOrg.loginOrEmail=a.user.login,d.post("/api/orgs/"+c.id+"/users/",a.newOrg).then(function(){a.getUserOrgs(a.user_id)}))}},a.init()}])});