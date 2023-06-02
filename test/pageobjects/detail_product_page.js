class DetailProductPage {
    get btnAddToCart () {
        return $('~Add To Cart button')
    }

    get iconCart () {
        return $('//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.ImageView')
    }

    get btnbluebackpack () {
        return $('//android.view.ViewGroup[@content-desc="blue circle"]/android.view.ViewGroup')
    }

    async clickBtnBlueBackpack () {
        await this.btnbluebackpack.click()
    }
}

module.exports = new DetailProductPage()