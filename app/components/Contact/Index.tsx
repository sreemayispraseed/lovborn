
"use client";
import Herotxt from "../Hero-txt";
import Contactus from "./Contactus";
export default function Index() {
    return (
        <>
         <Herotxt
        title="Contact Us"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
        />
<Contactus/>
        </>
    );
}