<script setup>
import {Article} from "../../domain/model/article.entity.js";
import {ref} from "vue";
const {article} = defineProps({article: {type: Article, required: true}});


</script>

<template>
<pv-card class="m2">
  <template #header>
    <img :alt="article.title" :src="article.urlToImage.toString()" class="image-fit">
  </template>
  <template #title>
    <p class="flex align-content-start flex-wrap">
      {{article.title}}
    </p>
  </template>
  <template #subtitle>
    <div class="flex flex-column gap-2">
      <p>
        <span class="flex align-items-center justify-content-center">
          <pv-avatar :aria-label="article.source.name"
                     :image ="article.source.urlToLogo"
                     shape="circle"
          />
        </span>
      </p>
      <p v-if="article.author" class="flex align-items-center justify-content-center">
        <span class="flex align-items-center justify-content-center">
          {{article.author}}
        </span>
      </p>
      <p class="flex align-items-center justify-content-center">
        <span class="flex align-items-center justify-content-center">
          {{article.getFormatedPublishedAt()}}
        </span>
      </p>
    </div>
  </template>
  <template #content>
    <div class ="flex align-items-center justify-content-center">
     {{article.description}}
    </div>
  </template>
  <template #footer>
    botones para compartir
  </template>
  </pv-card>

</template>

<style scoped>

</style>