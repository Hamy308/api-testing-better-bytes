"Cách 1: if...else"
let platform = "netflix";

if (platform === "netflix") {
  console.log("Bạn có thể xem 'Stranger Things'!");
} else if (platform === "disney+") {
  console.log("Thử ngay 'Loki' trên Disney+!");
} else if (platform === "hbo") {
  console.log("Xem Game of Thrones' ngay nào!");
} else if (platform === "prime") {
  console.log("Bạn có thể xem 'The Boys'!");  
} else {
  console.log("Nền tảng không hợp lệ.");
}

"Cách 2: switch.. case"
let platform = "hbo";

switch (platform) {
    case "netflix":
        console.log("Bạn có thể xem 'Stranger Things'!");
        break;
    case "disney+":
        console.log("Thử ngay 'Loki' trên Disney+!");
        break;
    case "hbo":
        console.log("Xem 'Game of Thrones' ngay nào!");
        break;
    case "prime":
        console.log("Bạn có thể xem 'The Boys'!");
        break;
    default:
        console.log("Nền tảng không hợp lệ");
}