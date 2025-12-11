document.addEventListener('DOMContentLoaded', () => {

    /* =======================================================
       1. DATA 12 UPACARA ADAT
       ======================================================= */
    const upacaraData = {
        "ngaben": {
            judul: "Upacara Ngaben",
            asal: "Bali",
            agama: "Hindu Dharma",
            persembahan: "Pembakaran jenazah, diiringi sesaji (Banten), dan hewan kurban (kerbau/sapi) sebagai kendaraan roh.",
            deskripsi: "Ritual wajib pembakaran jenazah untuk melepaskan roh dari ikatan duniawi dan menyucikannya."
        },
        "rambu-solo": {
            judul: "Upacara Rambu Solo",
            asal: "Tana Toraja, Sulawesi Selatan",
            agama: "Aluk To Dolo (Kepercayaan Leluhur)",
            persembahan: "Pengorbanan kerbau dan babi dalam jumlah besar (tergantung status sosial).",
            deskripsi: "Upacara pemakaman yang megah dan berhari-hari. Tujuannya adalah mengantar arwah ke alam baka (Puya)."
        },
        "sekaten": {
            judul: "Upacara Sekaten",
            asal: "Yogyakarta & Surakarta, Jawa Tengah",
            agama: "Islam (Akulturasi Jawa)",
            persembahan: "Gunungan hasil bumi (Grebeg) yang diarak dan diperebutkan oleh masyarakat.",
            deskripsi: "Perayaan untuk memperingati hari kelahiran Nabi Muhammad SAW, ditandai dengan bunyi gamelan keraton."
        },
        "maudu-lompoa": {
            judul: "Upacara Maudu Lompoa",
            asal: "Gowa, Sulawesi Selatan",
            agama: "Islam",
            persembahan: "Perahu hias yang ditumpangi sesaji makanan, lilin, dan hasil bumi, diarak di sungai Jeneberang.",
            deskripsi: "Upacara adat peringatan Maulid Nabi Muhammad SAW yang dipusatkan di sekitar makam raja-raja Gowa."
        },
        "pasola": {
            judul: "Upacara Pasola",
            asal: "Sumba, Nusa Tenggara Timur (NTT)",
            agama: "Maringgi (Tradisional Sumba)",
            persembahan: "Darah yang tertumpah ke tanah dari kuda atau penunggangnya.",
            deskripsi: "Ritual perang-perangan antara dua kelompok penunggang kuda yang saling melempar lembing kayu untuk meminta kesuburan tanah."
        },
        "tiwah": {
            judul: "Upacara Tiwah",
            asal: "Dayak Ngaju, Kalimantan Tengah",
            agama: "Kaharingan",
            persembahan: "Pengorbanan hewan besar (kerbau/sapi) dan sesaji khusus yang dipersiapkan dalam tempo lama.",
            deskripsi: "Upacara pemakaman tingkat akhir untuk memindahkan tulang belulang ke rumah khusus (Sandung), agar roh bebas ke Lewu Tatau (Surga)."
        },
        "bau-nyale": {
            judul: "Upacara Bau Nyale",
            asal: "Lombok & Sumbawa, Nusa Tenggara Barat (NTB)",
            agama: "Sasak & Samawa (Tradisional)",
            persembahan: "Sesaji tradisional di pantai untuk menyambut kemunculan cacing laut (Nyale).",
            deskripsi: "Ritual menangkap cacing laut (Nyale) yang dipercaya sebagai jelmaan Putri Mandalika. Diadakan untuk memohon kemakmuran."
        },
        "seren-taun": {
            judul: "Upacara Seren Taun",
            asal: "Jawa Barat (Sunda)",
            agama: "Sunda Wiwitan",
            persembahan: "Tumpukan padi (hasil panen) yang diserahkan kepada tetua adat, sebagai wujud syukur kepada Dewi Sri.",
            deskripsi: "Upacara adat panen raya sebagai wujud syukur masyarakat Sunda atas hasil pertanian yang melimpah."
        },
        "tabuik": {
            judul: "Upacara Tabuik",
            asal: "Pariaman, Sumatera Barat",
            agama: "Islam Syiah (Dipengaruhi tradisi lokal)",
            persembahan: "Pengarakan peti tiruan (Tabuik) yang dihias, lalu dibuang ke laut/sungai.",
            deskripsi: "Peringatan wafatnya cucu Nabi Muhammad, Husein bin Ali. Merupakan ritual unik yang diwarnai semangat budaya Minang."
        },
        "fahombo-batu": {
            judul: "Upacara Fahombo Batu",
            asal: "Nias, Sumatera Utara",
            agama: "Tradisional/Hukum Adat",
            persembahan: "Tidak ada persembahan sesaji, yang dipersembahkan adalah keberanian dan keterampilan pemuda.",
            deskripsi: "Ritual lompat batu setinggi 2 meter. Bertujuan sebagai uji kedewasaan seorang pemuda sebelum dianggap dewasa dan layak menikah/berperang."
        },
        "tabalong-bersunat": {
            judul: "Upacara Tabalong Bersunat",
            asal: "Dayak, Kalimantan Selatan",
            agama: "Islam (akulturasi lokal)",
            persembahan: "Kenduri (selamatan) makanan dan kue-kue tradisional yang dibagikan setelah proses sunat.",
            deskripsi: "Upacara sunatan massal tradisional yang dilaksanakan di tepi sungai, diikuti dengan kenduri dan tari-tarian adat."
        },
        "rokat-tase": {
            judul: "Upacara Rokat Tase'",
            asal: "Madura, Jawa Timur",
            agama: "Islam (Tradisi Pesisir)",
            persembahan: "Tumpeng, sesaji (sajen), dan kepala kerbau atau kambing yang dilarung (dihanyutkan) ke laut.",
            deskripsi: "Upacara sedekah laut sebagai wujud syukur nelayan atas hasil tangkapan ikan dan memohon keselamatan dari bahaya laut."
        }
    };

    /* =======================================================
       2. LOGIKA INTERAKSI MODAL
       ======================================================= */
    
    const modal = document.getElementById('modal-upacara');
    const modalTitle = document.getElementById('modal-title');
    const modalDetail = document.getElementById('modal-detail');
    const closeButton = document.getElementById('close-modal-btn');
    const cultureCards = document.querySelectorAll('.culture-card');

    // Fungsi untuk menampilkan modal
    function openModal(key) {
        const data = upacaraData[key];
        if (!data) return;

        modalTitle.textContent = data.judul;
        
        modalDetail.innerHTML = `
            <p><strong>Deskripsi:</strong> ${data.deskripsi}</p>
            <p>
                <strong>Asal Daerah:</strong> ${data.asal}
                <br><strong>Agama/Kepercayaan Terkait:</strong> ${data.agama}
                <br><strong>Bentuk Persembahan Utama:</strong> ${data.persembahan}
            </p>
        `;
        
        modal.style.display = 'block';
        // Opsional: 
    }

    // Fungsi untuk menutup modal
    function closeModal() {
        modal.style.display = 'none';
    }

    /* --- Event Listeners --- */

    // 1. Klik pada Kartu Upacara
    cultureCards.forEach(card => {
        card.addEventListener('click', () => {
            const key = card.getAttribute('data-upacara');
            openModal(key);
        });
    });

    // 2. Klik Tombol Tutup (X)
    closeButton.addEventListener('click', closeModal);

    // 3. Klik di luar Modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});