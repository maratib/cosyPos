<template>
  <aside class="fixed w-80 bg-black inset-y-0 h-screen p-6 overflow-hidden z-50 xl:block hidden">
    <div class="flex flex-wrap">
      <div class="w-full mb-10 px-4 pt-3">
        <span class="text-white text-2xl font-bold">CosyPOS</span>
      </div>
      <div class="flex flex-wrap w-full gap-4">
        <template v-for="link in links" :key="`${link.linkTitle}`">
          <div class="w-full">
            <NuxtLink :to="link.linkPath" @click="onClick(link)">
              <span class="text-lg w-full block py-3 px-4 rounded-lg transition-all ease-in-out duration-300"
                :class="[link.isActive ? 'text-white bg-white/30' : 'text-white/70 hover:bg-white/30 hover:text-white']">{{
                  link.linkTitle
                }}</span>
            </NuxtLink>
          </div>
        </template>
      </div>
    </div>
    <div class="w-full self-end h-2/3 flex items-end px-4">
      <div class="flex flex-wrap">
        <div class="flex flex-wrap w-full gap-4 mb-20">
          <template v-for="person in people" :key="person">
            <div class="w-full">
              <UiBadge
                class="border border-white/60 text-white py-2 pl-2 pr-4 transition-all duration-300 ease-in-out hover:bg-white/30 cursor-pointer">
                <div class="flex items-center gap-2">
                  <div class="w-10 h-10 rounded-full flex items-center justify-center text-xl text-black"
                    :class="[person.charAt(0) === 'L' ? 'bg-purple-100' : person.charAt(0) === 'C' ? 'bg-green-100' : 'bg-red-100']">
                    {{ person.charAt(0) }}
                  </div>
                  <span class="text-white text-lg font-normal">{{ person }}</span>
                </div>
              </UiBadge>
            </div>
          </template>
        </div>
        <div class="w-full">
          <p class="text-white">&copy; 2022 CosyPOS App</p>
        </div>
      </div>
    </div>
  </aside>
</template>

``
<script setup lang="ts">
import { ref } from 'vue';

type Link = {
  linkTitle: string;
  linkPath: string;
  isActive: boolean

};

const links = ref<Link[]>([
  {
    linkTitle: 'Reservation',
    linkPath: '/reservation',
    isActive: false
  },
  {
    linkTitle: 'Table Services',
    linkPath: '/services',
    isActive: false
  },
  {
    linkTitle: 'Menu',
    linkPath: '/',
    isActive: true
  },
  {
    linkTitle: 'Delivery',
    linkPath: '/delivery',
    isActive: false
  },
  {
    linkTitle: 'Accounting',
    linkPath: '/accounting',
    isActive: false
  },
])
const people = ref<string[]>(["Leslie K.", "Cameron W.", "Jacob J."])

const onClick = (link: Link) => {
  links.value.forEach(element => element.isActive = false)
  link.isActive = true;

}

</script>
