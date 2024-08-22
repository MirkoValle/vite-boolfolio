<script>
export default{
    data() {
        return{
            
        }
    },
    props: [
        'project'
    ]
}
</script>

<template>
    <div class="project">
        <h1>Nome: {{ project.nome }}</h1>
        <h3 class="d-inline" :style="{ backgroundColor: project.type.colore }">{{ project.type.nome }}</h3>
        <ul>
            <li v-for="technologies in project.technologies" class="badge text" :style="{ backgroundColor: technologies.colore }">
                {{ technologies.nome }}
            </li>
        </ul>
        <p>Info: {{ project.info }}</p>
        <p>Link GitHub: <a :href="project.url_repo"> {{ project.url_repo }}</a></p>

    </div>

</template>

<style lang="scss" scoped>

div.project{
    margin: 0 auto;
    width: 35rem;
    margin-bottom: 2rem;
    background-color: white;
    border-radius: .5rem;
}

h3{
    color: white;
    padding: 0 1rem;
    border-radius: 1rem;
}

ul{
    padding-top: 1rem;
    padding-left: 0rem;
    li{
        margin-right: .5rem;
    }
}

</style>