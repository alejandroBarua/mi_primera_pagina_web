
app.component('header-menu', {
	template: `
	 <header class="bg-light">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img :src="src"
                            style="width: 80px;"></a>
                    <a class="display-4 fw-bold text-dark text-decoration-none pointer-events title-panda">{{title}}</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
														<a v-for="menu in menus" class="nav-link px-3 active" href="#" 
														:class="menu == 'Register' ? 'btn btn-dark text-white rounded-3 featured' : ''">{{ menu }}</a>                         
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    </header>
	`,
	data(){
		return {
			src: './assets/angry-panda.png',
			title: 'Panda',
			menus: ['Home', 'Events', 'About me', 'Sign In', 'Register'],
			
		}
	}
});