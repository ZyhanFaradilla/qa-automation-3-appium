const Page = require('./page');

class MenuPageOpen extends Page {
    get Opencatalog () {
        return $('//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView')
    }

    get Openwebview () {
        return $('//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView')
    }

    get Opencodescanner () {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.TextView')
    }

    get btnIzincodescanner () {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[1]')
    }

    get scancode () {
        return $('//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView')
    }

    get Opengeolocation ()
    {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.TextView')
    }

    get btnIzingeolocation ()
    {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[1]')
    }

    get geolocation ()
    {
        return $('//android.view.ViewGroup[@content-desc="geo location screen"]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]')
    }

    get Opendrawing ()
    {
        return $('//android.view.ViewGroup[@content-desc="drawing screen"]/android.view.ViewGroup[2]/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.widget.Image[3]')
    }

    get Openabout ()
    {
        return $('//android.view.ViewGroup[@content-desc="about screen"]/android.widget.ScrollView/android.view.ViewGroup/android.widget.ImageView[1]')
    }

    get Openreset ()
    {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.TextView')
    }

    get btnCancelReset ()
    {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button[1]')
    }

    get Openbiometric ()
    {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.TextView')
    }

    get btnOkBiometric ()
    {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button')
    }

    get biometric ()
    {
        return $('//android.view.ViewGroup[@content-desc="biometrics screen"]/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView[1]')
    }

    get Openapicalls ()
    {
        return $('//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView')
    }

    get Openbotvideo ()
    {
        return $('//android.view.ViewGroup[@content-desc="SauceBot screen"]/android.view.ViewGroup[2]/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.TextView[2]')
    }

    async clickBtnIzinCodeScanner () {
        await this.btnIzincodescanner.click()
    }

    async clickBtnIzinGeoLocation () {
        await this.btnIzingeolocation.click()
    }

    async clickBtnCancelReset () {
        await this.btnCancelReset.click()
    }

    async clickBtnOkBiometric () {
        await this.btnOkBiometric.click()
    }
}

module.exports = new MenuPageOpen()