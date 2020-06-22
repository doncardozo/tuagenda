import { uid } from 'quasar'

export default function () {
  return {
    contacts: [
      {id: uid(), name: 'Tony Cardozo', email: 'oa.cardozoz@gmail.com'},
      {id: uid(), name: 'Oscar Cardozo', email: 'cardozo_oa@yahoo.es'},
    ]
  }
}
