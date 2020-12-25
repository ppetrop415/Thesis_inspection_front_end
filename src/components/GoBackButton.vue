<template>
  <div>
    <button type="button" class="btn btn-danger ml-5 pl-4 pr-4" @click="goBack">Back</button>
  </div>
</template>

<script>
export default {
    methods: {
        goBack() {
            this.$router.go(-1)
        }
    }
};
</script>
