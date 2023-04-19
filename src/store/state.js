const state = {
    //Nơi lưu trữ các trạng thái của ứng dụng
    status: 'Lean Vuex in Vue3',
    products: [
        {
            id: 1,
            name: 'Giày Sneaker Nam BN0135',
            image: require('@/assets/images/giaySneaker1.jpg'),
            description: 'Giày Sneaker Nam BN0135 chính hãng được thiết kế rất đẹp, chất liệu da kết hợp lưới thoáng khí, nhẹ nhàng êm ái, cảm giác chân thoải mái',
            price: 389000,
            variants:[
                {
                    color:'green',
                    image: require('@/assets/images/giaySneaker1.jpg'),
                    quantity:20,
                    
                },
                {
                    color:'brown',
                    image: require('@/assets/images/giaySneaker2.jpg'),
                    quantity:3
                }
            ]
        },
        {
            id: 2,
            name: 'Giày thể thao nam  NAIK PLLO',
            image: require('@/assets/images/giay-the-thao-nam-thoang-khi-naik-pllo_1.jpg'),
            description: 'Giày thể thao nam NAIK PLLO chính hãng màu đen size 39 thiết kế đẹp, chất liệu da kết hợp lưới thoáng khí, nhẹ nhàng êm ái, cảm giác chân thoải mái',
            price: 720000,
            variants:[
                {
                    color:'black',
                    image: require('@/assets/images/giay-the-thao-nam-thoang-khi-naik-pllo_1.jpg'),
                    quantity:10
                },
                {
                    color:'blue',
                    image: require('@/assets/images/giay-the-thao-nam-thoang-khi-naik-pllo_2.jpg'),
                    quantity:0
                },
                {
                    color:'gray',
                    image: require('@/assets/images/giay-the-thao-nam-thoang-khi-naik-pllo_3.jpg'),
                    quantity:5
                }
            ]
        },
        {
            id: 3,
            name: 'Giày thể thao nam Cartelo',
            image: require('@/assets/images/giay-the-thao-nam-cartelo-ca-tinh_1.jpg'),
            description: 'Giày thể thao nam Cartelo chất liệu da cao cấp mang phong cách khỏe khoắn, năng động, cá tính nhưng không kém phần tinh tế, sang trọng.',
            price: 890000,
            variants:[
                {
                    color:'blue',
                    image: require('@/assets/images/giay-the-thao-nam-cartelo-ca-tinh_1.jpg'),
                    quantity:2
                },
                {
                    color:'black',
                    image: require('@/assets/images/giay-the-thao-nam-cartelo-ca-tinh_2.jpg'),
                    quantity:15
                },
                {
                    color:'white',
                    image: require('@/assets/images/giay-the-thao-nam-cartelo-ca-tinh_3.jpg'),
                    quantity:20
                }
            ]
        },
        {
            id: 4,
            name: 'Giày da nam thể thao MATURE',
            image: require('@/assets/images/giay-da-nam-the-thao-mature_1.jpg'),
            description: 'Giày da nam thể thao MATURE siêu êm, da kết hợp lưới thoáng khí, thiết kế đẹp, màu đen dễ phối đồ, đế cao su nhẹ, siêu đàn hồi, chắc chắn, cảm giác thoải mái',
            price: 620000,
            variants:[
                {
                    color:'black',
                    image: require('@/assets/images/giay-da-nam-the-thao-mature_1.jpg'),
                    quantity:10
                }
            ]
        },
        {
            id: 5,
            name: 'Giày nam chống trơn trượt FTC',
            image: require('@/assets/images/giay-the-thao-nam-chong-tron-truot-ftc_1.jpg'),
            description: 'Giày thể thao nam chống trơn trượt FTC chất liệu da lộn cộng vải thoáng khí phía trên, đường may chắc chắn, thẳng đều, thích hợp leo núi và tập thể dục',
            price: 450000,
            variants:[
                {
                    color:'green',
                    image: require('@/assets/images/giay-the-thao-nam-chong-tron-truot-ftc_1.jpg'),
                    quantity:12
                },
                {
                    color:'gray',
                    image: require('@/assets/images/giay-the-thao-nam-chong-tron-truot-ftc_2.jpg'),
                    quantity:0
                }
            ]
        },
        {
            id: 6,
            name: 'Giày thể thao nam chữ N',
            image: require('@/assets/images/giay-the-thao-nam-chu-n_1.jpg'),
            description: 'Giày thể thao nam chữ N hàng xuất khẩu chất liệu da lộn cộng khâu lưới, đường may chắc chắn, thẳng đều, đế chống trơn trượt, chống mài mòn',
            price: 750000,
            variants:[
                {
                    color:'gray',
                    image: require('@/assets/images/giay-the-thao-nam-chu-n_1.jpg'),
                    quantity:15
                },
                {
                    color:'blue',
                    image: require('@/assets/images/giay-the-thao-nam-chu-n_2.jpg'),
                    quantity:3
                },
                {
                    color:'red',
                    image: require('@/assets/images/giay-the-thao-nam-chu-n_3.jpg'),
                    quantity:20
                }
            ]
        },
        {
            id: 7,
            name: 'Giày Sneaker Nam BN0079',
            image: require('@/assets/images/giaysneakerBN_1.jpeg'),
            description: 'Giày Sneaker Nam BN0079 hàng xuất khẩu chất liệu da lộn cộng khâu lưới, đường may chắc chắn, thẳng đều, đế chống trơn trượt, chống mài mòn',
            price: 350000,
            variants:[
                {
                    color:'brown',
                    image: require('@/assets/images/giaysneakerBN_1.jpeg'),
                    quantity:15
                },
                {
                    color:'gray',
                    image: require('@/assets/images/giaysneakerBN_2.jpeg'),
                    quantity:3
                }
            ]
        },
        {
            id: 8,
            name: 'Giày Sneaker Nam BN0086',
            image: require('@/assets/images/giaysneakerBN0086_1.jpeg'),
            description: 'Giày Sneaker Nam BN0086 hàng xuất khẩu chất liệu da lộn cộng khâu lưới, đường may chắc chắn, thẳng đều, đế chống trơn trượt, chống mài mòn',
            price: 235000,
            variants:[
                {
                    color:'red',
                    image: require('@/assets/images/giaysneakerBN0086_1.jpeg'),
                    quantity:5
                },
                {
                    color:'green',
                    image: require('@/assets/images/giaysneakerBN0086_2.jpeg'),
                    quantity:0
                }
            ]
        },
        
    ],
    cart: [],
    searchValue: '',
    info:['Nguyễn Đình Anh Tài',501200555,'CD20CT11','Lập trình giao diện web 2'],
    user:null,
}

export default state
