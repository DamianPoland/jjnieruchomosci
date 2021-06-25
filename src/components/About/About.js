import React, { useState, useEffect } from 'react'
import style from './About.module.css'
import AOS from 'aos'


// images
import about_who from '../../assets/about_who.jpg'
import about_what from '../../assets/about_what.jpg'


const About = () => {

    // scroll to top when componene render
    useEffect(() => { window.scrollTo(0, 0) }, [])

    // AOS reload after load first photo to not show animations before load screen
    const [loadPhoto, setLoadPhoto] = useState(false)
    useEffect(() => { AOS.refresh() }, [loadPhoto])



    return (
        <main className={style.background}>

            {/* section WHO*/}
            <section className={style.who}>
                <div className={style.who__container}>
                    <figure data-aos="fade-right" className={style.figure__img}>
                        <img onLoad={() => setLoadPhoto(true)} className="img" src={about_who} alt='o mnie' />
                    </figure>
                    <div className={style.who__text}>
                        <div className={style.who__textContainer}>
                            <div className="textContainer">
                                <h1 className="text1">Kim jestem</h1>
                                <div className="line"></div>
                                <p className="text2"><span className={style.text__bigLeter}>N</span>azywam się Joanna Janiec. Jestem rodowitą gdańszczanką. Od 17 lat mieszkam w Gdyni. W 2006 roku ukończyłam studia magisterskie na Wydziale Pedagogicznym na kierunkach resocjalizacja oraz pedagogika ogólna. Moją pasją natomiast od zawsze było pośrednictwo w obrocie nieruchomościami. W tym celu ukończyłam w 2008 roku studia podyplomowe na Wyższej Szkole Gospodarowania Nieruchomościami na Politechnice Gdańskiej i uzyskałam licencję zawodową w zakresie pośrednictwa w obrocie nieruchomościami – nr 8998.</p>
                                <p className="text2"><span className={style.text__bigLeter}>J</span>uż w trakcie studiów rozpoczęłam pracę w biurze nieruchomości. Swoje doświadczenie w zawodzie buduję od 2006 roku. W tym czasie pośredniczyłam w sprzedaży i zakupie domów, mieszkań i działek. Jednym z moich sukcesów było podpisanie umowy z firmą deweloperską.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* section WHY */}
            <section className={style.why}>
                <div className={style.why__container}>
                    <div className={style.why__text}>
                        <div className={style.why__textContainer}>
                            <div className="textContainer">
                                <h1 className="text1">Co mnie wyróżnia</h1>
                                <div className="line"></div>
                                <p className="text2"><span className={style.text__bigLeter}>A</span>by być bardziej skuteczną w negocjacjach z korzyścią dla Klientów ukończyłam studia podyplomowe w zakresie: Coaching w biznesie w Szkole Wyższej Psychologii Społecznej w 2013 roku. Do moich zainteresowań należą również prawo oraz mediacje sądowe.</p>
                                <p className="text2"><span className={style.text__bigLeter}>W</span> 2019 roku ukończyłam studia podyplomowe na kierunku mediacje sądowe w czterech kategoriach: karnych; rówieśniczych, szkolnych i oświatowych; rodzinnych oraz cywilnych i gospodarczych. Przez wiele lat zdobywałam również doświadczenie zawodowe w branży transportowej i spedycyjnej na stanowisku managera.</p>

                            </div>
                        </div>
                    </div>
                    <figure data-aos="fade-left" className={style.figure__img}>
                        <img className="img" src={about_what} alt='dlaczego ja' />
                    </figure>
                </div>
            </section>

        </main >
    )
}

export default About