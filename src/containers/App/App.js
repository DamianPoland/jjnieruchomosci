import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

//firebase
import { auth, firestore } from '../../shared/fire'

// constans
import { UID, mainColName } from '../../shared/constans'

// aos
import AOS from 'aos'
import 'aos/dist/aos.css'

// components
import Nav from '../../components/Nav/Nav'
import Home from '../../components/Home/Home'
import About from '../../components/About/About'
import Offer from '../../components/Offer/Offer'
import Ad from '../../components/Ad/Ad'
import Ads from '../../components/Ads/Ads'
import Contact from '../../components/Contact/Contact'
import Login from '../../components/Login/Login'
import Footer from '../../components/Footer/Footer'
import PrivacyPolicy from '../../components/PrivacyPolicy/PrivacyPolicy'
import AlertPrivacy from '../../UI/AlertPrivacy/AlertPrivacy'



const App = () => {

  // privacy policy permission
  const [permissionPrivacyPolicy, setPermissionPrivacyPolicy] = useState(true)

  useEffect(() => {
    const permissionForPrivacyPolicy = localStorage.getItem("PRIVACY_POLICY_PERMISSION")
    if (permissionForPrivacyPolicy !== "true") {
      setPermissionPrivacyPolicy(false)
    }
  }, [])

  const setPermission = () => {
    localStorage.setItem("PRIVACY_POLICY_PERMISSION", true)
    setPermissionPrivacyPolicy(true)
  }


  // aos
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [])


  // DB listeners
  const [adsFromDB, setAdsFromDB] = useState([])
  useEffect(() => {
    firestore.collection(mainColName).onSnapshot(
      resp => {
        let helpArray = []
        resp.forEach(doc => helpArray.push(doc.data())) // get all data from DB
        setAdsFromDB(helpArray)
      },
      err => console.log(err.message))

  }, [])


  // login
  const [isLogIn, setisLogIn] = useState(localStorage.getItem(UID))
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      user ? localStorage.setItem(UID, true) : localStorage.removeItem(UID)
      user ? setisLogIn(true) : setisLogIn(false)
    })
  }, [])


  return (
    <BrowserRouter>
      <Nav path='/' />
      <Switch>
        <Route path='/home' render={props => <Home {...props} />} />
        <Route path='/about' render={props => <About {...props} />} />
        <Route path='/offer' render={props => <Offer {...props} />} />
        <Route path='/ads' exact render={props => <Ads {...props} adsFromDB={adsFromDB} isLogIn={isLogIn} />} />
        <Route path='/ads/:key' render={props => <Ad {...props} />} />
        <Route path='/contact' render={props => <Contact {...props} />} />
        <Route path='/login' render={props => <Login {...props} isLogIn={isLogIn} />} />
        <Route path='/privacy-policy' component={PrivacyPolicy} />
        <Redirect to='/home' />
      </Switch>
      <Footer path='/' />
      {permissionPrivacyPolicy ? null : <Route path='/' render={props => <AlertPrivacy {...props} click={setPermission} />} />}
    </BrowserRouter>
  );
}


export default App;
