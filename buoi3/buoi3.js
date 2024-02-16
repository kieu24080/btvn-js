// let dog = {
//     color: "brown",
//     age: 3,
//     type: "chihuahua",
//     nameDog: "cat"
// }

// console.log(Object.keys(dog)  )
// for ( key of Object.keys(dog)){
//     console.log(key)
// }

// console.log("====")
// for(key of Object.keys(dog)){
//     console.log(dog[key])
// }
// // // console.log(dog)
// // // // HIỆN RIÊNG 1 DÒNG
// // // console.log(dog['nameDog'])
// // // // ĐỔI
// // // dog['age'] = 6
// // // console.log(dog)
// // // // THÊM
// // // dog['speak'] = "gâu gâu"
// // // console.log(dog)
// // // // XÓA
// // // delete dog.type
// // // console.log(dog)

// let myDog = {
//        name: "ngáo",
//        legs: "4",
//        friends: "everything!"
// }
// console.log(myDog)
// // myDog['name']= "husky"
// // console.log(myDog)
// // console['color']= "brown"
// // console.log(myDog)
// // delete myDog.friends
// // console.log(myDog)

// // for ( key in myDog ){
// //     console.log(myDog[key])
// // }
// // console.log("==========================================")
// // for ( key in myDog ){
// //     console.log(typeof key)
// // }

// var JS32 = ["Anh","Nguyên","Nguyên","Huy"]

// for (key of JS32){
//     console.log(key)
// }

// for (key in JS32){
//     console.log(key)
// }
// // console.log("==================")
// // for (key in JS32){
// //     console.log(JS32[key])
// // }

// var textAbout = "xin chào"
// // for ( key in textAbout){
// //     console.log(textAbout[key])
// // }

// for ( key of textAbout){
//     console.log(key)
// }



let products = {
    data: [
        {
            productName: "LEVENTS® COLORFUL PAINT TEE/ GREY",
            price: "35",
            image: "https://product.hstatic.net/1000378196/product/z3455500959841_f71631b2ce35e8032e4207941a5b602e_9ed5fecfe9b445bca6554bb101274011_master.jpg"
        },

        {
            productName: "LEVENTS® COLORFUL PAINT TEE/ BLACK",
            price: "34",
            image: "https://product.hstatic.net/1000378196/product/z3455501297595_3f6b310d318f366593980e24ddf77594_24a562f8db3f48bb99f9fe5f04c6455b_master.jpg"
        },

        {
            productName: "LEVENTS® TRAVEL TEE/ LIGHT BROWN",
            price: "35",
            image: "https://product.hstatic.net/1000378196/product/z3466712209076_ae4321ce93b91a2070108a17a0654259__1__7f92c24d6bf748b5b765d90067d3377e_master.jpg"
        },

        {
            productName: "LEVENTS® TRAVEL TEE/ BLACK",
            price: "22",
            image: "https://product.hstatic.net/1000378196/product/z3436335150524_9bdd740660202d7d596d0b03e6f4f059_e820e35d18084faa8f779264ab6f2892_master.jpg"
        },

        {
            productName: "LEVENTS® TRAVEL TEE/ CREAM WHITE",
            price: "38",
            image: "https://product.hstatic.net/1000378196/product/z3436335020793_d8e1fb26890b00d378c4b4d0cf797573_0363c49ecdb641d49ddfa56d65e1ac4f_master.jpg"
        },

        {
            productName: "LEVENTS® DIAMOND 2E LOGO TEE/ BLACK",
            price: "42",
            image: "https://product.hstatic.net/1000378196/product/z3393718306380_9cb83d1efba39fe0bb0c7e4ba74f9024_e46acded798a4d7b97a0261c1a2048cf_master.jpg"
        },

        {
            productName: "LEVENTS® FUNNY CROCODILE TEE/ BLUE",
            price: "37",
            image: "https://product.hstatic.net/1000378196/product/z3381587303453_5842f45eb417f8a1c428e660ed766cd4_5a355bb37d2e4c429e8778030c0e8b14_master.jpg"
        },

        {
            productName: "LEVENTS® EARTH TEE/ PURPLE",
            price: "36",
            image: "https://product.hstatic.net/1000378196/product/z3370728736105_b355c87d43431b4afd035723f521e029_0ac53717a2ae4855a9d4411ecc9b7f3b_master.jpg"
        },

        {
            productName: "LEVENTS® PLAY LOGO TEE/ PINK",
            price: "29",
            image: "https://product.hstatic.net/1000378196/product/z3393717676595_70abb4322642acaa3572b7f19d4814f4_3fe4f78e891b4443a017966addcb462e_master.jpg"
        },
    ]
}

for (let i of products.data) {
    // console.log(i.productName)
    // tạo một thẻ div và cho thẻ div có calss là card
    let card = document.createElement("div");
    card.classList.add("card");

    //tạo thẻ div có class là image-container
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    // tạo thẻ image 
    let image = document.createElement("img");
    image.setAttribute("src", i.image);

    //thêm thẻ img vào thẻ div có class là image-container
    imgContainer.appendChild(image)
    //thêm class image-container vào thẻ div có class là card
    card.appendChild(imgContainer);
    // thêm thẻ div có class là card vào thẻ có id là product
    document.getElementById("products").appendChild(card);
}