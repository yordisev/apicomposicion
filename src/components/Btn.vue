<template>
  <!-- <button @click="accionHijo">{{textoBoton}}</button> -->
<button @click="$emit('accion')">{{textoBoton}}</button>

</template>

<script>
export default {
    props:['textoBoton'],
    setup(props, context){
        const accionHijo = () =>{
            context.emit('accion')
        }
        return {accionHijo}
    }
}
</script>

<style>

</style>