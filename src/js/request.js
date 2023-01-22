import loaderToggle from "./loader";

const request = async (url) => {
    try {
        loaderToggle(true);
        const req = await fetch(url);

        if (!req.ok) {
            throw new Error("Something went wrong!");
        }

        const data = await req.json();

        loaderToggle(false);

        return data;
    } catch (error) {
        loaderToggle(false);
        console.log(error);
    }
};
export default request;
