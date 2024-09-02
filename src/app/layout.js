import BaseLayout from "@/layouts/BaseLayout";
// import { GoogleAnalytics } from "@next/third-parties/google";
// import { GOOGLE_ANALYTICS_ID } from "@/constants/AppConfig";
import { Providers } from "@/configs/providers";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "@/configs/theme";
import "@/styles/Globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="/images/LOGO/timedle-logo.png" />
        {/* <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} /> */}
      </head>
      <body suppressHydrationWarning={true}>
        <Providers>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <BaseLayout>{children}</BaseLayout>
        </Providers>
      </body>
    </html>
  );
}
