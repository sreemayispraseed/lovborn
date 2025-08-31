import Herotxt from "../Hero-txt"
import FreshFinds from "../Home/FreshFinds";
import CaringPasio from "../Products/CaringPasio";
import CustomerReviews from "../Home/CustomerReviews";
export default function Index() {
    
    return (
        <>

<Herotxt
title="Explore Our Soap Collection"
breadcrumbs={[
  { label: "Home", href: "/" },
  { label: "Products" }
]}
/>
<FreshFinds  bgColor="bg-white"/>
<CaringPasio/>
<CustomerReviews/>
        </>
    )
    
};