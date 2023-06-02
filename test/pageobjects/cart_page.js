class CartPage {
    get btnProsesCheckout () {
        return $('~Proceed To Checkout button')
    }

    get btnRemove () {
        return $('//android.view.ViewGroup[@content-desc="remove item"]')
    }

    get btnGoShopping () {
        return $('//android.view.ViewGroup[@content-desc="Go Shopping button"]')
    }

    get totalcart () {
        return $('//android.widget.TextView[@content-desc="total number"]')
    }

    get JumlahAddCart () {
        return $('//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.TextView')
    }

    async clickBtnGoShopping () {
        await this.btnGoShopping.click()
    }
}

module.exports = new CartPage()