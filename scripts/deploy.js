const execa = require("execa");

async function main() {
  await execa("yarn", ["docs:build"]);
  await execa("cd", ["docs/.vitepress/dist"]);
  await execa("git", ["init"]);
  await execa("git", ["add", "-A"]);
  await execa("git", ["commit", "-m", "chore: deploy docs"]);
  await execa("git", ["push", "-f", "https://github.com/SoulLyoko/vue-arcgis-api.git", "master:gh-pages"]);
}

main();
