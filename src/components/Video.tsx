import { DefaultUi, Player, Youtube } from "@vime/react";
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightning,
} from "phosphor-react";
import { gql, useQuery } from "@apollo/client";

import "@vime/core/themes/default.css";
import { FeaturedLink } from "./FeaturedLink";
import { CustomLink } from "./CustomLink";

const GET_LESSON_BY_SLUG_QUERY = gql`
  query GetLessonBySlug($slug: String) {
    lesson(where: { slug: $slug }) {
      title
      videoId
      description
      teacher {
        bio
        name
        avatarURL
      }
    }
  }
`;

interface GetLessonBySlugResponse {
  lesson: {
    title: string;
    videoId: string;
    description: string;
    teacher: {
      bio: string;
      avatarURL: string;
      name: string;
    };
  };
}
interface VideoProps {
  lessonSlug: string;
}

export function Video({ lessonSlug }: VideoProps) {
  const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG_QUERY, {
    variables: {
      slug: lessonSlug,
    },
  });

  if (!data) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16 flex-col xl:flex-row">
          <div className="flex-1">
            <h1 className="text-lg md:text-2xl font-bold">
              {data.lesson.title}
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed text-sm md:text-base">
              {data.lesson.description}
            </p>
            <div className="flex items-center gap-4 mt-6">
              <img
                src={data.lesson.teacher.avatarURL}
                alt={data.lesson.teacher.name}
                className="h-16 w-16 rounded-full border-2 border-blue-500"
              />

              <div className="leading-relaxed">
                <strong className="font-bold text-lg md:text-2xl block">
                  {data.lesson.teacher.name}
                </strong>
                <span className="text-gray-200 text-sm block">
                  {data.lesson.teacher.bio}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full xl:w-fit">
            <CustomLink variant="primary" href="">
              <DiscordLogo size={24} />
              Comunidade do Discord
            </CustomLink>
            <CustomLink variant="secondary" href="">
              <Lightning size={24} />
              Acesse o desafio
            </CustomLink>
          </div>
        </div>
        <div className="gap-8 mt-20 grid grid-rows-2 xl:grid-cols-2">
          <FeaturedLink
            title="Material complementar"
            description="Acesse o material complementar para acelerar o seu desenvolvimento"
            href=""
          />

          <FeaturedLink
            title="Wallpapers exclusivos"
            description="Baixe wallpapers exclusivos o Ignite Lab e personalize a sua
                máquina"
            href=""
          />
        </div>
      </div>
    </div>
  );
}
