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
                                <p className="text2"><span className={style.text__bigLeter}>N</span>azywam się Joanna Janiec. Urodziłam się i mieszkałam w Gdańsku, ale od 17 lat mieszkam w Gdyni. W 2006 roku ukończyłam studia magisterskie na Wydziale Pedagogicznym na kierunkach resocjalizacja oraz pedagogika ogólna.</p>
                                <p className="text2"><span className={style.text__bigLeter}>M</span>oją pasją od zawsze było pośrednictwo w obrocie nieruchomościami. Stąd w dążeniu do celu w roku 2008 ukończyłam studia podyplomowe na Wyższej Szkole Gospodarowania Nieruchomościami na Politechnice Gdańskiej i uzyskałam licencję zawodową w zakresie pośrednictwa w obrocie nieruchomościami – nr 8998.</p>
                                <p className="text2"><span className={style.text__bigLeter}>W</span> trakcie studiów rozpoczęłam pracę w biurze nieruchomości. Swoje doświadczenie w zawodzie buduję od 2006 roku. W tym czasie pośredniczyłam w sprzedaży i zakupie domów, mieszkań i działek. Jednym z wielu sukcesów było podpisanie umowy z firmą deweloperską.</p>
                                <p className="text2"><span className={style.text__bigLeter}>M</span>oją pasją są zagadnienia z pogranicza psychobiologii i fizyki kwantowej. Poza tym morsuję, biegam i zawsze znajdę czas na dobrą książkę.</p>
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
                                <p className="text2"><span className={style.text__bigLeter}>D</span>ążąc do perfekcji, tym samym doskonaląc swój warsztat wiedzy i doświadczeń w 2013 roku ukończyłam studia podyplomowe w zakresie: Coaching w biznesie w Szkole Wyższej Psychologii Społecznej, a także w 2019 roku studia podyplomowe na kierunku mediacje sądowe.</p>
                                <p className="text2"><span className={style.text__bigLeter}>P</span>rzez wiele lat zdobywałam również doświadczenie zawodowe w branży transportowej i spedycyjnej na stanowisku managera.</p>

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