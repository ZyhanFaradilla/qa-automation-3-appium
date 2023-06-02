const Menu = require('../pageobjects/menu');
const MenuPageOpen = require('../pageobjects/menu_page_open');

describe("Mengecek Fungsionalitas Menu", () => {
    describe("Menu Catalog", () => {
        it("Buka Catalog Page", async () => {
            await Menu.clickMenu()
            await Menu.clickBtnCatalog()

            await expect(MenuPageOpen.Opencatalog).toHaveTextContaining("Products")
        })
    })

    describe("Menu Web View", () => {
        it("Buka Web View Page", async () => {
            await Menu.clickMenu()
            await Menu.clickBtnWebView()

            await expect(MenuPageOpen.Openwebview).toHaveTextContaining("Webview")
        })
    })

    describe("Menu Code Scanner", () => {
        it("Buka Code Scanner Page", async () => {
            await Menu.clickMenu()
            await Menu.clickBtnCodeScanner()

            await expect(MenuPageOpen.Opencodescanner).toBeExisting()
            await MenuPageOpen.clickBtnIzinCodeScanner()
            await expect(MenuPageOpen.scancode).toBeExisting()
        })
    })
    
    describe("Menu Geo Location", () => {
        it("Buka Geo Location Page", async () => {
            await Menu.clickMenu()
            await Menu.clickBtnGeoLocation()

            await expect(MenuPageOpen.Opengeolocation).toBeExisting()
            await MenuPageOpen.clickBtnIzinGeoLocation()
            await expect(MenuPageOpen.geolocation).toBeExisting()
        })
    })

    describe("Menu Drawing", () => {
        it("Buka Drawing Page", async () => {
            await Menu.clickMenu()
            await Menu.clickBtnDrawing()

            await expect(MenuPageOpen.Opendrawing).toBeExisting()
        })
    })

    describe("Menu About", () => {
        it("Buka About Page", async () => {
            await Menu.clickMenu()
            await Menu.clickBtnAbout()

            await expect(MenuPageOpen.Openabout).toBeExisting()
        })
    })

    describe("Menu Reset", () => {
        it("Buka Reset Page", async () => {
            await Menu.clickMenu()
            await Menu.clickBtnResetApp()

            await expect(MenuPageOpen.Openreset).toBeExisting()
            await MenuPageOpen.clickBtnCancelReset()
        })
    })

    describe("Menu Biometric", () => {
        it("Buka Biometric Page", async () => {
            await Menu.clickBtnBiometric()

            await expect(MenuPageOpen.Openbiometric).toBeExisting()
            await MenuPageOpen.clickBtnOkBiometric()
            await expect(MenuPageOpen.biometric).toHaveTextContaining("Allow login with Biometrics")
        })
    })

    describe("Menu Api Calls", () => {
        it("Buka Api Calls Page", async () => {
            await Menu.clickMenu()
            await Menu.clickBtnApiCalls()

            await expect(MenuPageOpen.Openapicalls).toHaveTextContaining("API calls")
        })
    })

    describe("Menu Bot Video", () => {
        it("Buka Bot Video Page", async () => {
            await Menu.clickMenu()
            await Menu.clickBtnSauceBot()

            await expect(MenuPageOpen.Openbotvideo).toBeExisting()
        })
    })


})