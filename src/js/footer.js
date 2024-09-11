const form = document.querySelector('.form');
const modalOverlay = document.querySelector('.modal-overlay');
const closeModalBtn = document.querySelector('.close-btn');
const modalTitle = document.querySelector('.title-footer-modal')
const modalText = document.querySelector('.title-footer-message')




closeModalBtn.addEventListener('click', closeModal);
form.addEventListener('submit', handleSubmit);
modalOverlay.addEventListener('click', handleBackdropClick)




function closeModal (e) {
    modalOverlay.classList.remove('is-open')
    document.removeEventListener('keydown', handleKeyPress)
}
function handleBackdropClick(e) {
    if (e.target === modalOverlay) {
        closeModal();
    }
}
function handleKeyPress(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
}
async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const requestData = {
        email: formData.get('email'),
        comment: formData.get('comment')
    };



    const fetchOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    };

    try {
        
        const response = await fetch('https://portfolio-js.b.goit.study/api/requests', fetchOptions);

        if (!response.ok) {
            let errorMessage;
            switch (response.status) {
                case 400:
                    errorMessage = 'Invalid request. Please check your input and try again.';
                    break;
                case 404:
                    errorMessage = 'Resource not found. Please try again later.';
                    break;
                case 500:
                    errorMessage = 'Server error. Please try again later.';
                    break;
                default:
                    errorMessage = 'An unexpected error occurred. Please try again.';
            }
            throw new Error(errorMessage);
        }

        const data = await response.json();
        modalTitle.textContent = data.title;
        modalText.textContent = data.message;
        modalOverlay.classList.add('is-open');
        form.reset();
        document.addEventListener('keydown', handleKeyPress);
    } catch (error) {
        console.log(error);
        modalOverlay.classList.add('is-open');
        modalTitle.textContent = 'Something went wrong';
        modalText.textContent = error.message;
        document.addEventListener('keydown', handleKeyPress);
    }
}

