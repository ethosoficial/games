const CONTRASENA_SECRET_A = "Reset";

function doGet(e) {

  // --- PÁGINA DE LOGIN (Index) ---
  if (!e || !e.parameter || !e.parameter.page) {
    return HtmlService.createHtmlOutputFromFile('Index')
      .setTitle("ETHOS TECHNOLOGIES • NEON v3.1")
      .setFaviconUrl("https://cdn-1.webcatalog.io/catalog/hacker-typer/hacker-typer-icon.png")
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }

  // --- LAUNCHER DE JUEGOS (ethos.html) ---
  if (e.parameter.page === 'player') {
    return HtmlService.createHtmlOutputFromFile('ethos')
      .setTitle("ETHOS PLAYER • NEON v3.1")
      .setFaviconUrl("https://cdn-1.webcatalog.io/catalog/hacker-typer/hacker-typer-icon.png")
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }

  // --- PÁGINA SECRETA (opcional) ---
  if (e.parameter.page === 'secreto') {
    return HtmlService.createHtmlOutputFromFile('Secreto')
      .setTitle("Ethos Technologies")
      .setFaviconUrl("https://cdn-1.webcatalog.io/catalog/hacker-typer/hacker-typer-icon.png")
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }

  // Por defecto vuelve al login
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle("ETHOS TECHNOLOGIES • NEON v3.1")
    .setFaviconUrl("https://cdn-1.webcatalog.io/catalog/hacker-typer/hacker-typer-icon.png")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

// -------------------------------
// VERIFICAR CONTRASEÑA
// -------------------------------
function verificarContrasena(claveIngresada) {
  if (claveIngresada === CONTRASENA_SECRET_A) {
    const base = ScriptApp.getService().getUrl();
    const url = base + "?page=player";   // ← Ahora va directo al nuevo launcher
    return { success: true, url: url };
  }
  return { success: false, mensaje: "Contraseña incorrecta" };
}
