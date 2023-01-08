const loginForm = document.querySelector("#login_form");
const loginInput = document.querySelector("#login_form input");
const greeting = document.querySelector("#greeting");


function onLoginClick(potato){
    potato.preventDefault();
    const myname = document.querySelector("#myname");
    
    localStorage.setItem("saveusername",myname.value);
    loginForm.classList.add("hidden");
    greeting.innerText = "Hi! "+localStorage.getItem("saveusername");
    greeting.classList.remove("hidden");
}
loginForm.addEventListener("submit", onLoginClick);//클릭 이벤트


if(localStorage.getItem("saveusername") != null){
    loginForm.classList.add("hidden");
    greeting.innerText = "Hi! "+localStorage.getItem("saveusername");
    greeting.classList.remove("hidden");
}else{
    loginForm.classList.remove("hidden");
    greeting.classList.add("hidden");

}

const a = "홍길동";
const b = "서울";
/*
//작은 따옴표
console.log('제 이름은 '+ a +'입니다.');

//큰 따옴표
console.log("제가 사는 곳은 " + b + "입니다.");

//백틱
console.log(`제 이름은 ${a} 입니다.`);
console.log(`제가 사는 곳은 ${b} 입니다.`);


console.log(`제가
 사는
  곳은
   ${b} 입니다.`);


*/
//key와 value값 입력
//localStorage.setItem("사용자이름","홍길동");
//console.log(localStorage.getItem("사용자이름"));



//nameclass
//const loginForm = document.querySelector("#login-form");
//const loginFormId = document.getElementById("login-form");
//console.log(loginForm);
//console.log(loginFormId);






//const myname = document.querySelector(".nameclass").value;
    //const mynameCls = document.getElementsByClassName("nameclass")[0].value
    //console.log(myname);
    //console.log(mynameCls);




//const myname = document.querySelector("#myname").value;
    //const mynameId = document.getElementById("myname").value;
    //console.log(myname);
    //console.log(mynameId);



    //const loginForm = document.getElementById("login_form");    
    //const loginForm = document.querySelector("#login_form");
    //const loginInput = loginForm.querySelector("input");
    //const loginButton = loginForm.querySelector("button");
    //console.log(loginInput);//<input type="text" id="myname" class="nameclass" value="" placeholder="이름이 무엇인가요?">
    //console.log(loginButton);//<button id="loginbtn">로그인</button>

    //console.log(`입력한 값=${loginInput.value}`);