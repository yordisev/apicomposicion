<template>
  <h1>Contador: {{contador}}</h1>
  <Btn :textoBoton="'Aumentar'" @accion="aumentar"/>
  <Btn :textoBoton="'Disminuir'" @accion="disminuir"/>
</template>

<script>
import Btn from '../components/Btn.vue'
import {useContador} from '../hooks/useContador'
export default {
  components:{
Btn
  },
    setup(){
      // const {contador,aumentar,disminuir} = useContador()
      // return {contador,aumentar,disminuir}
        return {...useContador()}
    }
}
</script>

<style>

</style>