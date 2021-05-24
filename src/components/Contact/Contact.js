import React, { useState, useEffect } from 'react'
import style from './Contact.module.css'
import emailjs from 'emailjs-com';


// components
import Alert from '../../UI/Alert/Alert'
import Spinner from '../../UI/Spinner/Spinner'

//svg
import { ReactComponent as Phone } from '../../assets/icons/phone.svg'
import { ReactComponent as Location } from '../../assets/icons/location.svg'
import { ReactComponent as Email } from '../../assets/icons/email.svg'
import { ReactComponent as Facebbok } from '../../assets/icons/facebook.svg'
import { ReactComponent as Clock } from '../../assets/icons/clock.svg'
import { ReactComponent as Envelope } from '../../assets/icons/envelope.svg'


const Contact = () => {


    // scroll to top when componene render
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // input Name
    const [inputName, setInputName] = useState('') // input value
    const [inputNameIsInvalid, setInputNameIsInvalid] = useState(false) // only for set isValid/inInvalid before send

    // input Email
    const [inputEmail, setInputEmail] = useState('') // input value
    const [inputEmailIsInvalid, setInputEmailIsInvalid] = useState(false) // only for set isValid/inInvalid before send

    // input Message
    const [inputMessage, setInputMessage] = useState('') // input value
    const [inputMessageIsInvalid, setInputMessageIsInvalid] = useState(false) // only for set isValid/inInvalid before send

    // Alert
    const [isAlertShow, setIsAlertShow] = useState(false)

    // Spinner
    const [isSpinnerShow, setIsSpinnerShow] = useState(false)

    // form animation
    const [isFormAnimation, setIsFormAnimation] = useState(false)

    // click Send
    const sendMessage = event => {

        event.preventDefault()

        // validation 
        let isInvalid = false

        // name validation if is min 3 chars
        if (inputName.trim().length < 3) {
            setInputNameIsInvalid("Niepoprawne imię.")
            isInvalid = true
        } else {
            setInputNameIsInvalid(false)
        }

        //email validation
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(inputEmail).toLowerCase())) {
            setInputEmailIsInvalid("Niepoprawny adres e-mail.")
            isInvalid = true
        } else {
            setInputEmailIsInvalid(false)
        }

        // message validation if is min 10 chars
        if (inputMessage.trim().length <= 10) {
            setInputMessageIsInvalid("Wiadomość powinna zawierać minimum 10 znaków")
            isInvalid = true
        } else {
            setInputMessageIsInvalid(false)
        }

        //check if all inputs are valid
        if (isInvalid) {
            return
        }

        //show spinner
        setIsSpinnerShow(true)

        //sent email
        emailjs.sendForm(process.env.REACT_APP_TO_SERVICE_ID, process.env.REACT_APP_TO_TEMPLATE_ID, event.target, process.env.REACT_APP_TO_USER_ID)
            .then(() => {

                // turn off spinner
                setIsSpinnerShow(false)

                // turn on animation sent
                setIsFormAnimation(true)
                const okId = document.querySelector('#okId')
                okId.classList.add(style.svgOkIdAnim)

                // clear inputs after 1s when during animation
                setTimeout(() => {
                    setInputName('') // clear input
                    setInputEmail('') // clear input
                    setInputMessage('') // clear input
                }, 1000)

                // clear animation classes after 4s when animations stop
                setTimeout(() => {
                    setIsFormAnimation(false)
                    okId.classList.remove(style.svgOkIdAnim)
                }, 4000)

            }, (error) => {
                console.log(error.text)
                setIsSpinnerShow(false) // turn off spinner
                setIsAlertShow(true) // show error alert
            })
    }


    return (
        <main className={style.section}>

            <div className={style.section__container}>

                {/* contact links  */}
                <section className={style.contacts}>
                    <div className={style.contacts__container}>
                        <div className={style.contacts__item}>
                            <a href='tel:+48883305348' className={style.svg}><Phone /></a>
                            <p className={style.contacts__desc}>+48 883-305-348</p>
                        </div>
                        <div className={style.contacts__item}>
                            <a href={`http://maps.google.com/?q=Reda Garncarska 11/c37`} target='_blank' rel="noopener noreferrer" className={style.svg}><Location /></a>
                            <p className={style.contacts__desc}>Reda, ul. Garncarska 11/c37</p>
                        </div>
                        <div className={style.contacts__item}>
                            <a href='mailto:biuro@stronabhp.pl?subject=Zapytanie' className={style.svg}><Email /></a>
                            <p className={style.contacts__desc}>biuro@stronaBHP.pl</p>
                        </div>
                        <div className={style.contacts__item}  >
                            <a href='/' className={style.svg}><Facebbok /></a>
                            <p className={style.contacts__desc}>Facebook</p>
                        </div>
                        <div className={style.contacts__item} >
                            <a href='/' className={style.svg}><Clock /></a>
                            <p className={style.contacts__desc}>Pn - Pt 8.00-16.00</p>
                        </div>
                    </div>
                </section>


                {/* form */}
                <section className={style.form}>
                    <div className={style.form__container}>
                        <form className={`${style.form__content} ${isFormAnimation && style.formAnim}`} onSubmit={sendMessage} noValidate>
                            {isAlertShow && <Alert click={() => setIsAlertShow(false)} alertName='Przepraszamy' alertDetails='Wiadomości nie udało się wysłać. Proszę skorzystać z innej formy kontaktu' />}
                            {isSpinnerShow && <Spinner />}
                            <div className={style.inputContainer}>
                                <input onChange={event => setInputName(event.target.value)} value={inputName} onFocus={() => setInputNameIsInvalid(false)} className={`${style.input} ${inputNameIsInvalid && style.inputIsInvalid}`} type='text' required name="name" />
                                <label className={style.label}>imię</label>
                                {inputNameIsInvalid && <p className={style.isValid}>{inputNameIsInvalid}</p>}
                            </div>
                            <div className={style.inputContainer}>
                                <input onChange={event => setInputEmail(event.target.value)} value={inputEmail} onFocus={() => setInputEmailIsInvalid(false)} className={`${style.input} ${inputEmailIsInvalid && style.inputIsInvalid}`} type='text' required name="email" />
                                <label className={style.label}>e-mail</label>
                                {inputEmailIsInvalid && <p className={style.isValid}>{inputEmailIsInvalid}</p>}
                            </div>
                            <div className={style.inputContainer}>
                                <textarea onChange={event => setInputMessage(event.target.value)} value={inputMessage} onFocus={() => setInputMessageIsInvalid(false)} className={`${style.input} ${inputMessageIsInvalid && style.inputIsInvalid}`} type='textarea' rows='5' required name="message" />
                                <label className={style.label}>wiadomość</label>
                                {inputMessageIsInvalid && <p className={style.isValid}>{inputMessageIsInvalid}</p>}
                            </div>
                            <input className={style.btn} type="submit" value="Wyślij" />
                        </form>
                        <div className={`${style.envelope} ${isFormAnimation && style.envelopeAnim}`}>
                            <Envelope />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Contact

