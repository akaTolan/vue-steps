<template>
  <div class="ix-invoice-preview">
  	<div class="ix-invoice-preview__info">
  		<div class="ix-invoice-preview__info__logo"
  		:style="`background:#${logoColor};`">
  		</div>
  		<div class="ix-invoice-preview__info__text">
  			<span><b>{{name}}</b></span>
  			<span>{{adress}}</span>
  			<span>{{zipCode}}</span>
  			<span>{{country}}</span>
  			<span><b>Email:</b> {{email}}</span>
  			<span><b>Tel.:</b> {{phone}}</span>
  			<span><b>NIF:</b> {{nif}}</span>
  		</div>
  	</div>
  	<div class="ix-invoice-preview__bg">
  		<img 
      class="ix-invoice-preview__img" 
  		src="~@/assets/img/invoice.png" 
  		srcset="~@/assets/img/invoice@2x.png 2x">
		</div>
  	</div>
</template>

<script>
  export default {
    name: 'InvoicePreview',
    props: {
      logoColor: {
        type: String,
        default: '18BB80'
      },
      name: {
        type: String,
        default: ''
      },
      adress: {
        type: String,
        default: ''
      },
      zipCode: {
        type: String,
        default: ''
      },
      country: {
        type: String,
        default: ''
      },
      email: {
        type: String,
        default: ''
      },
      phone: {
        type: String,
        default: '+000 00 000 00 00'
      },
      nif: {
        type: String,
        default: '000000000'
      }
    },
    computed: {
    	
    }
  }
</script>



<style lang="scss">
.ix{
	
	&-invoice-preview   {
		height: 100%;
		background-image: url("~@/assets/img/background.png");
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;
		
		&__plant{
			position: absolute;
			bottom: 0;
		}

		&__bg{
			position: absolute;
			top: 46%;
			left: 25%;
			transform: translateY(-50%);
			z-index: 0;
		}

		&__info{
			position: absolute;
			transform: translateY(-50%);
			top: calc(46% - 200px);
			left: 35%;
			z-index: 44;
			
			&__logo{
				width: 29px;
				height: 29px;
				border-radius: 50%;
				line-height: 0;
				position: relative;
				transition: background .25s ease-in-out;
				
				&:after {
			        content: "";
			        display: block;
			        padding-bottom: 100%;
			        }
			}


      &__img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

			&__text{
				margin-top: 12px;
				font-size: 0.5rem;
				display: flex;
				flex-direction: column;
			}
		}
	}

}
</style>
