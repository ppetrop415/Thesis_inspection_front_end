<template>
  <div>
    <button
      type="button"
      class="btn btn-primary btn-md"
      data-toggle="modal"
      data-target="#modal-lg"
      @click="$emit('on-description')"
    >
      <i class="fas fa-info-circle"></i>
    </button>

    <div class="modal fade" id="modal-lg">
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
            <p>{{ description }}</p>
          </div>
          <div class="modal-footer justify-content-between">
            <button type="button" class="btn btn-default" data-dismiss="modal">
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["description"],
  data() {
    return {
      selectedQuestion: "",
      
    };
  },
  methods: {
    ...mapActions("cart", ["addQuestionToCart"]),

    sendDescription(description) {
      this.selectedQuestion = description;
    },
    
  },
};
</script>

<style>
</style>