<script setup>
import {useI18n} from "vue-i18n";
const {t} = useI18n();

</script>

<template>

  <div class="flex align-items-center justify-content-center">
    <p>Copyright  </p>

  </div>
  <div class="flex align-items-center justify-content-center">

    <p> {{ t('footer.powered-by')}} <a href="https://www/newsapi.org" >NewsApi Org </a>
      {{t('footer.and')}} <a href="https://primevue.org">PrimeVue</a>
    </p>
  </div>
</template>

<style scoped>

</style>