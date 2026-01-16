document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('registrationForm');
    const successMessage = document.getElementById('successMessage');

    if (!form || !successMessage) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        // Show success message
        successMessage.hidden = false;

        // Reset form AFTER showing message
        form.reset();

        // Accessibility: move focus to success message
        successMessage.setAttribute('tabindex', '-1');
        successMessage.focus();
    });

});
