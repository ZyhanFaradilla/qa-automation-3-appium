class LoginPage {
    get Login () {
        return $('//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView')
    }

    get inputUsername () {
        return $('~Username input field')
    }

    get inputPassword () {
        return $('~Password input field')
    }

    get btnLogin () {
        return $('//android.view.ViewGroup[@content-desc="Login button"]/android.widget.TextView')
    }

    get usernameError () {
        return $('//android.view.ViewGroup[@content-desc="Username-error-message"]/android.widget.TextView')
    }

    get passwordError () {
        return $('//android.view.ViewGroup[@content-desc="Password-error-message"]/android.widget.TextView')
    }

    get logout () {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.TextView')
    }

    async login (username, password) {
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        await this.btnLogin.click()
    }
}

module.exports = new LoginPage()