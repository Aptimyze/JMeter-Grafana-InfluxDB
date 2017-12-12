/*! grafana - v4.0.2 - 2016-12-21
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["test/lib/common","../query_builder"],function(a){var b,c;return{setters:[function(a){b=a},function(a){c=a}],execute:function(){b.describe("ElasticQueryBuilder",function(){var a;b.beforeEach(function(){a=new c["default"]({timeField:"@timestamp"})}),b.it("with defaults",function(){var c=a.build({metrics:[{type:"Count",id:"0"}],timeField:"@timestamp",bucketAggs:[{type:"date_histogram",field:"@timestamp",id:"1"}]});b.expect(c.query.filtered.filter.bool.must[0].range["@timestamp"].gte).to.be("$timeFrom"),b.expect(c.aggs[1].date_histogram.extended_bounds.min).to.be("$timeFrom")}),b.it("with multiple bucket aggs",function(){var c=a.build({metrics:[{type:"count",id:"1"}],timeField:"@timestamp",bucketAggs:[{type:"terms",field:"@host",id:"2"},{type:"date_histogram",field:"@timestamp",id:"3"}]});b.expect(c.aggs[2].terms.field).to.be("@host"),b.expect(c.aggs[2].aggs[3].date_histogram.field).to.be("@timestamp")}),b.it("with es1.x and es2.x date histogram queries check time format",function(){var d=new c["default"]({timeField:"@timestamp",esVersion:2}),e={metrics:[],bucketAggs:[{type:"date_histogram",field:"@timestamp",id:"1"}]};b.expect("format"in a.build(e).aggs[1].date_histogram).to.be(!1),b.expect(d.build(e).aggs[1].date_histogram.format).to.be("epoch_millis")}),b.it("with es1.x and es2.x range filter check time format",function(){var d=new c["default"]({timeField:"@timestamp",esVersion:2});b.expect("format"in a.getRangeFilter()["@timestamp"]).to.be(!1),b.expect(d.getRangeFilter()["@timestamp"].format).to.be("epoch_millis")}),b.it("with select field",function(){var c=a.build({metrics:[{type:"avg",field:"@value",id:"1"}],bucketAggs:[{type:"date_histogram",field:"@timestamp",id:"2"}]},100,1e3),d=c.aggs[2].aggs;b.expect(d[1].avg.field).to.be("@value")}),b.it("with term agg and order by metric agg",function(){var c=a.build({metrics:[{type:"count",id:"1"},{type:"avg",field:"@value",id:"5"}],bucketAggs:[{type:"terms",field:"@host",settings:{size:5,order:"asc",orderBy:"5"},id:"2"},{type:"date_histogram",field:"@timestamp",id:"3"}]},100,1e3),d=c.aggs[2],e=d.aggs[3];b.expect(d.aggs[5].avg.field).to.be("@value"),b.expect(e.aggs[5].avg.field).to.be("@value")}),b.it("with metric percentiles",function(){var c=a.build({metrics:[{id:"1",type:"percentiles",field:"@load_time",settings:{percents:[1,2,3,4]}}],bucketAggs:[{type:"date_histogram",field:"@timestamp",id:"3"}]},100,1e3),d=c.aggs[3];b.expect(d.aggs[1].percentiles.field).to.be("@load_time"),b.expect(d.aggs[1].percentiles.percents).to.eql([1,2,3,4])}),b.it("with filters aggs",function(){var c=a.build({metrics:[{type:"count",id:"1"}],timeField:"@timestamp",bucketAggs:[{id:"2",type:"filters",settings:{filters:[{query:"@metric:cpu"},{query:"@metric:logins.count"}]}},{type:"date_histogram",field:"@timestamp",id:"4"}]});b.expect(c.aggs[2].filters.filters["@metric:cpu"].query.query_string.query).to.be("@metric:cpu"),b.expect(c.aggs[2].filters.filters["@metric:logins.count"].query.query_string.query).to.be("@metric:logins.count"),b.expect(c.aggs[2].aggs[4].date_histogram.field).to.be("@timestamp")}),b.it("with raw_document metric",function(){var c=a.build({metrics:[{type:"raw_document",id:"1"}],timeField:"@timestamp",bucketAggs:[]});b.expect(c.size).to.be(500)}),b.it("with moving average",function(){var c=a.build({metrics:[{id:"3",type:"sum",field:"@value"},{id:"2",type:"moving_avg",field:"3",pipelineAgg:"3"}],bucketAggs:[{type:"date_histogram",field:"@timestamp",id:"3"}]}),d=c.aggs[3];b.expect(d.aggs[2]).not.to.be(void 0),b.expect(d.aggs[2].moving_avg).not.to.be(void 0),b.expect(d.aggs[2].moving_avg.buckets_path).to.be("3")}),b.it("with broken moving average",function(){var c=a.build({metrics:[{id:"3",type:"sum",field:"@value"},{id:"2",type:"moving_avg",pipelineAgg:"3"},{id:"4",type:"moving_avg",pipelineAgg:"Metric to apply moving average"}],bucketAggs:[{type:"date_histogram",field:"@timestamp",id:"3"}]}),d=c.aggs[3];b.expect(d.aggs[2]).not.to.be(void 0),b.expect(d.aggs[2].moving_avg).not.to.be(void 0),b.expect(d.aggs[2].moving_avg.buckets_path).to.be("3"),b.expect(d.aggs[4]).to.be(void 0)}),b.it("with derivative",function(){var c=a.build({metrics:[{id:"3",type:"sum",field:"@value"},{id:"2",type:"derivative",pipelineAgg:"3"}],bucketAggs:[{type:"date_histogram",field:"@timestamp",id:"3"}]}),d=c.aggs[3];b.expect(d.aggs[2]).not.to.be(void 0),b.expect(d.aggs[2].derivative).not.to.be(void 0),b.expect(d.aggs[2].derivative.buckets_path).to.be("3")}),b.it("with adhoc filters",function(){var c=a.build({metrics:[{type:"Count",id:"0"}],timeField:"@timestamp",bucketAggs:[{type:"date_histogram",field:"@timestamp",id:"3"}]},[{key:"key1",operator:"=",value:"value1"}]);b.expect(c.query.filtered.filter.bool.must[1].term.key1).to.be("value1")})})}}});