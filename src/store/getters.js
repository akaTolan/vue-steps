const getCountry = (state) => {
  return state.country ? state.country : ''
}

const getNif = (state) => {
  return state.nif ? state.nif : ''
}

const getInvoiceColor = (state) => {
  return state.invoiceColor ? state.invoiceColor : ''
}

const getCountriesUE = (state) => {
  return state.countriesUE ? state.countriesUE : ''
}


export default {
  getCountry,
  getNif,
  getInvoiceColor,
  getCountriesUE,
}
