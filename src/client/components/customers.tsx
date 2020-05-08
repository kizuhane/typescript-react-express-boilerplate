import React, { useEffect } from "react";

import UseFetch from "../hooks/UseFetch";

const customers = () => {
  const { data, loading, fetchDataFromUrl } = UseFetch();

  useEffect(() => {
    let currentPage = true;
    if (currentPage) {
      fetchDataFromUrl("/api/customers");
    }
    return () => {
      currentPage = false;
    };
  }, []);

  console.log(data);

  return <div>{loading ? <p>loading</p> : <p>customers data</p>}</div>;
};

export default customers;
