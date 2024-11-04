import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
.prompt([
    {message: "Type in your URL: ",
        name: "URL",
     
    
    }
     
     ,
     
   
]) 

.then((answers)=>{

const url = answers.URL;
console.log(answers);
var qr_svg = qr.image(url);
qr_svg.pipe(fs.createWriteStream('qr_code.png'));

fs.writeFile("url.txt",url ,(err)=>{
    if (err) throw err;
    console.log("file saved successfully");
});
})
.catch((error) => {
    if (error.isTtyError) {
      console.error(error.isTtyError)
    } else {
        console.error("something went wrong")
    }
  });