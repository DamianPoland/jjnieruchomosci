import React, { useState, useEffect } from 'react'
import style from './Ad.module.css'
import { mainCategories } from '../../shared/data'


//firebase
import { firestore } from '../../shared/fire'

// constans
import { mainColName } from '../../shared/constans'


//photos images svg
import PhotoEmpty from '../../assets/photoEmpty.png'


//components
import AlertSmall from "../../UI/AlertSmall/AlertSmall"
import Spinner from '../../UI/Spinner/Spinner'




const Ad = props => {

    // scroll to top when componene render
    useEffect(() => window.scrollTo(0, 0), [])

    // show or hide small alert
    const [isAlertSmallShow, setIsAlertSmallShow] = useState(false)

    // Spinner
    const [isMainSpinnerShow, setIsMainSpinnerShow] = useState(false)

    // STATE - set one AD
    const [oneAd, setOneAd] = useState()

    // STATE - set main photo
    const [mainPhoto, setMainPhoto] = useState()

    useEffect(() => {

        // show main spinner
        setIsMainSpinnerShow(true)

        // get ad with itemID from DB and save in State
        firestore.collection(mainColName).doc(props.match.params.key).get()
            .then(resp => {
                setOneAd(resp.data())

                // set first photo as mine
                setMainPhoto(resp.data().imageURL[0])
            })
            .catch(err => {
                console.log('listener err', err)
                setIsAlertSmallShow({ alertIcon: 'error', description: 'Błąd. Spróbuj ponownie później.', animationTime: '2', borderColor: 'red' })
            })
            .finally(() => {

                // hide main spinner
                setIsMainSpinnerShow(false)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const changePhoto = direction => {
        const photosArray = oneAd.imageURL.filter(i => i !== null)
        let mainPhotoIndex = photosArray.findIndex(i => i === mainPhoto)
        mainPhotoIndex = direction === "next" ? mainPhotoIndex + 1 : mainPhotoIndex - 1
        if (mainPhotoIndex > photosArray.length - 1) { mainPhotoIndex = 0 }
        if (mainPhotoIndex < 0) { mainPhotoIndex = photosArray.length - 1 }
        setMainPhoto(photosArray[mainPhotoIndex])
    }



    return (
        <main className={style.background}>
            {isMainSpinnerShow && <Spinner />}

            {/* AlertSmall */}
            {isAlertSmallShow && <AlertSmall alertIcon={isAlertSmallShow.alertIcon} description={isAlertSmallShow.description} animationTime={isAlertSmallShow.animationTime} borderColor={isAlertSmallShow.borderColor} hide={() => setIsAlertSmallShow(false)} />}

            {oneAd &&
                <div className={style.container}>

                    {/* photos section */}
                    <section className={style.photos__section}>

                        <div className={style.btnContainer}>
                            <button className="btn" onClick={() => window.history.back()}>{"< Wróć"}</button>
                        </div>

                        <div className={style.photos__itemDescTopContainer}>
                            <h1 className={style.photos__itemTextTitle}>{oneAd.titleAd}</h1>
                        </div>

                        <div className={style.photos}>
                            <div className={style.photos__container}>

                                <figure className={style.photos__figureBig}>
                                    <img className={style.photos__imgBig} src={mainPhoto || PhotoEmpty} onError={(e) => { e.target.onerror = null; e.target.src = PhotoEmpty }} alt="main" />
                                    <button onClick={() => changePhoto("prev")} className={`${style.photos__arrowContainer} ${style.photos__arrowContainerLeft}`}><span className={`${style.photos__arrow} ${style.photos__arrowLeft}`}></span></button>
                                    <button onClick={() => changePhoto("next")} className={`${style.photos__arrowContainer} ${style.photos__arrowContainerRight}`}><span className={`${style.photos__arrow} ${style.photos__arrowRight}`}></span></button>

                                </figure>

                                <div className={style.photos__containerSmall}>
                                    {oneAd.imageURL.map((item, id) => {
                                        return (
                                            item &&
                                            <figure className={`${style.photos__figureSmall} ${mainPhoto === item && style.photos__figureSmallBorder}`} key={id}>
                                                <img onClick={() => setMainPhoto(item)} className={style.photos__imgSmall} src={item || PhotoEmpty} onError={(e) => { e.target.onerror = null; e.target.src = PhotoEmpty }} alt={`main${id}`} />
                                            </figure>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>


                    {/* DESC params section */}
                    <section className={style.desc}>
                        <p className={style.desc__title}>Dane:</p>
                        <div className={style.desc__container}>
                            {oneAd.categoryAd && <p className={style.desc__text}>Kategoria: <b>{`${mainCategories.find(i => i.id === oneAd.categoryAd).type} - ${mainCategories.find(i => i.id === oneAd.categoryAd).category}`}</b></p>}
                            {oneAd.statusAd && <p className={style.desc__text}>Status: <b>{oneAd.statusAd}</b></p>}
                            {oneAd.priceAd && <p className={style.desc__text}>Cena: <b>{oneAd.priceAd} zł</b></p>}
                            {oneAd.measurementAd && <p className={style.desc__text}>Metraż: <b>{oneAd.measurementAd} m2</b></p>}
                            {oneAd.locationAd && <p className={style.desc__text}>Lokalizacja: <b>{oneAd.locationAd}</b></p>}
                        </div>
                    </section>


                    {/* DESC user description */}
                    <section className={style.desc}>
                        <p className={style.desc__title}>Opis:</p>
                        <div className={style.desc__container}>
                            <p className={style.desc__text}>{oneAd.descriptionAd}</p>
                        </div>
                    </section>

                </div>
            }

        </main >
    )
}

export default Ad
