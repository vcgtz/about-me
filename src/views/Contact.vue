<template>
  <div>
    <main class="dark:bg-gray-800 font-mono bg-white relative overflow-hidden h-screen">
      <Header />
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: { Header },
  name: 'Contact',
}
</script>
