<template>
  <h1>Paises de Todo el Mundo</h1>
  <p v-for="(pais, index) in ArrayPaises" :key="index">
      <router-link :to="`/paises/${pais.name}`">
        {{pais.name}}
      </router-link>
  </p>
</template>

<script>
// import { ref } from '@vue/reactivity'

import {useFetch} from '../hooks/fetchData'
export default {
    setup(){
    return {...useFetch('api.json')}

        // const ArrayPaises = ref([]);

        // const fetchArray = async() =>{
        //     try {
        //         // const respuesta = await fetch('https://restcountries.eu/rest/v2/all')
        //         const respuesta = await fetch('api.json')

        //         ArrayPaises.value = await respuesta.json()

        //         console.log(ArrayPaises.value)
        //     } catch (error) {
        //         console.log(error)
        //     }
        // }

        // fetchArray()

        // return{ArrayPaises}
    }
}

// import {fetchData} from '../hooks/fetchData'
// export default {
//     setup(){
//         return {...fetchData('api.json')}
//     }
// }
</script>

<style>

</style>