export default {
	name: 'volume',
	title: 'Volume',
	type: "document",
	fields: [
		{
			name: "intro",
            title: "Introduction of Volume",
			type: 'object',
			fields: [
				{
					name: 'title',
					title: 'Side Title',
					type: 'string',
				},
				{
					name: 'color',
					title: 'Color',
					type: 'string',
				},
				{
					name: 'content',
					title: 'Content',
					type: 'markdown',
				},
				{
					name: "les",
					title: "Les",
					type: "object",
					fields: [
						{
							name: 'title',
							title: 'Side Title',
							type: 'string',
						},

					]
				}
			],
		},
		{
			name: "chapters",
			title: "Chapters",
			type: "array",
			of: [{
					name: "intro",
            		title: "Introduction of Chapter",
					type: 'object',
					fields: [
						{
							name: 'title',
							title: 'Side Title',
							type: 'string',
						},
						{
							name: 'color',
							title: 'Color',
							type: 'string',
						},
						{
							name: 'content',
							title: 'Content',
							type: 'markdown',
						},
						{
							name: "les",
							title: "Les",
							type: "object",
							fields: [
								{
									name: 'title',
									title: 'Side Title',
									type: 'string',
								},

							]
						}
					],
				},
				{
					name: 'subchapter',
					title: 'Subchapter',
					type: "object",
					fields: [
						{
							name: "theory",
							title: "In theory",
							type: 'object',
							fields: [
								{
									name: 'title',
									title: 'Side Title',
									type: 'string',
								},
								{
									name: 'color',
									title: 'Color',
									type: 'string',
								},
								{
									name: 'content',
									title: 'Content',
									type: 'markdown',
								},
								{
									name: "les",
									title: "Les",
									type: "object",
									fields: [
										{
											name: 'title',
											title: 'Side Title',
											type: 'string',
										},

									]
								}
							],
						},
						{
							name: "practice",
							title: "In practice",
							type: 'object',
							fields: [
								{
									name: 'title',
									title: 'Side Title',
									type: 'string',
								},
								{
									name: 'color',
									title: 'Color',
									type: 'string',
								},
								{
									name: 'content',
									title: 'Content',
									type: 'markdown',
								},
								{
									name: "les",
									title: "Les",
									type: "object",
									fields: [
										{
											name: 'title',
											title: 'Side Title',
											type: 'string',
										},

									]
								}
							],
						},
						{
							name: "action",
							title: "In action",
							type: 'object',
							fields: [
								{
									name: 'title',
									title: 'Side Title',
									type: 'string',
								},
								{
									name: 'color',
									title: 'Color',
									type: 'string',
								},
								{
									name: 'content',
									title: 'Content',
									type: 'markdown',
								},
								{
									name: "les",
									title: "Les",
									type: "object",
									fields: [
										{
											name: 'title',
											title: 'Side Title',
											type: 'string',
										},

									]
								}
							],
						},
						{
							name: "exercise",
							title: "In exercise",
							type: 'object',
							fields: [
								{
									name: 'title',
									title: 'Side Title',
									type: 'string',
								},
								{
									name: 'color',
									title: 'Color',
									type: 'string',
								},
								{
									name: 'content',
									title: 'Content',
									type: 'markdown',
								},
								{
									name: "les",
									title: "Les",
									type: "object",
									fields: [
										{
											name: 'title',
											title: 'Side Title',
											type: 'string',
										},

									]
								}
							],
						},
					]
				}
			]
		}
	]
};