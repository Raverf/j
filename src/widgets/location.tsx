import React from 'react';
import Container from "@/components/shared/container";
import { FaMapMarkerAlt, FaMountain, FaWater, FaRoute } from "react-icons/fa";

const Location = () => {
    return (
        <section id="Location" className="py-24 bg-gradient-to-br from-green-100 to-emerald-50">
            <Container className="px-5 xl:px-0">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <h2 className="text-5xl font-bold text-green-800 mb-8">Идеальное расположение</h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <FaMapMarkerAlt className="text-3xl text-green-700 mt-1" />
                                <div>
                                    <h3 className="text-2xl font-semibold text-green-800 mb-2">Вдали от города</h3>
                                    <p className="text-gray-700 leading-relaxed">Наши коттеджи расположены в экологически чистых районах, вдали от шума и суеты мегаполиса. Идеальное место для восстановления сил и единения с природой.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <FaMountain className="text-3xl text-green-700 mt-1" />
                                <div>
                                    <h3 className="text-2xl font-semibold text-green-800 mb-2">Живописная природа</h3>
                                    <p className="text-gray-700 leading-relaxed">Окружение из вековых деревьев, чистый воздух, пение птиц и возможность наблюдать дикую природу прямо из окна.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <FaWater className="text-3xl text-green-700 mt-1" />
                                <div>
                                    <h3 className="text-2xl font-semibold text-green-800 mb-2">Близость к водоемам</h3>
                                    <p className="text-gray-700 leading-relaxed">Многие наши объекты расположены недалеко от озер и рек, что открывает возможности для рыбалки и водных развлечений.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <FaRoute className="text-3xl text-green-700 mt-1" />
                                <div>
                                    <h3 className="text-2xl font-semibold text-green-800 mb-2">Удобная транспортная доступность</h3>
                                    <p className="text-gray-700 leading-relaxed">При этом все объекты имеют хорошую транспортную доступность, что позволяет легко добраться до города при необходимости.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 bg-green-200 rounded-2xl p-8 min-h-[400px] flex items-center justify-center">
                        <p className="text-green-800 text-xl">Карта расположения коттеджей</p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Location;



