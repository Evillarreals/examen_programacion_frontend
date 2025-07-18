<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div class="container">
        <div class="mx-auto d-flex gap-4">
          <router-link class="nav-link fw-bold" to="/calculo" exact-active-class="active">Cálculo de Calificaciones</router-link>
          <router-link class="nav-link fw-bold" to="/registro" exact-active-class="active">Formulario de Registro</router-link>
        </div>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<style>
.nav-link {
  color: #333;
  transition: color 0.3s ease;
  text-decoration: none;
}

.nav-link:hover {
  color: #0d6efd;
}

.navbar .active {
  color: #0d6efd !important;
  border-bottom: 2px solid #0d6efd;
}
</style>
