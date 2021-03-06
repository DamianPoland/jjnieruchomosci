import React, { useState, useEffect } from 'react'
import style from './EditAd.module.css'
import { mainCategories, statusAdArray } from '../../shared/data'

// image compression library
import imageCompression from 'browser-image-compression';

//firebase
import { firestore, storage } from '../../shared/fire'

// constans
import { mainColName } from '../../shared/constans'

//photos
import Photo from '../../assets/photo.png'

// components
import AlertSmall from "../../UI/AlertSmall/AlertSmall"


const EditAd = ({ setIsEditAdVisible, editAdData }) => {


    // generator [yyyy-mm-dd date1970]
    const idGenerator = () => `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()} ${new Date().getTime()}`

    // show or hide small alert
    const [isAlertSmallShow, setIsAlertSmallShow] = useState(false)

    // adId
    const [adId, setAdId] = useState(idGenerator())

    // CATEGORY & STATUS ----------------------------------------------------------------------------------------------------

    const [categoryAd, setCategoryAd] = useState(mainCategories[0].id)
    const [statusAd, setStatusAd] = useState(statusAdArray[0])


    // PHOTOS----------------------------------------------------------------------------------------------------------------

    const [image, setImage] = useState([null, null, null, null, null, null, null, null, null, null]) // input image value
    const [imageURL, setImageURL] = useState([null, null, null, null, null, null, null, null, null, null]) // write URL from DB
    const [smallImageURL, setSmallImageURL] = useState("") // write URL from DB
    const [progress, setProgress] = useState(0) // progress bar
    const [showProgress, setShowProgress] = useState([false, false, false, false, false, false, false, false, false, false]) // set progress visibility

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

    // add image 8 to DB and show to user
    useEffect(() => {
        addImgToDB(image[8], 8)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [image[8]])

    // add image 9 to DB and show to user
    useEffect(() => {
        addImgToDB(image[9], 9)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [image[9]])


    // add image to DB and show to user, index -1 is for smallImageURL
    const addImgToDB = async (image, index, maxSizeMB = 0.5, maxWidthOrHeight = "1280") => {

        // if image is empty then return
        if (!image) { return }

        // if file is not image then return
        if (image.type.split("/")[0] !== 'image') {
            setIsAlertSmallShow({ alertIcon: 'info', description: 'To nie jest zdj??cie.', animationTime: '2', borderColor: 'orange' })
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
                setIsAlertSmallShow({ alertIcon: 'error', description: 'B????d. Kompresja nie powiod??a si??. Spr??buj ponownie p????niej.', animationTime: '2', borderColor: 'red' })
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
                setIsAlertSmallShow({ alertIcon: 'error', description: 'B????d. Spr??buj ponownie p????niej.', animationTime: '2', borderColor: 'red' })
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
                        setIsAlertSmallShow({ alertIcon: 'error', description: 'B????d. Spr??buj ponownie p????niej.', animationTime: '2', borderColor: 'red' })
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


    // DESCRIPTIONS----------------------------------------------------------------------------------------------------------------

    const [titleAd, setTitleAd] = useState('')
    const [descriptionAd, setDescriptionAd] = useState('')
    const [priceAd, setPriceAd] = useState('')
    const [measurementAd, setMeasurementAd] = useState('')
    const [locationAd, setLocationAd] = useState('')



    // IF AD IS EDITING ----------------------------------------------------------------------------------------------------------------


    useEffect(() => editAdData && addAllDataToInputsIfAdIsEdit(editAdData), [editAdData])

    const addAllDataToInputsIfAdIsEdit = editAdData => {

        // adId
        setAdId(editAdData.adId)

        // TYPE CATEGORY STATUS
        setCategoryAd(editAdData.categoryAd)
        setStatusAd(editAdData.statusAd)

        // PHOTOS
        setImage([null, null, null, null, null, null, null, null, null, null])
        setImageURL(editAdData.imageURL)
        setSmallImageURL(editAdData.smallImageURL)
        setProgress(0)
        setShowProgress([false, false, false, false, false, false, false, false, false, false])

        // DESCRIPTIONS
        setTitleAd(editAdData.titleAd)
        setDescriptionAd(editAdData.descriptionAd)
        setPriceAd(editAdData.priceAd)
        setMeasurementAd(editAdData.measurementAd)
        setLocationAd(editAdData.locationAd)
    }


    // FUNCTIONS ----------------------------------------------------------------------------------------------------------------


    // after finish form, use form for: add or edit
    const handleReadyAd = () => {
        const obj = getDataObjectWithAllInputs()
        sendAddItemToDB(obj)
    }

    const getDataObjectWithAllInputs = () => {
        return {
            adId,
            categoryAd,
            statusAd,
            imageURL,
            smallImageURL,
            titleAd,
            descriptionAd,
            priceAd,
            measurementAd,
            locationAd,
        }
    }


    const sendAddItemToDB = (obj) => {
        firestore.collection(mainColName).doc(adId).set(obj)
            .then(() => {
                console.log('succes')
                setIsEditAdVisible(false)
            })
            .catch(err => console.log('err', err))

    }


    const cancelForm = () => {

        // delete all photo when cance - if is editing then no delete photos
        !editAdData && deleteImagesAndFolderFromDB()
        setIsEditAdVisible(false)
    }


    const deleteAd = () => {
        deleteImagesAndFolderFromDB()
        firestore.collection(mainColName).doc(adId).delete() //delete document with id from collection
        setIsEditAdVisible(false)
    }


    const deleteImagesAndFolderFromDB = () => {
        const ref = storage.ref(`images/${adId}`)
        ref.listAll()
            .then(resp => {
                resp.items.forEach(fileRef => {
                    storage.ref(fileRef.fullPath).getDownloadURL()
                        .then(url => {
                            storage.refFromURL(url).delete()
                                .then()
                                .catch(error => console.log("error deletion, error: ", error))
                        })
                })
            })
            .catch(error => console.log(error))
    }





    return (
        <main className={style.ad}>

            {/* AlertSmall */}
            {isAlertSmallShow && <AlertSmall alertIcon={isAlertSmallShow.alertIcon} description={isAlertSmallShow.description} animationTime={isAlertSmallShow.animationTime} borderColor={isAlertSmallShow.borderColor} hide={() => setIsAlertSmallShow(false)} />}


            <div className={style.ad__section}>

                {/* category and status */}
                <div className={style.ad__container}>

                    <div className={style.ad__itemContainer}>
                        <p className={style.ad__itemDesc}>Kategoria:</p>
                        <select className={style.ad__itemList} onChange={e => setCategoryAd(e.target.value)} value={categoryAd}>
                            {mainCategories.map(item => <option key={item.id} value={item.id}>{`${item.type} - ${item.category}`}</option>)}
                        </select>
                    </div>

                    <div className={style.ad__itemContainer}>
                        <p className={style.ad__itemDesc}>Status:</p>
                        <select className={style.ad__itemList} onChange={e => setStatusAd(e.target.value)} value={statusAd}>
                            {statusAdArray.map(item => <option key={item} value={item}>{item}</option>)}
                        </select>
                    </div>

                </div>


                {/* Photos  */}
                <div className={style.ad__containerPhotos}>
                    <p className={style.ad__itemContainer}>Zdj??cia:</p>
                    <div className={style.ad__containerPhotos}>
                        {[...Array(10)].map((item, index) => {
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
                                    <label htmlFor={`file${index}`} className={` ${style.btn} ${style.ad__itemLabel}`}><img className={style.ad__itemImage} src={imageURL[index] || Photo} alt='podgl??d zdj??cia.' /> </label>
                                    {showProgress[index] &&
                                        <div className={style.ad__progressContainer}>
                                            <progress className={style.ad__progressBar} value={progress} max='100' />
                                        </div>}
                                    {(index === 0 && !imageURL[0]) && <p className={style.ad__itemFirstPhotDesc}>Zdj??cie g????wne</p>}
                                </div>
                            )
                        })}
                    </div>
                </div>


                {/* descriptions  */}
                <div className={`${style.ad__itemContainer} ${style.ad__itemContainerWide}`}>
                    <label className={style.ad__itemDesc}>Tytu?? og??oszenia (max 50 znak??w):</label>
                    <input onChange={event => setTitleAd(event.target.value)} value={titleAd} className={style.ad__itemList} placeholder='Tytu?? og??oszenia' type='text' maxLength="50" />
                </div>

                <div className={`${style.ad__itemContainer} ${style.ad__itemContainerWide}`}>
                    <label className={style.ad__itemDesc}>Opis (max 1000 znak??w):</label>
                    <textarea onChange={event => setDescriptionAd(event.target.value)} value={descriptionAd} className={style.ad__itemList} type='textarea' rows='8' placeholder="Opis og??oszenia" maxLength="1000" />
                </div>

                <div className={style.ad__container}>

                    <div className={style.ad__itemContainer}>
                        <label className={style.ad__itemDesc}>Cena w z??:</label>
                        <input onChange={event => setPriceAd(event.target.value)} value={priceAd} className={style.ad__itemList} type='text' placeholder="np. 200 000" maxLength="9" />
                    </div>

                    <div className={style.ad__itemContainer}>
                        <label className={style.ad__itemDesc}>Metra?? w m2:</label>
                        <input onChange={event => setMeasurementAd(event.target.value)} value={measurementAd} className={style.ad__itemList} type='text' placeholder="np. 50" maxLength="7" />
                    </div>

                    <div className={style.ad__itemContainer}>
                        <label className={style.ad__itemDesc}>Lokalizacja:</label>
                        <input onChange={event => setLocationAd(event.target.value)} value={locationAd} className={style.ad__itemList} type='text' placeholder="np. Gdynia Fikakowo" maxLength="50" />
                    </div>

                </div>

                {/* buttons */}
                <div className={style.btnContainer}>
                    <button className={`${style.btn} ${style.btnMmargin}`} onClick={cancelForm}>Anuluj</button>
                    <button className={style.btn} onClick={handleReadyAd}>Zapisz</button>
                </div>
                {editAdData &&
                    <div className={style.btnContainer}>
                        <button className={style.btn} onClick={deleteAd}>Usu??</button>
                    </div>}

            </div>
        </main >
    )
}

export default EditAd

