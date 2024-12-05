const fs = require('fs');
const xlsx = require('xlsx');

// Đọc file Excel
const excelFilePath = './testData/loginData.xlsx'; // Đường dẫn tới file Excel
const workbook = xlsx.readFile(excelFilePath);

// Chọn sheet đầu tiên
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

// Chuyển dữ liệu từ Excel sang JSON
const jsonData = xlsx.utils.sheet_to_json(sheet);

// Lưu dữ liệu JSON vào thư mục fixtures
const jsonFilePath = './cypress/fixtures/testLoginData.json'; // Đường dẫn lưu file JSON
fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2), 'utf-8');

console.log('Excel đã được chuyển đổi thành JSON và lưu vào fixtures!');
