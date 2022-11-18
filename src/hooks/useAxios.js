import axios from "axios";
import { useState } from "react"

const useAxios = (query) => {
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`https://private-f6edee-ponchopay.apiary-mock.com/${query}`);
      setResponse(res.data);
    } catch(err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  return {
    fetchData: () => fetchData(),
    response,
    loading,
    error
  }
}

export default useAxios