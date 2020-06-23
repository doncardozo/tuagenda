<template>
  <q-page class="q-pa-md row items-start q-gutter-md">
   <div>
     <q-list bordered separator v-if="allContacts.length">
       <div >
        <Contacts         
          v-for="(c, k) in allContacts"
          :key="k"          
          :contact="c"
        />
       </div>
     </q-list>
   </div>
   <div class="absolute-bottom text-center q-mb-lg">
     <q-btn 
      round 
      color="primary" 
      icon="add"
      @click="showAddForm = true" />
   </div>
   <q-dialog v-model="showAddForm" persistent>
     <AddForm @close="showAddForm = false" />
   </q-dialog>
  </q-page>
</template>

<script>
import Contacts from 'components/contacts/Contacts'
import AddForm from 'components/contacts/modals/AddForm'
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  name: 'PageHome',
  data(){
    return {
      showAddForm: false
    }
  },
  components: {
    Contacts, AddForm
  }, 
  computed: {
    ...mapGetters('agenda', ['allContacts']),    
    // ...mapState({
    //   contactsList: state => state.contacts
    // })
  },
  methods: {
    ...mapActions('agenda', ['updateContactsList'])
  },
  created(){
    this.updateContactsList()
  }
}
</script>
