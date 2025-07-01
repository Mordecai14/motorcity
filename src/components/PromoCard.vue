<script setup lang="ts">
import { defineProps, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const props = defineProps<{
  text: string;
  iconSrc?: string;
  rotationAngle: string | number;
}>();

const clipId = `motorcard-${crypto.randomUUID()}`;

const boxSize = computed(() =>
  [
    "md:w-[243px]",
    "md:h-[288px]",
    route.path === "/steps" && "lg:w-[150px] extend",
  ].filter(Boolean),
);
</script>

<template>
  <div class="relative">
    <div
      class="purple-arrow absolute z-10 flex md:h-14 h-8 md:w-14 w-8 items-center justify-center rounded-full bg-[#6207BD] text-white"
      :style="{ '--arrow-rotation': `${props.rotationAngle}deg` }"
    >
      <img src="../assets/images/icons/PurpleArrow.svg" alt="Purple arrow" />
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="152"
      height="180"
      viewBox="0 0 243 288"
      fill="none"
      :class="boxSize"
    >
      <foreignObject x="-11.04" y="-11.04" width="265.1" height="310.1">
        <div
          class="flex h-full w-full flex-col items-start justify-between py-10 text-white"
          :style="`backdrop-filter:blur(5.52px);clip-path:url(#${clipId});-webkit-backdrop-filter:blur(5.52px);`"
        >
          <div class="flex h-24 w-24 items-center justify-center">
            <img
              v-if="props.iconSrc"
              src="../assets/images/icons/home_ico1.svg"
              alt="icon"
              class="h-24 w-24 self-left ml-20"
            />
            <slot v-else name="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="h-12 w-12"
              >
                <path d="M6 3V19H18V3H6Z" />
                <path d="M6 7H18" />
                <path d="M10 11H14" />
              </svg>
            </slot>
          </div>
          <p class="px-14 text-left text-xl font-light leading-snug">
            {{ props.text }}
          </p>
        </div>
      </foreignObject>
      <path
        d="M0 26.0662C0 11.6702 7.69066 0 17.1776 0H185.602C195.089 0 202.779 11.6702 202.779 26.0662V34.9669C202.779 49.0117 210.282 60.3974 219.538 60.3974H225.822C235.309 60.3974 243 72.0676 243 86.4636V261.934C243 276.33 235.309 288 225.822 288H130.404C121.448 288 112.859 272.742 103.903 272.742H17.1776C7.69067 272.742 0 261.071 0 246.676V26.0662Z"
        fill="rgba(255,255,255,0.06)"
      />
      <path
        d="M17.178.418h168.424c4.556 0 8.737 2.804 11.796 7.447 3.058 4.64 4.962 11.075 4.962 18.203v8.9c0 7.093 1.894 13.533 4.978 18.212 3.081 4.676 7.386 7.636 12.199 7.636h6.284c4.558 0 8.738 2.804 11.798 7.447 3.058 4.64 4.962 11.075 4.962 18.203v175.47c0 7.128-1.904 13.562-4.962 18.202-3.06 4.643-7.24 7.447-11.798 7.447H130.404c-2.121 0-4.256-0.904-6.432-2.316-2.176-1.412-4.346-3.298-6.544-5.209-2.188-1.903-4.404-3.831-6.638-5.281-2.233-1.448-4.53-2.452-6.887-2.452H17.178c-4.558 0-8.738-2.804-11.798-7.447C2.322 260.238.418 253.803.418 246.676V26.066c0-7.128 1.904-13.562 4.962-18.202C8.439 3.221 12.62.418 17.178.418Z"
        stroke="rgba(255,255,255,0.29)"
        stroke-width="0.836"
      />
      <defs>
        <clipPath :id="clipId" transform="translate(11.0384 11.0384)">
          <path
            d="M0 26.0662C0 11.6702 7.69066 0 17.1776 0H185.602C195.089 0 202.779 11.6702 202.779 26.0662V34.9669C202.779 49.0117 210.282 60.3974 219.538 60.3974H225.822C235.309 60.3974 243 72.0676 243 86.4636V261.934C243 276.33 235.309 288 225.822 288H130.404C121.448 288 112.859 272.742 103.903 272.742H17.1776C7.69067 272.742 0 261.071 0 246.676V26.0662Z"
          />
        </clipPath>
      </defs>
    </svg>
  </div>
</template>

<style scoped>
.purple-arrow {
  left: 90%;
  top: -3%;
  transform: rotate(var(--arrow-rotation));
}

@media screen and (min-width: 1440px) {
  .extend {
    width: 220px;
  }
}
</style>
