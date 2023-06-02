const Page = require('./page');

class Menu extends Page {
    get menu () {
        return $('//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView')
    }

    get btnLogin () {
        return $('//android.view.ViewGroup[@content-desc="menu item log in"]/android.widget.TextView')
    }

    get btnLogout () {
        return $('//android.view.ViewGroup[@content-desc="menu item log out"]/android.widget.TextView')
    }

    get allertLogout () {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.TextView')
    }

    get confirmLogout () {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button[2]')
    }

    get btnCatalog ()
    {
        return $('//android.view.ViewGroup[@content-desc="menu item catalog"]/android.widget.TextView')
    }

    get btnWebView ()
    {
        return $('//android.view.ViewGroup[@content-desc="menu item webview"]/android.widget.TextView')
    }

    get btnCodeCcanner ()
    {
        return $('//android.view.ViewGroup[@content-desc="menu item qr code scanner"]/android.widget.TextView')
    }

    get btnGeoLocation ()
    {
        return $('//android.view.ViewGroup[@content-desc="menu item geo location"]/android.widget.TextView')
    }

    get btnDrawing ()
    {
        return $('//android.view.ViewGroup[@content-desc="menu item drawing"]/android.widget.TextView')
    }

    get btnAbout ()
    {
        return $('//android.view.ViewGroup[@content-desc="menu item about"]/android.widget.TextView')
    }

    get btnResetApp ()
    {
        return $('//android.view.ViewGroup[@content-desc="menu item reset app"]/android.widget.TextView')
    }

    get btnBiometric ()
    {
        return $('//android.view.ViewGroup[@content-desc="menu item biometrics"]/android.widget.TextView')
    }

    get btnApiCalls ()
    {
        return $('//android.view.ViewGroup[@content-desc="menu item api calls"]/android.widget.TextView')
    }

    get btnSauceBot ()
    {
        return $('//android.view.ViewGroup[@content-desc="menu item sauce bot video"]/android.widget.TextView')
    }

    async clickMenu () {
        await this.menu.click()
    }

    async clickBtnLogin () {
        await this.btnLogin.click()
    }

    async clickBtnCatalog () {
        await this.btnCatalog.click()
    }

    async clickBtnWebView () {
        await this.btnWebView.click()
    }

    async clickBtnCodeScanner () {
        await this.btnCodeCcanner.click()
    }

    async clickBtnGeoLocation () {
        await this.btnGeoLocation.click()
    }

    async clickBtnDrawing () {
        await this.btnDrawing.click()
    }

    async clickBtnAbout () {
        await this.btnAbout.click()
    }

    async clickBtnResetApp () {
        await this.btnResetApp.click()
    }

    async clickBtnBiometric () {
        await this.btnBiometric.click()
    }

    async clickBtnApiCalls () {
        await this.btnApiCalls.click()
    }

    async clickBtnSauceBot () {
        await this.btnSauceBot.click()
    }
}

module.exports = new Menu()