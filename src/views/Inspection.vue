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
                    <b>Αριθμός Άδειας Λειτουργίας:</b> {{ branchstore.notify_number }}<br />
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
                          <th>{{ category.title }}</th>
                          <th style="text-align: center; width: 10%">
                            Αποτέλεσμα
                          </th>
                          <th style="text-align: center; width: 25%">
                            Παρατηρήσεις
                          </th>
                        </tr>
                      </thead>
                      <tbody
                        v-for="(question, index) in category.questions"
                        :key="index"
                      >
                        <tr>
                          <td>{{ question.title }}</td>
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
                            <button class="btn btn-primary btn-lg">
                              <i class="fas fa-info-circle"></i>
                            </button>
                            <button class="ml-2 btn btn-info btn-lg">
                              <i class="fas fa-edit"></i>
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
  computed: {
    ...mapState("branchstore", ["branchstore"]),
  },
  mounted() {
    this.getBranchstore(this.slug);
  },
  methods: {
    ...mapActions("branchstore", ["getBranchstore"]),
  },
};
</script>
