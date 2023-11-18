
type TSeeds = {
    dictionary: TSeed<TDictionary>
}

type TSeed<T> = {
    insertQuery: string
    rowsData: T[]
}

// tables with fields
type TDictionary = {
    $wordENG: string
    $wordPL: string
}

export const seeds: TSeeds = {
    dictionary: {
        insertQuery: 'INSERT INTO dictionary (wordENG, wordPL) VALUES ($wordENG, $wordPL)',
        rowsData: [
            { $wordENG: 'concurrency', $wordPL: 'współbieżność' }
        ]
    }
}