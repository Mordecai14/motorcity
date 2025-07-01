<script setup lang="ts">
import { Menubar } from "primevue";
import type { MenuItem } from "primevue/menuitem";
import { RouterLink, RouterView, useRoute, useRouter } from "vue-router";
import Header from "@/components/Header.vue";

const router = useRouter();
const route = useRoute();

const blog = "none";

const items: MenuItem[] = [
  {
    label: "Inicio",
    route: "/#inicio",
  },
  {
    label: "¿Cómo funciona?",
    route: "/#como-funciona",
  },
  {
    label: "Beneficios",
    route: "/#beneficios",
  },
  {
    label: "Contáctenos",
    route: "/#end",
  },
  {
    label: "Blog",
    url: blog,
    target: "_blank", //_blank | _self | _parent | _top
    visible: !!blog,
  },
];

const logoAction = () => {
  router.push({ name: "home" });
};
</script>

<template>
  <RouterView />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Manrope:wght@200..800&display=swap");

:root {
  font-family:
    "Manrope", "Inter", system-ui, Avenir, Helvetica, Arial, sans-serif;
}
</style>
