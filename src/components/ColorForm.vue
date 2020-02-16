<template>
	<div class="ix-invoice-color-form">
    <div class="ix-form small pr-5 mb-3">
      <b-input-group prepend="#">
        <b-input 
        id="color-input" 
        class="ix-form-input-text ix-text-green text-uppercase"
        v-model="logoColor"
        maxlength="7"
        ></b-input>
      </b-input-group>
    </div>
	</div>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex' 
  import { formValidate } from '@/components/mixins/formValidate'
  export default {
    name: 'ColorForm',
    data: () => ({
    	logoColor:'',
    }),
    computed: {
      ...mapGetters([
        'getInvoiceColor',
      ])
    },
    mounted() {
      this.logoColor = this.getInvoiceColor
    },
    watch: {
      logoColor(val) {
        if(this.isHexColor(val)){
          console.log('logoColor', val)
          this.setInvoiceColor(val)
        }
      }
    },
    mixins: [formValidate],
    methods: {
      ...mapActions({
        setInvoiceColor: 'actionSetInvoiceColor'
      })
  	}
  }
</script>
<style lang="scss">
.ix{
	&-invoice-color-form{
		&__text{
			font-size: 0.9em;
			line-height: 2rem;
		}
	}
	
}
</style>