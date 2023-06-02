class CheckoutReviewPage {
    get review () {
        return $('//android.widget.ScrollView[@content-desc="checkout review order screen"]/android.view.ViewGroup/android.widget.TextView')
    }

    get reviewOrder () {
        return $('~checkout review order screen')
    }

    get btnTempatOrder () {
        return $('~Place Order button')
    }
}

module.exports = new CheckoutReviewPage()