import React from 'react';
import Container from "@/components/shared/container";

const About = () => {
    return (
        <section id="About" className="text-gray-800 pt-24 bg-green-50">
            <Container className="flex flex-col md:flex-row gap-10 md:gap-30 px-5 justify-center py-16">
                <h2 className="text-4xl whitespace-nowrap self-center-safe text-green-800" >О Нас</h2>
                <p className="max-w-5xl text-lg leading-relaxed">Мы специализируемся на продаже эксклюзивных лесных коттеджей в живописных уголках природы. Каждый наш дом построен с любовью к природе и вниманием к деталям. Мы предлагаем не просто недвижимость, а возможность обрести свой уголок спокойствия и гармонии в окружении вековых деревьев и чистого воздуха.

                </p>
            </Container>
        </section>
    );
};

export default About;