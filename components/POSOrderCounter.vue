<template>
  <UiCard variant="light"
    class="flex flex-wrap border-0 bg-white/20 p-4 border-l-[10px] border-red-100 transition-all duration-300 ease-in-out"
    :class="[isOrderActive ? 'bg-red-100' : '']">
    <div class="w-full mb-2">
      <span class="text-xs" :class="[isOrderActive ? 'text-black' : 'text-white/70']">Orders -> Kitchen</span>
    </div>
    <div class="w-full mb-6">
      <p class="text-xl font-semibold" :class="[isOrderActive ? 'text-black' : 'text-white']">{{ title }}</p>
      <span class="font-semibold" :class="[isOrderActive ? 'text-black' : 'text-white/70']">{{ price }}</span>
    </div>
    <div class="w-full flex items-center justify-end gap-5">
      <button type="button" class="w-10 h-10 flex items-center justify-center border rounded-lg"
        :class="[isOrderActive ? 'text-black border-black' : 'border-white/30 text-white/30']" @click="decreaseOrder">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
        </svg>
      </button>
      <p class="text-lg" :class="[isOrderActive ? 'text-black' : 'text-white']">{{ orderCounter }}</p>
      <button type="button" class="w-10 h-10 flex items-center justify-center border rounded-lg"
        :class="[isOrderActive ? 'text-black border-black' : 'border-white/30 text-white']" @click="increaseOrder">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
    </div>
  </UiCard>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

withDefaults(defineProps<{ title?: string; price?: string }>(), {});

const orderCounter = ref<number>(0)
const isOrderActive = ref<boolean>(false)

const increaseOrder = () => orderCounter.value = orderCounter.value + 1
const decreaseOrder = () => {
  if (orderCounter.value > 0) {
    orderCounter.value = orderCounter.value - 1
  }
}

watch(orderCounter, (newVal: number) => {
  if (newVal > 0) {
    isOrderActive.value = true
  } else isOrderActive.value = false
})

</script>
