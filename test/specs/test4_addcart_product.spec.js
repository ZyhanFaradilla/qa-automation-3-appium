const LoginPage = require('../pageobjects/login_page');
const ProductsPage = require('../pageobjects/products_page');
const DetailProductPage = require('../pageobjects/detail_product_page');
const CartPage = require('../pageobjects/cart_page');

describe("Add Cart Product", () => {
        it("Memasukkan beberapa Product yang sama dengan beda warna ke Cart", async () => {
            await ProductsPage.namaProduct.click()

            await DetailProductPage.btnAddToCart.click()
            await DetailProductPage.clickBtnBlueBackpack()
            await DetailProductPage.btnAddToCart.click()

            await expect(CartPage.JumlahAddCart).toHaveTextContaining('2')
        })
        it("Melihat isi cart terdapat beberapa Items", async () => {
            await DetailProductPage.iconCart.click()

            await expect(CartPage.totalcart).toHaveTextContaining('2 items')
        })
        it("Hapus Product salah satunya", async () => {

            await CartPage.btnRemove.click()
            const cartItems = await $('//android.view.ViewGroup[@content-desc="product row"]')

            await expect(cartItems).toBeExisting()
            await expect(CartPage.totalcart).toHaveTextContaining('1 item')
        })
})