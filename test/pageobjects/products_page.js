class ProductsPage {
    get products () {
        return $('//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView')
    }

    get namaProduct () {
        return $('(//android.widget.TextView[@content-desc="store item text"])[1]')
    }

    get btnFilter () {
        return $('~sort button')
    }

    get btnNamaProductAsc () {
        return $('~nameAsc')
    }

    get btnNamaProductDesc () {
        return $('~nameDesc')
    }

    get btnHargaAsc () {
        return $('~priceAsc')
    }

    get btnHargaDesc () {
        return $('~priceDesc')
    } 
}

module.exports = new ProductsPage()