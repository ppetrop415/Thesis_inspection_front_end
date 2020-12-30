<template>
  <div>
    <Navbar />
    <Sidebar />

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <div class="container-fluid">
          <div class="row"></div>
        </div>
        <!-- /.container-fluid -->
      </section>

      <section class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <!-- this row will not appear when printing -->
              <div class="row mb-3 d-flex justify-content-between">
                <GoBackButton />
                <SubmitButton />
              </div>

              <!-- Main content -->
              <div class="invoice p-3 mb-3">
                <!-- title row -->
                <div class="row">
                  <div class="col-12">
                    <h4>
                      <strong>{{ branchstore.business }}</strong
                      ><br />
                    </h4>
                  </div>
                  <!-- /.col -->
                </div>

                <!-- Inpection UUID row-->
                <div class="row mb-3 mt-3">
                  <div class="col-sm-8"><b>Συνολικό Σκόρ:</b> 150<br /></div>
                  <div class="col-sm-4">
                    <b>Επικινδυνότητα:</b>
                    <span class="badge badge-danger">High Risk</span>
                    <br />
                  </div>
                </div>
                <!-- info row -->
                <div class="row invoice-info">
                  <div class="col-sm-6 invoice-col">
                    <address>
                      <br />
                      <b>Διεύθυνση:</b> {{ branchstore.address }}
                      {{ branchstore.address_number }}, {{ branchstore.zip_code
                      }}<br />
                      <b>Πόλη:</b> {{ branchstore.state }}, Ελλάδα<br />
                      <b>Τηλέφωνο:</b> (+30) 2105152778<br />
                      <b>Email:</b> {{ branchstore.email }}
                    </address>
                  </div>
                  <!-- /.col -->
                  <div class="col-sm-6 invoice-col">
                    <br />
                    <b>Αριθμός Άδειας Λειτουργίας:</b>
                    {{ branchstore.notify_number }}<br />
                    <b>ΑΦΜ:</b> {{ branchstore.vat }}<br />
                    <b>Υγειονομικός Υπεύθυνος:</b>
                    {{ branchstore.health_regulator.first_name }}
                    {{ branchstore.health_regulator.last_name }}<br />
                    <br />
                  </div>
                  <!-- /.col -->

                  <div class="col-sm-12 invoice-col">
                    <b>Δραστηριότητα:</b> {{ branchstore.activity.title }}<br />
                    <br />
                  </div>
                  <!-- /.col -->
                </div>
                <!-- /.row -->

                <!-- Table row -->
                <div class="row">
                  <div class="col-12 table-responsive">
                    <table
                      class="table"
                      v-for="(category, index) in branchstore.activity
                        .categories"
                      :key="index"
                    >
                      <thead class="bg-dark">
                        <tr>
                          <th></th>
                          <th>{{ category.title }}</th>
                          <th style="text-align: center; width: 10%">
                            Αποτέλεσμα
                          </th>
                          <th style="text-align: center; width: 30%">
                            Παρατηρήσεις
                          </th>
                        </tr>
                      </thead>
                      <tbody
                        v-for="(question, index) in category.questions"
                        :key="index"
                      >
                        <tr>
                          <td>
                            <i class="fas fa-check-circle text-success"></i>
                          </td>
                          <td>
                            {{ question.title }}
                          </td>
                          <td style="text-align: center">
                            <div
                              class="btn-group btn-group-toggle"
                              data-toggle="buttons"
                            >
                              <label
                                class="btn btn-outline-danger btn-lg"
                                v-for="(choice, index) in question.choices"
                                :key="index"
                              >
                                <input
                                  type="radio"
                                  name="options"
                                  id="option_a1"
                                  autocomplete="off"
                                />
                                {{ choice.number }}
                              </label>
                            </div>
                          </td>
                          <td style="text-align: center">
                            <button
                              type="button"
                              class="btn btn-primary btn-lg"
                              data-toggle="modal"
                              data-target="#modal-lg"
                              @click="sendDescription(question)"
                            >
                              <i class="fas fa-info-circle"></i>
                            </button>
                            <button
                              type="button"
                              class="ml-2 btn btn-info btn-lg"
                              data-toggle="modal"
                              data-target="#modal-comment"
                            >
                              <i class="fas fa-edit"></i>
                            </button>
                            <button class="ml-2 btn btn-danger btn-lg" @click="addToCart">
                              <i class="fas fa-location-arrow"></i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!-- /.col -->
                </div>
                <!-- /.row -->

                <!-- /.col -->
              </div>
              <!-- /.row -->
            </div>
            <!-- /.invoice -->
          </div>
          <!-- /.col -->
        </div>

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
                <p>{{ selectedQuestion.description }}</p>
              </div>
              <div class="modal-footer justify-content-between">
                <button
                  type="button"
                  class="btn btn-default"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
            <!-- /.modal-content -->
          </div>
          <!-- /.modal-dialog -->
        </div>
        <!-- /.modal -->

        <div class="modal fade" id="modal-comment">
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
                <button
                  type="button"
                  class="btn btn-default"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
            <!-- /.modal-content -->
          </div>
          <!-- /.modal-dialog -->
        </div>
        <!-- /.modal -->
      </section>

      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import Footer from "../components/Footer.vue";
import GoBackButton from "../components/GoBackButton";
import SubmitButton from "../components/SubmitButton";

export default {
  name: "Inspection",

  props: ["slug"],
  components: {
    Navbar,
    Sidebar,
    Footer,
    GoBackButton,
    SubmitButton,
  },

  data() {
    return {
      selectedQuestion: "",
      comment: "",
    };
  },
  computed: {
    ...mapState("branchstore", ["branchstore"]),
  },
  mounted() {
    this.getBranchstore(this.slug);
  },
  methods: {
    ...mapActions("branchstore", ["getBranchstore"]),
    ...mapActions("cart", ["addQuestionToCart"]),
    sendDescription(question) {
      this.selectedQuestion = question;
    },

    addToCart() {
      this.addQuestionToCart({
        question: this.branchstore.activity.categories.question,
        choise: this.choise,
        comment: this.comment
      })
    }

  },
};
</script>
