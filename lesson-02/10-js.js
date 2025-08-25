"Cách 1: if...else"
let idol = "bts";

if (idol === "bts") {
  console.log("Nghe ngay 'Dynamite'!");
} else if (idol === "blackpink") {
  console.log("Thử 'How You Like That' nào!");
} else if (idol === "exo") {
  console.log("Đừng bỏ lỡ 'Love Shot'!");
} else if (idol === "twice") {
  console.log("Bật ngay 'The Feels' nào!");  
} else {
  console.log("Idol không hợp lệ.");
}

"Cách 2: switch.. case"
let idol = "exo";

switch (idol) {
    case "bts":
        console.log("Nghe ngay 'Dynamite'!");
        break;
    case "blackpink":
        console.log("Thử 'How You Like That' nào!");
        break;
    case "exo":
        console.log("Đừng bỏ lỡ 'Love Shot'!");
        break;
    case "twice":
        console.log("Bật ngay 'The Feels' nào!");
        break;
    default:
        console.log("Idol không hợp lệ");
}