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
  let currentSearchName = String(name);
  console.log(typeof(currentSearchName));
  console.log(currentSearchName);
  for (let i = 0; i < katzDeliLine.length; i++) {
    let currentUser = String(katzDeliLine[i]);
    console.log(currentUser);
    if (currentUser === currentSearchName) {
      return parseInt(i) + 1;
    } else {
      position = "Sorry, we couldn't find that name."
    }
  }
  return position
}
