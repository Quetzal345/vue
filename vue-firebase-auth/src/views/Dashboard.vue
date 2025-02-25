// src/views/Dashboard.vue
<template>
  <div>
    <h2>Bienvenido al Dashboard</h2>
    <p>Usuario: {{ user?.email || 'Cargando...' }}</p>
    <button @click="logout">Cerrar Sesión</button>
  </div>
</template>

<script>
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useRouter } from 'vue-router';
import { useAuth } from '../composables/useAuth';

export default {
  setup() {
    const router = useRouter();
    const { user } = useAuth();

    const logout = async () => {
      await signOut(auth);
      router.push('/login');
    };

    return { user, logout };
  }
};
</script>

<style scoped>
div {
  max-width: 400px;
  margin: 50px auto;
  text-align: center;
}
button {
  padding: 10px 20px;
  background-color: #ff4444;
  color: white;
  border: none;
  cursor: pointer;
}
</style>