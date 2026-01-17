import { buttonVariants } from "@frontend/components/ui/Button";
import Magnet from "@app/components/Magnet/Magnet";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

export default function GitHubBtn({
  href,
  className,
}: {
  href: string;
  className?: string;
}) {
  return (
    <Magnet padding={60} magnetStrength={6} speed={0.2}>
      <Link
        href={href}
        target="_blank"
        className={`${buttonVariants()} !bg-github ...`}
      >
        <FaGithub />
        GitHub
      </Link>
    </Magnet>
  );
}
