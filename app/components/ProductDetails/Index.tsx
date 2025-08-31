
"use client";
import Herotxt from "../Hero-txt";
import ProductsDetailedsec from "./ProductsDetailedsec";
export default function Index() {
    
    return (
        <>
        <Herotxt
        title="Classic Vanilla"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products" },
          { label: "Classic Vanilla" }
        ]}
        />
        <ProductsDetailedsec/>
        </>
    )
}