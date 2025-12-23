"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from '@/components/shared/container';
import Image from 'next/image';
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {md} from "@/components/shared/renderclases";





type JobsAttributes = {
    id: string;
    attributes: JobsItem
};

type JobsItem = {
    title: string,
    time: string,
    isDisabled: boolean,
    seoDescription: string
    slug: string
    content: string
};


const staticJobs: JobsAttributes[] = [
    {
        id: "1",
        attributes: {
            title: "Менеджер по продажам",
            time: "Полная занятость",
            isDisabled: false,
            seoDescription: "Менеджер по продажам лесных коттеджей",
            slug: "sales-manager",
            content: `## Обязанности:

- **Консультирование клиентов** по вопросам покупки лесных коттеджей
- **Проведение презентаций** объектов недвижимости
- **Ведение переговоров** с потенциальными покупателями
- **Организация просмотров** коттеджей
- **Работа с документацией** и оформление сделок
- **Ведение клиентской базы** в CRM-системе
- **Активный поиск** новых клиентов через различные каналы
- **Участие в маркетинговых мероприятиях** и выставках

## Требования:

- Опыт работы в продажах недвижимости от 2 лет
- Знание рынка загородной недвижимости
- Умение работать с возражениями клиентов
- Навыки ведения переговоров
- Грамотная устная и письменная речь
- Презентабельный внешний вид
- Наличие водительских прав категории B
- Готовность к командировкам

## Условия:

- Официальное трудоустройство
- Конкурентная заработная плата (оклад + проценты от продаж)
- Обучение и развитие профессиональных навыков
- Комфортный офис в центре города
- Корпоративный транспорт для выездов к объектам
- Дружный коллектив профессионалов

## Мы предлагаем:

- Стабильный доход с возможностью роста
- Интересные проекты и уникальные объекты
- Профессиональное развитие в сфере недвижимости
- Работа в динамично развивающейся компании`
        }
    },
    {
        id: "2",
        attributes: {
            title: "Строитель коттеджей",
            time: "Полная занятость",
            isDisabled: false,
            seoDescription: "Строитель лесных коттеджей",
            slug: "cottage-builder",
            content: `## Обязанности:

- **Строительство и отделка** лесных коттеджей из дерева
- **Работа с различными материалами**: брус, бревно, каркасные конструкции
- **Монтаж кровли** и фасадных работ
- **Установка окон и дверей**
- **Внутренняя отделка**: укладка полов, монтаж перегородок, отделка стен
- **Установка инженерных систем**: отопление, водоснабжение, электрика
- **Работа с инструментом**: ручной и электроинструмент
- **Соблюдение технологий** строительства и техники безопасности
- **Контроль качества** выполняемых работ

## Требования:

- Опыт работы в строительстве от 3 лет
- Знание технологий деревянного домостроения
- Умение читать чертежи и техническую документацию
- Навыки работы с различными строительными материалами
- Физическая выносливость и готовность к работе на открытом воздухе
- Ответственность и аккуратность
- Опыт работы с электро- и ручным инструментом
- Знание правил техники безопасности

## Условия:

- Официальное трудоустройство
- Стабильная заработная плата
- Работа на объектах в живописных лесных районах
- Предоставление инструмента и спецодежды
- Компенсация питания
- Возможность профессионального роста
- Работа в команде опытных специалистов

## Мы предлагаем:

- Интересные проекты в экологически чистых районах
- Работа с качественными материалами
- Стабильный график работы
- Возможность участвовать в создании уникальных объектов
- Профессиональное развитие в сфере деревянного домостроения`
        }
    }
];

const Jobs = () => {
    const router = useRouter()
    const [Jobs, setJobs] = useState<JobsAttributes[] | null>(null);

    const ButtonClicked = (id: string) => {
        router.push(`/Jobs/${id}`);
    }

    useEffect(() => {

        setJobs(staticJobs);
    }, []);


    if (!Jobs || Jobs.length === 0)
        return <Container className="py-40 min-h-screen"><div className="text-black text-6xl text-center"></div></Container>;

    return (
        <Container className="py-40 px-2 sm:px-5 xl:px-0 ">
            <div className="flex flex-col gap-10 w-full py-5 text-gray-800">
                <h2 className="text-5xl text-green-800">Карьера</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full gap-10 justify-items-center items-stretch">
                    {Jobs.map((Job) => {
                        const JobAttributes = Job.attributes
                        const markdownContent = JobAttributes.content
                        const result = md.render(markdownContent);
                        return (
                            <li key={Job.id} className="text-gray-800 shadow-2xl p-8 flex flex-col w-full justify-baseline bg-green-50 rounded-2xl border-2 border-green-200">
                                <h2 className="text-4xl font-medium">{JobAttributes.title}</h2>
                                <div className="flex flex-col  gap-5 h-full justify-between">
                                    <div dangerouslySetInnerHTML={{ __html: result }} />
                                    <Link className="text-2xl px-7 py-4 bg-green-700 text-white rounded-2xl mt-5 mb-10 w-fit hover:bg-green-600 transition-all duration-300" href={`mailto:info@cottages.ru?subject=Отклик на вакансию: ${encodeURIComponent(JobAttributes.title)}`}>Связаться </Link>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </Container>
    );
};

export default Jobs;