const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// 1. Configuration
const FILES_DIR = path.join(__dirname, "files");

// 2. Check if the directory exists
if (!fs.existsSync(FILES_DIR)) {
  console.error(`Error: Directory "${FILES_DIR}" not found.`);
  process.exit(1);
}

console.log(`Starting bulk format in: ${FILES_DIR}\n`);

// 3. Process the files
const files = fs.readdirSync(FILES_DIR);

files.forEach((file) => {
  const filePath = path.join(FILES_DIR, file);

  // Only process actual files (skip directories)
  if (fs.lstatSync(filePath).isFile()) {
    console.log(`Formatting: ${file}...`);

    try {
      // We use 'check --write' as requested
      // stdio: 'inherit' lets you see Biome's colored output in your terminal
      execSync(`npx @biomejs/biome check --write "${filePath}"`, {
        stdio: "inherit",
      });
    } catch (error) {
      // Biome exits with a non-zero code if it finds lint errors it can't fix
      console.warn(
        `Note: Biome finished ${file} with suggestions or syntax warnings.`,
      );
    }
  }
});

console.log("\n--- Bulk formatting complete ---");
