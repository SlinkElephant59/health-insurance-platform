// sanity/schemaTypes/index.ts
import { type SchemaTypeDefinition } from 'sanity'
import { healthTip } from './healthTip' // Import the new file

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [healthTip], // Add it to the types array
}