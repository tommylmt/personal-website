import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {GetServerSideProps} from "next";
import {Props} from "next/script";

export async function getServerSideProps({ locale }): GetServerSideProps<Props> {
  const res = await serverSideTranslations(locale, ['common']);

  if (res._nextI18Next) {
    delete res._nextI18Next.userConfig;
  }

  return {
    props: {
      ...res
    }
  };
}

export default function Home() {
  return (
    <h1>About Page</h1>
  );
}
