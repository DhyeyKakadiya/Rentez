import React, { useState } from 'react';

function ReadMore({ text, maxLength }) {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  if (!text) {
    return null; // Render nothing if text is undefined
  }

  return (
    <div>
      {isTruncated ? (
        <>
          <p style={{textAlign:'justify'}}>{`${text.slice(0, maxLength)}...`}</p>
          <button onClick={toggleTruncate}
           style={{border:'none',
           background:'transparent',
           fontSize:'18px',
           color:'#3770FF', 
           cursor:'pointer',
           textDecoration:'underline'
        }}
           >
            Read More</button>
        </>
      ) : (
        <>
          <p style={{textAlign:'justify'}}>{text}</p>
          <button onClick={toggleTruncate}
          style={{border:'none',
          background:'transparent',
          fontSize:'18px',
          color:'#3770FF',
          cursor:'pointer',
          textDecoration:'underline',
        }}
          >
            Read Less</button>
        </>
      )}
    </div>
  );
}

export default ReadMore;
