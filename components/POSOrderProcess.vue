<template>
  <div class="px-4 pt-6">
    <div class="flex gap-4 items-center">
      <div class="w-14 h-14 rounded-lg flex justify-center items-center" :class="cardBg">
        <span class="text-2xl">{{ icon }}</span>
      </div>
      <di>
        <span class="text-white">{{ name }}</span>
        <div class="flex items-center gap-2">
          <span class="text-white">{{ items }}</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-5 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
          <span class="text-white text-white/70">{{ type }}</span>
        </div>
      </di>
    </div>
    <!-- <span class="text-white">{{ inProgress }}</span> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { OrderInProcess } from '~/lib/types';
const { id, icon, name, items, type, inProgress, cardBg } = defineProps<OrderInProcess>();
</script>
