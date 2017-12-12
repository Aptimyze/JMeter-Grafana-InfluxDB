/*! grafana - v4.0.2 - 2016-12-21
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["../datasource","test/lib/common","moment","test/specs/helpers","../annotation_query"],function(a){var b,c,d,e,f;return{setters:[function(a){e=a},function(a){b=a},function(a){c=a},function(a){d=a},function(a){f=a}],execute:function(){b.describe("CloudWatchAnnotationQuery",function(){var a=new d["default"].ServiceTestContext,g={jsonData:{defaultRegion:"us-east-1",access:"proxy"}};b.beforeEach(b.angularMocks.module("grafana.core")),b.beforeEach(b.angularMocks.module("grafana.services")),b.beforeEach(b.angularMocks.module("grafana.controllers")),b.beforeEach(a.providePhase(["templateSrv","backendSrv"])),b.beforeEach(b.angularMocks.inject(function(b,c,d,f){a.$q=b,a.$httpBackend=d,a.$rootScope=c,a.ds=f.instantiate(e.CloudWatchDatasource,{instanceSettings:g})})),b.describe("When performing annotationQuery",function(){var d={annotation:{region:"us-east-1",namespace:"AWS/EC2",metricName:"CPUUtilization",dimensions:{InstanceId:"i-12345678"},statistics:["Average"],period:300},range:{from:c["default"](1443438674760),to:c["default"](1443460274760)}},e={MetricAlarms:[{AlarmName:"test_alarm_name"}]},g={AlarmHistoryItems:[{Timestamp:"2015-01-01T00:00:00.000Z",HistoryItemType:"StateUpdate",AlarmName:"test_alarm_name",HistoryData:"{}",HistorySummary:"test_history_summary"}]};b.beforeEach(function(){a.backendSrv.datasourceRequest=function(b){switch(b.data.action){case"DescribeAlarmsForMetric":return a.$q.when({data:e});case"DescribeAlarmHistory":return a.$q.when({data:g})}}}),b.it("should return annotation list",function(c){var e=new f["default"](a.ds,d.annotation,a.$q,a.templateSrv);e.process(d.range.from,d.range.to).then(function(a){b.expect(a[0].title).to.be("test_alarm_name"),b.expect(a[0].text).to.be("test_history_summary"),c()}),a.$rootScope.$apply()})})})}}});