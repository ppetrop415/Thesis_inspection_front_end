<template>
    <div>
        <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Mc Donalts Inspection</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="index.html">New inspection</a></li>
              <li class="breadcrumb-item active">Mc Donalts</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">

            <!-- this row will not appear when printing -->
            <div class="row no-print mb-3">
              <div class="col-12">
                <button type="button" class="btn btn-success float-right"><i class="fas fa-print"></i>Print</button>
                <button type="button" class="btn btn-primary float-right" style="margin-right: 5px;">
                  <i class="fas fa-download"></i> PDF
                </button>
              </div>
            </div>

            <!-- Main content -->
            <div class="invoice p-3 mb-3">


              <!-- title row -->
              <div class="row">
                <div class="col-12">
                  <h4>
                    <i class="fas fa-globe"></i> Sanitary, Inc.
                    <small class="float-right">Date: 2/10/2020 Time: 11:30</small>
                  </h4>
                </div>
                <!-- /.col -->
              </div>

              <!-- Inpection UUID row-->
              <div class="row mb-3 mt-3">
                <div class="col-sm-8">
                  <b>Inspection ID:</b> 123e4567-e89b-12d3-a456-426614174000
                </div>  
                <div class="col-sm-4">
                  <b>Classification:</b> <span class="badge badge-danger">High Risk</span>
                  <br>
                </div>
              </div>
              <!-- info row -->
              <div class="row invoice-info">
                <div class="col-sm-6 invoice-col">
                  From
                  <address>
                    <strong>Admin, Inc.</strong><br>
                    795 Folsom Ave, Suite 600<br>
                    San Francisco, CA 94107<br>
                    Phone: (804) 123-5432<br>
                    Email: info@almasaeedstudio.com
                  </address>
                </div>
                <!-- /.col -->
                <div class="col-sm-6 invoice-col">
                  To
                  <address>
                    <strong>MC Donalts</strong><br>
                    Oidipodos 33, 10443<br>
                    Athens, Greece<br>
                    Phone: (+30) 2105152778<br>
                    Email: mcdonalts@gmail.com
                  </address>
                </div>
                <!-- /.col -->
                <div class="col-sm-6 invoice-col">
                
                  
                  <br>
                  <b>Inspector 1:</b> Petropoulos Panagiotis<br>
                  <b>Inspector 2:</b> Kyriakaki Sofia<br>
                  <b>Owner:</b> Kyriakaki Sofia<br>
                  <b>Health Regulator:</b> Kyriakaki Sofia<br>
                  <br>
                </div>
                <!-- /.col -->

                <div class="col-sm-6 invoice-col">
                
                  
                  <br>
                  <b>Notify Number:</b> 1157878 (ver 1)<br>
                  <b>Type of Activity:</b> Επιχείρηση Μαζικής Εστίασης Πλήρους Επεξεργασίας<br>
                  <br>
                  <b>Total score:</b> 150<br>
                  <br>
                  
                </div>
                <!-- /.col -->

              </div>
              <!-- /.row -->

              <!-- Table row -->
              <div class="row">
                <div class="col-12 table-responsive">
                  <table class="table">
                    <thead class="bg-dark">
                    <tr>
                      <th>Αρχεία Τεκμηρίωσης Διαδικασιών</th>
                      <th style="text-align: center;">Αποτέλεσμα</th>
                      <th style="text-align: center; width: 300px;">Παρατηρήσεις</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>Αρχείο προσωπικού</td>
                      <td style="text-align: center;">6</td>
                      <td>Έλειψη πιστοποιητικού υγείας</td>

                    </tr>
                    <tr>
                      <td>Αρχείο Επιχείρησης</td>

                      <td style="text-align: center;">0</td>
                      <td style="text-align: center;">-</td>

                    </tr>
                    <tr>
                      <td>Αρχείο νερού</td>
                      <td style="text-align: center;">0</td>
                      <td style="text-align: center;">-</td>

                    </tr>
                    <tr>
                      <td>Αρχείο καθαρισμού - απολύμανσης</td>
                      <td style="text-align: center;">0</td>
                      <td style="text-align: center;">-</td>

                    </tr>
                    <tr>
                      <td>Αρχείο απεντόμωσης - μυοκτονίας</td>
                      <td style="text-align: center;">3</td>
                      <td style="text-align: center;">Έλλειψη άδειας της συνεργαζόμενης επιχείρησης</td>

                    </tr>
                    <tr>
                      <td>Αρχείο θερμοκρασιών</td>
                      <td style="text-align: center;">0</td>
                      <td style="text-align: center;">-</td>

                    </tr>
                    <tr>
                      <td>Αρχείο πρώτων υλών</td>
                      <td style="text-align: center;">0</td>
                      <td style="text-align: center;">-</td>

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



export default {
    name: 'Inspection',
    props: ["branchstore"],

};

</script>

<style>

</style>