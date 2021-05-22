import axios from "axios";

const URL = "http://localhost:1111";

export const fetchPosts = () => axios.get("http://localhost:1111/");
