import { useEffect, useState } from "react";
import OrdersAdmin from "../components/OrdersAdmin/OrdersAdmin";

export default function Orders() {
  const [ordenes, setOrdenes] = useState([]);

  useEffect(() => {
    fetch("https://pf-30b-backend-production.up.railway.app/orders/getAll", { method: "GET" })
      .then((answer) => answer.json())
      .then((data) => setOrdenes(data.filter((x) => !x.despachada && x.payment_status === "approved")));
  }, []);

  return (
    <div>
      {ordenes?.map((x) => (
        <OrdersAdmin key={x.id} data={x} />
      ))}
    </div>
  );
}