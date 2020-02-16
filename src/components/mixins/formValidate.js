export const formValidate = {
  methods: {
    isNifValid(value) {
      console.log(value)
      let nif = (typeof value === 'string') ? value : value.toString()
      let result = {
        valid: false,
        data: {
          message: 'NIF inválido',
        },
      }
      // Perform NIF Validation
      if (nif != null && nif.length === 9) {
        if (!['1', '2', '3', '5', '6', '8'].includes(nif.substr(0, 1))
          && !['45', '70', '71', '72', '77', '79', '90', '91', '98', '99'].includes(nif.substr(0, 2))) return result

        const total = nif[0] * 9 + nif[1] * 8 + nif[2] * 7 + nif[3] * 6 + nif[4] * 5 + nif[5] * 4 + nif[6] * 3 + nif[7] * 2

        const modulo11 = total - parseInt(total / 11) * 11
        const checkDigit = modulo11 == 1 || modulo11 == 0 ? 0 : 11 - modulo11
        console.log('checkDigit:', checkDigit)
        console.log('nif[8]:', nif[8])
        if (nif[8] == checkDigit) {
          result.data.message = 'NIF válido'
          result.valid = true
        }
      }
      return result
    },
    isHexColor (hex) {
      return typeof hex === 'string'
          && hex.length === 6
          && !isNaN(Number('0x' + hex))

    }
  },
}
