
let cartArr = []


export function addCart(product) {


    const findProduct = cartArr.find(cart => cart.pno === product.pno)

    if(findProduct) {
        findProduct.qty +=1
    }else {
        cartArr.push({...product, qty: 1})
    }

    cartArr.push({...product, qty:1})
    if (callback) {
        callback(cartArr)
    }
}

export function changeQty(pno, job, callback) {
    const findProduct = cartArr.find(cart => cart.pno === product.pno)
    if(job === 'plus'){
        findProduct.qty += 1
    }else if(job === 'minus'){
        findProduct.qty -= 1
        cartArr = cartArr.filter(cart => cart.qty > 0)
    }
    if (callback) {
        callback(cartArr)
    }
}

