import { notFound } from 'next/navigation';
import Container from '@/components/shared/container';
import Image from 'next/image';
import { md } from "@/components/shared/renderclases"



type ProjectImgProps = {
    data: {
        attributes: {
            url: string;
        }
    };
}
type ProjectItemProps = {
    cover: ProjectImgProps,
    title: string;
    description: string;
    createdAt: string;
    content: string;
}

export default async function ProjectPage({params}: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const res = await fetch(
        `https://strapitest.ybru.ru/api/projects/${id}`,
        { cache: 'no-store' }
    );

    if (!res.ok) notFound();

    const { data } = await res.json();

    if (!data) notFound();

    const ProjectItem: ProjectItemProps = data.attributes;
    const ProjectImg = ProjectItem.cover.data.attributes.url;
    const imageUrl = `https://strapitest.ybru.ru${ProjectImg}`

    const markdownContent = ProjectItem.content
    const result = md.render(markdownContent);



    return (
        <div className="py-30">
            <Container className="w-full px-2 sm:px-6 md:px-14 lg:px-24 text-black">
                <div className="w-full mx-auto py-10">
                    <div className=" w-full h-auto rounded-xl overflow-hidden">
                        <Image
                            src={imageUrl}
                            alt={ProjectItem.title}
                            width={1200}
                            height={600}
                            className="object-cover w-full h-full mb-10 max-h-[600]"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                    <h1 className="text-4xl font-bold mb-4">{ProjectItem.title}</h1>
                    <p className="text-gray-600 mb-6  ">{ProjectItem.description}</p>

                    <div
                        className="text-black   shadow-2xl bg-gray-100 p-10 pt-2 rounded-2xl"
                        dangerouslySetInnerHTML={{ __html: result }}
                    />
                </div>
            </Container>
        </div>
    );
}

export async function generateStaticParams() {
    try {
        const res = await fetch('https://strapitest.ybru.ru/api/projects', { cache: 'no-store' });
        if (!res.ok) return [];
        const { data } = await res.json();
        return data.map((project: any) => ({
            id: project.id.toString(),
        }));
    } catch {
        return [];
    }
}