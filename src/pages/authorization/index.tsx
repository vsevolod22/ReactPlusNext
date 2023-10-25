import styles from './styles.module.scss'
import Link from 'next/link'
import Buttons from '../../components/Button/Button'
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ExitSvg from '../../components/ExitSvg/ExitSvg';
import mailImg from '../../../img/autorizacia/Email.png'
import Image from 'next/image';

const style = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
  };
const style_title = {
    color: '#4B8AE7',
    fontFamily: 'Roboto',
    fontSize: '30px',
    fontWeight: 500
}
const style_email = {
    marginTop: '10px', 
    width: '420px',
    color: 'rgba(0, 0, 0, 0.54)',
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontWeight: 400 
}



const Authorization = () => {

    const [open, setOpen] = React.useState(false);
    const [pass, setPass] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {setOpen(false); setPass(false);};
    const newModal = () => {
        setPass(true);
    }

    return (
        <section className={styles.authorization_container}>
            <div className={styles.authorization}>
                <div className={styles.authorization__logo}>
                    <Link key={1} href={'/'}><div className={styles.logo}>{'BIZ'}</div></Link>
                </div>
                <div className={styles.authorization__title}>Авторизация</div>

                <form className={styles.authorization__form}>
                    <input className={styles.authorization__form_input} name="e-mail" placeholder='Email'></input>
                    <input className={styles.authorization__form_input} name='password' placeholder='Пароль'></input>
                </form>
                <Button sx={{width: '120px', position: 'absolute', bottom: '250px', left: '70px', textTransform: 'none'}} onClick={handleOpen}>Восстановить?</Button>

                <Buttons  className={styles.authorization__button} text={'Войти'}></Buttons>


                <a className={styles.authorization__link} href="#">Не удаётся войти?</a>
                
            </div>
            <Link href="/registration" className={styles.authorization__link}>Зарегистрироваться</Link>
        
        
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{alignItems: "center"}}
            >
                <Box sx={style} >
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={pass ? {display: 'none'} : style_title}>
                        Восстановление пароля
                    </Typography>
                    <Typography id="modal-modal-description" 
                    sx={pass ? {display: 'none'} : style_email}>
                        Телефон или почта
                    </Typography>
                    <form style={pass ? {display: 'none'} : {marginTop: '20px'}} action="post">
                        <input style={ pass ? {display: 'none'} : {paddingLeft: '10px', height: '50px', width: '420px', borderRadius: '10px', background: '#D9D9D9', border: 'none'}} type="text" name='phone_and_number' />
                    </form>
                    <Buttons  style={pass ? {display: 'none'} : {height: '40px', width: '200px', borderRadius: '10px', marginTop: '30px'}} className={styles.authorization__button_modal} text={'Сбросить пароль'} Click={() => newModal()}></Buttons>
                    {pass ? <div onClick={handleClose} id='exit' className={styles.modal__exit}><ExitSvg></ExitSvg></div> : null}
                    {pass ? <div className={styles.modal__img}><Image src={mailImg} alt="Email" /></div>: null}
                    {pass ? <div className={styles.modal__text}>Ссылка для восстановления пароля <br /> успешно отправлена. <br /> Проверьте почту!</div> : null}
                
                
                
                
                </Box>





            </Modal>
        
        
        </section>
        
    )
}

export default Authorization





