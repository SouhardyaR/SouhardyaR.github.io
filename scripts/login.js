const loginForm = document.getElementById("login-form")
const loginButton = document.getElementById("submit-button")
const errMsg = document.getElementById("err-msg")

const host = 'https://job-portal-backend-kxzv.vercel.app'

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    login(username, password);
})

async function login(username, password){
    const req = await fetch(`${host}/auth/applicant-login`,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({'username': `${username}`, 'password': `${password}`}),
        mode: "no-cors"
    });
    const res = req.json();
    console.log(res.data)
    if(res.data.message == "Success"){
        document.cookie = `{token : ${res.data.token}}`
    }else{
        errMsg.style.opacity = 1
    }
}
/*
fetch('https://job-portal-backend-kxzv.vercel.app/auth/applicant-login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  // body: '{\n    "username": "Srijan",\n    "password": "test"\n}',
  body: JSON.stringify({
    'username': 'Srijan',
    'password': 'test'
  })*/