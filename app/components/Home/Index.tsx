import React from 'react';
import Hero from '../Hero';
import SecondSec from './SecondSec';
import FreshFinds from './FreshFinds';
import AwakenGlow from './AwakenGlow';
import ProductHighlights from './ProductHighlights';
import CustomerReviews from './CustomerReviews';

const Home: React.FC = () => {
    return (
        <>
    
            <Hero />
            <SecondSec />
            <FreshFinds />
            <AwakenGlow />
            <ProductHighlights />
            <CustomerReviews />

        </>   
        
    );
};

export default Home;