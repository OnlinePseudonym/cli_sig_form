<template>
    <input v-bind:id="id" class="input" v-bind:name="id" v-bind:value="value" @input.prevent="$emit('input' ,$event.target.value)" v-bind:type="type || 'text'" v-bind:placeholder="placeholder" @keyup="formatToPhone" @keydown="enforceFormat" maxlength="12">
</template>

<script>
    export default {
        name: 'TextInput',
        props: ['id', 'placeholder', 'type', 'value'],
        methods: {
            isNumericInput(event) {
                const key = event.keyCode;
                return ((key >= 48 && key <= 57) || (key >=96 && key <= 105));
            },
            isModifierKey(event) {
                const key = event.keyCode;
                return ((event.shiftKey === true || key === 35 || key === 36) ||
                    (key === 8 || key === 9 || key === 13 || key === 46) ||
                    (key > 36 && key < 41) ||
                    (
                        (event.ctrlKey === true || event.metaKey === true) &&
                        (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
                    )
                )
            },
            enforceFormat(event) {
                if(!this.isNumericInput(event) && !this.isModifierKey(event)) {
                    event.preventDefault();
                }
            },
            formatToPhone(event) {
                if(this.isModifierKey(event) || event.target.value.length > 10) {return;}

                const target = event.target;
                const input = event.target.value.replace(/\D/g,'').substring(0,10);
                const zip = input.substring(0,3);
                const middle = input.substring(3,6);
                const last = input.substring(6,10);
                

                if(input.length > 6){target.value = `${zip}-${middle}-${last}`;}
                else if(input.length > 3){target.value = `${zip}-${middle}`;}
                else if(input.length > 0){target.value = `${zip}`;}
            }
        }
    }
</script>