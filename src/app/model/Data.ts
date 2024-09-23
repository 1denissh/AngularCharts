export interface Data {
    data: Item[],
    source: Source[]
}

export interface Item {
    [key: string]: string | number,
    Year: string,
    Population: number
}

export interface Source {
    measures: string[],
    annotations: Annotation,
    name: string,
    substitutions: any[]
}

export interface Annotation {
    [key: string]: string
}