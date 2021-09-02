<template>
  <h1>Titulo Contador: {{contador}}</h1>
  <h1 :style="{'color':color}">Titulo Contador: {{signopeso}}</h1>

</template>

<script>
import { computed } from '@vue/reactivity'
export default {
props:['contador','color'],

setup(props){
    const signopeso = computed(() =>{
        return '$' + props.contador
    })

    return {signopeso}
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