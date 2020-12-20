<template>
    <div>
        <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row">
        </div>
      </div>
      <!-- /.container-fluid -->
    </section>

    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">

            <!-- this row will not appear when printing -->
            <div class="row no-print mb-3">
              <div class="col-12">
                <button type="button" class="btn btn-danger ml-5 pl-4 pr-4">Back</button>
                <button type="button" class="btn btn-primary float-right mr-5 pl-3 pr-3" style="margin-right: 5px;">Submit</button>
              </div>
            </div>

            <!-- Main content -->
            <div class="invoice p-3 mb-3">


              <!-- title row -->
              <div class="row">
                <div class="col-12">
                  <h4>
                    <strong>{{branchstore.business}}</strong><br>
                  </h4>
                </div>
                <!-- /.col -->
              </div>

              <!-- Inpection UUID row-->
              <div class="row mb-3 mt-3">
                <div class="col-sm-8">
                  <b>Total score:</b> 150<br>
                </div>  
                <div class="col-sm-4">
                  <b>Classification:</b> <span class="badge badge-danger">High Risk</span>
                  <br>
                </div>
              </div>
              <!-- info row -->
              <div class="row invoice-info">
                <!-- <div class="col-sm-6 invoice-col">
                  From
                  <address>
                    <strong>Admin, Inc.</strong><br>
                    795 Folsom Ave, Suite 600<br>
                    San Francisco, CA 94107<br>
                    Phone: (804) 123-5432<br>
                    Email: info@almasaeedstudio.com
                  </address>
                </div> -->
                <!-- /.col -->
                <div class="col-sm-6 invoice-col">
                  <address>
                    <br>
                    <b>Address:</b> {{branchstore.address}} {{branchstore.address_number}}, {{branchstore.zip_code}}<br>
                    <b>State:</b> {{branchstore.state}}, Ελλάδα<br>
                    <b>Phone:</b> (+30) 2105152778<br>
                    <b>Email:</b> {{branchstore.email}}
                  </address>
                </div>
                <!-- /.col -->
                <div class="col-sm-6 invoice-col">
                  <br>
                  <b>Notify Number:</b> {{branchstore.notify_number}}<br>
                  <b>Vat:</b> {{branchstore.vat}}<br>
                  <b>Health Regulator:</b> {{branchstore.health_regulator.get_full_name}}<br>
                  <br>
                </div>
                <!-- /.col -->

                <div class="col-sm-12 invoice-col">
                
                  
                 
                  <b>Type of Activity:</b> Επιχείρηση Μαζικής Εστίασης Πλήρους Επεξεργασίας<br>
                  <br>

                  
                </div>
                <!-- /.col -->

              </div>
              <!-- /.row -->

              <!-- Table row -->
              <div class="row">
                <div class="col-12 table-responsive">
                  <table class="table" v-for="(category, index) in branchstore.activity.categories" :key="index">
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
        </div><!-- /.col -->
      </div>
    </section>
      


  
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
    </div>
</template>

<script>

import { mapActions, mapState } from "vuex";

export default {
    name: 'Inspection',
    props: ["slug"],
    computed: {
        ...mapState("branchstore", ["branchstore"]),
    },
    mounted() {
        this.getBranchstore(this.slug);
    },
    methods: {
        ...mapActions("branchstore", ["getBranchstore"])
    }

};

</script>

<style>

</style>