class CheckoutCompletePage {
    get TampilanCheckoutComplete () {
        return $('//android.view.ViewGroup[@content-desc="checkout complete screen"]/android.widget.ScrollView/android.view.ViewGroup')
    }

    get CheckoutComplete () {
        return $('//android.view.ViewGroup[@content-desc="checkout complete screen"]/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView[1]')
    }
}

module.exports = new CheckoutCompletePage()