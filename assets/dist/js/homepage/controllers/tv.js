function TVCtrl(e,t,a,n,i){e.tvShows=[],t.get("/sonarr_api").success(function(t){e.tvShows.push(t)}),e.eventRender=function(t,a,n){a.attr({"qtip-class":"qtip-tipsy qtip-shadow qtip-rounded",qtip:'<img class="poster mdl-shadow--4dp" src="'+t.poster+'"/><div class="show-overview">'+t.title+"</br> S"+t.season+", E"+t.episode+"</br>"+t.overview+"</div>","qtip-my":"top center","qtip-at":"bottom center","qtip-adjust-method":"shift"}),i(a)(e)},e.uiConfig={calendar:{viewRender:function(e,t){var a=new Date,n=new Date,i=new Date;return i.setDate(a.getDate()-14),n.setDate(a.getDate()+14),n<e.end?($(".fc-next-button").attr("disabled",!0),!1):($(".fc-next-button").attr("disabled",!1),i<e.start?($(".fc-prev-button").attr("disabled",!1),!1):void $(".fc-prev-button").attr("disabled",!0))},editable:!1,handleWindowResize:!0,weekends:!0,allDayDefault:!1,defaultView:"basicWeek",firstDay:"1",columnFormat:"ddd D/M",displayEventTime:!0,timeFormat:"h(:mm)a",timezone:"local",height:"auto",header:{left:"prev",center:"today",right:"next"},eventRender:e.eventRender}},e.$on("loaded",function(){n(function(){a.calendars.sonarr.fullCalendar("today")})})}angular.module("homepageApp").controller("TVCtrl",TVCtrl),TVCtrl.$inject=["$scope","$http","uiCalendarConfig","$timeout","$compile"];