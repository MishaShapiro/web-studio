import Link from 'next/link';
import styles from "./navigation.module.css"
import clsx from 'clsx';
import { useRouter } from 'next/router';

    export default function Navigation() {

        const pathname = useRouter().pathname;

        return (
          <div className={styles.container}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Link href="/" className={clsx({["disabled"] : pathname === "/"})}>
                  Главная
                </Link>
              </li>
              <li className={styles.item}>
                <Link href="/about" className={clsx({["disabled"] : pathname === "/about"})}>
                  О компании
                </Link>
              </li>
              <li className={styles.item}>
                <Link href="/portfolio" className={clsx({["disabled"] : pathname === "/portfolio"})}>
                  Портфолио
                </Link>
              </li>
              <li className={styles.item}>
                <Link href="/contacts" className={clsx({["disabled"] : pathname === "/contacts"})}>
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
        );
    }