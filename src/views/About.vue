<template>
  <div class="about">
    <Titulo :contador="contador" :color="color"/>

    <h1 :style="{'color':color}">contador: {{contador}}</h1>
    <button @click="aumentar">+</button>
    <button @click="disminuir">-</button>
    <hr>

    <input type="text" v-model="texto">
    <p>{{texto}}</p>
  </div>
</template>
<script>
import { computed, ref } from '@vue/reactivity'
import Titulo from '../components/Titulos.vue'
export default {
  components:{
    Titulo
  },
  setup() {
    const contador = ref(0);
    const texto = ref('');

    const aumentar = () =>{
      contador.value ++
    }

    const disminuir = () => {
      contador.value --
    }


    const color = computed(() =>{
      if (contador.value < 0){
    return 'red'
  } else {
    return 'blue'
  }
    })

    return {contador,aumentar,disminuir, color,texto}
  },
}
</script>

