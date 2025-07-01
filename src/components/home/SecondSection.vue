<script setup>
import { RouterLink, RouterView, useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const actionCall = () => {
  router.push({ name: "steps" });
};
</script>

<template>
  <section
    class="bg-[#F5F5F5] relative z-10 flex flex-col items-center text-centerpx-6 wrapper"
  >
    <div
      class="flex w-full lg:px-[50px] xl:px-[110px] md:mt-[96px] mt-[22px] lg:justify-between"
    >
      <h2
        class="lg:w-[60%] text-black! xl:text-6xl lg:text-[40px] md:text-5xl text-3xl text-left! px-7 lg:px-0"
      >
        Tu auto te está esperando, consíguelo con bonos exclusivos
      </h2>
      <div class="flex items-end h-auto">
        <div class="client-container px-2 gap-6 text-xs lg:flex hidden">
          <div class="flex px-2 gap-4">
            <div class="w-[33px] h-[33px] bg-[#C4C4C4] rounded-full"></div>
            <div class="w-[33px] h-[33px] bg-[#C4C4C4] rounded-full"></div>
            <div class="w-[33px] h-[33px] bg-[#C4C4C4] rounded-full"></div>
          </div>
          <div class="text-left">
            <p><b> 1000K+ </b></p>
            <p>Our Client Here</p>
          </div>
        </div>
      </div>
    </div>
    <!-- mobile -->
    <div class="lg:hidden md:mt-[91px] mt-[22px] text-black!">
      <img
        src="../../assets/images/home_1.png"
        alt="logo"
        class="lg:w-auto w-[100vw] px-7"
      />
      <div class="w-full px-7 flex items-center justify-between mt-[33px]">
        <p class="text-[20px] text-left! w-42 w-[50%]">
          <b class="text-[40px]!">5.000K+</b> <br />
          Clientes ya han conseguido el auto de sus sueños
        </p>
        <img src="../../assets/images/home_2.png" alt="logo" class="w-[50%]" />
      </div>
      <p class="self-stretch text-left text-[35px] px-7 mt-[33px]">
        Somos socios de las marcas más reconocidas
      </p>
      <p class="self-stretch text-left text-[16px] px-7 mt-[33px]">
        Lorem ipsum dolor sit amet consectetur. Ultrices in diam pellentesque
        gravida quis maecenas. Feugiat duis turpis
      </p>
    </div>
    <!-- Desktop -->
    <div
      class="hidden px-[50px] gap-[80px] xl:px-[110px] lg:flex justify-between items-end mt-[91px] text-black! w-full"
    >
      <div class="grid place-items-start w-[40%]">
        <div class="text-[23px] text-left!">
          <h6 class="text-[59px]!">5.000K+</h6>
          <br />
          <p>
            Clientes ya han <br />
            conseguido el auto de <br />
            sus sueños
          </p>
        </div>
        <p class="self-stretch text-left text-[35px] mt-[33px]">
          Somos socios <br />
          de las marcas más reconocidas
        </p>
        <p class="self-stretch text-left text-[16px] mt-[33px]">
          Lorem ipsum dolor sit amet consectetur. <br />
          Ultrices in diam pellentesque gravida quis maecenas. Feugiat duis
          turpis
        </p>
      </div>
      <div
        class="flex lg:flex-wrap lg:gap-10 justify-center xl:flex-nowrap xl:gap-[60px]"
      >
        <img src="../../assets/images/home_2.png" alt="logo" class="w-[50%]" />
        <img src="../../assets/images/home_1.png" alt="logo" class="w-[50%]" />
      </div>
    </div>
    <div
      class="flex flex-wrap items-center justify-center gap-4 px-7 mt-[33px] lg:flex lg:justify-between w-full lg:px-[110px] lg:mt-[91px]"
    >
      <img src="../../assets/images/marcas/mazda.png" alt="mazda" />
      <img src="../../assets/images/marcas/nissan.png" alt="nissan" />
      <img src="../../assets/images/marcas/bmw.png" alt="bmw" />
      <img src="../../assets/images/marcas/ford.png" alt="ford" />
      <img src="../../assets/images/marcas/mazda.png" alt="mazda" />
      <img src="../../assets/images/marcas/nissan.png" alt="nissan" />
    </div>

    <section>
      <p
        class="text-black! text-[35px] lg:text-[45px] xl:text-[70px] px-12 xl:px-[140px] lg:px-[110px] text-center! mt-12"
      >
        Te presentamos Fast Motorcity, exhibición de autos ideales para ti
      </p>
      <div
        class="flex flex-col-reverse lg:flex-row lg:mt-10 xl:px-[90px] lg:gap-5 lg:px-[20px]"
      >
        <div class="w-full mt-8 lg:mt-0 lg:w-3/5 flex flex-col justify-center">
          <div class="block lg:hidden flex flex-col items-start gap-4 px-7">
            <img
              src="../../assets/images/home_ico.svg"
              alt="icon"
              class="pl-0"
            />
            <p class="text-black! text-[28px] px-0 text-left!">
              ¿Qué es Fast Motorcity?
            </p>
            <p class="text-black! text-[16px] px-0 text-left! mt-2">
              Es la gran exhibición de autos ideales para ti, donde en minutos
              puedes ver, elegir y acelerar tu decisión
            </p>
            <p class="text-black! text-[16px] px-0 text-left!">
              No es un comparador. Es tu vitrina express de autos: un escaparate
              online que concentra sólo lo mejor en opciones para que encuentres
              rápido el auto que buscas, sin vueltas, sin complicaciones.
            </p>
          </div>
          <div
            class="card_white hidden lg:block relative xl:w-[80%] w-full h-[50vw] mx-auto"
          >
            <div
              class="flex flex-col items-start justify-start text-left gap-4 pt-[70px] lg:px-[50px] xl:p-[70px] md:"
            >
              <img src="../../assets/images/home_ico.svg" alt="icon" />
              <p class="text-black! lg:text-[22px] xl:text-[28px]">
                ¿Qué es Fast Motorcity?
              </p>
              <p class="text-black! mt-2 lg:text-[14px] xl:text-[16px]">
                Es la gran exhibición de autos ideales para ti, donde en minutos
                puedes ver, elegir y acelerar tu decisión
              </p>
              <p class="text-black! lg:text-[14px] xl:text-[16px]">
                No es un comparador. Es tu vitrina express de autos: un
                escaparate online que concentra sólo lo mejor en opciones para
                que encuentres rápido el auto que buscas, sin vueltas, sin
                complicaciones.
              </p>
            </div>
          </div>
          <button
            class="bg-[#2D0357] rounded-4xl flex lg:hidden items-center text-[18px] py-3 px-5 gap-2 w-fit self-center mt-8"
            @click="actionCall"
          >
            DESCUBRIR MI AUTO
            <img src="../../assets/images/simple_arrow.svg" alt="icon" />
          </button>
        </div>
        <div
          class="w-full lg:w-[500px] xl:w-[600px] flex flex-col justify-center px-7 mt-12 lg:mt-0 lg:px-0 lg:w-2/5 lg:pt-0 lg:justify-start"
        >
          <div
            class="card_img_3 w-full grid items-center gap-4 h-[80vw] lg:h-[unset] lg:aspect-square"
          >
            <div
              class="grid justify-items-end h-fit w-full pt-12 pr-10 gap-4 lg:pt-0 lg:pr-0"
            >
              <div
                class="bg-[#6207BD] rounded-xl w-fit h-fit px-2 lg:mt-[50px] lg:mr-[50px]"
              >
                <p class="text-[10px]">En Fast Motorcity</p>
              </div>
              <p class="text-[10px] lg:mr-[50px]">
                Contamos con una gran variedad de <br />
                vehículos de marcas reconocidas
              </p>
            </div>
            <div class="flex items-end pl-12 pb-7 lg:pl-[50px] lg:pb-[50px]">
              <p class="text-[26px] text-left!">
                Tu auto ideal en <br />
                FAST MODE.
              </p>
            </div>
          </div>
          <button
            class="bg-[#2D0357] rounded-4xl hidden lg:flex items-center text-[18px] py-3 px-5 gap-2 w-fit self-end"
            @click="actionCall"
          >
            DESCUBRIR MI AUTO
            <img src="../../assets/images/simple_arrow.svg" alt="icon" />
          </button>
        </div>
      </div>
    </section>
    <div class="mt-20"></div>
  </section>
</template>

<style scoped>
.purple-arrow {
  transform: rotate(0deg);
}
.client-container {
  border-radius: 62px;
  background: #6207bd;
  width: 262px;
  height: 61px;
  flex-shrink: 0;
  align-items: center;
}
.card_img_3 {
  background-image: url("../../assets/images/home_3.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
.card_white {
  background-image: url("../../assets/images/bg.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 637px;
  height: 821px;
}

@media screen and (min-width: 1024px) {
  .card_white {
    width: 407px;
    height: 591px;
  }
}
@media screen and (min-width: 1280px) {
  .card_white {
    width: 467px;
    height: 641px;
  }
}
</style>
