"use client"
import React from 'react';
import Container from "@/components/shared/container";
import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import NavMenu from "@/widgets/header/nav-menu";
import {MENU_DATA} from "@/data/menu.data";

const Footer = () => {
    return (
        <footer className="bg-green-900 p-5 text-white">
            <Container>
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 justify-between w-full ">
                    <div className="flex flex-col gap-10 order-1">
                        <Image src="/static/Logo_footer.svg" alt="Logo" width={100} height={50}/>
                        <p className="max-w-80 text-lg text-green-100">Мы предлагаем эксклюзивные лесные коттеджи для тех, кто ценит уединение, природу и комфорт. Каждый дом - это уникальное пространство для жизни и отдыха.</p>
                    </div>

                    <div className="flex flex-col gap-5 md:order-3 order-2">
                        <h3 className="text-2xl ">Информация</h3>
                        <nav className="w-full">
                            <menu className=" flex flex-col  gap-y-1.5 w-full  text-lg ">
                                {MENU_DATA.map((item, index) => (
                                    <li key={index}>
                                        <Link href={item.href} className="hover:text-green-300 transition-all duration-300 text-green-100">{item.label}</Link>
                                    </li>
                                ))}
                            </menu>
                        </nav>
                    </div>
                    <div className="flex flex-col text-2xl gap-2 md-order-2 order-3">
                        <Link href="mailto:info@cottages.ru" className="hover:text-green-300 transition-all duration-300 text-green-100">info@cottages.ru</Link>
                        <Link href="tel:+723223222323" className="hover:text-green-300 transition-all duration-300 text-green-100">+7 232 2322 23 23</Link>
                    </div>
                    <div className="order-4">
                        <Button className="text-2xl bg-transparent hover:bg-green-800 border-2 rounded-4xl font-normal border-green-300 py-8 px-6 text-white" onClick={() => window.location.href = 'mailto:info@cottages.ru'}>Связаться с нами</Button>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;