import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <SectionTitle title="please process the" heading="Payment" />
            <div className="lg:mx-40 m-auto lg:px-20">
                <Elements stripe={stripePromise}>
                    <CheckOutForm cart={cart} price={price} />
                </Elements>
            </div>
        </div>

    );
};

export default Payment;