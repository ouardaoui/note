# MyApp

note application (create,read,remove...) with node.js 

## Installation

Use the package manager npm or yarn 

```bash
npm install
yarn add 
```

## API

open this folder in laptop and launch your terminal .

to check available command : 

```bash
node note --help 
```
### add a note (body and title required ).

```bash
node note add --title="ur title" --body="ur note"
```
### remove a note (title required )
```bash
node note add --title="ur title" 
```
### list a notes 
```bash
node note list
```
### read a note (title required )
```bash
node note read --title="ur title" 
```