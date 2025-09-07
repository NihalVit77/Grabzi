document.addEventListener('DOMContentLoaded', function () {
  const profileInput = document.getElementById('profileInput');
  const profilePreview = document.getElementById('profilePreview');
  const uploadIcon = document.getElementById('uploadIcon');

  profileInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        profilePreview.src = e.target.result;
        profilePreview.style.display = 'block'; // Show image
        uploadIcon.style.display = 'none';      // Hide icon
      };
      reader.readAsDataURL(file);
    }
  });
});
