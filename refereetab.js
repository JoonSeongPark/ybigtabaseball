onload = () => {
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
