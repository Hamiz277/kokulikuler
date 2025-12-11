document.addEventListener('DOMContentLoaded', () => {

    /* =======================================================
       1. DATA UPACARA DENGAN KLASIFIKASI
       ======================================================= */
    const classifiedData = [
        {
            judul: "Ngaben", asal: "Bali", agama: "Hindu Dharma",
            deskripsi: "Ritual wajib pembakaran jenazah.",
            kategori: "siklus" // Kematian
        },
        {
            judul: "Rambu Solo", asal: "Tana Toraja", agama: "Aluk To Dolo",
            deskripsi: "Upacara pemakaman yang megah dan berhari-hari.",
            kategori: "siklus" // Kematian
        },
        {
            judul: "Fahombo Batu", asal: "Nias", agama: "Tradisional/Hukum Adat",
            deskripsi: "Ritual lompat batu sebagai uji kedewasaan.",
            kategori: "siklus" // Kedewasaan
        },
        {
            judul: "Tiwah", asal: "Dayak Ngaju", agama: "Kaharingan",
            deskripsi: "Upacara pemakaman tingkat akhir untuk memindahkan tulang belulang.",
            kategori: "siklus" // Kematian
        },
        {
            judul: "Tabalong Bersunat", asal: "Dayak, Kalsel", agama: "Islam (akulturasi lokal)",
            deskripsi: "Upacara sunatan massal tradisional.",
            kategori: "siklus" // Kedewasaan
        },
        {
            judul: "Seren Taun", asal: "Jawa Barat", agama: "Sunda Wiwitan",
            deskripsi: "Upacara adat panen raya.",
            kategori: "pertanian" // Panen & Syukur
        },
        {
            judul: "Pasola", asal: "Sumba, NTT", agama: "Maringgi",
            deskripsi: "Ritual perang-perangan menunggang kuda.",
            kategori: "pertanian" // Kesuburan & Panen
        },
        {
            judul: "Bau Nyale", asal: "Lombok & Sumbawa", agama: "Sasak & Samawa",
            deskripsi: "Ritual menangkap cacing laut.",
            kategori: "pertanian" // Syukur & Perlindungan Laut
        },
        {
            judul: "Rokat Tase'", asal: "Madura, Jatim", agama: "Islam (Tradisi Pesisir)",
            deskripsi: "Upacara sedekah laut.",
            kategori: "pertanian" // Syukur & Perlindungan Laut
        },
        {
            judul: "Sekaten", asal: "Yogyakarta & Surakarta", agama: "Islam (Akulturasi Jawa)",
            deskripsi: "Perayaan Maulid Nabi Muhammad SAW.",
            kategori: "keagamaan" // Peringatan Tokoh Suci
        },
        {
            judul: "Maudu Lompoa", asal: "Gowa, Sulsel", agama: "Islam",
            deskripsi: "Upacara adat peringatan Maulid Nabi Muhammad SAW.",
            kategori: "keagamaan" // Peringatan Tokoh Suci
        },
        {
            judul: "Tabuik", asal: "Pariaman, Sumbar", agama: "Islam Syiah",
            deskripsi: "Peringatan wafatnya cucu Nabi Muhammad (Husein bin Ali).",
            kategori: "keagamaan" // Peringatan Tokoh Suci
        }
    ];

    /* =======================================================
       2. LOGIKA TAMPILAN DAN INTERAKSI TAB
       ======================================================= */

    const tabs = document.querySelectorAll('.tab-button');
    const contentContainers = {
        'siklus': document.getElementById('grid-siklus'),
        'pertanian': document.getElementById('grid-pertanian'),
        'keagamaan': document.getElementById('grid-keagamaan')
    };

    // Fungsi untuk membuat kartu HTML dari data upacara
    function createCardHTML(data) {
        return `
            <div class="upacara-card">
                <h3>${data.judul}</h3>
                <p><strong>Asal:</strong> ${data.asal}</p>
                <p><strong>Kepercayaan:</strong> ${data.agama}</p>
                <p>${data.deskripsi}</p>
            </div>
        `;
    }

    // Fungsi untuk mengisi konten kategori
    function renderCategoryContent() {
        // Kosongkan semua kontainer sebelum mengisi
        Object.values(contentContainers).forEach(container => container.innerHTML = '');

        // Isi kontainer berdasarkan kategori
        classifiedData.forEach(upacara => {
            if (contentContainers[upacara.kategori]) {
                contentContainers[upacara.kategori].innerHTML += createCardHTML(upacara);
            }
        });
    }

    // Fungsi untuk mengganti tampilan tab
    function switchTab(targetCategory) {
        // Hapus kelas 'active' dari semua tombol dan konten
        tabs.forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.category-content').forEach(content => content.classList.remove('active'));

        // Tambahkan kelas 'active' ke tombol dan konten yang sesuai
        document.querySelector(`.tab-button[data-category="${targetCategory}"]`).classList.add('active');
        document.getElementById(`content-${targetCategory}`).classList.add('active');
    }

    // Event Listener untuk tombol tab
    tabs.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            switchTab(category);
        });
    });

    // Inisialisasi: Render konten dan aktifkan tab pertama saat halaman dimuat
    renderCategoryContent();
    switchTab('siklus'); 
});