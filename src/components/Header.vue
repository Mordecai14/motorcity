<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Menubar from "primevue/menubar";

const router = useRouter();

const items = ref([
  {
    label: "Home",
    icon: "pi pi-home",
    command: () => {
      router.push("/");
    },
  },
  {
    label: "Login",
    icon: "pi pi-lock",
    command: () => {
      router.push("/login");
    },
  },
  {
    label: "Products",
    icon: "pi pi-star",
    command: () => {
      router.push("/products");
    },
  },
  {
    label: "Contact",
    icon: "pi pi-envelope",
    command: () => {
      router.push("/contact");
    },
  },
]);
</script>

<template>
  the header
  <Menubar :model="items" class="fixed top-0 w-full z-10"> </Menubar>
</template>

<style scoped></style>
