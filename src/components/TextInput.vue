<template>
    <input v-bind:id="id" class="input" v-bind:name="id" v-bind:value="value" @input.prevent="$emit('input' ,$event.target.value)" type="text" v-bind:placeholder="placeholder">
</template>

<script>
    export default {
        name: 'TextInput',
        props: ['id','placeholder','value'],
    }
</script>