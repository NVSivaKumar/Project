import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import { join } from 'path'
import fs from 'fs'
import dotenv from 'dotenv'

dotenv.config()

const dbFile = process.env.DB_FILE || './db.json'

const adapter = new JSONFile(dbFile)
// lowdb v6 requires default data passed to Low constructor
const defaultData = { users: [], codes: [] }
const db = new Low(adapter, defaultData)

async function init() {
  await db.read()
  // ensure file has initial structure
  if (!db.data) {
    db.data = defaultData
    await db.write()
  }
}

export { db, init }
