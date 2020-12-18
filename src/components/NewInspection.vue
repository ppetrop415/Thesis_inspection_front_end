<template>
  <div class="content-wrapper">
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
                          v-model="notify_number"
                          />
                          <div class="input-group-append">
                            <button
                              class="btn btn-lg btn-default"
                              type="submit"
                              @click="searchNotifyNumber"
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
                              <h3>{{ branchstore.title }}</h3>
                              <p>
                                {{ branchstore.address }} {{ branchstore.address_number }}, {{ branchstore.zip_code }}
                                <br />
                                {{ branchstore.state }}, {{ branchstore.region }}, Ελλάδα
                                <br />
                                <small
                                  ><strong>Store:</strong> {{ branchstore.title }}</small
                                >
                                <br />
                                <small
                                  ><strong>Owner:</strong> Petropoulos
                                  Panagiotis</small
                                >
                                <br />
                                <small
                                  ><strong>Health Regulator:</strong>
                                  {{ branchstore.health_regulator }}</small
                                >
                                <br />
                                <small
                                  ><strong>Activity:</strong> {{ branchstore.activity }}</small
                                >
                                <br />
                                <small><strong>VAT:</strong> {{ branchstore.vat }}</small>
                              </p>
                              <a
                                href=""
                                class="btn btn btn-danger float-right mb-2"
                                >Start</a
                              >
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
import BranchstoreDataService from "../services/BranchstoreDataService";

export default {
  //   components: { SearchRessultBranchstore },
  name: "NewInspection",
  data() {
    return {
      branchstores: [],
      //   currentBusiness: null,
      //   currentIndex: -1,
      notify_number: "",
    };
  },
  methods: {
    retrieveBranchstores() {
      BranchstoreDataService.getAll()
        .then((response) => {
          this.branchstores = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveBranchstores();
      //   this.currentBusiness = null;
      //   this.currentIndex = -1;
    },
    searchNotifyNumber() {
      BranchstoreDataService.findByNotifyNumber(this.notify_number)
        .then(response => {
          this.branchstores = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveBranchstores();
  },
};
</script>

<style>
</style>