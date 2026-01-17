import { buttonVariants } from "@frontend/components/ui/Button";
import Link from "next/link";
import Magnet from "@app/components/Magnet/Magnet";
import { FaLinkedin } from "react-icons/fa6";

export default function LinkedInBtn({
    href,
    className,
} : {
    href: string;
    className?: string;
}) {
    return (
        <Magnet padding={60} magnetStrength={6} speed={0.2}>
        <Link
        href={href}
        target="_blank"
        className={`${buttonVariants()} !bg-linkedin !border-linkedin hover:!bg-linkedin-variant hover:!border-linkedin-variant [&>svg>path]:text-white dark:[&>svg>path]:text-white dark:text-white shadow-lg shadow-slate-400 dark:shadow-slate-800 ${className}`}
        >

        <FaLinkedin />
        LinkedIn
        </Link>
        </Magnet>
    );
}