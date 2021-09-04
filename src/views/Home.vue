<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Bienvenido Your Vue App"/>
<h1
:style="{'color': color}"
>contador: {{contador}}</h1>
<button @click="aumentar">+</button>
<button @click="disminuir">-</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },

  data(){
    return{
        contador:0
    }
  },

computed:{
color(){
  if (this.contador < 0){
    return 'red'
  } else {
    return 'blue'
  }
}
},
  methods:{
    aumentar(){
      this.contador ++
    },

    disminuir(){
      this.contador --
    }
  }
}
</script>
