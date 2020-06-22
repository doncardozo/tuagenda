<template>
  <q-input         
        label="E-mail"
        :value="email"
        @input="$emit('update:email', $event)"
        :rules="[val => !!val || 'Email is required']"
        ref="email"
        type="email" 
        />
</template>

<script>
export default {
  props: ['email']
}
</script>

<style>

</style>