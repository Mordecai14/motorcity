<template>
  <section class="relative overflow-hidden text-white">
    <div aria-hidden="true" class="absolute inset-0 background_styled"></div>
    <div
      class="layout wrapper relative z-10 max-w-screen-xl px-6 lg:px-[50px] xl:px-40 py-16 gap-8"
    >
      <div
        class="card1 flex flex-col lg:items-start items-center text-center lg:text-left mt-12 lg:mt-0"
      >
        <p class="md:text-xl text-2xl mb-8">Una vitrina express de autos</p>
        <h2 class="text-4xl 2xl:text-6xl leading-[1.25] mb-6 text-left!">
          ¿Por qué Motorcity <br />
          es diferente a los <br />
          demás?
        </h2>
      </div>

      <div class="card2 lg:mt-20">
        <CarouselHome />
      </div>
      <div
        class="card3 flex justify-around lg:justify-end lg:gap-18 text-left lg:mt-0"
      >
        <div>
          <p class="text-4xl font-medium">50+</p>
          <p class="text-xl">
            MODELOS DE <br />
            VEHÍCULOS
          </p>
        </div>
        <div>
          <p class="text-4xl font-medium">325+</p>
          <p class="text-xl">
            PROMOCIONES <br />
            Y DESCUENTOS
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import CarouselHome from "./CarouselHome.vue";
</script>

<style scoped>
.background_styled {
  background:
    linear-gradient(0deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.65) 100%),
    url("../../assets/images/section_3.png");
  background-size: cover;
  background-position: center;
}
.layout {
  display: flex;
  flex-direction: column;
}
@media (min-width: 1024px) {
  .layout {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "one three"
      "two two";
    align-items: center;
  }
  .card1 {
    grid-area: one;
  }
  .card3 {
    grid-area: three;
  }
  .card2 {
    grid-area: two;
  }
}
</style>
