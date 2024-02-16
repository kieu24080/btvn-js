
var garely = [
    {
        title: 1,
        content: 'Nội dung thẻ 1',
        src: 'https://image-us.eva.vn/upload/2-2020/images/2020-04-28/a-copy-1588060971-133-width520height861.jpg',
        linkDetail: "",
        srcBack: 'https://tarot.com.vn/storage/app/uploads/public/643/e30/5b9/643e305b9f205802596736.jpg'
    },
    {
        title: 1,
        content: 'Nội dung thẻ 1',
        src: 'https://image-us.eva.vn/upload/2-2020/images/2020-04-28/a-copy-1588060971-133-width520height861.jpg',
        linkDetail: "",
        srcBack: 'https://tarot.com.vn/storage/app/uploads/public/643/f51/ceb/643f51cebd6fc372602918.jpg'
    },
    {
        title: 1,
        content: 'Nội dung thẻ 1',
        src: 'https://image-us.eva.vn/upload/2-2020/images/2020-04-28/a-copy-1588060971-133-width520height861.jpg',
        linkDetail: "",
        srcBack: 'https://tarot.com.vn/storage/app/uploads/public/644/0bf/eb4/6440bfeb45daa924620828.jpg'
    },
    {
        title: 1,
        content: 'Nội dung thẻ 1',
        src: 'https://image-us.eva.vn/upload/2-2020/images/2020-04-28/a-copy-1588060971-133-width520height861.jpg',
        linkDetail: "",
        srcBack: 'https://tarot.com.vn/storage/app/uploads/public/644/21d/c36/64421dc3642e5331994313.jpg'
    },
    {
        title: 1,
        content: 'Nội dung thẻ 1',
        src: 'https://image-us.eva.vn/upload/2-2020/images/2020-04-28/a-copy-1588060971-133-width520height861.jpg',
        linkDetail: "",
        srcBack: 'https://tarot.com.vn/storage/app/uploads/public/644/0ca/044/6440ca04423aa803088771.jpg'
    },
    {
        title: 2,
        content: 'What an amazing city 2',
        src: 'https://image-us.eva.vn/upload/2-2020/images/2020-04-28/a-copy-1588060971-133-width520height861.jpg',
        linkDetail: "",
        srcBack: 'https://tarot.com.vn/storage/app/uploads/public/644/214/3cc/6442143cc6d12721675057.jpg'
    },
    {
        title: 3,
        content: 'What an amazing city 3',
        src: 'https://image-us.eva.vn/upload/2-2020/images/2020-04-28/a-copy-1588060971-133-width520height861.jpg',
        linkDetail: "",
        srcBack: 'https://tarot.com.vn/storage/app/uploads/public/643/f75/de5/643f75de5fa42187988494.jpg'
    },
    {
        title: 3,
        content: 'What an amazing city 3',
        src: 'https://image-us.eva.vn/upload/2-2020/images/2020-04-28/a-copy-1588060971-133-width520height861.jpg',
        linkDetail: "",
        srcBack: 'https://tarot.com.vn/storage/app/uploads/public/644/66e/1bb/64466e1bb9588170152785.jpg'
    },
    {
        title: 3,
        content: 'What an amazing city 3',
        src: 'https://image-us.eva.vn/upload/2-2020/images/2020-04-28/a-copy-1588060971-133-width520height861.jpg',
        linkDetail: "",
        srcBack: 'https://tarot.com.vn/storage/app/uploads/public/644/675/430/6446754309a08059278429.jpg'
    },
    {
        title: 3,
        content: 'What an amazing city 3',
        src: 'https://image-us.eva.vn/upload/2-2020/images/2020-04-28/a-copy-1588060971-133-width520height861.jpg',
        linkDetail: "",
        srcBack: 'https://tarot.com.vn/storage/app/uploads/public/644/77d/f6d/64477df6d145b114005354.jpg'
    },
    {
        title: 3,
        content: 'What an amazing city 3',
        src: 'https://image-us.eva.vn/upload/2-2020/images/2020-04-28/a-copy-1588060971-133-width520height861.jpg',
        linkDetail: "",
        srcBack: 'https://tarot.com.vn/storage/app/uploads/public/644/776/cd1/644776cd15b36247793217.jpg'
    },
    {
        title: 3,
        content: 'What an amazing city 3',
        src: 'https://image-us.eva.vn/upload/2-2020/images/2020-04-28/a-copy-1588060971-133-width520height861.jpg',
        linkDetail: "",
        srcBack: 'https://tarot.com.vn/storage/app/uploads/public/644/8a1/d65/6448a1d65ca2c307025465.jpg'
    },
]
var tbody = document.getElementById('tbody')
for (var i = 0; i <= garely.length; i++) {
    let div1 = document.createElement('div');
    div1.classList.add("flip-box");

    let div2 = document.createElement('div');
    div2.classList.add('flip-box-inner');

    let div3 = document.createElement('div');
    div3.classList.add('flip-box-front');

    let div4 = document.createElement('div');
    div4.classList.add('flip-box-back');

    // let h2 = document.createElement('h2');
    // h2.innerHTML = garely[i].title;
    let imgBack = document.createElement('img');
    // p.innerHTML = garely[i].content;

    let img = document.createElement('img');
    img.setAttribute("src", garely[i].src);
    imgBack.setAttribute("src", garely[i].srcBack);

    div1.appendChild(div2);
    div2.appendChild(div3);
    div2.appendChild(div4);
    div3.appendChild(img);
    // div4.appendChild(h2);
    div4.appendChild(imgBack);

    tbody.appendChild(div1);
}