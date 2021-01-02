<template>
  <div>
    <div class="card-body">
      <div class="row">
        <div class="col-sm-5 mb-2 text-justify">
          {{ question.title }}
        </div>
        <div class="col-sm-5 mb-2 text-center">
          <div class="btn-group btn-group-toggle" data-toggle="buttons">
            <label
              class="btn btn-outline-danger btn-md"
              v-for="(choice, index) in question.choices"
              :key="index"
            >
              <input
                type="radio"
                name="options"
                id="option_a1"
                autocomplete="off"
                v-model.number="picked"
                :value="choice.number"
              />
              {{ choice.number }}
            </label>
          </div>
        </div>
        <div class="col-sm-2 mb-2 text-center">
          <button class="btn btn-danger btn-md" @click="addToCart()">
            <i class="fas fa-location-arrow"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["question"],
  data() {
    return {
      picked: "",
    };
  },
  methods: {
    ...mapActions("cart", ["addQuestionToCart"]),

    addToCart() {
      this.addQuestionToCart({
        question: this.question,
        choise: this.picked,
      });
    },
  },
};
</script>

<style>
</style>