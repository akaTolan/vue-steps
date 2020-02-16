<template>
  <div class="ix-accordion-step">
    <div class="row">
      <div class="col-1">
        <div class="ix-accordion-step__number" :class="{ selected: isActive }">
          <div class="ix-accordion-step__number-text">{{id}}</div>
        </div>
      </div>
      <div class="col-11 p-0">
        <div class="ix-accordion-step__title" :class="{ selected: isActive }">{{title}}</div>
        <div class="ix-accordion-step__form">
            <component
            :is="component"
            @valid="onFormValid"
          />
          <div class="ix-button ix-button--green mb-3"
          @click="onNextStep">
            Continuar
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CountryNifForm from '@components/CountryNifForm'
  import ColorForm from '@components/ColorForm'
  export default {
    name: 'AccordionStep',
    components: {
      CountryNifForm,
      ColorForm,
    },
    props: {
      id: {
        type: Number,
        default: -1,
      },
      title: {
        type: String,
        default: '',
      },
      isActive: {
        type: Boolean,
        default: false,
      },
      component: {
        type: String,
        default: ''
      }
    },
     methods: {
      onFormValid() {
        console.log('onFormValid');
      },
      onNextStep() {
        console.log('onNextStep');
      },
     }
  }
</script>
<style lang="scss">
.ix{
  &-accordion-step{
    &__number{
      width: 29px;
      height: 29px;
      border-radius: 50%;
      line-height: 0;
      background: $color-white;
      border: 1px solid;
      border-color: $color-grey-light;
      position: relative;
      
      &:after {
        content: "";
        display: block;
        padding-bottom: 100%;
      }
      &-text{
        position: absolute;
        font-size: 0.7em;
        font-weight: $font-weight-bold;
        color: $color-grey-light;
        bottom: 50%;
        width: 100%;
        text-align: center;
      }
      &.selected{
        background: $color-green;
        border-color: $color-green;
        .ix-accordion-step__number-text{
          color: $color-white;
        }
      }
    }
    &__title{
      font-size: 1em;
      line-height: 2rem;
      font-weight: $font-weight-bold;
      color: $color-grey-light;
      &.selected{
        color: $color-grey-semidark;
      }
    }
  }
}
</style>
