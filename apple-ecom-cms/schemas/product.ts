import {defineType, defineField} from 'sanity'
import {RiMacbookLine} from 'react-icons/ri'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: RiMacbookLine,
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
    defineField({
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            accept: 'image/*',
            hotspot: true,
          },
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (rule) => rule.greaterThan(0.1).precision(2).positive().required(),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      validation: (rule) => rule.required(),
    }),
  ],
})
