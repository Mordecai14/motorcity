<template>
  <div
    class="cards flex lg:flex-wrap justify-start gap-12 lg:gap-0 2xl:gap-12 lg:mt-[60px] mt-[47px] mb-[48px] lg:mb-auto"
  >
    <div class="card">
      <p class="w-fit px-2 py-1 bg-[#6207BD] rounded-[11.786px] text-[18px]">
        Ves siempre lo mejor
      </p>
      <p class="mt-5">
        No navegas entre miles de opciones: ves solo lo mejor, más rápido y sin
        complicaciones.
      </p>
    </div>
    <div class="card">
      <p class="w-fit px-2 py-1 bg-[#6207BD] rounded-[11.786px] text-[18px]">
        Te acerca a tu auto ideal
      </p>
      <p class="mt-5">
        Entiende que tu tiempo vale, y por eso te acerca a tu auto ideal en
        minutos, no en horas.
      </p>
    </div>
    <div class="card">
      <p class="w-fit px-2 py-1 bg-[#6207BD] rounded-[11.786px] text-[18px]">
        Filtro de calidad
      </p>
      <p class="mt-5">
        Cada auto que ves ya pasó un filtro de calidad, precio y oportunidad.
        Aquí todo está listo para ti.
      </p>
    </div>
    <div class="card">
      <p class="w-fit px-2 py-1 bg-[#6207BD] rounded-[11.786px] text-[18px]">
        Entras, ves y eligesr
      </p>
      <p class="mt-5">
        Te ahorra búsquedas eternas: entras, ves, eliges y arrancas.
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  padding: 77px 10px 0 10px;
  width: 330px;
  height: 307px;
  flex-shrink: 0;
  border-radius: 36.264px;
  border: 0.907px solid rgba(255, 255, 255, 0.29);
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(5.983516693115234px);
}

@media screen and (min-width: 1024px) {
  .cards {
    justify-items: start;
    justify-content: center;
    gap: 55px;
  }
  .cad {
    width: 290px;
    height: 267px;
  }
}
@media screen and (min-width: 1700px) {
  .cards {
    gap: 50px;
  }
}
@media screen and (min-width: 1440px) {
  .cards {
    justify-content: start;
  }
}
</style>
