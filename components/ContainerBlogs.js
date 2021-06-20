app.component('container-blogs', {
	template: `
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
	data(){
		return {
			blogs: [
				{
					title: 'What is Vuejs, and Why is it Cool?',
					src: './assets/vuejs.png',
					creator: 'Shehroz',
					description: "Vue.js is a progressive JavaScript framework, which is used to build UIs (User Interfaces) and SPAs (Single-page Applications). This framework is famous for its fast-paced learning curve..."
			 },
			 {
					title: 'Vue vs. React in terms of Performance',
					src: './assets/vue-vs-react.jpg',
					creator: 'Evan',
					description: 'Vue.js performs accurate DOM manipulations down to a single Text node. But when we talk aboutperformance there are several situations to consider...'
			 }
			]
		}
	}
})