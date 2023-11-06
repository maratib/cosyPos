<template>
  <div class="w-full h-screen">
    <div class="flex xl:flex-nowrap flex-wrap gap-y-10">
      <div class="xl:w-3/4 w-full xl:pr-5 flex flex-wrap items-start">
        <div class="w-full grid lg:grid-cols-4 md:grid-cols-3 gap-4">
          <template v-for="item in menuItems" :key="item.id">
            <div>
              <POSCard :title="item.title" :desc="item.desc" :cardBg="item.cardBg" />
            </div>
          </template>
        </div>
        <div class="w-full h-px bg-white/30 my-8"></div>
        <div class="w-full grid lg:grid-cols-4 md:grid-cols-3 gap-4">
          <template v-for="item in foodItems" :key="item.id">
            <div>
              <POSOrderCounter :title="item.title" :price="item.price" />
            </div>
          </template>
        </div>
        <div class="w-full h-px bg-white/30 mt-8"></div>
        <div class="w-full grid lg:grid-cols-3 md:grid-cols-2 gap-4 divide-x divide-white/30 space-2">
          <template v-for="order in orders" :key="order.id">
            <div>
              <POSOrderProcess :id="order.id" :icon="order.icon" :name="order.name" :items="order.items"
                :type="order.type" :inProgress="order.inProgress" />
            </div>
          </template>
        </div>
      </div>
      <div class="xl:w-1/4 w-full h-full">
        <RightPane />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { OrderInProcess } from '~/lib/types';

definePageMeta({
  layout: 'pos-layout'
})
const orders = ref<OrderInProcess[]>([
  {
    id: 1,
    icon: 'T4',
    name: 'Leslie K.',
    items: '6 items',
    type: 'Kitchen',
    inProgress: false,

  },
  {
    id: 2,
    icon: 'T2',
    name: 'Jacob J.',
    items: '4 items',
    type: 'Kitchen',
    inProgress: true,

  },
  {
    id: 3,
    icon: 'T4',
    name: 'Cameron W.',
    items: '4 items',
    type: 'Kitchen',
    inProgress: true,
  },
])
const menuItems = ref<{ id?: string | number; title?: string; desc?: string, cardBg?: string }[]>([
  {
    id: 1,
    title: 'Breakfast',
    desc: '13 items',
    cardBg: 'bg-green-100',
  },
  {
    id: 2,
    title: 'Soups',
    desc: '8 items',
    cardBg: 'bg-purple-100',
  },
  {
    id: 3,
    title: 'Pasta',
    desc: '10 items',
    cardBg: 'bg-cyan-100',
  },
  {
    id: 4,
    title: 'Sushi',
    desc: '15 items',
    cardBg: 'bg-indigo-100',
  },
  {
    id: 5,
    title: 'Main course',
    desc: '7 items',
    cardBg: 'bg-red-100',
  },
  {
    id: 6,
    title: 'Desserts',
    desc: '9 items',
    cardBg: 'bg-yellow-100',
  },
  {
    id: 7,
    title: 'Drinks',
    desc: '11 items',
    cardBg: 'bg-orange-100',
  },
  {
    id: 8,
    title: 'Alcohol',
    desc: '12 items',
    cardBg: 'bg-teal-100',
  },
])

const foodItems = ref<{ id?: string | number; title?: string; price?: string }[]>([
  {
    id: 1,
    title: 'Fish and chips',
    price: '$7.50'
  },
  {
    id: 2,
    title: 'Roast chicken',
    price: '$12.75'
  },
  {
    id: 3,
    title: 'Fillet steak',
    price: '$11.60'
  },
  {
    id: 4,
    title: 'Beefsteak',
    price: '$10.20'
  },
  {
    id: 5,
    title: 'Roast beef',
    price: '$10.50'
  },
  {
    id: 6,
    title: 'Buffalo wings',
    price: '$8.85'
  },
  {
    id: 7,
    title: 'Lobster',
    price: '$13.40'
  },
  {
    id: 8,
    title: 'red caviar',
    price: '$12.30'
  },
])

</script>
