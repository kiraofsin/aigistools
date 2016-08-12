webpackJsonp([8],{0:function(t,a,n){(function(t){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}function e(t){return 27+(100>=t?3*t:300+t-100)}function i(t){return 12+(100>=t?0:Math.floor((t-100)/20)+1)}function r(t){var a=arguments.length<=1||void 0===arguments[1]?0:arguments[1];if(isNaN(t))return"?";if(t===1/0||t===-(1/0))return"∞";var n=t.toFixed(a).split("."),e=parseInt(n[0]);return e.toLocaleString()+(1===n.length?"":"."+n[1])}function s(){if(D){var a=t("#map").find("tbody tr input[name=num_drops]").map(function(){return parseInt(t(this).val())||0}).toArray().reduce(function(t,a){return t+a},0);t("input[name=current]").val(a).trigger("change")}}function o(){var a=void 0;try{a=JSON.parse(t.cookie(E))}catch(n){console.warn(n),a={}}return t.extend(!0,z,a)}function u(a){t.cookie(E,JSON.stringify(a),{expires:30})}function c(){if(C){var a=45,n=7,e=parseInt(q.val()),i=t("#rewards tbody");i.find("tr").removeClass("active").each(function(){var i=t(this),r=i.attr("data-amount")-e;if(-a>r)i.hide();else if(0>r)i.css("opacity",.5).show();else if(a>r)i.addClass("active").css("opacity",1).show();else if(a*n>r){var s=1-Math.floor(r/a)*a/(a*(n+1));i.show().css("opacity",s)}else i.hide();var o=0===r?"diff-eq":r>0?"diff-plus":"diff-minus",u=0===r?"":(r>0?"+":"")+r;i.find("span.diff").removeClass("diff-eq diff-plus diff-minus").addClass(o).text(u)})}}function p(){if("exchange"===I){var a=parseInt(q.val());y.forEach(function(n){for(var e=t('[data-prize="'+n.unit+'"]').empty(),i=0;a>i;i+=n.value){var r=t("<i />").addClass("icon icon-"+n.unit),s=25*Math.min(a-i,n.value)/n.value;t('<div class="prize-gage" />').append(r.clone().css({position:"absolute",opacity:.2,boxShadow:"none",paddingRight:25-s})).append(r.clone().css({width:s+"px"})).appendTo(e)}})}}function m(){var a=t("[name=expectation]:input").val(),n=1/0,e=0,i="drop"===a?null:a,s=M.map(function(t){var a=t.expectation/(i&&t[i]||1);return n=0,e=Math.max(e,a),a}),o=i?3:2;M.forEach(function(a,i){var u=t("[data-chart="+i+"]"),c=s[i],p=c/(e-n),m=120*p+240;u.find("span.barchart-label").text(r(c,o)+"個"),u.find("span.barchart").css({width:100*p+"%",backgroundColor:"hsla("+m+", 80%, 50%, 0.5)"})})}function l(){var a=parseInt(N.val()),n=parseInt(q.val()),e=Math.max(a-n,0);M.forEach(function(a,n){var i=t("[data-chart="+n+"]"),s=e?Math.ceil(e/a.expectation):0;i.find("span.marathon").text("残り"+r(s)+"周")})}function d(){var a=parseInt(q.val()),n=parseInt(N.val()),s=M[parseInt(t("[name=estimate_map]:input").val())],o=Math.max(n-a,0),u=Math.ceil(o/s.expectation);t("#estimate_required_marathon").text(r(u));var c=(new Date).getTime(),p=_.reduce(function(t,a){return t+Math.max(a[1],c)-Math.max(a[0],c)},0),m=0+t("[name=estimate_natural_recovery]:input").prop("checked"),l=Math.floor(p/18e4)*m,d=Math.floor(p/36e5)*m,f=parseInt(t("[name=estimate_rank]").val()),v=e(f),h=i(f),g=Math.ceil(s.charisma*u),b=Math.ceil(s.stamina*u),x=t("[name=estimate_use_crystal]:input").val(),k=0+("both"===x||"charisma"===x),y=0+("both"===x||"stamina"===x),w=k?g:l,I=y?b:d,C=Math.floor(Math.min(w/s.charisma,I/s.stamina));t("#estimate_available_marathon").text(r(C));var E=Math.ceil(Math.max(s.charisma*C-l,0)/v),T=Math.ceil(Math.max(s.stamina*C-d,0)/h),j=E+T;t("#estimate_required_crystal").text(r(j));var D=0===E?"diff-eq":E>0?"diff-plus":"diff-minus";t("#estimate_required_crystal_for_charisma").attr("class",D).text(r(E)),D=0===T?"diff-eq":T>0?"diff-plus":"diff-minus",t("#estimate_required_crystal_for_stamina").attr("class",D).text(r(T));var z=C-u;D=0===z?"diff-eq":z>0?"diff-plus":"diff-minus";var R=(z>=0?"+":"")+r(z);t("#estimate_available_marathon_diff").attr("class",D).text(R);var O=s.charisma*C;t("#estimate_using_charisma").text(r(O)),z=O-g,D=0===z?"diff-eq":z>0?"diff-plus":"diff-minus",R=(z>=0?"+":"")+r(z),t("#estimate_using_charisma_diff").attr("class",D).text(R);var A=Math.ceil(s.stamina*C);t("#estimate_using_stamina").text(r(A)),z=A-b,D=0===z?"diff-eq":z>0?"diff-plus":"diff-minus",R=(z>=0?"+":"")+r(z),t("#estimate_using_stamina_diff").attr("class",D).text(R);var S=a+Math.floor(s.expectation*C);t("#estimate_result_collection").text(r(S)),z=S-n,D=0===z?"diff-eq":z>0?"diff-plus":"diff-minus",R=(z>=0?"+":"")+r(z),t("#estimate_result_collection_diff").attr("class",D).text(R)}function f(){var a=parseInt(q.val()),n=parseInt(N.val()),e=(new Date).getTime(),i=_.reduce(function(t,a){return t+Math.max(a[1],e)-Math.max(a[0],e)},0),s=Math.max(n-a,0),o=i/864e5,u=s/Math.max(o,1),c=i/36e5,p=s/Math.max(c,1),m=i/18e5,l=s/Math.max(m,1),d=r(u,3).split(".");t("#norma_per_day").find(".norma-amount-actual").text(d[0]).parent().find(".norma-amount-fraction").text("."+d[1]).parent(),d=r(p,3).split("."),t("#norma_per_hour").find(".norma-amount-actual").text(d[0]).parent().find(".norma-amount-fraction").text("."+d[1]).parent(),d=r(l,3).split("."),t("#norma_per_minute").find(".norma-amount-actual").text(d[0]).parent().find(".norma-amount-fraction").text("."+d[1]).parent(),t("#remains_days").text(r(o,0)),t("#remains_hours").text(r(c,0)),t("#remains_minutes").text(r(60*c,0));var f=100*Math.min(a,n),v=parseInt(f/n)||0,h=k-i,g=parseInt(100*h/k)||0,b=void 0;b=100===v?"progress-bar-success":v>=g?"progress-bar-success":v>.7*g?"progress-bar-info":v>.4*g?"progress-bar-warning":"progress-bar-danger",t("#objective_progress > .progress-bar").width(v+"%").removeClass("progress-bar-success progress-bar-info progress-bar-danger progress-bar-warning").addClass(b).children("span").text(v+"%達成"),t("#period_progress > .progress-bar").width(g+"%").children("span").text(g+"%経過");var x=a*k/h;t("#prediction_collection").text(r(Math.floor(x)));var y=Math.min(x/n,1),M=t("#objective_progress").width(),w=M*y-47;t(".pointer").css("left",w+"px");var I=230>M-w?-250:0;t(".pointer-label").css("margin-left",I+"px");var C="";n>a&&x>=n&&!function(){var t=void 0,a=void 0;_.forEach(function(n){t=t||n[0],a=a||n[1]});var e=n/x*k,i=_.reduce(function(t,a){if(t)return t;var n=a[1]-a[0];return e>n?(e-=n,null):new Date(a[0]+e)},null),r=i.getMonth(),s=i.getDate(),o=i.getHours(),u=i.getMinutes(),c=r+1+"/"+s+" "+(10>o?"0"+o:o)+":"+(10>u?"0"+u:u);C=c+"頃に目標達成できそうよ。"}(),t("#prediction_completion_date").text(C)}function v(){var t="animated bounce",a="",n="Webkit Moz O ms Khtml".split(" "),e="",i=document.createElement("div");if(void 0!==i.style.animationName)return!0;for(var r=0;r<n.length;r++)if(void 0!==i.style[n[r]+"AnimationName"])return e=n[r],t=e+"Animation",a="-"+e.toLowerCase()+"-",!0;return!1}function h(){q=t("[name=current]:input"),N=t("[name=objective]:input");var a=(new Date).getTime(),n=t("#period_dates");_.forEach(function(e){var i=e[1]-e[0],r=100*i/k+"%",s=new Date(e[0]),o=new Date(e[1]-1),u=s.getMonth()+1+"/"+s.getDate()+"-"+(o.getMonth()+1)+"/"+o.getDate(),c=a>=e[0]&&a<e[1],p=a>=e[1],m=c?"progress-bar-active":p?"progress-bar-expired":"progress-bar-remain";t('<div class="progress-bar">').width(r).text(u).addClass(m).appendTo(n)}),t('[data-objective-mode="'+I+'"]').show(),t('[data-objective-mode][data-objective-mode!="'+I+'"]').remove(),q.click(function(){this.select()}).TouchSpin({min:0,max:1e4,step:1}),"achievement"===I?t.each(x.objectives,function(a,n){t("<option />").attr("value",a).text(n+" ("+a+"個)").appendTo(N)}):!function(){t("select[name=objective]").click(function(){this.select()});var a=t("#increse_objective_list");y.forEach(function(n){t('<button class="btn btn-default" name="add"  type="button" />').val(n.value).attr("title",n.name).append(t('<i class="fa fa-arrow-up" />')).append(t("<span />").addClass("icon icon-"+n.unit)).appendTo(a)})}(),t("button[name=add]").click(function(a){a.preventDefault();var n=parseInt(t(this).val()),e=parseInt(N.val());N.val(e+n).trigger("change")}),t("button[name=reset]").click(function(t){t.preventDefault(),N.val(0).trigger("change")}),t("[name=expectation]:input").change(function(){m(),l()}).val(T);var f=t("#prize_list");y.forEach(function(a){t('<div class="prize-list" />').append(t('<h4 class="prize-list-header" />').text(a.name).append(t('<span class="prize-value" />').text("@"+a.value))).append(t('<div class="prize-list-body" />').attr("data-prize",a.unit)).appendTo(f)});var h=M.reduce(function(t,a){return Math.max(t,a.drops.length)},0),g=o();g.maps.forEach(function(t,a){M[a].expectation=t.expectation}),D=g.syncCurrentEnabled;var b=void 0,z=function(){b&&clearTimeout(b),setTimeout(function(){var a=t("#map");M.forEach(function(t,n){var e=a.find("tr[data-map="+n+"]"),i=Math.max(parseInt(e.find("input[name=num_laps]").val())||0,0),s=Math.max(parseInt(e.find("input[name=num_drops]").val())||0,0),o=e.find("input[name=actual_expectation]"),u=Math.max(parseFloat(o.val())||0,0);"aggregate"===j&&(u=s/i||0,o.val(u));var c=Math.floor(u);e.find("button[name=increase]").val(c).text("+"+r(c)),g.maps[n].numLaps=i,g.maps[n].numDrops=s,t.expectation=g.maps[n].expectation=u}),u(g),d(),m(),l()},100)},R=t("#map").on("keyup","input[type=number]",function(){z(),s()}).on("change","input[type=number]",function(){z(),s()}).on("click","input[type=number]",function(){this.select()}).on("click","button[name=increase]",function(a){a.preventDefault();var n=t(this).closest("tr"),e=n.find("input[name=num_laps]"),i=parseInt(e.val())+1;e.val(i);var r=n.find("input[name=num_drops]"),s=parseInt(r.val())+parseInt(this.value);r.val(s),r.trigger("change")}).on("change","input[name=expectation_input_mode]",function(){j=t(this).val(),g.expectationInputMode=j,u(g),R.find("input[name=num_laps], input[name=num_drops]").parent().toggle("aggregate"===j).end().end().find("input[name=actual_expectation]").parent().toggle("direct"===j).end().end().find("input[name=sync]").closest("tfoot").toggle("aggregate"===j),z()}).on("click","input[name=sync]",function(){g.syncCurrentEnabled=D=this.checked,u(g),s()}),O=R.find("tbody");M.forEach(function(a,n){var e=g.maps[n],i=t("<td />").attr("data-chart",n).append(t('<span class="barchart" />')).append(t('<span class="barchart-label" />')).append(t('<span class="marathon" />'));t("<tr />").attr("data-map",n).append(t("<th />").text(a.name)).append(t("<td />").text(""+a.charisma+"/"+a.stamina)).append(function(){for(var n=a.drops.map(function(a){var n=a.icon?t("<i />").attr("title",a.name).addClass("icon icon-"+a.icon):t("<span />").text(a.name),e=a.set?t('<span class="badge" />').text("x"+a.set):null;return t("<td />").append(n).append(e)}),e=a.drops.length;h>e;e++)n.push(t("<td />"));return n}).append(function(){var a=t('<span class="input-group input-group-sm" />').append(t('<span class="input-group-addon">1周の期待値</span>')).append(t('<input type="number" name="actual_expectation" min="0" class="form-control" />').val(e.expectation)),n=t('<span class="input-group input-group-sm" />').append(t('<span class="input-group-addon">周回</span>')).append(t('<input type="number" name="num_laps" min="0" class="form-control" />').val(e.numLaps)).append(t('<span class="input-group-addon">ドロップ</span>')).append(t('<input type="number" name="num_drops" min="0" class="form-control" />').val(e.numDrops)).append(t('<span class="input-group-btn"><button name="increase" class="btn btn-default"></button></span>'));return t('<td class="expectation" />').append(n).append(a)}).append(i).prependTo(O)}),t("#map thead th.drops").attr("colspan",h),C&&!function(){var a=t("#rewards tbody");w.forEach(function(n){var e=t('<span class="icon" />').addClass("icon-"+n.unit);t("<tr />").attr("data-amount",n.amount).append(t('<td class="text-right" />').html('<span class="diff"></span> '+n.amount)).append(t("<td />").html(e)).appendTo(a)})}();var A=t("[name=estimate_map]:input").change(function(){d(),g.estimateMap=parseInt(t(this).val()),u(g)});M.forEach(function(a,n){t("<option />").val(n).text(a.name+" ("+a.charisma+"/"+a.stamina+")").prependTo(A)});for(var S=t("[name=estimate_rank]:input").change(function(){d(),g.estimateRank=parseInt(t(this).val()),u(g)}),L=1;200>=L;L++){var H=e(L),J=i(L),U=""+L+" ("+H+"/"+J+")";t("<option />").val(L).text(U).appendTo(S)}var F=t("[name=estimate_use_crystal]").change(function(){d(),g.estimateUseCrystal=t(this).val(),u(g)}),K=t("[name=estimate_natural_recovery]:input").change(function(){d(),g.estimateNaturalRecovery=this.checked,u(g)});t("*[title]").tooltip(),q.val(g.current),"exchange"===I?N.val(g.objective):N.val([g.objective]),t("[name=current]:input, [name=objective]:input").change(function(){g[this.name]=t(this).val(),u(g),c(),p(),l(),d()}),A.val(g.estimateMap),S.val(g.estimateRank),F.val(g.estimateUseCrystal),K.prop("checked",g.estimateNaturalRecovery),"exchange"===I&&p(),C&&c(),R.find("input[name=sync]").prop("checked",D).end().find('input[name=expectation_input_mode][value="'+g.expectationInputMode+'"]').prop("checked",!0).trigger("change").parent().addClass("active"),t("#initialize-button").on("click",function(){t.removeCookie(E),window.location.reload()});var W=v(),B=["webkitAnimationEnd","mozAnimationEnd","MSAnimationEnd","oanimationend","animationend"].join(" ");t("#estimate_tutorial").on("click","a",function(a){t("#map .expectation").each(function(){var n=t(this);W&&(a.preventDefault(),n.addClass("animated flash").one(B,function(){n.removeClass("animated flash")}))})}).on("click","button",function(a){g.estimateTutorialHidden=!0,u(g),t(a.delegateTarget).each(function(){var a=t(this);W?a.addClass("animated zoomOutRight").one(B,function(){a.hide()}):a.hide()})}).toggle(!g.estimateTutorialHidden).each(function(){var a=t(this),n=a.find(".anna");a.on("mouseenter",function(){n.addClass("animated bounce")}).on("mouseleave",function(){n.removeClass("animated bounce")})})}var g=n(397),b=a(g),x=b["default"][0],_=x.periods.map(function(t){return t.map(Date.parse)}),k=_.reduce(function(t,a){return t+a[1]-a[0]},0);x.maxObjective=null===x.maxObjective?1/0:x.maxObjective;var y=x.prizes,M=x.maps,w=x.rewards,I="achievement",C=!0,E="resident-soul-timer",T="stamina",j="direct",D=!0,z={current:20,objective:1500,estimateMap:4,estimateRank:100,estimateUseCrystal:"both",estimateNaturalRecovery:!0,expectationInputMode:j,syncCurrentEnabled:D,maps:M.map(function(t){return{numLaps:0,numDrops:0,expectation:t.expectation}}),estimateTutorialHidden:!1,version:2},q=void 0,N=void 0;t(function(){h(),setInterval(f,1e3)})}).call(a,n(1))},397:function(t,a){t.exports=[{id:"20151029",periods:[["2015/10/29 15:00:00","2015/11/05 10:00:00"],["2015/11/05 15:00:00","2015/11/12 10:00:00"]],objectives:{25:"エターナーが仲間になる",50:"スキルレベル2",100:"初期レベル10",150:"スキルレベル3",200:"出撃コスト-1",250:"スキルレベル4",300:"出撃コスト-2",400:"スキルレベル5",500:"初期レベル20",600:"スキルレベル6",700:"出撃コスト-3",800:"スキルレベル7",900:"初期レベル30",1000:"スキルレベル8",1100:"出撃コスト-4",1200:"初期レベル40",1300:"スキルレベル9",1400:"出撃コスト-5",1500:"スキルレベル10",1600:"初期レベル50",1620:"+ 黒聖霊",1665:"+ ゴールドアーマー",1710:"+ 黒聖霊",1755:"+ プラチナアーマー",1800:"+ 虹聖霊"},prizes:[],maps:[{name:"死竜を追う者",charisma:20,stamina:1,expectation:2,drops:[{name:"住民の魂",icon:"resident-soul-1",set:2},{name:"花束",icon:"flower"}]},{name:"魂を狩る魔物",charisma:30,stamina:2,expectation:3,drops:[{name:"住民の魂",icon:"resident-soul-1",set:3},{name:"フューネス",icon:"rean"},{name:"魔水晶",icon:"demon-crystal-1"}]},{name:"カボチャの騎士",charisma:40,stamina:4,expectation:6,drops:[{name:"住民の魂3",icon:"resident-soul-3",set:1},{name:"住民の魂5",icon:"resident-soul-1",set:3},{name:"カシス",icon:"cassis"},{name:"ハリッサ",icon:"harissa"}]},{name:"カボチャの王様",charisma:50,stamina:7,expectation:16,drops:[{name:"住民の魂5",icon:"resident-soul-5",set:2},{name:"住民の魂3",icon:"resident-soul-3",set:2},{name:"ミーシャ",icon:"misha"},{name:"白銀の聖霊",icon:"platinum-sprit"}]},{name:"カボチャのパレード",charisma:80,stamina:9,expectation:15,drops:[{name:"住民の魂5",icon:"resident-soul-5",set:3},{name:"グレイブ",icon:"grave"},{name:"白バケツ",icon:"platinum-bucket"},{name:"魔水晶2",icon:"demon-crystal-2"}]},{name:"魂の集う先",charisma:40,stamina:5,expectation:10,drops:[{name:"住民の魂3",icon:"resident-soul-3",set:3},{name:"住民の魂1",icon:"resident-soul-1",set:1},{name:"シャロン",icon:"sharon"},{name:"白バケツ",icon:"platinum-bucket"}]},{name:"立ち塞がるカボチャ",charisma:70,stamina:8,expectation:16,drops:[{name:"住民の魂5",icon:"resident-soul-5",set:2},{name:"住民の魂3",icon:"resident-soul-3",set:2},{name:"ヴァレリー",icon:"valerie"},{name:"ルビー",icon:"ruby"}]},{name:"悪霊を統べる者",charisma:90,stamina:12,expectation:26,drops:[{name:"住民の魂5",icon:"resident-soul-5",set:4},{name:"住民の魂3",icon:"resident-soul-3",set:2},{name:"虹聖霊",icon:"rainbow-sprit"}]},{name:"トリックオアトリート",charisma:100,stamina:2,expectation:0,drops:[{name:"金聖霊",icon:"gold-sprit"},{name:"白聖霊",icon:"platinum-sprit"},{name:"黒聖霊",icon:"black-sprit"},{name:"虹聖霊",icon:"rainbow-sprit"}]}],rewards:[{amount:45,unit:"gold-bucket"},{amount:90,unit:"gold-sprit"},{amount:135,unit:"platinum-bucket"},{amount:180,unit:"gold-sprit"},{amount:225,unit:"crystal-fragment"},{amount:270,unit:"platinum-sprit"},{amount:315,unit:"gold-bucket"},{amount:360,unit:"platinum-sprit"},{amount:405,unit:"platinum-bucket"},{amount:450,unit:"black-sprit"},{amount:495,unit:"crystal-fragment"},{amount:540,unit:"black-sprit"},{amount:585,unit:"gold-bucket"},{amount:630,unit:"rainbow-sprit"},{amount:675,unit:"platinum-bucket"},{amount:720,unit:"platinum-sprit"},{amount:765,unit:"crystal-fragment"},{amount:810,unit:"platinum-sprit"},{amount:855,unit:"gold-bucket"},{amount:900,unit:"black-sprit"},{amount:945,unit:"platinum-bucket"},{amount:990,unit:"platinum-sprit"},{amount:1035,unit:"crystal-fragment"},{amount:1080,unit:"platinum-sprit"},{amount:1125,unit:"gold-bucket"},{amount:1170,unit:"black-sprit"},{amount:1215,unit:"platinum-bucket"},{amount:1260,unit:"black-sprit"},{amount:1305,unit:"crystal-fragment"},{amount:1350,unit:"rainbow-sprit"},{amount:1395,unit:"gold-bucket"},{amount:1440,unit:"platinum-sprit"},{amount:1485,unit:"platinum-bucket"},{amount:1530,unit:"platinum-sprit"},{amount:1575,unit:"crystal-fragment"},{amount:1620,unit:"black-sprit"},{amount:1665,unit:"gold-bucket"},{amount:1710,unit:"black-sprit"},{amount:1755,unit:"platinum-bucket"},{amount:1800,unit:"rainbow-sprit"}]}]}});