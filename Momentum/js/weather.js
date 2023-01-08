//https://api.openweathermap.org/data/2.5/weather?lat=37.5488512&lon=127.0284288&appid=1fddb4e5644bbdfd55763636382604ec&units=metric

const API_KEY = "1fddb4e5644bbdfd55763636382604ec";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    
    //console.log(lat, lng);

    fetch(url).then(response => response.json()).then(data => {
        //console.log(data.name, data.weather[0].main);
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / 최저:${data.main.temp_min} , 최고:${data.main.temp_max}`;
    });

    


    //fetch(url).then(test2).then(test3).catch(err);
/*
    fetch(url,{
        method : "POST",
        headers : {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body : JSON.stringify({ "name": "hello!" }),
    }).then(test2).then(test3);
*/
}
function test2(response){
    const res = response.json();
    console.log(res);
    return res;
}
function test3(response2){
    console.log(response2);
    //console.log(response2.name);
}
function err(){
    console.log("에러발생");
}
function onGeoError(){
    console.log("can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);