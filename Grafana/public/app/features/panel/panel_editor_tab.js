/*! grafana - v4.4.1 - 2017-07-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["angular"],function(a,b){"use strict";function c(a){return a.create({scope:{ctrl:"=",editorTab:"=",index:"="},directive:function(a){var b=a.ctrl.pluginId,c=a.index,d=function(){return a.editorTab.directiveFn()};return Promise.resolve({name:"panel-editor-tab-"+b+c,fn:d})}})}c.$inject=["dynamicDirectiveSrv"];var d,e;b&&b.id;return{setters:[function(a){d=a}],execute:function(){e=d.default.module("grafana.directives"),e.directive("panelEditorTab",c)}}});