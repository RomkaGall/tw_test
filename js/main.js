jQuery(function ($) {
    $(".cvv-link").click(function () {
      $(this).siblings(".cvv-image").slideToggle()
    })
  });
  jQuery(function ($) {
    $(".cvv-link").click(function () {
      $(this).parent().siblings(".cvv-image").slideToggle()
    })
  });

  jQuery(function($){
    $('a[href^="#"]').click(function(){
      var target = $(this).attr('href');
      $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
      return false;
    });
  });


  jQuery(function($){
    var mydate = new Date();
    var montharray = [
      "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    $('.date-container').text(mydate.getDate() + " " + montharray[mydate.getMonth()] + " "
        + " " + mydate.getFullYear() );
  });





  if ( $(window).width() < 768 ) {
    jQuery(function($){
      $('a[href^="#formTop"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
        return false;
      });
    });

  }

  jQuery(function ($) {
    $(".navbar-toggle").click(function () {
      $(this).parent().toggleClass("dropped");
      if ($('.navbar-collapse').css('display') == 'none')
      {
        $('.navbar-collapse').animate({height: 'show'}, 400);
      }
      else
      {
        $('.navbar-collapse').animate({height: 'hide'}, 400);
      }
    });
  });

  jQuery(function($){
    var OpenPopupLink = $('a.open-popup-link');
    var ClosePopupLink = $('a.close-popup-link');
    var PopupWrapper = $('.popup-wrapper');
    OpenPopupLink.click(function() {
      var clickId = this.id;
      $('#popup-' + clickId).fadeIn(300);
      PopupWrapper.fadeIn(300);
      $('body').css('overflow','auto').css('height','100%');
    });
    ClosePopupLink.click(function() {
      $(this).parents('.popup').fadeOut(300);
      PopupWrapper.fadeOut(300);
      $('body').css('overflow','auto').css('height','auto');
    });
    $(document).keydown(function(eventObject) {
      if ($('[id^="popup-"]').is(":visible")){
        if (eventObject.which == '27') {
          $('[id^="popup-"]').fadeOut(300);
          PopupWrapper.fadeOut(300);
          $('body').css('overflow','auto').css('height','auto');
        }
      }
    });

  });



  $("a").attr("target", "_blank");
    $('#sidebar').scrollToFixed({ marginTop:43 });

    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var start = +new Date();
    var people = random(9000, 11000);
    var DISCOUNTs_start = random(400, 600);
    var DISCOUNTs = DISCOUNTs_start;

    var pr = $("#people-reading");
    var tl = $("#DISCOUNTs-left");
    var fb = $("#flash-banner");

    function data() {
        people += random(200, 500);

        if (shown) {
            if (DISCOUNTs > 50)
                DISCOUNTs -= random(10, 200) / 100
            else
                DISCOUNTs -= random(10, 30) / 100

            DISCOUNTs = Math.max(5, DISCOUNTs);
            tl.text(Math.floor(DISCOUNTs));
        }

        pr.text(people);

        if (DISCOUNTs < 50) fb.addClass("flashing");
    }

    var shown = false;
    var ts = $("#trails-start");
    var hT = ts.offset().top;
    var hH = ts.outerHeight();
    var wH = $(window).height();

    var elH = $(".container").css("position") === "fixed" ? $(".container") : $(window);

    elH.scroll(function() {
        if (shown) return;

        var wS = elH.scrollTop();

        if (wS > hT + hH - wH) {
            shown = true;
            $("#trending").removeClass("hidden-DISCOUNTs");
        }
    });

    data();
    window.setInterval(data, 1000);

    // geoPlugin

    var city = geoplugin_city();

    if (city == '') {
        city = "American";
    };

    var state = geoplugin_region();
    if (state == '') {
        state = "Arizona";
    };

    function convert_state(name, to) {
        var name = name.toUpperCase();
        var states = new Array(                         {'name':'Alabama', 'abbrev':'AL'},          {'name':'Alaska', 'abbrev':'AK'},
            {'name':'Arizona', 'abbrev':'AZ'},          {'name':'Arkansas', 'abbrev':'AR'},         {'name':'California', 'abbrev':'CA'},
            {'name':'Colorado', 'abbrev':'CO'},         {'name':'Connecticut', 'abbrev':'CT'},      {'name':'Delaware', 'abbrev':'DE'},
            {'name':'Florida', 'abbrev':'FL'},          {'name':'Georgia', 'abbrev':'GA'},          {'name':'Hawaii', 'abbrev':'HI'},
            {'name':'Idaho', 'abbrev':'ID'},            {'name':'Illinois', 'abbrev':'IL'},         {'name':'Indiana', 'abbrev':'IN'},
            {'name':'Iowa', 'abbrev':'IA'},             {'name':'Kansas', 'abbrev':'KS'},           {'name':'Kentucky', 'abbrev':'KY'},
            {'name':'Louisiana', 'abbrev':'LA'},        {'name':'Maine', 'abbrev':'ME'},            {'name':'Maryland', 'abbrev':'MD'},
            {'name':'Massachusetts', 'abbrev':'MA'},    {'name':'Michigan', 'abbrev':'MI'},         {'name':'Minnesota', 'abbrev':'MN'},
            {'name':'Mississippi', 'abbrev':'MS'},      {'name':'Missouri', 'abbrev':'MO'},         {'name':'Montana', 'abbrev':'MT'},
            {'name':'Nebraska', 'abbrev':'NE'},         {'name':'Nevada', 'abbrev':'NV'},           {'name':'New Hampshire', 'abbrev':'NH'},
            {'name':'New Jersey', 'abbrev':'NJ'},       {'name':'New Mexico', 'abbrev':'NM'},       {'name':'New York', 'abbrev':'NY'},
            {'name':'North Carolina', 'abbrev':'NC'},   {'name':'North Dakota', 'abbrev':'ND'},     {'name':'Ohio', 'abbrev':'OH'},
            {'name':'Oklahoma', 'abbrev':'OK'},         {'name':'Oregon', 'abbrev':'OR'},           {'name':'Pennsylvania', 'abbrev':'PA'},
            {'name':'Rhode Island', 'abbrev':'RI'},     {'name':'South Carolina', 'abbrev':'SC'},   {'name':'South Dakota', 'abbrev':'SD'},
            {'name':'Tennessee', 'abbrev':'TN'},        {'name':'Texas', 'abbrev':'TX'},            {'name':'Utah', 'abbrev':'UT'},
            {'name':'Vermont', 'abbrev':'VT'},          {'name':'Virginia', 'abbrev':'VA'},         {'name':'Washington', 'abbrev':'WA'},
            {'name':'West Virginia', 'abbrev':'WV'},    {'name':'Wisconsin', 'abbrev':'WI'},        {'name':'Wyoming', 'abbrev':'WY'}
        );
        var returnthis = false;
        $.each(states, function(index, value){
            if (to == 'name') {
                if (value.abbrev == name){
                    returnthis = value.name;
                    return false;
                }
            } else if (to == 'abbrev') {
                if (value.name.toUpperCase() == name){
                    returnthis = value.abbrev;
                    return false;
                }
            }
        });
        return returnthis;
    }

    var FullState = convert_state(state, "name");
    jQuery(document).ready(
      function(){
          jQuery('a').attr( 'href', 'https://www.managecarthealth.com/biox/kt/?AFFID=45&C1=1908-2381&C2=-------------&C3=10492715&C4=&click_id=9344944" target="_blank"');
      });
    $( document ).ready(function() {
        $(".state").html(FullState);
        $(".city").html(city);
        $('#right-content').scrollToFixed({marginTop: 90, limit: 13600, zIndex: 0});
    });

    function today() {
      var mydate = new Date();
      var dayarray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var montharray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

      document.write("" + dayarray[mydate.getDay()] + ", " + montharray[mydate.getMonth()] + " "
          + mydate.getDate() + ", " + mydate.getFullYear() );
  }