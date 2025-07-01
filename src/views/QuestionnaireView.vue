<template>
  <main
    class="w-full max-w-[1440px] flex flex-col lg:flex-row items-start lg:items-center h-auto lg:h-screen"
  >
    <section
      class="relative w-full lg:w-1/2 h-[320px] sm:h-[380px] lg:h-[820px] overflow-hidden rounded-b-[32px] lg:rounded-[32px] m-0 lg:m-12"
    >
      <img
        src="../assets/images/steps_bg.png"
        alt="blue-sports-car"
        class="absolute inset-0 w-full h-full object-cover"
      />

      <div
        class="absolute inset-0 bg-gradient-to-b from-black/40 to-black/30"
      ></div>

      <div
        class="relative z-10 h-full flex flex-col justify-between px-6 py-8 lg:p-14"
      >
        <img
          src="../assets/images/logo.svg"
          alt="Motorcity"
          class="hidden lg:block w-60 select-none"
        />
        <div class="mt-5 lg:mt-20">
          <h1
            class="text-white text-4xl sm:text-5xl lg:text-[50px] tracking-tight text-left"
          >
            Los bonos exclusivos te esperan
          </h1>

          <p
            class="lg:pr-0 pr-15 text-left text-white/80 mt-4 sm:mt-6 max-w-none lg:max-w-md text-base lg:text-[16px] leading-[170%] lg:leading-[190%]"
          >
            Lorem ipsum dolor sit amet consectetur. Nisl ipsum ipsum neque duis
            odio.
          </p>
        </div>
        <div
          class="hidden lg:flex justify-center gap-12 mt-[47px] md:gap-20 md:mt-[60px] mb-[48px] md:mb-auto"
        >
          <PromoCard
            text="Tasas exclusivas desde 1.5% EM"
            icon-src="/icons/loan.svg"
            :rotation-angle="275"
          />
          <PromoCard
            text="Bonos de matrícula con un 40% Off"
            icon-src="../../assets/images/home_ico.svg"
            :rotation-angle="275"
          />
        </div>
      </div>
    </section>
    <section class="w-full lg:w-1/2 px-6 pt-10 pb-16 lg:p-24 flex flex-col">
      <button
        class="flex items-center gap-2 text-neutral-600 mb-10 lg:mb-12"
        @click="routerBack"
      >
        <img src="../assets/images/icons/arrow_left.svg" class="w-6 lg:w-8" />
        <span class="font-medium text-lg lg:text-base">Regresar</span>
      </button>
      <h2
        class="text-[30px] pr-15 lg:pr-0 lg:text-[40px] text-black text-left mb-12 lg:mb-16"
      >
        El auto de tus sueños está a un paso de este formulario.
      </h2>
      <form class="flex flex-col gap-8 text-left">
        <div class="flex flex-col gap-2">
          <label class="font-medium text-black text-[17px] lg:text-[18px]"
            >Nombre completo</label
          >
          <input
            type="text"
            placeholder="Escribe tu nombre completo"
            class="text-black h-14 lg:h-15 rounded-full px-6 bg-neutral-200/50 placeholder:text-neutral-500 focus:outline-none"
          />
        </div>
        <div class="flex flex-col gap-2">
          <label class="font-medium text-black text-[17px] lg:text-[18px]"
            >Correo electrónico</label
          >
          <input
            type="email"
            placeholder="Escribe tu correo electrónico"
            class="text-black h-14 lg:h-15 rounded-full px-6 bg-neutral-200/50 placeholder:text-neutral-500 focus:outline-none"
          />
        </div>
        <label
          class="text-black flex items-start gap-3 bg-[#d9d9d966] p-4 rounded-lg"
        >
          <input type="checkbox" class="mt-1 w-4 h-4" />
          <span>Acepto los términos y condiciones del sitio web</span>
        </label>
        <button
          type="button"
          @click="nextStep"
          class="mt-10 lg:mt-8 lg:w-auto self-center self-end h-14 px-8 lg:px-10 rounded-full bg-[#565656] text-white font-medium tracking-wide flex items-center justify-center gap-3"
        >
          DESCUBRIR MI AUTO
          <img
            src="../assets/images/icons/arrow_white.svg"
            class="w-6 lg:w-8 rotate-145"
          />
        </button>
      </form>
    </section>
  </main>
</template>

<script setup lang="ts">
import PromoCard from "../components/home/PromoCard.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const routerBack = () => {
  router.back();
};

const nextStep = () => {
  router.push({ name: "results" });
};
</script>

<style scoped></style>
