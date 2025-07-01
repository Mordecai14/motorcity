<template>
  <header class="bg-white border-b border-gray-200 shadow-sm text-black">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center h-16">
        <a href="/" class="justify-self-start">
          <img src="../assets/images/logo_black.svg" alt="Motorcity" class="h-6 w-auto" />
        </a>
        <nav class="hidden md:flex justify-center gap-10 font-medium">
          <a href="#" class="text-gray-900 hover:text-primary-600">Inicio</a>
          <a href="#" class="hover:text-primary-600">¿Cómo funciona?</a>
          <a href="#" class="hover:text-primary-600">Beneficios</a>
          <a href="#" class="hover:text-primary-600">Contáctenos</a>
          <a href="#" class="hover:text-primary-600">Blog</a>
        </nav>
        <div class="justify-self-end flex items-center">
          <button
            class="inline-flex items-center justify-center md:hidden p-2 rounded-md"
            @click="open = !open"
            aria-label="Abrir menú"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <nav
      v-show="open"
      class="md:hidden px-4 pb-4 font-medium space-y-1"
    >
      <a href="#" class="block py-2">Inicio</a>
      <a href="#" class="block py-2">¿Cómo funciona?</a>
      <a href="#" class="block py-2">Beneficios</a>
      <a href="#" class="block py-2">Contáctenos</a>
      <a href="#" class="block py-2">Blog</a>
    </nav>
  </header>

  <main
    class="max-w-[1920px] mx-auto px-6 lg:px12 xl:px-6 py-10 text-black flex flex-col xl:items-stretch"
  >
    <section class="promo-container flex gap-6 flex-col xl:flex-row">
      <div
        class="relative hero-card xl:w-[360px] lg:w-[480px] lg:h-[500px] rounded-xl overflow-hidden flex-shrink-0 bg-gray-200"
      >
        <img
          src="../assets/images/results/hero.png"
          alt="promo"
          class="absolute inset-0 w-full h-full object-cover"
        />

        <div class="absolute inset-0 bg-black/40"></div>

        <div
          class="relative z-10 h-full flex flex-col justify-end p-5 pb-15 text-white"
        >
          <div
            class="title text-xs bg-[#FFD400] text-black px-5 py-1 self-start rounded-full"
          >
            Finaliza en 10:25min
          </div>

          <h2 class="title text-[35px] leading-tight text-left">
            Solo por hoy: tasa del 1.5%EM. en tu primera compra.
          </h2>

          <p class="text-[16px] title text-left leading-[190%] pr-25">
            Esta promoción es válida dentro de los próximos 5minutos
          </p>

          <button
            class="absolute top-4 right-4 w-7 h-7 rounded-full grid place-items-center"
          >
            <img
              src="../assets/images/PurpleArrow.svg"
              class="w-full rotate-90"
            />
          </button>
        </div>
      </div>
      <div class="flex gap-6 flex-col lg:flex-row items-center">
        <CarPromo
          v-for="n in 3"
          :key="'top' + n"
          img-src=""
          title="Suzuki Swift Sedán"
          :tags="topTags"
          label="Promoción"
        />
      </div>
    </section>

    <section class="mt-16 lg:pl-8 xl:p-0 card-container">
      <h2 class="title-bot text-[40px] text-black mb-8 text-left">
        Bono de matricula del 40 % off<br />solo por tiempo limitado
      </h2>
      <div class="flex flex-wrap gap-8 lg:gap-2 cards">
        <CarCard
          v-for="n in 6"
          :key="'top' + n"
          img=""
          title="Suzuki Swift Sedán"
          year="2024"
          benefit="Seguro gratis"
          engine="2.0 L Turbo"
          :doors="4"
          :perks="['Bono de matricula', 'SOAT Gratis', 'Seguro Gratis']"
          tag="Bono de matricula y SOAT*"
        />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import CarCard from "../components/CarCard.vue";
import CarPromo from "../components/CarPromo.vue";
import { ref } from "vue";

const open = ref(false);
const topTags = ["Bono de matricula y SOAT*"];

</script>

<style scoped>
main {
  font-family: "Inter";
}
.title {
  font-family: "Manrope";
}

@media screen and (min-width: 1024px) {
  .promo-container {
    flex-direction: column;
    align-items: center;
  }
}
@media screen and (min-width: 1280px) {
  .promo-container {
    flex-direction: row;
    justify-content: center;
  }
}

@media screen and (min-width: 1440px) {
  .card-container {
    padding-left: 80px;

    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
  .title-bot {
    align-self: flex-start;
  }
}
@media screen and (min-width: 1720px) {
  .card-container {
    padding-left: 120px;
  }
  .hero-card {
    width: 420px;
  }
}
@media screen and (min-width: 1920px) {
  .card-container {
    padding-left: 0px;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
  .cards {
    justify-content: center;
  }
  .title-bot {
    align-self: flex-start;
    padding-left: 200px;
  }
  .hero-card {
    width: 480px;
    height: 500px;
    flex-shrink: 0;
  }
}
</style>
