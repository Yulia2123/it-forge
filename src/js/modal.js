(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-modal-open]'),
    closeModalBtns: document.querySelectorAll('[data-modal-close]'),
  };

  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('is-open');
    }
  }

  function closeModal(modal) {
    if (modal) {
      modal.classList.remove('is-open');
    }
  }

  refs.openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-modal-open');
      openModal(modalId);
    });
  });

  refs.closeModalBtns.forEach(btn => {
    btn.addEventListener('click', event => {
      const modal = event.target.closest('.modal-overlay');
      closeModal(modal);
    });
  });
})();
