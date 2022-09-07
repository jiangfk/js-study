// 面向对象编程，前几年比较火，通过类或者对象的方式来组织代码逻辑(属性+方法)
document.getElementsByClassName('main-title')[0].innerText = '面向对象编程'

// 校验
class Validator {
    static REQUIRED = 'REQUIRED';
    static MIN_LENGTH = 'MIN_LENGTH';
    static validatorHandler(value, flag, validatorValue) {
        if (flag === this.REQUIRED) {
            return value.trim().length > 0
        }
        if (flag === this.MIN_LENGTH) {
            return value.trim().length >= validatorValue
        }
    }
    
}

// 用户
class User {
    constructor(uname, upass) {
        this.userName = uname
        this.userPassword = upass
    }
    sayHi() {
        const user = {
            userName: this.userName,
            userPass: this.userPassword
        }
        console.log(user)
        console.log('hi, im' + user.userName)
    }
}

// 用户相关的数据表单
class UserForm {
    constructor() {
        this.userName = document.getElementById('username')
        this.password = document.getElementById('password')
        this.form = document.getElementById('input-form')
        this.form.addEventListener('submit', this.getUserInfo.bind(this))
    }
    getUserInfo(e) {
        e.preventDefault();
        const userValue = this.userName.value;
        const passwordValue = this.password.value;
        // 静态属性方法可以直接使用类名来调用
        if (!Validator.validatorHandler(userValue, Validator.REQUIRED) || !Validator.validatorHandler(passwordValue, Validator.MIN_LENGTH, 6)) {
            alert('invalid input! userName or password is wrong (the password should be at least 6 characters)!')
            return
        }

        const user = new User(userValue, passwordValue)
        user.sayHi()
    }
}
new UserForm()