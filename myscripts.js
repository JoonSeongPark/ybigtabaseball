onload = function() {
    var DEBUG = false;
    function toggleClass() {
        // Cache the hidden menu, toggle the class
        var hiddenMenu = document.querySelector('.hiddenMenu');
        var darkFade = document.getElementById('darkFade');

        hiddenMenu.classList.toggle('hidden');
        darkFade.classList.toggle('fade');

        // See if this thing is working!
        if(DEBUG){
            alert('test');
        }
    }

    var button = document.getElementById('spark');
    button.addEventListener('click', toggleClass);

    // var button2 = document.getElementById('close');
    // button2.addEventListener('click', toggleClass);

    var refereeLf = [
        { name: "강광회", html: "./kgh.html" },
        { name: "권영철", html: "./kyc.html" },
        { name: "김성철", html: "./ksc.html" },
        { name: "김정국", html: "./kjk.html" },
        { name: "나광남", html: "./ngn.html" },
        { name: "문승훈", html: "./msh.html" },
        { name: "박기택", html: "./pkt.html" },
        { name: "배병두", html: "./bbd.html" },
        { name: "오훈규", html: "./ohg.html" },
        { name: "원현식", html: "./whd.html" },
        { name: "윤태수", html: "./yts.html" },
        { name: "이기중", html: "./lgj.html" },
        { name: "이영재", html: "./lyj.html" },
        { name: "장준영", html: "./jjy.html" },
        { name: "정종수", html: "./jjs.html" },
        { name: "추평호", html: "./cph.html" },
        { name: "황인태", html: "./hit.html" }
      ];
      var refereeRg = [
        { name: "구명환", html: "./kmh.html" },
        { name: "김병주", html: "./kbj.html" },
        { name: "김익수", html: "./kis.html" },
        { name: "김준희", html: "./kjh.html" },
        { name: "문동균", html: "./mdg.html" },
        { name: "박근영", html: "./pgy.html" },
        { name: "박종철", html: "./pjc.html" },
        { name: "송수근", html: "./ssg.html" },
        { name: "우효동", html: "./whd.html" },
        { name: "윤상원", html: "./ysw.html" },
        { name: "이계성", html: "./lgs.html" },
        { name: "이민호", html: "./lmh.html" },
        { name: "이용혁", html: "./lyh.html" },
        { name: "전일수", html: "./jis.html" },
        { name: "최수원", html: "./csw.html" },
        { name: "함지웅", html: "./hjw.html" }
      ];
    
      var str = "<ul>";
      refereeLf.forEach(element => {
        str +=
          "<li><a href=" +
          element.html +
          '><img src="./img/baseball_ball.png" width="18%" height="18%">' +
          element.name +
          "</a></li>";
      });
      str += "</ul>";
      document.getElementById("innerHidden_lf").innerHTML = str;
    
      var str = "<ul>";
      refereeRg.forEach(element => {
        str +=
          "<li><a href=" +
          element.html +
          '><img src="./img/baseball_ball.png" width="23%" height="23%">' +
          element.name +
          "</a></li>";
      });
      str += "</ul>";
      document.getElementById("innerHidden_rg").innerHTML = str;
};



$(document).ready(function() {
    $('.samsung_logo').on('click', function() {
        $(this).attr('src', './Logo_img/samsung_lions_2.png');
        $('.hanhwa_logo').attr('src', './Logo_img/hanhwa_eagles.png');
        $('.doosan_logo').attr('src', './Logo_img/doosan_bears.png');
        $('.nc_logo').attr('src', './Logo_img/nc_dinos.png');
        $('.kiwoom_logo').attr('src', './Logo_img/kiwoom_heroes.png');
        $('.sk_logo').attr('src', './Logo_img/sk_wyverns.png');
        $('.kt_logo').attr('src', './Logo_img/kt_wiz.png');
        $('.lg_logo').attr('src', './Logo_img/lg_twins.png');
        $('.lotte_logo').attr('src', './Logo_img/lotte_giants.png');
        $('.kia_logo').attr('src', './Logo_img/kia_tigers.png');
        $('.sl').show();
        $('.he').hide();
        $('.db').hide();
        $('.nd').hide();
        $('.kh').hide();
        $('.sw').hide();
        $('.kw').hide();
        $('.lt').hide();
        $('.lg').hide();
        $('.kt').hide();
    });
    $('.hanhwa_logo').on('click', function() {
        $(this).attr('src', './Logo_img/hanhwa_eagles_2.png');
        $('.samsung_logo').attr('src', './Logo_img/samsung_lions.png');
        $('.doosan_logo').attr('src', './Logo_img/doosan_bears.png');
        $('.nc_logo').attr('src', './Logo_img/nc_dinos.png');
        $('.kiwoom_logo').attr('src', './Logo_img/kiwoom_heroes.png');
        $('.sk_logo').attr('src', './Logo_img/sk_wyverns.png');
        $('.kt_logo').attr('src', './Logo_img/kt_wiz.png');
        $('.lg_logo').attr('src', './Logo_img/lg_twins.png');
        $('.lotte_logo').attr('src', './Logo_img/lotte_giants.png');
        $('.kia_logo').attr('src', './Logo_img/kia_tigers.png');
        $('.sl').hide();
        $('.he').show();
        $('.db').hide();
        $('.nd').hide();
        $('.kh').hide();
        $('.sw').hide();
        $('.kw').hide();
        $('.lt').hide();
        $('.lg').hide();
        $('.kt').hide();
    });
    $('.doosan_logo').on('click', function() {
        $(this).attr('src', './Logo_img/doosan_bears_2.png');
        $('.samsung_logo').attr('src', './Logo_img/samsung_lions.png');
        $('.hanhwa_logo').attr('src', './Logo_img/hanhwa_eagles.png');
        $('.nc_logo').attr('src', './Logo_img/nc_dinos.png');
        $('.kiwoom_logo').attr('src', './Logo_img/kiwoom_heroes.png');
        $('.sk_logo').attr('src', './Logo_img/sk_wyverns.png');
        $('.kt_logo').attr('src', './Logo_img/kt_wiz.png');
        $('.lg_logo').attr('src', './Logo_img/lg_twins.png');
        $('.lotte_logo').attr('src', './Logo_img/lotte_giants.png');
        $('.kia_logo').attr('src', './Logo_img/kia_tigers.png');
        $('.sl').hide();
        $('.he').hide();
        $('.db').show();
        $('.nd').hide();
        $('.kh').hide();
        $('.sw').hide();
        $('.kw').hide();
        $('.lt').hide();
        $('.lg').hide();
        $('.kt').hide();
    });
    $('.nc_logo').on('click', function() {
        $(this).attr('src', './Logo_img/nc_dinos_2.png');
        $('.samsung_logo').attr('src', './Logo_img/samsung_lions.png');
        $('.hanhwa_logo').attr('src', './Logo_img/hanhwa_eagles.png');
        $('.doosan_logo').attr('src', './Logo_img/doosan_bears.png');
        $('.kiwoom_logo').attr('src', './Logo_img/kiwoom_heroes.png');
        $('.sk_logo').attr('src', './Logo_img/sk_wyverns.png');
        $('.kt_logo').attr('src', './Logo_img/kt_wiz.png');
        $('.lg_logo').attr('src', './Logo_img/lg_twins.png');
        $('.lotte_logo').attr('src', './Logo_img/lotte_giants.png');
        $('.kia_logo').attr('src', './Logo_img/kia_tigers.png');
        $('.sl').hide();
        $('.he').hide();
        $('.db').hide();
        $('.nd').show();
        $('.kh').hide();
        $('.sw').hide();
        $('.kw').hide();
        $('.lt').hide();
        $('.lg').hide();
        $('.kt').hide();
    });
    $('.kiwoom_logo').on('click', function() {
        $(this).attr('src', './Logo_img/kiwoom_heroes_2.png');
        $('.samsung_logo').attr('src', './Logo_img/samsung_lions.png');
        $('.hanhwa_logo').attr('src', './Logo_img/hanhwa_eagles.png');
        $('.doosan_logo').attr('src', './Logo_img/doosan_bears.png');
        $('.nc_logo').attr('src', './Logo_img/nc_dinos.png');
        $('.sk_logo').attr('src', './Logo_img/sk_wyverns.png');
        $('.kt_logo').attr('src', './Logo_img/kt_wiz.png');
        $('.lg_logo').attr('src', './Logo_img/lg_twins.png');
        $('.lotte_logo').attr('src', './Logo_img/lotte_giants.png');
        $('.kia_logo').attr('src', './Logo_img/kia_tigers.png');
        $('.sl').hide();
        $('.he').hide();
        $('.db').hide();
        $('.nd').hide();
        $('.kh').show();
        $('.sw').hide();
        $('.kw').hide();
        $('.lt').hide();
        $('.lg').hide();
        $('.kt').hide();
    });
    $('.sk_logo').on('click', function() {
        $(this).attr('src', './Logo_img/sk_wyverns_2.png');
        $('.samsung_logo').attr('src', './Logo_img/samsung_lions.png');
        $('.hanhwa_logo').attr('src', './Logo_img/hanhwa_eagles.png');
        $('.doosan_logo').attr('src', './Logo_img/doosan_bears.png');
        $('.nc_logo').attr('src', './Logo_img/nc_dinos.png');
        $('.kiwoom_logo').attr('src', './Logo_img/kiwoom_heroes.png');
        $('.kt_logo').attr('src', './Logo_img/kt_wiz.png');
        $('.lg_logo').attr('src', './Logo_img/lg_twins.png');
        $('.lotte_logo').attr('src', './Logo_img/lotte_giants.png');
        $('.kia_logo').attr('src', './Logo_img/kia_tigers.png');
        $('.sl').hide();
        $('.he').hide();
        $('.db').hide();
        $('.nd').hide();
        $('.kh').hide();
        $('.sw').show();
        $('.kw').hide();
        $('.lt').hide();
        $('.lg').hide();
        $('.kt').hide();
    });
    $('.kt_logo').on('click', function() {
        $(this).attr('src', './Logo_img/kt_wiz_2.png');
        $('.samsung_logo').attr('src', './Logo_img/samsung_lions.png');
        $('.hanhwa_logo').attr('src', './Logo_img/hanhwa_eagles.png');
        $('.doosan_logo').attr('src', './Logo_img/doosan_bears.png');
        $('.nc_logo').attr('src', './Logo_img/nc_dinos.png');
        $('.kiwoom_logo').attr('src', './Logo_img/kiwoom_heroes.png');
        $('.sk_logo').attr('src', './Logo_img/sk_wyverns.png');
        $('.lg_logo').attr('src', './Logo_img/lg_twins.png');
        $('.lotte_logo').attr('src', './Logo_img/lotte_giants.png');
        $('.kia_logo').attr('src', './Logo_img/kia_tigers.png');
        $('.sl').hide();
        $('.he').hide();
        $('.db').hide();
        $('.nd').hide();
        $('.kh').hide();
        $('.sw').hide();
        $('.kw').show();
        $('.lt').hide();
        $('.lg').hide();
        $('.kt').hide();
    });
    $('.lg_logo').on('click', function() {
        $(this).attr('src', './Logo_img/lg_twins_2.png');
        $('.samsung_logo').attr('src', './Logo_img/samsung_lions.png');
        $('.hanhwa_logo').attr('src', './Logo_img/hanhwa_eagles.png');
        $('.doosan_logo').attr('src', './Logo_img/doosan_bears.png');
        $('.nc_logo').attr('src', './Logo_img/nc_dinos.png');
        $('.kiwoom_logo').attr('src', './Logo_img/kiwoom_heroes.png');
        $('.sk_logo').attr('src', './Logo_img/sk_wyverns.png');
        $('.kt_logo').attr('src', './Logo_img/kt_wiz.png');
        $('.lotte_logo').attr('src', './Logo_img/lotte_giants.png');
        $('.kia_logo').attr('src', './Logo_img/kia_tigers.png');
        $('.sl').hide();
        $('.he').hide();
        $('.db').hide();
        $('.nd').hide();
        $('.kh').hide();
        $('.sw').hide();
        $('.kw').hide();
        $('.lt').show();
        $('.lg').hide();
        $('.kt').hide();
    });
    $('.lotte_logo').on('click', function() {
        $(this).attr('src', './Logo_img/lotte_giants_2.png');
        $('.samsung_logo').attr('src', './Logo_img/samsung_lions.png');
        $('.hanhwa_logo').attr('src', './Logo_img/hanhwa_eagles.png');
        $('.doosan_logo').attr('src', './Logo_img/doosan_bears.png');
        $('.nc_logo').attr('src', './Logo_img/nc_dinos.png');
        $('.kiwoom_logo').attr('src', './Logo_img/kiwoom_heroes.png');
        $('.sk_logo').attr('src', './Logo_img/sk_wyverns.png');
        $('.kt_logo').attr('src', './Logo_img/kt_wiz.png');
        $('.lg_logo').attr('src', './Logo_img/lg_twins.png');
        $('.kia_logo').attr('src', './Logo_img/kia_tigers.png');
        $('.sl').hide();
        $('.he').hide();
        $('.db').hide();
        $('.nd').hide();
        $('.kh').hide();
        $('.sw').hide();
        $('.kw').hide();
        $('.lt').hide();
        $('.lg').show();
        $('.kt').hide();
    });
    $('.kia_logo').on('click', function() {
        $(this).attr('src', './Logo_img/kia_tigers_2.png');
        $('.samsung_logo').attr('src', './Logo_img/samsung_lions.png');
        $('.hanhwa_logo').attr('src', './Logo_img/hanhwa_eagles.png');
        $('.doosan_logo').attr('src', './Logo_img/doosan_bears.png');
        $('.nc_logo').attr('src', './Logo_img/nc_dinos.png');
        $('.kiwoom_logo').attr('src', './Logo_img/kiwoom_heroes.png');
        $('.sk_logo').attr('src', './Logo_img/sk_wyverns.png');
        $('.kt_logo').attr('src', './Logo_img/kt_wiz.png');
        $('.lg_logo').attr('src', './Logo_img/lg_twins.png');
        $('.lotte_logo').attr('src', './Logo_img/lotte_giants.png');
        $('.sl').hide();
        $('.he').hide();
        $('.db').hide();
        $('.nd').hide();
        $('.kh').hide();
        $('.sw').hide();
        $('.kw').hide();
        $('.lt').hide();
        $('.lg').hide();
        $('.kt').show();
    });

});

$(document).ready(function() {
    $('#strike_btn').on('click', function () {
        // $('.strike').toggle();
        if($('.samsung_logo').attr('src') === './Logo_img/samsung_lions_2.png') {
            $('.sl_strike').toggle();
        } else if($('.hanhwa_logo').attr('src') === './Logo_img/hanhwa_eagles_2.png') {
            $('.he_strike').toggle();
        } else if($('.doosan_logo').attr('src') === './Logo_img/doosan_bears_2.png') {
            $('.db_strike').toggle();
        } else if($('.nc_logo').attr('src') === './Logo_img/nc_dinos_2.png') {
            $('.nd_strike').toggle();
        } else if($('.kiwoom_logo').attr('src') === './Logo_img/kiwoom_heroes_2.png') {
            $('.kh_strike').toggle();
        } else if($('.sk_logo').attr('src') === './Logo_img/sk_wyverns_2.png') {
            $('.sw_strike').toggle();
        } else if($('.kt_logo').attr('src') === './Logo_img/kt_wiz_2.png') {
            $('.kw_strike').toggle();
        } else if($('.lg_logo').attr('src') === './Logo_img/lg_twins_2.png') {
            $('.lt_strike').toggle();
        } else if($('.lotte_logo').attr('src') === './Logo_img/lotte_giants_2.png') {
            $('.lg_strike').toggle();
        } else if($('.kia_logo').attr('src') === './Logo_img/kia_tigers_2.png') {
            $('.kt_strike').toggle();
        } else {
            $('.strike').toggle();
        }
    });

    $('#ball_btn').on('click', function () {
        // $('.ball').toggle();
        if($('.samsung_logo').attr('src') === './Logo_img/samsung_lions_2.png') {
            $('.sl_ball').toggle();
        } else if($('.hanhwa_logo').attr('src') === './Logo_img/hanhwa_eagles_2.png') {
            $('.he_ball').toggle();
        } else if($('.doosan_logo').attr('src') === './Logo_img/doosan_bears_2.png') {
            $('.db_ball').toggle();
        } else if($('.nc_logo').attr('src') === './Logo_img/nc_dinos_2.png') {
            $('.nd_ball').toggle();
        } else if($('.kiwoom_logo').attr('src') === './Logo_img/kiwoom_heroes_2.png') {
            $('.kh_ball').toggle();
        } else if($('.sk_logo').attr('src') === './Logo_img/sk_wyverns_2.png') {
            $('.sw_ball').toggle();
        } else if($('.kt_logo').attr('src') === './Logo_img/kt_wiz_2.png') {
            $('.kw_ball').toggle();
        } else if($('.lg_logo').attr('src') === './Logo_img/lg_twins_2.png') {
            $('.lt_ball').toggle();
        } else if($('.lotte_logo').attr('src') === './Logo_img/lotte_giants_2.png') {
            $('.lg_ball').toggle();
        } else if($('.kia_logo').attr('src') === './Logo_img/kia_tigers_2.png') {
            $('.kt_ball').toggle();
        } else {
            $('.ball').toggle();
        }
    });
});

