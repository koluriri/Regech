import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '~/components/layout/Layout';
import GoTopButton from '~/components/module/create/GoTopButton/GoTopButton';
import Card from '~/components/ui/Card/Card';
import CardHeader from '~/components/ui/CardHeader/CardHeader';
import useLocale from '~/hooks/useLocale';

const Home: NextPage = () => {
  const { t, locale } = useLocale();

  return (
    <Layout>
      <div className="container">
        <Head>
          <title>{t.PRIVACY_TITLE}</title>
          <meta property="og:image" content="https://www.regech.app/ogp.jpg" />
        </Head>

        <Card>
          <CardHeader>{t.PRIVACY_TITLE}</CardHeader>
          {locale === 'ja' && (
            <>
              <p>
                当サイトでは、サービス向上のため、Googleによるアクセス解析ツールGoogle
                Analyticsを使用しています。
                <br />
                Google
                Analyticsではデータの収集のためにCookie機能を使用しています。
                <br />
                このデータは匿名で収集されており、個人を特定するものではありません。
                <br />
                この機能はCookieを無効にすることで収集を拒否することができますので、お使いのブラウザの設定をご確認ください。
                <br />
                この規約に関しての詳細は
                <a
                  href="https://marketingplatform.google.com/about/analytics/terms/jp/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Analyticsサービス利用規約
                </a>
                のページや
                <a
                  href="https://policies.google.com/technologies/ads?hl=ja"
                  target="_blank"
                  rel="noreferrer"
                >
                  Googleポリシーと規約ページ
                </a>
                をご覧ください。
              </p>
              <p>
                その他、要望や質問、バグなどありましたら、お気軽に
                <a
                  href="//twitter.com/koluriri"
                  target="_blank"
                  rel="noreferrer"
                >
                  運営者のTwitter
                </a>
                までご連絡ください。
              </p>
            </>
          )}
          {locale !== 'ja' && (
            <>
              <p>
                This website uses Google Analytics, a traffic analysis tool
                provided by Google, to help us improve our services.
                <br />
                Google Analytics uses cookies to collect information.
                <br />
                This information is collected anonymously and does not
                personally identify you.
                <br />
                You can opt out of this feature by disabling cookies, so please
                check your browser settings.
                <br />
                For more information about this agreement, please visit the{' '}
                <a
                  href="https://marketingplatform.google.com/about/analytics/terms/jp/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Analytics Terms of Service
                </a>{' '}
                page or the{' '}
                <a
                  href="//twitter.com/koluriri"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Policies and Terms
                </a>{' '}
                page.
              </p>
              <p>
                If you have any other questions, requests, or concerns, such as
                &quot;I want to delete a post&quot; or &quot;I want to modify a
                post,&quot; please feel free to contact us at{' '}
                <a
                  href="//twitter.com/koluriri"
                  target="_blank"
                  rel="noreferrer"
                >
                  Operator&apos;s Twitter
                </a>
                .
              </p>
            </>
          )}
        </Card>
      </div>
      <GoTopButton />
    </Layout>
  );
};

export default Home;
