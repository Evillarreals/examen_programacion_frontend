<template>
  <div class="container d-flex justify-content-center">
    <div class="card shadow p-4 mt-5" style="max-width: 600px; width: 100%;">
      <h2 class="text-center mb-4">Formulario de Registro</h2>

      <form @submit.prevent="enviarFormulario">
        <div class="mb-3">
          <label class="form-label">Nombre</label>
          <input
            type="text"
            class="form-control"
            v-model.trim="nombre"
            :class="{ 'is-invalid': nombreInvalido }"
          />
          <div class="invalid-feedback">El nombre es obligatorio.</div>
        </div>

        <div class="mb-3">
          <label class="form-label">Correo</label>
          <input
            type="email"
            class="form-control"
            v-model.trim="correo"
            :class="{ 'is-invalid': correoInvalido }"
          />
          <div class="invalid-feedback">Ingrese un correo válido.</div>
        </div>

        <div class="mb-3">
          <label class="form-label">Contraseña</label>
          <input
            type="password"
            class="form-control"
            v-model="password"
            :class="{ 'is-invalid': passwordInvalido }"
          />
          <div class="invalid-feedback">Ingrese una contraseña.</div>
        </div>

        <div class="mb-3">
          <label class="form-label">Repetir Contraseña</label>
          <input
            type="password"
            class="form-control"
            v-model="repetirPassword"
            :class="{ 'is-invalid': repetirPasswordInvalido }"
          />
          <div class="invalid-feedback">Las contraseñas no coinciden.</div>
        </div>

        <button type="submit" class="btn btn-success w-100">Enviar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegistroView',
  data() {
    return {
      nombre: '',
      correo: '',
      password: '',
      repetirPassword: ''
    }
  },
  computed: {
    nombreInvalido() {
      return this.nombre.trim() === ''
    },
    correoInvalido() {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return !regex.test(this.correo)
    },
    passwordInvalido() {
      return this.password === ''
    },
    repetirPasswordInvalido() {
      return this.repetirPassword !== this.password || this.repetirPassword === ''
    },
    formularioValido() {
      return !this.nombreInvalido &&
             !this.correoInvalido &&
             !this.passwordInvalido &&
             !this.repetirPasswordInvalido
    }
  },
  methods: {
    enviarFormulario() {
      if (this.formularioValido) {
        alert("El registro se ha realizado correctamente")
        this.nombre = ''
        this.correo = ''
        this.password = ''
        this.repetirPassword = ''
      }
    }
  }
}
</script>
