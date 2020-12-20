<template>
  <div class="content-wrapper">
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
    <section class="content">
      <div class="container-fluid">
        <!-- TABLE: LATEST ORDERS -->
        <div class="card">
          <div class="card-header border-transparent">
            <h3 class="card-title">Branchstores</h3>

            <div class="card-tools">
              <!-- SEARCH FORM -->
              <div class="input-group input-group-md">
                <input
                  class="form-control form-control-navbar"
                  type="search"
                  placeholder="Search by Notify Number"
                  aria-label="Search"
                />
                <!-- v-model="notify_number" -->

                <div class="input-group-append">
                  <button class="btn btn-outline-danger" type="submit">
                    <!-- @click="searchNotifyNumber" -->
                    <i class="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <div class="card-body p-0">
            <div class="table-responsive">
              <table class="table table-striped m-0">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Health Regulator</th>
                    <th>VAT</th>
                    <th>Notify Number</th>
                    <th>State</th>
                    <th>Zip Code</th>
                    <th style="width: 100px">Classify</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(branchstore, index) in branchstores" :key="index">
                    <td>
                      <a href="">{{ branchstore.business }}</a>
                    </td>
                    <td>{{ branchstore.health_regulator.get_full_name }}</td>
                    <td>{{ branchstore.vat }}</td>
                    <td>{{ branchstore.notify_number }}</td>
                    <td>{{ branchstore.state }}</td>
                    <td>{{ branchstore.zip_code }}</td>
                    <td><span class="badge badge-success">LOW</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- /.table-responsive -->
          </div>
          <!-- /.card-body -->
          <div class="card-footer">
            <nav aria-label="business Page Navigation">
              <ul class="pagination justify-content-center m-0">
                <li class="page-item active">
                  <a class="page-link" href="">1</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="">previous</a>
                </li>

                <li class="page-item"><a class="page-link" href="#">2</a></li>

                <li class="page-item"><a class="page-link" href="">next</a></li>
                <li class="page-item"><a class="page-link" href="">last</a></li>
              </ul>
            </nav>
          </div>
          <!-- /.card-footer -->
        </div>
        <!-- /.card -->
      </div>
      <!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "BranchstoreList",
  computed: {
    ...mapState("branchstore", ["branchstores"]),
  },
  mounted() {
    this.getBranchstores();
  },
  methods: {
    ...mapActions("branchstore", ["getBranchstores"]),
  },
};
</script>

<style>
</style>