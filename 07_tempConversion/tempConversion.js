const ftoc = function(fahrenheit) {
  let ftoc = ((fahrenheit - 32) * (5 / 9));
  return Math.round(ftoc * 10) / 10;
};

const ctof = function(celsius) {
  let ctof = (celsius * 9/5) + 32;
  return Math.round(ctof * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
