# hari pertama belajar next js
ini murni definisi secara pribadi
next js merupakan react framework yang berjalan di atas react yang biasanya react sendiri unopinonated (yaitu developer secara bebas mau mengembangkan sistem dengan aturan main bagaimana) sedangkan next js merupakan opionated (yaitu developer harus mengikuti struktur yang sudah di buat oleh next js itu sendiri) 

## rendering
- client side rendering : dimana me render ui di sisi client 
- static site generation : dimana me render ui di build time(dimana untuk halaman yang statis data nya tidak berubah ubah)
- server side rendering : dimana me render ui di run time (dimana server menyiapkan halaman untuk client sebelum di beri ke client)


## instalasi
menggunakan perintah npx create-next-app untuk instalasi create projek next js nya 

# hari kedua belajar next js

# routing dasar
di dalam next js menggunakan routing file base jadi file atau folder yang ada di dalam folder pages akan otomatis menjadi routing baru

## dynamic routing
di dalam next js dynamic routing itu membuat file baru dengan di nama [slug].tsx nah disitu akan menjadi dynamicrouting dan page dari dyanmic routing tersebut untuk mendapatkan path dynamic nya di next js anda bisa menggunakan hooks useRouter disana ada object query dan di dalam nya disitulah nama dan isi dari dynamic routing nya 

## aturan pembuatan page baru yang baru saya tau
saya mendapati error saat saya tidak export default function component nya sehingga bisa saya simpulkan bahwa untuk membuat component atau page layouting baru wajib menggunakan export default serta nama function nya di awali dengan huruf besar

# untuk parameter di function
untuk parameter di function tsx sangat strict kita wajib menggunakan jenis dari parameter nya apa kalau tidak akan menimbulkan error atau bisa di bilang wajib menggunakan type parameter contoh. 
```ts
type layoutProps = {
        children:React.ReactNode
    }

export default function Layouting(props:layoutProps){
        const {children} = props;
        return children
    }
```

# untuk import alias
di dalam next js jika kita ingin navigasi import file itu bisa dengan mudah tanpa perlu ../ untuk keluar, kita bisa menggunakan @ didepan path file yang kita mau import itu kalau saya tebak itu relative folder src 
