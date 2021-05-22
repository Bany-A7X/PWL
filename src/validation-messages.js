export default {
  general: {
    missing: 'Bidang ini wajib diisi',
    invalid: 'Pengisian tidak valid'
  },

  type: {
    email: {
      missing: 'Harap masukkan email',
      invalid: 'Email yang kamu masukkan tidak valid'
    },
    password: {
      rule: {
        capitalLetter: 'Harap sertakan setidaknya satu huruf kapital',
        oneNumber: 'Harap sertakan setidaknya satu angka',
        minLength: 'Kata sandi setidaknya harus terdiri dari 6 karakter'
      }
    }
  },

  name: {
    confirmPassword: {
      rule: {
        matches: 'Kata sandi yang diberikan tidak cocok'
      }
    }
  }
}
