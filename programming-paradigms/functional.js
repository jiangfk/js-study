// 函数式编程，核心：每个函数尽可能干净简短，尽量由指令组成，不要有过多细节的处理
const REQUIRED = 'REQUIRED'
const MIN_LENGTH = 'MIN_LENGTH'

function getInputValue(id) {
    return document.getElementById(id).value
}
function validator(value, flag, validatorValue) {
    if (flag === REQUIRED) {
        return value.trim().length > 0
    }
    if (flag === MIN_LENGTH) {
        return value.trim().length >= validatorValue
    }
}
function createNewUser(userName, password) {
    if (!validator(userName, REQUIRED) || !validator(password, MIN_LENGTH, 6)) {
        throw new Error('invalid input! userName or password is wrong (the password should be at least 6 characters)!')
    }
    return {
        userName,
        password
    }
}
function greet(user) {
    console.log('Hi! my name is ' + user.userName)
}
function signupHandler (e) {
    e.preventDefault();
    const userName = getInputValue('username')
    const passWord = getInputValue('password')
    try {
        const newUser = createNewUser(userName, passWord)
        console.log(newUser)
        greet(newUser)
    } catch (err){
        alert(err.message)
    }
    
}

function createForm(formId, signupHandler) {
    const inputForm = document.getElementById(formId)
    inputForm.addEventListener('submit', signupHandler)
}

createForm('input-form', signupHandler)