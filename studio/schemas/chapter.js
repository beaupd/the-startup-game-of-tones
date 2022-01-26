export default {
    name: "chapter",
    title: "Chapter",
    type: "object",
    fields: [
        {
            name: "intro",
            title: "Introduction of Chapter",
            type: "content",
        },
        {
            type: "array",
            name: "subchapters",
            title: "Subchapters",
            max: 3,
            of: [{ type: "subchapter" }],
        },
        {
            name: "together",
            title: "Putting it together",
            type: "content",
        },
    ],
};
