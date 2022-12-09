const cekNamaBuah = (buah) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const databuah = ['jambu', 'mangga', 'pisang']
            let cek = databuah.find((item) => {
                return item === buah
            })
            if (cek) {
                resolve(cek)
            }else {
                reject(new Error('INI BUKAN BUAH')) 
            }
        }, 3000)
    })
}

cekNamaBuah('bayam').then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error.message)
})