const textarea = document.getElementById('message');
const charCount = document.getElementById('charCount');
const maxLength = textarea.maxLength;

textarea.addEventListener('input', () => {
    const remaining = maxLength - textarea.value.length;
    charCount.textContent = `${remaining} characters remaining`;
});