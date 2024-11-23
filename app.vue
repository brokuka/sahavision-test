<script setup lang="ts">
const MOCK_FOLDERS = [
  {
    id: 1,
    name: 'Папка 1',
    children: [
      { id: 2, name: 'Папка 1.1', children: [] },
      {
        id: 3,
        name: 'Папка 1.2',
        children: [
          { id: 4, name: 'Папка 1.2.1', children: [] },
        ],
      },
    ],
  },
  { id: 5, name: 'Папка 2', children: [] },
]

const MODAL_TITLE = 'Структура папок'
</script>

<template>
  <div class="grid place-content-center min-h-screen">
    <FolderModal :title="MODAL_TITLE" :data="MOCK_FOLDERS" />
  </div>
</template>
