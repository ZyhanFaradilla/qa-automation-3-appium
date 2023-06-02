const Menu = require('../pageobjects/menu');
const LoginPage = require('../pageobjects/login_page');
const ProductsPage = require('../pageobjects/products_page');

describe("Login & Logout", () => {
    describe("Login tanpa Username", () => {
        it("Tidak mengisi Username", async () => {
            await Menu.clickMenu()
            await Menu.clickBtnLogin()

            await LoginPage.login("", "10203040")

            await expect(LoginPage.usernameError).toBeExisting()
            await expect(LoginPage.usernameError).toHaveTextContaining("Username is required")
        })
    })

    describe("Login tanpa Passsword", () => {
        it("Tidak mengisi Password", async () => {
            await LoginPage.login("bob@example.com", "")

            await expect(LoginPage.passwordError).toBeExisting()
            await expect(LoginPage.passwordError).toHaveTextContaining("Password is required")
        })
    })

    describe("Login dengan data yang valid", () => {
        it("Mengisi semua data Login dengan benar", async () => {
            await LoginPage.login("bob@example.com", "10203040")

            await expect(ProductsPage.products).toBeExisting()
            await expect(ProductsPage.products).toHaveTextContaining("Products")
        })
    })

    describe("Logout", () => {
        it("Logout akun", async () => {
            await Menu.clickMenu()
            await Menu.btnLogout.click()
            await Menu.allertLogout.waitForDisplayed()
            await Menu.confirmLogout.click()

            await expect(LoginPage.logout).toHaveTextContaining("You are successfully logged out.")
        })
    })
    
})