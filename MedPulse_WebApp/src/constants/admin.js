export const ADMIN_EMAIL = "admin@gmail.com";

export const isAdminEmail = (email) => {
  if (!email) {
    return false;
  }
  return email.toLowerCase() === ADMIN_EMAIL.toLowerCase();
};
