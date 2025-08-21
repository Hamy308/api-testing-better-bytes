# API testing buổi 1: Getting started with API 
## API là gì 
- Application Programming Interface
- Bộ quy tắc giúp các phần mềm giao tiếp với nhau ⇒ phát triển độc lập, tốc độ phát triển nhanh hơn
## Tại sao cần test API
- Đảm bảo dữ liệu hoạt động đúng mong đợi
  - Nếu API ko trả về kết quả đúng hoặc gây lỗi, nó sẽ ảnh hưởng đến toàn bộ hệ thống VD shopee kết hợp vs cổng thanh toán, nếu API lỗi thì ảnh hưởng đến hoạt động mua hàng của ng dùng
- Phát hiện lỗi sớm
  - Phát hiện trước khi hệ thống triển khai hoặc tích hợp vs thành phần khác
- Đảm bảo hiệu năng
  - Đảm bảo hoạt động nhanh chóng và ổn định trong mọi điều kiện tải
- Bảo mật 
  - API thường trao đổi dữ liệu nhạy cảm
  - Tránh các cuộc tấn công
## Các hình thức test API phổ biến
- Functional Testing
  - Kiểm thử chức năng
  - API hoạt động đúng mong đợi
- Load testing
  - Kiểm thử tải
  - Kiểm tra hiệu suất API khi chịu tải lớn
- Security testing
  - Kiểm thử bảo mật
  - Xác định lỗ hổng bảo mật của API
- Intergration testing 
  - Kiểm thử tích hợp
  - Đảm bảo API hoạt động tốt khi kết nối vs hệ thống khác
## Các loại API phổ biến
- Web API (REST SOAP GraphQL)
  - REST API
    - Sử dụng phương thức http (Get Post Put Path Delete)
    - Đơn giản, dễ sử dụng, khả năng mở rộng cao
  - SOAP API
    - GIao thức XML
    - Hệ thống cần bảo mật và tin cậy cao VD ngân hàng
  - GraphQL
      - Ngôn ngữ FB phát triển vào năm 2012
      - Cấu trúc query phản ánh cấu trúc data trả về, dễ hiểu và maintain
      - đặc biệt hay dùng trong blockchain
- Library/ Frameword APIs
  - Cho phép lập trình viên sử dụng các tính năng có sẵn
  - VD Java API, .NET Framework API, React API
- Operating system APIs
  - Cho phép ứng dụng tương tác với hệ điều hành
  - Windows API, Linux Kernel API
  - VD di chuột thì trên màn hình cũng di, khi click thì cũng click
- Hardware APIs
  - Cho phép phần mềm giao tiếp vs phần cứng
  - VD Camera API, Printer API, USB API
## Các công cụ test API phổ biến
- Test manual
  - cURL
  - Postman
  - IntelliJ IDE
  - Jmeter
  - SOAP UI
- Test tự động
  - Playwright
  - RestAssured
  - Cypress
  - Karate
  - Katalon
  - Selenium
  - WebdriverIO
## XML?
  - XML= extensible markup language
  - Một ngôn ngữ đánh dấu, tự giải thích
  - Chuẩn được w3 gợi ý dùng
  - BT mẫu: khai báo thông tin cá nhân
```<?xml version="1.0" encoding="UTF-8"?>
<person>
 <name>My</name>
 <nickname>Mira</nickname>
 <favorites>
  <favorite>Cat</favorite>
  <favorite>Swimming</favorite>
 </favorites>
</person>
```

## JSON
  - Javascipt object notation
  - Là định dạng text, dùng format của Javascript Object
  - Dùng để truyền dữ liệu, tương tự xml nhưng nhẹ hơn
  - Không phụ thuộc ngôn ngữ lập trình
  - JSON tự giải thích thông qua các key
  - "key":"value", số thì ko cần ""
  - Ngoặc vuông thể hiện nhiều giá trị, ví dụ nhiều sở thích thì trong ngoặc vuông. Nếu khai báo nhiều mảng cùng lúc vd My, Nguyệt, Phượng thì cũng cần ngoặc vuông bao ngoài biểu thị là nhiều, giữa các thành phần có dấu , ngăn cách
```
[{
 "name": "My",
 "nickname": "Mira",
 "favorites": [
 "cat",
 "swimming"
 ]
},
{
 "name": "Phuong",
 "nickname": "Chii",
 "favorites": [
 "game",
 "art"
 ]
}]
```
  - Sử dụng congcu.org, format json tool để format lại cho đẹp