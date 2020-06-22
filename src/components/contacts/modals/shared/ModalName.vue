<template>
  <q-input 
        autofocus
        :value="name"
        @input="$emit('update:name', $event)"
        :rules="[val => !!val || 'Field is required']"
        label="Name"
        ref="name"
        />
</template>

<script>
export default {
  props: ['name']
}
</script>

<style>

</style>