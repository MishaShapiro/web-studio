import Layout from "@/components/layout";
import Link from "next/link";

export default function Err() {
    return (
        <div>
            404 - Страница не найдена, возврат на существующую
            <Link href="/">
                *Тык*
            </Link>
        </div>
    )
} 