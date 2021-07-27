import React, { useState, useEffect } from 'react'
import style from './Sale.module.css'
import { mainCategories } from '../../shared/data'

// components
import { ReactComponent as NoData } from '../../assets/icons/void.svg'
import EditAd from '../EditAd/EditAd'
import ListItemAd from '../ListItemAd/ListItemAd'



const Sale = ({ dataFromDB }) => {


    const [mainCategory, setMainCategory] = useState(mainCategories[0].categories[0].nameDB)

    const [isEditAdVisible, setIsEditAdVisible] = useState(false)

    const [arrayOfAdds, setArrayOfAdds] = useState([])

    // call when click new category
    const mainCategoryHandler = (nameDB) => setMainCategory(nameDB)

    // fiter ads to fit clicked main category
    useEffect(() => setArrayOfAdds(dataFromDB.filter(i => i.categoryAd === mainCategory)), [mainCategory])


    return (
        <main className={style.section}>

            {!isEditAdVisible ?
                <div className={style.section__container}>

                    {/* MAIN CATEGORY */}

                    <section className={style.categories}>
                        <button className='btn' onClick={() => setIsEditAdVisible(true)}>Dodaj ogłoszenie</button>
                        <div className={style.categories__container}>
                            {mainCategories[0].categories.map(item => {
                                return (
                                    <div key={item.nameDB} className={`${style.categories__itemContainer} ${(mainCategory === item.nameDB) && style.categories__itemContainerActive}`} onClick={() => mainCategoryHandler(item.nameDB)}>
                                        <figure className={style.categories__itemFigure}>
                                            <img className={style.categories__itemImg} src={item.photo} alt="main" />
                                        </figure>
                                        <p className={style.categories__itemDesc}>{item.name}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </section>

                    {/* ALL ADS */}
                    <section className={style.ads}>

                        {arrayOfAdds.length !== 0
                            ? <div>
                                {arrayOfAdds.map(item => <ListItemAd key={item.adId} item={item} />)}
                            </div>
                            : <div className={style.ads__emptyContainer}>
                                <div className={style.ads__emptySVG}> <NoData /> </div>
                                <p className={style.ads__emptyContainerDesc}>Brak ogłoszeń.</p>
                            </div>
                        }
                    </section>
                </div>
                :
                <EditAd setIsEditAdVisible={setIsEditAdVisible} />
            }
        </main>
    )
}

export default Sale
