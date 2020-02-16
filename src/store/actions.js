

const actionSetCountry = async ({ commit }, payload) => {
  	commit('setCountry', payload)
}

const actionSetNif = async ({ commit }, payload) => {
  	commit('setNif', payload)
}

const actionSetInvoiceColor = async ({ commit }, payload) => {
	console.log('actionSetInvoiceColor',payload) 
	commit('setInvoiceColor', payload)
}





export default {
  actionSetCountry,
  actionSetNif,
  actionSetInvoiceColor
}
