import React, { useState, useEffect } from 'react'
import style from './EditAd.module.css'
import { mainCategories } from '../../shared/data'

// image compression library
import imageCompression from 'browser-image-compression';

//firebase
import { auth, firestore, storage } from '../../shared/fire'

//photos
import Photo from '../../assets/photo.png'

// components
import AlertSmall from "../../UI/AlertSmall/AlertSmall"


const EditAd = () => {

    // show or hide small alert
    const [isAlertSmallShow, setIsAlertSmallShow] = useState(false)

    // adId
    const [adId, setAdId] = useState('example adId')

    // TYPE and CATEGORY ----------------------------------------------------------------------------------------------------
    const [type, setType] = useState(mainCategories[0].id)
    const [category, setCategory] = useState("")
    useEffect(() => { setCategory(mainCategories[0].categories[0].nameDB) }, [type])


    // PHOTOS----------------------------------------------------------------------------------------------------------------
    // STATE - input Image
    const [image, setImage] = useState([null, null, null, null]) // input image value
    const [imageURL, setImageURL] = useState([null, null, null, null]) // write URL from DB
    const [smallImageURL, setSmallImageURL] = useState("") // write URL from DB
    const [progress, setProgress] = useState(0) // progress bar
    const [showProgress, setShowProgress] = useState([false, false, false, false]) // set progress visibility

    // get photo from file/camera
    const getPhoto = (e, index) => {
        setImage(prevState => {
            let helpArray = [...prevState]
            helpArray[index] = e.target.files[0]
            return helpArray
        })
    }
    // add image 0 to DB and show to user
    useEffect(() => {
        addImgToDB(image[0], 0)
        addImgToDB(image[0], -1, 0.05, 160) //index -1 is for smallImageURL
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [image[0]])

    // add image 1 to DB and show to user
    useEffect(() => {
        addImgToDB(image[1], 1)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [image[1]])

    // add image 2 to DB and show to user
    useEffect(() => {
        addImgToDB(image[2], 2)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [image[2]])

    // add image 3 to DB and show to user
    useEffect(() => {
        addImgToDB(image[3], 3)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [image[3]])

    // add image 4 to DB and show to user
    useEffect(() => {
        addImgToDB(image[4], 4)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [image[4]])

    // add image 5 to DB and show to user
    useEffect(() => {
        addImgToDB(image[5], 5)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [image[5]])

    // add image 6 to DB and show to user
    useEffect(() => {
        addImgToDB(image[6], 6)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [image[6]])

    // add image 7 to DB and show to user
    useEffect(() => {
        addImgToDB(image[7], 7)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [image[7]])


    // add image to DB and show to user, index -1 is for smallImageURL
    const addImgToDB = async (image, index, maxSizeMB = 0.5, maxWidthOrHeight = "1280") => {

        // if image is empty then return
        if (!image) { return }

        // if file is not image then return
        if (image.type.split("/")[0] !== 'image') {
            setIsAlertSmallShow({ alertIcon: 'info', description: 'To nie jest zdjęcie.', animationTime: '2', borderColor: 'orange' })
            return
        }

        // set progress bar visibile if index !== -1 => index -1 is for smallImageURL
        if (index !== -1) {
            setShowProgress(prevState => {
                let helpArray = [...prevState]
                helpArray[index] = true
                return helpArray
            })
        }

        // check image size, if more than 0.5MB or for smallImageURL then compress photo
        if (image.size >= 1048576 / 2 || (index === -1)) {

            // compression options
            const options = {
                maxSizeMB: maxSizeMB, // in MB
                maxWidthOrHeight: maxWidthOrHeight, // in px
                useWebWorker: true
            }

            // start compression
            try {
                image = await imageCompression(image, options)

            } catch (error) {

                // set progress bar invisibile
                console.log("compression error message: ", error.message)
                setIsAlertSmallShow({ alertIcon: 'error', description: 'Błąd. Kompresja nie powiodła się. Spróbuj ponownie później.', animationTime: '2', borderColor: 'red' })
                setProgress(0)
                setShowProgress(prevState => {
                    let helpArray = [...prevState]
                    helpArray[index] = false
                    return helpArray
                })

                // return to not save in DB
                return
            }
        }

        // send photo to DB
        const uploadTask = storage.ref(`images/${adId}/${index}`).put(image)
        uploadTask.on('state_changed',
            snapshot => { setProgress(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)) },//progress bar
            err => { //show if error
                console.log('upload error: ', err)
                setIsAlertSmallShow({ alertIcon: 'error', description: 'Błąd. Spróbuj ponownie później.', animationTime: '2', borderColor: 'red' })
                setProgress(0)
                // set progress bar invisibile
                setShowProgress(prevState => {
                    let helpArray = [...prevState]
                    helpArray[index] = false
                    return helpArray
                })
            },
            () => {
                storage // get url
                    .ref(`images/${adId}`)
                    .child(`${index}`)
                    .getDownloadURL() // get url
                    .then(url => {

                        // write url in state, index - 1 is for smallImageURL
                        if (index !== -1) {
                            setImageURL(prevState => {
                                let helpArray = [...prevState]
                                helpArray[index] = url
                                return helpArray
                            })
                        } else {
                            setSmallImageURL(url)
                        }

                        setProgress(0)
                        // set progress bar invisibile
                        setShowProgress(prevState => {
                            let helpArray = [...prevState]
                            helpArray[index] = false
                            return helpArray
                        })
                    })

                    .catch(errStorage => {
                        console.log('storage errStorage', errStorage)
                        setIsAlertSmallShow({ alertIcon: 'error', description: 'Błąd. Spróbuj ponownie później.', animationTime: '2', borderColor: 'red' })
                        setProgress(0)
                        // set progress bar invisibile
                        setShowProgress(prevState => {
                            let helpArray = [...prevState]
                            helpArray[index] = false
                            return helpArray
                        })
                    })
            })
    }


    return (
        <main className={style.ad}>

            {/* AlertSmall */}
            {isAlertSmallShow && <AlertSmall alertIcon={isAlertSmallShow.alertIcon} description={isAlertSmallShow.description} animationTime={isAlertSmallShow.animationTime} borderColor={isAlertSmallShow.borderColor} hide={() => setIsAlertSmallShow(false)} />}

            <div className={style.ad__section}>

                <div className={style.ad__container}>
                    <div className={style.ad__itemContainer}>
                        <p className={style.ad__itemDesc}>Typ:</p>
                        <select className={style.ad__itemList} onChange={e => setType(e.target.value)} value={type}>
                            {mainCategories.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
                        </select>
                    </div>

                    <div className={style.ad__itemContainer}>
                        <p className={style.ad__itemDesc}>Kategoria:</p>
                        <select className={style.ad__itemList} onChange={e => setCategory(e.target.value)} value={category}>
                            {mainCategories.find(item => item.id === type).categories.map(item => <option key={item.nameDB} value={item.nameDB}>{item.name}</option>)}
                        </select>
                    </div>
                </div>


                <div className={style.ad__containerPhotos}>
                    <p className={style.ad__itemContainer}>Zdjęcia:</p>
                    <div className={style.ad__containerPhotos}>


                        {[...Array(8)].map((item, index) => {
                            return (
                                <div key={index} className={style.ad__itemContainer}>
                                    <input
                                        id={`file${index}`}
                                        // className=""
                                        style={{ display: "none" }}
                                        type='file'
                                        onChange={(e) => getPhoto(e, index)}
                                        accept='image/*' //image/* = .jpg, .jpeg, .bmp, .svg, .png
                                    />
                                    <label htmlFor={`file${index}`} className={` ${style.btn} ${style.ad__itemLabel}`}><img className={style.ad__itemImage} src={imageURL[index] || Photo} alt='podgląd zdjęcia.' /> </label>
                                    {showProgress[index] &&
                                        <div className={style.ad__progressContainer}>
                                            <progress className={style.ad__progressBar} value={progress} max='100' />
                                        </div>}
                                    {(index === 0 && !imageURL[0]) && <p className={style.ad__itemFirstPhotDesc}>Zdjęcie główne</p>}
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </main>
    )
}

export default EditAd
