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
            <h3 class="card-title">Activities</h3>
        </div>
        <!-- /.card-header -->
        <div class="card-body p-0">
            <div class="table-responsive">
            <table class="table table-striped m-0">
                <thead>
                <tr>
                    <th style="width: 15px">#</th>
                    <th>title</th>
                </tr>
                </thead>
                <tbody >
                <tr                     
                    v-for="(activity, index) in allActivities"
                    :key="index">
                    <td>{{activity.order}}</td>
                    <router-link :to="{ name: 'activity', params: { slug: activity.slug }}"><td>{{ activity.title }}</td></router-link>
                </tr>
                </tbody>
            </table>
            </div>
            <!-- /.table-responsive -->
        </div>
        <!-- /.card-body -->

        </div>
        <!-- /.card -->
    </div>
    <!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  <router-view/>
</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";


export default {
  name: "ActivityList",
  computed: {
        ...mapGetters("activity", ["allActivities"]),
    },
  mounted() {
    this.getActivities();
  },
  methods: {
	...mapActions("activity", ["getActivities"])
  },
};
</script>

<style>
</style>