import BaseLayout from "@/layouts/BaseLayout";
// import { GoogleAnalytics } from "@next/third-parties/google";
// import { GOOGLE_ANALYTICS_ID } from "@/constants/AppConfig";
import { Providers } from "@/configs/providers";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "@/configs/theme";
import "@/styles/Globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="/logo/logo.png" />
        {/* <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} /> */}
      </head>
      <body suppressHydrationWarning={true}>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <BaseLayout>{children}</BaseLayout>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
