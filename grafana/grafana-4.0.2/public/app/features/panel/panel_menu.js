/*! grafana - v4.0.2 - 2016-12-21
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular","jquery","lodash","tether"],function(a,b,c,d){"use strict";a.module("grafana.directives").directive("panelMenu",["$compile","linkSrv",function(a,e){function f(a){var b='<div class="panel-menu small">';return b+='<div class="panel-menu-row">',a.panel.links&&c.each(a.panel.links,function(c){var d=e.getPanelLinkAnchorInfo(c,a.panel.scopedVars);b+='<a class="panel-menu-link" href="'+d.href+'" target="'+d.target+'">'+d.title+"</a>"}),b}function g(a){var b='<div class="panel-menu small">';return a.dashboard.meta.canEdit&&(b+='<div class="panel-menu-inner">',b+='<div class="panel-menu-row">',a.dashboard.meta.fullscreen||(b+='<a class="panel-menu-icon pull-left" ng-click="ctrl.updateColumnSpan(-1)"><i class="fa fa-minus"></i></a>',b+='<a class="panel-menu-icon pull-left" ng-click="ctrl.updateColumnSpan(1)"><i class="fa fa-plus"></i></a>'),b+='<a class="panel-menu-icon pull-right" ng-click="ctrl.removePanel()"><i class="fa fa-trash"></i></a>',b+='<div class="clearfix"></div>',b+="</div>"),b+='<div class="panel-menu-row">',b+='<a class="panel-menu-link" gf-dropdown="extendedMenu"><i class="fa fa-bars"></i></a>',c.each(a.getMenu(),function(c){("Editor"!==c.role||a.dashboard.meta.canEdit)&&(b+='<a class="panel-menu-link" ',c.click&&(b+=' ng-click="'+c.click+'"'),c.href&&(b+=' href="'+c.href+'"'),b+=">",b+=c.text+"</a>")}),b+="</div>",b+="</div>",b+="</div>"}function h(a){return a.getExtendedMenu()}var i='<span class="panel-title drag-handle pointer"><span class="icon-gf panel-alert-icon"></span><span class="panel-title-text drag-handle">{{ctrl.panel.title | interpolateTemplateVars:this}}</span><span class="panel-links-btn"><i class="fa fa-external-link"></i></span><span class="panel-time-info" ng-show="ctrl.timeInfo"><i class="fa fa-clock-o"></i> {{ctrl.timeInfo}}</span></span>';return{restrict:"A",link:function(c,e){function j(a,b){return clearTimeout(q),q=null,a?void(q=setTimeout(j,a)):b!==!0&&(r.is(":hover")||c.ctrl.dashboard.$$panelDragging)?void j(2200):void(o&&(k.destroy(),r.unbind(),r.remove(),o.$destroy(),o=null,r=null,n.removeClass("panel-highlight")))}var k,l=b(i),m=l.find(".panel-links-btn"),n=e.parents(".panel-container"),o=null,p=c.ctrl,q=null,r=null;e.append(l),c.$watchCollection("ctrl.panel.links",function(a){var b=!!a&&a.length>0&&""!==p.panel.title;m.css({display:b?"inline":"none"})});var s=function(i){if(b.contains(document,i.target)){if(r)return void j();var l;l=b(i.target).hasClass("fa-external-link")?f(p):g(p),r=b(l),r.mouseleave(function(){j(1e3)}),o=c.$new(),o.extendedMenu=h(p),o.dismiss=function(){j(null,!0)},b(".panel-container").removeClass("panel-highlight"),n.toggleClass("panel-highlight"),b(".panel-menu").remove(),e.append(r),c.$apply(function(){a(r.contents())(o),k=new d({element:r,target:n,attachment:"bottom center",targetAttachment:"top center",constraints:[{to:"window",attachment:"together",pin:!0}]})}),j(2200)}};e.click(s),a(e.contents())(c)}}}])});