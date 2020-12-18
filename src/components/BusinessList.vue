<template>

<div class="content-wrapper">
    
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-12">
            <h1 class="m-0"></h1>
            </div><!-- /.col -->
        </div><!-- /.row -->
        </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
    <div class="container-fluid">
        <!-- TABLE: LATEST ORDERS -->
        <div class="card">
        <div class="card-header border-transparent">
            <h3 class="card-title">Businesses</h3>

            <div class="card-tools">
                <!-- SEARCH FORM -->
                <div class="input-group input-group-md">
                    <input
                    class="form-control form-control-navbar"
                    type="search"
                    placeholder="Search by Vat"
                    aria-label="Search"/>
                    <!-- v-model="vat" -->
                    
                    <div class="input-group-append">
                    <button class="btn btn-outline-danger" 
                    type="submit">
                    <!-- @click="searchVat" -->
                    
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
                    <th style="width: 150px">Title</th>
                    <th>Owner</th>
                    <th>Health Regulator</th>
                    <th>VAT</th>
                    <th>Activity</th>
                    <th>State</th>
                    <th style="width: 100px">Classify</th>
                </tr>
                </thead>
                <tbody >
                <tr 
                    
                    v-for="(business, index) in businesses"
                    :key="index">
                    <td><a href="">{{ business.title }}</a></td>
                    <td>{{ business.owner }}</td>
                    <td>Kyriakaki Sofia</td>
                    <td>{{ business.vat }}</td>
                    <td>ΕΜΕ Πλήρους Επεξεργασίας</td>
                    <td>Καλλιθέα</td>
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
// import BusinessDataService from "../services/BusinessDataService";
import { mapState, mapActions } from "vuex";

export default {
    name: "BusinessList",
    computed: {
        ...mapState("business", ["businesses"]),
    },
    mounted(){
        this.getBusinesses();
    },
    methods: {
        ...mapActions("business", ["getBusinesses"])
    }
};
</script>

<style>
</style>