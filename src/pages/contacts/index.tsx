
import Link from "next/link";
import Button from "../../components/Button/Button";
import Search from '../../components/Search/Search';
import NewsCard from "../../components/NewsCard/NewsCard";
import Image from "next/image";
import styles from './styles.module.scss'
import sunnySity from '../../../img/contacts/sunny_city_silhouette.png';
import City from '../../../img/contacts/sity_background.png';
import Arrow from '../../components/ArrowSvg/ArrowSvg';
import registerImg from '../../../img/contacts/register.png'
import vacansiesImg from '../../../img/contacts/vacansies.png'
import candedatsImg from '../../../img/contacts/candedats.png'

const Contacts = () => {
    return (
        <>
        <section className={styles.employer_main}>
            <Link href={'/authorization'}><Button className={styles.employer_main__button} text={'Войти'}></Button></Link>
            <div className={styles.employer_main__title}>Большой выбор среди уже опубликованных резюме</div>
            <div className={styles.employer_main__search_container}>
            <Search placeholder={'Услуги, работа'}></Search>
            <Button className={styles.employer_main__button_search} text={'Найти сотрудника'}></Button>
            </div>
            
        </section>
        <section className={styles.job_posting}>
            <div className={styles.job_posting__title}>Разместите вакансии для подрядчиков в один клик</div>
            <div className={styles.job_posting__descr}>На нашем сайте вакансии публикуются быстро и легко, без каких-либо ограничений, а если хочешь получать больше отзывов и клиентов, то можете оформить подписку на сайте.</div>
            <Button className={styles.job_posting__button} text={'Разместить вакансию'}></Button>
            <Image className={styles.job_posting__sunny_Sity} src={sunnySity} alt="city"></Image>
            <Image className={styles.job_posting__City} src={City} alt="city"></Image>
        </section>

        <section className={styles.search_employer}>
            <div className={styles.search_employer__container}>
                <div className={styles.search_employer__title}>Как начать поиск подрядчиков?</div>
                <div className={styles.search_employer__arrow}>{Arrow()}</div>
                <div id={styles.first} className={styles.search_employer__img}><Image className={styles.search_employer_img} src={registerImg} alt="register" /></div>
                <div id={styles.second} className={styles.search_employer__img}><Image className={styles.search_employer_img} src={vacansiesImg} alt="vacansies" /></div>
                <div id={styles.third} className={styles.search_employer__img}><Image className={styles.search_employer_img} src={candedatsImg} alt="condedats" /></div>
                <div className={styles.search_employer__arrow_reverse}>{Arrow()}</div>
            </div>
        </section>
        <section className={styles.news}>
            <div className={styles.news__title_container}>
                <div className={styles.news__title_line}></div>
                <div className={styles.news__title}>Новостная лента</div>
                <div className={styles.news__title_line}></div>
            </div>
                <div className={styles.news__cards_container}>
                    <div className={styles.news__cards}>
                        <NewsCard></NewsCard>
                        <NewsCard></NewsCard>
                        <NewsCard></NewsCard>
                    </div>
                </div>
                
        </section>
        </>
        
        
        
        
    )
}
export default Contacts