<template>
  
    <div
          class="dropdown-menu dropdown-menu-lg dropdown-menu-right"
          style="min-width: 1000px"
        >
          <span class="dropdown-item text-center">Cafe Cafe Inspection</span>
          <div class="dropdown-divider"></div>
          <div class="bg-dark p-2">
                <div class="row">
                    <div class="col-md-5 text-center">
                        Τίτλος
                    </div>
                    <div class="col-md-2 text-center">
                        Αποτέλεσμα
                    </div>
                    <div class="col-md-5 text-center">
                        Παρατηρήσεις
                    </div>
                </div>
          </div>
          <div class="pb-2 pt-2">
                <div class="row" v-for="(item, index) in cart"
            :key="index">
                    <div class="col-md-5 text-center">
                        {{item.question.title}}
                    </div>
                    <div class="col-md-2 text-center">
                        {{item.choise}}
                    </div>
                    <div class="col-md-5 text-center">
                        Έλλειψη τήρησης αρχείων
                    </div>
                </div>
                
          </div>
          <div class="dropdown-divider"></div>

            <div class="dropdown-item text-center">
                Total Score: <strong>{{cartTotalScore}}</strong>
            </div>
            
    </div>

</template>

<script>
import { mapState, mapGetters } from "vuex";


export default {
    name: "NavbarInpectionCart",
    computed: {
        ...mapState("cart", ["cart"]),

        ...mapGetters("cart", ["cartTotalScore"]),
    },

}
</script>

<style>

</style>