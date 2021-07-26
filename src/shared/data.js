// photos
import PhotoCar from '../assets/car.jpg'


export const mainCategories = [
    {
        id: 'sale',
        name: 'Sprzedaż',
        categories: [
            { name: "Domy", nameDB: "home", photo: PhotoCar },
            { name: "Mieszkania", nameDB: "flat", photo: PhotoCar },
            { name: "Działki", nameDB: "plot", photo: PhotoCar },
        ]
    },
    {
        id: 'rent',
        name: 'Wynajem',
        categories: [
            { name: "Domy", nameDB: "home", photo: PhotoCar },
            { name: "Mieszkania", nameDB: "flat", photo: PhotoCar },
            { name: "Lokale", nameDB: "local", photo: PhotoCar },
        ]
    },
]