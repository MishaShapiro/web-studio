import { PropsWithChildren } from "react";
import Head from "next/head";
import Navigation from "./navigation";
import styles from "./layout.module.css"
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";


export default function Layout({ children }: PropsWithChildren) {
    const pathname = useRouter().pathname
     return (
    <>
        <Head>
            <>
                <title>Web Studio</title>
                <meta name="description" content="SkillFactory Next.js project" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </>
        </Head>
        
         <div className={styles.container}>
           <header className={styles.header}>
              <Link href={"/"} className={clsx(styles.logo,
                {["disabled"] : pathname === "/"})}>
                  WEBSTUDIO
              </Link>
             <div>
                <Navigation />
             </div>
           </header>
           <main className={styles.main}>{children}</main>
           <footer className={styles.footer}>&copy; 2023 Web studio</footer>
         </div>
    </>
    );
}