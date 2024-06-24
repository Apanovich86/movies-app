import axios from "axios";
import {baseURL} from "../constants/urls";

export const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODk4MDM5NDMxMTc1OTMxYTM3Y2YxYzY1N2I3MzkzZiIsInN1YiI6IjYxMzFiZGZjNWFiODFhMDA2OGJlODNjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rYiAMLZaaYmfCD-omDdhfN7wPgV55aMccol7NT0qtWg" }
});

