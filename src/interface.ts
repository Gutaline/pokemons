export interface IPoki {
    abildesr:[{effect:string},{effect:string}],
    abilities: [{ability: {name: string, url: string}},{ability: {name: string, url: string}}],
    base_experience: number,
    forms: any[],
    id: number,
    is_default: boolean,
    location_area_encounters: string,
    moves: any[],
    name: string,
    order: number,
    past_types: any[],
    species:any[],
    sprites:{other: {dream_world: {front_default: string}}},
    stats:[{}],
    types:[{type:{name:string}}],
    weight: number
    favor:boolean

}
