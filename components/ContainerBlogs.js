app.component('container-blogs', {
	props: {
		blogs : Array
	},
	template: //html
	`
	<div class="container-blogs">
		<div v-for="blog in blogs" class="d-flex rounded-3 p-3 my-4">
				<div class="d-flex align-items-center w-50">
						<img :src="blog.src" class="w-100">
				</div>
				<div class="ms-4">
						<h3 class="fw-bold">{{blog.title}}</h3>
						<p class="fst-italic fw-lighter">By: {{blog.creator}}</p>
						<p>{{blog.description}}</p>
				</div>
		</div>
	</div>
	`,
})