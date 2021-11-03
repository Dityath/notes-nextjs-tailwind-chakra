import axios from "axios";
import { BASE_URL } from "./storage";

const fetcher = axios.create({
  baseURL: BASE_URL,
});

export default fetcher;
