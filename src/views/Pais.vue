<template>
 <h1>Detalle País</h1>
  {{$route.params.nombre}}
  {{nombre}}
  <p v-for="(pais, index) in ArrayPaises" :key="index">  
    {{pais.name}} - {{pais.region}} <br>
    {{pais.population}}
  </p>
</template>

<script>
import {useRoute} from 'vue-router'
import {useFetch} from '../hooks/fetchData'
export default {
    props:['nombre'],

    setup(props) {
        const nombreParams = useRoute()
         const {ArrayPaises} = useFetch(`https://restcountries.eu/rest/v2/name/${nombreParams.params.nombre}`)
        return {ArrayPaises}
    }

}
</script>

<style>

</style>