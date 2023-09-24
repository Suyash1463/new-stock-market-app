import React from "react";

const NewsItem = ({ datetime, headline, source, url, summary }) => {
  // Check if datetime is a string before using substring
  const formattedDatetime =
    typeof datetime === "string" ? datetime.substring(0, 10) : datetime;

  return (
    <div>
      <a href={url} target="_blank">
        <h3>{headline}</h3>
      </a>
      <div>
        Source: <em>{source}</em>, {formattedDatetime}
      </div>
      <div>
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default NewsItem;
