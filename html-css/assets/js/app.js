
// スコープ化
(  ()=>  {

// EmailとPasswordのInputBoxのIDを取得
const $email = document.getElementById("email");
const $password = document.getElementById("password");
const $submit = document.getElementById("submit");



console.log(localStorage.getItem("email"));
console.log(localStorage.getItem("password"));

$email.value = localStorage.getItem("email");
$password.value = localStorage.getItem("password")



// クリックハンドラー    
const clickHandler = () => {
    
    // テキストボックスのテキストデータを取得
    let input_email = $email.value;
    let input_password = $password.value;

    console.log("Email:"+ input_email +"　　PW:"+ input_password);

    localStorage.setItem("email", input_email)
    localStorage.setItem("password", input_password)

}


// document.getElementById("submit").addEventListener("click", clickHandler01);
document.getElementById("submit").addEventListener("click", clickHandler);





}) ();
