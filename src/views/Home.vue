<template>
  <!-- <hello-world /> -->
  <div>
    <h1>This is the Home</h1>
    <hero-section-home />
  </div>
</template>

<script>
// import HelloWorld from '../components/HelloWorld'

export default {
  name: "Home",

  components: {
    // HelloWorld,
    'hero-section-home': require('@/components/HeroSections/HeroHome.vue').default
  },
};
</script>
