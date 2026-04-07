const { exec } = require('child_process');
exec('npm run build', (error, stdout, stderr) => {
  console.log("Error:", error?.message);
  console.log("Stdout:", stdout);
  console.log("Stderr:", stderr);
});
