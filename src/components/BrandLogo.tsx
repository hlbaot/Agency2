import Image from "next/image";
import Link from "next/link";
import fullLogo from "../../logo/logo shortpro-03.png";

type BrandLogoProps = {
  href?: string;
  className?: string;
  imageClassName?: string;
};

export default function BrandLogo({
  href = "/",
  className = "",
  imageClassName = "",
}: BrandLogoProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center transition-transform duration-300 hover:scale-[1.02] ${className}`.trim()}
      aria-label="SHORT PRO."
    >
      <Image
        src={fullLogo}
        alt="SHORT PRO."
        priority
        className={`h-auto w-[108px] sm:w-[124px] ${imageClassName}`.trim()}
      />
    </Link>
  );
}
