import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabase = createClient('https://TU-PROYECTO.supabase.co', 'TU-CLAVE-PÚBLICA');

const { data: { user } } = await supabase.auth.getUser();
if (!user) window.location.href = 'login.html';

document.getElementById('username').textContent = user.email;
document.getElementById('created-at').textContent = new Date(user.created_at).toLocaleDateString();
