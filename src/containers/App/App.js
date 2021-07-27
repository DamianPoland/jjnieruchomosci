import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

//firebase
import { auth, firestore } from '../../shared/fire'

// data
import { mainCategories } from '../../shared/data'

// constans
import { mainColName } from '../../shared/constans'

// aos
import AOS from 'aos'
import 'aos/dist/aos.css'

// components
import Nav from '../../components/Nav/Nav'
import Home from '../../components/Home/Home'
import About from '../../components/About/About'
import Offer from '../../components/Offer/Offer'
import Ad from '../../components/Ad/Ad'
import Sale from '../../components/Sale/Sale'
import Rent from '../../components/Rent/Rent'
import Contact from '../../components/Contact/Contact'
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
  const [saleDBData, setSaleDBData] = useState([])
  const [rentDBData, setRentDBData] = useState([])
  useEffect(() => {

    // listener for main collection
    firestore.collection(mainColName).onSnapshot(
      resp => {
        let helpArray = []
        resp.forEach(doc => helpArray.push(doc.data())) // get all data from DB
        setSaleDBData(helpArray.filter(i => i.typeAd === mainCategories[0].id)) // filter only sale ads
        setRentDBData(helpArray.filter(i => i.typeAd === mainCategories[1].id)) // filter only rent ads
        console.log("saleDBData: ", helpArray);
      },
      err => console.log(err.message))

  }, [])

  return (
    <BrowserRouter>
      <Nav path='/' />
      <Switch>
        <Route path='/home' render={props => <Home {...props} />} />
        <Route path='/about' render={props => <About {...props} />} />
        <Route path='/offer' exact render={props => <Offer {...props} />} />
        <Route path='/offer/:key' render={props => <Ad {...props} />} />
        <Route path='/sale' render={props => <Sale {...props} dataFromDB={saleDBData} />} />
        <Route path='/rent' render={props => <Rent {...props} dataFromDB={rentDBData} />} />
        <Route path='/contact' render={props => <Contact {...props} />} />
        <Route path='/privacy-policy' component={PrivacyPolicy} />
        <Redirect to='/home' />
      </Switch>
      <Footer path='/' />
      {permissionPrivacyPolicy ? null : <Route path='/' render={props => <AlertPrivacy {...props} click={setPermission} />} />}
    </BrowserRouter>
  );
}


export default App;
