<script setup>
import {Source} from "../../domain/model/source.entity.js"
const {source} = defineProps({
  source:{
    type: Source,
    required: true
  }
});

const emit = defineEmits(['source-selected']);
const emitSourceSelectedEvent =() =>{
  console.log("emit source selected");
  emit('source-selected', source);
}
</script>

<template>
  <div class="m-4">
    <div @click="emitSourceSelectedEvent" class ="flex align-content-start flex-wrap cursor-pointer" >
        <span class ="flex align-items-center justify-content-center mr-2">
          <pv-avatar :aria-label="source.name"
                     :image ="source.urlToLogo"
                     shape="circle"
          />
        </span>
        <span class="flex align-items-center justify-content-center">
          {{source.name}}
        </span>
    </div>
  </div>
</template>

<style scoped>

</style>