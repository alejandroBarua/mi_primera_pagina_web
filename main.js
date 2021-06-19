let sliderContainer = document.querySelector(".container-hashtags");

document.querySelector(".btn-left").addEventListener("click", () => {
	sliderContainer.scrollLeft -= 400;
	
});

document.querySelector(".btn-right").addEventListener("click", () => {
	sliderContainer.scrollLeft += 400;

});
