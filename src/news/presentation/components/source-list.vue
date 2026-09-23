<script setup>
import {Source} from "../../domain/model/source.entity.js"
import SourceItem from "./source-item.vue"
const {visible, sources} = defineProps({
  visible: Boolean,
  sources: Array[Source]
})
const emit = defineEmits(['update:visible', 'source-selected']);
const emitUpdateVisibleEvent = (value) => {
  emit('update:visible', value);
}
const emitSourceSelectedEvent = (source) => {
  console.log("emit source selected de source list");
  emit('source-selected', source);
}
</script>
<template>
<pv-drawer :visible="visible" @update:visible="emitUpdateVisibleEvent">
  <source-item v-for="source in sources" :key="source.id" :source="source"
    @source-selected="emitSourceSelectedEvent(source)"/>
</pv-drawer>

</template>

<style scoped>

</style>