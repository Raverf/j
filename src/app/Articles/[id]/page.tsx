import { notFound } from 'next/navigation';
import Container from '@/components/shared/container';
import Image from 'next/image';
import { md } from "@/components/shared/renderclases"
import { ARTICLES_DATA } from "@/data/articles.data";



type ArticlesImgProps = {
    id: number;
    data: {
        attributes: {
            url: string;
        }
    };
}
type ArticleItemProps = {
    cover: ArticlesImgProps,
    title: string;
    description: string;
    createdAt: string;
    content: string;
}

export default async function ArticlePage({params}: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    // Ищем статью в статичных данных
    const article = ARTICLES_DATA.find(a => a.id.toString() === id);
    
    if (!article) {
        // Если не найдено в статичных данных, пытаемся загрузить из API
        try {
            const res = await fetch(
                `https://strapitest.ybru.ru/api/articles/${id}`,
                { cache: 'no-store' }
            );

            if (!res.ok) notFound();

            const { data } = await res.json();

            if (!data) notFound();

            const ArticleItem: ArticleItemProps = data.attributes;
            const ArticleImg = ArticleItem.cover.data.attributes.url;
            const imageUrl = ArticleImg.startsWith('http') ? ArticleImg : `https://strapitest.ybru.ru${ArticleImg}`;
            const markdownContent = ArticleItem.content;
            const result = md.render(markdownContent);

            return (
                <div className="py-30">
                    <Container className="w-full px-2 sm:px-6 md:px-14 lg:px-24">
                        <div className="w-full mx-auto py-10">


                            <div
                                className="text-black bg-white "
                                dangerouslySetInnerHTML={{ __html: result }}
                            />
                        </div>
                    </Container>
                </div>
            );
        } catch {
            notFound();
        }
    }

    const ArticleItem = article.attributes;
    const ArticleImg = ArticleItem.cover.data.attributes.url;
    const imageUrl = ArticleImg.startsWith('http') ? ArticleImg : `https://strapitest.ybru.ru${ArticleImg}`;
    const markdownContent = ArticleItem.content;
    const result = md.render(markdownContent);



    return (
        <div className="py-30">
            <Container className="w-full px-2 sm:px-6 md:px-14 lg:px-24">
                <div className="w-full mx-auto py-10">
                    <div className="shadow-2xl px-5 py-2 rounded-2xl bg-gray-100">
                        <h1 className="text-3xl text-black font-bold mb-4">{ArticleItem.title}</h1>
                        <p className="text-gray-600 mb-6">{ArticleItem.description}</p>
                    </div>


                    <div
                        className="text-black bg-white "
                        dangerouslySetInnerHTML={{ __html: result }}
                    />
                </div>
            </Container>
        </div>
    );
}




export async function generateStaticParams() {
    // Используем статичные статьи
    return ARTICLES_DATA.map((article) => ({
        id: article.id.toString(),
    }));
}