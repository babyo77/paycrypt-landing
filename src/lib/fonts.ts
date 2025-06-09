import localFont from "next/font/local";

export const aeonikPro = localFont({
  src: [
    {
      path: "../../fonts/AeonikProTRIAL-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../fonts/AeonikProTRIAL-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../fonts/AeonikProTRIAL-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/AeonikProTRIAL-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../fonts/AeonikProTRIAL-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../fonts/AeonikProTRIAL-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-aeonik-pro",
});
