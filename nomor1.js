const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            }else {
                reject(new Error('Hari ini bukan hari kerja')) 
            }
        }, 3000)
    })
}

// then catch
cekHariKerja('kamis').then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error.message)
})
//Penjelasan :
// saat variabel cekHariKerja mencari 'kamis' menggunakan chaining then, 
// ketika operasi selesai dengan sukses (resolved) dapat menemukan 'minggu' pada 
// array data maka muncul hari pada list array tersebut. 
// pada chaining catch, ketika ada gagal (reject) hari yang bukan dalam list array maka akan muncul 'hari ini bukan hari kerja'


// try catch 
const harirajin = async () => {
    try{
        let result = await cekHariKerja('minggu')
        console.log(result)
    }catch(error){
        console.log(error.message)
    }
}

harirajin()

//penjelasan 
// jika menggunakan chaining try menginputkan data true (data dalam data array) maka akan benar
// jika bukan, maka akan diarahkan ke chaining catch