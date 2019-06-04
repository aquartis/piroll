'use strict'

! function func() {
let scrollBtn=document.querySelector('.scroll-btn');

	$('document').ready(function () {
		$('.menu').click(function () {
			$('nav').slideToggle(500);
		})
	})

	scrollBtn.addEventListener('click', ()=>{
		let height=window.scrollY;
		animate({
			duration:1000,
			timing:timeFraction=>{
				return timeFraction;
			},
			draw:progress=>{
				let height1=height-height*progress;
				window.scrollTo(0, height1)
			}
		})
	})

	function animate(options) {
		let start = performance.now();
		requestAnimationFrame(function animate(time) {
			let timeFraction = (time - start) / options.duration;
			if (timeFraction > 1) timeFraction = 1;
			let progress = options.timing(timeFraction);
			options.draw(progress);
			if (timeFraction < 1) {
				requestAnimationFrame(animate);
			}
		})
	}
	function scroll() {
        if (document.documentElement.scrollTop > window.innerHeight && scrollBtn.classList.contains('disactive')) {
            scrollBtn.classList.toggle('disactive');
            return;
        }
        if (document.documentElement.scrollTop < window.innerHeight && !scrollBtn.classList.contains('disactive')) {
            scrollBtn.classList.toggle('disactive');
        }
    }
    window.addEventListener('scroll', scroll);
}()