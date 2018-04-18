var katzDeli = [];

function insertPerson(katzDeliLine, name){
  let katDeliLine = katzDeli.push(name);
  for (let i = 0; i < katzDeliLine.length; i++){
    currentPerson = katzDeliLine[i];
    console.log(currentPerson);
    currentPosition = parseInt(i) + 1;
    console.log(currentPosition);
  }
  return katzDeliLine;
}
