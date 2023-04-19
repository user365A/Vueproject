const getters = {
    //Là những hàm để lấy ra state
    //mapGetters(['status]): lấy những thuộc tính của getter thành this.status
    //chuyển những giá trị của state về component hiện tại
    status: state => state.status,
    products: state => state.products,
    cart: state => state.cart,
    searchValue: state => state.searchValue,
    info:state => state.info,
    
}

export default getters
