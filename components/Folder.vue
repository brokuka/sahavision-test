<script setup lang="ts">
defineProps<{
  name: string
  isSelected: boolean
}>()

const emit = defineEmits<{
  click: []
  select: []
}>()

function onButtonClick() {
  emit('click')
}
</script>

<template>
  <button
    class="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent"
    @click="onButtonClick"
  >
    {{ name }}
  </button>
</template>
