export default {
    name: 'volume',
    title: 'Volume',
    type: "document",
    fields: [
      {
        name: 'intro',
		title: 'Introduction of Volume',
		type: 'content',
      },
      {
        type: "array",
        name: "chapters",
        title: "Chapters",
        of: [{type: "chapter"}]
      }
    ]
  };