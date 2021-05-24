import React, { useEffect } from 'react'
import style from './Offer.module.css'
import { Link } from 'react-router-dom'



// images
import home__about from '../../assets/home__about.jpg'

const Offer = () => {

    // scroll to top when componene render
    useEffect(() => { window.scrollTo(0, 0) }, [])



    return (
        <main className={style.background}>

            <section className={style.container}>

                <div className={style.item}>
                    <figure className={style.item__figure}>
                        <img className="img" src={home__about} alt="bhp" />
                        <h1 className={style.item__header}>E-learning BHP</h1>
                    </figure>
                    <p className={style.item__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsam perferendis consectetur sapiente? Eius nobis veritatis perferendis rerum, doloremque, veniam dolor ut laboriosam non, fugit sit magni dolorem delectus soluta necessitatibus voluptate. Reiciendis blanditiis neque veritatis soluta omnis impedit eaque minus consequuntur, explicabo voluptatum delectus quaerat debitis suscipit sequi facere</p>
                    <p className={style.item__text}>Cena: 50zł/os</p>
                    <div><Link to='/contact' className="btn">Zamów</Link></div>
                </div>

                <div className={style.item}>
                    <figure className={style.item__figure}>
                        <img className="img" src={home__about} alt="bhp" />
                        <h1 className={style.item__header}>Szkolenie wstępne BHP</h1>
                    </figure>
                    <p className={style.item__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsam perferendis consectetur sapiente? Eius nobis veritatis perferendis rerum, doloremque, veniam dolor ut laboriosam non, fugit sit magni dolorem delectus soluta necessitatibus voluptate. Reiciendis blanditiis neque veritatis soluta omnis impedit eaque minus consequuntur, explicabo voluptatum delectus quaerat debitis suscipit sequi facere</p>
                    <p className={style.item__text}>Cena: 50zł/os</p>
                    <div><Link to='/contact' className="btn">Zamów</Link></div>
                </div>

                <div className={style.item}>
                    <figure className={style.item__figure}>
                        <img className="img" src={home__about} alt="bhp" />
                        <h1 className={style.item__header}>Szkolenie okresowe BHP</h1>
                    </figure>
                    <p className={style.item__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsam perferendis consectetur sapiente? Eius nobis veritatis perferendis rerum, doloremque, veniam dolor ut laboriosam non, fugit sit magni dolorem delectus soluta necessitatibus voluptate. Reiciendis blanditiis neque veritatis soluta omnis impedit eaque minus consequuntur, explicabo voluptatum delectus quaerat debitis suscipit sequi facere</p>
                    <p className={style.item__text}>Cena: 50zł/os</p>
                    <div><Link to='/contact' className="btn">Zamów</Link></div>
                </div>

                <div className={style.item}>
                    <figure className={style.item__figure}>
                        <img className="img" src={home__about} alt="bhp" />
                        <h1 className={style.item__header}>Obsługa BHP</h1>
                    </figure>
                    <p className={style.item__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsam perferendis consectetur sapiente? Eius nobis veritatis perferendis rerum, doloremque, veniam dolor ut laboriosam non, fugit sit magni dolorem delectus soluta necessitatibus voluptate. Reiciendis blanditiis neque veritatis soluta omnis impedit eaque minus consequuntur, explicabo voluptatum delectus quaerat debitis suscipit sequi facere</p>
                    <p className={style.item__text}>Cena: 50zł/os</p>
                    <div><Link to='/contact' className="btn">Zamów</Link></div>
                </div>

                <div className={style.item}>
                    <figure className={style.item__figure}>
                        <img className="img" src={home__about} alt="bhp" />
                        <h1 className={style.item__header}>Ocena ryzyka zawodowego</h1>
                    </figure>
                    <p className={style.item__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsam perferendis consectetur sapiente? Eius nobis veritatis perferendis rerum, doloremque, veniam dolor ut laboriosam non, fugit sit magni dolorem delectus soluta necessitatibus voluptate. Reiciendis blanditiis neque veritatis soluta omnis impedit eaque minus consequuntur, explicabo voluptatum delectus quaerat debitis suscipit sequi facere</p>
                    <p className={style.item__text}>Cena: 50zł/os</p>
                    <div><Link to='/contact' className="btn">Zamów</Link></div>
                </div>

                <div className={style.item}>
                    <figure className={style.item__figure}>
                        <img className="img" src={home__about} alt="bhp" />
                        <h1 className={style.item__header}>Dokumentacja powypadkowa</h1>
                    </figure>
                    <p className={style.item__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsam perferendis consectetur sapiente? Eius nobis veritatis perferendis rerum, doloremque, veniam dolor ut laboriosam non, fugit sit magni dolorem delectus soluta necessitatibus voluptate. Reiciendis blanditiis neque veritatis soluta omnis impedit eaque minus consequuntur, explicabo voluptatum delectus quaerat debitis suscipit sequi facere</p>
                    <p className={style.item__text}>Cena: 50zł/os</p>
                    <div><Link to='/contact' className="btn">Zamów</Link></div>
                </div>

                <div className={style.item}>
                    <figure className={style.item__figure}>
                        <img className="img" src={home__about} alt="bhp" />
                        <h1 className={style.item__header}>Instrukcje, znaki BPH i Ppoż</h1>
                    </figure>
                    <p className={style.item__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsam perferendis consectetur sapiente? Eius nobis veritatis perferendis rerum, doloremque, veniam dolor ut laboriosam non, fugit sit magni dolorem delectus soluta necessitatibus voluptate. Reiciendis blanditiis neque veritatis soluta omnis impedit eaque minus consequuntur, explicabo voluptatum delectus quaerat debitis suscipit sequi facere</p>
                    <p className={style.item__text}>Cena: 50zł/os</p>
                    <div><Link to='/contact' className="btn">Zamów</Link></div>
                </div>

                <div className={style.item}>
                    <figure className={style.item__figure}>
                        <img className="img" src={home__about} alt="bhp" />
                        <h1 className={style.item__header}>Audyt BHP</h1>
                    </figure>
                    <p className={style.item__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsam perferendis consectetur sapiente? Eius nobis veritatis perferendis rerum, doloremque, veniam dolor ut laboriosam non, fugit sit magni dolorem delectus soluta necessitatibus voluptate. Reiciendis blanditiis neque veritatis soluta omnis impedit eaque minus consequuntur, explicabo voluptatum delectus quaerat debitis suscipit sequi facere</p>
                    <p className={style.item__text}>Cena: 50zł/os</p>
                    <div><Link to='/contact' className="btn">Zamów</Link></div>
                </div>


            </section>
        </main >
    )
}

export default Offer