const copyButton = document.querySelector('#copy-citation');
const citation = document.querySelector('#citation-text');
const status = document.querySelector('#copy-status');

copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(citation.textContent);
    status.textContent = 'Citation copied to clipboard.';
    copyButton.innerHTML = 'Copied <span>✓</span>';
    setTimeout(() => {
      status.textContent = '';
      copyButton.innerHTML = 'Copy citation <span>⧉</span>';
    }, 2200);
  } catch {
    status.textContent = 'Select the BibTeX block to copy it.';
  }
});
