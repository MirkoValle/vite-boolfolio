<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';
export default{
    components:{
        ProjectCard
    },
    data() {
        return{
            projects: [],
        }
    },
    methods:{
        getProjects(){
            axios.get('http://127.0.0.1:8000/api/projects',{
                params: {

                }
            })
            .then((response)=> {
                console.log(response.data.results.data);
                this.projects = response.data.results.data;
            })
            .catch(function (error){
                console.log(error);
            })
        }
    },
    created(){
        this.getProjects();
    }
}
</script>

<template>
    <div>
        <ProjectCard v-for="project in projects" :project="project"/>
    </div>
</template>

<style lang="scss" scoped>

div{
    background-color: rgb(233, 233, 233);
    padding: 2rem;
}

</style>