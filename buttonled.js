var GPIO = require('onoff').Gpio;
var LED = new GPIO(4, 'out');
var pushButton = new GPIO(17, 'in', 'both');

pushButton.watch(function(err, value) {
  if (err) {
    console.error("Error : ", err);
    return
  }

  console.log( 'pushButton value : ', value );

  LED.writeSync(value);
});

function unexportOnClose() {
  LED.writeSync(0);
  LED.unexport();
  pushButton.unexport();
}

process.on('SIGINT', unexportOnClose);