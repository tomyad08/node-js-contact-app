const yargs = require("yargs");

// yargs.command(
//   "add",
//   "Menamgahkan kontak",
//   () => {},
//   (argv) => {
//     console.log(argv.nama);
//   }
// );

yargs.command({
  command: "add",
  describe: "Menambahkan kontak data",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "Alamat Email",
      demandOption: false,
      type: "string",
    },
    noHP: {
      describe: "no handphone",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    const contact = {
      nama: argv.nama,
      email: argv.email,
      no_hp: argv.noHP,
    };
    console.log(contact);
  },
});
yargs.parse();
