export default {
    name: 'volume',
    title: 'Volume',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Side Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'color',
        title: 'Color',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'content',
        title: 'Content',
        type: 'markdown',
      },
    ],
  };