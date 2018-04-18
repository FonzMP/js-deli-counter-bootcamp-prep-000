var katzDeli = [];

function takeANumber(katzDeliLine, name){
  let katDeliLine = katzDeli.push(name);
  for (let i = 0; i < katzDeliLine.length; i++){
    currentPerson = katzDeliLine[i];
    console.log(currentPerson);
    currentPosition = parseInt(i) + 1;
    console.log(parseInt(i) + 1);
  }
  return katzDeliLine;
}
