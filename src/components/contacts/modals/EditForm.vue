<template>
  <q-card style="min-width: 350px">
    <ModalHeader>Edit</ModalHeader>
    <form @submit.prevent="submitForm">
      <q-card-section>
        <ModalName 
          :name.sync="contactToSubmit.name"
          ref="modalName"
        />
        <ModalEmail 
          :email.sync="contactToSubmit.email"
        />
      </q-card-section>
      <ModalButtons />
    </form>
  </q-card>
</template>

<script>
import ModalHeader from 'components/contacts/modals/shared/ModalHeader'
import ModalName from 'components/contacts/modals/shared/ModalName'
import ModalEmail from 'components/contacts/modals/shared/ModalEmail'
import ModalButtons from 'components/contacts/modals/shared/ModalButtons'
import { mapActions } from 'vuex'

export default {
  props: ['contact'],
  components: {
    ModalHeader, ModalName, ModalEmail, ModalButtons
  },
  data(){
    return {
      contactToSubmit: {}
    }
  },
  methods: {
    ...mapActions('agenda', ['updateContact']),
    submitForm(){
      let $name = this.$refs.modalName.$refs.name
      $name.validate()
      if(!$name.hasError){
        this.submitContact()
      }
    },
    submitContact(){
      this.contactToSubmit.id = this.contact.id
      this.updateContact(this.contactToSubmit)
    }
  },
  mounted() {
    let v = this
    v.contactToSubmit = Object.assign({}, this.contact.doc)
  }
};
</script>

<style>
</style>