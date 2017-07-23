/*! grafana - v4.4.1 - 2017-07-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

define(["app/core/config","app/core/services/backend_srv"],function(){"use strict";describe("backend_srv",function(){var a,b,c;beforeEach(module("grafana.core")),beforeEach(module("grafana.services")),beforeEach(inject(function(d,e,f){c=d,b=e,a=f})),describe("when handling errors",function(){it("should return the http status code",function(b){c.whenGET("gateway-error").respond(502),a.datasourceRequest({url:"gateway-error"}).catch(function(a){expect(a.status).to.be(502),b()}),c.flush()})})})});