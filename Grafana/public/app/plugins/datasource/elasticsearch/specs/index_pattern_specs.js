/*! grafana - v4.4.1 - 2017-07-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["test/lib/common","moment","../index_pattern"],function(a,b){"use strict";var c,d,e;b&&b.id;return{setters:[function(a){c=a},function(a){d=a},function(a){e=a}],execute:function(){c.describe("IndexPattern",function(){c.describe("when getting index for today",function(){c.it("should return correct index name",function(){var a=new e.default("[asd-]YYYY.MM.DD","Daily"),b="asd-"+d.default.utc().format("YYYY.MM.DD");c.expect(a.getIndexForToday()).to.be(b)})}),c.describe("when getting index list for time range",function(){c.describe("no interval",function(){c.it("should return correct index",function(){var a=new e.default("my-metrics"),b=new Date(2015,4,30,1,2,3),d=new Date(2015,5,1,12,5,6);c.expect(a.getIndexList(b,d)).to.eql("my-metrics")})}),c.describe("daily",function(){c.it("should return correct index list",function(){var a=new e.default("[asd-]YYYY.MM.DD","Daily"),b=new Date(1432940523e3),d=new Date(1433153106e3),f=["asd-2015.05.29","asd-2015.05.30","asd-2015.05.31","asd-2015.06.01"];c.expect(a.getIndexList(b,d)).to.eql(f)})})})})}}});