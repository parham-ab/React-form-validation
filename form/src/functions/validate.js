const validate = (data, type) => {
  const errors = {};
  // -----login & signup validation-----
  // email
  if (!data.email) {
    errors.email = "Email required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,3}$/i.test(data.email)) {
    errors.email = "Email invalid";
  } else {
    delete errors.email;
  }
  // password
  if (!data.password) {
    errors.password = "Password required";
  } else if (data.password.length < 6) {
    errors.password = "password is too short !";
  } else {
    delete errors.password;
  }
  // -----signup validation-----
  if (type === "signup") {
    // name
    if (!data.name.trim()) {
      errors.name = "Name required";
    } else {
      delete errors.name;
    }
    // confirm password
    if (!data.confirmPassword) {
      errors.confirmPassword = "Confirm password";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "Password do not match !";
    } else {
      delete errors.confirmPassword;
    }
    // is accepted
    if (!data.isAccepted) {
      errors.isAccepted = "Accept our regulations";
    } else {
      delete errors.isAccepted;
    }
  }
  return errors;
};
export { validate };
