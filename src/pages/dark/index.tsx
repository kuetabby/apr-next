import * as React from "react";
import Head from "next/head";
import { useTheme } from "next-themes";

interface Props {}

const DarkMode: React.FC<Props> = () => {
  const { theme, setTheme } = useTheme();

  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  return (
    <div className="text-center">
      <Head>
        <title>Dark mode with Tailwind and Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text:2xl">Dark mode with Tailwind and Next-themes</h1>
      <button type="button" className="button" onClick={switchTheme}>
        Change theme
      </button>
    </div>
  );
};

export default DarkMode;
