const fs = require('fs');
const filename = 'data.txt';
function total_words_in_file(filename, callback) {
  fs.readFile(filename, 'utf8', async function(err, data)  {
    if (err) {
      callback(err);
      return;
    }

    // Split the file data into words using regular expression
    const words = data.split(/\s+/);
    console.log("words",words)
    // calculating empty strings and count the words
    const Word_count = words.filter(word => word.trim() !== '').length;
    
    callback(null, Word_count);
  });
}


total_words_in_file(filename, async function(err, Word_count) {
  if (err) {
    console.error('Error reading file data:', err.message);
    return;
  }

  console.log('Total words in file:', Word_count);
});
