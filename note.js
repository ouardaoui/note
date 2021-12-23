const notes = require('./app')



const yargs = require('yargs')

yargs.command({
  command: 'add',
  desc: 'Set a note',
  builder: {
    title: {
      desc: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      desc: "Note body",
      demandOption: true,
      type: "string",
    }
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body)
  }
}).command({
  command: 'remove',
  desc: 'remove a notes',
  builder: {
    title: {
      desc: "Note title",
      demandOption: true,
      type: "string",
    }
  },
  handler: (argv) => {
    notes.removeNote(argv.title)
  }
}).command({
  command: "list",
  desc: "list a notes",
  handler: () => {
    notes.getNote()
    notes.listNote()
  }
}).command({
  command: "read",
  desc: "read a note",
  builder: {
    title: {
      desc: "Note title",
      demandOption: true,
      type: "string",
    }
  },
  handler: (argv) => {
    notes.readNote(argv.title)
  }
}).parse()



