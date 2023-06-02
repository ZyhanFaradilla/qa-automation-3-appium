const ProductsPage = require('../pageobjects/products_page');

describe("Filter Products", () => {
    describe("Memfilter Nama Products", () => {
        it("Nama Product Asc", async () => {
            await ProductsPage.btnFilter.click()
            await ProductsPage.btnNamaProductAsc.click()
            const namaProducts = await $$('android.widget.TextView').map(function (element){
                return element
            })
            function isAscending(arr) {
                return arr.every(function (x,i){
                    return i === 0 || x >= arr[i-1]
                })
            }
                await expect(isAscending(namaProducts)).toEqual(true)
        })
        it("Nama Product Desc", async () => {
            await ProductsPage.btnFilter.click()
            await ProductsPage.btnNamaProductDesc.click()
            const namaProducts = await $$('android.widget.TextView').map(function (element){
                return element
            })
            function isDescending(arr) {
                return arr.every(function (x,i){
                    return i === 0 || x <= arr[i-1]
                })
            }
                await expect(isDescending(namaProducts)).toEqual(true)
        })
            
    })

    describe("Memfilter Price Products", () => {
        it("Harga Product Asc", async () => {
            await ProductsPage.btnFilter.click()
            await ProductsPage.btnHargaAsc.click()
            const hargaProducts = await $$('android.widget.TextView').map(function (element){
                return element
            })
            function isAscending(arr) {
                return arr.every(function (x,i){
                    return i === 0 || x >= arr[i-1]
                })
            }
                await expect(isAscending(hargaProducts)).toEqual(true)
        })
        it("Harga Product Desc", async () => {
            await ProductsPage.btnFilter.click()
            await ProductsPage.btnHargaDesc.click()
            const hargaProducts = await $$('android.widget.TextView').map(function (element){
                return element
            })
            function isDescending(arr) {
                return arr.every(function (x,i){
                    return i === 0 || x <= arr[i-1]
                })
            }
                await expect(isDescending(hargaProducts)).toEqual(true)
        })
    })
})