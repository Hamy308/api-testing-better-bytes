"Cách 1: if...else"
let mode = "dark";

if (mode === "dark") {
  console.log("Chế độ tối đã được bật!");
} else if (mode === "light") {
  console.log("Chế độ sáng đã được bật!");
} else {
  console.log("Chế độ không hợp lệ.");
}

"Cách 2: switch.. case"
let mode = "light";

switch (mode) {
    case "dark":
        console.log("Chế độ tối đã được bật!");
        break;
    case "light":
        console.log("Chế độ sáng đã được bật!");
        break;
    default:
        console.log("Chế độ không hợp lệ");
}