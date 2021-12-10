<template>
  <header class="h-24 sm:h-32 flex items-center z-30 w-full">
    <div class="container mx-auto px-6 flex items-center justify-between">
      <MainLogo />
      
      <div class="flex items-center">
        <nav class="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
          <a href="#" class="py-2 px-6 flex hover:text-black line-through">Resume</a>
          <a href="#" class="py-2 px-6 flex hover:text-black line-through">Blog</a>
          <a href="#" class="py-2 px-6 flex hover:text-black line-through">Contact</a>
        </nav>

        <nav class="lg:hidden absolute top-0 right-0 w-auto p-8 bg-white text-right justify-items-end">
          <a href="#" class="text-2xl">✖</a>
          <a href="#" class="py-2 px-6 flex hover:text-black line-through">Resume</a>
          <a href="#" class="py-2 px-6 flex hover:text-black line-through">Blog</a>
          <a href="#" class="py-2 px-6 flex hover:text-black line-through">Contact</a>
        </nav>
        
        <button class="lg:hidden flex flex-col ml-4">
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
}
</script>

<style>

</style>
