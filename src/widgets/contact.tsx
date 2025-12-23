"use client"
import React, { useState } from 'react';
import Container from "@/components/shared/container";
import {Button} from "@/components/ui/button";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        alert('Спасибо за обращение! Мы свяжемся с вами в ближайшее время.');
        setFormData({ name: '', phone: '', email: '', message: '' });
    };

    return (
        <section id="Contact" className="py-24 bg-gradient-to-br from-green-700 to-emerald-800 text-white">
            <Container className="px-5 xl:px-0">
                <h2 className="text-5xl font-bold text-center mb-16">Свяжитесь с нами</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-3xl font-semibold mb-8">Контакты</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <FaPhone className="text-2xl text-green-200 mt-1" />
                                <div>
                                    <p className="text-green-200 text-sm mb-1">Телефон</p>
                                    <a href="tel:+723223222323" className="text-white text-xl hover:text-green-200 transition-colors">+7 (232) 232-22-23</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <FaEnvelope className="text-2xl text-green-200 mt-1" />
                                <div>
                                    <p className="text-green-200 text-sm mb-1">Email</p>
                                    <a href="mailto:info@cottages.ru" className="text-white text-xl hover:text-green-200 transition-colors">info@cottages.ru</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <FaMapMarkerAlt className="text-2xl text-green-200 mt-1" />
                                <div>
                                    <p className="text-green-200 text-sm mb-1">Адрес офиса</p>
                                    <p className="text-white text-xl">г. Москва, ул. Лесная, д. 15</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <FaClock className="text-2xl text-green-200 mt-1" />
                                <div>
                                    <p className="text-green-200 text-sm mb-1">Режим работы</p>
                                    <p className="text-white text-xl">Пн-Пт: 9:00 - 20:00<br />Сб-Вс: 10:00 - 18:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <input
                                type="text"
                                placeholder="Ваше имя"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-green-200 focus:outline-none focus:border-green-200"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="tel"
                                placeholder="Телефон"
                                value={formData.phone}
                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-green-200 focus:outline-none focus:border-green-200"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-green-200 focus:outline-none focus:border-green-200"
                                required
                            />
                        </div>
                        <div>
                            <textarea
                                placeholder="Сообщение"
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                                rows={5}
                                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-green-200 focus:outline-none focus:border-green-200 resize-none"
                                required
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full bg-green-600 hover:bg-green-500 text-white text-lg py-6 rounded-lg transition-colors"
                        >
                            Отправить заявку
                        </Button>
                    </form>
                </div>
            </Container>
        </section>
    );
};

export default Contact;



