<template>
  <q-card clickable v-ripple class="my-card bg-secondary text-white">
     <q-card-section>
        <div class="text-h6">{{contact.doc.name}}</div>
        <div class="text-subtitle2" v-if="contact.doc.email">{{contact.doc.email}}</div>
      </q-card-section>
    <q-card-actions side>
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
    </q-card-actions>

    <q-dialog v-model="showEditContact">
      <EditForm 
        @close="showEditContact = false"
        :contact="contact"
      />
    </q-dialog>
  </q-card>
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

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 500px
  margin-bottom: 5px
</style>