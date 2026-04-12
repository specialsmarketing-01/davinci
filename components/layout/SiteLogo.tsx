import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type Props = {
  /** Use on dark backgrounds (e.g. footer): lightens typical dark logos for contrast */
  forDarkBackground?: boolean;
  className?: string;
  /** When true, parent handles navigation (e.g. mobile menu close) */
  onNavigate?: () => void;
};

export function SiteLogo({ forDarkBackground = false, className, onNavigate }: Props) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center", className)}
      onClick={onNavigate}
    >
      <Image
        src="/Davinci-properties-logo.png"
        alt="Davinci Properties"
        width={280}
        height={78}
        priority
        className={cn(
          "h-[2.8rem] w-auto sm:h-[3.15rem]",
          forDarkBackground && "brightness-0 invert",
        )}
        sizes="(max-width: 640px) 224px, 280px"
      />
    </Link>
  );
}
