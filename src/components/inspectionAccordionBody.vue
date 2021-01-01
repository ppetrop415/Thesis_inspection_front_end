<template>
  <div>
    <div
      class="card-body"
    >
      <div class="row">
        <div class="col-sm-5 mb-2 text-justify">
          {{ question.title }}
        </div>
        <div class="col-sm-3 mb-2 text-center">
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
        <div class="col-sm-4 mb-2 text-center">

            <!-- <inspection-accordion-description-button :description="question"/> -->

          <!-- <button
            type="button"
            class="btn btn-primary btn-md"
            data-toggle="modal"
            data-target="#modal-lg"
            @click="sendDescription(question)"
          >
            <i class="fas fa-info-circle"></i>
          </button>
          <button
            type="button"
            class="btn btn-info btn-md ml-2 mr-2"
            data-toggle="modal"
            data-target="#modal-comment"
          >
            <i class="fas fa-edit"></i>
          </button> -->
          <button class="btn btn-danger btn-md" @click="addToCart()">
            <i class="fas fa-location-arrow"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- <div class="modal fade" id="modal-lg">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Description</h4>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>{{ selectedQuestion.description }}</p>
          </div>
          <div class="modal-footer justify-content-between">
            <button type="button" class="btn btn-default" data-dismiss="modal">
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
       
      </div>
      
    </div> -->
    <!-- /.modal -->

    <!-- <div class="modal fade" id="modal-comment">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Παρατηρήσεις - Ελλείψεις</h4>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                v-model="comment"
              ></textarea>
            </div>
          </div>
          <div class="modal-footer justify-content-between">
            <button type="button" class="btn btn-default" data-dismiss="modal">
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
       
      </div>
      
    </div> -->
    <!-- /.modal -->
  </div>
</template>

<script>
import { mapActions } from "vuex";
// import inspectionAccordionDescriptionButton from './inspectionAccordionDescriptionButton.vue';

export default {
//   components: { inspectionAccordionDescriptionButton },
  props: ["question"],
  data() {
    return {
      selectedQuestion: "",
      picked: "",
    //   comment: "",
    };
  },
  methods: {
    ...mapActions("cart", ["addQuestionToCart"]),

    // sendDescription(question) {
    //   this.selectedQuestion = question;
    // },
    addToCart() {
      this.addQuestionToCart({
        question: this.question,
        choise: this.picked,
        // comment: this.comment,
      });
    },
  },
};
</script>

<style>
</style>