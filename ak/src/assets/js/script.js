$(document).ready(function() {
	$('.loader').slideUp("slow");
	$(window).scroll(function loader(){
		var header = $('.header'),
			scroll = $(window).scrollTop();
		if (scroll >= header.height()) {
			header.addClass('sticky').addClass('custom-animated', 20000);
            
		}
		else {
            
			header.removeClass('sticky custom-animated');
		}
	})
    // setInterval(function() {
	// 	loader
	// },3000)
})


// const loader = document.getElementsByClassName('loader'); 
// function laoder() {
//     document.querySelector('.loader').style.display = 'none';
// }
// function fadeOut() {
//     setInterval(laoder, 2500);
// }
// window.onload = fadeOut();


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
