// const secondHand = document.querySelector('.second-hand');
// const minsHand = document.querySelector('.min-hand');
// const hourHand = document.querySelector('.hour-hand');

// function setDate (){
//     const now = new Date();
//     const seconds = now.getSeconds();
//     const secondsDegrees = ((seconds / 60) * 360) + 90;
//     secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
//     const mins = now.getMinutes();
//     const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
//     minsHand.style.transform = `rotate(${minsDegrees}deg)`;

//     const hour = now.getHours();
//     const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + ((seconds / 3600) * 30) + 90;
//     hourHand.style.transform = `rotate(${hourDegrees}deg)`;
// } 
// function updateClock() {
//   setDate();
//   requestAnimationFrame(updateClock);
// }

// // Jalankan pertama kali
// updateClock();

// ==============================================================================================================
// ==============================================================================================================

// 1. Pilih elemen jarum detik, menit, dan jam dari DOM
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand'); // Pastikan class di HTML benar
const hourHand = document.querySelector('.hour-hand');

// 2. Fungsi untuk mengupdate posisi jarum
function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hour = now.getHours();

    // 3. Hitung derajat rotasi untuk setiap jarum
    // - Detik: 360 derajat / 60 detik = 6 derajat per detik
    const secondsDegrees = (seconds / 60) * 360;
    
    // - Menit: 360 derajat / 60 menit = 6 derajat per menit + 
    //   Tambahan 0.1 derajat per detik (6/60) untuk gerakan halus
    const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6;
    
    // - Jam: 360 derajat / 12 jam = 30 derajat per jam +
    //   Tambahan 0.5 derajat per menit (30/60) +
    //   Tambahan 0.0083 derajat per detik (30/3600)
    const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + (seconds / 3600) * 30;

    // 4. Terapkan rotasi ke elemen jarum
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

// 5. Fungsi untuk update jam dengan requestAnimationFrame
function updateClock() {
    setDate(); // Update posisi jarum
    requestAnimationFrame(updateClock); // Jadwalkan update berikutnya
}

// 6. Mulai animasi
updateClock();

// Penjelasan Singkat Alur Kode:
// *1. Seleksi Elemen: Memilih elemen jarum detik, menit, dan jam dari HTML menggunakan querySelector.

// *2. Hitung Waktu: Mengambil waktu saat ini (new Date()) dan ekstrak detik, menit, jam.

// *3. Konversi ke Derajat:
    // *Detik: (detik/60) * 360 → 360° dalam 60 detik.
    // *Menit: (menit/60) * 360 + (detik/60) * 6 → 6° per menit + 0.1° per detik.
    // *Jam: (jam/12) * 360 + (menit/60) * 30 + (detik/3600) * 30 → 30° per jam + 0.5° per menit + 0.0083° per detik.

// *4. Terapkan Rotasi: Ubah nilai derajat ke properti transform: rotate() CSS.

// *5. Animasi Halus: requestAnimationFrame digunakan untuk update yang lebih smooth dibanding setInterval.