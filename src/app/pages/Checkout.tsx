import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  variant?: string;
};

export function Checkout() {
  const navigate = useNavigate();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    try {
      const raw = localStorage.getItem('cart');
      const parsed = raw ? JSON.parse(raw) : [];
      setCart(parsed);
    } catch {
      setCart([]);
    }
  }, []);

  const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);

  const handleConfirm = async () => {
    if (!name || !email || !address) {
      alert('Please complete name, email and address.');
      return;
    }
    setLoading(true);
    // Mock network delay
    setTimeout(() => {
      setLoading(false);
      // Clear cart
      localStorage.removeItem('cart');
      setCart([]);
      alert(`Order placed — Total R ${total.toFixed(2)} (demo)`);
      navigate('/');
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#f4f3ef] pt-32 pb-24 flex items-start">
      <div className="max-w-4xl w-full mx-auto px-6">
        <h1 className="text-3xl md:text-4xl mb-6 text-[#2a2422] font-light">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border border-[#e6e2db] p-6 rounded">
              <h2 className="font-medium mb-4">Shipping Details</h2>
              <div className="space-y-3">
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" className="w-full p-3 border rounded" />
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full p-3 border rounded" />
                <textarea value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Shipping address" className="w-full p-3 border rounded" rows={4} />
              </div>
            </div>

            <div className="bg-white border border-[#e6e2db] p-6 rounded">
              <h2 className="font-medium mb-4">Payment</h2>
              <p className="text-sm text-[#2a2422]/60">This is a demo checkout — no payment is processed. Choose a mock payment method.</p>
              <div className="mt-4 space-y-3">
                <label className="flex items-center gap-3"><input type="radio" name="pm" defaultChecked /> Card (Demo)</label>
                <label className="flex items-center gap-3"><input type="radio" name="pm" /> EFT / Bank Transfer</label>
              </div>
            </div>
          </div>

          <aside className="bg-white border border-[#e6e2db] p-6 rounded">
            <h3 className="font-medium mb-4">Order Summary</h3>
            {cart.length === 0 ? (
              <div className="text-sm text-[#2a2422]/60">Your cart is empty.</div>
            ) : (
              <div className="space-y-4">
                {cart.map((it) => (
                  <div key={it.id} className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-sm">{it.title}</div>
                      <div className="text-xs text-[#2a2422]/60">x{it.quantity}</div>
                    </div>
                    <div>R {(it.price * it.quantity).toFixed(2)}</div>
                  </div>
                ))}

                <div className="border-t pt-3 flex items-center justify-between">
                  <div className="text-sm text-[#2a2422]/60">Total</div>
                  <div className="font-medium">R {total.toFixed(2)}</div>
                </div>

                <div className="mt-4">
                  <button onClick={handleConfirm} disabled={loading} className="w-full bg-[#2a2422] text-white py-3 rounded hover:bg-[#804a00] transition-colors">
                    {loading ? 'Processing...' : `Pay R ${total.toFixed(2)}`}
                  </button>
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
