app.component('search-blogs', {
	props: {
		placeholder: String,
	},
	template: //html
	`
	<form class="mb-3">
		<input type="search" class="form-control form-control-dark border border-dark"
				:placeholder="placeholder" aria-label="Search">
	</form>
	`
});