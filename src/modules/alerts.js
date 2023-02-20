import Swal from "sweetalert2";

const alert = Swal.mixin({
  customClass: {
    confirmButton: "btn alert-button",
    icon: "alert-icon",
    title: "alert-title",
    text: "alert-text",
  },
  buttonsStyling: false,
});

// "sweet alert" fucntion that takes in error message and displays in pop-up
const throwAlert = (message) => {
  alert.fire({
    icon: "error",
    title: "Something went wrong!",
    text: message,
  });
};

export default throwAlert;
