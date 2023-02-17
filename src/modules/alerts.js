import Swal from "sweetalert2";

const alert = Swal.mixin({
  customClass: {
    confirmButton: 'btn alert-button',
    icon: 'alert-icon',
    title: 'alert-title',
    text: 'alert-text'
  },
  buttonsStyling: false
});

const throwAlert = (message) => {
  alert.fire({
    icon: 'error',
    title: 'Something went wrong!',
    text: message,
  });
}

export default throwAlert;