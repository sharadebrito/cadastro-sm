export function verifySenha(senha) {
  if (
    senha.length >= 6 &&
    (senha.includes("!") ||
      senha.includes("$") ||
      senha.includes("#") ||
      senha.includes("@") ||
      senha.includes("%") ||
      senha.includes("&") ||
      senha.includes("*") ||
      senha.includes("-") ||
      senha.includes("_"))
  ) {
    return true;
  } else {
    return false;
  }
}
