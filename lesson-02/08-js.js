"Cách 1: if...else"
let transportation = "car";

if (transportation === "bike") {
  console.log("Mất khoảng 15 phút");
} else if (transportation === "car") {
  console.log("Mất khoảng 10 phút");
} else if (transportation === "bus") {
  console.log("Mất khoảng 30 phút");
} else if (transportation === "train") {
  console.log("Mất khoảng 45 phút");  
} else {
  console.log("Phương tiện không hợp lệ.");
}

"Cách 2: switch.. case"
let transportation = "train";

switch (transportation) {
    case "bike":
        console.log("Mất khoảng 15 phút");
        break;
    case "car":
        console.log("Mất khoảng 10 phút");
        break;
    case "bus":
        console.log("Mất khoảng 30 phút");
        break;
    case "train":
        console.log("Mất khoảng 45 phút");
        break;
    default:
        console.log("Phương tiện không hợp lệ");
}