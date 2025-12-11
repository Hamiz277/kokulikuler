document.addEventListener('DOMContentLoaded', () => {

    /* =======================================================
       1. DATA SIMBOLISME RITUAL (5 Upacara Pilihan)
       ======================================================= */
    const simbolismeData = [
        {
            judul: "Upacara Ngaben (Bali)",
            simbol: [
                {
                    nama: "Wadah/Bade (Menara)",
                    makna: "Melambangkan tingkatan alam semesta (Bhurloka, Bhuwahloka, dan Swahloka). Semakin tinggi tingkatannya, semakin tinggi status sosial yang meninggal. Wadah berfungsi mengusung jenazah menuju tempat pembakaran."
                },
                {
                    nama: "Sapi/Kerbau Tiruan",
                    makna: "Dipercaya sebagai kendaraan bagi Atma (roh) untuk mencapai alam surga (Swahloka). Sapi digunakan untuk kasta Brahmana dan Waisya, sedangkan kerbau untuk Ksatria dan Sudra."
                },
                {
                    nama: "Banten (Sesaji)",
                    makna: "Persembahan yang lengkap (bunga, buah, nasi, kue) sebagai wujud bhakti dan sarana pensucian roh."
                }
            ]
        },
        {
            judul: "Upacara Rambu Solo (Tana Toraja)",
            simbol: [
                {
                    nama: "Kerbau (Tedong)",
                    makna: "Merupakan simbol status sosial dan kekayaan. Tedong Bonga (belang) memiliki nilai paling tinggi. Kerbau yang dikorbankan adalah bekal dan kendaraan roh ke Puya (alam arwah)."
                },
                {
                    nama: "Tongkonan (Rumah Adat)",
                    makna: "Tempat jenazah disemayamkan sementara. Tongkonan melambangkan kesatuan keluarga dan asal-usul. Upacara besar selalu berpusat di depan Tongkonan."
                },
                {
                    nama: "Passiliran (Bayi)",
                    makna: "Ritual pemakaman khusus untuk bayi yang belum tumbuh gigi. Bayi dimakamkan di pohon 'Tarra', melambangkan harapan agar roh bayi kembali bersatu dengan alam."
                }
            ]
        },
        {
            judul: "Upacara Sekaten (Yogyakarta & Surakarta)",
            simbol: [
                {
                    nama: "Grebeg/Gunungan",
                    makna: "Gunungan hasil bumi (sayur, buah, makanan) yang melambangkan kemakmuran Keraton. Memperebutkan Grebeg diyakini membawa berkah dan rezeki."
                },
                {
                    nama: "Gamelan Kyai Guntur Madu",
                    makna: "Alat musik pusaka yang hanya dibunyikan saat Sekaten. Gamelan ini digunakan sebagai media syiar Islam, menarik perhatian masyarakat untuk mendengarkan khotbah."
                }
            ]
        },
        {
            judul: "Upacara Pasola (Sumba, NTT)",
            simbol: [
                {
                    nama: "Lembing Kayu",
                    makna: "Senjata yang digunakan dalam perang-perangan. Meskipun tumpul, darah yang tertumpah dipercaya sebagai persembahan paling murni kepada arwah leluhur."
                },
                {
                    nama: "Cacing Laut (Nyale)",
                    makna: "Kemunculan Nyale diyakini sebagai penanda dimulainya musim Pasola. Nyale juga dikaitkan dengan legenda Putri Mandalika."
                }
            ]
        },
        {
            judul: "Upacara Rokat Tase' (Madura)",
            simbol: [
                {
                    nama: "Kepala Kerbau/Kambing",
                    makna: "Persembahan utama yang dilarung ke laut. Simbol rasa syukur nelayan atas hasil tangkapan dan sebagai tumbal agar laut tenang dan memberikan keselamatan."
                },
                {
                    nama: "Tumpeng dan Sesaji",
                    makna: "Lambang keberkahan dan keharmonisan. Tumpeng mencerminkan gunung (kekuatan alam) dan sesaji adalah wujud syukur kepada penguasa laut."
                }
            ]
        }
    ];

    /* =======================================================
       2. LOGIKA TAMPILAN
       ======================================================= */
    
    const container = document.getElementById('simbol-detail-list');

    simbolismeData.forEach(upacara => {
        let simbolHTML = '';
        upacara.simbol.forEach(item => {
            simbolHTML += `
                <div class="simbol-item">
                    <strong>${item.nama}</strong>
                    <p>${item.makna}</p>
                </div>
            `;
        });

        const cardHTML = `
            <div class="simbol-card">
                <h2>${upacara.judul}</h2>
                ${simbolHTML}
            </div>
        `;
        container.innerHTML += cardHTML;
    });
});