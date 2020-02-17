<template>
  <div class="ix-preparar" ref="ixSteps">
 	<div class="row h-100">
 		<div class="col-md-8">
 			<div 
 			class="ix-preparar__steps">
 				<div class="ix-preparar__title">Vamos personalizar a factura!</div>
		 		<div class="ix-preparar__accordion">
		 			<accordion-step 
		 			v-for="(step, index) in steps"
		 			v-bind:key="step.id"
		 			:id="step.id"
		 			:title="step.title"
		 			:component="step.component"
		 			:isActive="currentStep == (step.id - 1)"
		 			:contentHeight="stepsHeight"
		 			@onContinue="onNextStep"
		 			/>
		 		</div>
 			</div>
		</div>
 		<div class="col-md-4">
 			<preview-visualizer
 			:contentHeight="stepsHeight"
 			/>
 		</div>
 	</div>
  </div>
</template>

<script>
import AccordionStep from '@components/AccordionStep'
import PreviewVisualizer from '@components/previewer/PreviewVisualizer'
export default {
  name: 'Preparar',
  components: {
  	AccordionStep,
  	PreviewVisualizer,
  },
   data: () => ({
   	steps:[
	   	{id:1,title:'Defina os seus dados',component:'CountryNifForm'},
	   	{id:2,title:'Defina as suas cores', component:'ColorForm'},
	   	],
   	currentStep: 0,
   	stepsHeight: 0
   }),
   mounted() {
   	window.addEventListener('resize', this.handleResize, false)
   	this.handleResize()
   },
   beforeDestroy() {
   	window.removeEventListener('resize', this.handleResize, false)
   },
   methods: {
   	onNextStep() {
   		this.currentStep = this.currentStep == this.steps.length - 1 ? 0 : this.currentStep+1

   	},
   	handleResize() {
   		this.stepsHeight = this.$refs.ixSteps.clientHeight
   		console.log('stepsHeight: ', this.$refs.ixSteps.clientHeight)
   	}
   }
}
</script>
<style lang="scss">
.ix{
	
	&-preparar{
		  width: 100%;
		  height: 76vH;
		  text-align: left;
		  &__title{
		    font-size: 24px;
		    color: $color-grey;
		  }
		  &__steps{
		    padding: 18px 0;
		    padding-left: 40px;
		  }
		  &__accordion{
		    padding-top: 18px;
		    position: relative;
		    &:before{
		      content: "";
		      position: absolute;
		      border-left: 1px solid $color-grey-light;
		      height: calc(100% - 40px);
		      left: 14px;
		      top: 18px;
		    }
		  }
		}

}

</style>
