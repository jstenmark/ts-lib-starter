import dotenv from 'dotenv'

dotenv.config()

declare const process: {
  env: {
    PORT?: string
    DATABASE_URL?: string
  }
}

export const PORT = process.env.PORT || 3000
export const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017/mydb'
