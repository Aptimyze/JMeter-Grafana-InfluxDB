/*! grafana - v4.0.2 - 2016-12-21
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular","jquery"],function(a,b){"use strict";var c=a.module("grafana.routes");c.controller("SoloPanelCtrl",["$scope","$routeParams","$location","dashboardLoaderSrv","contextSrv",function(a,c,d,e,f){var g;a.init=function(){f.sidemenu=!1;var b=d.search();g=parseInt(b.panelId),a.onAppEvent("dashboard-initialized",a.initPanelScope),e.loadDashboard(c.type,c.slug).then(function(b){b.meta.soloMode=!0,a.initDashboard(b,a)})},a.initPanelScope=function(){var c=a.dashboard.getPanelInfoById(g);return a.ctrl={row:c.row,dashboard:a.dashboard},a.ctrl.row.height=b(window).height(),a.panel=c.panel,a.$index=0,a.panel?void(a.panel.span=12):void a.appEvent("alert-error",["Panel not found",""])},a.init()}])});