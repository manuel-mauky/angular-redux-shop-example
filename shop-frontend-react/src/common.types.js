
export type URI = string

export type ID = URI

export type Href = {
    href: URI
}


export type IdMap<T> = { [id: string]: T}
