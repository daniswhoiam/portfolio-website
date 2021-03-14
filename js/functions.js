let formValidator;
if (window.location.pathname.includes('contact')) {
  (function () {
    let form = document.querySelector('#contact-form');
    let nameInput = form.querySelector('#user_name');
    let phoneInput = form.querySelector('#user_phone');
    let emailInput = form.querySelector('#user_email');
    let messageInput = form.querySelector('#user_message');

    // All fields with their attributes required for validation
    let formFields = [
      {
        name: 'name',
        input: nameInput,
        required: true
      },
      {
        name: 'phone number',
        input: phoneInput,
        required: false,
        validation: function (value) {
          return value.match(/[+\-\(\)\d\s]+/gi);
        }
      },
      {
        name: 'e-mail address',
        input: emailInput,
        required: true,
        validation: function (value) {
          return value.includes('@') || !value.includes('.');
        }
      },
      {
        name: 'personal message',
        input: messageInput,
        required: true
      }
    ];

    // Generic validation function
    function validateFormField(field) {
      let value = field.input.value;

      if (field.required) {
        if (!value) {
          showErrorMessage(field.input, `Your ${field.name} is missing. Please fill it in.`);
          return false;
        }
      }

      if (field.validation) {
        if (value && !field.validation(value)) {
          showErrorMessage(field.input, `Your ${field.name} has an invalid format. Please correct it.`);
          return false;
        }
      }

      showErrorMessage(field.input);
      return true;
    }

    // Responsible for Error Message Handling
    function showErrorMessage (input, message) {
      let container = input.parentElement;

      let error = container.querySelector('.error-message');
      if (error) {
        container.removeChild(error);
      }

      if (message) {
        error = document.createElement('div');
        error.classList.add('error-message');
        error.innerText = message;
        container.appendChild(error);
      }
    }

    // Validate whole form
    function validateForm() {
      return formFields.every(function (formField) {
        return validateFormField(formField);
      });
    }

    formFields.forEach(function (formField) {
      formField.input.addEventListener('focusout', function () {
        validateFormField(formField);
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (validateForm()) {
        form.submit();
      }
    });
  })();
}

window.addEventListener('resize', function () {
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  var x = document.getElementsByClassName('navigation-list')[0];
  if (vw >= 800 && x.style.display == "none") {
    x.style.display = "flex";
  } else if (vw < 800 && x.style.display == "flex") {
    x.style.display = "none";
  }
});

function hamburgerMenu() {
  var x = document.getElementsByClassName('navigation-list')[0];
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}
