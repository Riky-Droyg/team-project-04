(() => {
  const refs = {
    form: document.querySelector('.subscribe__form'),
    input: document.querySelector('.subscribe__input'),
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    closeModalBtn2: document.querySelector('[data-modal-close-secondary]'),
    modal: document.querySelector('[data-modal]'),
  };
refs.form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (refs.input.checkValidity()) {
      toggleModal();
      refs.input.value = ''; 
    } else {
      refs.input.reportValidity(); 
    }
  });
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn2.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }
})();