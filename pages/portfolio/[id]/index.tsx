import { PortfolioItem } from "@/pages/portfolio";
import Layout from "@/components/layout";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { PHOTOS_API_URL } from "@/pages/portfolio";

interface ItemProps {
    portfolioItem: PortfolioItem;
}

export async function getServerSideProps({ params }) {
    const url = `${PHOTOS_API_URL}${params.id}`
    const { data } = await axios.get<PortfolioItem[]>(url);
   
    return {
      props: { portfolioItem: data }
    }
}

export default function Item({ portfolioItem }: ItemProps) {
    return (
    <Layout>
        <div className={""}>
        <h1>Проект: {portfolioItem.title}</h1>
        <Image 
            src={portfolioItem.url} 
            width={400} 
            height={400} 
            alt={portfolioItem.title} />
        <Link className={""} href="/portfolio">Назад к списку работ</Link>
        </div>
    </Layout>
    )
}