
import styles from './styles.module.scss'
import Button from '@/components/Button/Button'
import Link from 'next/link'



const Registration = () => {
    

    return (
        <section className={styles.authorization_container}>
            <div className={styles.authorization}>
                <div className={styles.authorization__logo}>
                    <Link key={1} href={'/'}><div className={styles.logo}>{'BIZ'}</div></Link>
                </div>
                <div className={styles.authorization__title}>Регистрация</div>

                <form className={styles.authorization__form}>
                    <input className={styles.authorization__form_input} name='surname' placeholder='Фамилия'></input>
                    <input className={styles.authorization__form_input} name='name' placeholder='Имя'></input>
                    <input className={styles.authorization__form_input} name='phone' placeholder='Мобильный телефон'></input>
                    <input className={styles.authorization__form_input} name="e-mail" placeholder='Email'></input>
                    
                </form>

                <Button  className={styles.authorization__button} text={'Продолжить'}></Button>


                <div className={styles.authorization__text}>Нажимая Продолжить, вы соглашаетесь с <a className={styles.authorization__links} href="#">Условиями использования</a> и <a className={styles.authorization__links} href='#'>Политикой конфиденциальности</a></div>
                
            </div>
            <div>Уже зарегистрировались? <Link href="/authorization" className={styles.authorization__link}>Войти</Link></div> 
        </section>
    )

}
export default Registration