<template>
  <header class="h-24 sm:h-32 flex items-center z-30 w-full">
    <div class="container mx-auto px-6 flex items-center justify-between">
      <MainLogo />
      
      <div class="flex items-center">
        <nav class="font-sen text-gray-300 dark:text-white uppercase text-lg lg:flex items-center hidden">
          <router-link
            :to="{ name: 'home'}"
            :class="{'text-gray-800': currentRoute === 'home'}"
            class="py-2 px-6 flex hover:text-gray-800">Home</router-link>
          <a href="#" class="py-2 px-6 flex hover:text-gray-300 line-through cursor-not-allowed">Resume</a>
          <a href="#" class="py-2 px-6 flex hover:text-gray-300 line-through cursor-not-allowed">Blog</a>
          <router-link
            :to="{ name: 'contact'}"
            :class="{'text-gray-800': currentRoute === 'contact'}"
            class="py-2 px-6 flex hover:text-gray-800">Contact</router-link>
        </nav>

        <nav v-if="showMobileMenu" class="lg:hidden absolute top-0 right-0 w-auto p-10 bg-white text-lg text-right justify-items-end text-gray-300">
          <button @click="closeMobileMenu()" class="text-2xl">✖</button>
          <router-link
            :to="{ name: 'home'}"
            :class="{'text-gray-800': currentRoute === 'home'}"
            class="py-2 px-6 flex hover:text-gray-800">Home</router-link>
          <a href="#" class="py-2 px-6 flex hover:text-gray-300 line-through cursor-not-allowed">Resume</a>
          <a href="#" class="py-2 px-6 flex hover:text-gray-300 line-through cursor-not-allowed">Blog</a>
          <router-link
            :to="{ name: 'contact'}"
            :class="{'text-gray-800': currentRoute === 'contact'}"
            class="py-2 px-6 flex hover:text-gray-800">Contact</router-link>
        </nav>
        
        <button @click="openMobileMenu()" class="lg:hidden flex flex-col ml-4">
          <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
          <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
          <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import MainLogo from './MainLogo.vue';

export default {
  components: { MainLogo },
  name: 'Header',
  data: () => ({
    showMobileMenu: false,
  }),
  computed: {
    currentRoute() {
      return this.$route.name;
    }
  },
  methods: {
    closeMobileMenu () {
      this.showMobileMenu = false;
    },

    openMobileMenu () {
      this.showMobileMenu = true;
    }
  },
}
</script>

<style>

</style>
