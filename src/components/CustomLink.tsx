import { IconProps, Icon } from "phosphor-react";
import { ReactNode } from "react";

interface CustomLinkProps {
  children: ReactNode;
  variant: "primary" | "secondary";
  href: string;
}

export function CustomLink({ children, variant, href }: CustomLinkProps) {
  if (variant === "secondary") {
    return (
      <a
        href={href}
        className="p-4 text-sm  flex items-center rounded font-bold uppercase gap-2 justify-center border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-gray-900 transition-colors">
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
      {children}
    </a>
  );
}
