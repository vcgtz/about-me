<template>
<div>
  <main class="dark:bg-gray-800 font-mono bg-white relative overflow-hidden h-screen">
    <Header />
    
    <div class="flex relative z-20 items-center">
      <div class="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
        <div class="flex flex-col">
          <img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" class="rounded-full w-28 mx-auto"/>
          <p class="text-3xl my-6 text-center dark:text-white">Hi, I&#x27;m Vicente 🤘</p>
          
          <h2 class="max-w-3xl text-5xl md:text-6xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2">
            Software Engineer & Gamer
          </h2>
          
          <div class="flex items-center justify-center mt-4">
            <a href="#" class="uppercase py-2 my-2 px-4 md:mt-16 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md line-through">
              CONNECT WITH ME
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  components: { Header },
  name: 'App',
}
</script>
