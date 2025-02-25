// src/composables/useAuth.js
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { ref } from 'vue';

export function useAuth() {
  const user = ref(null);

  onAuthStateChanged(auth, (currentUser) => {
    user.value = currentUser;
  });

  return { user };
}