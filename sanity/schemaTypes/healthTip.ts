// sanity/schemaTypes/healthTip.ts
import { defineField, defineType } from 'sanity'

export const healthTip = defineType({
  name: 'healthTip',
  title: 'Health Tip',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    // NEW IMAGE FIELD 
    defineField({
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true, // Allows you to crop and focus the image in the studio
      },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Nutrition', value: 'nutrition' },
          { title: 'Exercise', value: 'exercise' },
          { title: 'Mental Health', value: 'mental-health' },
          { title: 'Preventive Care', value: 'preventive-care' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
})