// import React from "react";
// import HighlightText from "../AboutPage/HighlightText";

// const LearningGridArray = [
//   {
//     order: -1,
//     heading: "World-Class Learning for",
//     highlightText: "Anyone, Anywhere",
//     description:
//       "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
//     BtnText: "Learn More",
//     BtnLink: "/",
//   },
//   {
//     order: 1,
//     heading: "Curriculum Based on Industry Needs",
//     description:
//       "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
//   },
//   {
//     order: 2,
//     heading: "Our Learning Methods",
//     description:
//       "Studynotion partners with more than 275+ leading universities and companies to bring",
//   },
//   {
//     order: 3,
//     heading: "Certification",
//     description:
//       "Studynotion partners with more than 275+ leading universities and companies to bring",
//   },
//   {
//     order: 4,
//     heading: `Rating "Auto-grading"`,
//     description:
//       "Studynotion partners with more than 275+ leading universities and companies to bring",
//   },
//   {
//     order: 5,
//     heading: "Ready to Work",
//     description:
//       "Studynotion partners with more than 275+ leading universities and companies to bring",
//   },
// ];

// const LearningGrid = () => {
//   return (
//     <div className="grid mx-auto custom-grid-container">
//       {LearningGridArray.map((card, i) => {
//         return (
//           <div
//             key={i}
//             className={`custom-grid-item ${i === 0 && "custom-col-span-2"} ${
//               card.order % 2 === 1
//                 ? "custom-bg-richblack-700"
//                 : card.order % 2 === 0
//                 ? "custom-bg-richblack-800"
//                 : "custom-bg-transparent"
//             } ${card.order === 3 && "custom-col-start-2"}`}
//           >
//             {card.order < 0 ? (
//               <div className="custom-inner-content">
//                 <div className="custom-heading">
//                   {card.heading}
//                   <HighlightText text={card.highlightText} />
//                 </div>
//                 <p className="custom-description">{card.description}</p>
                
//               </div>
//             ) : (
//               <div className="custom-inner-content">
//                 <h1 className="custom-heading-secondary">{card.heading}</h1>
//                 <p className="custom-description">{card.description}</p>
//               </div>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default LearningGrid;
