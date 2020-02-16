<template>
	<div class="ix-country-nif-form__select mb-3">
    <label id="coutry_label" for="country-select" class="d-block">País:</label>
		<v-select 
    id="country-select"
    :options="countries" 
    :clearable="false"
    :filterable="true"
    :value="getSelected()"  
    @input="setSelected"
    >
      <template slot="selected-option" slot-scope="option">
        <div class="ix-country-nif-form__select__item">
          <span class="ix-country-nif-form__select__item-text">{{ option.label }}</span>
          <country-flag :country="option.value" size='small' class="ix-country-nif-form__select__item-flag"/></span>
        </div>
      </template>
      <template slot="option" slot-scope="option">
        <div class="ix-country-nif-form__select__item">
          <span class="ix-country-nif-form__select__item-text">{{ option.label }}</span>
          <country-flag :country="option.value" size='small' class="ix-country-nif-form__select__item-flag"/></span>
        </div>
    </template>
    </v-select>
	</div>
</template>
<script>
  import CountryFlag from 'vue-country-flag'
  export default {
    name: 'CountriesDropdown',
    components: {
        CountryFlag
    },
    props: {
      countries: {
        type: Array,
        default: [{ label: 'Não existe informação', value:null}]
      },
      selected: {
        type: Object,
        default: null
      }
    },
    data: () => ({
      show: true,
      countryValue: null
    }),
    watch: {

    },
    computed: {
    },
    methods: {
      setSelected (val) {
        this.countryValue = val
        this.$emit('dropdownSelected', val)
      },
      getSelected (){
        console.log('selected: ', this.selected)
        return this.countryValue == null ? this.selected :  this.countryValue
      }
    }
  }
</script>
<style lang="scss">
.ix{
	&-country-nif-form{
		&__select{
			&__item{
        cursor:pointer;
        position: relative;
        display: flex;
        justify-content: space-between;
        width: 100%;
				&-text{
					font-size: 0.9em;
          line-height: 2rem;
          color: $color-grey;
				}
				&-flag{
            margin: -16px !important;
				}
			}
		}
	}
	
}

</style>