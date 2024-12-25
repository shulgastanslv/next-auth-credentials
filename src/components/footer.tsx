import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export default function Footer() {
  return (
    <footer className="w-full flex items-center justify-center gap-2 h-24 text-center">
      <div className="gap-1 flex flex-row">
        <span className="text-default-600">Powered by</span>
        <Link
          className="flex items-center gap-1 text-primary"
          href="https://nextui.org/docs/components"
          title="nextui.org"
        >
          Next-UI
        </Link>
        <span className="text-default-600">/</span>
        <Link
          className="flex items-center gap-1"
          href="https://next-auth.js.org/"
          title="https://next-auth.js.org/"
        >
          Next-Auth
        </Link>
      </div>
      <ThemeToggle />
    </footer>
  );
}
