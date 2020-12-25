<template>
    <div class="wrapper">
        <div>
            <Navbar />
            <Sidebar />
            <Footer />
            <router-view />
        </div>
    </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Dashboard",
  components: {
    Navbar,
    Sidebar,
    Footer,
  },
};
</script>

<style>
</style>
