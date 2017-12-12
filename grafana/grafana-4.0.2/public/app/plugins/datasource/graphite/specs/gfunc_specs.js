/*! grafana - v4.0.2 - 2016-12-21
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["test/lib/common","../gfunc"],function(a){var b,c;return{setters:[function(a){b=a},function(a){c=a}],execute:function(){b.describe("when creating func instance from func names",function(){b.it("should return func instance",function(){var a=c["default"].createFuncInstance("sumSeries");b.expect(a).to.be.ok(),b.expect(a.def.name).to.equal("sumSeries"),b.expect(a.def.params.length).to.equal(5),b.expect(a.def.defaultParams.length).to.equal(1)}),b.it("should return func instance with shortName",function(){var a=c["default"].createFuncInstance("sum");b.expect(a).to.be.ok()}),b.it("should return func instance from funcDef",function(){var a=c["default"].createFuncInstance("sum"),d=c["default"].createFuncInstance(a.def);b.expect(d).to.be.ok()}),b.it("func instance should have text representation",function(){var a=c["default"].createFuncInstance("groupByNode");a.params[0]=5,a.params[1]="avg",a.updateText(),b.expect(a.text).to.equal("groupByNode(5, avg)")})}),b.describe("when rendering func instance",function(){b.it("should handle single metric param",function(){var a=c["default"].createFuncInstance("sumSeries");b.expect(a.render("hello.metric")).to.equal("sumSeries(hello.metric)")}),b.it("should include default params if options enable it",function(){var a=c["default"].createFuncInstance("scaleToSeconds",{withDefaultParams:!0});b.expect(a.render("hello")).to.equal("scaleToSeconds(hello, 1)")}),b.it("should handle int or interval params with number",function(){var a=c["default"].createFuncInstance("movingMedian");a.params[0]="5",b.expect(a.render("hello")).to.equal("movingMedian(hello, 5)")}),b.it("should handle int or interval params with interval string",function(){var a=c["default"].createFuncInstance("movingMedian");a.params[0]="5min",b.expect(a.render("hello")).to.equal("movingMedian(hello, '5min')")}),b.it("should handle metric param and int param and string param",function(){var a=c["default"].createFuncInstance("groupByNode");a.params[0]=5,a.params[1]="avg",b.expect(a.render("hello.metric")).to.equal("groupByNode(hello.metric, 5, 'avg')")}),b.it("should handle function with no metric param",function(){var a=c["default"].createFuncInstance("randomWalk");a.params[0]="test",b.expect(a.render(void 0)).to.equal("randomWalk('test')")}),b.it("should handle function multiple series params",function(){var a=c["default"].createFuncInstance("asPercent");a.params[0]="#B",b.expect(a.render("#A")).to.equal("asPercent(#A, #B)")})}),b.describe("when requesting function categories",function(){b.it("should return function categories",function(){var a=c["default"].getCategories();b.expect(a.Special.length).to.be.greaterThan(8)})}),b.describe("when updating func param",function(){b.it("should update param value and update text representation",function(){var a=c["default"].createFuncInstance("summarize",{withDefaultParams:!0});a.updateParam("1h",0),b.expect(a.params[0]).to.be("1h"),b.expect(a.text).to.be("summarize(1h, sum, false)")}),b.it("should parse numbers as float",function(){var a=c["default"].createFuncInstance("scale");a.updateParam("0.001",0),b.expect(a.params[0]).to.be("0.001")})}),b.describe("when updating func param with optional second parameter",function(){b.it("should update value and text",function(){var a=c["default"].createFuncInstance("aliasByNode");a.updateParam("1",0),b.expect(a.params[0]).to.be("1")}),b.it("should slit text and put value in second param",function(){var a=c["default"].createFuncInstance("aliasByNode");a.updateParam("4,-5",0),b.expect(a.params[0]).to.be("4"),b.expect(a.params[1]).to.be("-5"),b.expect(a.text).to.be("aliasByNode(4, -5)")}),b.it("should remove second param when empty string is set",function(){var a=c["default"].createFuncInstance("aliasByNode");a.updateParam("4,-5",0),a.updateParam("",1),b.expect(a.params[0]).to.be("4"),b.expect(a.params[1]).to.be(void 0),b.expect(a.text).to.be("aliasByNode(4)")})})}}});