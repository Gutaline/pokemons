import {z} from 'zod'

const MySchemaForPoki = z.object({
  abildesr: z.array(
    z.object({
      effect: z.string()
    })
  ),
  abilities: z.array(
    z.object({
      ability: z.object({
        name: z.string(),
        url: z.string()
      })
    })
  ),
  base_experience: z.number(),
  forms: z.any(),
  id: z.number(),
  is_default: z.boolean(),
  location_area_encounters: z.string(),
  moves: z.any(),
  name: z.string(),
  order: z.number(),
  past_types: z.any(),
  species: z.any(),
  sprites: z.object({
    other: z.object({
      dream_world: z.object({
        front_default: z.string()
      })
    })
  }),
  stats: z.any(),
  types: z.array(
    z.object({
      type: z.object({
        name: z.string()
      })
    })
  ),
  weight: z.number(),
  favor: z.boolean()
})

export type IPoki = z.infer<typeof MySchemaForPoki>

// export interface IPoki {
//   abildesr: [{effect: string}, {effect: string}]
//   abilities: [
//     {ability: {name: string; url: string}},
//     {ability: {name: string; url: string}}
//   ]
//   base_experience: number
//   forms: any[]
//   id: number
//   is_default: boolean
//   location_area_encounters: string
//   moves: any[]
//   name: string
//   order: number
//   past_types: any[]
//   species: any[]
//   sprites: {other: {dream_world: {front_default: string}}}
//   stats: [{}]
//   types: [{type: {name: string}}]
//   weight: number
//   favor: boolean
// }

const MySchemaForFavor = z.object({
  id: z.number(),
  name: z.string(),
  image: z.string(),
  type: z.string(),
  favor: z.boolean()
})

export type IPokiFavor = z.infer<typeof MySchemaForFavor>

// export interface IPokiFavor {
//   id: number
//   name: string
//   image: string
//   type: string
//   favor: boolean
// }
