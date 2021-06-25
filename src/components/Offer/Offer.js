import React, { useEffect } from 'react'
import style from './Offer.module.css'



// images
import offer__sell from '../../assets/offer__sell.jpg'
import offer__buy from '../../assets/offer__buy.jpg'
import offer__rent from '../../assets/offer__rent.jpg'

const Offer = () => {

    // scroll to top when componene render
    useEffect(() => { window.scrollTo(0, 0) }, [])



    return (
        <main className={style.background}>

            <section className={style.container}>

                <div className={style.item}>
                    <div className={style.item__header}>
                        <figure className={style.item__figure}>
                            <img className="img" src={offer__sell} alt="nieruchomość" />
                        </figure>
                        <div className={style.item__headerDesc}>
                            <h1 className="text1">Chcesz sprzedać</h1>
                            <div className="line"></div>
                        </div>
                    </div>
                    <ul className={style.item__ul}>
                        <li className={style.item__li}>oferujemy sesję zdjęciową, dzięki której oferta nieruchomości jest atrakcyjna dla klientów – współpracujemy z doświadczonymi fotografami, którzy korzystając z profesjonalnego sprzętu tworzą jedne z najlepszych zdjęć nieruchomości,</li>
                        <li className={style.item__li}>tworzenie nowoczesnych form prezentacji wizualnych:
                            <ul className={style.item__ul2}>
                                <li className={style.item__li}>wirtualnych wizyt 360° - taka forma prezentacji nieruchomości jest bardzo pożądana przez klientów i pozwala zaoszczędzić czas,</li>
                                <li className={style.item__li}>profesjonalnego filmu reklamowego,</li>
                            </ul>
                        </li>
                        <li className={style.item__li}>home staging, czyli przygotowanie nieruchomości do prezentacji i sprzedaży, dzięki czemu nieruchomość staje się bardziej atrakcyjna dla potencjalnych kupujących,</li>
                        <li className={style.item__li}>prezentacje nieruchomości klientom bez wymaganego udziału Sprzedającego,</li>
                        <li className={style.item__li}>prowadzenie negocjacji cenowych z potencjalnymi nabywcami,</li>
                        <li className={style.item__li}>obsługa transakcji poprzez przygotowanie profesjonalnej umowy sprzedaży,</li>
                        <li className={style.item__li}>pośredniczenie w kontakcie z Kupującym,</li>
                        <li className={style.item__li}>opieka notarialna – towarzyszymy Państwu podczas finalizacji umowy u notariusza,</li>
                        <li className={style.item__li}>czuwanie nad prawidłowym przebiegiem transakcji na każdym jej etapie.</li>
                    </ul>
                </div>


                <div className={style.item}>
                    <div className={style.item__header}>
                        <figure className={style.item__figure}>
                            <img className="img" src={offer__buy} alt="nieruchomość" />
                        </figure>
                        <div className={style.item__headerDesc}>
                            <h1 className="text1">Chcesz kupić</h1>
                            <div className="line"></div>
                        </div>
                    </div>
                    <ul className={style.item__ul}>
                        <li className={style.item__li}>oszacowanie stanu prawnego nieruchomości,</li>
                        <li className={style.item__li}>prezentacje nieruchomości,</li>
                        <li className={style.item__li}>negocjacje ceny zakupu nieruchomości ze Sprzedającym,</li>
                        <li className={style.item__li}>doradztwo kredytowe i pomoc w uzyskaniu kredytu mieszkaniowego,</li>
                        <li className={style.item__li}>przygotowanie umów i zabezpieczenie transakcji pod kątem prawnym,</li>
                        <li className={style.item__li}>uczestniczenie w czynnościach notarialnych,</li>
                        <li className={style.item__li}>sporządzanie protokołów zdawczo-odbiorczych nieruchomości i pośrednictwo w przekazaniu nieruchomości.</li>

                    </ul>
                </div>

                <div className={style.item}>
                    <div className={style.item__header}>
                        <figure className={style.item__figure}>
                            <img className="img" src={offer__rent} alt="nieruchomość" />
                        </figure>
                        <div className={style.item__headerDesc}>
                            <h1 className="text1">Chcesz wynająć</h1>
                            <div className="line"></div>
                        </div>
                    </div>
                    <ul className={style.item__ul}>
                        <li className={style.item__li}>Dla właścicieli: Przeprowadzamy klientów przez cały proces wynajmu: od skutecznej promocji i prezentacji nieruchomości i znalezienia sprawdzonego najemcy, aż po całkowite przeprowadzenie transakcji najmu, sporządzenie umowy i zabezpieczenie transakcji pod kątem prawnym.</li>
                        <li className={style.item__li}>Dla najemców: Współpracując z właścicielami nieruchomości jesteśmy w stanie znaleźć idealny lokal dla potencjalnych lokatorów biorąc pod uwagę Państwa potrzeby i oczekiwania. </li>

                    </ul>
                </div>




            </section>
        </main >
    )
}

export default Offer