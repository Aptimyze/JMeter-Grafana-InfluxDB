/*! grafana - v4.0.2 - 2016-12-21
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["../query_ctrl","app/core/services/segment_srv","test/lib/common","test/specs/helpers"],function(a){var b,c,d;return{setters:[function(a){d=a},function(a){},function(a){b=a},function(a){c=a}],execute:function(){b.describe("InfluxDBQueryCtrl",function(){var a=new c["default"].ControllerTestContext;b.beforeEach(b.angularMocks.module("grafana.core")),b.beforeEach(b.angularMocks.module("grafana.controllers")),b.beforeEach(b.angularMocks.module("grafana.services")),b.beforeEach(a.providePhase()),b.beforeEach(b.angularMocks.inject(function(c,e,f){a.$q=f,a.scope=c.$new(),a.datasource.metricFindQuery=b.sinon.stub().returns(a.$q.when([])),a.panelCtrl={panel:{}},a.panelCtrl.refresh=b.sinon.spy(),a.target={target:{}},a.ctrl=e(d.InfluxQueryCtrl,{$scope:a.scope},{panelCtrl:a.panelCtrl,target:a.target,datasource:a.datasource})})),b.describe("init",function(){b.it("should init tagSegments",function(){b.expect(a.ctrl.tagSegments.length).to.be(1)}),b.it("should init measurementSegment",function(){b.expect(a.ctrl.measurementSegment.value).to.be("select measurement")})}),b.describe("when first tag segment is updated",function(){b.beforeEach(function(){a.ctrl.tagSegmentUpdated({value:"asd",type:"plus-button"},0)}),b.it("should update tag key",function(){b.expect(a.ctrl.target.tags[0].key).to.be("asd"),b.expect(a.ctrl.tagSegments[0].type).to.be("key")}),b.it("should add tagSegments",function(){b.expect(a.ctrl.tagSegments.length).to.be(3)})}),b.describe("when last tag value segment is updated",function(){b.beforeEach(function(){a.ctrl.tagSegmentUpdated({value:"asd",type:"plus-button"},0),a.ctrl.tagSegmentUpdated({value:"server1",type:"value"},2)}),b.it("should update tag value",function(){b.expect(a.ctrl.target.tags[0].value).to.be("server1")}),b.it("should set tag operator",function(){b.expect(a.ctrl.target.tags[0].operator).to.be("=")}),b.it("should add plus button for another filter",function(){b.expect(a.ctrl.tagSegments[3].fake).to.be(!0)})}),b.describe("when last tag value segment is updated to regex",function(){b.beforeEach(function(){a.ctrl.tagSegmentUpdated({value:"asd",type:"plus-button"},0),a.ctrl.tagSegmentUpdated({value:"/server.*/",type:"value"},2)}),b.it("should update operator",function(){b.expect(a.ctrl.tagSegments[1].value).to.be("=~"),b.expect(a.ctrl.target.tags[0].operator).to.be("=~")})}),b.describe("when second tag key is added",function(){b.beforeEach(function(){a.ctrl.tagSegmentUpdated({value:"asd",type:"plus-button"},0),a.ctrl.tagSegmentUpdated({value:"server1",type:"value"},2),a.ctrl.tagSegmentUpdated({value:"key2",type:"plus-button"},3)}),b.it("should update tag key",function(){b.expect(a.ctrl.target.tags[1].key).to.be("key2")}),b.it("should add AND segment",function(){b.expect(a.ctrl.tagSegments[3].value).to.be("AND")})}),b.describe("when condition is changed",function(){b.beforeEach(function(){a.ctrl.tagSegmentUpdated({value:"asd",type:"plus-button"},0),a.ctrl.tagSegmentUpdated({value:"server1",type:"value"},2),a.ctrl.tagSegmentUpdated({value:"key2",type:"plus-button"},3),a.ctrl.tagSegmentUpdated({value:"OR",type:"condition"},3)}),b.it("should update tag condition",function(){b.expect(a.ctrl.target.tags[1].condition).to.be("OR")}),b.it("should update AND segment",function(){b.expect(a.ctrl.tagSegments[3].value).to.be("OR"),b.expect(a.ctrl.tagSegments.length).to.be(7)})}),b.describe("when deleting first tag filter after value is selected",function(){b.beforeEach(function(){a.ctrl.tagSegmentUpdated({value:"asd",type:"plus-button"},0),a.ctrl.tagSegmentUpdated({value:"server1",type:"value"},2),a.ctrl.tagSegmentUpdated(a.ctrl.removeTagFilterSegment,0)}),b.it("should remove tags",function(){b.expect(a.ctrl.target.tags.length).to.be(0)}),b.it("should remove all segment after 2 and replace with plus button",function(){b.expect(a.ctrl.tagSegments.length).to.be(1),b.expect(a.ctrl.tagSegments[0].type).to.be("plus-button")})}),b.describe("when deleting second tag value before second tag value is complete",function(){b.beforeEach(function(){a.ctrl.tagSegmentUpdated({value:"asd",type:"plus-button"},0),a.ctrl.tagSegmentUpdated({value:"server1",type:"value"},2),a.ctrl.tagSegmentUpdated({value:"key2",type:"plus-button"},3),a.ctrl.tagSegmentUpdated(a.ctrl.removeTagFilterSegment,4)}),b.it("should remove all segment after 2 and replace with plus button",function(){b.expect(a.ctrl.tagSegments.length).to.be(4),b.expect(a.ctrl.tagSegments[3].type).to.be("plus-button")})}),b.describe("when deleting second tag value before second tag value is complete",function(){b.beforeEach(function(){a.ctrl.tagSegmentUpdated({value:"asd",type:"plus-button"},0),a.ctrl.tagSegmentUpdated({value:"server1",type:"value"},2),a.ctrl.tagSegmentUpdated({value:"key2",type:"plus-button"},3),a.ctrl.tagSegmentUpdated(a.ctrl.removeTagFilterSegment,4)}),b.it("should remove all segment after 2 and replace with plus button",function(){b.expect(a.ctrl.tagSegments.length).to.be(4),b.expect(a.ctrl.tagSegments[3].type).to.be("plus-button")})}),b.describe("when deleting second tag value after second tag filter is complete",function(){b.beforeEach(function(){a.ctrl.tagSegmentUpdated({value:"asd",type:"plus-button"},0),a.ctrl.tagSegmentUpdated({value:"server1",type:"value"},2),a.ctrl.tagSegmentUpdated({value:"key2",type:"plus-button"},3),a.ctrl.tagSegmentUpdated({value:"value",type:"value"},6),a.ctrl.tagSegmentUpdated(a.ctrl.removeTagFilterSegment,4)}),b.it("should remove all segment after 2 and replace with plus button",function(){b.expect(a.ctrl.tagSegments.length).to.be(4),b.expect(a.ctrl.tagSegments[3].type).to.be("plus-button")})})})}}});