"Cách 1: if...else"
let holiday = "blackfriday";

if (holiday === "blackfriday") {
  console.log("Giảm 50% toàn bộ sản phẩm!");
} else if (holiday === "cybermonday") {
  console.log("Giảm 40% cho sản phẩm công nghệ!");
} else if (holiday === "christmas") {
  console.log("Ưu đãi đặc biệt mùa Noel - giảm 30%!");
} else {
  console.log("Ngày lễ không hợp lệ.");
}

"Cách 2: switch.. case"
let holiday = "christmas";

switch (holiday) {
    case "blackfriday":
        console.log("Giảm 50% toàn bộ sản phẩm!");
        break;
    case "cybermonday":
        console.log("Giảm 40% cho sản phẩm công nghệ!");
        break;
    case "christmas":
        console.log("Ưu đãi đặc biệt mùa Noel - giảm 30%!");
        break;
    default:
        console.log("Ngày lễ không hợp lệ");
}