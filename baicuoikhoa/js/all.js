var checkbox_toggle = document.getElementById('light-dark');
checkbox_toggle.addEventListener('change', function () {
    // THêm class dark cho body
    document.body.classList.toggle('dark');
});
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}



let shop = {
    data: [
        {
            id: 1,
            name: "Dream Ritual Oracle",
            price: "130đ",
            image: "https://mystichouse.vn/wp-content/uploads/2024/02/Dream-Ritual-Oracle-1-367x367.jpg"
        },

        {
            id: 2,
            name: "Witch Tarot (Tarot PVC Series)",
            price: "120đ",
            image: "https://mystichouse.vn/wp-content/uploads/2024/02/Witch-Tarot-Tarot-PVC-Series-1.jpg"
        },

        {
            id: 3,
            name: "Starman Tarot Deck",
            price: "150đ",
            image: "https://mystichouse.vn/wp-content/uploads/2024/02/Starman-Tarot-Deck-1.jpg"
        },

        {
            id: 4,
            name: "Portent Tarot",
            price: "120đ",
            image: "https://mystichouse.vn/wp-content/uploads/2024/01/Angels-and-Ancestors-Oracle-Pocket-Edition-1-367x367.jpg"
        },

        {
            id: 5,
            name: "Cozy Witch Tarot",
            price: "110đ",
            image: "https://mystichouse.vn/wp-content/uploads/2024/01/Portent-Tarot-1.jpg"
        },

        {
            id: 6,
            name: "Soul’s Journey Oracle",
            price: "90đ",
            image: "https://mystichouse.vn/wp-content/uploads/2015/11/Deviant-Moon-Tarot-cover-400x400.jpg"
        },

        {
            id: 7,
            name: "Healing Heart Oracle",
            price: "100đ",
            image: "https://mystichouse.vn/wp-content/uploads/2016/01/Deviant-Moon-Tarot-Premier-Edition-400x400.jpg"
        },

        {
            id: 8,
            name: " Inspirational Wicca Oracle",
            price: "120đ",
            image: "https://mystichouse.vn/wp-content/uploads/2015/10/Deviant-Moon-Tarot-Borderless-Edition-400x400.jpg"
        },

        {
            id: 9,
            name: "Neon Moon Lenormand",
            price: "130đ",
            image: "https://mystichouse.vn/wp-content/uploads/2015/11/Joie-de-Vivre-Tarot-cover-450x450.jpg"
        },

        {
            id: 10,
            name: "Classic Horror Oracle",
            price: "140đ",
            image: "https://mystichouse.vn/wp-content/uploads/2015/11/Gothic-Tarot-cover-450x450.jpg"
        },

        {
            id: 11,
            name: "A Compendium of Witches Oracle",
            price: "140đ",
            image: "https://mystichouse.vn/wp-content/uploads/2023/02/A-Compendium-of-Witches-Oracle-1-367x367.jpg"
        },

        {
            id: 12,
            name: "Soul Mirror Oracle",
            price: "150đ",
            image: "https://mystichouse.vn/wp-content/uploads/2021/08/Amor-et-Psyche-Oracle-1-367x367.jpg"
        },


    ]
}
for (let items of shop.data) {
 //tạo một thẻ div và cho thẻ div đó có class là card
    let card = document.createElement("div")
    card.classList.add("card")
 //thêm thẻ div có class là card vào shop

//  document.getElementById("shop")
    let imgContainer = document.createElement("div")
    imgContainer.classList.add("image-container")

    let image = document.createElement("img")
    image.setAttribute("src", items.image)
    imgContainer.appendChild(image)
    card.appendChild(imgContainer)

    let container = document.createElement("div")
    container.classList.add("container")

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = items.name.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerHTML = "<b>Price:</b> " + items.price;
    container.appendChild(price);

    let btn = document.createElement("button");
    btn.setAttribute("onclick", "addToCart(" + items.id + ")");
    btn.innerHTML = "Thêm vào giỏ hàng"
    container.appendChild(btn);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}
var cart = []
byGetProductById = (id) => {
    for (let item of shop.data) {
        if (id == item.id) {
            return item
        }
    }
}

addToCart = (id) => {
    let storage = localStorage.getItem('cart');
    if (storage) {
        cart = JSON.parse(storage)
    }

    let product = byGetProductById(id);
    let itemDetails = cart.find(item => item.product.id == id)
    if (itemDetails) {
        itemDetails.quantity += 1;
    } else {
        cart.push({ product, quantity: 1 })
    }

    localStorage.setItem('cart', JSON.stringify(cart))
    // console.log(product)
}
function showAll() {
    var list = `<tr><th>Tên sản phẩm</th><th>Giá cả</th><th>Số lượng</th></tr>`
    JSON.parse(localStorage.getItem('cart')).forEach(element => {
        list += `<tr><td>` + element.product.name +
            `</td><td>` + element.product.price +
            `</td><td>` + element.quantity +
            `</td></tr>`;
    })
    document.getElementById('list').innerHTML = list;
}
