// const inputs = document.querySelectorAll('.controls input');

// function handleUpdate() {
//     const suffix = this.dataset.sizing || ''; // 'px' for size inputs
//     document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
//     console.log(suffix)
// }

// inputs.forEach(input => input.addEventListener('change', handleUpdate));
// inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

// ==============================================================================================================
// =============================================================================================================

//* 1. Memilih semua elemen input dalam elemen dengan class 'controls'
const inputs = document.querySelectorAll('.controls input');

//* 2. Fungsi yang akan dipanggil ketika input berubah
function handleUpdate() {
    //* 3. Ambil nilai data-sizing dari atribut HTML (jika ada)
    //    Misal: data-sizing="px" akan mengembalikan 'px'
    //    Jika tidak ada, gunakan string kosong (untuk input color)
    const suffix = this.dataset.sizing || '';
    
    //* 4. Update CSS variable di root element (html)
    //    --${this.name}: Membuat nama variable CSS sesuai atribut 'name' input
    //    this.value + suffix: Menggabungkan nilai input dengan satuan (misal: 10px)
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    
    //* 5. Logging untuk debugging (opsional)
    console.log(suffix);
}

//* 6. Loop melalui semua input yang ditemukan
inputs.forEach(input => {
    //* 7. Tambahkan event listener untuk event 'change' (saat nilai berubah dan input kehilangan fokus)
    input.addEventListener('change', handleUpdate);
    
    //* 8. Tambahkan event listener untuk event 'mousemove' (saat slider digeser)
    input.addEventListener('mousemove', handleUpdate);
});

// Penjelasan Alur Kerja Kode:
//! 1. Seleksi Elemen Input:
//* - Kode mencari semua elemen input dalam container dengan class 'controls'
//* - Contoh: <input type="range" name="spacing" data-sizing="px"></input>

// ! 2. Fungsi handleUpdate:
//* - Akan dipanggil setiap kali ada perubahan pada input 
//* - this mengacu pada elemen input yang memicu event

//! 3.  Sistem Suffix/Satuan:
// * - Menggunakan atribut data-sizing kustom HTML5 untuk menentukan satuan
// * - Input color tidak membutuhkan satuan, sehingga mengembalikan string kosong

// ! 4. Update CSS Variable di Root Element:
// * - Memanipulasi CSS Custom Properties (variables) di root element
// * - Contoh hasil: --spacing: 10px

// ! 5. Event Listeners Ganda:
// * - change: Aktif saat nilai berubah dan input kehilangan fokus (baik melalui mouse/keyboard)
// * - mousemove: Aktif secara real-time saat menggeser slider dengan mouse
