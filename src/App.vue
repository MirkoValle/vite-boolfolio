<script>
  import AppHeader from './components/AppHeader.vue';
  import AppFooter from './components/AppFooter.vue';
  import ProjectList from './components/ProjectList.vue';

export default {
  name: "",
  components:{
    AppHeader,
    ProjectList,
    AppFooter
  }
}

</script>

<template>
<AppHeader/>
<router-view></router-view>
<AppFooter/>
</template>

<style lang="scss">
  @use "./styles/general.scss"

</style>
