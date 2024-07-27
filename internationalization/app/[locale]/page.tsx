import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

export default function Home() {
  
  // server request async stuff
  const t = useTranslations("Homepage")

  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("content")}</p>
      <Link href="/about">about</Link>
    </div>
  );
}
