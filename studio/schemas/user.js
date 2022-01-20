export default {
    name: "user",
    title: "User",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "email",
            title: "Email",
            type: "string",
        },
        {
            name: "recordings",
            title: "Recordings",
            type: "array",
            of: [{ type: "file" }],
        },
        {
            name: "password",
            type: "string",
            hidden: true,
        },
    ],
};
