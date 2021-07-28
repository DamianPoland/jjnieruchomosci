import React, { useState, useEffect } from 'react'
import style from './Ads.module.css'
import { mainCategories } from '../../shared/data'

// components
import { ReactComponent as NoData } from '../../assets/icons/void.svg'
import EditAd from '../EditAd/EditAd'
import ListItemAd from '../ListItemAd/ListItemAd'



const Ads = ({ adsFromDB, isLogIn }) => {

    // scroll to top when componene render
    useEffect(() => { window.scrollTo(0, 0) }, [])

    const [mainCategory, setMainCategory] = useState(mainCategories[0].id)

    const [isEditAdVisible, setIsEditAdVisible] = useState(false)

    const [arrayOfAdds, setArrayOfAdds] = useState([])


    // fiter ads to fit clicked main category
    useEffect(() => setArrayOfAdds(adsFromDB.filter(i => i.categoryAd === mainCategory)), [mainCategory, adsFromDB])


    // call from listItemAd when Ad is edit
    const [editAdData, setEditAdData] = useState(false)
    const editAd = (e, item) => {
        e.preventDefault()
        setEditAdData(item)
        setIsEditAdVisible(true)
    }
    useEffect(() => !isEditAdVisible && setEditAdData(false), [isEditAdVisible]) // when close editAd then clear setEditAdData


    return (
        <main className={style.section}>

            {!isEditAdVisible ?
                <div className={style.section__container}>
                    {isLogIn && <button className='btn' onClick={() => setIsEditAdVisible(true)}>Dodaj ogłoszenie</button>}

                    {/* MAIN CATEGORY */}
                    <section className={style.categories}>

                        <div className={style.categories__mainContainer}>
                            <p className={style.categories__itemDesc}>{mainCategories[0].type}</p>
                            <p className={`${style.categories__underLine} ${((mainCategories[0].id === mainCategory) || (mainCategories[1].id === mainCategory) || (mainCategories[2].id === mainCategory)) && style.categories__underLineAccent}`}></p>
                            <div className={style.categories__container}>
                                {mainCategories.filter(i => i.type === mainCategories[0].type).map(item => {
                                    return (
                                        <div key={item.id} className={`${style.categories__itemContainer} ${(mainCategory === item.id) && style.categories__itemContainerActive}`} onClick={() => setMainCategory(item.id)}>
                                            <div className={style.categories__itemFigure}>
                                                <div className={style.categories__itemSVG}>{item.photo}</div>
                                            </div>
                                            <p className={style.categories__itemDesc}>{item.category}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        <div className={style.categories__mainContainer}>
                            <p className={style.categories__itemDesc}>{mainCategories[3].type}</p>
                            <p className={`${style.categories__underLine} ${((mainCategories[3].id === mainCategory) || (mainCategories[4].id === mainCategory) || (mainCategories[5].id === mainCategory)) && style.categories__underLineAccent}`}></p>
                            <div className={style.categories__container}>
                                {mainCategories.filter(i => i.type === mainCategories[3].type).map(item => {
                                    return (
                                        <div key={item.id} className={`${style.categories__itemContainer} ${(mainCategory === item.id) && style.categories__itemContainerActive}`} onClick={() => setMainCategory(item.id)}>
                                            <div className={style.categories__itemFigure}>

                                                <div className={style.categories__itemSVG}>{item.photo}</div>
                                            </div>
                                            <p className={style.categories__itemDesc}>{item.category}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                    </section>

                    {/* ALL ADS */}
                    <section className={style.ads}>

                        {arrayOfAdds.length !== 0
                            ? <div>
                                {arrayOfAdds.map(item =>
                                    <ListItemAd
                                        key={item.adId}
                                        item={item}
                                        isLogIn={isLogIn}
                                        editAd={editAd}
                                    />
                                )}
                            </div>
                            : <div className={style.ads__emptyContainer}>
                                <div className={style.ads__emptySVG}> <NoData /> </div>
                                <p className={style.ads__emptyContainerDesc}>Brak ofert.</p>
                            </div>
                        }
                    </section>
                </div>
                :
                <EditAd
                    setIsEditAdVisible={setIsEditAdVisible}
                    editAdData={editAdData}
                />
            }
        </main>
    )
}

export default Ads
