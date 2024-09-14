import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function NotFoundPage() {
  const t = useTranslations("not-found-page");
  return (
    <div className="flex h-screen flex-col items-center justify-center lg:flex-row">
      <Image
        src="/assets/images/landing/en/what-is-this.png"
        alt="404"
        width={400}
        height={400}
      />

      <div>
        <h1 className="text-2xl font-bold lg:text-4xl">{t("title")}</h1>

        <Link
          href="/"
          className="mt-4 inline-block border-2 border-white px-4 py-2 text-primary transition-all hover:bg-white hover:text-background"
        >
          {t("back-to-home")}
        </Link>
      </div>
    </div>
  );
}
