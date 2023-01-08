const imgs = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
];

const chosenImg = imgs[Math.floor(Math.random()*quotes.length)];
//console.log(chosenImg);

const bgImage = document.createElement("img");
bgImage.src = `./img/${chosenImg}`;


//console.log(bgImage);

document.body.appendChild(bgImage);

//document.querySelector("#testDiv").append("bgImage");