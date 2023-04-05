const REGEX = "^[a-z0-9]+(?:-[a-z0-9]+)*$";

const main = () => {
  const args = process.argv.slice(2)[0];
  console.log("args: ", args);
  const replaced = args.replace(/\W+/g, "-").toLowerCase();
  console.log(replaced);
};

main();
