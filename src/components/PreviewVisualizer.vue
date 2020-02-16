<template>
	<div class="ix-preview-visualizer">
		<div class="ix-preview-visualizer__invoice">
			<img 
		src="~@/assets/img/invoice.png" 
		srcset="~@/assets/img/invoice@2x.png 2x">
		</div>
		<invoice-preview
		:name="invoice.name"
		:adress="invoice.adress"
		:zipCode="invoice.zipCode"
		:email="invoice.email"
		:phone="invoice.phone"
		:country="getCountry.label"
		:nif="getNif"
		:logoColor="getInvoiceColor"
		 />
		<div class="ix-preview-visualizer__plant">
			<img 
		src="~@/assets/img/plant.png" 
		srcset="~@/assets/img/plant@2x.png 2x">
		</div>
	</div>
</template>
<script>
	import InvoicePreview from '@components/InvoicePreview'
	import { mapActions, mapGetters } from 'vuex'
	export default {
		name: 'PreviewVisualizer',
		components:{
			InvoicePreview
		},
		data: () => ({
		    invoice: {
		    	name: 'Hotel ACME',
		    	adress: 'Av. Duque d’Ávila 46, 3A',
		    	zipCode: '1050-053 Lisboa',
		    	email: 'hello@hotelacme.com',
		    	phone: '+351 91 666 53 52',
		    },
		  }),
		computed: {
		  ...mapGetters([
		    'getNif',
		    'getCountry',
		    'getInvoiceColor',
		  ])
		},
		mounted() {
		  this.invoice.nif = this.getNif == 0 ? '000 000 000' : this.getNif
		  this.invoice.country = this.getCountry.label == '' ? 'NAO' : this.getCountry.label
		  this.invoice.color = this.getCountry.label == '' ? 'CCCCCC' : this.getInvoiceColor
		}
	}
</script>
<style lang="scss">
.ix{
	
	&-preview-visualizer {
		height: 100%;
		background-image: url("~@/assets/img/background.png");
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;
		
		&__plant{
			position: absolute;
			bottom: 0;
			z-index: 55;
		}

		&__invoice{
			position: absolute;
			top: 50%;
			left: 15%;
			transform: translateY(-50%);
			z-index: 22;
		}
	}

}

</style>
