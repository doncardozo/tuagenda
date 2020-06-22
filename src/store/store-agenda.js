import { uid } from 'quasar'
import db from 'boot/pouchdb'


const state = {
    // contacts: [{name: 'Tony', email: 'oa.cardozoz@gmail.com'}]
    contacts: []
}

const mutations = {
    DELETE_CONTACT(state, id){        
        state.contacts.filter((doc, k) => {            
            if(doc.id === id){
                state.contacts.splice(k, 1)
            }
        })
    },
    UPDATE_LIST(state, data){        
        state.contacts = data
    }
}

const actions = {
    addContact({dispatch}, contact){
        // let contactId = uid()
        let payload = {
            // id: contactId,
            name: contact.name,
            email: contact.email
        }        
        db.post(payload)
        .then(() => dispatch('updateContactsList'))
        .catch(err => console.log(err))
    },
    updateContact({dispatch}, contact){        
        db.get(contact.id)
        .then(doc => {
            return db.put({
                _id: contact.id,
                _rev: doc._rev,
                name: contact.name,
                email: contact.email
            })
        })        
        .then(() => dispatch('updateContactsList'))
        .catch(err => console.log(err))
    },
    deleteContact({commit}, id){        
        db.get(id)
        .then(doc => {            
            db.remove(doc).then(() => {
                commit('DELETE_CONTACT', id)
            })
            return
        })        
        .catch(err => console.log(err))   
    },
    updateContactsList({commit}){
        db.allDocs({include_docs: true})
        .then(docs => {
            commit('UPDATE_LIST', docs.rows)         
        })
        .catch(err => console.log(err))
    }
}

const getters = {
    allContacts: (state) => {                  
        return state.contacts
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}

