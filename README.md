# sheets-api
A Google web app to convert spreadsheet values to JSON

## Requesting
Your GET request URL should look something like this:
`https://script.google.com/macros/s/AKfycbwde4vwt0l4_-qOFK_gL2KbVAdy7iag3BID8NWu2DQ1566kJlqyAS1Y/exec?spreadsheetId=1Hhj_Cghfhfs8Xh5v5gt65kGc4mDW0sC5GWULKidOBW8&sheetName=Members`
### Parameters
- `spreadsheetId` - The unique ID of the spreadsheet. Get it here: docs\.google\.com/spreadsheets/d/**1Hhj_Cghfhfs8Xh5v5gt65kGc4mDW0sC5GWULKidOBW8**/edit#gid=0
- `sheetName` - The name of the sheet that you're looking to extract data from. Remember to use %20 for spaces.

## Returned Data
This script returns a string of JSON, which will need to be parsed. Each row is contained in an array.

## Other Notes
Google Apps Script's content service redirects the request to another location, so however you are making the request, you must be able to follow the redirect.

For nodejs, use the [Follow-Redirects](https://www.npmjs.com/package/follow-redirects) module
