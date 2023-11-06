<template>
  <div class="px-4 pt-6 relative">
    <div class="flex gap-4 items-center">
      <div class="w-14 h-14 rounded-lg flex justify-center items-center "
        :class="inProgress ? 'bg-white/20  text-white' : 'bg-indigo-100'">
        <span class="text-2xl">{{ icon }}</span>
      </div>
      <div>
        <span class="text-white">{{ name }}</span>
        <div class="absolute -mt-7 right-0">
          <span v-if="inProgress" class="px-2 py-1 rounded-xl text-sm bg-green-400">in process</span>
        </div>
        <div class="flex items-center gap-2 mt-1">
          <span class="text-white">{{ items }}</span>

          <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-5 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
          <span class="text-white text-white/70">{{ type }}</span>
        </div>
      </div>
    </div>
    <!-- <span class="text-white">{{ inProgress }}</span> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { OrderInProcess } from '~/lib/types';
const { id, icon, name, items, type, inProgress } = defineProps<OrderInProcess>();
</script>
