<script setup>
import {ref, computed, onMounted} from "vue";
import SourceList from "../../../news/presentation/components/source-list.vue";
import {newsStore} from "../../../news/application/news.store.js";
import ArticleList  from "../../../news/presentation/components/article-list.vue";
import footerContent from "./footer-content.vue";
import LanguageSwitcher from "./language-switcher.vue";
const drawerVisible = ref(false);

const toogleDrawer = () => {
  drawerVisible.value = !drawerVisible.value;
}
const sources = computed(() => newsStore.sources);
const articles = computed(() => newsStore.articles || []);
const errors = computed(() => newsStore.errors);

onMounted(() => {
  newsStore.loadSources();
})
const setSource = source => {
  console.log("set source");
  newsStore.setCurrentSource(source);
  toogleDrawer();
}


</script>
<template>
  <div class="layout-container">
    <header class="sticky-header">
      <pv-menubar>
        <template #start>
          <pv-button icon="pi pi-bars" label="CathUp" text class="mr-2" @click="toogleDrawer"/>
          <source-list
              :sources="sources" v-model:visible="drawerVisible"
              @source-selected="setSource"
          />

        </template>
        <template #end>
          <LanguageSwitcher/>
        </template>
      </pv-menubar>
    </header>
  </div>
  <main class="content-padding">
    <article-list v-if="articles.length" :articles="articles"/>
    <!--Unavialable content -->
  </main>
  <footer-content/>
</template>

<style scoped>

</style>