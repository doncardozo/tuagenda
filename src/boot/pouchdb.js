// import Vue from 'vue'
import PouchDB from 'pouchdb'

const db = new PouchDB('agenda')
// Vue.prototype.$db = db
export default db
