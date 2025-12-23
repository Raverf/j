"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from '@/components/shared/container';
import Image from 'next/image';
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";


type ProjectImg = {
    data: {
        attributes: {
            url: string;
        }
    }
}

type ProjectsAttributes = {
    id: string;
    attributes: ProjectItem
};

type ProjectItem = {
    title: string,
    description: string,
    cover: ProjectImg,
};



async function fetchProjects(): Promise<ProjectsAttributes[]> {
    const response = await axios.get("https://strapitest.ybru.ru/api/projects");
    return response.data.data;
}

const getImageUrl = (img: ProjectImg) => {
    if (!img.data.attributes.url) {
        return ' ';
    }
    const url = img.data.attributes.url;
    return `https://strapitest.ybru.ru${url}`;
};

const Projects = ({ page = 'notmain' }: { page?: string }) => {
    const router = useRouter()
    const [Projects, setProjects] = useState<ProjectsAttributes[] | null>(null);
    const Page = page

    const ButtonClicked = (id: string) => () => {
        router.push(`/Projects/${id}`);
    }

    useEffect(() => {
        fetchProjects()
            .then((data) => {
                setProjects(data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);


    if (!Projects || Projects.length === 0)
        return <Container className="py-40 min-h-screen"><div className="text-black text-6xl text-center"></div></Container>;
    return (
        <Container className="pt-40 px-5 xl:px-0 ">
            <div className="flex flex-col gap-10 w-full py-5 text-gray-800">
                <h2 className="text-5xl text-green-800">Наши коттеджи</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full gap-10 justify-items-center ">
                        {Projects.map((project) => {
                            const ProjectAttributes = project.attributes;
                            const imageUrl = getImageUrl(project.attributes.cover);

                            return (
                                <li key={project.id} className="relative">

                                    <div className="absolute top-0 left-0 p-4">
                                        <h3 className="sm:text-2xl font-bold text-lg">{ProjectAttributes.title}</h3>

                                    </div>
                                    <Button onClick={ButtonClicked(project.id)} className="absolute bottom-5 right-5 bg-green-700 px-8 font-normal py-6 text-lg sm:text-xl hover:bg-green-600 transition-all duration-300 text-white" >Подробнее</Button>
                                </li>
                            )
                        })}
                </ul>
                {Page === "main" && (
                    <Button onClick={() => {router.push("/Projects");}}
                    className="w-fit self-center-safe bg-green-700 text-lg sm:text-xl py-6 px-7 hover:bg-green-600 transition-all duration-300 text-white">
                        Все коттеджи
                    </Button>
                )}
            </div>
        </Container>
    );
};

export default Projects;