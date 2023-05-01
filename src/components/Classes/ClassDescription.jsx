import React, { useState } from "react";
import "./ClassDescription.css";

const classData = [
  {
    title: "Spinning Class",
    description:
      "vdjsvjknakcnakS CKD SK VDKS VJKDS KJV Cjs vj dskjvc askjd vkj dsVJK DSK VKJSAD VKJ dskjv ksjd jvkd skv dksj VKJSD JKC KDSJ C",
  },
  {
    title: "TRX Class",
    description: "Description of class 2",
  },
  {
    title: "Class 3",
    description: "Description of class 3",
  },
  {
    title: "Class 4",
    description: "Description of class 4",
  },
  {
    title: "Class 5",
    description: "Description of class 5",
  },
];

function ClassDescription() {
  const [currentClass, setCurrentClass] = useState(0);

  const handlePrevClick = () => {
    setCurrentClass(
      currentClass === 0 ? classData.length - 1 : currentClass - 1
    );
  };

  const handleNextClick = () => {
    setCurrentClass(
      currentClass === classData.length - 1 ? 0 : currentClass + 1
    );
  };

  const { title, description } = classData[currentClass];

  return (
    <div className="class-description">
      <h2 className="class-description__title">{title}</h2>
      <p className="class-description__description">{description}</p>
      <div className="class-description__buttons">
        <button className="class-description__button" onClick={handlePrevClick}>
          Prev
        </button>
        <button className="class-description__button" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
}

export default ClassDescription;
