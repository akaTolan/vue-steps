<template>
  <div class="ix-preparar">
 	<div class="row h-100">
 		<div class="col-md-8">
 			<div class="ix-preparar__steps h-100">
 				<div class="ix-preparar__title">Vamos personalizar a factura!</div>
		 		<div class="ix-preparar__accordion">
		 			<accordion-step 
		 			v-for="(step, index) in steps"
		 			:id="step.id"
		 			:title="step.title"
		 			:component="step.component"
		 			:isActive="currentStep == step.id"
		 			/>
		 		</div>
 			</div>
		</div>
 		<div class="col-md-4">
 			<preview-visualizer/>
 		</div>
 	</div>
  </div>
</template>

<script>
import AccordionStep from '@components/AccordionStep'
import PreviewVisualizer from '@components/PreviewVisualizer'
export default {
  name: 'Preparar',
  components: {
  	AccordionStep,
  	PreviewVisualizer,
  },
   data: () => ({
   	steps:[
	   	{id:1,title:'Defina os seus dados',component:'CountryNifForm'},
	   	{id:2,title:'Defina as suas cores', component:'ColorForm'}
	   	],
   	currentStep: 1
   }),
}
</script>
