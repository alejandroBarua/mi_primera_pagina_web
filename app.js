const app = Vue.createApp({
	template: //html
	`
	<div>
		<header-menu title="panda" :logo="src" :menus="items"></header-menu>
		<categories></categories>
		<div class="container mt-4 clearfix">
				<div class="float-lg-start container-primary">
						<search-blogs placeholder="search..."></search-blogs>
						<container-blogs :blogs="main.blogs"></container-blogs>
				</div>
				<div class="float-lg-end container-today">
						<aside-blogs title="Today" :blogs="aside.blogs"></aside-blogs>
				</div>
		</div>
		<footer-me name="Alejandro Barua" :links="linksContact"></footer-me>
	</div>
	`,
	data(){
		return {
			src: './assets/angry-panda.png',
			items: ['Home', 'Events', 'About me', 'Sign In', 'Register'],
			main: {
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
			},
			aside: {		
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
			},
			linksContact: [
				{
					icon: 'fa-linkedin-in',
					href: '#'
				},
				{
					icon: 'fa-twitter',
					href: '#'
				},
				{
					icon: 'fa-github',
					href: '#'
				}
			]
		}
	}
}); 