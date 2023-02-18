let oneToNine = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
};
let tens = {
  1: 'ten',
  2: 'twenty',
  3: 'thirty',
  4: 'forty',
  5: 'fifty',
};
let tenToTwentyThree = {
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  21: 'twenty one',
  22: 'twenty two',
  23: 'twenty three',
};

function militaryTime(time = '1:01AM') {
  let add = time.slice(-2) == 'PM' ? 12 : 0;
  let hour = time.split(':')[0];
  hour == 12 && !add ? (hour = 0) : null;
  add && hour < 12 ? (hour = +hour + add) : null;
  let mins = time.split(':')[1].slice(0, 2);
  let min1 = mins[0];
  let min2 = mins[1];
  let strMin1 = +min1 > 0 ? tens[min1] : 'zero';
  let strMin2 = oneToNine[min2];
  let strMin = mins == '00' ? 'hundred hours' : strMin1 + ' ' + strMin2;
  let strHour = +hour > 9 ? tenToTwentyThree[hour] : oneToNine[hour];
  console.log(strHour + ' ' + strMin);
}
militaryTime('11:59PM');
militaryTime();
militaryTime('4:00PM');
militaryTime('11:00AM');
militaryTime('11:23AM');
militaryTime('6:45PM');
militaryTime('7:45AM');
militaryTime('5:05PM');
militaryTime('4:09AM');
