"Cách 1: if...else"
let score = 85;

if (score < 40) {
  console.log("Xếp hạng: Newbie");
} else if (score >= 40 && score < 70) {
  console.log("Xếp hạng: Intermediate");
} else if (score >= 70 && score < 90) {
  console.log("Xếp hạng: Pro"); 
} else {
  console.log("Legend");
}

"Cách 2: switch.. case"
let score = 50;

switch (true) {
    case score < 40:
        console.log("Xếp hạng: Newbie");
        break;
    case score >= 40 && score <70:
        console.log("Xếp hạng: Intermediate");
        break;
    case  score >= 70 && score <90:
        console.log("Xếp hạng: Pro");
        break;
    default:
        console.log("Legend");
}