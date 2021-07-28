// svg

import { ReactComponent as Home1 } from '../assets/icons/ads_home1.svg'
import { ReactComponent as Home2 } from '../assets/icons/ads_home2.svg'
import { ReactComponent as Flat1 } from '../assets/icons/ads_flat1.svg'
import { ReactComponent as Flat2 } from '../assets/icons/ads_flat2.svg'
import { ReactComponent as Plot } from '../assets/icons/ads_plot.svg'
import { ReactComponent as Local } from '../assets/icons/ads_local.svg'


export const mainCategories = [
    { id: 'saleHome', type: 'Sprzedaż', category: "Domy", photo: <Home1 /> },
    { id: 'saleFlat', type: 'Sprzedaż', category: "Mieszkania", photo: <Flat1 /> },
    { id: 'salePlot', type: 'Sprzedaż', category: "Działki", photo: <Plot /> },
    { id: 'rentHome', type: 'Wynajem', category: "Domy", photo: <Home2 /> },
    { id: 'rentFlat', type: 'Wynajem', category: "Mieszkania", photo: <Flat2 /> },
    { id: 'rentLocal', type: 'Wynajem', category: "Lokale", photo: <Local /> },
]

export const statusAdArray = ['Aktualne', "Rezerwacja", 'Sprzedane']