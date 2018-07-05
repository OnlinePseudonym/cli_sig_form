<template>
  <div class="container is-widescreen" id="app">
    <div class="columns is-vcentered">
      <SignatureForm>
        <FormGroup attr="name" label="Name">
          <TextInput id="name" v-model="formData.name" placeholder="Kevin Reynolds"></TextInput>
        </FormGroup>
        <FormGroup attr="title" label="Title">
          <TextInput id="title" v-model="formData.title" placeholder="Front-End Developer"></TextInput>
        </FormGroup>
        <FormGroup attr="phone" label="Phone Number">
          <TextInput id="phone" v-model="formData.phone" placeholder="480-555-5555"></TextInput>
        </FormGroup>
        <FormGroup attr="fax" label="Fax Number">
          <TextInput id="fax" v-model="formData.fax" placeholder="602-555-5555"></TextInput>
        </FormGroup>
        <FormGroup attr="icon" label="Icon">
          <SelectInput id="icon" v-bind:options="options.icon" v-model="formData.showIcon"></SelectInput>
        </FormGroup>
        <FormGroup attr="address" label="Address">
          <SelectInput id="address" v-bind:options="options.address" v-model="formData.showAddress"></SelectInput>
        </FormGroup>
      </SignatureForm>
      <SignaturePreview v-bind:name="formData.name" v-bind:title="formData.title" v-bind:phone="formData.phone" v-bind:fax="formData.fax" v-bind:showAddress="formData.showAddress" v-bind:showIcon="formData.showIcon">
        <CopyButton></CopyButton>
      </SignaturePreview>
    </div>
  </div>
</template>

<script>
import CopyButton from './components/CopyButton.vue';
import FormGroup from './components/FormGroup.vue';
import SelectInput from './components/SelectInput.vue';
import SignatureForm from './components/SignatureForm.vue';
import SignaturePreview from './components/SignaturePreview.vue';
import TextInput from './components/TextInput.vue';

export default {
  name: 'App',
  components: {
    CopyButton,
    FormGroup,
    SelectInput,
    SignatureForm,
    SignaturePreview,
    TextInput,
  },
  data() {
    return {
      formData: {
        showAddress: '',
        fax: '',
        showIcon: '',
        name: '',
        phone: '',
        title: '',
      },
      options: {
        address: ['No','Yes'],
        icon: ['No','Yes'],
      }
    }
  }
};
</script>
