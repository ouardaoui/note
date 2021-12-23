const fs = require("fs")
const chalk = require("chalk")

const getNote = () => {
  console.log(chalk.green("your note :"))
}

const addNote = (title, body) => {
  const notes = loadNote()
  const duplicate = notes.filter(note => {
    return note.title === title
  })
  if (duplicate.length === 0) {
    notes.push({ title, body })
    saveNote(notes)
    console.log("note title was added")
  } else {
    console.log("note title already exist")
  }

}
const removeNote = (title) => {
  const notes = loadNote()
  const filterNote = notes.filter(note => {
    return note.title !== title
  })
  saveNote(filterNote)
  if (filterNote.length === notes.length) {
    console.log(chalk.red.inverse("no note found"))
  } else {
    console.log(chalk.green.inverse("note removed!"))
  }
}
const listNote = () => {
  const notes = loadNote()
  notes.map(note => console.log(chalk.cyan(note.title)))
}
const readNote = (title) => {
  const notes = loadNote()
  const note = notes.find(note => note.title === title)

  if (note) {
    console.log(chalk.inverse(note.body))
  } else {
    console.log(chalk.red.inverse("note not found"))
  }
}
const loadNote = () => {
  try {
    const JSONData = fs.readFileSync("notes.json")
    bufferData = JSONData.toString()
    const Data = JSON.parse(bufferData)
    return Data
  } catch {
    return []
  }
}
const saveNote = (notes) => {
  stringData = JSON.stringify(notes)
  fs.writeFileSync("notes.json", stringData)
}

module.exports = { getNote, addNote, removeNote, listNote, readNote }