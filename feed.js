import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://TU-PROYECTO.supabase.co';
const supabaseAnonKey = 'TU-CLAVE-PÚBLICA';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Verifica si el usuario está logeado
const checkAuth = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    window.location.href = 'login.html';
  }
};

// Cerrar sesión
document.getElementById('logout-btn')?.addEventListener('click', async () => {
  await supabase.auth.signOut();
  window.location.href = 'login.html';
});

// Cargar feed (aquí puedes usar una tabla "posts" en Supabase)
const loadFeed = async () => {
  const { data, error } = await supabase.from('posts').select('*').order('created_at', { ascending: false });
  if (error) console.error(error);
  else {
    const feedEl = document.getElementById('feed');
    feedEl.innerHTML = data.map(post => `
      <div class="post">
        <p>${post.content}</p>
        <small>Por: ${post.user_id}</small>
      </div>
    `).join('');
  }
};

// Ejecutar
checkAuth();
loadFeed();
