document.addEventListener('DOMContentLoaded', () => {
    
    // --- FITUR 1: Sapaan Berdasarkan Waktu ---
    const subtitleHeader = document.querySelector('.subtitle-header');
    const jam = new Date().getHours();
    let sapaan = '';

    if (jam >= 5 && jam < 11) {
        sapaan = 'Selamat Pagi, Penjaga Budaya';
    } else if (jam >= 11 && jam < 15) {
        sapaan = 'Selamat Siang, Penjaga Budaya';
    } else if (jam >= 15 && jam < 18) {
        sapaan = 'Selamat Sore, Penjaga Budaya';
    } else {
        sapaan = 'Selamat Malam, Penjaga Budaya';
    }

    // Mengganti teks kecil di header dengan sapaan
    if (subtitleHeader) {
        subtitleHeader.textContent = sapaan;
        subtitleHeader.style.opacity = 1; // Memastikan terlihat
    }

    // --- FITUR 2: Animasi Muncul Saat Scroll (Intersection Observer) ---
    const elemenAnimasi = document.querySelectorAll('.card, .article-body p, .article-quote');

    const observerOptions = {
        threshold: 0.2, // Elemen muncul saat 20% bagiannya terlihat di layar
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('muncul');
                observer.unobserve(entry.target); // Stop mengamati setelah muncul sekali
            }
        });
    }, observerOptions);

    elemenAnimasi.forEach(el => {
        el.classList.add('tersembunyi'); // Tambahkan kelas awal
        observer.observe(el);
    });
// --- DATA DETAIL BUDAYA UNTUK MODAL (Diperluas menjadi 16 entri) ---
    const budayaData = {
        'batik': {
            title: 'Batik Tulis',
            type: 'Budaya Benda & Tak Benda',
            origin: 'Jawa (Yogyakarta & Solo)',
            details: 'Batik Tulis adalah seni melukis di atas kain menggunakan lilin (malam) dan canting. Setiap goresan tangan menciptakan motif yang kaya akan filosofi tentang kehidupan, harapan, dan status sosial. Cirinya: Filosofis, Santun, dan sering menggunakan motif Parang atau Kawung.',
        },
        'saman': {
            title: 'Tari Saman',
            type: 'Budaya Tak Benda',
            origin: 'Aceh (Gayo)',
            details: 'Tarian asal Suku Gayo, Aceh, ini terkenal karena kecepatan dan kekompakan gerak tepukan tangan dan dada yang luar biasa cepat. Tari Saman merupakan simbol visual yang kuat untuk persatuan dan keharmonisan masyarakat. Cirinya: Gerak Kolektif, Vokal Suku Gayo, dan Kekompakan yang intens.',
        },
        'wayang': {
            title: 'Wayang Kulit',
            type: 'Budaya Benda & Tak Benda',
            origin: 'Jawa Tengah/Timur',
            details: 'Wayang Kulit adalah seni pertunjukan bayangan yang menggunakan boneka kulit kerbau, diiringi oleh Gamelan. Pertunjukan ini berfungsi sebagai media edukasi moral, kritik sosial, dan pelestarian epos kuno. Cirinya: Simbolisme Bayangan, Penggunaan Gamelan, dan Dialog oleh Dalang.',
        },
        'tongkonan': {
            title: 'Rumah Tongkonan',
            type: 'Budaya Benda',
            origin: 'Sulawesi Selatan (Toraja)',
            details: 'Rumah tradisional suku Toraja ini memiliki ciri khas atap melengkung yang menyerupai bentuk perahu atau tanduk kerbau, melambangkan perjalanan leluhur. Tongkonan menjadi pusat upacara adat dan kehidupan sosial keluarga besar. Cirinya: Atap Melengkung, Ukiran Merah-Hitam, dan Berfungsi sebagai pusat komunal.',
        },
        'gamelan': {
            title: 'Alat Musik Gamelan',
            type: 'Budaya Benda & Tak Benda',
            origin: 'Jawa, Bali, Sunda',
            details: 'Gamelan adalah ansambel musik tradisional yang didominasi oleh instrumen perunggu (metalofon, gong, dan lainnya). Musik Gamelan mencerminkan filosofi tentang keselarasan, keseimbangan, dan harmoni. Cirinya: Harmoni Polifonik, Peran Penting Gong, dan Ritme Meditatif.',
        },
        'tenun': {
            title: 'Tenun Ikat Sumba',
            type: 'Budaya Benda & Tak Benda',
            origin: 'Nusa Tenggara Timur (Sumba)',
            details: 'Kain tradisional ini dibuat melalui teknik mengikat benang secara presisi sebelum dicelup, menghasilkan motif yang kompleks dan simbolis. Tenun Ikat sering menceritakan kisah mitologis atau melambangkan status sosial. Cirinya: Motif Hewan Simbolis, Proses Ikat yang Rumit, dan Pewarna Alami.',
        },
        // --- 10 ITEM BARU DIMULAI DI SINI ---
        'keris': {
            title: 'Keris',
            type: 'Budaya Benda & Tak Benda',
            origin: 'Jawa & Melayu',
            details: 'Keris adalah senjata tikam tradisional yang memiliki bilah bergelombang atau lurus, dianggap memiliki kekuatan spiritual. Keris merupakan simbol kehormatan, kepahlian, dan status sosial. Cirinya: Pamor Unik, Tangguh (periode pembuatan), dan Sarung (warangka) khas.',
        },
        'reog': {
            title: 'Reog Ponorogo',
            type: 'Budaya Tak Benda',
            origin: 'Jawa Timur (Ponorogo)',
            details: 'Seni pertunjukan tradisional yang menampilkan penari berkepala singa (Singa Barong) dengan hiasan merak yang sangat berat, dimainkan oleh satu orang. Reog melambangkan kekuatan mistis dan keberanian. Cirinya: Dadak Merak Raksasa, Jathil, dan Penari Warok.',
        },
        'angklung': {
            title: 'Angklung',
            type: 'Budaya Benda & Tak Benda',
            origin: 'Jawa Barat',
            details: 'Alat musik multitonal yang terbuat dari bambu. Angklung dimainkan dengan cara digoyangkan, dan setiap instrumen hanya menghasilkan satu nada. Ini mengajarkan pentingnya kerjasama dan harmoni. Cirinya: Bahan Bambu, Multitonal, dan dimainkan secara ansambel.',
        },
        'barong': {
            title: 'Tari Barong',
            type: 'Budaya Tak Benda',
            origin: 'Bali',
            details: 'Tarian suci yang menggambarkan pertarungan abadi antara kebaikan (Barong, makhluk mitologi singa) melawan kejahatan (Rangda, ratu iblis). Tari ini merupakan ritual pengusiran bala. Cirinya: Kostum Barong Besar, Topeng Rangda, dan adegan kerauhan (trance).',
        },
        'ulos': {
            title: 'Kain Ulos',
            type: 'Budaya Benda & Tak Benda',
            origin: 'Sumatera Utara (Batak)',
            details: 'Kain tenun tradisional Batak yang memiliki fungsi penting dalam upacara adat (pernikahan, kematian, kelahiran). Ulos melambangkan berkat, kasih sayang, dan penghormatan. Cirinya: Warna Dominan Merah/Hitam/Putih, Motif Geometris, dan Ditenun Tangan.',
        },
        'rumah_honai': {
            title: 'Rumah Honai',
            type: 'Budaya Benda',
            origin: 'Papua (Wamena)',
            details: 'Rumah adat suku Dani yang berbentuk bulat dan atap jerami kerucut. Desainnya yang kecil, minim jendela, dan rendah sangat efektif untuk menahan suhu dingin di pegunungan Papua. Cirinya: Bentuk Bulat, Atap Jerami Tebal, dan Struktur Kokoh.',
        },
        'mandau': {
            title: 'Mandau',
            type: 'Budaya Benda',
            origin: 'Kalimantan (Dayak)',
            details: 'Senjata tajam tradisional suku Dayak yang berfungsi sebagai senjata perang dan alat upacara. Mandau melambangkan keberanian, kepahlawanan, dan identitas suku. Cirinya: Bilah Berukir, Hulu Tanduk Rusa, dan Sarung Berhias.',
        },
        'sisingaan': {
            title: 'Sisingaan',
            type: 'Budaya Tak Benda',
            origin: 'Jawa Barat (Subang)',
            details: 'Kesenian rakyat yang menampilkan boneka singa (Sisingaan) yang diarak sambil dinaiki oleh anak-anak, diiringi musik tradisional. Kesenian ini melambangkan penolakan terhadap penjajahan. Cirinya: Boneka Singa Besar, Diusung Banyak Orang, dan Musik Pengiring Semangat.',
        },
        'noken': {
            title: 'Noken',
            type: 'Budaya Benda',
            origin: 'Papua',
            details: 'Tas tradisional khas Papua yang terbuat dari serat kayu atau daun yang dirajut. Noken digunakan dengan cara digantung di kepala dan telah diakui UNESCO sebagai Warisan Budaya Tak Benda. Cirinya: Dibuat dari Serat Alam, Digantung di Kepala, dan Motif Rajutan Unik.',
        },
        'tari_piring': {
            title: 'Tari Piring',
            type: 'Budaya Tak Benda',
            origin: 'Sumatera Barat (Minangkabau)',
            details: 'Tarian persembahan yang menampilkan gerakan cepat dan indah dengan membawa piring di telapak tangan. Tarian ini awalnya dibawakan sebagai ucapan syukur atas panen yang melimpah. Cirinya: Menggunakan Piring, Gerakan Cepat dan Dinamis, dan Busana Minang.',
        },
    };

    // --- LOGIKA UTAMA (Sama seperti sebelumnya) ---

    // [..kode logika openNav/closeNav dan kode logika Parallax..]

    const modal = document.getElementById('budayaModal');
    const closeBtn = document.querySelector('.modal-close');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // ... (Logika untuk membuka modal tetap sama) ...
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const budayaId = this.dataset.id;
            const data = budayaData[budayaId];

            if (data) {
                // Isi konten modal
                document.getElementById('modalTitle').textContent = data.title;
                document.getElementById('modalType').textContent = data.type;
                document.getElementById('modalOrigin').textContent = data.origin;
                document.getElementById('modalDetails').innerHTML = '<strong>Ciri Khas & Detail:</strong> ' + data.details;

                // Tampilkan modal
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // ... (Logika untuk menutup modal tetap sama) ...
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
});

    // --- LOGIKA ANIMASI SCROLL DAN SAPAAN (Tetap dipertahankan) ---
    // ... (Logika Animasi Scroll dan Sapaan Waktu dari script.js lama Anda tetap di sini) ...
    
    
    // --- FITUR BARU: MODAL INTERAKTIF ---

    const modal = document.getElementById('budayaModal');
    const closeBtn = document.querySelector('.modal-close');
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const budayaId = this.dataset.id; // Ambil ID dari data-id di HTML
            const data = budayaData[budayaId];

            if (data) {
                // Isi konten modal
                document.getElementById('modalTitle').textContent = data.title;
                document.getElementById('modalType').textContent = data.type;
                document.getElementById('modalOrigin').textContent = data.origin;
                document.getElementById('modalDetails').innerHTML = '<strong>Ciri Khas & Detail:</strong> ' + data.details;

                // Tampilkan modal
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden'; // Nonaktifkan scroll body
            }
        });
    });

    // Logika menutup modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Aktifkan scroll body
    });

    // Tutup modal jika user klik di luar area modal content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
    /* --- FUNGSI GLOBAL UNTUK SIDEBAR --- */
function openNav() {
    document.getElementById("sidebarMenu").style.width = "300px";
    document.body.style.overflow = 'hidden'; // Nonaktifkan scroll body
}

function closeNav() {
    document.getElementById("sidebarMenu").style.width = "0";
    document.body.style.overflow = ''; // Aktifkan scroll body
}

