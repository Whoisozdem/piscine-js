import fs from 'fs';

const directoryPath = process.argv[2] || './';
const outputFile = 'vip.txt';

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error(`Error reading directory: ${err}`);
  } else {
    const vipGuests = [];

    files.forEach((file) => {
      if (file.endsWith('.json')) {
        const filePath = `${directoryPath}/${file}`;
        try {
          const fileName = file.split('.')[0];
          const [lastName, firstName] = fileName.split('_');
          const data = fs.readFileSync(filePath, 'utf8');
          const guest = JSON.parse(data);

          if (guest.answer && guest.answer.toLowerCase() === 'yes') {
            const fullName = `${firstName} ${lastName}`;
            vipGuests.push(fullName);
          }
        } catch (error) {
          console.error(`Error reading ${file}: ${error}`);
        }
      }
    });

    // Sort the VIP guest list alphabetically
    vipGuests.sort();

    const formattedOutput = vipGuests.map((guest, index) => `${index + 1}. ${guest}`);
    
    fs.writeFileSync(outputFile, formattedOutput.join('\n'));
    console.log(`VIP list has been saved to ${outputFile}`);
  }
});
