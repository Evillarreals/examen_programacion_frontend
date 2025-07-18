<template>
  <div class="container d-flex justify-content-center">
    <div class="card shadow p-4 mt-5" style="max-width: 600px; width: 100%;">
      <h2 class="text-center mb-4">Cálculo de Calificaciones</h2>

      <form @submit.prevent="calcularPromedio">
        <div class="mb-3">
          <label class="form-label">Nota 1</label>
          <input
            type="number"
            class="form-control"
            v-model.number="nota1"
            :class="{ 'is-invalid': nota1Invalida }"
            min="10"
            max="70"
          />
          <div class="invalid-feedback">Ingrese una nota entre 10 y 70</div>
        </div>

        <div class="mb-3">
          <label class="form-label">Nota 2</label>
          <input
            type="number"
            class="form-control"
            v-model.number="nota2"
            :class="{ 'is-invalid': nota2Invalida }"
            min="10"
            max="70"
          />
          <div class="invalid-feedback">Ingrese una nota entre 10 y 70</div>
        </div>

        <div class="mb-3">
          <label class="form-label">Nota 3</label>
          <input
            type="number"
            class="form-control"
            v-model.number="nota3"
            :class="{ 'is-invalid': nota3Invalida }"
            min="10"
            max="70"
          />
          <div class="invalid-feedback">Ingrese una nota entre 10 y 70</div>
        </div>

        <div class="mb-3">
          <label class="form-label">Asistencia (%)</label>
          <input
            type="number"
            class="form-control"
            v-model.number="asistencia"
            :class="{ 'is-invalid': asistenciaInvalida }"
            min="0"
            max="100"
          />
          <div class="invalid-feedback">Ingrese un valor entre 0 y 100</div>
        </div>

        <button type="submit" class="btn btn-primary w-100">Calcular</button>
      </form>

      <div
        v-if="resultado !== null"
        class="mt-4 alert text-center"
        :class="{ 'alert-success': aprobado, 'alert-danger': !aprobado }"
      >
        <p><strong>Promedio:</strong> {{ promedio.toFixed(2) }}</p>
        <p><strong>Estado:</strong> {{ aprobado ? 'Aprobado' : 'Reprobado' }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalculoView',
  data() {
    return {
      nota1: null,
      nota2: null,
      nota3: null,
      asistencia: null,
      resultado: null,
      aprobado: false
    }
  },
  computed: {
    nota1Invalida() {
      return this.nota1 === null || this.nota1 < 10 || this.nota1 > 70
    },
    nota2Invalida() {
      return this.nota2 === null || this.nota2 < 10 || this.nota2 > 70
    },
    nota3Invalida() {
      return this.nota3 === null || this.nota3 < 10 || this.nota3 > 70
    },
    asistenciaInvalida() {
      return this.asistencia === null || this.asistencia < 0 || this.asistencia > 100
    },
    promedio() {
      return (
        this.nota1 * 0.35 +
        this.nota2 * 0.35 +
        this.nota3 * 0.3
      )
    }
  },
  methods: {
    calcularPromedio() {
      if (
        this.nota1Invalida ||
        this.nota2Invalida ||
        this.nota3Invalida ||
        this.asistenciaInvalida
      ) {
        this.resultado = null
        return
      }

      this.aprobado = this.promedio >= 40 && this.asistencia >= 80
      this.resultado = true
    }
  }
}
</script>
