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
        <div class="ix-country-nif-form__select__selected-item">
          <span class="ix-country-nif-form__select__selected-item-text">{{ option.label }}</span>
          <country-flag 
          v-if="option.value" 
          :country="option.value" 
          size='small' 
          class="ix-country-nif-form__select__selected-item-flag"/>
        </div>
      </template>
      <template slot="option" slot-scope="option">
        <div class="ix-country-nif-form__select__item">
          <span class="ix-country-nif-form__select__item-text">{{ option.label }}</span>
          <country-flag 
          v-if="option.value" 
          :country="option.value" 
          size='small' 
          class="ix-country-nif-form__select__item-flag"/>
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
			&__selected-item{
        position: absolute;
        top: 0;
        width: 100%;
        &-text{
          font-size: 0.9em;
          line-height: 2rem;
          color: $color-grey;
        }
        &-flag{
            box-shadow: 0px 0px 3px #00000080;
            position: absolute;
            right: 20px;
            top: 9px;
        }
      }
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

// Overriding select Default Style
// aligning indicator arrow
.vs__dropdown-toggle {
  padding: 4px 6px 5px!important;
  border: 1px solid $color-grey-light!important;
  border-radius: 4px;
}

.vs__selected{
  width: 100%;
}

</style>