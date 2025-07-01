<template>
  <article
    class="card xl:w-[265px] w-[302px] bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col overflow-hidden"
  >
    <div
      class="flex self-center ml-[37px] items-center justify-center gap-2 w-1/2 text-[13px] font-bold px-3 py-1 rounded-b-lg bg-[#FF4E4E] text-white"
    >
      <img src="../assets/images/results/star.svg" alt="estrella" />
      <span v-if="label">
        {{ label }}
      </span>
    </div>

    <img
      src="../assets/images/results/swift.png"
      alt="auto"
      class="w-full h-[91px] object-contain"
    />

    <div class="p-4 flex flex-col gap-3 text-black">
      <h3 class="font-semibold text-[20px]">{{ title }}</h3>
      <div class="flex w-full justify-between">
        <div class="flex flex-col text-left">
          <span class="text-[#565656] text-[14px] font-semibold">Modelo</span>
          <span class="text-[14px] font-[700]">2014</span>
        </div>
        <div class="flex flex-col text-left">
          <span class="text-[#565656] text-[14px] font-semibold"
            >Beneficios</span
          >
          <span class="text-[14px] font-[700]">Seguro gratis</span>
        </div>
      </div>

      <div class="flex justify-between">
        <div class="flex items-center gap-1">
          <img src="../assets/images/results/engine.svg" class="w-5" />
          <span class="text-[12px] font-semibold">2.0 L Turbo</span>
        </div>
        <div class="flex items-center gap-1">
          <img src="../assets/images/results/doors.svg" class="w-5" />
          <span class="text-[12px] font-semibold">Puertas: 4</span>
        </div>
      </div>

      <div class="flex justify-between">
        <div class="flex items-center gap-1">
          <img src="../assets/images/results/check_purple.svg" />
          <span class="text-[12px]">Bono de matrícula</span>
        </div>
        <div class="flex items-center gap-1">
          <img src="../assets/images/results/check_purple.svg" />
          <span class="text-[12px]">SOAT Grátis</span>
        </div>
      </div>

      <ul
        class="text-xs rounded-[13.5px] space-y-1 bg-[#FFD4001A] w-full self-center px-[18px] py-1"
      >
        <li
          v-for="(tag, i) in tags"
          :key="i"
          class="flex items-center justify-center gap-2"
        >
          <img
            src="../assets/images/results/verified.svg"
            alt="verified"
            class="w-4 h-4"
          />
          <span class="text-[13px] font-semibold">{{ tag }}</span>
        </li>
      </ul>

      <button
        class="mt-3 self-center bg-[#6207BD] hover:bg-[#5406a7] text-white text-[16px] font-semibold rounded-full px-15 py-1.5"
      >
        ¡Lo quiero!
        <img
          src="../assets/images/results/arrow_solid.svg"
          class="inline-block w-3 ml-1 w-4"
        />
      </button>

      <div class="flex bg-[#F3F3F3] px-5 py-4 items-center gap-1 rounden-sm">
        <img src="../assets/images/results/info.svg" class="inline-block" />
        <p class="text-[10px] text-left">
          Aplican términos y condiciones, esta promoción es vigente por el mes
          de noviembre de 2024, ver condiciones
          <a class="text-[#6207BD] cursor-pointer">aquí</a>
        </p>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  imgSrc: string;
  title: string;
  tags: string[];
  label: string;
}>();
</script>

<style scoped>
@media screen and (min-width: 1720px) {
  .card {
    width: 310px;
  }
}
@media screen and (min-width: 1920px) {
  .card {
    width: 302.013px;
    height: 500px;
  }
  .hero-card {
    width: 480px;
    height: 500px;
  }
}
</style>
