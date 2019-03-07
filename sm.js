const Gpio = require('pigpio').Gpio;

const HIGH = 1;
const LOW = 0;
const dutyCycle = 230;

const in1 = new Gpio(4, {mode: Gpio.OUTPUT});
const in2 = new Gpio(17, {mode: Gpio.OUTPUT});

in1.pwmWrite(dutyCycle);
in2.pwmWrite(dutyCycle);