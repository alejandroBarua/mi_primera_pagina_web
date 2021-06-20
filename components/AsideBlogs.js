app.component('aside-blogs', {
	template: `
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
	data(){
		return {
			title: 'Today',
			blogs: [
				{
					title: 'What is Vuejs, and Why is it cool?',
					src: './assets/vuejs.png',
					creator: 'Shehroz'
				},
				{
					title: 'Why Learn PHP?',
					src: './assets/phpLogo.png',
					creator: 'Medelyn'
				},
				{
					title: 'How to Write a Programming Book',
					src: './assets/programming.jpg',
					creator: 'Charles'
				},
				{
					title: 'Top 10 Online Platforms to Learn UI/UX Design',
					src: './assets/design.png',
					creator: 'Rikke'
				},
				{
					title: 'Productivity Hacks',
					src: './assets/productivity.jpg',
					creator: 'Kimberly'
				}
			]
		}
	}
})