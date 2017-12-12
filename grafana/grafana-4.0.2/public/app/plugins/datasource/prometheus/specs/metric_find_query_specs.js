/*! grafana - v4.0.2 - 2016-12-21
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["test/lib/common","moment","test/specs/helpers","../datasource","../metric_find_query"],function(a){var b,c,d,e,f;return{setters:[function(a){b=a},function(a){c=a},function(a){d=a},function(a){e=a},function(a){f=a}],execute:function(){b.describe("PrometheusMetricFindQuery",function(){var a=new d["default"].ServiceTestContext,g={url:"proxied",directUrl:"direct",user:"test",password:"mupp"};b.beforeEach(b.angularMocks.module("grafana.core")),b.beforeEach(b.angularMocks.module("grafana.services")),b.beforeEach(b.angularMocks.inject(function(b,c,d,f){a.$q=b,a.$httpBackend=d,a.$rootScope=c,a.ds=f.instantiate(e.PrometheusDatasource,{instanceSettings:g}),d.when("GET",/\.html$/).respond("")})),b.describe("When performing metricFindQuery",function(){var d,e;b.it("label_values(resource) should generate label search query",function(){e={status:"success",data:["value1","value2","value3"]},a.$httpBackend.expect("GET","proxied/api/v1/label/resource/values").respond(e);var c=new f["default"](a.ds,"label_values(resource)",a.timeSrv);c.process().then(function(a){d=a}),a.$httpBackend.flush(),a.$rootScope.$apply(),b.expect(d.length).to.be(3)}),b.it("label_values(metric, resource) should generate series query",function(){e={status:"success",data:[{__name__:"metric",resource:"value1"},{__name__:"metric",resource:"value2"},{__name__:"metric",resource:"value3"}]},a.$httpBackend.expect("GET",/proxied\/api\/v1\/series\?match\[\]=metric&start=.*&end=.*/).respond(e);var c=new f["default"](a.ds,"label_values(metric, resource)",a.timeSrv);c.process().then(function(a){d=a}),a.$httpBackend.flush(),a.$rootScope.$apply(),b.expect(d.length).to.be(3)}),b.it("label_values(metric, resource) should pass correct time",function(){a.timeSrv.setTime({from:c["default"].utc("2011-01-01"),to:c["default"].utc("2015-01-01")}),a.$httpBackend.expect("GET",/proxied\/api\/v1\/series\?match\[\]=metric&start=1293840000&end=1420070400/).respond(e);var b=new f["default"](a.ds,"label_values(metric, resource)",a.timeSrv);b.process().then(function(a){d=a}),a.$httpBackend.flush(),a.$rootScope.$apply()}),b.it('label_values(metric{label1="foo", label2="bar", label3="baz"}, resource) should generate series query',function(){e={status:"success",data:[{__name__:"metric",resource:"value1"},{__name__:"metric",resource:"value2"},{__name__:"metric",resource:"value3"}]},a.$httpBackend.expect("GET",/proxied\/api\/v1\/series\?match\[\]=metric&start=.*&end=.*/).respond(e);var c=new f["default"](a.ds,"label_values(metric, resource)",a.timeSrv);c.process().then(function(a){d=a}),a.$httpBackend.flush(),a.$rootScope.$apply(),b.expect(d.length).to.be(3)}),b.it("metrics(metric.*) should generate metric name query",function(){e={status:"success",data:["metric1","metric2","metric3","nomatch"]},a.$httpBackend.expect("GET","proxied/api/v1/label/__name__/values").respond(e);var c=new f["default"](a.ds,"metrics(metric.*)",a.timeSrv);c.process().then(function(a){d=a}),a.$httpBackend.flush(),a.$rootScope.$apply(),b.expect(d.length).to.be(3)}),b.it("query_result(metric) should generate metric name query",function(){e={status:"success",data:{resultType:"vector",result:[{metric:{__name__:"metric",job:"testjob"},value:[1443454528,"3846"]}]}},a.$httpBackend.expect("GET",/proxied\/api\/v1\/query\?query=metric&time=.*/).respond(e);var c=new f["default"](a.ds,"query_result(metric)",a.timeSrv);c.process().then(function(a){d=a}),a.$httpBackend.flush(),a.$rootScope.$apply(),b.expect(d.length).to.be(1),b.expect(d[0].text).to.be('metric{job="testjob"} 3846 1443454528000')})})})}}});