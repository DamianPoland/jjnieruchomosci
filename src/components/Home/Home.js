import React, { useEffect } from 'react'
import style from './Home.module.css'
import { Link } from 'react-router-dom'


// images
import home__start1 from '../../assets/home__start1.jpg'
import home__start2 from '../../assets/home__start2.jpg'
import home__about from '../../assets/home__about.jpg'
import home__offer from '../../assets/home__offer.jpg'
import home__why1 from '../../assets/home__why1.jpg'
import home__why2 from '../../assets/home__why2.jpg'
import home__contact from '../../assets/home__contact.jpg'

// svg
import { ReactComponent as Elearn } from '../../assets/icons/elearn.svg'
import { ReactComponent as Earn } from '../../assets/icons/earn.svg'
import { ReactComponent as Certificate } from '../../assets/icons/certificate.svg'
import { ReactComponent as Clients } from '../../assets/icons/clients.svg'
import { ReactComponent as Phone } from '../../assets/icons/phone.svg'



const Home = () => {

    // scroll to top when componene render
    useEffect(() => { window.scrollTo(0, 0) }, [])



    return (
        <main className={style.background}>

            {/*section START*/}
            <section className={style.start}>
                <div className={style.start__container}>
                    <figure data-aos="fade-right" className={style.start__figure}>
                        <img className={style.start__img} src={home__start1} alt="bhp" />
                    </figure>
                    <div className={style.start__line}></div>
                    <figure data-aos="fade-left" className={style.start__figure}>
                        <img className={style.start__img} src={home__start2} alt="bhp" />
                    </figure>
                    <div className={style.start__containerText}>
                        <p className={style.start__text}>WIEDZA</p>
                        <p className={`${style.start__text} ${style.start__textMiddle}`}>DOŚWIADCZENIE</p>
                        <p className={style.start__text}>PORADY</p>

                    </div>

                </div>
            </section>

            {/* section APPROACH */}
            <section className={style.approach}>
                <div className={style.approach__textContainer}>
                    <div data-aos="flip-left" className={style.approach__item}>
                        <Elearn />
                        <h2 className={style.approach__h2}>Obsługa</h2>
                        <p className={style.approach__p}>Oferuję komfort i bezpieczeństwo transakcji. Do każdego klienta podchodzę indywidualnie.  </p>
                    </div>
                    <div data-aos="flip-left" className={style.approach__item}>
                        <Earn />
                        <h2 className={style.approach__h2}>Cena</h2>
                        <p className={style.approach__p}>Dzięki bliskiej współpracy z profesjonalnymi notariuszami mogę zagwarantowac bardzo niskie koszty transakcyjne.</p>
                    </div>
                    <div data-aos="flip-left" className={style.approach__item}>
                        <Certificate />
                        <h2 className={style.approach__h2}>Certyfikaty</h2>
                        <p className={style.approach__p}>Posiadam wmagane kursy i certyfikaty. Jestem licencjonowanym specjalistą ds. obrotu nieruchomościami.</p>
                    </div>
                    <div data-aos="flip-left" className={style.approach__item}>
                        <Clients />
                        <h2 className={style.approach__h2}>Doświadczenie</h2>
                        <p className={style.approach__p}>Profesjonalne podejście i kilkunastoletnie doświadczenie na rynku trójmiejskim. Wielu zadowolonych klientów.</p>
                    </div>
                </div>
            </section>


            {/*section ABOUT*/}
            <section className={style.about}>
                <figure data-aos="fade-right" className={style.about__figure}>
                    <img className={style.about__img} src={home__about} alt="bhp" />
                </figure>
                <div className={style.about__text}>
                    <div className={style.about__textContainer}>
                        <h1 className="text1">Kim jestem</h1>
                        <div className="line"></div>
                        <p className="text2 text__white">Jestem rodowitą gdańszczanką. Od 17 lat mieszkam w Gdyni. Ukończyłam w 2008 roku studia podyplomowe na Wyższej Szkole Gospodarowania Nieruchomościami na Politechnice Gdańskiej i uzyskałam licencję zawodową w zakresie pośrednictwa w obrocie nieruchomościami – nr 8998.</p>
                        <div><Link to='/about' className="btn btnMarginTop text__white">Więcej o mnie</Link></div>
                    </div>
                </div>
            </section>


            {/*section OFFER*/}
            <section className={style.offer}>
                <div className={style.offer__container}>
                    <div className={style.offer__text}>
                        <div className={style.offer__textContainer}>
                            <h1 className="text1">Czym się zajmuję</h1>
                            <div className="line"></div>
                            <p className="text2">Oferuję usługi pośrednictwa w sprzedaży i zakupie domów, mieszkań i działek. Zajmuję się kompleksową obsługą umów, obsługą prawną, doradztwem oraz bezpieczeństwem transakcji.</p>
                            <div><Link to='/offer' className="btn btnMarginTop">Pełna oferta</Link></div>
                        </div>
                    </div>
                    <figure data-aos="fade-left" className={style.offer__figure}>
                        <img className={style.offer__img} src={home__offer} alt="bhp" />
                    </figure>
                </div>
            </section>

            {/*section WHY*/}
            <section className={style.why}>
                <div className={style.why__container}>
                    <figure className={style.why__figure1}>
                        <img className={style.why__img} src={home__why1} alt="bhp" />
                    </figure>
                    <div data-aos="flip-left" className={style.why__textContainer}>
                        <h1 className="text1">Dlaczego ja</h1>
                        <div className="line"></div>
                        <ul className={style.why__ul}>
                            <li className={style.why__li}>Znam trójmiejski rynek nieruchomości.</li>
                            <li className={style.why__li}>Posiadam wiedzę z zakresu prawa mieszkaniowego.</li>
                            <li className={style.why__li}>Oferuję komfort i bezpieczeństwo transakcji.</li>
                            <li className={style.why__li}>Do każdego klienta podchodzę indywidualnie.</li>
                            <li className={style.why__li}>Mam wieloletnie doświadczenie zarówno w sprzedaży jak i wynajmie nieruchomości.</li>
                        </ul>
                        <div><Link to='/ads' className="btn">Ogłoszenia</Link></div>
                    </div>
                    <figure className={style.why__figure2}>
                        <img className={style.why__img} src={home__why2} alt="bhp" />
                    </figure>
                </div>
            </section>


            {/*section CONTACT*/}
            <section className={style.contact}>
                <div className={style.contact__text}>
                    <div className={style.contact__textContainer}>
                        <h1 className="text1">Chcesz nawiązać współpracę</h1>
                        <div className="line"></div>
                        <p className="text2">Skontaktuj się ze mną, a chętnie udzielę Tobie odpowiedzi na wszystkie pytania. Przeprowadzę Cię przez cały proces kupna lub sprzedaży nieruchomości.</p>

                        <p className={style.contact__tel}>
                            <a href='tel:+48513101116' className={style.contact__telIcon}>
                                <Phone />
                            </a> +48 513-101-116
                        </p>
                        <div><Link to='/contact' className="btn btnMarginTop">Pozostałe formy kontaktu</Link></div>
                    </div>
                </div>
                <figure data-aos="fade-left" className={style.contact__figure}>
                    <img className={style.contact__img} src={home__contact} alt="bhp" />
                </figure>
            </section>

        </main >
    )
}

export default Home