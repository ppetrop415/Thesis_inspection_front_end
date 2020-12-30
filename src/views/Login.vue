<template>
  <div class="login-page hold-transition bg-dark">
    <div class="login-box">
      <div class="login-logo">
        <router-link to="/dashboard" class="text-light"
          ><b>Sanitary</b> Inc.</router-link
        >
      </div>
      <!-- /.login-logo -->
      <div class="card">
        <div class="card-body login-card-body">
          <p class="login-box-msg">Sign in to start your session</p>

          <form
            method="post"
            @submit.prevent="login"
          >
            <div class="input-group mb-3">
              <input
                type="email"
                class="form-control"
                placeholder="Email"
                v-model="email"
                v-validate="'required'"
                name="email"
              />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                v-model="password"
                v-validate="'required'"
                name="password"
              />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <button class="btn btn-danger btn-block" :disabled="loading">
                  <span
                    v-show="loading"
                    class="spinner-border spinner-border-sm"
                  >
                  </span>
                  <span>Sign In</span>
                </button>

                <!-- <router-link to="/dashboard" class="btn btn-danger btn-block" :disabled="loading">
                  Sign In
                </router-link> -->
              </div>
              <!-- /.col -->
            </div>
          </form>

          <p class="mb-1">
            <a href="forgot-password.html">I forgot my password</a>
          </p>
          <p class="mb-0">
            <a href="register.html" class="text-center"
              >Register a new membership</a
            >
          </p>
        </div>
        <!-- /.login-card-body -->
      </div>
    </div>
    <!-- /.login-box -->
  </div>
</template>

<script>
// import User from "../models/user";

export default {
  name: "Login",
  data() {
    return {
      email: '',
      password: '',
      // user: new User("", ""),
      loading: false,
    };
  },

  methods: {
    login() {
      this.loading = true;
      this.$store
        .dispatch("userLogin", {
          username: this.username,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: 'dashboard' })
        })
        .catch(err => {
          console.log(err)
        })

    },
  },
};
</script>

<style>
</style>