<template>
	<div class="ix-preview-visualizer" :style="`height:${contentHeight}px;`">
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
		<arrow class="ix-preview-visualizer__arrow"/>
	</div>
</template>
<script>
	import arrow from '@svg/arrow.svg'
	import InvoicePreview from '@components/previewer/InvoicePreview'
	import { mapActions, mapGetters } from 'vuex'
	export default {
		name: 'PreviewVisualizer',
		components:{
			InvoicePreview,
			arrow
		},
		props: {
			contentHeight: {
			  type: Number,
			  default: -1,
			},
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
		}
	}
</script>
<style lang="scss">
.ix{
	
	&-preview-visualizer {
		background-image: url("~@/assets/img/background.png");
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;
		
		&__plant{
			position: absolute;
			bottom: 0;
			z-index: 55;
			pointer-events: none;
		}

		&__arrow{
			position: absolute;
			transform: translateX(-50%);
			top: calc(50% - 280px);
			left: calc(50% - 155px);
			z-index: 55;
			pointer-events: none;
			
			@include media-breakpoint-up(xl) { 
				left: calc(50% - 180px);

			 }
		}

		&__invoice{
			position: absolute;
			top: 50%;
			left: 15%;
			transform: translateY(-50%);
			z-index: 8;
		}
	}


}

</style>
