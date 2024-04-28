const {test,expect} =  require('@playwright/test');
const excel = require('exceljs');
async function writeExcel(param,name) {

    const workbook = new excel.Workbook();
    await workbook.xlsx
      .readFile("C:/Users/Admin/Downloads/download.xlsx")
    
        const worksheet = workbook.getWorksheet("Sheet1");
        const output= await readExcel(worksheet,param);

       const cell=  worksheet.getCell(output.rowdata,output.colData);
       cell.value=name;
       await workbook.xlsx.writeFile("C:/Users/Admin/Downloads/download.xlsx");

}

async function readExcel(worksheet, param) {
    let output = {rowdata:0,colData:0};
   worksheet.eachRow((row, rownumber) => {
    row.eachCell((cell, colNumber) => {
      if (cell.value === `${param}`) {    
        output.rowdata=rownumber;
        output.colData=colNumber+3;
        console.log(rownumber);
        console.log(colNumber);
      }
    });
  });
  return output;
}

test('update Exel',({page})=>{


writeExcel("Mango","samuuu");


})


test.only('upload excel',async ({page})=>{

await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html");
const wait=page.waitForEvent('download')
await page.getByRole("button",{name:'Download'}).click();
await wait;

await writeExcel("Mango","India");
await page.locator("input#fileinput").click();
await page.locator("input#fileinput").setInputFiles("C:/Users/Admin/Downloads/download.xlsx");
await page.pause();

const mango=await page.getByText("Mango");
const desiredLoactor= await page.getByRole('row').filter({has:mango});
await expect(desiredLoactor.locator('div#cell-4-undefined')).toContainText("499");


})