import './expanding-div4.css'; // Make sure to use the correct file path
import React, { useState, useEffect } from 'react';

interface ExpandingDivProps {
  customClasses: string;
}

const ExpandingDiv4: React.FC<ExpandingDivProps> = ({ customClasses }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Delay the expansion to see the animation (can be adjusted)
    const expandTimeout = setTimeout(() => {
      setIsExpanded(true);
    }, 1000);

    // Clear the timeout to prevent expansion if the component unmounts
    return () => clearTimeout(expandTimeout);
  }, []);

  return (
    <div
      className={`expanding-div4 ${isExpanded ? 'expanded4' : ''} ${customClasses}`}
    >
      {/* Content for the expanding div */}
    </div>
  );
};

export default ExpandingDiv4;