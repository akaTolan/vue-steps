<template>
  <div id="ix-app">
    <div class="ix-modal">
      <div class="ix-modal__backdrop"></div>
      <div class="ix-modal__content">
        <invoice-progress-menu />
        <router-view/>
      </div>
    </div>
    
  </div>
</template>

<script>
import InvoiceProgressMenu from '@components/InvoiceProgressMenu'
  export default {
    name: 'home',
    components: {
      InvoiceProgressMenu
    }
  }
</script>

<style lang="scss" src="./styles/app.scss"></style>