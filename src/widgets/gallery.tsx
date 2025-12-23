"use client"
import React, { useState } from 'react';
import Container from "@/components/shared/container";
import Image from 'next/image';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    

    const galleryImages = [
        { id: 1, title: "Внешний вид коттеджа", placeholder: "Коттедж 1" },
        { id: 2, title: "Гостиная с камином", placeholder: "Интерьер 1" },
        { id: 3, title: "Спальня", placeholder: "Интерьер 2" },
        { id: 4, title: "Кухня", placeholder: "Интерьер 3" },
        { id: 5, title: "Терраса", placeholder: "Терраса" },
        { id: 6, title: "Лесной пейзаж", placeholder: "Природа" },
    ];

    return (
        <section id="Gallery" className="py-24 bg-white">
            <Container className="px-5 xl:px-0">
                <h2 className="text-5xl font-bold text-green-800 text-center mb-16">Галерея</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((image, index) => (
                        <div 
                            key={image.id} 
                            className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-green-200 to-emerald-300 cursor-pointer hover:scale-105 transition-transform duration-300"
                            onClick={() => setSelectedImage(index)}
                        >
                            <div className="absolute inset-0 flex items-center justify-center">
                                <p className="text-green-800 text-xl font-semibold">{image.placeholder}</p>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                                <p className="text-sm">{image.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Gallery;



