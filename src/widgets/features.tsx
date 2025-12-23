import React from 'react';
import Container from "@/components/shared/container";
import { FaTree, FaHome, FaFire, FaCar, FaWifi, FaSnowflake } from "react-icons/fa";

const Features = () => {
    const features = [
        {
            icon: <FaTree className="text-5xl text-green-700" />,
            title: "В окружении леса",
            description: "Каждый коттедж расположен в живописном лесном массиве, где природа становится частью вашего дома."
        },
        {
            icon: <FaHome className="text-5xl text-green-700" />,
            title: "Уютные интерьеры",
            description: "Просторные комнаты с каминами, панорамными окнами и современным оборудованием для комфортного проживания."
        },
        {
            icon: <FaFire className="text-5xl text-green-700" />,
            title: "Камины в каждом доме",
            description: "Настоящие камины создают атмосферу уюта и тепла в холодные вечера."
        },
        {
            icon: <FaCar className="text-5xl text-green-700" />,
            title: "Удобный подъезд",
            description: "Хорошие дороги и парковочные места для вашего комфорта."
        },
        {
            icon: <FaWifi className="text-5xl text-green-700" />,
            title: "Современные коммуникации",
            description: "Высокоскоростной интернет и все необходимые коммуникации для современной жизни."
        },
        {
            icon: <FaSnowflake className="text-5xl text-green-700" />,
            title: "Круглогодичное проживание",
            description: "Дома оборудованы для комфортного проживания в любое время года."
        }
    ];

    return (
        <section id="Features" className="py-24 bg-white">
            <Container className="px-5 xl:px-0">
                <h2 className="text-5xl font-bold text-green-800 text-center mb-16">Преимущества наших коттеджей</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl bg-green-50 hover:bg-green-100 transition-all duration-300">
                            <div className="mb-4">{feature.icon}</div>
                            <h3 className="text-2xl font-bold text-green-800 mb-3">{feature.title}</h3>
                            <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Features;



