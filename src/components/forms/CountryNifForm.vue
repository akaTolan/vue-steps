<template>
	<div class="ix-country-nif-form" :class="{ active: active }">
		<p class="ix-country-nif-form__text">Adicione o País e o NIF. Os dados apresentados serão pré-preenchidos nas suas facturas.</p>
    <div class="ix-form normal">
      <!-- COUNTRIES DROPDOWN -->
      <countries-dropdown 
      :countries="dropdownOpinions"
      :selected="country"
      @dropdownSelected="onCountrySelected"/>
      <!-- end// COUNTRIES DROPDOWN -->
      <label id="nif_label" for="nif-input" class="d-block">Nif:</label>
      <b-form-input
          class="ix-text-grey mb-3"
          id="nif-input"
          v-model="nif"
          maxlength="9"
          :state="nif.length < 9 ? null : isNifValid(nif).valid"
        ></b-form-input>
    </div>
	</div>
</template>
<script>
  import CountriesDropdown from '@components/CountriesDropdown'
  import { mapActions, mapGetters } from 'vuex'	
  import { formValidate } from '@/components/mixins/formValidate'
  export default {
    name: 'CountryNifForm',
    components: {
        CountriesDropdown
    },
    props: {
      active: {
        type: Boolean,
        default: false    
      }
    },
    data: () => ({
        nif: '',
        country: undefined,
        dropdownOpinions: [],
        show: true,
      }),
    computed: {
      ...mapGetters([
        'getCountriesUE',
        'getNif',
        'getCountry',
      ])
    },
    mixins: [formValidate],
    beforeMount() {
      this.dropdownOpinions = this.getCountriesUE
    },
    mounted() {
      this.nif = this.getNif
      this.country = this.getCountry
    },
    watch: {
      nif(val) {
        this.nif = val
        if(this.nif.length === 9){
          if(this.isNifValid(val).valid){
            this.onNifValidSelected(val)
          }else{
            console.log(this.isNifValid(this.nif).data.message)
            // alert('NIF Inválido')
          }
        }
      }

    },
    methods: {
      ...mapActions({
        setCountry: 'actionSetCountry',
        setNif: 'actionSetNif'
      }),
      onCountrySelected(val) {
        console.log('onCountrySelected: ', val)
        this.setCountry(val)
      },
      onNifValidSelected(val) {
        console.log('onNifSelected: ', val)
        this.setNif(val)
      },
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.nif = ''
        this.form.country = null
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
  	}
  }
</script>
<style lang="scss">
.ix{
	&-country-nif-form{
    opacity: 0;
    transition: opacity .25s ease-out;
    &.active{
      opacity: 1;
    }
		&__text{
			font-size: 0.9em;
			line-height: 2rem;
			color: $color-grey;
		}
		&__select{
			&__item{
				&-text{
					
				}
				&-flag{
					
				}
			}
		}
	}
}
.input-group-text{
    color: $color-white!important;
    background-color: $color-grey-light!important;
  }

</style>