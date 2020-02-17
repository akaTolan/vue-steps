<template>
  <div class="ix-accordion-step">
    <div class="row">
      <div class="col-1">
        <div class="ix-accordion-step__number" :class="{ selected: isActive }">
          <div class="ix-accordion-step__number-text">{{id}}</div>
        </div>
      </div>
      <div class="col-11 p-0">
        <div class="ix-accordion-step__title mb-2" :class="{ selected: isActive }">{{title}}</div>
        <div class="ix-accordion-step__form" :style="`height:${getHeight()}px;`">
            <component
            :ref="component"
            :is="component"
            :active="isActive"
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
  import CountryNifForm from '@components/forms/CountryNifForm'
  import ColorForm from '@components/forms/ColorForm'
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
      },
      contentHeight: {
        type: Number,
        default: -1,
      },
    },
     methods: {
      onFormValid() {
        console.log('onFormValid');
      },
      onNextStep() {
        console.log('onNextStep');
        this.$emit('onContinue')
      },
      getHeight() {
        return this.isActive ? this.contentHeight - 202 : 0
      }
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
      pointer-events: none;
      
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
    &__form{
      overflow: hidden;
      transition: height .5s ease-out;
    }
  }
}
</style>
