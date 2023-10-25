import styles from './style.module.scss'
import SmallDotted from '../../components/DottedLine/SmallDottedLine'
import BigDotted from '../../components/DottedLine/BigDottedLine'
import Base from '../../components/RoundBaseSvg/RoundBaseSvg'
import Secr from '../../components/RoundSecrSvg/RoundSecrSvg'
import Search from '../../components/RoundSearchSvg/RoundSearchSvg'


const AboutUs = () => {
    return (
        <div className={styles.main_container}>
            <section className={styles.AboutUs}>
                <div className={styles.AboutUs__title}>О нас</div>
                <div className={styles.AboutUs__container}>
                    <div className={styles.AboutUs__small_dotted}><SmallDotted></SmallDotted></div>
                    <div className={styles.AboutUs__big_dotted}><BigDotted></BigDotted></div>
                    
                    <div className={styles.AboutUs__container_title}>Наши преимущества</div>
                    <div className={styles.AboutUs__container_img}>
                        <div className={styles.AboutUs__descr}>
                            <div className={styles.AboutUs__descr_container}>
                                <div id={styles.first} className={styles.AboutUs__descr_title}>Удобство поиска</div>
                                <div  className={styles.AboutUs__descr_img}><Search></Search></div>
                            </div>
                            <div className={styles.AboutUs__descr_text}>Быстрая регистрация, легкий и понятный интерфейс, специализированные фильтры для упрощения поиска. Вам лишь остаётся опубликовать вакансию или резюме!</div>
                            

                        </div>
                        <div className={styles.AboutUs__descr}>
                            <div className={styles.AboutUs__descr_container}>
                                <div className={styles.AboutUs__descr_title}>Удобство поиска</div>
                                <div className={styles.AboutUs__descr_img}><Secr></Secr></div>
                            </div>
                            <div className={styles.AboutUs__descr_text}>Быстрая регистрация, легкий и понятный интерфейс, специализированные фильтры для упрощения поиска. Вам лишь остаётся опубликовать вакансию или резюме!</div>
                            

                        </div>
                        
                    </div>
                    <div className={styles.AboutUs__descr_container_img}>
                        <div className={styles.AboutUs__descr}>
                            <div className={styles.AboutUs__descr_container}>
                                <div className={styles.AboutUs__descr_img}><Base></Base></div>
                                <div className={styles.AboutUs__descr_title}>Удобство поиска</div>
                                
                            </div>
                            <div className={styles.AboutUs__descr_text}>Быстрая регистрация, легкий и понятный интерфейс, специализированные фильтры для упрощения поиска. Вам лишь остаётся опубликовать вакансию или резюме!</div>
                        </div>
                    </div>
                    
                </div>
            </section>
        </div>
        
    )
}
export default AboutUs