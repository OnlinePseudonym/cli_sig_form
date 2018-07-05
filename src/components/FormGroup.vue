<template>
    <div class="field">
        <label v-bind:for="attr" class="label">{{ label }}</label>
        <div class="control">
            <slot />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FormGroup',
        props: [ 'attr','label'],
    }
</script>