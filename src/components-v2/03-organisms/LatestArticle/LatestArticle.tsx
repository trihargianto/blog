import React from "react";

type LatestArticleTypes = {
  className: string;
};

const articles = [
  "Lorem ipsum dolor sit amet. Lorem ipsum dolor",
  "Lorem ipsum dolor sit amet. Lorem ipsum dolor",
  "Lorem ipsum dolor sit amet. Lorem ipsum dolor",
  "Lorem ipsum dolor sit amet. Lorem ipsum dolor",
  "Lorem ipsum dolor sit amet. Lorem ipsum dolor",
];

const LatestArticle = (props: LatestArticleTypes) => (
  <div className={props.className}>
    <div className="mb-8 flex items-center justify-between">
      <h2 className="text-3xl font-semibold">Artikel Terbaru</h2>
      <button className="rounded-sm bg-blue-500 px-4 py-3 text-white hover:bg-blue-400">
        Lihat Semua
      </button>
    </div>

    {articles.map((item, index) => (
      <div
        key={`latest-article-${index}`}
        className="flex justify-between border-b-2 py-3"
      >
        <a href="#" className="font-medium hover:underline">
          {item}
        </a>

        <span className="text-slate-400">20 Februari 2023</span>
      </div>
    ))}
  </div>
);

export default LatestArticle;
