document.getElementById('rsvpButton').addEventListener('click', function() {
    const messageDiv = document.getElementById('rsvpMessage');
    messageDiv.classList.remove('hidden');
    messageDiv.textContent = 'Terima kasih telah mengonfirmasi kehadiran Anda!';
});
