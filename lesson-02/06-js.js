"Cách 1: if...else"
let dishes = "pizza";

if (dishes === "burger") {
  console.log("Giá: 5$");
} else if (dishes === "pizza") {
  console.log("Giá: 8$");
} else if (dishes === "sushi") {
  console.log("Giá: 12$");
} else if (dishes === "taco") {
  console.log("Giá: 6$");  
} else {
  console.log("Món ăn không hợp lệ.");
}

"Cách 2: switch.. case"
let dishes = "sushi";

switch (dishes) {
    case "burger":
        console.log("Giá: 5$");
        break;
    case "pizza":
        console.log("Giá: 8$");
        break;
    case "sushi":
        console.log("Giá: 12$");
        break;
    case "taco":
        console.log("Giá: 6$");
        break;
    default:
        console.log("Món ăn không hợp lệ");
}