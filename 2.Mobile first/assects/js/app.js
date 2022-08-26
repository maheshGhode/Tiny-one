let cl = console.log

const togglebtn = document.getElementById("togglebtn");
const navbar = document.getElementById("navbar");

togglebtn.addEventListener('click', function(e){
    e.preventDefault();
    navbar.classList.toggle('show');
    let getEle = (Array.from(this.children))[0];
    getEle.classList.toggle('fa-bars');
    getEle.classList.toggle('fa-times');
})