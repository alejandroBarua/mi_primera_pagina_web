app.component('categories', {

	template: `
	<div class=" bg-dark">

        <div class=" p-2 container bg-dark d-flex">
            <i @click="toLeft" class="fas fa-arrow-circle-left fs-2 align-middle pe-2 pt-2 btn-left"></i>
            <div class="container-categories">
                <p v-for="category in categories" class="btn btn-outline-light m-1">{{category}}</p>
            </div>
            <i @click="toRight" class="fas fa-arrow-circle-right fs-2 align-middle ps-2 pt-2 btn-right"></i>
        </div>
    </div>

	`,
    data(){
        return{
            categories: ['frontend', 'HTML', 'CSS', 'Bootstrap', 'Javascript', 'Vue', 'React', 'Angular', 'Backend', 'PHP', 'Node', 'Express', 'Mysql'],
        }
    },
    methods:{
        toLeft(){
            document.querySelector(".container-categories").scrollLeft -= 400;
        },
        toRight(){
            document.querySelector(".container-categories").scrollLeft += 400;
        }
    }
});

