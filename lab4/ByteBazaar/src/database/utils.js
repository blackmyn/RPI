import fs from 'fs';

export const saveToDatabase = (DB) =>
{
  fs.writeFileSync('./src/database/db.json', 
  JSON.stringify(DB), 
  'utf8', 
  (err) => {
    if (err) {
      console.log(err);
    }
  });
};
