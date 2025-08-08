const form = document.getElementById('resetForm');
const msg = document.getElementById('msg');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('newPassword');

usernameInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    const username = usernameInput.value.trim();
    const stored = JSON.parse(localStorage.getItem('userData'));

    if (!username) {
      msg.textContent = 'Masukkan username terlebih dahulu.';
      msg.style.color = '#ff6f91';
      return;
    }

    if (!stored || stored.username !== username) {
      msg.textContent = 'Username tidak ditemukan atau belum terdaftar.';
      msg.style.color = '#ff6f91';
    } else {
      msg.textContent = '';
      passwordInput.focus();
    }
  }
});

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const newPassword = passwordInput.value.trim();
  const stored = JSON.parse(localStorage.getItem('userData'));

  if (!username || !newPassword) {
    msg.textContent = 'Mohon isi semua data.';
    msg.style.color = '#ff6f91';
    return;
  }

  if (!stored || stored.username !== username) {
    msg.textContent = 'Username tidak ditemukan.';
    msg.style.color = '#ff6f91';
    return;
  }

  stored.password = newPassword;
  localStorage.setItem('userData', JSON.stringify(stored));
  msg.textContent = 'Password berhasil diubah. Mengalihkan ke halaman login...';
  msg.style.color = '#a0ffba';

  setTimeout(() => {
    window.location.href = 'Practice.html';
  }, 2000);
});