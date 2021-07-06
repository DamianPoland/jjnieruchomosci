import React, { useEffect } from 'react'
import style from './Contact.module.css'

// images
import contact from '../../assets/contact.jpg'


//svg
import { ReactComponent as Phone } from '../../assets/icons/phone.svg'
import { ReactComponent as Location } from '../../assets/icons/location.svg'
import { ReactComponent as Email } from '../../assets/icons/email.svg'
import { ReactComponent as Facebbok } from '../../assets/icons/facebook.svg'
import { ReactComponent as Clock } from '../../assets/icons/clock.svg'


const Contact = () => {


    // scroll to top when componene render
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <main className={style.section}>

            <div className={style.section__container}>

                {/* contact links  */}
                <section className={style.contacts}>
                    <div className={style.contacts__container}>
                        <div className={style.contacts__item}>
                            <a href='tel:+48513101116' className={style.svg}><Phone /></a>
                            <p className={style.contacts__desc}>+48 513-101-116</p>
                        </div>
                        <div className={style.contacts__item}>
                            <a href={`http://maps.google.com/?q=Gdynia, Szefki 13E/3`} target='_blank' rel="noopener noreferrer" className={style.svg}><Location /></a>
                            <p className={style.contacts__desc}>Gdynia, ul. Szefki 13E/3</p>
                        </div>
                        <div className={style.contacts__item}>
                            <a href='mailto:biuro@jjnieruchomosci.com?subject=Zapytanie' className={style.svg}><Email /></a>
                            <p className={style.contacts__desc}>biuro@jjnieruchomosci.com</p>
                        </div>
                        <div className={style.contacts__item}  >
                            <a href='https://www.facebook.com/JJ-Nieruchomo%C5%9Bci-107383291609848' target='_blank' rel="noopener noreferrer" className={style.svg}><Facebbok /></a>
                            <p className={style.contacts__desc}>Facebook</p>
                        </div>
                        <div className={style.contacts__item} >
                            <a href='/' className={style.svg}><Clock /></a>
                            <p className={style.contacts__desc}>Pn - Pt 9.00-19.00</p>
                        </div>
                    </div>
                </section>


                {/* img */}
                <figure data-aos="fade-left" className={style.contact__figure}>
                    <img className={style.contact__img} src={contact} alt="bhp" />
                </figure>
            </div>
        </main>
    )
}

export default Contact

