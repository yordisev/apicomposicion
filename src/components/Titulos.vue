<template>
  <h1>Titulo Contador: {{contador}}</h1>
  <h1>Titulo Contador: {{signopeso}}</h1>

</template>

<script>
import { computed } from '@vue/reactivity'
export default {
props:['contador'],

setup(){
    const signopeso = computed(() =>{
        return '$' + contador.value
    })
}
// computed:{
//     signopeso(){
//         return '$' + this.contador
//     }
// }
}
</script>

<style>

</style>