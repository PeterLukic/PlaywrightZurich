export const validPetData = {
    id: 123456,
    category: {
        id: 1,
        name: "Dogs"
    },
    name: "Buddy",
    photoUrls: [
        "https://images.unsplash.com/photo-1558788353-f76d92427f16"
    ],
    tags: [
        {
            id: 101,
            name: "friendly"
        },
        {
            id: 102,
            name: "golden-retriever"
        }
    ],
    status: "available"
};

export const invalidPetData = {
    id: "invalid-id",
    category: { id: 0, name: "Unknown" },
    name: "doggie",
    photoUrls: ["https://image.com"],
    tags: [],
    status: "available"
};