import { Database } from 'bun:sqlite'
import { migrations } from './migrations/migrations'
import { seeds } from './seeds/seeds'

const runMigrations = (dbClient: Database) => {
    migrations.forEach(query => {
        const migration = dbClient.query(query)
        migration.run()
    })
}

const runSeeds = (dbClient: Database) => {
    Object.entries(seeds).forEach(([seedName, seed]) => {
        const insert = dbClient.prepare(seed.insertQuery);
        const insertData = dbClient.transaction(data => {
          for (const row of data) insert.run(row);
          return data.length;
        });

        const count = insertData(seed.rowsData);
        console.log(`Inserted ${count} rows of ${seedName}`);
    })
}


export const initDbClient = async (): Promise<Database> => {
    let dbClient: Database

    const dbPath = 'database/db.sqlite'
    const file = Bun.file(dbPath)
    const isDbExists = await file.exists()

    if (isDbExists) {
        dbClient = new Database(dbPath)
        console.log('db opened')
    } else {
        dbClient = new Database(dbPath, { create: true })
        console.log('new db created')
    
        runMigrations(dbClient)
        runSeeds(dbClient)
    
        // const query = dbClient.query(`SELECT * FROM cats`);
        // // console.log(query.get()) // get first element
        // console.log(query.all())
        
        // const query2 = db.query("SELECT * FROM cats WHERE name = $name");
        // const results = query2.all({
        //   $name: 'Lalka',
        // });
        
        // console.log(results)
    }

    return dbClient
}
