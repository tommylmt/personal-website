import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import Me from "@/src/components/about/Me";

export const getStaticProps = (async ({ locale }: { locale: string }) => {
  const res = await serverSideTranslations(locale, ['common']);

  if (res._nextI18Next) {
    delete res._nextI18Next.userConfig;
  }

  return {
    props: {
      ...res
    }
  };
}) satisfies GetStaticProps<{ props: object }>

export default function Home() {
  return (
    <>
      <Me />
    </>
  );
}
