"use client";

import Giscus from "@giscus/react";

export const BlogComments = () => {
  return (
    <Giscus
      repo="toushik018/tayeb-giscus"
      repoId="R_kgDOMD4tIQ"
      category="Announcements"
      categoryId="DIC_kwDOMD4tIc4CfzHk"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="preferred_color_scheme"
      lang="en"
      loading="lazy"
    />
  );
};
