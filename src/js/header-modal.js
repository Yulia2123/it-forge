(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-header-open]"),
      closeModalBtn: document.querySelector("[data-header-close]"),
      modal: document.querySelector("[data-modal-header]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-open");
      document.body.classList.toggle("no-scroll");
    }
  })();