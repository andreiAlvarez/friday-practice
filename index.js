function rangeOfNumbers(startNum, endNum) {
  return startNum === endNum ? [startNum] : [startNum, ...rangeOfNumbers(startNum + 1, endNum)];
};


const sum = ( ...args) => {
  
  return args.reduce((a, b) => a + b, 0);
}
