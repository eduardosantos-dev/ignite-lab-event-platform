import { CaretRight, FileArrowDown } from "phosphor-react";

interface FeaturedLinkProps {
  title: string;
  description: string;
  href: string;
}

export function FeaturedLink({ title, description, href }: FeaturedLinkProps) {
  return (
    <a
      href={href}
      className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
      <div className="bg-green-700 h-full p-6 flex items-center">
        <FileArrowDown size={40} />
      </div>
      <div className="py-6 leading-relaxed flex-1">
        <strong className="text-lg md:text-2xl leading-relaxed">{title}</strong>
        <p className="text-xs md:text-sm text-gray-200 mt-2">{description}</p>
      </div>
      <div className="h-full p-6 flex items-center">
        <CaretRight size={24} />
      </div>
    </a>
  );
}
