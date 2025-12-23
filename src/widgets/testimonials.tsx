import React from 'react';
import Container from "@/components/shared/container";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Анна и Сергей",
            text: "Мы купили коттедж год назад и ни разу не пожалели. Каждые выходные приезжаем сюда, чтобы отдохнуть от городской суеты. Дети в восторге от природы вокруг!",
            rating: 5
        },
        {
            name: "Михаил",
            text: "Идеальное место для тех, кто ценит тишину и покой. Камин, лес, чистейший воздух - что еще нужно для счастья? Очень доволен покупкой!",
            rating: 5
        },
        {
            name: "Елена",
            text: "Прекрасное место для жизни на природе. Дом очень уютный, все продумано до мелочей. Соседи замечательные, атмосфера дружелюбная. Рекомендую!",
            rating: 5
        }
    ];

    return (
        <section id="Testimonials" className="py-24 bg-green-50">
            <Container className="px-5 xl:px-0">
                <h2 className="text-5xl font-bold text-green-800 text-center mb-16">Отзывы наших клиентов</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="flex gap-1 mb-4 text-yellow-400">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                            <p className="text-green-800 font-semibold text-lg">— {testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Testimonials;



