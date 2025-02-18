import Layout from "../../components/Layout/Layout";
import CheckoutHero from "../../components/Sections/Payment/CheckoutHero";
import PaymentForm from "../../components/Sections/Payment/PaymentForm";
import OwnerTrust from "../../components/Sections/Payment/OwnerTrust";

function CheckoutFinish() {

  return (
    <Layout>
      <CheckoutHero/>
      <PaymentForm/>
      <OwnerTrust/>
    </Layout>
  );
}

export default CheckoutFinish;