/*! grafana - v4.0.2 - 2016-12-21
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["test/lib/common","test/specs/helpers","../query_ctrl"],function(a){var b,c,d;return{setters:[function(a){b=a},function(a){c=a},function(a){d=a}],execute:function(){b.describe("OpenTsQueryCtrl",function(){var a=new c["default"].ControllerTestContext;b.beforeEach(b.angularMocks.module("grafana.core")),b.beforeEach(b.angularMocks.module("grafana.services")),b.beforeEach(a.providePhase(["backendSrv","templateSrv"])),b.beforeEach(a.providePhase()),b.beforeEach(b.angularMocks.inject(function(c,e,f){a.$q=f,a.scope=c.$new(),a.target={target:""},a.panelCtrl={panel:{}},a.panelCtrl.refresh=b.sinon.spy(),a.datasource.getAggregators=b.sinon.stub().returns(a.$q.when([])),a.datasource.getFilterTypes=b.sinon.stub().returns(a.$q.when([])),a.ctrl=e(d.OpenTsQueryCtrl,{$scope:a.scope},{panelCtrl:a.panelCtrl,datasource:a.datasource,target:a.target}),a.scope.$digest()})),b.describe("init query_ctrl variables",function(){b.it("filter types should be initialized",function(){b.expect(a.ctrl.filterTypes.length).to.be(7)}),b.it("aggregators should be initialized",function(){b.expect(a.ctrl.aggregators.length).to.be(8)}),b.it("fill policy options should be initialized",function(){b.expect(a.ctrl.fillPolicies.length).to.be(4)})}),b.describe("when adding filters and tags",function(){b.it("addTagMode should be false when closed",function(){a.ctrl.addTagMode=!0,a.ctrl.closeAddTagMode(),b.expect(a.ctrl.addTagMode).to.be(!1)}),b.it("addFilterMode should be false when closed",function(){a.ctrl.addFilterMode=!0,a.ctrl.closeAddFilterMode(),b.expect(a.ctrl.addFilterMode).to.be(!1)}),b.it("removing a tag from the tags list",function(){a.ctrl.target.tags={tagk:"tag_key",tagk2:"tag_value2"},a.ctrl.removeTag("tagk"),b.expect(Object.keys(a.ctrl.target.tags).length).to.be(1)}),b.it("removing a filter from the filters list",function(){a.ctrl.target.filters=[{tagk:"tag_key",filter:"tag_value2",type:"wildcard",groupBy:!0}],a.ctrl.removeFilter(0),b.expect(a.ctrl.target.filters.length).to.be(0)}),b.it("adding a filter when tags exist should generate error",function(){a.ctrl.target.tags={tagk:"tag_key",tagk2:"tag_value2"},a.ctrl.addFilter(),b.expect(a.ctrl.errors.filters).to.be("Please remove tags to use filters, tags and filters are mutually exclusive.")}),b.it("adding a tag when filters exist should generate error",function(){a.ctrl.target.filters=[{tagk:"tag_key",filter:"tag_value2",type:"wildcard",groupBy:!0}],a.ctrl.addTag(),b.expect(a.ctrl.errors.tags).to.be("Please remove filters to use tags, tags and filters are mutually exclusive.")})})})}}});