<template>
<div>
  <main class="dark:bg-gray-800 font-mono bg-white relative overflow-hidden h-screen">
    <Header />
    
    <div class="flex relative z-20 items-center">
      <div class="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
        <div class="flex flex-col">
          <img src="@/assets/profile.png" class="rounded-full w-28 mx-auto"/>
          <p class="text-3xl my-6 text-center dark:text-white">Hola, soy Vicente Gutiérrez 👾</p>

          <Writer
            :array="descriptions"
            :typeSpeed="typeSpeed"
            :eraseSpeed="eraseSpeed"
            class="max-w-3xl text-4xl md:text-4xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2 mb-8" />

          <div class="grid justify-items-start w-10/12 self-center">
            <p class="my-2">Soy desarrollador de software desde hace aproximadamente {{ yearsAsDev }} años. Llevo mi carrera como ingeniero de software enfocado en el <span class="underline">desarrollo backend</span>.</p>
            <p class="my-2">Con el paso de los años he trabajado con diferentes tecnologías, pero actualmente mi principal stack tecnológico es: <span class="italic">JavaScript, NodeJS, PHP, Laravel, MySQL, MongoDB & VueJS.</span></p>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>
</template>

<script>
import Header from '@/components/Header.vue';
import Writer from '@/components/Writer.vue';

export default {
  components: { Header, Writer },
  name: 'Home',
  data: () => ({
    descriptions: ['Software Engineer', 'Backend Developer', 'Gamer', 'Geek'],
    typeSpeed: 150,
    eraseSpeed: 50,
    programmerSince: 2014
  }),
  computed: {
    yearsAsDev() {
      return new Date().getFullYear() - this.programmerSince;
    }
  }
}
</script>
