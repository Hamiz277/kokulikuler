/* =======================================================
   FUNGSI GLOBAL (HARUS DI LUAR DOMContentLoaded)
   ======================================================= */

// 1. FUNGSI MEMULAI KUIS (Dipanggil oleh tombol "Mulai Kuis")
window.startQuiz = function() {
    document.dispatchEvent(new Event('quizStartEvent'));
}

// 2. FUNGSI UNTUK PINDAH KE SOAL BERIKUTNYA (Dipanggil oleh tombol "Lanjut Soal")
window.nextQuestion = function() {
    document.dispatchEvent(new Event('nextQuestionEvent'));
}

// 3. FUNGSI UNTUK MENGULANGI KUIS (Dipanggil oleh tombol "Ulangi Kuis")
window.restartQuiz = function() {
    // Memuat ulang halaman adalah cara termudah dan paling aman untuk memulai kuis dari awal
    window.location.reload(); 
}

// =======================================================
// LOGIKA UTAMA KUIS (Hanya berjalan setelah seluruh HTML dimuat)
// =======================================================
document.addEventListener('DOMContentLoaded', () => {

    /* --- Data Kuis (10 Soal Filosofi) --- */
    const quizQuestions = [
        { q: "Prinsip utama yang mendorong kaum muda mengadopsi budaya ke dalam kehidupan sehari-hari (*lifestyle*) adalah...", options: ["Konservasi Statis", "Revitalisasi Filosofis", "Aksi Nyata dan Integrasi", "Dokumentasi Ekstensif"], answer: "Aksi Nyata dan Integrasi" },
        { q: "Mengapa Kain Ulos Batak diklasifikasikan sebagai Gabungan Budaya Benda dan Tak Benda?", options: ["Karena dijual sebagai komoditas.", "Karena digunakan dalam upacara adat dan memiliki nilai spiritual.", "Karena proses menenunnya menggunakan mesin modern.", "Karena bahan bakunya mudah didapatkan di alam."], answer: "Karena digunakan dalam upacara adat dan memiliki nilai spiritual." },
        { q: "Filosofi utama Tari Piring dari Minangkabau adalah simbol persembahan rasa syukur kepada...", options: ["Dewa Laut", "Raja-Raja", "Dewi Padi", "Para Pejuang"], answer: "Dewi Padi" },
        { q: "Tindakan paling efektif untuk melestarikan Budaya Benda berukuran besar seperti Rumah Tongkonan adalah...", options: ["Membongkarnya untuk disimpan di museum.", "Melakukan konservasi, pemeliharaan, dan restorasi struktur fisik secara berkala.", "Mengubah fungsinya menjadi hotel modern.", "Mendokumentasikannya hanya dalam bentuk foto 3D."], answer: "Melakukan konservasi, pemeliharaan, dan restorasi struktur fisik secara berkala." },
        { q: "Peran utama Noken (tas rajutan Papua) selain sebagai alat bawaan adalah sebagai simbol...", options: ["Tingkat kekayaan.", "Alat musik perkusi.", "Identitas, perdamaian, dan lambang kehidupan wanita dewasa.", "Media lukis."], answer: "Identitas, perdamaian, dan lambang kehidupan wanita dewasa." },
        { q: "Desain Mandau (Senjata Dayak) yang berukir melambangkan filosofi utama Dayak, yaitu...", options: ["Kecintaan pada flora.", "Kekuatan politik.", "Keberanian, kepahlawanan, dan identitas sosial.", "Kemampuan barter."], answer: "Keberanian, kepahlawanan, dan identitas sosial." },
        { q: "Apa yang membedakan teknik Tenun Ikat Sumba dari Batik Tulis Jawa?", options: ["Ikat menggunakan lilin panas; Batik tidak.", "Batik dibuat dengan teknik menenun; Ikat dibuat dengan melukis.", "Ikat mengikat benang sebelum dicelup; Batik mewarnai setelah kain jadi.", "Ikat hanya menggunakan warna sintetis."], answer: "Ikat mengikat benang sebelum dicelup; Batik mewarnai setelah kain jadi." },
        { q: "Musik Gamelan menekankan pada keselarasan dan harmoni karena...", options: ["Hanya satu instrumen memainkan melodi utama.", "Tempo selalu cepat dan agresif.", "Setiap pemain harus bekerja sama menyatukan banyak suara individu menjadi satu alunan yang utuh.", "Instrumennya terbuat dari perunggu mahal."], answer: "Setiap pemain harus bekerja sama menyatukan banyak suara individu menjadi satu alunan yang utuh." },
        { q: "Fungsi sosial utama Reog Ponorogo di masa lalu adalah...", options: ["Ritual pemanggil hujan.", "Tarian suci untuk roh leluhur.", "Media hiburan rakyat dan ekspresi kekuatan sosial-politik daerah.", "Latihan militer rahasia."], answer: "Media hiburan rakyat dan ekspresi kekuatan sosial-politik daerah." },
        { q: "Perbedaan utama antara **Konservasi Budaya Benda** (Candi) dan **Revitalisasi Budaya Tak Benda** (Tari Saman) adalah...", options: ["Konservasi berfokus pada dokumentasi, Revitalisasi pada komersialisasi.", "Konservasi melibatkan restorasi material, Revitalisasi melibatkan regenerasi praktik dan penularan keahlian.", "Konservasi dilakukan pemerintah, Revitalisasi dilakukan masyarakat.", "Konservasi bertujuan membekukan objek, Revitalisasi menciptakan versi modern."], answer: "Konservasi melibatkan restorasi material, Revitalisasi melibatkan regenerasi praktik dan penularan keahlian." },
    ];

    // --- Variabel State Kuis ---
    let currentQuestionIndex = 0;
    let score = 0;
    let isAnswerLocked = false; 

    // --- Ambil Elemen ---
    const startScreen = document.getElementById('start-screen');
    const quizContainer = document.getElementById('quiz-container');
    const resultContainer = document.getElementById('result-container');
    const scoreSpan = document.getElementById('score');
    
    // Siapkan wadah untuk menampilkan soal di dalam quizContainer
    const questionDisplay = document.createElement('div');
    questionDisplay.id = 'question-display';
    if (quizContainer) {
        quizContainer.appendChild(questionDisplay);
    }


    /* =======================================================
       LOGIKA EVENT LISTENER
       ======================================================= */
    
    // 1. Memulai Kuis (Merespons tombol Mulai)
    document.addEventListener('quizStartEvent', () => {
        currentQuestionIndex = 0;
        score = 0;
        if (quizContainer && startScreen) {
            startScreen.style.display = 'none';
            resultContainer.style.display = 'none';
            quizContainer.style.display = 'block';
            renderQuestion();
        }
    });

    // 2. Pindah ke Soal Berikutnya (Merespons tombol Lanjut)
    document.addEventListener('nextQuestionEvent', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizQuestions.length) {
            isAnswerLocked = false; // Buka kunci untuk soal baru
            renderQuestion();
        } else {
            showResult(); // Tampilkan hasil jika soal habis
        }
    });

    /* =======================================================
       FUNGSI UTAMA RENDER & LOGIKA
       ======================================================= */

    function renderQuestion() {
        if (currentQuestionIndex >= quizQuestions.length) return;

        const q = quizQuestions[currentQuestionIndex];
        const optionLabels = ['A', 'B', 'C', 'D']; 

        // Isi konten soal
        questionDisplay.innerHTML = `
            <div class="quiz-question" id="q-box-${currentQuestionIndex}">
                <p><strong>Soal ${currentQuestionIndex + 1} dari ${quizQuestions.length}</strong></p>
                <h3>${q.q}</h3>
                <div class="options">
                    ${q.options.map((option, i) => `
                        <label class="option-label" onclick="checkAnswer(this, '${option.replace(/'/g, "\\'")}')">
                            <input type="radio" name="current-question" value="${option}">
                            <span style="font-weight: bold;">${optionLabels[i]}.</span> ${option}
                        </label>
                    `).join('<br>')}
                </div>
            </div>
            <div id="feedback-box" style="margin-top: 20px; min-height: 40px;"></div>
            <button id="next-button" class="button-primary" style="display: none;">Lanjut Soal →</button>
        `;
        
        // Atur tombol Lanjut
        document.getElementById('next-button').addEventListener('click', window.nextQuestion);
    }

    // Fungsi cek jawaban (global agar bisa dipanggil dari onclick pada label)
    window.checkAnswer = function(selectedLabel, selectedOption) {
        if (isAnswerLocked) return; // Jika sudah dikunci, jangan proses lagi

        const q = quizQuestions[currentQuestionIndex];
        const isCorrect = (selectedOption === q.answer);
        
        isAnswerLocked = true; // Kunci jawaban setelah dipilih
        
        const feedbackBox = document.getElementById('feedback-box');
        const nextButton = document.getElementById('next-button');
        
        // 1. Beri Feedback Instan (Warna & Teks)
        document.querySelectorAll('.option-label').forEach(label => {
            // Nonaktifkan klik pada semua label setelah jawaban dipilih
            label.removeAttribute('onclick'); 
        });

        if (isCorrect) {
            score++;
            selectedLabel.style.backgroundColor = '#d4edda'; // Hijau muda
            feedbackBox.innerHTML = '<span style="color: #155724; font-weight: bold;">✅ Benar! Jawaban tepat.</span>';
        } else {
            selectedLabel.style.backgroundColor = '#f8d7da'; // Merah muda
            feedbackBox.innerHTML = `<span style="color: #721c24; font-weight: bold;">❌ Salah. Jawaban yang benar adalah: ${q.answer}</span>`;
            
            // Highlight jawaban yang benar
            document.querySelectorAll('.option-label').forEach(label => {
                if (label.textContent.includes(q.answer)) {
                    label.style.border = '2px solid #155724'; // Border hijau pada jawaban benar
                }
            });
        }
        
        // 2. Tampilkan Tombol Lanjut
        nextButton.style.display = 'block';
    }

    function showResult() {
        quizContainer.style.display = 'none';
        resultContainer.style.display = 'block';
        
        const totalQuestions = quizQuestions.length;
        const percentage = (score / totalQuestions) * 100;

        scoreSpan.textContent = `${score} dari ${totalQuestions}`;

        const feedback = document.getElementById('feedback');
        if (percentage >= 80) {
            feedback.innerHTML = "Luar Biasa! Anda adalah **Pelestari Budaya Sejati!** 🥳";
            feedback.style.color = "#0b5345"; 
        } else if (percentage >= 50) {
            feedback.innerHTML = "Bagus! Pengetahuan Anda cukup luas. Mari tingkatkan lagi! 👍";
            feedback.style.color = "#78350f";
        } else {
            feedback.innerHTML = "Terus Belajar! Jelajahi halaman galeri dan peta untuk meningkatkan pengetahuan Anda. 💪";
            feedback.style.color = "red";
        }

        // Pastikan tombol ulangi memanggil fungsi global restartQuiz()
        const restartButton = document.getElementById('restart-button');
        if (restartButton) {
            restartButton.textContent = 'Ulangi Kuis (10 Soal)';
            restartButton.setAttribute('onclick', 'restartQuiz()');
        }
    }
});