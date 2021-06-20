app.component('aside-blogs', {
	props: {
		title: String,
		blogs: Array
	},
	template: //html
	`
	<header class=" mb-4">
			<h3 class="text-center text-secondary">{{title}}</h3>
	</header>

	<div>
		<div v-for="blog in blogs" class="ps-3 pt-3 d-flex border-bottom border-secondary">
				<div class="d-flex align-items-center" style="width: 15%;">
						<img :src="blog.src" class="w-100">
				</div>
				<div class="ps-3">
						<p class="h6">{{blog.title}}</p>
						<p class="fst-italic fw-lighter">By: {{blog.creator}}</p>
				</div>
		</div>

	</div>
	`,
})