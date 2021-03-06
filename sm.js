const Gpio = require('pigpio').Gpio;

const HIGH = 1;
const LOW = 0;
const dutyCycle = 230;

const in1 = new Gpio(4, {
	mode: Gpio.OUTPUT
});
const in2 = new Gpio(17, {
	mode: Gpio.OUTPUT
});

// in1.pwmWrite(dutyCycle);
// in2.pwmWrite(dutyCycle);

in1.digitalWrite(HIGH);
in2.digitalWrite(LOW);

process.on("SIGINT", function(){
	in1.digitalWrite(LOW);
	in2.digitalWrite(LOW);

  console.log('shutdown!');
  process.exit(0);
});