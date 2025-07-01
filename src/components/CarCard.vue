<template>
  <article
    class="w-[460px] 2xl:w-[460px] lg:w-[290px] bg-white rounded-xl shadow border border-gray-200 p-6 flex flex-col gap-5 text-black"
  >
    <div class="flex gap-4 flex-col items-center">
      <!-- Pendiente: Poner img por fetch -->
      <img
        src="../assets/images/results/swift.png"
        alt="auto"
        class="w-40 h-24 object-contain"
      />

      <div class="flex-1">
        <h3 class="font-semibold text-[20px] leading-snug mb-2 text-left">
          {{ title }}
        </h3>

        <div class="flex text-sm lg:justify-start justify-between">
          <div class="flex flex-col mr-6">
            <span class="text-[#565656] text-left font-semibold">Modelo</span>
            <span class="font-bold text-left">{{ year }}</span>
          </div>
          <div class="flex flex-col">
            <span class="text-[#565656] text-left font-semibold"
              >Beneficios</span
            >
            <span class="font-bold text-left">{{ benefit }}</span>
          </div>
        </div>

        <ul class="flex gap-4 text-xs font-semibold mt-3">
          <li class="flex items-center gap-2">
            <img src="../assets/images/results/engine.svg" class="w-5" />
            {{ engine }}
          </li>
          <li class="flex items-center gap-1">
            <img src="../assets/images/results/doors.svg" class="w-5" />
            Puertas: {{ doors }}
          </li>
        </ul>
      </div>
    </div>

    <hr />

    <ul class="flex flex-wrap gap-4 text-sm lg:justify-center">
      <li v-for="(p, i) in perks" :key="i" class="flex items-center gap-1">
        <img src="../assets/images/results/check_purple.svg" class="w-3 h-3" />
        <span>{{ p }}</span>
      </li>
    </ul>

    <div
      class="flex flex-col lg:flex-row items-center gap-4 lg:flex-col items-center"
    >
      <span
        class="flex items-center gap-1 bg-[#FFD4001A] text-[13px] font-semibold font-medium rounded-full px-3 py-1"
      >
        <img src="../assets/images/results/verified.svg" class="w-3" />
        {{ tag }}
      </span>

      <button
        class="lg:ml-auto lg:ml-0 bg-[#6207BD] hover:bg-[#5206a0] text-white rounded-full text-sm font-semibold px-6 py-2 flex items-center gap-2"
      >
        ¡Lo quiero!
        <img src="../assets/images/results/arrow_solid.svg" class="w-3" />
      </button>
    </div>

    <div class="flex bg-[#F3F3F3] px-6 py-4 items-center gap-4 rounden-sm">
      <img src="../assets/images/results/info.svg" class="inline-block" />
      <p class="text-[10px] text-left">
        Aplican términos y condiciones, esta promoción es vigente por el mes de
        noviembre de 2024, ver condiciones
        <a class="text-[#6207BD] cursor-pointer">aquí</a>
      </p>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  img: string;
  title: string;
  year: string | number;
  benefit: string;
  engine: string;
  doors: number;
  perks: string[];
  tag: string;
}>();
</script>
