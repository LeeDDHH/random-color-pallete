import { NextSeo } from 'next-seo'

const HeadComponent = () => {
  return (
    <NextSeo
      title="Random Color Pallete"
      description="ランダム生成のカラーパレット"
      canonical="https://random-color-pallete.expfrom.me/"
      openGraph={{
        locale: 'ja_JP',
        type: 'website',
        title: 'Random Color Pallete',
        description: 'ランダム生成のカラーパレット',
        url: 'https://random-color-pallete.expfrom.me/',
        site_name: 'Random Color Pallete',
        images: [
          {
            url: 'https://random-color-pallete.expfrom.me/images/og/ogp_image.png',
            width: 1230,
            height: 620,
            alt: 'Og Image Alt RCP'
          }
        ]
      }}
      twitter={{
        handle: '@camomile_cafe',
        site: '@camomile_cafe',
        cardType: 'summary_large_image'
      }}
      additionalMetaTags={[
        {
          name: 'mobile-web-app-capable',
          content: 'yes'
        },
        {
          name: 'apple-mobile-web-app-capable',
          content: 'yes'
        },
        {
          name: 'application-name',
          content: 'RCP'
        },
        {
          name: 'apple-mobile-web-app-title',
          content: 'RCP'
        },
        {
          name: 'msapplication-starturl',
          content: '/'
        }
      ]}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: '/favicon.ico',
        },
        {
          rel: 'apple-touch-icon',
          href: '/apple-touch-icon.png',
          sizes: '180x180'
        },
        {
          rel: 'manifest',
          href: '/manifest.json'
        }
      ]}
    />
  )
}

export default HeadComponent
