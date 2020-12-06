<template>
  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-danger elevation-4">
    <!-- Brand Logo -->
    <a href="#" class="brand-link">
      <img
        src=""
        alt=""
        class="brand-image img-circle elevation-3"
        style="opacity: 0.8"
      />
      <span class="brand-text font-weight-light">Sanitary Inc</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="" class="img-circle elevation-2" alt="" />
        </div>
        <div class="info">
          <a href="#" class="d-block">Petropoulos Panagiotis</a>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <!-- Add icons to the links using the .nav-icon class
                with font-awesome or any other icon font library -->
          <li class="nav-item">
            <router-link to="/" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>Dashboard<span class="right badge badge-light">New</span></p>
            </router-link>
          </li>

          <li class="nav-header">Tasks</li>
          <li class="nav-item">
            <router-link to="/new-inspection" class="nav-link">
              <i class="nav-icon fas fa-copy"></i>
              <p>New Inspection</p>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/inspections" class="nav-link">

              <i class="nav-icon fas fa-copy"></i>
              <p>Inspections</p>

            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/businesses" class="nav-link">

              <i class="nav-icon fas fa-store-alt"></i>
              <p>Businesses</p>

            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/branchstores" class="nav-link">

              <i class="nav-icon fas fa-store-alt"></i>
              <p>Branchstores</p>

            </router-link>
          </li>

          <li class="nav-header">USERS</li>
          <li class="nav-item">
            <a href="" class="nav-link">
              <i class="nav-icon fas fa-users"></i>
              <p>Inspectors</p>
            </a>
          </li>
          <li class="nav-item">
            <a href="" class="nav-link">
              <i class="nav-icon fas fa-user-tag"></i>
              <p>Business Owners</p>
            </a>
          </li>

          <li class="nav-item">
            <a href="" class="nav-link">
              <i class="nav-icon fas fa-user-tag"></i>
              <p>Health Regulators</p>
            </a>
          </li>

          <li class="nav-header">Infos</li>
          <li class="nav-item">
            <router-link to="/activities" class="nav-link">
              <i class="nav-icon fas fa-cog"></i>
              <p>Activities</p>
           </router-link>
          </li>

          <li class="nav-header">Configurations</li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-cog"></i>
              <p>Settings</p>
            </a>
          </li>
          <li class="nav-item">
            <a href="" class="nav-link">
              <i class="nav-icon fas fa-sign-out-alt"></i>
              <p>Log Out</p>
            </a>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
    <div class="container">
      <router-view />
    </div>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style>
</style>