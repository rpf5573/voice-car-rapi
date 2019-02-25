const secret = 'thoumas138';

let http = require('http');
let crypto = require('crypto');

const exec = require('child_process').exec;

http.createServer(function(req, res){
  req.on('data', function(chunk){
    let sig = "sha1=" + crypto.createHmac('sha1', secret).update(chunk.toString()).digest('hex');
    if (req.headers['x-hub-signature'] == sig) {
      deploy(res);
    } else {
      console.log('un matched');
    }
  });
  res.end();
}).listen(8080);

function deploy(res){
  exec('/home/pi/voice-car/deploy.sh', function(err, stdout, stderr){
    console.log('deploy.sh is called');
    if (err) {
      console.error(err);
      res.writeHead(404);
      return res.end();
    }
    res.writeHead(200);
    res.end();
  });
}

