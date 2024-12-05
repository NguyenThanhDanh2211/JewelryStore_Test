// import homePage from '../../pages/homePage';
// import loginPage from '../../pages/loginPage';
// import loginData from '../../fixtures/loginData.json';

// describe('Customer Login Tests', () => {
//   it('TC4: should allow login with valid email and password', () => {
//     homePage.openHomePage();
//     homePage.openLoginPage();

//     loginPage.enterEmail(loginData.validUser.email);
//     loginPage.enterPassword(loginData.validUser.password);
//     loginPage.clickLoginButton();
//     cy.contains('Log in successful!').should('be.visible');
//   });

//   it('TC5: should show error for invalid email and password', () => {
//     homePage.openHomePage();
//     homePage.openLoginPage();

//     loginPage.enterEmail(loginData.invalidUser.email);
//     loginPage.enterPassword(loginData.invalidUser.password);
//     loginPage.clickLoginButton();
//     cy.contains('Invalid email or password!').should('be.visible');
//   });
//   it('TC6: should show error for valid email but wrong password', () => {
//     homePage.openHomePage();
//     homePage.openLoginPage();

//     loginPage.enterEmail(loginData.wrongPassword.email);
//     loginPage.enterPassword(loginData.wrongPassword.password);
//     loginPage.clickLoginButton();
//     cy.contains('Invalid email or password').should('be.visible');
//   });

//   it('TC7: should show error for valid password but wrong email', () => {
//     homePage.openHomePage();
//     homePage.openLoginPage();

//     loginPage.enterEmail(loginData.wrongEmail.email);
//     loginPage.enterPassword(loginData.wrongEmail.password);
//     loginPage.clickLoginButton();
//     cy.contains('Invalid email or password').should('be.visible');
//   });
// });

/////////////////////////////////////
// import homePage from '../../pages/homePage';
// import loginPage from '../../pages/loginPage';
// import logoutPage from '../../pages/logoutPage';

// describe('Data driven login', () => {
//   let excelData = [];

//   // Load dữ liệu từ Excel trước khi chạy tất cả các test
//   before(() => {
//     cy.parseXlsx('cypress/fixtures/loginData.xlsx').then((data) => {
//       excelData = data; // Gán dữ liệu vào biến
//     });
//   });

//   // Tạo các test case sau khi có dữ liệu
//   it('should run login tests dynamically based on Excel data', function () {
//     expect(excelData).to.not.be.empty;

//     excelData.forEach((row, index) => {
//       if (index === 0) return;

//       const email = row[0];
//       const password = row[1];
//       const expectedResult = row[2];

//       cy.log(`Running test case #${index}: ${email} and ${password}`);

//       // Thực hiện kiểm tra login
//       homePage.openHomePage();
//       homePage.openLoginPage();

//       loginPage.enterEmail(email);
//       loginPage.enterPassword(password);
//       loginPage.clickLoginButton();

//       if (expectedResult === 'Log in successful!') {
//         loginPage.verifyLoginMessage(expectedResult);
//         logoutPage.logout();
//         logoutPage.verifyLoggedOut();
//       } else {
//         loginPage.verifyLoginMessage(expectedResult);
//       }
//     });
//   });
// });

import homePage from '../../pages/homePage';
import loginPage from '../../pages/loginPage';
import logoutPage from '../../pages/logoutPage';

const testData = require('../../fixtures/testLoginData.json');

describe('Data Driven Login Tests', () => {
  testData.forEach((data) => {
    it(`Login test for user: ${data.username} and ${data.password}`, () => {
      homePage.openHomePage();
      homePage.openLoginPage();
      loginPage.enterEmail(data.username);
      loginPage.enterPassword(data.password);
      loginPage.clickLoginButton();

      loginPage.verifyLoginMessage(data.expectedResult);
      if (data.expectedResult === 'Log in successful!') {
        logoutPage.logout();
        logoutPage.verifyLoggedOut();
      }
    });
  });
});
