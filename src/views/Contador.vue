<template>
  <h1>Contador: {{contador}}</h1>
</template>

<script>
import {useContador} from '../hooks/useContador'
export default {
    setup(){
        return {...useContador}
    }
}
</script>

<style>

</style>