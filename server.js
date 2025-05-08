const express = require('express');
const midtransClient = require('midtrans-client');
const cors = require('cors');

const app = express();
app.use(cors()); // agar bisa diakses dari frontend
app.use(express.json());

// Inisialisasi Snap client Midtrans
const snap = new midtransClient.Snap({
  isProduction: false, // ganti jadi true kalau sudah live
  serverKey: 'SB-Mid-server-2VOu6v9KQ7c3gXKmJpP-dlPP',
});

// Endpoint untuk generate Snap Token
app.post('/create-snap-token', async (req, res) => {
  const { amount, customerName, email } = req.body;

  const parameter = {
    transaction_details: {
      order_id: 'ORDER-' + Date.now(),
      gross_amount: amount || 100000,
    },
    customer_details: {
      first_name: customerName || 'Guest',
      email: email || 'guest@example.com',
    },
  };

  try {
    const transaction = await snap.createTransaction(parameter);
    res.json({ token: transaction.token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});

// Update status pembayaran pengguna
async function updatePaymentStatus(email) {
  const { data, error } = await this.supabase
    .from('users')
    .update({ isPaid: true })
    .eq('email', email);
    
  if (error) throw error;
  return data;
}