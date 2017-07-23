/*! grafana - v4.4.1 - 2017-07-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["test/lib/common","../dashboard_srv"],function(a,b){"use strict";var c,d;b&&b.id;return{setters:[function(a){c=a},function(a){d=a}],execute:function(){c.describe("dashboardSrv",function(){var a;c.beforeEach(function(){a=new d.DashboardSrv({},{},{})})})}}});