//用户名模块
const pdyhm = /^[0-9a-zA-Z-_]{2,6}$/
const yhm = document.querySelector('ul li:nth-child(1) input')
const ts1 = document.querySelector('ul li:nth-child(1) span')
// console.log(ts1);
yhm.addEventListener('change', yhmhs)
function yhmhs() {
    ts1.style.opacity = 1
    if (pdyhm.test(yhm.value)) {
        ts1.innerHTML = '输入合法'
        ts1.style.color = 'green'
        return true
    } else {
        ts1.innerHTML = '输入不合法,请输入2到6位数字、字母和符号组合'
        ts1.style.color = 'red'
        return false
    }
}


//手机号模块
const pdsjh = /^1[0-9]{10}$/
const sjh = document.querySelector('ul li:nth-child(2) input')
const ts2 = document.querySelector('ul li:nth-child(2) span')
sjh.addEventListener('change', sjhhs)
function sjhhs() {
    ts2.style.opacity = 1
    if (pdsjh.test(sjh.value)) {
        ts2.innerHTML = '输入合法'
        ts2.style.color = 'green'
        return true
    } else {
        ts2.innerHTML = '请输入11位的手机号'
        ts2.style.color = 'red'
        return false
    }
}

//验证码模块
const pdyzm = /^\d{6}$/
const yzm = document.querySelector('ul li:nth-child(3) input')
const ts3 = document.querySelector('ul li:nth-child(3) span')
const hqyzm = document.querySelector('ul li:nth-child(3) button')
hqyzm.addEventListener('click', function () {
    if (sjhhs()) {
        alert('请输入6位数字。')
    }
})
yzm.addEventListener('change', yzmhs)
function yzmhs() {
    ts3.style.opacity = 1
    if (pdyzm.test(yzm.value)) {
        ts3.innerHTML = '输入合法'
        ts3.style.color = 'green'
        return true
    } else {
        ts3.innerHTML = '验证码输入错误'
        ts3.style.color = 'red'
        return false
    }
}

//密码模块
const pdmima = /^[a-zA-Z0-9-_]{6,16}$/
const mima = document.querySelector('ul li:nth-child(4) input')
const ts4 = document.querySelector('ul li:nth-child(4) span')
mima.addEventListener('change', mimahs)
function mimahs() {
    ts4.style.opacity = 1
    if (pdmima.test(mima.value)) {
        ts4.innerHTML = '输入合法'
        ts4.style.color = 'green'
        return true
    } else {
        ts4.innerHTML = '请输入6到20数字、字母和符号组合'
        ts4.style.color = 'red'
        return false
    }
}

//密码验证
const mimayz = document.querySelector('ul li:nth-child(5) input')
const ts5 = document.querySelector('ul li:nth-child(5) span')
mimayz.addEventListener('change', mimayzhs)
function mimayzhs() {
    ts5.style.opacity = 1
    if (mimayz.value === mima.value) {
        ts5.innerHTML = '输入合法'
        ts5.style.color = 'green'
        return true
    } else {
        ts5.innerHTML = '两次密码输入不一致'
        ts5.style.color = 'red'
        return false
    }
}

//存储对象
const cc = {}

//注册按钮
const zc = document.querySelector('ul li:nth-child(6) button')
zc.addEventListener('click', () => {
    if (yhmhs() && sjhhs() && yzmhs() && mimahs && mimayzhs()) {
        cc.zh = yhm.value
        cc.mima = mima.value
        localStorage.setItem(`用户`,JSON.stringify(cc))
        location.href = '../src/登录.html'
    }
})


