<script setup>
import ArticleItem from "./article-item.vue";
import {Article} from "../../domain/model/article.entity.js";

const {articles} = defineProps({articles: {type: Array, required: true}});
</script>

<template>
<div v-for="article in articles" :key="article.url.toString()" >
  <article-item :article="article"/>
</div>
</template>

<style scoped>

</style>