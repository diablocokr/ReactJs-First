const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText=`${hours}:${minutes}:${seconds}`;
}
getClock();
//첫번째 인수 : 실행하고자 하고자하는 함수 
//두번째 인수 : 간격 ms(milliseconds) ex:5000 5초를 의미
setInterval(getClock, 1000);

//첫번째 인수 : 실행할 함수
//두번째 인수 : 얼마나 기다릴지 ms(milliseconds) ex:5000 5초를 의미
//setTimeout(getClock, 1000);

