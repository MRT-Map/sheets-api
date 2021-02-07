const doGet = (req) => {
  //example of a request URL
  //https://script.google.com/macros/s/AKfycbwde4vwt0l4_-qOFK_gL2KbVAdy7iag3BID8NWu2DQ1566kJlqyAS1Y/exec?spreadsheetId=1Hhj_Cghfhfs8Xh5v5gt65kGc4mDW0sC5GWULKidOBW8&sheetName=Members

  var params = req.parameter;

  const spreadsheet = SpreadsheetApp.openById(params.spreadsheetId);

  const sheet = spreadsheet.getSheetByName(params.sheetName);
  const values = sheet.getDataRange().getValues();

  //sorts the information into an array of objects
  var info = []
  var headers;
  for (let row in values) {
    if (row == 0) {//headers
      headers = values[row]
    } else {
      let newRowInfo = {}
      for (let cell in values[row]) {
        newRowInfo[headers[cell]] = values[row][cell]
      }
      info.push(newRowInfo);
    }
  }

  return ContentService.createTextOutput(JSON.stringify(info));

}
