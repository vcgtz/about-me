<template>
  <header class="h-24 sm:h-32 flex items-center z-30 w-full">
    <div class="container mx-auto px-6 flex items-center justify-between">
      <MainLogo />
      
      <div class="flex items-center">
        <nav class="font-sen text-gray-300 dark:text-white uppercase text-lg lg:flex items-center hidden">
          <a href="#" class="py-2 px-6 flex hover:text-gray-300 line-through cursor-not-allowed">Resume</a>
          <a href="#" class="py-2 px-6 flex hover:text-gray-300 line-through cursor-not-allowed">Blog</a>
          <a href="#" class="py-2 px-6 flex hover:text-gray-300 line-through cursor-not-allowed">Contact</a>
        </nav>

        <nav v-if="showMobileMenu" class="lg:hidden absolute top-0 right-0 w-auto p-10 bg-white text-lg text-right justify-items-end text-gray-300">
          <button @click="closeMobileMenu()" class="text-2xl">✖</button>
          <a href="#" class="py-2 px-6 flex hover:text-gray-300 line-through cursor-not-allowed">Resume</a>
          <a href="#" class="py-2 px-6 flex hover:text-gray-300 line-through cursor-not-allowed">Blog</a>
          <a href="#" class="py-2 px-6 flex hover:text-gray-300 line-through cursor-not-allowed">Contact</a>
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
  methods: {
    closeMobileMenu () {
      this.showMobileMenu = false;
    },

    openMobileMenu () {
      this.showMobileMenu = true;
    }
  }
}
</script>

<style>

</style>
