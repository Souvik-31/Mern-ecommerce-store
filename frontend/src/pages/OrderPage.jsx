import React, { useEffect, useState } from "react";
import axios from "axios";

const OrderPage = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await axios.get("/api/orders/my-orders", { withCredentials: true });
                setOrders(res.data);
            } catch (err) {
                setOrders([]);
            } finally {
                setLoading(false);
            }
        };
        fetchOrders();
    }, []);

    if (loading) return <div className="p-8">Loading...</div>;

    return (
        <div className="max-w-3xl mx-auto p-8">
            <h2 className="text-2xl font-bold mb-6">My Orders</h2>
            {orders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                orders.map(order => (
                    <div key={order._id} className="mb-8 border-b border-gray-700 pb-4">
                        <div className="mb-2 text-sm text-gray-400">
                            Ordered on: {new Date(order.createdAt).toLocaleString()}
                        </div>
                        <ul>
                            {order.products.map(item => (
                                <li key={item._id} className="mb-2 flex items-center gap-4">
                                    {item.product?.image && (
                                        <img
                                            src={item.product.image}
                                            alt={item.product.name}
                                            className="w-12 h-12 object-cover rounded"
                                        />
                                    )}
                                    <span className="font-semibold">{item.product?.name || "Product deleted"}</span>
                                    <span>x{item.quantity}</span>
                                    <span className="text-cyan-400">${item.price}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="font-bold mt-2">Total: ${order.totalAmount}</div>
                    </div>
                ))
            )}
        </div>
    );
};

export default OrderPage;