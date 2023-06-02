const LoginPage = require('../pageobjects/login_page');
const ProductsPage = require('../pageobjects/products_page');
const DetailProductPage = require('../pageobjects/detail_product_page');
const CartPage = require('../pageobjects/cart_page');
const InputAddressPage = require('../pageobjects/checkout_input_address_page');
const CheckoutPaymentPage = require('../pageobjects/checkout_payment_page');
const CheckoutReviewPage = require('../pageobjects/checkout_review_page');
const CheckoutCompletePage = require('../pageobjects/checkout_complete_page');

describe("Checkout", () => {
    describe("Checkout tanpa login", () => {
        it("Memasukkan Product tanpa Login dan menghapus Product dalam Cart", async () => {
            await ProductsPage.namaProduct.click()

            await DetailProductPage.btnAddToCart.click()
            await DetailProductPage.iconCart.click()

            await CartPage.btnRemove.click()
            const cartItems = await $('//android.view.ViewGroup[@content-desc="product row"]')
            const nullcart = await $('//android.widget.ScrollView[@content-desc="cart screen"]/android.view.ViewGroup/android.widget.ImageView')

            await expect(cartItems).not.toBeExisting()
            await expect(nullcart).toBeExisting()
            await CartPage.clickBtnGoShopping()
        })
        it("Checkout produk tanpa login dahulu", async () => {
            await ProductsPage.namaProduct.click()

            await DetailProductPage.btnAddToCart.click()
            await DetailProductPage.iconCart.click()

            await CartPage.btnProsesCheckout.click()

            await expect(LoginPage.Login).toBeExisting()
        })
    })

    describe("Checkout dengan Login untuk mengisi Address", () => {
        it("Tidak mengisi Fullname ", async () => {
            await LoginPage.login("bob@example.com", "10203040")

            await InputAddressPage.inputData("", "Jl. Mangga", "Jakarta", "11510", "Indonesia") 

            await expect(InputAddressPage.errorFullname).toBeExisting()
            await expect(InputAddressPage.errorFullname).toHaveTextContaining("Please provide your full name.")         
        })

        it("Tidak mengisi Address Line 1 ", async () => {
            await InputAddressPage.inputData("Zyhan", "", "Jakarta", "11510", "Indonesia")  

            await expect(InputAddressPage.errorAddressLine1).toBeExisting()
            await expect(InputAddressPage.errorAddressLine1).toHaveTextContaining("Please provide your address.")        
        })

        it("Tidak mengisi City ", async () => {
            await InputAddressPage.inputData("Zyhan", "Jl. Mangga", "", "11510", "Indonesia") 

            await expect(InputAddressPage.errorCity).toBeExisting()
            await expect(InputAddressPage.errorCity).toHaveTextContaining("Please provide your city.")
        })

        it("Tidak mengisi ZIP Code ", async () => {
            await InputAddressPage.inputData("Zyhan", "Jl. Mangga", "Jakarta", "", "Indonesia")    
                 
            await expect(InputAddressPage.errorZip).toBeExisting()
            await expect(InputAddressPage.errorZip).toHaveTextContaining("Please provide your zip code.")
        })

        it("Tidak mengisi Country ", async () => {
            await InputAddressPage.inputData("Zyhan", "Jl. Mangga", "Jakarta", "11510", "")            

            await expect(InputAddressPage.errorCountry).toBeExisting()
            await expect(InputAddressPage.errorCountry).toHaveTextContaining("Please provide your country.")
        })

        it("Mengisi semua data Address yang dibutuhkan", async () => {
            await InputAddressPage.inputData("Zyhan", "Jl. Mangga", "Jakarta", "11510", "Indonesia")            

            await expect(CheckoutPaymentPage.payment).toBeExisting()
            await expect(CheckoutPaymentPage.payment).toHaveTextContaining("Enter a payment method")
        })
    })

    describe("Checkout untuk mengisi Payment", () => {
        it("Tidak mengisi Fullname", async () => {
            await CheckoutPaymentPage.inputData("", 45671458268378, "06/27", 127)

            await expect(CheckoutPaymentPage.errorFullname).toBeExisting()
            await expect(CheckoutPaymentPage.errorFullname).toHaveTextContaining("Value looks invalid.")
        })

        it("Tidak mengisi Card Number", async () => {
            await CheckoutPaymentPage.inputData("Zyhan", "", "06/27", 127)

            await expect(CheckoutPaymentPage.errorCardNumber).toBeExisting()
            await expect(CheckoutPaymentPage.errorCardNumber).toHaveTextContaining("Value looks invalid.")
        })

        it("Tidak mengisi Expired Date Card", async () => {
            await CheckoutPaymentPage.inputData("Zyhan", 45671458268378, "", 127)

            await expect(CheckoutPaymentPage.errorExpirationDate).toBeExisting()
            await expect(CheckoutPaymentPage.errorExpirationDate).toHaveTextContaining("Value looks invalid.")
        })

        it("Tidak mengisi Security Code", async () => {
            await CheckoutPaymentPage.inputData("Zyhan", 45671458268378, "06/27", "")

            await expect(CheckoutPaymentPage.errorSecurityCode).toBeExisting()
            await expect(CheckoutPaymentPage.errorSecurityCode).toHaveTextContaining("Value looks invalid.")
        })

        it("Mengisi semua Data Payment", async () => {
            await CheckoutPaymentPage.inputData("Zyhan", 45671458268378, "06/27", 127)

            await expect(CheckoutReviewPage.reviewOrder).toBeExisting()
            await expect(CheckoutReviewPage.review).toBeExisting()
            await expect(CheckoutReviewPage.review).toHaveTextContaining("Review your order")
        })
    })

    describe("Mereview Order", () => {
        it("Tempat Order", async () => {
            await CheckoutReviewPage.btnTempatOrder.click()

            await expect(CheckoutCompletePage.TampilanCheckoutComplete).toBeExisting()
            await expect(CheckoutCompletePage.CheckoutComplete).toHaveTextContaining("Checkout Complete")
        })
    })
})