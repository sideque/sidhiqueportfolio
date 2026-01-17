import Link from "next/link";
import { buttonVariants } from "@frontend/components/ui/Button";
import Magnet from "@app/components/Magnet/Magnet";
import { SiGmail } from "react-icons/si";

export default function EmailBtn({ href }: { href: string }) {
  return (
    <Magnet padding={60} magnetStrength={6} speed={0.2}>
    <Link
      href={href}
      target="_blank"
      className={`${buttonVariants({ variant: "ghost" })} [&>svg>path]:hover:text-white hover:text-white dark:hover:text-black [&>svg>path]:dark:hover:text-black`}
    >
      <SiGmail />
      email
    </Link>
    </Magnet>
  );
}
