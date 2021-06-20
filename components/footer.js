app.component('footer-me', {
	props: {
		name: String,
		links: Array
	},
	template: //html
	`
	<footer class="mt-5 bg-dark text-white d-flex align-items-center justify-content-center">
        <p class="pt-2">{{name}}</p>
        <p class="px-3 pt-2">|</p>
        <div>
            <a v-for="link in links" :href="link.href" ><i class="h4 py-4 px-2 fab" :class="link.icon"></i> </a>
        </div>
    </footer>
	`
});