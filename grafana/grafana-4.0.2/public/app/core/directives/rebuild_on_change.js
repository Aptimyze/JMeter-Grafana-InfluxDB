/*! grafana - v4.0.2 - 2016-12-21
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["jquery","../core_module"],function(a){function b(a){for(var b,c=a[0],e=a[a.length-1],f=1;c!==e&&(c=c.nextSibling);f++)(b||a[f]!==c)&&(b||(b=d["default"]([].slice.call(a,0,f))),b.push(c));return b||a}function c(a){return{multiElement:!0,terminal:!0,transclude:!0,priority:600,restrict:"E",link:function(c,d,e,f,g){function h(){k&&(k.remove(),k=null),j&&(j.$destroy(),j=null),i&&(k=b(i.clone),a.leave(k).then(function(){k=null}),i=null)}var i,j,k;c.$watch(e.property,function(b,c){j&&b!==c&&h(),j||!b&&!e.showNull?h():g(function(b,c){j=c,b[b.length++]=document.createComment(" end rebuild on change "),i={clone:b},a.enter(b,d.parent(),d)})})}}}c.$inject=["$animate"];var d,e;return{setters:[function(a){d=a},function(a){e=a}],execute:function(){e["default"].directive("rebuildOnChange",c)}}});