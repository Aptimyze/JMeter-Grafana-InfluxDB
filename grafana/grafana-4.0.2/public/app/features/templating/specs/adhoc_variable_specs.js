/*! grafana - v4.0.2 - 2016-12-21
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["test/lib/common","../adhoc_variable"],function(a){var b,c;return{setters:[function(a){b=a},function(a){c=a}],execute:function(){b.describe("AdhocVariable",function(){b.describe("when serializing to url",function(){b.it("should set return key value and op seperated by pipe",function(){var a=new c.AdhocVariable({filters:[{key:"key1",operator:"=",value:"value1"},{key:"key2",operator:"!=",value:"value2"}]}),d=a.getValueForUrl();b.expect(d).to.eql(["key1|=|value1","key2|!=|value2"])})}),b.describe("when deserializing from url",function(){b.it("should restore filters",function(){var a=new c.AdhocVariable({});a.setValueFromUrl(["key1|=|value1","key2|!=|value2"]),b.expect(a.filters[0].key).to.be("key1"),b.expect(a.filters[0].operator).to.be("="),b.expect(a.filters[0].value).to.be("value1"),b.expect(a.filters[1].key).to.be("key2"),b.expect(a.filters[1].operator).to.be("!="),b.expect(a.filters[1].value).to.be("value2")})})})}}});