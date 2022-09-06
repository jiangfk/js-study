// 命令式编程，语法简单，复用性低，注重过程的呈现，命令的罗列
document.getElementsByClassName('main-title')[0].innerText = '命令式编程'


const form = document.getElementById('input-form')
function showUserInfo(e) {
    // 提交后阻止外链跳转
    e.preventDefault();
    const userName = document.getElementById('username')
    const userNameValue = userName.value
    const password = document.getElementById('password')
    const passwordValue = password.value
    if (userNameValue.trim().length === 0) {
        alert('invalid input! Username must not be empty')
        return
    }
    if (passwordValue.trim().length < 6) {
        alert('invalid input! password must be 6 characters or longer')
        return
    }
    const user = {
        name: userNameValue,
        password: passwordValue
    }
    console.log(user)
    console.log("HI, I'M" + user.name)
}

form.addEventListener('submit', showUserInfo)