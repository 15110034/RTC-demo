



function openStream(cb) {
  navigator.mediaDevices.getUserMedia({ audio: false, video: true })
    .then(function (stream) {
      /* use the stream */
      //console.log(stream);

      
      cb(stream);

    })
    .catch(function (err) {
      /* handle the error */
      console.log(err);
    });

}

module.exports = openStream;
