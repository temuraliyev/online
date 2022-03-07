const LoginPage = document.getElementById('loginPage');

const login = LoginPage.querySelector('#login');
const password = LoginPage.querySelector('#password');
const button = LoginPage.querySelector('#button')
const showPass = LoginPage.querySelector('#show')
const buttonReg = LoginPage.querySelector('[reg]')

showPass.addEventListener(`click`, showPassword)
button.addEventListener('click', () => {
    openPage();
})
buttonReg.addEventListener('click', () =>{
    reg(login.value, password.value)
    alert('mayli uka yomon qiziqdin kir')
})

let db = {
    users: [
        {
            login: 'Login1',
            pass: 'Pass1',
        },
        {
            login: 'Login2',
            pass: 'Pass2',
        },
        {
            login: 'Login3',
            pass: 'Pass3',
        },
        {
            login: 'Login4',
            pass: 'Pass4',
        },
    ]
}

function openPage() {
    for (let i = 0; i < db.users.length; i++) {
        if ((login.value === db.users[i].login) &&
            (password.value === db.users[i].pass)) {
            alert('kirding')
            break;
        }
        else if ((i + 1) === db.users.length) {
            alert('uka sangamas')
            window.location.reload();
        }
    }
}

function showPassword() {
    if (showPass.checked) {
        password.type = 'text'
    }
    else {
        password.type = 'password'
    }
}

function reg(loginValue, passValue) {
    let userDb = {
        login : loginValue,
        pass : passValue,
    }
    db.users.push(userDb)
    
}



