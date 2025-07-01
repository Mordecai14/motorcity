<template>
  <FirstSection />
  <SecondSection />
  <ThirdSection />
  <FourthView />
  <footer class="bg-[#450585] text-white text-left!">
    <section class="wrapper mb-10">
      <div
        class="flex flex-col lg:flex-row gap-8 items-start justify-between xl:px-15 px-6 lg:px-10 pt-15 lg:pt-30 pb-20"
      >
        <div class="flex flex-col pt-5">
          <img
            src="../assets/images/logo.svg"
            alt="motorcity"
            class="w-[205px] pb-3"
          />
          <p class="text-[25px] mt-4 w-2/3 hidden lg:block">
            Business Agency Website
          </p>
          <p>Motorcity, México</p>
        </div>
        <div class="flex flex-col lg:flex-row mt-5 lg:mt-0 gap-0">
          <div class="flex flex-col pr-6 gap-5">
            <p class="text-[23px] font-medium pt-5 lg:pt-0">Contáctanos</p>
            <a href="mailto:hola@motorcity.mx" class="underline text-[19px]"
              >Hola@motorcity.mx</a
            >
            <p class="text-[19px] w-[80%] leading-[26px]">
              Atención al Cliente<br />Lunes a Viernes - 8AM a 6PM
            </p>
          </div>
          <div class="flex flex-col gap-5">
            <p class="text-[23px] font-medium mt-15 lg:mt-0">Políticas</p>
            <p class="hover:underline text-[19px] cursor-pointer pt-5 lg:pt-0">
              Aviso de Privacidad
            </p>
            <p class="hover:underline text-[19px] cursor-pointer w-[80%]">
              Términos y condiciones de servicio
            </p>
          </div>
        </div>
        <div class="flex flex-col">
          <p class="text-[23px] font-medium pt-5 lg:pt-0">Nuestra ubicación</p>
          <p class="pt-5 lg:pt-0">Address Line Lorem Ipsum Dolore Sit Amet</p>
        </div>
      </div>
      <div
        class="flex flex-col lg:flex-row justify-between items-center px-6 lg:px-15 py-4 pb-10"
      >
        <div class="flex gap-15 lg:gap-30 flex flex-col lg:flex-row">
          <span class="lg:w-[33%] w-[70%]"
            >Somos una guía confiable para conseguir las mejores opciones en
            coches</span
          >
          <img
            src="../assets/images/social_media.svg"
            alt="social"
            class="w-[210px] self-cente"
          />
        </div>
        <span class="xl:mr-[100px] lg:mr-[60px] mt-10 lg:mt-0 pb-10 lg:pb-0"
          >© By Fast Motorcity 2025</span
        >
      </div>
    </section>
  </footer>
</template>

<script setup>
import { RouterLink, RouterView, useRoute, useRouter } from "vue-router";
import FirstSection from "../components/FirstSection.vue";
import SecondSection from "../components/SecondSection.vue";
import ThirdSection from "../components/ThirdSection.vue";
import FourthView from "@/components/FourthView.vue";

const router = useRouter();
const route = useRoute();

const logoAction = () => {
  router.push({ name: "home" });
};
</script>

<style scoped></style>
