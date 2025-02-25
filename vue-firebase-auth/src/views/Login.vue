// src/views/Login.vue
<template>
  <div>
    <h2>Iniciar Sesión</h2>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Contraseña" required />
      <button type="submit">Iniciar Sesión</button>
    </form>
    <p v-if="error">{{ error }}</p>
    <p>No tienes cuenta? <router-link to="/register">Regístrate</router-link></p>
  </div>
</template>

<script>
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const error = ref(null);
    const router = useRouter();

    const login = async () => {
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value);
        router.push('/dashboard');
      } catch (err) {
        error.value = err.message;
      }
    };

    return { email, password, error, login };
  }
};
</script>

<style scoped>
div {
  max-width: 400px;
  margin: 50px auto;
  text-align: center;
}
input {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 8px;
}
button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
}
</style>