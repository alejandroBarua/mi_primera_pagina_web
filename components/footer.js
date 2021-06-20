app.component('footer-me', {
	template: `
	<footer class="mt-5 bg-dark text-white d-flex align-items-center justify-content-center">
        <p class="pt-2">{{name}}</p>
        <p class="px-3 pt-2">|</p>
        <div>
            <a href="#" ><i class="h4 py-4 px-2 fab fa-linkedin-in"></i> </a>
            <a href="#"><i class="h4 py-4 px-2 fab fa-twitter"></i></a>
            <a href="#"><i class="h4 py-4 px-2 fab fa-github"></i></a>
        </div>
    </footer>
	`,
	data(){
		return {
			name: 'Alejandro Barua',
		}
	}
});