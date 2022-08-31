$(document).ready(function() {
	$(".loader").delay(2500);
	$('.loader').slideUp(500);
	
	$(window).scroll(function (){
		var header = $('.header'),
			scroll = $(window).scrollTop();
		if (scroll >= header.height()) {
			header.addClass('sticky').addClass('custom-animated', 20000);
			// setInterval($('.loader').slideUp("slow"), 3000);
            
		}
		else {
            
			header.removeClass('sticky custom-animated');
		}
	})
    
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
