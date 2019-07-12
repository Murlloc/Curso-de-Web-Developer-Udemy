const sequence = {
    _ID: Math.ceil(Math.random()*1000 + 199),
    get ID(){
        return this._ID ++
    }
}

const products = {}

function set_product(product){
    if(!product.ID){
        product.ID = sequence.ID
    }
    products[product.ID] = product
    return product
}

function delete_product(ID){
    var backup = products[ID]
    delete products[ID]
    return "Product deleted successfully "
}

function get_product(ID){
    return products[ID] || {}
}

function get_products_list(){
    return Object.values(products)
}

module.exports = {
    set_product,
    get_product,
    get_products_list,
    delete_product
}