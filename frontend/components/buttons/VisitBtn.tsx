import Link from "@node_modules/next/link";
import { buttonVariants } from "@frontend/components/ui/Button";
import Magnet from "@app/components/Magnet/Magnet";
import { FiExternalLink } from "react-icons/fi";

export default function VisitBtn({
  href,
  className,
}: {
  href: string;
  className?: string;
}) {
  return (
    <Magnet padding={60} magnetStrength={6} speed={0.2}>
    <Link
      id="visit-button"
      href={href}
      target="_blank"
      aria-label="Website"
      className={`${buttonVariants()} [&>svg>path]:text-white [&>svg>polyline]:text-white [&>svg>line]:text-white  dark:[&>svg>path]:text-black dark:[&>svg>polyline]:text-black dark:[&>svg>line]:text-black hover:bg-primaryvariant hover:border-primaryvariant shadow-lg ${className}`}
    >
      <FiExternalLink />
      visit
    </Link>
    </Magnet>
  );
}
