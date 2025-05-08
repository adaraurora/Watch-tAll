import { SupabaseService } from 'SupabaseService.js';

document.getElementById('next').addEventListener('click', async () => {
  const plan = document.getElementById('plan').value;
  const email = localStorage.getItem('userEmail');

  const service = new SupabaseService();
  await service.updatePlan(email, plan);

  window.location.href = 'payment.html';
});

// register.js
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://rgwfyftscvifnqlrtsik.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJnd2Z5ZnRzY3ZpZm5xbHJ0c2lrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1Mzc4NjYsImV4cCI6MjA2MjExMzg2Nn0.myqp9bA7BBwIJhpuIOmEqHLGeXZoeFzPvd9W5YwfBxU');

async function registerUser(email, fullName) {
  const { data, error } = await supabase
    .from('users')
    .insert([{ email, full_name: fullName }]);
    
  if (error) {
    console.error('Gagal simpan user:', error);
  } else {
    console.log('User berhasil disimpan:', data);
  }

  localStorage.setItem("userEmail", "user@example.com");

}