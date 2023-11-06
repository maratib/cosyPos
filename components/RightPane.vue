<template>
  <div class="space-y-3 mb-6">
    <template v-for="item in swipeItems" :key="item.id">
      <div class="bg-white/20 px-4 py-6 rounded-lg flex gap-2 w-full">
        <div class="bg-white w-7 h-6 rounded-full flex justify-center items-center text-black">{{ item.id }}</div>
        <div class="flex justify-between w-full ">
          <span>{{ item.title }} <span class="text-white/40 ml-1"> {{ item.speed }}</span></span>
          <span>${{ item.price }}</span>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import type { SwipeItems } from '~/lib/types';



const swipeItems = ref<SwipeItems[]>([
  {
    id: 1,
    title: 'Roast Chicken',
    speed: 'x2',
    price: '25.50'
  },
  {
    id: 2,
    title: 'Red Caviar',
    speed: 'x3',
    price: '36.90'
  },
  {
    id: 3,
    title: 'German Sausage',
    speed: 'x1',
    price: '5.60'
  },
  {
    id: 4,
    title: 'Irish Cream Coffee',
    speed: 'x1',
    price: '4.20'
  }
])


</script>



