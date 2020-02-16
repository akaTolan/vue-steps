<template>
	<div class="ix-progress-menu">
		<div :class="`ix-progress-menu__button ix-progress-menu__button--bg-${getBackgroundColor(index)}`" v-for="(item, index) in views">
			<span class="ix-progress-menu__icon"></span>
			<span class="ix-progress-menu__text" v-text="item.text"></span>
		</div>
	</div>
</template>

<script>

  export default {
    name: 'InvoiceProgressMenu',
    data: () => ({
    	viewIdSelected: 1,
		views: [
	    	{text:'Criar Conta', link:'/'},
	    	{text:'Preparar', link:'/preparar'},
	    	{text:'Aprender', link:'/'},
	    	{text:'Finalizar', link:'/'}
		]
    }),
    computed: {

    },
    methods: {
    	getBackgroundColor(index) {
      	return index < this.viewIdSelected ? 'past' : index == this.viewIdSelected ? 'present' : 'future'
      }
    }
  }
</script>

<style lang="scss">
$base: 16px;
.ix{
	&-progress-menu{
		display: flex;
		overflow: hidden;
		margin: auto;
		text-align: center;
		width: 100%;
		height: 50px;
		// transform: translateY(-50%);
		
		&__button{
			position: relative;
			display: flex;
			flex-grow: 1;
			text-decoration: none;
			margin: auto;
			height: 100%;
			padding-left: $base;
			padding-right: 0;
			z-index: 9;
			
			&:after {
				content: "";
				position: absolute;
				display: inline-block;
				width: 50px;
				height: 50px;
				top: 0;
				right: $base / 1.35 * -1;
				border-top-right-radius: 5px;
				transform: rotate(45deg);
				z-index: 10;
			}

			&--bg-past{

				background-color: $color-grey-dark;
				&:after {
					background-color: $color-grey-dark;
				}
			}
			&--bg-present{
				background-color: $white;
				
				.ix-progress-menu__text{
					color: $color-green;
				}

				&:after {
					// background-color: $white;
				}
			}
			&--bg-future{
				background-color: $color-grey-light;
				&:after {
					// background-color: $color-grey;
				}
			}
		}

  		&__text{
  			line-height: 3rem;
  			font-size: .8rem;
  			margin: 0 auto;
	    	font-weight: $font-weight-bold;
			letter-spacing: 0;
			color: $color-white;
  		}

  		&__icon{
  			
  		}
	}
	
}
</style>
