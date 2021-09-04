<template>
  <h1>Paises de Todo el Mundo</h1>
  <p v-for="(pais, index) in ArrayPaises" :key="index">
      {{pais.name}} - {{pais.capital}} - {{pais.region}} - {{pais.population}}
  </p>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup(){
        const ArrayPaises = ref([]);

        const fetchArray = async() =>{
            try {
                // const respuesta = await fetch('https://restcountries.eu/rest/v2/all')
                const respuesta = await fetch('api.json')

                ArrayPaises.value = await respuesta.json()

                console.log(ArrayPaises.value)
            } catch (error) {
                console.log(error)
            }
        }

        fetchArray()

        return{ArrayPaises}
    }
}
</script>

<style>

</style>