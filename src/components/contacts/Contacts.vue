<template>
  <q-item clickable v-ripple>
    <q-item-section>{{contact.doc.name}}</q-item-section>
    <q-item-section v-if="contact.doc.email">{{contact.doc.email}}</q-item-section>
    <q-item-section side>
      <div class="row">
        <q-btn 
          @click.stop="showEditContact = true"
          dense 
          flat 
          icon="edit" />
        <q-btn 
          @click.stop="promptToDelete(contact.id)" 
          dense 
          flat 
          icon="delete" />
      </div>
    </q-item-section>

    <q-dialog v-model="showEditContact">
      <EditForm 
        @close="showEditContact = false"
        :contact="contact"
      />
    </q-dialog>
  </q-item>
</template>

<script>
import EditForm from 'components/contacts/modals/EditForm'
import { mapActions } from 'vuex'

export default {
  components: {
    EditForm
  },
  props: ["contact"],
  data(){
    return {
      showEditContact: false
    }
  },
  methods: {
    ...mapActions('agenda', ['deleteContact']),
    promptToDelete(id){      
      this.$q.dialog({
         title: 'confirm',
         message: 'Really delete?',
         ok: {
           push: true
         },
         cancel: {
           color: 'negative'
         },
         persistent: true
      }).onOk(() => {
        this.deleteContact(id)
      })
    }
  }
};
</script>

<style>
</style>