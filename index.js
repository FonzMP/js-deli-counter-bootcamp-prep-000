var katzDeli = [];

// function insertPerson(katzDeliLine, name){
//   let katDeliLine = katzDeli.push(name);
//   for (let i = 0; i < katzDeliLine.length; i++){
//     currentPerson = katzDeliLine[i];
//     currentPosition = parseInt(i) + 1;
//   }
//   return katzDeliLine;
// }

// function takeANumberExample(katzDeliLine, name) {
//   let position = "";
//   let currentSearchName = String(name);
//   for (let i = 0; i < katzDeliLine.length; i++) {
//     let currentUser = String(katzDeliLine[i]);
//     if (currentUser === currentSearchName) {
//       return "Welcome, " + currentUser + ". You are number " + parseInt(i + 1) + " in line.";
//     } else {
//       position = "Sorry, we couldn't find that name."
//     }
//   }
//   return position
// }

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  for(let i = 0; i < katzDeliLine.length; i++) {
    let currentUser = String(katzDeliLine[i]);
    if (currentUser === name) {
      return "Welcome, " + currentUser + ". You are number " + parseInt(i + 1) + " in line.";
    }
  }
  return "Sorry, not working";
}

function nowServing(katzDelLine){
  let firstPerson = katzDeliLine.shift();
  if (firstPerson === false) {
    return "There is nobody waiting to be served!"
  }
  return firstPerson
}
