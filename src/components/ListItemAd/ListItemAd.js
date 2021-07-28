import React from 'react'
import { Link } from 'react-router-dom'
import style from './ListItemAd.module.css'

//photos
import PhotoEmpty from '../../assets/photoEmpty.png'



const ListItemAd = ({ item, isLogIn, editAd }) => {

    return (
        <Link to={`/ads/${item.adId}`} className={style.ads__item} >
            <div className={style.ads__itemContainer}>
                <figure className={style.ads__itemFigure}>
                    <img className={style.ads__itemImg} src={item.smallImageURL || PhotoEmpty} onError={(e) => { e.target.onerror = null; e.target.src = PhotoEmpty }} alt="main nieruchomość" />
                </figure>

                <div className={style.ads__itemDescContainer}>

                    <div className={style.ads__itemDescTop}>
                        <p className={style.ads__itemText}>{item.titleAd}</p>
                    </div>

                    <p className={style.ads__itemText}>{item.statusAd}</p>

                    <div className={style.ads__itemDescBottom}>
                        <p className={style.ads__itemText}>{item.locationAd}</p>
                    </div>
                </div>
            </div>

            <div className={style.ads__itemDescRight} >
                <p className={style.ads__itemText}>{item.priceAd} zł</p>
                {isLogIn && <button className='btn' onClick={(e) => editAd(e, item)}>Edytuj</button>}
            </div>
        </Link>
    )
}

export default ListItemAd
