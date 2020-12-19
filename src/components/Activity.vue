<template>
  <div class="content-wrapper" v-if="currentActivity">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row">
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

    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <!-- Main content -->
            <div class="invoice p-3 mb-3">
              <!-- title row -->
              <div class="row mb-3 mt-3">
                <div class="col-12">
                  <h4 style="text-align: center;">{{currentActivity.title}}</h4>
                </div>
                <!-- /.col -->
              </div>

              <!-- Table row -->
              <div class="row">
                <div class="col-12 table-responsive">
                  <table class="table" v-for="(category, index) in currentActivity.categories" :key="index">
                    <thead class="bg-dark" >
                      <tr>
                        <th>{{category.title}}</th>
                        <th style="text-align: center; width: 10%">
                          Αποτέλεσμα
                        </th>
                        <th style="text-align: center; width: 25%">
                          Παρατηρήσεις
                        </th>
                      </tr>
                    </thead>
                    <tbody v-for="(question, index) in category.questions" :key="index">
                      <tr>
                        <td>{{question.title}}</td>
                        <td style="text-align: center">
                          <div
                            class="btn-group btn-group-toggle"
                            data-toggle="buttons"
                          >
                            <label class="btn btn-outline-danger btn-lg" 
                                v-for="(choice, index) in question.choices"
                                :key="index">
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
                        <td style="text-align: center ">
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
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";


export default {
  name: "Activity",
  computed: {
        ...mapGetters("activity", ["currentActivity"]),
    },
  mounted() {
    this.getActivity(this.$route.params.slug);
  },
  methods: {
	...mapActions("activity", ["getActivity"])
  },
};

</script>

<style>
</style>