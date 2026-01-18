import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

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
    <h1>About Page</h1>
  );
}
