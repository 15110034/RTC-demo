const openStream = require("./openStream.js");
const playVideo = require("./playVideo.js");
const Peer = require("simple-peer");
      const $ = require("jquery");
openStream(function(stream){
    playVideo(stream, "localStream");
    const p = new Peer({ initiator: location.hash === '#1', trickle: false ,stream:stream}) // trickle là sử dụng server bên ngoài nhưng khi chưa build thì để là false 
    p.on('signal', (token) => {
      console.log(token);
      $('#txtMySignal').val(JSON.stringify(token)); // cho cái text ở home.ejs là token



    }); // khi có sự kiện vào trang /#1 nó sẽ phát ra sự kiện signal tạo ra token offer 
    /*p.on('connect', function () {
      //console.log('CONNECT');
      setInterval(() => p.send(Math.random()), 2000);

    });*/
    p.on('stream',friendStream => playVideo(friendStream,'friendStream'));

   ///   p.on('data', data => console.log("nhận dữ liệu : " + data));
    $('#btnConnect').click(() => {
      const friendSignal = JSON.parse($('#txtFriendSignal').val());
      p.signal(friendSignal);
    });
});



//console.log("xin chao cac ban");

