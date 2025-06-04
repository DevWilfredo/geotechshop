import { useAuth } from "../../context/AuthContext";

const CheckoutButton = ({ items }) => {
  const {user} =  useAuth();
  const handleCheckout = async () => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/api/v1/checkout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items, userId:user.id }),
    });

    const data = await response.json();
    if (data.url) {
      window.location.href = data.url;
    }
  };

  return <button className="btn btn-primary" onClick={handleCheckout}>Pagar con Stripe</button>;
};

export default CheckoutButton;
