import styles from './newsCard.module.scss'



const NewsCard = () => {


    return (
        <div className={styles.news_card}>
            <div className={styles.news_card__title}>Топ ваканский с высокой конкуренцией</div>
            <div className={styles.news_card_descr}>Количество откликов на вакансию зависит от условий работы, известности и репутации компании, функционала и уровня требований, предъявляемых к соискателям, — чем они проще, тем больше откликов. С недавних пор кандидатов привлекает не только высокая зарплата — у некоторых самых популярных вакансий она вообще не указана. </div>
            <a href='#' className={styles.news_card__link}>Читать дальше &gt;</a>
        </div>
    )
}

export default NewsCard

