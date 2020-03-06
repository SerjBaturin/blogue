export default function adminRedirect() {
  return {
    type: "ADMIN_REDIRECT",
    admin: true,
  };
}
