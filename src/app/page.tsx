import React from 'react';
import Hero from "@/widgets/hero";
import About from "@/widgets/about";
import Features from "@/widgets/features";
import Projects from "@/widgets/projects";
import Location from "@/widgets/location";
import Gallery from "@/widgets/gallery";
import Articles from "@/widgets/articles";
import Testimonials from "@/widgets/testimonials";
import Jobs from "@/widgets/Jobs";
import Contact from "@/widgets/contact";



const Page = () => {

    return (
        <div className="w-full flex flex-col ">
            <Hero/>
            <About />
            <Features />
            <Location />
            <Gallery />
            <Articles page={"main"}/>
            <Testimonials />
            <Jobs/>
            <Contact />
        </div>
    );
};

export default Page;