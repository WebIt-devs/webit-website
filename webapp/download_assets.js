const fs = require('fs');
const https = require('https');
const path = require('path');

const dir = path.join(__dirname, 'public', 'assets', 'images');
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

const images = [
    { url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMYnFRSP9zjZ0lhy13bnRi_Wkmf_709M05X9Q8IsB3_U_qWg783RQdNzoxIIkfBvm35InDOQl7yMZTLMp8p1Mb_KmZpjd2oNB2gQ1ltafOXKJRCc3-GG3otui7uCxkmKG4DGbNvrEdNJ0hNWxxTLI1_nPdNKsQXcvAqbAbbKWSUgiefliHNJ_yTX3CStdtXJ0bX9YRVhgHIuCiN8Yj2Dc01T-hWuLyIFoAlm75ylI4K4Kz6E7xvlYlTil4rl6mNBFSdmT5hhoHd1nD', dest: 'solutions_ecommerce.jpg' },
    { url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfU0KLdcu1wRq7zXgIRoSfrId6qeVkG08h8QLS1mtvilYEYGGDZ08-Dy8_skr0gkRF4GHNmEzjHgOXrBCjQOdxjGU4lKfytRdhj3CFY0r3oMh_VB7s4YQvXUnvuLOjSUx9cXZ2FOC0EOHUSZdrDzNba2JNu9dgQvEMG-7sSqmKZrWJbZb0Um3nxevnhTJjG73L4TFvDHrCJt0Amc_Wi5er2gJvYuqUbgDgtMunZSBwDiJ-ny7YcsHEbWY6SN73I8_0lYhYKUNJdfw2', dest: 'services_room.jpg' },
    { url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-GpbN5sXg0WpfX3iH31GX43n8oyJuZAUWVGYO0jgHLW8a5s6kn5YgLnXxl_utFZM9KMPPIZ1_bQGczfhEVlKmlM9eeYjstDLWbJZpIMLoblWPhQRG2haSV5HR6lKriI21N4x66OI5AbqBSELIE6AJHrJYzHI1QjqPYXQOlTFiAJtG7oxtVwZrtgU75Itrf3tZkE8dM2rA-5f9YVX43Z4oR25Tz8U4yO-o8bV6', dest: 'home_hero.jpg' },
    { url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAse2ZQPE9unMByv3sNU9JfSSw6Bqtv8QgtQ_lKVzyLFFy1n6xNXHAFsBKcQl5sHxf-wPS5qAx_55_LwwxJXBRrPgDwP6kQxq7cD6DigtwBq2exDoCNrSoPfDD6mTlqVxRkBzP7ZBDBpBMsQ2WISNGq8h6JKradZlp6qKEkSNipxJUAZpyy9sQHH1pGt58QT__yCl7f1_W7MmqTVSt4-AiIMohhltQKj8qi_h2KPPeo8lE6-fvsb7s3fTb5F0CsZRAzaNFRcvN9SqBF', dest: 'home_designer.jpg' },
    { url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3i-vyoBk9JrUkAvIvuBExr4YIDFrTGxunxpCOHVKIU0SfZ4Q0yXwF2f2mVQzE-if9HoSzDBTqV3bvoiV-usIPQ53QXE5syqVwoXQ_3BwEu_On3q0YsjNHiV5wdVdB0xY6b-wojr2gp-IQH3LU4DFj2xdcT6OHRmpOpwrpn2g4pkpLW3-5u2D7mz8EPqnqZFL-_V-OolBCguh8CdcYEHeXnDVfLb5met2sn6xOjU1BsD6CsT-QWtHEP3r1S7KBQxMc-t59isVn0wcN', dest: 'about_team.jpg' },
    { url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1S8Iufprz12wKLxPWpAwvj5ICDabc73ZY3pxiDuB25auKj9oKiILbku9a6vaL95DJMfAgSuHfNUjII0W1VjrQYBOCB-hAVIl6oypp9mNR6kQEB01z3ap-bdEgsV7vXS0hPE849uJhLTb00R6pY6BXNuNFxcWX7nBL6NnT6Gp1u_clbUdMhQdBqiOOnS_eNWKh3U-w10Iqlpi9_HwpqXxhl2L64F4EGoUU5RNIJrny2E533xx47wwkp9LcJeupl72ZEbe4BIC0PFYx', dest: 'about_office.jpg' }
];

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(path.join(dir, dest));
    https.get(url, function(response) {
      response.pipe(file);
      file.on('finish', function() {
        file.close(() => resolve());
      });
    }).on('error', function(err) {
      fs.unlink(path.join(dir, dest), () => {});
      reject(err.message);
    });
  });
};

Promise.all(images.map(img => download(img.url, img.dest)))
  .then(() => console.log('All images downloaded successfully!'))
  .catch(err => console.error('Error downloading images:', err));
