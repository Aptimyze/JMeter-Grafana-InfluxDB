/*! grafana - v4.0.2 - 2016-12-21
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["test/lib/common","app/core/utils/flatten"],function(a){var b,c;return{setters:[function(a){b=a},function(a){c=a}],execute:function(){b.describe("flatten",function(){b.it("should return flatten object",function(){var a=c["default"]({level1:"level1-value",deeper:{level2:"level2-value",deeper:{level3:"level3-value"}}},null);b.expect(a.level1).to.be("level1-value"),b.expect(a["deeper.level2"]).to.be("level2-value"),b.expect(a["deeper.deeper.level3"]).to.be("level3-value")})})}}});