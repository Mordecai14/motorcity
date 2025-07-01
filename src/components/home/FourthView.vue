<template>
  <section>
    <div class="grid gap-8 px-7 py-16 lg:hidden">
      <article>
        <h2 class="text-[40px] font-medium text-black text-left!">
          ¿Qué te espera en nuestro postal Fast Motorcity?
        </h2>
      </article>
      <article>
        <div
          class="image-bg flex flex-col justify-end gap-5 px-9 pb-20 text-white text-left!"
        >
          <p class="text-[35px] font-medium leading-none">
            Nuestro proceso es 100% online
          </p>
          <p class="text-base">
            Simplificamos tu vida! Sin salir de casa y en unos segundos conoce
            el auto de tus sueños.
          </p>
        </div>
      </article>
      <article class="flex flex-col gap-10 text-black items-start">
        <div class="item-card flex flex-col gap-5 relative">
          <img
            src="../../assets/images/icon_bw_home.svg"
            alt="icono"
            class="w-[60px]"
          />
          <img
            src="../../assets/images/PurpleArrow.svg"
            alt="arrow"
            class="purple-arrow"
          />
          <p class="text-[21px] font-medium text-left!">
            Autos totalmente nuevos y usados
          </p>
          <p class="text-[16px] text-left! w-[90%]">
            Lorem ipsum dolor sit amet consectetur. Eleifend mauris facilisis in
            iaculis
          </p>
        </div>

        <div class="flex flex-col gap-5 relative">
          <img
            src="../../assets/images/icon_bw_home.svg"
            alt="icono"
            class="w-[60px]"
          />
          <img
            src="../../assets/images/PurpleArrow.svg"
            alt="arrow"
            class="purple-arrow"
          />
          <p class="text-[21px] font-medium text-left!">
            Bonos exclusivos y tasas preferenciales
          </p>
          <p class="text-[16px] text-left! w-[90%]">
            Lorem ipsum dolor sit amet consectetur. Eleifend mauris facilisis in
            iaculis
          </p>
        </div>
      </article>
    </div>
    <div
      class="hidden lg:flex w-full px-10 xl:px-20 py-16 gap-8 xl:gap-14 wrapper"
    >
      <article>
        <div
          class="image-bg w-[330px] xl:w-[440px] h-full flex flex-col justify-end gap-5 px-10 pb-20 text-white"
        >
          <p class="text-[38px] leading-none text-left">
            Nuestro proceso es 100 % online
          </p>
          <p class="text-base text-left">
            Simplificamos tu vida! Sin salir de casa y en unos segundos conoce
            el auto de tus sueños.
          </p>
        </div>
      </article>
      <article class="flex flex-col gap-14 xl:gap-35 flex-grow">
        <h2
          class="text-[55px] xl:text-[70px] leading-tight text-black text-left!"
        >
          ¿Qué te espera en nuestro postal Fast Motorcity?
        </h2>
        <div class="flex justify-between xl:justify-start xl:gap-8 gap-10">
          <div
            class="cards w-full lg:w-[45%] max-w-[560px] relative text-black"
          >
            <img
              src="../../assets/images/PurpleArrow.svg"
              class="purple-arrow"
            />
            <img
              src="../../assets/images/icon_bw_home.svg"
              class="w-16 mb-6 ml-8"
            />
            <h3 class="text-[21px] font-medium mb-6 text-left">
              Autos totalmente nuevos y usados
            </h3>
            <p class="text-sm text-[#000000cf] text-left">
              Lorem ipsum dolor sit amet consectetur. Eleifend mauris facilisis
              in iaculis
            </p>
          </div>
          <div
            class="cards w-full lg:w-[45%] max-w-[560px] relative text-black"
          >
            <img
              src="../../assets/images/PurpleArrow.svg"
              class="purple-arrow"
            />
            <img
              src="../../assets/images/icon_bw_home.svg"
              class="w-16 mb-6 ml-8"
            />
            <h3 class="text-[21px] font-medium mb-6 text-left">
              Bonos exclusivos y tasas preferenciales
            </h3>
            <p class="text-sm text-[#000000cf] text-left">
              Lorem ipsum dolor sit amet consectetur. Eleifend mauris facilisis
              in iaculis
            </p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.image-bg {
  position: relative;
  border-radius: 52px;
  aspect-ratio: 393/638;
  background:
    linear-gradient(190deg, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.6) 60%),
    url("../../assets/images/home_4.png") center / cover no-repeat;
  overflow: hidden;
}

.purple-arrow {
  position: absolute;
  width: 58px;
  left: 25%;
  top: 0%;
  transform: rotate(270deg);
}
@media (min-width: 1024px) {
  .cards {
    background-image: url("../../assets/images/card_white_2.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    padding: 4rem 1.6rem 3.5rem;
    display: flex;
    flex-direction: column;
  }

  .purple-arrow {
    position: absolute;
    width: 58px;
    top: 6%;
    left: 80%;
    transform: rotate(270deg);
  }
}

@media (min-width: 1200px) {
  .cards {
    padding: 4rem 3.3rem 3.5rem;
  }
  .purple-arrow {
    top: 0%;
  }
}
@media (min-width: 1440px) {
  .cards {
    padding: 4rem 5.1rem 3.5rem;
  }
  .purple-arrow {
    left: 75%;
  }
}

@media (min-width: 1500px) {
  .cards {
    padding: 4rem 3.9rem 3.5rem;
  }
  .purple-arrow {
    top: -1%;
    left: 73%;
  }
  .image-bg {
    width: 580px!;
  }
}
</style>
