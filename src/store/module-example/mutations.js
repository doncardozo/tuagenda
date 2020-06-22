import Vue from 'vue'

export function addContact (state, payload) {
    state.contacts.push(payload)
}
