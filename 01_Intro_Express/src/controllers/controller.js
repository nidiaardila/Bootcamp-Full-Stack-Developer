// app.get('/', (req, res)=>{
//     res.status(200).json({message: '😃 Bienvenido a Home...'})
// })

// app.get('/about', (req, res) => {
//     res.status(200).json({message: '🏡  Estas en about...'})
// })

// app.get('/contact', (req, res) => {
//     res.status(200).json({message: ' 📝 📝 Contactanos...'})
// })

// app.get('/services', (req, res) => {
//     res.status(200).json({message: '🧰 Nuestros Servicios...'})
// })

export const getHome = (req, res) => {
    res.status(200).json({
        message: '😃 Bienvenido a Home',
        status: 200
    })
}

export const getAbout = (req, res) => {
    res.status(200).json({
        message: '🏡  Estas en about',
        status:200
    })
}

export const getServices = (req, res) => {
    res.status(200).json({
        message: '🧰 Nuestros Servicios...',
        status:200
    })
}