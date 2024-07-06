"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React, { useEffect, useState, useRef, FC } from "react";

const supabase = createClientComponentClient();

interface ViewCounterProps {
  slug: string;
  noCount?: boolean;
  showCount?: boolean;
}

const ViewCounter: FC<ViewCounterProps> = ({
  slug,
  noCount = false,
  showCount = true,
}) => {
  const [views, setViews] = useState(0);
  const hasIncrementedRef = useRef(false);

  useEffect(() => {
    const incrementView = async () => {
      try {
        let { error } = await supabase.rpc("increment", {
          slug_text: slug,
        });

        if (error) {
          console.error(
            "Error incrementing view count inside try block:",
            error,
          );
        }
      } catch (error) {
        console.error(
          "An error occurred while incrementing the view count:",
          error,
        );
      }
    };

    if (!noCount && !hasIncrementedRef.current) {
      incrementView();
      hasIncrementedRef.current = true;
    }
  }, [slug, noCount]);

  useEffect(() => {
    const getViews = async () => {
      try {
        let { data, error } = await supabase
          .from("views")
          .select("count")
          .match({ slug: slug })
          .single();

        if (error) {
          console.error("Error fetching view count:", error);
        } else {
          setViews(data ? data.count : 0);
        }
      } catch (error) {
        console.error(
          "An error occurred while fetching the view count:",
          error,
        );
      }
    };

    getViews();
  }, [slug]);

  if (showCount) {
    return <>{views !== null ? `${views} views` : "Loading views..."}</>;
  } else {
    return null;
  }
};

export default ViewCounter;
