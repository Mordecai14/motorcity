<script setup>
import PromoCard from "./PromoCard.vue";
import { RouterLink, RouterView, useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const logoAction = () => {
  router.push({ name: "home" });
};
</script>

<template>
  <div class="relative md:min-h-screen text-white overflow-hidden">
    <div class="absolute inset-0 z-0 bg-cover bg-center banner">
      <div class="absolute inset-0"></div>
    </div>
    <header
      class="header relative z-10 flex lg:justify-start justify-center items-center lg:px-10 lg:py-6 mx-auto max-w-7xl lg:mt-6"
    >
      <img
        src="../assets/images/logo.svg"
        alt="logo"
        @click="logoAction"
        class="md:w-auto w-[55vw]"
      />
      <nav
        class="lg:flex hidden items.center lg:gap-14 gap-10 text-sm text-white lg:pl-20 pl-10"
      >
        <a href="#" class="hover:text-[#B871FF] transition">Inicio</a>
        <a href="#" class="hover:text-[#B871FF] transition">¿Cómo funciona?</a>
        <a href="#" class="hover:text-[#B871FF] transition">Beneficios</a>
        <a href="#" class="hover:text-[#B871FF] transition">Contáctenos</a>
        <a href="#" class="hover:text-[#B871FF] transition">Blog</a>
      </nav>
    </header>
    <section
      class="relative z-10 flex flex-col items-center justify-center text-center mt-20 px-6"
    >
      <h2 class="text-[30px] md:text-6xl text-lg mb-6">
        Bonos exclusivos, tasas<br />
        preferenciales y beneficios únicos
      </h2>
      <p class="md:text-xl text-[16px] text-[#fffc] max-w-2xl mb-12">
        Lorem ipsum dolor sit amet consectetur. Nisl ipsum neque duis odio.
        Mauris ac etiam quis id nibh volutpat.
      </p>

      <div
        class="flex flex-wrap justify-center gap-12 md:gap-20 md:mt-[60px] mt-[47px] mb-[48px] md:mb-auto"
      >
        <PromoCard
          text="Tasas exclusivas desde 1.5% EM"
          icon-src="/icons/loan.svg"
          :rotation-angle="275"
        />
        <PromoCard
          text="Bonos de matrícula con un 40% Off"
          icon-src="../assets/images/icons/home_ico.svg"
          :rotation-angle="275"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.banner {
  background-image: url("../assets/images/banner.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.header {
  height: 105px;
  border: 1px solid rgba(255, 255, 255, 0.29);
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(6.599999904632568px);
  @media screen and (min-width: 1024px) {
    height: 105px;
    border-radius: 66px;
    border: 1px solid rgba(255, 255, 255, 0.29);
  }
}
</style>
