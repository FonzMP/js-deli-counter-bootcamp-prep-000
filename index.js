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
  let position = "";
  for (let i = 0; i < katzDeliLine.length; i++) {
    let currentUser = katzDeliLine[i];
    if (currentUser === name;) {
      position = parseInt(i) + 1;
    } else {
      position = "Sorry, we couldn't find that name."
    }
  }
  return position;
}
