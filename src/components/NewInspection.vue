<template>

  <div class="content-wrapper">

    <Navbar />
    <Sidebar />
    <Footer />
    <router-view />

    <!-- Main content -->
    <section class="content">
      
      <div class="container-fluid">
        <!-- Content Header (Page header) -->
        <div class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-12">
                <h1 class="m-0"></h1>
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->


        <!-- Main content -->
        <section class="content mt-1">
          <div class="container-fluid">
            <!-- Main content -->
            <section class="content">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-12">
                    <form action="search_results.html">
                      <div class="input-group">
                        <input
                          type="search"
                          class="form-control form-control-lg"
                          placeholder="Search with AFM"
                          />                          
                          <div class="input-group-append">
                            <button
                              class="btn btn-lg btn-default"
                              type="submit"
                            >
                              <i class="fa fa-search"></i>
                            </button>
                          </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-12">
                    <div class="list-group">
                      <div
                        class="list-group-item mb-3"
                        v-for="(branchstore, index) in branchstores"
                        :key="index"
                      >
                        <div class="row">
                          <div class="col px-4 mt-3">
                            <div>
                              <div class="float-right">
                                {{ branchstore.notify_number }}
                              </div>
                              <h3>{{ branchstore.business }}</h3>
                              <p>
                                {{ branchstore.address }} {{ branchstore.address_number }}, {{ branchstore.zip_code }}
                                <br />
                                {{ branchstore.state }}, {{ branchstore.region }}, Ελλάδα
                                <br />
                                <small
                                  ><strong>Κατάστημα:</strong> {{ branchstore.title }}</small
                                >
                                <br />
                                <small
                                  ><strong>Ιδιοκτήτης:</strong> Petropoulos
                                  Panagiotis</small
                                >
                                <br />
                                <small
                                  ><strong>Υγειονομικός Υπεύθυνος:</strong>
                                  {{ branchstore.health_regulator.get_full_name }}</small
                                >
                                <br />
                                <small
                                  ><strong>Δραστηριότητα:</strong> {{ branchstore.activity.title }}</small
                                >
                                <br />
                                <small><strong>ΑΦΜ:</strong> {{ branchstore.vat }}</small>
                              </p>
                              <router-link :to="{name: 'inspection', params: {slug: branchstore.slug}}" class="btn btn btn-danger float-right mb-2">Start</router-link>
                              <!-- <router-link :to="{ name: 'activity', params: { slug: activity.slug }}" class="btn btn btn-danger float-right mb-2">{{ activity.title }}</router-link> -->
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <!-- /.container-fluid -->
        </section>
        <!-- /.content -->
      </div>
      <!-- /.container-fluid -->
    </section>
    <!-- /.content -->
    <router-view />
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "NewInspection",
  components: {
    Navbar,
    Sidebar,
    Footer,
  },
  computed: {
    ...mapState("branchstore", ["branchstores", "vat"]),
    // vat: {
    //   get(){
    //     return this.$store.branchstore.vat
    //   },
    //   set(value){
    //     this.$store.commit('SEARCH_BRANCHSTORE', value)
    //   }
    // }
  },
  mounted() {
    this.getBranchstores();
    
  },
  methods: {
    ...mapActions("branchstore", ["getBranchstores"]),
    ...mapActions("branchstore", ["searchBranchstore"]),
    ...mapMutations("branchstore", ["SEARCH_BRANCHSTORE"]),

    searchNotifyNumber() {
      this.searchBranchstore(this.vat)
    }

  }
};
</script>

<style>
</style>