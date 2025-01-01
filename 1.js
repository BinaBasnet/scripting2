function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''));
  } 
  let result=reverseNumber(1234);

 document.getElementById('myp').textContent=`reverse number is ${result}`;
 