"Cách 1: if...else"
let subscription = "free";

if (subscription === "free") {
  console.log("Bạn có thể nghe nhạc nhưng có quảng cáo.");
} else if (subscription === "premium") {
  console.log("Không quảng cáo, nghe nhạc offline!");
} else if (subscription === "family") {
  console.log("Gói dùng cho nhiều thành viên!");
} else if (subscription === "student") {
  console.log("Ưu đãi dành riêng cho sinh viên!");  
} else {
  console.log("Gói không hợp lệ.");
}

"Cách 2: switch.. case"
let subscription = "student";

switch (subscription) {
    case "free":
        console.log("Bạn có thể nghe nhạc nhưng có quảng cáo.");
        break;
    case "premium":
        console.log("Không quảng cáo, nghe nhạc offline!");
        break;
    case "family":
        console.log("Gói dùng cho nhiều thành viên!");
        break;
    case "student":
        console.log("Ưu đãi dành riêng cho sinh viên!");
        break;
    default:
        console.log("Gói không hợp lệ");
}