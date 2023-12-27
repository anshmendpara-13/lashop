// import React, { useContext } from 'react'
import HeroSection from './component/HeroSection'
import { useProductContext } from './context/productcontext';
// import { AppContext } from './context/productcontext';

const About = () => {

    const { myName } = useProductContext();

    const data = {
        name: "LA Ecommerce",
    }

    return (
        <>
            {myName}
            <HeroSection myData={data} />
        </>);
}

export default About