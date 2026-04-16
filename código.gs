const CONTRASENA_SECRET_A = "Reset";

function doGet(e) {

  // --- PÀGINA SECRETA ---
  if (e && e.parameter && e.parameter.page === 'secreto') {
    return HtmlService.createHtmlOutputFromFile('Secreto')
      .setTitle("Ethos Technologies")
      .setFaviconUrl("https://cdn-1.webcatalog.io/catalog/hacker-typer/hacker-typer-icon.png")
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }

  // --- REPRODUCTOR ETHOS ---
  if (e && e.parameter && e.parameter.page === 'player') {
    return HtmlService.createHtmlOutputFromFile('Player')
      .setTitle("ETHOS Player")
      .setFaviconUrl("https://cdn-1.webcatalog.io/catalog/hacker-typer/hacker-typer-icon.png")
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }

  // --- PÀGINA PRINCIPAL (ACCESS) ---
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle("Ethos Technologies")
    .setFaviconUrl("https://cdn-1.webcatalog.io/catalog/hacker-typer/hacker-typer-icon.png")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}


// -------------------------------
// VERIFICAR CONTRASENYA
// -------------------------------

function verificarContrasena(claveIngresada) {
  if (claveIngresada === CONTRASENA_SECRET_A) {

    // URL del web app
    const base = ScriptApp.getService().getUrl();

    // Redirigeix a la pàgina secreta
    const url = base + "?page=secreto";

    return { success: true, url: url };
  }

  return { success: false, mensaje: "Contraseña incorrecta" };
}
