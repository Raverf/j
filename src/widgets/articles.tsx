"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from '@/components/shared/container';
import Image from 'next/image';
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import { ARTICLES_DATA } from "@/data/articles.data";


type ArticleImg = {
    data: {
        attributes: {
            url: string;
        }
    }
}

type ArticleAttributes = {
    title: string,
    description: string,
    content: string,
    cover: ArticleImg,
};

type ArticleItem = {
    id: number;
    attributes: ArticleAttributes;
};


const staticArticles: ArticleItem[] = ARTICLES_DATA.map(article => ({
    id: article.id,
    attributes: article.attributes
}));

async function fetchArticles(): Promise<ArticleItem[]> {
    try {
        const response = await axios.get("https://strapitest.ybru.ru/api/articles");
        return response.data.data;
    } catch (error) {
        console.error("Ошибка при загрузке статей:", error);
        return staticArticles;
    }
}

const getImageUrl = (img: ArticleImg) => {
    if (!img || !img.data || !img.data.attributes || !img.data.attributes.url) {

        return 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop';
    }
    const url = img.data.attributes.url;

    if (url.startsWith('/')) {
        return `https://strapitest.ybru.ru${url}`;
    }

    if (url.startsWith('http')) {
        return url;
    }
    return url;
};

const Articles = ({ page = 'notmain' }: { page?: string }) => {
    const Page = page
    const [articles, setArticles] = useState<ArticleItem[] | null>(null);
    const router = useRouter();

    useEffect(() => {

        setArticles(staticArticles);
    }, []);


    if (!articles || articles.length === 0)
        return <Container className="py-40 min-h-screen"><div className="text-green-800 text-6xl text-center">Статьи скоро появятся</div></Container>;

    return (
        <Container className="">
            <div className="items-center flex flex-col justify-center w-full py-5 mt-30" >
                {Page === "main" && (
                    <h2 className="text-5xl text-green-800 my-16">Полезные статьи о коттеджах</h2>
                )}
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6 justify-items-center items-stretch">
                    {articles.map((article) => {
                        const imageUrl = getImageUrl(article.attributes.cover);

                        return (

                            <li key={article.id} className="w-full flex flex-col ">
                                <div className="w-full bg-green-800 rounded-b-2xl p-5 flex flex-col gap-4">
                                    <h2 className="text-xl font-bold text-white ">
                                        {article.attributes.title}
                                    </h2>
                                    <p className="text-sm text-gray-200 ">
                                        {article.attributes.description}
                                    </p>
                                    <Link href={`/Articles/${article.id}`} className="px-5 py-3 bg-green-700 rounded-2xl w-fit transition-all duration-300 hover:bg-green-600 text-white">Подробнее</Link>
                                </div>
                            </li>
                        );
                    })}
                </ul>
                {Page === "main" && (
                <Button onClick={() => {router.push("/Articles");}}
                        className="w-fit bg-green-700 text-xl py-6 px-7 mt-10 hover:bg-green-600 transition-all duration-300 text-white">
                    Все статьи
                </Button>
                )}
            </div>
        </Container>
    );
};

export default Articles;