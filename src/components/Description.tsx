"use client";

import React, { useEffect, useState } from "react";
import axiosInstance from "@/lib/axios"; // Adjust the import path as needed

const Description: React.FC = () => {
  const [description, setDescription] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDescription = async () => {
      try {
        const response = await axiosInstance.get("/description");
        const data = response.data;

        // Assuming the response contains an array of descriptions
        // and you want to use the first one
        const description =
          data && data.data && data.data.length > 0 ? data.data[0].content : "";
        setDescription(description);
      } catch (error) {
        console.error("Error fetching description:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDescription();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-black dark:text-gray-300">
      <p className="mt-4">{description}</p>
    </div>
  );
};

export default Description;
