import React, { useState, useEffect } from 'react'
import style from './Sale.module.css'
import { mainCategories } from '../../shared/data'

// components
import EditAd from '../EditAd/EditAd'




const Sale = () => {


    // STATE - set mainCategory
    const [mainCategory, setMainCategory] = useState(mainCategories[0].categories[0].nameDB)

    // STATE - set mainCategory
    const [isEditAdVisible, setIsEditAdVisible] = useState(false)

    // call when click new category
    const mainCategoryHandler = (nameDB) => {

        //set new category
        setMainCategory(nameDB)

    }


    return (
        <main className={style.section}>
            <div className={style.section__container}>

                {/* MAIN CATEGORY */}
                {isEditAdVisible ?
                    <section className={style.categories}>
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
                    :
                    <EditAd />
                }
            </div>
        </main>
    )
}

export default Sale
