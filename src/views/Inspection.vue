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
                  <div class="col-12 text-center">
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

                <div class="row">
                  <div class="col-sm-12">
                    <!-- we are adding the accordion ID so Bootstrap's collapse plugin detects it -->

                    <inspection-accordion
                      v-for="category in branchstore.activity.categories"
                      :key="category.slug"
                      :category="category"
                    />
                  </div>
                </div>
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
import InspectionAccordion from "../components/inspectionAccordion.vue";

export default {
  name: "Inspection",

  props: ["slug"],
  components: {
    Navbar,
    Sidebar,
    Footer,
    GoBackButton,
    SubmitButton,
    InspectionAccordion,
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
