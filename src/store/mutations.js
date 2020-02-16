const setCountry = (state, payload) => {
  state.country = payload
}

const setNif = (state, payload) => {
  state.nif = payload
}

const setInvoiceColor = (state, payload) => {
  state.invoiceColor = payload
}

export default {
  setCountry,
  setNif,
  setInvoiceColor
}
