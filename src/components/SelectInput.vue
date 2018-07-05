<template>
    <div class="select">
        <select v-bind:name="id" v-bind:id="id" v-bind:value="value" @change.prevent="$emit('input', $event.target.value)">
            <option disabled value="">Nothing selected</option>
            <option v-for="(option, i) in options" v-bind:key="i">{{ option }}</option>
        </select>
    </div>
</template>

<script>
    export default {
        name: 'SelectInput',
        props: ['id','options','value'],
    }
</script>