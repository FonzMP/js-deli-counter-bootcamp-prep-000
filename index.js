var katzDeli = [];

function takeANumber(katzDeliLine, name){
  let katDeliLine = katzDeli.push(name);
  for (let i = 0; i < katzDeliLine.length; i++){
    console.log(katzDeliLine[i]);
    console.log(parseInt(i) + 1);
  }
  return katzDeliLine;
}
