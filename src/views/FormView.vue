<!-- PromoCheckout.vue -->
<script setup>
import { ref } from 'vue'

const benefits = [
  'Bono de matrícula',
  'SOAT Gratis',
  'Bono de matrícula',
  'SOAT Gratis',
  'Bono de matrícula',
  'SOAT Gratis'
]

const form = ref({
  phone: '',
  email: '',
  state: '',
  dealer: '',
  birth: '',
})

const submit = () => {
  console.table(form.value)
  alert('Información enviada')
}

</script>

<template>

  <section
    class="mx-auto max-w-[700px] px-4 py-18 flex flex-col lg:gap-10 text-black"
  >

    <div class="flex flex-col gap-8 lg:items-center">

      <div
        class="flex bg-[#FFFADE4D] text-black flex-col lg:flex-row gap-6 p-6 border border-gray-200 rounded-2xl shadow-sm lg:w-[507px] lg:h-[203px]"
      >
        <img
          src="../assets/images/results/swift.png"
          alt="Car"
          class="w-full max-w-[180px] mx-auto lg:mx-0 lg:w-[180px] object-contain"
        />

        <div class="flex-1">
          <header class="flex justify-between items-start">
            <h2 class="text-[24px] font-semibold text-black">Suzuki Swift Sedán</h2>
            <button
              class="text-red-500 hover:text-red-700"
              aria-label="Eliminar"
            >
              <img src="../assets/images/icons/trash.svg" class="w-5" />
            </button>
          </header>

          <div
            class="mt-4 flex justify-between px-10 lg:px-0 text-left sm:gap-10 text-sm"
          >
            <div>
              <p class="font-semibold text-[#565656]">Modelo</p>
              <p class="font-semibold text-[14px] font-bold text-black">2024</p>
            </div>

            <div>
              <p class="font-semibold text-[#565656]">Beneficios</p>
              <p class="font-semibold text-[14px] font-bold text-black">Seguro Grátis</p>
            </div>
          </div>

          <div
            class="mt-4 flex justify-between px-10 lg:px-0 flex-row sm:gap-10 text-sm"
          >
            <div class="flex items-center gap-2">
              <img src="../assets/images/results/engine.svg" class="w-7" />
              <p class="text-[12px] font-semibold">2.0 L Turbo</p>
            </div>
            <div class="flex items-center gap-2">
              <img src="../assets/images/results/doors.svg" class="w-7" />

              <p class="text-[12px] font-semibold">Puertas: 4</p>
            </div>
          </div>
        </div>
      </div>


      <div class="space-y-6">
        <!-- Dealer -->
        <div class="flex items-center gap-4 pl-4">
          <img
            src="../assets/images/dealer.svg"
            alt="Dealer"
            class="h-12 w-12 rounded-lg object-contain"
          />
          <div>
            <h3 class="font-semibold text-[18px]">Seat México</h3>
            <p class="font-light text-[14px]">Ciudad de México</p>
          </div>
        </div>


        <h4 class="font-semibold text-[16px] text-left pl-4">Beneficios</h4>
        <ul
          class="flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm text-gray-800 leading-relaxed"
        >
          <li
            v-for="(b, i) in benefits"
            :key="i"
            class="flex items-center gap-2 min-w-[180px] text-[13.5px]"
          >
          <img src="../assets/images/results/check_purple.svg" class="w-6" />
            {{ b }}
          </li>
        </ul>
      </div>
    </div>


    <form
      @submit.prevent="submit"
      class="flex-1 mt-10 flex flex-col gap-6"
    >
      <h3 class="text-[18px] font-semibold text-left">Adquiere tus bonificaciones</h3>


      <div class="flex flex-col gap-6 text-[14px] font-semibold text-left">

        <div class="flex flex-col lg:flex-row gap-6">
          <div class="flex-1">
            <label class="block mb-1">Teléfono</label>
            <input
              v-model="form.phone"
              type="tel"
              required
              class="w-full rounded-full bg-gray-200/60 py-3 px-6 outline-none focus:ring-2 focus:ring-primary-600"
            />
          </div>
          <div class="flex-1">
            <label class="block mb-1">Correo electrónico</label>
            <input
              v-model="form.email"
              type="email"
              required
              class="w-full rounded-full bg-gray-200/60 py-3 px-6 outline-none focus:ring-2 focus:ring-primary-600"
            />
          </div>
        </div>


        <div class="flex flex-col lg:flex-row gap-6">
          <div class="flex-1">
            <label class="block mb-1">Estado</label>
            <input
              v-model="form.state"
              type="text"
              class="w-full rounded-full bg-gray-200/60 py-3 px-6 outline-none focus:ring-2 focus:ring-primary-600"
            />
          </div>
          <div class="flex-1">
            <label class="block mb-1">Concesionaria</label>
            <input
              v-model="form.dealer"
              type="text"
              class="w-full rounded-full bg-gray-200/60 py-3 px-6 outline-none focus:ring-2 focus:ring-primary-600"
            />
          </div>
        </div>


        <div class="flex flex-col lg:flex-row gap-6">
          <div class="flex-1">
            <label class="block mb-1">Fecha de nacimiento</label>
            <input
              v-model="form.birth"
              type="date"
              class="w-full rounded-full bg-gray-200/60 py-3 px-6 outline-none focus:ring-2 focus:ring-primary-600"
            />
          </div>
          <div class="flex-1"></div>
        </div>
      </div>


      <button
        type="submit"
        class="self-start mt-4 inline-flex items-center gap-2 rounded-full bg-[#565656] text-white py-3 px-8 hover:bg-gray-900 focus:ring-2 focus:ring-gray-600"
      >
        Enviar información
        <img
            src="../assets/images/icons/arrow_white.svg"
            class="w-6 lg:w-8 rotate-145"
          />
      </button>
    </form>
  </section>
</template>
