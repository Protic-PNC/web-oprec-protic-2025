function doPost(e) {
  try {
    // Parsing body JSON
    const data = JSON.parse(e.postData.contents);

    // Buka spreadsheet aktif dan pilih sheet Pendaftar
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Pendaftar');

    // Tambahkan baris data
    sheet.appendRow([
      new Date(), // timestamp
      data.fullname,
      data.npm,
      data.class,
      data.semester,
      data.division1,
      data.division2,
      data.portfolio,
      data.whatsapp,
      data.email,
    ]);

    // Balikan response JSON
    return ContentService.createTextOutput(
      JSON.stringify({ result: "success", data: data })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ result: "error", message: err })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
