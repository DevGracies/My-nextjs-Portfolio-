import { useState } from "react";

const ReadMoreCard = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const words = text.split(" ");
  const previewText = words.slice(0, 10).join(" ");

  return (
    <div>
      <p>
        {isExpanded ? text : `${previewText} `}
        {words.length > 10 && (
          <button
            onClick={() => setIsExpanded(() => !isExpanded)}
            className="text-blue-500 hover:underline"
          >
            {isExpanded ? "Read less" : "Read more"}
          </button>
        )}
      </p>
    </div>
  );
};

export default ReadMoreCard;
