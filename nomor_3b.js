const cekjeniskendaraan = (kendaraan) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const datakendaraan = ['sepeda', 'motor', 'mobil', 'pesawat']
            let cek = datakendaraan.find((item) => {
                return item === kendaraan
            })
            if (cek) {
                resolve(cek)
            }else {
                reject(new Error('ITU BUKAN TERMASUK KENDARAAN')) 
            }
        }, 3000)
    })
}

const jeniskendaraan = async () => {
    try{
        let result = await cekjeniskendaraan('ngesot')
        console.log(result)
    }catch(error){
        console.log(error.message)
    }
}

jeniskendaraan()