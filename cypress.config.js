const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: '1fk3f8',
  e2e: {
    setupNodeEvents(on, config) {
      // Tại đây, có thể thêm các lắng nghe sự kiện Node để tùy chỉnh
    },
    // base URL của ứng dụng, giúp đơn giản hóa việc gọi cy.visit("/")
    baseUrl: 'http://localhost:3000',

    // Cài đặt kích thước khung nhìn (viewport) mặc định cho trình duyệt
    viewportHeight: 1000,
    viewportWidth: 1515,

    // Bật các tính năng thử nghiệm trong Cypress Studio
    experimentalStudio: true,

    // Thiết lập trình duyệt mặc định để chạy test
    browser: 'chrome', // Trình duyệt mặc định là Chrome

    // Bật tính năng ghi video khi test fail
    video: true,
  },
});
