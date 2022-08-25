function laoder() {
    document.querySelector('.loader').style.display = 'none';
}
function fadeOut() {
    setInterval(laoder, 2500);
}
window.onload = fadeOut();
const pro = document.getElementById('pro-group-title');
pro.addEventListener('click', () => {
    pro.classList.add('active');
})

function scrollBar(){
    console.log('deene')
    let scrollBtn = document.getElementById('scroll-btn');
    let pageName = document.getElementById('page_name');
    pageName.addEventListener('click', function (e) {
        scrollBtn?.style.display == "block!important";
        console.log(scrollBtn);
        e.preventDefault();
    })
}
