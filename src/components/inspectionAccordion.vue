<template>
  <div v-if="category">
    <div id="accordion">
      <div class="card card-dark">
        <div class="card-header">
          <h4 class="card-title w-100">
            <a
              class="d-block"
              data-toggle="collapse"
              :href="`#collapse${category.slug}`"
            >
              {{ category.title }}
            </a>
          </h4>
        </div>
        <div
          :id="`collapse${category.slug}`"
          class="collapse"
          data-parent="#accordion"
        >
          <inspection-accordion-body
            v-for="(question, index) in category.questions"
            :key="index"
            :question="question"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import inspectionAccordionBody from "./inspectionAccordionBody.vue";

export default {
  components: { inspectionAccordionBody },
  props: ["category"],
};
</script>

<style>
</style>