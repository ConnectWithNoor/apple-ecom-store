import {defineType, defineField} from 'sanity'
import {BiCategory} from 'react-icons/bi'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: BiCategory,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
  ],
})
