
// ! UWAGA na przecinki
export const migrations = [
    `create table dictionary (
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        wordENG TEXT,
        wordPL TEXT
    );`
]
