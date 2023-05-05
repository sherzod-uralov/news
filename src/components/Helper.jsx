import axios from "axios";

export async function FetchData(url,use) {
    try {
        const res = await axios.get(url);
    use(res.data)
    } catch (error) {
        console.error(error);
    }
}