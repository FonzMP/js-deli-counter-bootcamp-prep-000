var katzDeli = [];

function insertPerson(katzDeliLine, name){
  let katDeliLine = katzDeli.push(name);
  for (let i = 0; i < katzDeliLine.length; i++){
    currentPerson = katzDeliLine[i];
    currentPosition = parseInt(i) + 1;
  }
  return katzDeliLine;
}

function takeANumber(katzDeliLine, name) {
  for (let i = 0; i < katzDeliLine.length; i++) {
    currentPerson = katzDeliLine[i];
    if (currentUser === name) {
      return parseInt(i) + 1;
    } else {
      return "Sorry, we couldn't find that name."
    }
    continue
  }
}
