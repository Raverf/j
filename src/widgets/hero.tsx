"use client"
import React from 'react';
import Container from "@/components/shared/container";
import {Button} from "@/components/ui/button";
import { FaTelegramPlane } from "react-icons/fa";


const Hero = () => {
    return (
        <div className="w-full backdrop-blur-2xl bg-gradient-to-br from-green-700 via-green-600 to-emerald-700 object-cover bg-no-repeat min-h-screen">
            <Container className="py-40 md:py-52 text-white flex flex-col gap-24 w-full px-5 xl:px-0">
                <h1 className="text-3xl md:text-6xl text-white font-bold"> Лесные <span className="text-green-200">коттеджи</span> для <span className="text-emerald-200">вашего</span> отдыха</h1>
                <div className="flex flex-col sm:flex-row lg:items-center gap-5 xl:gap-48">
                    <p className="max-w-lg text-sm sm:text-lg text-green-50 font-medium">Уютные коттеджи в окружении природы. Идеальное место для отдыха от городской суеты, где каждый день начинается с пения птиц и заканчивается у камина.</p>
                    <Button 
                        variant={"link"} 
                        className={"hover:no-underline text-lg border-green-200 border-2 py-8 px-5 rounded-2xl md:text-2xl text-green-100 bg-green-800/30 hover:bg-green-700/50"} 
                        onClick={() => window.open('https://t.me/your_telegram', '_blank')}
                    >
                        Связаться с нами <FaTelegramPlane size={20} /> 
                    </Button>
                </div>
            </Container>
        </div>
    );
};

export default Hero;