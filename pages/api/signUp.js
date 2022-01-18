import axios from "axios";

export const signUp = async (data) => {
    const res = await axios.post("/api/sanity", {
        ...data,
    });

    return res.data;
};
