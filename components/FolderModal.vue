<script setup lang="ts">
import { TreeItem, TreeRoot } from 'radix-vue'

const { data } = defineProps<{
  data: Folder[]
  title?: string
}>()

const MODAL_CLOSE_ANIMATE_DELAY = 150

interface Folder {
  id: number
  name: string
  children: Folder[]
}

const open = defineModel<boolean>('open')

const isModalOpen = ref(false)
const structure = ref(data)
const selectedFolder = ref<number>()

function onFolderSelect(folder: Folder) {
  selectedFolder.value = folder.id
}

function onClickOkButton() {
  // eslint-disable-next-line no-console
  console.log('@selectedFolder', selectedFolder.value)
}

watch(isModalOpen, (open) => {
  if (!open) {
    setTimeout(() => undefined, MODAL_CLOSE_ANIMATE_DELAY)
  }
})
</script>

<template>
  <Dialog v-model:open="open">
    <DialogTrigger as-child>
      <Button variant="outline">
        Открыть
      </Button>
    </DialogTrigger>

    <DialogContent>
      <DialogHeader v-if="title">
        <DialogTitle>{{ title }}</DialogTitle>
      </DialogHeader>

      <div v-if="structure.length" class="grid gap-2">
        <TreeRoot
          v-slot="{ flattenItems }"
          class="list-none select-none w-56 bg-white text-blackA11 rounded-lg p-2 text-sm font-medium"
          :items="structure" :get-key="(item) => item.name"
        >
          <TreeItem
            v-for="item in flattenItems" v-slot="{ isExpanded }" :key="item._id"
            :style="{ 'padding-left': `${item.level + 0.5}rem` }" v-bind="item.bind"
            class="flex items-center py-1 px-2 my-0.5 rounded outline-none focus:ring-grass8 focus:ring-2 data-[selected]:bg-slate-50"
            @select="onFolderSelect(item.value)"
          >
            <template v-if="item.hasChildren">
              <Icon v-if="!isExpanded" name="material-symbols:arrow-forward-ios-rounded" class="h-4 w-4" />
              <Icon v-else name="material-symbols:arrow-forward-ios-rounded" class="h-4 w-4 rotate-90" />
            </template>

            <div class="pl-2">
              {{ item.value.name }}
            </div>
          </TreeItem>
        </TreeRoot>
      </div>

      <DialogFooter>
        <DialogClose as-child>
          <Button type="button" variant="outline" @click="onClickOkButton">
            Ок
          </Button>
        </DialogClose>

        <DialogClose as-child>
          <Button type="button">
            Закрыть
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
