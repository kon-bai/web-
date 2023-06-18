const zh = document.querySelector('[type="text"]')
const mm = document.querySelector('[type="password"]')
const dl = document.querySelector('.quyu button:nth-child(1)')
const zbzc = document.querySelector('.quyu button:nth-child(2)')
const h5s = document.querySelector('h5')

dl.addEventListener('click', denlu)

document.addEventListener('keyup', (e) => {
    // console.log(e);
    if (e.keyCode === 13) {
        denlu()
    }
})
//获取本地存储
const bbcc = JSON.parse(localStorage.getItem('用户'))
function denlu() {
    // console.log(bbcc);
    if(bbcc==null) return h5s.style.display='block'
    if(zh.value === bbcc.zh && mm.value === bbcc.mima){
        h5s.style.display='none'
        return location.href='../index.html'
    }
    h5s.style.display='block'
}

document.addEventListener('click', xianshi)

setTimeout(xianshi, 5000)

function xianshi() {
    document.querySelector('.denlu').style.display = 'inline-block'
}
zbzc.addEventListener('click',()=>{
    location.href='../src/注册.html'
})