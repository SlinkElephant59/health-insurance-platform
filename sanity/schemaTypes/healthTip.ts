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