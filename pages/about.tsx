import Layout from "@/components/layout";
import styles from "../styles/about.module.css"
import Image from "next/image";
import _Kz8nHVg_tGI from "../public/team/arlington-research-Kz8nHVg_tGI-unsplash.jpg";
import _g1Kr4Ozfoac from "../public/team/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg";
import _5fNmWej4tAA from "../public/team/scott-graham-5fNmWej4tAA-unsplash.jpg";

    export default function About() {
        return (
          <Layout>
            <h1>О компании</h1>
            <div className={styles.list}>
                <div className={styles.item}>
                <h3>Отдел маркетинга</h3>
                <div className={styles.content}>
                  <Image
                    className={styles.image}
                    src={_Kz8nHVg_tGI}
                    alt="https://unsplash.com/photos/Kz8nHVg_tGI"
                  />
                  <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati laboriosam, eligendi in consequatur quis culpa impedit sequi explicabo animi aliquid. Aut consequatur, recusandae molestias ullam accusantium laborum sapiente tempora tenetur! </div>
                </div>
              </div>
            
            
              <div className={styles.item}>
                <h3>Инженеры-разработчики</h3>
                <div className={styles.content}>
                  <Image
                    className={styles.image}
                    src={_g1Kr4Ozfoac}
                    alt="https://unsplash.com/photos/g1Kr4Ozfoac"
                  />
                  <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloremque aspernatur id quos fugit! Molestiae ratione earum, tempora officia quam perspiciatis, minus facere quos numquam harum eligendi adipisci, error dolore. </div>
                </div>
              </div>
            
            
              <div className={styles.item}>
                <h3>Отдел продаж</h3>
                <div className={styles.content}>
                  <Image
                    className={styles.image}
                    src={_5fNmWej4tAA}
                    alt="https://unsplash.com/photos/5fNmWej4tAA"
                  />
                  <div> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae dolor dicta officia minima delectus. Consequuntur repellat, aspernatur expedita quae nesciunt itaque facilis iure fugiat molestiae quia natus blanditiis cumque est? </div>
                </div>
              </div>
            </div>
          </Layout>
        );
    }