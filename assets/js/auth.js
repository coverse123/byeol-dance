// Reemplaza con tus credenciales de Supabase
const supabaseUrl = 'https://TU-PROYECTO.supabase.co';
const supabaseAnonKey = 'TU-CLAVE-PÚBLICA';

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Registro
document.getElementById('register-btn')?.addEventListener('click', async () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) {
    alert('Error: ' + error.message);
  } else {
    alert('¡Cuenta creada! Revisa tu correo para confirmar.');
    window.location.href = 'login.html';
  }
});

// Inicio de sesión
document.getElementById('login-btn')?.addEventListener('click', async () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    alert('Error: ' + error.message);
  } else {
    window.location.href = 'index.html';
  }
});
