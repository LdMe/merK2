import fs from 'fs';
import path from 'path';
/**
 * Helper function to remove a file from storage given its name
 * 
 * @param {string} fileName
 * @returns {boolean}
 */
function removePicture(fileName,folder="images") {
    try{
        const filePath = path.join(process.cwd(), 'public', folder, `${fileName}`);
        fs.unlinkSync(filePath);
        return true;
    }catch(error){
        console.log(error);
        return false;
    }
}

export {
    removePicture
};