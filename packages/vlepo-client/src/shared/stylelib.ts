export {};
// // @ts-nocheck

// import { css } from '@emotion/react';

// export const listGroup = css`
//   display: -ms-flexbox;
//   display: flex;
//   -ms-flex-direction: column;
//   flex-direction: column;
//   padding-left: 0;
//   margin-bottom: 0;
//   border-radius: 0.25rem;
// `;

// export const cardHeader = css`
//   padding: 0.75rem 1.25rem;
//   margin-bottom: 0;
//   background-color: rgba(0, 0, 0, 0.03);
//   border-bottom: 1px solid rgba(0, 0, 0, 0.125);

//   &:first-child {
//     border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
//   }
// `;

// export const cardFooter = css`
//   padding: 0.75rem 1.25rem;
//   background-color: rgba(0, 0, 0, 0.03);
//   border-top: 1px solid rgba(0, 0, 0, 0.125);

//   &:last-child {
//     border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
//   }
// `;

// export const card = css`
//   position: relative;
//   display: -ms-flexbox;
//   display: flex;
//   -ms-flex-direction: column;
//   flex-direction: column;
//   min-width: 0;
//   word-wrap: break-word;
//   background-color: #fff;
//   background-clip: border-box;
//   border: 1px solid rgba(0, 0, 0, 0.125);
//   border-radius: 0.25rem;

//   & > hr {
//     margin-right: 0;
//     margin-left: 0;
//   }

//   & > ${listGroup} {
//     border-top: inherit;
//     border-bottom: inherit;
//   }

//   & > ${listGroup}:first-child {
//     border-top-width: 0;
//     border-top-left-radius: calc(0.25rem - 1px);
//     border-top-right-radius: calc(0.25rem - 1px);
//   }

//   & > ${listGroup}:last-child {
//     border-bottom-width: 0;
//     border-bottom-right-radius: calc(0.25rem - 1px);
//     border-bottom-left-radius: calc(0.25rem - 1px);
//   }

//   & > ${cardHeader} + ${listGroup}, & > ${listGroup} + ${cardFooter} {
//     border-top: 0;
//   }
// `;

// export const accordion = css`
//   overflow-anchor: none;

//   & > ${card} {
//     overflow: hidden;
//   }

//   & > ${card}:not(:last-of-type) {
//     border-bottom: 0;
//     border-bottom-right-radius: 0;
//     border-bottom-left-radius: 0;
//   }

//   & > ${card}:not(:first-of-type) {
//     border-top-left-radius: 0;
//     border-top-right-radius: 0;
//   }

//   & > ${card} > ${cardHeader} {
//     border-radius: 0;
//     margin-bottom: -1px;
//   }
// `;

// export const active = css`
//   &.carousel-item-right {
//     -webkit-transform: translateX(100%);
//     transform: translateX(100%);
//   }

//   &.carousel-item-left {
//     -webkit-transform: translateX(-100%);
//     transform: translateX(-100%);
//   }
// `;

// export const alert = css`
//   position: relative;
//   padding: 0.75rem 1.25rem;
//   margin-bottom: 1rem;
//   border: 1px solid transparent;
//   border-radius: 0.25rem;
// `;

// export const alertLink = css`
//   font-weight: 700;
// `;

// export const alertDanger = css`
//   color: #721c24;
//   background-color: #f8d7da;
//   border-color: #f5c6cb;

//   & hr {
//     border-top-color: #f1b0b7;
//   }

//   & ${alertLink} {
//     color: #491217;
//   }
// `;

// export const alertDark = css`
//   color: #1b1e21;
//   background-color: #d6d8d9;
//   border-color: #c6c8ca;

//   & hr {
//     border-top-color: #b9bbbe;
//   }

//   & ${alertLink} {
//     color: #040505;
//   }
// `;

// export const close = css`
//   float: right;
//   font-size: 1.5rem;
//   font-weight: 700;
//   line-height: 1;
//   color: #000;
//   text-shadow: 0 1px 0 #fff;
//   opacity: 0.5;

//   &:hover {
//     color: #000;
//     text-decoration: none;
//   }

//   &:not(:disabled):not(.disabled):hover,
//   &:not(:disabled):not(.disabled):focus {
//     opacity: 0.75;
//   }

//   button& {
//     padding: 0;
//     background-color: transparent;
//     border: 0;
//   }

//   a&.disabled {
//     pointer-events: none;
//   }
// `;

// export const alertDismissible = css`
//   padding-right: 4rem;

//   & ${close} {
//     position: absolute;
//     top: 0;
//     right: 0;
//     z-index: 2;
//     padding: 0.75rem 1.25rem;
//     color: inherit;
//   }
// `;

// export const alertHeading = css`
//   color: inherit;
// `;

// export const alertInfo = css`
//   color: #0c5460;
//   background-color: #d1ecf1;
//   border-color: #bee5eb;

//   & hr {
//     border-top-color: #abdde5;
//   }

//   & ${alertLink} {
//     color: #062c33;
//   }
// `;

// export const alertLight = css`
//   color: #818182;
//   background-color: #fefefe;
//   border-color: #fdfdfe;

//   & hr {
//     border-top-color: #ececf6;
//   }

//   & ${alertLink} {
//     color: #686868;
//   }
// `;

// export const alertPrimary = css`
//   color: #004085;
//   background-color: #cce5ff;
//   border-color: #b8daff;

//   & hr {
//     border-top-color: #9fcdff;
//   }

//   & ${alertLink} {
//     color: #002752;
//   }
// `;

// export const alertSecondary = css`
//   color: #383d41;
//   background-color: #e2e3e5;
//   border-color: #d6d8db;

//   & hr {
//     border-top-color: #c8cbcf;
//   }

//   & ${alertLink} {
//     color: #202326;
//   }
// `;

// export const alertSuccess = css`
//   color: #155724;
//   background-color: #d4edda;
//   border-color: #c3e6cb;

//   & hr {
//     border-top-color: #b1dfbb;
//   }

//   & ${alertLink} {
//     color: #0b2e13;
//   }
// `;

// export const alertWarning = css`
//   color: #856404;
//   background-color: #fff3cd;
//   border-color: #ffeeba;

//   & hr {
//     border-top-color: #ffe8a1;
//   }

//   & ${alertLink} {
//     color: #533f03;
//   }
// `;

// export const alignBaseline = css`
//   vertical-align: baseline;
// `;

// export const alignBottom = css`
//   vertical-align: bottom;
// `;

// export const alignContentAround = css`
//   -ms-flex-line-pack: distribute;
//   align-content: space-around;
// `;

// export const alignContentBetween = css`
//   -ms-flex-line-pack: justify;
//   align-content: space-between;
// `;

// export const alignContentCenter = css`
//   -ms-flex-line-pack: center;
//   align-content: center;
// `;

// export const alignContentEnd = css`
//   -ms-flex-line-pack: end;
//   align-content: flex-end;
// `;

// export const alignContentLgAround = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-line-pack: distribute;
//       align-content: space-around;
//     }
//   }
// `;

// export const alignContentLgBetween = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-line-pack: justify;
//       align-content: space-between;
//     }
//   }
// `;

// export const alignContentLgCenter = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-line-pack: center;
//       align-content: center;
//     }
//   }
// `;

// export const alignContentLgEnd = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-line-pack: end;
//       align-content: flex-end;
//     }
//   }
// `;

// export const alignContentLgStart = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-line-pack: start;
//       align-content: flex-start;
//     }
//   }
// `;

// export const alignContentLgStretch = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-line-pack: stretch;
//       align-content: stretch;
//     }
//   }
// `;

// export const alignContentMdAround = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-line-pack: distribute;
//       align-content: space-around;
//     }
//   }
// `;

// export const alignContentMdBetween = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-line-pack: justify;
//       align-content: space-between;
//     }
//   }
// `;

// export const alignContentMdCenter = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-line-pack: center;
//       align-content: center;
//     }
//   }
// `;

// export const alignContentMdEnd = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-line-pack: end;
//       align-content: flex-end;
//     }
//   }
// `;

// export const alignContentMdStart = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-line-pack: start;
//       align-content: flex-start;
//     }
//   }
// `;

// export const alignContentMdStretch = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-line-pack: stretch;
//       align-content: stretch;
//     }
//   }
// `;

// export const alignContentSmAround = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-line-pack: distribute;
//       align-content: space-around;
//     }
//   }
// `;

// export const alignContentSmBetween = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-line-pack: justify;
//       align-content: space-between;
//     }
//   }
// `;

// export const alignContentSmCenter = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-line-pack: center;
//       align-content: center;
//     }
//   }
// `;

// export const alignContentSmEnd = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-line-pack: end;
//       align-content: flex-end;
//     }
//   }
// `;

// export const alignContentSmStart = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-line-pack: start;
//       align-content: flex-start;
//     }
//   }
// `;

// export const alignContentSmStretch = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-line-pack: stretch;
//       align-content: stretch;
//     }
//   }
// `;

// export const alignContentStart = css`
//   -ms-flex-line-pack: start;
//   align-content: flex-start;
// `;

// export const alignContentStretch = css`
//   -ms-flex-line-pack: stretch;
//   align-content: stretch;
// `;

// export const alignContentXlAround = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-line-pack: distribute;
//       align-content: space-around;
//     }
//   }
// `;

// export const alignContentXlBetween = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-line-pack: justify;
//       align-content: space-between;
//     }
//   }
// `;

// export const alignContentXlCenter = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-line-pack: center;
//       align-content: center;
//     }
//   }
// `;

// export const alignContentXlEnd = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-line-pack: end;
//       align-content: flex-end;
//     }
//   }
// `;

// export const alignContentXlStart = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-line-pack: start;
//       align-content: flex-start;
//     }
//   }
// `;

// export const alignContentXlStretch = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-line-pack: stretch;
//       align-content: stretch;
//     }
//   }
// `;

// export const alignItemsBaseline = css`
//   -ms-flex-align: baseline;
//   align-items: baseline;
// `;

// export const alignItemsCenter = css`
//   -ms-flex-align: center;
//   align-items: center;
// `;

// export const alignItemsEnd = css`
//   -ms-flex-align: end;
//   align-items: flex-end;
// `;

// export const alignItemsLgBaseline = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-align: baseline;
//       align-items: baseline;
//     }
//   }
// `;

// export const alignItemsLgCenter = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-align: center;
//       align-items: center;
//     }
//   }
// `;

// export const alignItemsLgEnd = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-align: end;
//       align-items: flex-end;
//     }
//   }
// `;

// export const alignItemsLgStart = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-align: start;
//       align-items: flex-start;
//     }
//   }
// `;

// export const alignItemsLgStretch = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-align: stretch;
//       align-items: stretch;
//     }
//   }
// `;

// export const alignItemsMdBaseline = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-align: baseline;
//       align-items: baseline;
//     }
//   }
// `;

// export const alignItemsMdCenter = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-align: center;
//       align-items: center;
//     }
//   }
// `;

// export const alignItemsMdEnd = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-align: end;
//       align-items: flex-end;
//     }
//   }
// `;

// export const alignItemsMdStart = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-align: start;
//       align-items: flex-start;
//     }
//   }
// `;

// export const alignItemsMdStretch = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-align: stretch;
//       align-items: stretch;
//     }
//   }
// `;

// export const alignItemsSmBaseline = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-align: baseline;
//       align-items: baseline;
//     }
//   }
// `;

// export const alignItemsSmCenter = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-align: center;
//       align-items: center;
//     }
//   }
// `;

// export const alignItemsSmEnd = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-align: end;
//       align-items: flex-end;
//     }
//   }
// `;

// export const alignItemsSmStart = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-align: start;
//       align-items: flex-start;
//     }
//   }
// `;

// export const alignItemsSmStretch = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-align: stretch;
//       align-items: stretch;
//     }
//   }
// `;

// export const alignItemsStart = css`
//   -ms-flex-align: start;
//   align-items: flex-start;
// `;

// export const alignItemsStretch = css`
//   -ms-flex-align: stretch;
//   align-items: stretch;
// `;

// export const alignItemsXlBaseline = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-align: baseline;
//       align-items: baseline;
//     }
//   }
// `;

// export const alignItemsXlCenter = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-align: center;
//       align-items: center;
//     }
//   }
// `;

// export const alignItemsXlEnd = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-align: end;
//       align-items: flex-end;
//     }
//   }
// `;

// export const alignItemsXlStart = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-align: start;
//       align-items: flex-start;
//     }
//   }
// `;

// export const alignItemsXlStretch = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-align: stretch;
//       align-items: stretch;
//     }
//   }
// `;

// export const alignMiddle = css`
//   vertical-align: middle;
// `;

// export const alignSelfAuto = css`
//   -ms-flex-item-align: auto;
//   align-self: auto;
// `;

// export const alignSelfBaseline = css`
//   -ms-flex-item-align: baseline;
//   align-self: baseline;
// `;

// export const alignSelfCenter = css`
//   -ms-flex-item-align: center;
//   align-self: center;
// `;

// export const alignSelfEnd = css`
//   -ms-flex-item-align: end;
//   align-self: flex-end;
// `;

// export const alignSelfLgAuto = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-item-align: auto;
//       align-self: auto;
//     }
//   }
// `;

// export const alignSelfLgBaseline = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-item-align: baseline;
//       align-self: baseline;
//     }
//   }
// `;

// export const alignSelfLgCenter = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-item-align: center;
//       align-self: center;
//     }
//   }
// `;

// export const alignSelfLgEnd = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-item-align: end;
//       align-self: flex-end;
//     }
//   }
// `;

// export const alignSelfLgStart = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-item-align: start;
//       align-self: flex-start;
//     }
//   }
// `;

// export const alignSelfLgStretch = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-item-align: stretch;
//       align-self: stretch;
//     }
//   }
// `;

// export const alignSelfMdAuto = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-item-align: auto;
//       align-self: auto;
//     }
//   }
// `;

// export const alignSelfMdBaseline = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-item-align: baseline;
//       align-self: baseline;
//     }
//   }
// `;

// export const alignSelfMdCenter = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-item-align: center;
//       align-self: center;
//     }
//   }
// `;

// export const alignSelfMdEnd = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-item-align: end;
//       align-self: flex-end;
//     }
//   }
// `;

// export const alignSelfMdStart = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-item-align: start;
//       align-self: flex-start;
//     }
//   }
// `;

// export const alignSelfMdStretch = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-item-align: stretch;
//       align-self: stretch;
//     }
//   }
// `;

// export const alignSelfSmAuto = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-item-align: auto;
//       align-self: auto;
//     }
//   }
// `;

// export const alignSelfSmBaseline = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-item-align: baseline;
//       align-self: baseline;
//     }
//   }
// `;

// export const alignSelfSmCenter = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-item-align: center;
//       align-self: center;
//     }
//   }
// `;

// export const alignSelfSmEnd = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-item-align: end;
//       align-self: flex-end;
//     }
//   }
// `;

// export const alignSelfSmStart = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-item-align: start;
//       align-self: flex-start;
//     }
//   }
// `;

// export const alignSelfSmStretch = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-item-align: stretch;
//       align-self: stretch;
//     }
//   }
// `;

// export const alignSelfStart = css`
//   -ms-flex-item-align: start;
//   align-self: flex-start;
// `;

// export const alignSelfStretch = css`
//   -ms-flex-item-align: stretch;
//   align-self: stretch;
// `;

// export const alignSelfXlAuto = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-item-align: auto;
//       align-self: auto;
//     }
//   }
// `;

// export const alignSelfXlBaseline = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-item-align: baseline;
//       align-self: baseline;
//     }
//   }
// `;

// export const alignSelfXlCenter = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-item-align: center;
//       align-self: center;
//     }
//   }
// `;

// export const alignSelfXlEnd = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-item-align: end;
//       align-self: flex-end;
//     }
//   }
// `;

// export const alignSelfXlStart = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-item-align: start;
//       align-self: flex-start;
//     }
//   }
// `;

// export const alignSelfXlStretch = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-item-align: stretch;
//       align-self: stretch;
//     }
//   }
// `;

// export const alignTextBottom = css`
//   vertical-align: text-bottom;
// `;

// export const alignTextTop = css`
//   vertical-align: text-top;
// `;

// export const alignTop = css`
//   vertical-align: top;
// `;

// export const badge = css`
//   display: inline-block;
//   padding: 0.25em 0.4em;
//   font-size: 75%;
//   font-weight: 700;
//   line-height: 1;
//   text-align: center;
//   white-space: nowrap;
//   vertical-align: baseline;
//   border-radius: 0.25rem;
//   transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
//     border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

//   @media (prefers-reduced-motion: reduce) {
//     & {
//       transition: none;
//     }
//   }

//   a&:hover,
//   a&:focus {
//     text-decoration: none;
//   }

//   &:empty {
//     display: none;
//   }

//   @media print {
//     & {
//       border: 1px solid #000;
//     }
//   }
// `;

// export const badgeDanger = css`
//   color: #fff;
//   background-color: #dc3545;

//   a&:hover,
//   a&:focus {
//     color: #fff;
//     background-color: #bd2130;
//   }

//   a&:focus,
//   a&.focus {
//     outline: 0;
//     box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
//   }
// `;

// export const badgeDark = css`
//   color: #fff;
//   background-color: #343a40;

//   a&:hover,
//   a&:focus {
//     color: #fff;
//     background-color: #1d2124;
//   }

//   a&:focus,
//   a&.focus {
//     outline: 0;
//     box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
//   }
// `;

// export const badgeInfo = css`
//   color: #fff;
//   background-color: #17a2b8;

//   a&:hover,
//   a&:focus {
//     color: #fff;
//     background-color: #117a8b;
//   }

//   a&:focus,
//   a&.focus {
//     outline: 0;
//     box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
//   }
// `;

// export const badgeLight = css`
//   color: #212529;
//   background-color: #f8f9fa;

//   a&:hover,
//   a&:focus {
//     color: #212529;
//     background-color: #dae0e5;
//   }

//   a&:focus,
//   a&.focus {
//     outline: 0;
//     box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
//   }
// `;

// export const badgePill = css`
//   padding-right: 0.6em;
//   padding-left: 0.6em;
//   border-radius: 10rem;
// `;

// export const badgePrimary = css`
//   color: #fff;
//   background-color: #007bff;

//   a&:hover,
//   a&:focus {
//     color: #fff;
//     background-color: #0062cc;
//   }

//   a&:focus,
//   a&.focus {
//     outline: 0;
//     box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
//   }
// `;

// export const badgeSecondary = css`
//   color: #fff;
//   background-color: #6c757d;

//   a&:hover,
//   a&:focus {
//     color: #fff;
//     background-color: #545b62;
//   }

//   a&:focus,
//   a&.focus {
//     outline: 0;
//     box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
//   }
// `;

// export const badgeSuccess = css`
//   color: #fff;
//   background-color: #28a745;

//   a&:hover,
//   a&:focus {
//     color: #fff;
//     background-color: #1e7e34;
//   }

//   a&:focus,
//   a&.focus {
//     outline: 0;
//     box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
//   }
// `;

// export const badgeWarning = css`
//   color: #212529;
//   background-color: #ffc107;

//   a&:hover,
//   a&:focus {
//     color: #212529;
//     background-color: #d39e00;
//   }

//   a&:focus,
//   a&.focus {
//     outline: 0;
//     box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
//   }
// `;

// export const bgDanger = css`
//   background-color: #dc3545;

//   a&:hover,
//   a&:focus,
//   button&:hover,
//   button&:focus {
//     background-color: #bd2130;
//   }
// `;

// export const bgDark = css`
//   background-color: #343a40;

//   a&:hover,
//   a&:focus,
//   button&:hover,
//   button&:focus {
//     background-color: #1d2124;
//   }
// `;

// export const bgInfo = css`
//   background-color: #17a2b8;

//   a&:hover,
//   a&:focus,
//   button&:hover,
//   button&:focus {
//     background-color: #117a8b;
//   }
// `;

// export const bgLight = css`
//   background-color: #f8f9fa;

//   a&:hover,
//   a&:focus,
//   button&:hover,
//   button&:focus {
//     background-color: #dae0e5;
//   }
// `;

// export const bgPrimary = css`
//   background-color: #007bff;

//   a&:hover,
//   a&:focus,
//   button&:hover,
//   button&:focus {
//     background-color: #0062cc;
//   }
// `;

// export const bgSecondary = css`
//   background-color: #6c757d;

//   a&:hover,
//   a&:focus,
//   button&:hover,
//   button&:focus {
//     background-color: #545b62;
//   }
// `;

// export const bgSuccess = css`
//   background-color: #28a745;

//   a&:hover,
//   a&:focus,
//   button&:hover,
//   button&:focus {
//     background-color: #1e7e34;
//   }
// `;

// export const bgTransparent = css`
//   background-color: transparent;
// `;

// export const bgWarning = css`
//   background-color: #ffc107;

//   a&:hover,
//   a&:focus,
//   button&:hover,
//   button&:focus {
//     background-color: #d39e00;
//   }
// `;

// export const bgWhite = css`
//   background-color: #fff;
// `;

// export const blockquote = css`
//   margin-bottom: 1rem;
//   font-size: 1.25rem;
// `;

// export const blockquoteFooter = css`
//   display: block;
//   font-size: 80%;
//   color: #6c757d;

//   &::before {
//     content: '\\2014\\00A0';
//   }
// `;

// export const border = css`
//   border: 1px solid #dee2e6;
// `;

// export const border0 = css`
//   border: 0;
// `;

// export const borderBottom = css`
//   border-bottom: 1px solid #dee2e6;
// `;

// export const borderBottom0 = css`
//   border-bottom: 0;
// `;

// export const borderDanger = css`
//   border-color: #dc3545;
// `;

// export const borderDark = css`
//   border-color: #343a40;
// `;

// export const borderInfo = css`
//   border-color: #17a2b8;
// `;

// export const borderLeft = css`
//   border-left: 1px solid #dee2e6;
// `;

// export const borderLeft0 = css`
//   border-left: 0;
// `;

// export const borderLight = css`
//   border-color: #f8f9fa;
// `;

// export const borderPrimary = css`
//   border-color: #007bff;
// `;

// export const borderRight = css`
//   border-right: 1px solid #dee2e6;
// `;

// export const borderRight0 = css`
//   border-right: 0;
// `;

// export const borderSecondary = css`
//   border-color: #6c757d;
// `;

// export const borderSuccess = css`
//   border-color: #28a745;
// `;

// export const borderTop = css`
//   border-top: 1px solid #dee2e6;
// `;

// export const borderTop0 = css`
//   border-top: 0;
// `;

// export const borderWarning = css`
//   border-color: #ffc107;
// `;

// export const borderWhite = css`
//   border-color: #fff;
// `;

// export const breadcrumb = css`
//   display: -ms-flexbox;
//   display: flex;
//   -ms-flex-wrap: wrap;
//   flex-wrap: wrap;
//   padding: 0.75rem 1rem;
//   margin-bottom: 1rem;
//   list-style: none;
//   background-color: #e9ecef;
//   border-radius: 0.25rem;
// `;

// export const breadcrumbItem = css`
//   display: -ms-flexbox;
//   display: flex;

//   & + & {
//     padding-left: 0.5rem;
//   }

//   & + &::before {
//     display: inline-block;
//     padding-right: 0.5rem;
//     color: #6c757d;
//     content: '/';
//   }

//   & + &:hover::before {
//     text-decoration: underline;
//   }

//   & + &:hover::before {
//     text-decoration: none;
//   }

//   &${active} {
//     color: #6c757d;
//   }
// `;

// export const popoverHeader = css`
//   padding: 0.5rem 0.75rem;
//   margin-bottom: 0;
//   font-size: 1rem;
//   background-color: #f7f7f7;
//   border-bottom: 1px solid #ebebeb;
//   border-top-left-radius: calc(0.3rem - 1px);
//   border-top-right-radius: calc(0.3rem - 1px);

//   &:empty {
//     display: none;
//   }
// `;

// export const bsPopoverAuto = css`
//   &[x-placement^='top'] {
//     margin-bottom: 0.5rem;
//   }

//   &[x-placement^='top'] > .arrow {
//     bottom: calc(-0.5rem - 1px);
//   }

//   &[x-placement^='top'] > .arrow::before {
//     bottom: 0;
//     border-width: 0.5rem 0.5rem 0;
//     border-top-color: rgba(0, 0, 0, 0.25);
//   }

//   &[x-placement^='top'] > .arrow::after {
//     bottom: 1px;
//     border-width: 0.5rem 0.5rem 0;
//     border-top-color: #fff;
//   }

//   &[x-placement^='right'] {
//     margin-left: 0.5rem;
//   }

//   &[x-placement^='right'] > .arrow {
//     left: calc(-0.5rem - 1px);
//     width: 0.5rem;
//     height: 1rem;
//     margin: 0.3rem 0;
//   }

//   &[x-placement^='right'] > .arrow::before {
//     left: 0;
//     border-width: 0.5rem 0.5rem 0.5rem 0;
//     border-right-color: rgba(0, 0, 0, 0.25);
//   }

//   &[x-placement^='right'] > .arrow::after {
//     left: 1px;
//     border-width: 0.5rem 0.5rem 0.5rem 0;
//     border-right-color: #fff;
//   }

//   &[x-placement^='bottom'] {
//     margin-top: 0.5rem;
//   }

//   &[x-placement^='bottom'] > .arrow {
//     top: calc(-0.5rem - 1px);
//   }

//   &[x-placement^='bottom'] > .arrow::before {
//     top: 0;
//     border-width: 0 0.5rem 0.5rem 0.5rem;
//     border-bottom-color: rgba(0, 0, 0, 0.25);
//   }

//   &[x-placement^='bottom'] > .arrow::after {
//     top: 1px;
//     border-width: 0 0.5rem 0.5rem 0.5rem;
//     border-bottom-color: #fff;
//   }

//   &[x-placement^='bottom'] ${popoverHeader}::before {
//     position: absolute;
//     top: 0;
//     left: 50%;
//     display: block;
//     width: 1rem;
//     margin-left: -0.5rem;
//     content: '';
//     border-bottom: 1px solid #f7f7f7;
//   }

//   &[x-placement^='left'] {
//     margin-right: 0.5rem;
//   }

//   &[x-placement^='left'] > .arrow {
//     right: calc(-0.5rem - 1px);
//     width: 0.5rem;
//     height: 1rem;
//     margin: 0.3rem 0;
//   }

//   &[x-placement^='left'] > .arrow::before {
//     right: 0;
//     border-width: 0.5rem 0 0.5rem 0.5rem;
//     border-left-color: rgba(0, 0, 0, 0.25);
//   }

//   &[x-placement^='left'] > .arrow::after {
//     right: 1px;
//     border-width: 0.5rem 0 0.5rem 0.5rem;
//     border-left-color: #fff;
//   }
// `;

// export const bsPopoverBottom = css`
//   margin-top: 0.5rem;

//   & > .arrow {
//     top: calc(-0.5rem - 1px);
//   }

//   & > .arrow::before {
//     top: 0;
//     border-width: 0 0.5rem 0.5rem 0.5rem;
//     border-bottom-color: rgba(0, 0, 0, 0.25);
//   }

//   & > .arrow::after {
//     top: 1px;
//     border-width: 0 0.5rem 0.5rem 0.5rem;
//     border-bottom-color: #fff;
//   }

//   & ${popoverHeader}::before {
//     position: absolute;
//     top: 0;
//     left: 50%;
//     display: block;
//     width: 1rem;
//     margin-left: -0.5rem;
//     content: '';
//     border-bottom: 1px solid #f7f7f7;
//   }
// `;

// export const bsPopoverLeft = css`
//   margin-right: 0.5rem;

//   & > .arrow {
//     right: calc(-0.5rem - 1px);
//     width: 0.5rem;
//     height: 1rem;
//     margin: 0.3rem 0;
//   }

//   & > .arrow::before {
//     right: 0;
//     border-width: 0.5rem 0 0.5rem 0.5rem;
//     border-left-color: rgba(0, 0, 0, 0.25);
//   }

//   & > .arrow::after {
//     right: 1px;
//     border-width: 0.5rem 0 0.5rem 0.5rem;
//     border-left-color: #fff;
//   }
// `;

// export const bsPopoverRight = css`
//   margin-left: 0.5rem;

//   & > .arrow {
//     left: calc(-0.5rem - 1px);
//     width: 0.5rem;
//     height: 1rem;
//     margin: 0.3rem 0;
//   }

//   & > .arrow::before {
//     left: 0;
//     border-width: 0.5rem 0.5rem 0.5rem 0;
//     border-right-color: rgba(0, 0, 0, 0.25);
//   }

//   & > .arrow::after {
//     left: 1px;
//     border-width: 0.5rem 0.5rem 0.5rem 0;
//     border-right-color: #fff;
//   }
// `;

// export const bsPopoverTop = css`
//   margin-bottom: 0.5rem;

//   & > .arrow {
//     bottom: calc(-0.5rem - 1px);
//   }

//   & > .arrow::before {
//     bottom: 0;
//     border-width: 0.5rem 0.5rem 0;
//     border-top-color: rgba(0, 0, 0, 0.25);
//   }

//   & > .arrow::after {
//     bottom: 1px;
//     border-width: 0.5rem 0.5rem 0;
//     border-top-color: #fff;
//   }
// `;

// export const bsTooltipAuto = css`
//   &[x-placement^='top'] {
//     padding: 0.4rem 0;
//   }

//   &[x-placement^='top'] .arrow {
//     bottom: 0;
//   }

//   &[x-placement^='top'] .arrow::before {
//     top: 0;
//     border-width: 0.4rem 0.4rem 0;
//     border-top-color: #000;
//   }

//   &[x-placement^='right'] {
//     padding: 0 0.4rem;
//   }

//   &[x-placement^='right'] .arrow {
//     left: 0;
//     width: 0.4rem;
//     height: 0.8rem;
//   }

//   &[x-placement^='right'] .arrow::before {
//     right: 0;
//     border-width: 0.4rem 0.4rem 0.4rem 0;
//     border-right-color: #000;
//   }

//   &[x-placement^='bottom'] {
//     padding: 0.4rem 0;
//   }

//   &[x-placement^='bottom'] .arrow {
//     top: 0;
//   }

//   &[x-placement^='bottom'] .arrow::before {
//     bottom: 0;
//     border-width: 0 0.4rem 0.4rem;
//     border-bottom-color: #000;
//   }

//   &[x-placement^='left'] {
//     padding: 0 0.4rem;
//   }

//   &[x-placement^='left'] .arrow {
//     right: 0;
//     width: 0.4rem;
//     height: 0.8rem;
//   }

//   &[x-placement^='left'] .arrow::before {
//     left: 0;
//     border-width: 0.4rem 0 0.4rem 0.4rem;
//     border-left-color: #000;
//   }
// `;

// export const bsTooltipBottom = css`
//   padding: 0.4rem 0;

//   & .arrow {
//     top: 0;
//   }

//   & .arrow::before {
//     bottom: 0;
//     border-width: 0 0.4rem 0.4rem;
//     border-bottom-color: #000;
//   }
// `;

// export const bsTooltipLeft = css`
//   padding: 0 0.4rem;

//   & .arrow {
//     right: 0;
//     width: 0.4rem;
//     height: 0.8rem;
//   }

//   & .arrow::before {
//     left: 0;
//     border-width: 0.4rem 0 0.4rem 0.4rem;
//     border-left-color: #000;
//   }
// `;

// export const bsTooltipRight = css`
//   padding: 0 0.4rem;

//   & .arrow {
//     left: 0;
//     width: 0.4rem;
//     height: 0.8rem;
//   }

//   & .arrow::before {
//     right: 0;
//     border-width: 0.4rem 0.4rem 0.4rem 0;
//     border-right-color: #000;
//   }
// `;

// export const bsTooltipTop = css`
//   padding: 0.4rem 0;

//   & .arrow {
//     bottom: 0;
//   }

//   & .arrow::before {
//     top: 0;
//     border-width: 0.4rem 0.4rem 0;
//     border-top-color: #000;
//   }
// `;

// export const btn = css`
//   display: inline-block;
//   font-weight: 400;
//   color: #212529;
//   text-align: center;
//   vertical-align: middle;
//   -webkit-user-select: none;
//   -moz-user-select: none;
//   -ms-user-select: none;
//   user-select: none;
//   background-color: transparent;
//   border: 1px solid transparent;
//   padding: 0.375rem 0.75rem;
//   font-size: 1rem;
//   line-height: 1.5;
//   border-radius: 0.25rem;
//   transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
//     border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

//   @media (prefers-reduced-motion: reduce) {
//     & {
//       transition: none;
//     }
//   }

//   &:hover {
//     color: #212529;
//     text-decoration: none;
//   }

//   &:focus,
//   &.focus {
//     outline: 0;
//     box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
//   }

//   &.disabled,
//   &:disabled {
//     opacity: 0.65;
//   }

//   &:not(:disabled):not(.disabled) {
//     cursor: pointer;
//   }

//   a&.disabled,
//   fieldset:disabled a& {
//     pointer-events: none;
//   }

//   & ${badge} {
//     position: relative;
//     top: -1px;
//   }
// `;

// export const btnBlock = css`
//   display: block;
//   width: 100%;

//   & + & {
//     margin-top: 0.5rem;
//   }

//   input[type='submit']&,
//   input[type='reset']&,
//   input[type='button']& {
//     width: 100%;
//   }
// `;

// export const btnDanger = css`
//   color: #fff;
//   background-color: #dc3545;
//   border-color: #dc3545;

//   &:hover {
//     color: #fff;
//     background-color: #c82333;
//     border-color: #bd2130;
//   }

//   &:focus,
//   &.focus {
//     color: #fff;
//     background-color: #c82333;
//     border-color: #bd2130;
//     box-shadow: 0 0 0 0.2rem rgba(225, 83, 97, 0.5);
//   }

//   &.disabled,
//   &:disabled {
//     color: #fff;
//     background-color: #dc3545;
//     border-color: #dc3545;
//   }

//   &:not(:disabled):not(.disabled):active,
//   &:not(:disabled):not(.disabled)${active} {
//     color: #fff;
//     background-color: #bd2130;
//     border-color: #b21f2d;
//   }

//   &:not(:disabled):not(.disabled):active:focus,
//   &:not(:disabled):not(.disabled)${active}:focus {
//     box-shadow: 0 0 0 0.2rem rgba(225, 83, 97, 0.5);
//   }
// `;

// export const btnDark = css`
//   color: #fff;
//   background-color: #343a40;
//   border-color: #343a40;

//   &:hover {
//     color: #fff;
//     background-color: #23272b;
//     border-color: #1d2124;
//   }

//   &:focus,
//   &.focus {
//     color: #fff;
//     background-color: #23272b;
//     border-color: #1d2124;
//     box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5);
//   }

//   &.disabled,
//   &:disabled {
//     color: #fff;
//     background-color: #343a40;
//     border-color: #343a40;
//   }

//   &:not(:disabled):not(.disabled):active,
//   &:not(:disabled):not(.disabled)${active} {
//     color: #fff;
//     background-color: #1d2124;
//     border-color: #171a1d;
//   }

//   &:not(:disabled):not(.disabled):active:focus,
//   &:not(:disabled):not(.disabled)${active}:focus {
//     box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5);
//   }
// `;

// export const dropdownToggle = css`
//   white-space: nowrap;

//   &::after {
//     display: inline-block;
//     margin-left: 0.255em;
//     vertical-align: 0.255em;
//     content: '';
//     border-top: 0.3em solid;
//     border-right: 0.3em solid transparent;
//     border-bottom: 0;
//     border-left: 0.3em solid transparent;
//   }

//   &:empty::after {
//     margin-left: 0;
//   }
// `;

// export const btnGroup = css`
//   position: relative;
//   display: -ms-inline-flexbox;
//   display: inline-flex;
//   vertical-align: middle;

//   & > ${btn} {
//     position: relative;
//     -ms-flex: 1 1 auto;
//     flex: 1 1 auto;
//   }

//   & > ${btn}:hover {
//     z-index: 1;
//   }

//   & > ${btn}:focus, & > ${btn}:active, & > ${btn}${active} {
//     z-index: 1;
//   }

//   & > ${btn}:not(:first-child),
//   & > &:not(:first-child) {
//     margin-left: -1px;
//   }

//   & > ${btn}:not(:last-child):not(${dropdownToggle}),
//   & > &:not(:last-child) > ${btn} {
//     border-top-right-radius: 0;
//     border-bottom-right-radius: 0;
//   }

//   & > ${btn}:not(:first-child),
//   & > &:not(:first-child) > ${btn} {
//     border-top-left-radius: 0;
//     border-bottom-left-radius: 0;
//   }
// `;

// export const dropdownToggleSplit = css`
//   padding-right: 0.5625rem;
//   padding-left: 0.5625rem;

//   &::after {
//     margin-left: 0;
//   }
// `;

// export const btnGroupLg = css`
//   & > ${btn} {
//     padding: 0.5rem 1rem;
//     font-size: 1.25rem;
//     line-height: 1.5;
//     border-radius: 0.3rem;
//   }

//   & > ${btn} + ${dropdownToggleSplit} {
//     padding-right: 0.75rem;
//     padding-left: 0.75rem;
//   }
// `;

// export const btnGroupSm = css`
//   & > ${btn} {
//     padding: 0.25rem 0.5rem;
//     font-size: 0.875rem;
//     line-height: 1.5;
//     border-radius: 0.2rem;
//   }

//   & > ${btn} + ${dropdownToggleSplit} {
//     padding-right: 0.375rem;
//     padding-left: 0.375rem;
//   }
// `;

// export const btnGroupToggle = css`
//   & > ${btn}, & > ${btnGroup} > ${btn} {
//     margin-bottom: 0;
//   }

//   & > ${btn} input[type='radio'],
//   & > ${btn} input[type='checkbox'],
//   & > ${btnGroup} > ${btn} input[type='radio'],
//   & > ${btnGroup} > ${btn} input[type='checkbox'] {
//     position: absolute;
//     clip: rect(0, 0, 0, 0);
//     pointer-events: none;
//   }
// `;

// export const btnGroupVertical = css`
//   position: relative;
//   display: -ms-inline-flexbox;
//   display: inline-flex;
//   vertical-align: middle;

//   & > ${btn} {
//     position: relative;
//     -ms-flex: 1 1 auto;
//     flex: 1 1 auto;
//   }

//   & > ${btn}:hover {
//     z-index: 1;
//   }

//   & > ${btn}:focus, & > ${btn}:active, & > ${btn}${active} {
//     z-index: 1;
//   }

//   -ms-flex-direction: column;
//   flex-direction: column;
//   -ms-flex-align: start;
//   align-items: flex-start;
//   -ms-flex-pack: center;
//   justify-content: center;

//   & > ${btn}, & > ${btnGroup} {
//     width: 100%;
//   }

//   & > ${btn}:not(:first-child),
//   & > ${btnGroup}:not(:first-child) {
//     margin-top: -1px;
//   }

//   & > ${btn}:not(:last-child):not(${dropdownToggle}),
//   & > ${btnGroup}:not(:last-child) > ${btn} {
//     border-bottom-right-radius: 0;
//     border-bottom-left-radius: 0;
//   }

//   & > ${btn}:not(:first-child),
//   & > ${btnGroup}:not(:first-child) > ${btn} {
//     border-top-left-radius: 0;
//     border-top-right-radius: 0;
//   }
// `;

// export const btnInfo = css`
//   color: #fff;
//   background-color: #17a2b8;
//   border-color: #17a2b8;

//   &:hover {
//     color: #fff;
//     background-color: #138496;
//     border-color: #117a8b;
//   }

//   &:focus,
//   &.focus {
//     color: #fff;
//     background-color: #138496;
//     border-color: #117a8b;
//     box-shadow: 0 0 0 0.2rem rgba(58, 176, 195, 0.5);
//   }

//   &.disabled,
//   &:disabled {
//     color: #fff;
//     background-color: #17a2b8;
//     border-color: #17a2b8;
//   }

//   &:not(:disabled):not(.disabled):active,
//   &:not(:disabled):not(.disabled)${active} {
//     color: #fff;
//     background-color: #117a8b;
//     border-color: #10707f;
//   }

//   &:not(:disabled):not(.disabled):active:focus,
//   &:not(:disabled):not(.disabled)${active}:focus {
//     box-shadow: 0 0 0 0.2rem rgba(58, 176, 195, 0.5);
//   }
// `;

// export const btnLg = css`
//   padding: 0.5rem 1rem;
//   font-size: 1.25rem;
//   line-height: 1.5;
//   border-radius: 0.3rem;

//   & + ${dropdownToggleSplit} {
//     padding-right: 0.75rem;
//     padding-left: 0.75rem;
//   }
// `;

// export const btnLight = css`
//   color: #212529;
//   background-color: #f8f9fa;
//   border-color: #f8f9fa;

//   &:hover {
//     color: #212529;
//     background-color: #e2e6ea;
//     border-color: #dae0e5;
//   }

//   &:focus,
//   &.focus {
//     color: #212529;
//     background-color: #e2e6ea;
//     border-color: #dae0e5;
//     box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, 0.5);
//   }

//   &.disabled,
//   &:disabled {
//     color: #212529;
//     background-color: #f8f9fa;
//     border-color: #f8f9fa;
//   }

//   &:not(:disabled):not(.disabled):active,
//   &:not(:disabled):not(.disabled)${active} {
//     color: #212529;
//     background-color: #dae0e5;
//     border-color: #d3d9df;
//   }

//   &:not(:disabled):not(.disabled):active:focus,
//   &:not(:disabled):not(.disabled)${active}:focus {
//     box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, 0.5);
//   }
// `;

// export const btnLink = css`
//   font-weight: 400;
//   color: #007bff;
//   text-decoration: none;

//   &:hover {
//     color: #0056b3;
//     text-decoration: underline;
//   }

//   &:focus,
//   &.focus {
//     text-decoration: underline;
//   }

//   &:disabled,
//   &.disabled {
//     color: #6c757d;
//     pointer-events: none;
//   }
// `;

// export const btnOutlineDanger = css`
//   color: #dc3545;
//   border-color: #dc3545;

//   &:hover {
//     color: #fff;
//     background-color: #dc3545;
//     border-color: #dc3545;
//   }

//   &:focus,
//   &.focus {
//     box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
//   }

//   &.disabled,
//   &:disabled {
//     color: #dc3545;
//     background-color: transparent;
//   }

//   &:not(:disabled):not(.disabled):active,
//   &:not(:disabled):not(.disabled)${active} {
//     color: #fff;
//     background-color: #dc3545;
//     border-color: #dc3545;
//   }

//   &:not(:disabled):not(.disabled):active:focus,
//   &:not(:disabled):not(.disabled)${active}:focus {
//     box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
//   }
// `;

// export const btnOutlineDark = css`
//   color: #343a40;
//   border-color: #343a40;

//   &:hover {
//     color: #fff;
//     background-color: #343a40;
//     border-color: #343a40;
//   }

//   &:focus,
//   &.focus {
//     box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
//   }

//   &.disabled,
//   &:disabled {
//     color: #343a40;
//     background-color: transparent;
//   }

//   &:not(:disabled):not(.disabled):active,
//   &:not(:disabled):not(.disabled)${active} {
//     color: #fff;
//     background-color: #343a40;
//     border-color: #343a40;
//   }

//   &:not(:disabled):not(.disabled):active:focus,
//   &:not(:disabled):not(.disabled)${active}:focus {
//     box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
//   }
// `;

// export const btnOutlineInfo = css`
//   color: #17a2b8;
//   border-color: #17a2b8;

//   &:hover {
//     color: #fff;
//     background-color: #17a2b8;
//     border-color: #17a2b8;
//   }

//   &:focus,
//   &.focus {
//     box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
//   }

//   &.disabled,
//   &:disabled {
//     color: #17a2b8;
//     background-color: transparent;
//   }

//   &:not(:disabled):not(.disabled):active,
//   &:not(:disabled):not(.disabled)${active} {
//     color: #fff;
//     background-color: #17a2b8;
//     border-color: #17a2b8;
//   }

//   &:not(:disabled):not(.disabled):active:focus,
//   &:not(:disabled):not(.disabled)${active}:focus {
//     box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
//   }
// `;

// export const btnOutlineLight = css`
//   color: #f8f9fa;
//   border-color: #f8f9fa;

//   &:hover {
//     color: #212529;
//     background-color: #f8f9fa;
//     border-color: #f8f9fa;
//   }

//   &:focus,
//   &.focus {
//     box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
//   }

//   &.disabled,
//   &:disabled {
//     color: #f8f9fa;
//     background-color: transparent;
//   }

//   &:not(:disabled):not(.disabled):active,
//   &:not(:disabled):not(.disabled)${active} {
//     color: #212529;
//     background-color: #f8f9fa;
//     border-color: #f8f9fa;
//   }

//   &:not(:disabled):not(.disabled):active:focus,
//   &:not(:disabled):not(.disabled)${active}:focus {
//     box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
//   }
// `;

// export const btnOutlinePrimary = css`
//   color: #007bff;
//   border-color: #007bff;

//   &:hover {
//     color: #fff;
//     background-color: #007bff;
//     border-color: #007bff;
//   }

//   &:focus,
//   &.focus {
//     box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
//   }

//   &.disabled,
//   &:disabled {
//     color: #007bff;
//     background-color: transparent;
//   }

//   &:not(:disabled):not(.disabled):active,
//   &:not(:disabled):not(.disabled)${active} {
//     color: #fff;
//     background-color: #007bff;
//     border-color: #007bff;
//   }

//   &:not(:disabled):not(.disabled):active:focus,
//   &:not(:disabled):not(.disabled)${active}:focus {
//     box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
//   }
// `;

// export const btnOutlineSecondary = css`
//   color: #6c757d;
//   border-color: #6c757d;

//   &:hover {
//     color: #fff;
//     background-color: #6c757d;
//     border-color: #6c757d;
//   }

//   &:focus,
//   &.focus {
//     box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
//   }

//   &.disabled,
//   &:disabled {
//     color: #6c757d;
//     background-color: transparent;
//   }

//   &:not(:disabled):not(.disabled):active,
//   &:not(:disabled):not(.disabled)${active} {
//     color: #fff;
//     background-color: #6c757d;
//     border-color: #6c757d;
//   }

//   &:not(:disabled):not(.disabled):active:focus,
//   &:not(:disabled):not(.disabled)${active}:focus {
//     box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
//   }
// `;

// export const btnOutlineSuccess = css`
//   color: #28a745;
//   border-color: #28a745;

//   &:hover {
//     color: #fff;
//     background-color: #28a745;
//     border-color: #28a745;
//   }

//   &:focus,
//   &.focus {
//     box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
//   }

//   &.disabled,
//   &:disabled {
//     color: #28a745;
//     background-color: transparent;
//   }

//   &:not(:disabled):not(.disabled):active,
//   &:not(:disabled):not(.disabled)${active} {
//     color: #fff;
//     background-color: #28a745;
//     border-color: #28a745;
//   }

//   &:not(:disabled):not(.disabled):active:focus,
//   &:not(:disabled):not(.disabled)${active}:focus {
//     box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
//   }
// `;

// export const btnOutlineWarning = css`
//   color: #ffc107;
//   border-color: #ffc107;

//   &:hover {
//     color: #212529;
//     background-color: #ffc107;
//     border-color: #ffc107;
//   }

//   &:focus,
//   &.focus {
//     box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
//   }

//   &.disabled,
//   &:disabled {
//     color: #ffc107;
//     background-color: transparent;
//   }

//   &:not(:disabled):not(.disabled):active,
//   &:not(:disabled):not(.disabled)${active} {
//     color: #212529;
//     background-color: #ffc107;
//     border-color: #ffc107;
//   }

//   &:not(:disabled):not(.disabled):active:focus,
//   &:not(:disabled):not(.disabled)${active}:focus {
//     box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
//   }
// `;

// export const btnPrimary = css`
//   color: #fff;
//   background-color: #007bff;
//   border-color: #007bff;

//   &:hover {
//     color: #fff;
//     background-color: #0069d9;
//     border-color: #0062cc;
//   }

//   &:focus,
//   &.focus {
//     color: #fff;
//     background-color: #0069d9;
//     border-color: #0062cc;
//     box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
//   }

//   &.disabled,
//   &:disabled {
//     color: #fff;
//     background-color: #007bff;
//     border-color: #007bff;
//   }

//   &:not(:disabled):not(.disabled):active,
//   &:not(:disabled):not(.disabled)${active} {
//     color: #fff;
//     background-color: #0062cc;
//     border-color: #005cbf;
//   }

//   &:not(:disabled):not(.disabled):active:focus,
//   &:not(:disabled):not(.disabled)${active}:focus {
//     box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
//   }
// `;

// export const btnSecondary = css`
//   color: #fff;
//   background-color: #6c757d;
//   border-color: #6c757d;

//   &:hover {
//     color: #fff;
//     background-color: #5a6268;
//     border-color: #545b62;
//   }

//   &:focus,
//   &.focus {
//     color: #fff;
//     background-color: #5a6268;
//     border-color: #545b62;
//     box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5);
//   }

//   &.disabled,
//   &:disabled {
//     color: #fff;
//     background-color: #6c757d;
//     border-color: #6c757d;
//   }

//   &:not(:disabled):not(.disabled):active,
//   &:not(:disabled):not(.disabled)${active} {
//     color: #fff;
//     background-color: #545b62;
//     border-color: #4e555b;
//   }

//   &:not(:disabled):not(.disabled):active:focus,
//   &:not(:disabled):not(.disabled)${active}:focus {
//     box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5);
//   }
// `;

// export const btnSm = css`
//   padding: 0.25rem 0.5rem;
//   font-size: 0.875rem;
//   line-height: 1.5;
//   border-radius: 0.2rem;

//   & + ${dropdownToggleSplit} {
//     padding-right: 0.375rem;
//     padding-left: 0.375rem;
//   }
// `;

// export const btnSuccess = css`
//   color: #fff;
//   background-color: #28a745;
//   border-color: #28a745;

//   &:hover {
//     color: #fff;
//     background-color: #218838;
//     border-color: #1e7e34;
//   }

//   &:focus,
//   &.focus {
//     color: #fff;
//     background-color: #218838;
//     border-color: #1e7e34;
//     box-shadow: 0 0 0 0.2rem rgba(72, 180, 97, 0.5);
//   }

//   &.disabled,
//   &:disabled {
//     color: #fff;
//     background-color: #28a745;
//     border-color: #28a745;
//   }

//   &:not(:disabled):not(.disabled):active,
//   &:not(:disabled):not(.disabled)${active} {
//     color: #fff;
//     background-color: #1e7e34;
//     border-color: #1c7430;
//   }

//   &:not(:disabled):not(.disabled):active:focus,
//   &:not(:disabled):not(.disabled)${active}:focus {
//     box-shadow: 0 0 0 0.2rem rgba(72, 180, 97, 0.5);
//   }
// `;

// export const inputGroup = css`
//   position: relative;
//   display: -ms-flexbox;
//   display: flex;
//   -ms-flex-wrap: wrap;
//   flex-wrap: wrap;
//   -ms-flex-align: stretch;
//   align-items: stretch;
//   width: 100%;

//   & > ${formControl}, & > ${formControlPlaintext}, & > ${customSelect}, & > ${customFile} {
//     position: relative;
//     -ms-flex: 1 1 auto;
//     flex: 1 1 auto;
//     width: 1%;
//     min-width: 0;
//     margin-bottom: 0;
//   }

//   &
//     > ${formControl}
//     + ${formControl},
//     &
//     > ${formControl}
//     + ${customSelect},
//     &
//     > ${formControl}
//     + ${customFile},
//     &
//     > ${formControlPlaintext}
//     + ${formControl},
//     &
//     > ${formControlPlaintext}
//     + ${customSelect},
//     &
//     > ${formControlPlaintext}
//     + ${customFile},
//     &
//     > ${customSelect}
//     + ${formControl},
//     &
//     > ${customSelect}
//     + ${customSelect},
//     &
//     > ${customSelect}
//     + ${customFile},
//     &
//     > ${customFile}
//     + ${formControl},
//     &
//     > ${customFile}
//     + ${customSelect},
//     &
//     > ${customFile}
//     + ${customFile} {
//     margin-left: -1px;
//   }

//   &
//     > ${formControl}:focus,
//     &
//     > ${customSelect}:focus,
//     &
//     > ${customFile}
//     ${customFileInput}:focus
//     ~ ${customFileLabel} {
//     z-index: 3;
//   }

//   & > ${customFile} ${customFileInput}:focus {
//     z-index: 4;
//   }

//   & > ${formControl}:not(:last-child),
//   & > ${customSelect}:not(:last-child) {
//     border-top-right-radius: 0;
//     border-bottom-right-radius: 0;
//   }

//   & > ${formControl}:not(:first-child),
//   & > ${customSelect}:not(:first-child) {
//     border-top-left-radius: 0;
//     border-bottom-left-radius: 0;
//   }

//   & > ${customFile} {
//     display: -ms-flexbox;
//     display: flex;
//     -ms-flex-align: center;
//     align-items: center;
//   }

//   &
//     > ${customFile}:not(:last-child)
//     ${customFileLabel},
//     &
//     > ${customFile}:not(:last-child)
//     ${customFileLabel}::after {
//     border-top-right-radius: 0;
//     border-bottom-right-radius: 0;
//   }

//   & > ${customFile}:not(:first-child) ${customFileLabel} {
//     border-top-left-radius: 0;
//     border-bottom-left-radius: 0;
//   }

//   &
//     > ${inputGroupPrepend}
//     > ${btn},
//     &
//     > ${inputGroupPrepend}
//     > ${inputGroupText},
//     &
//     > ${inputGroupAppend}:not(:last-child)
//     > ${btn},
//     &
//     > ${inputGroupAppend}:not(:last-child)
//     > ${inputGroupText},
//     &
//     > ${inputGroupAppend}:last-child
//     > ${btn}:not(:last-child):not(${dropdownToggle}),
//   & > ${inputGroupAppend}:last-child > ${inputGroupText}:not(:last-child) {
//     border-top-right-radius: 0;
//     border-bottom-right-radius: 0;
//   }

//   &
//     > ${inputGroupAppend}
//     > ${btn},
//     &
//     > ${inputGroupAppend}
//     > ${inputGroupText},
//     &
//     > ${inputGroupPrepend}:not(:first-child)
//     > ${btn},
//     &
//     > ${inputGroupPrepend}:not(:first-child)
//     > ${inputGroupText},
//     &
//     > ${inputGroupPrepend}:first-child
//     > ${btn}:not(:first-child),
//   & > ${inputGroupPrepend}:first-child > ${inputGroupText}:not(:first-child) {
//     border-top-left-radius: 0;
//     border-bottom-left-radius: 0;
//   }
// `;

// export const btnToolbar = css`
//   display: -ms-flexbox;
//   display: flex;
//   -ms-flex-wrap: wrap;
//   flex-wrap: wrap;
//   -ms-flex-pack: start;
//   justify-content: flex-start;

//   & ${inputGroup} {
//     width: auto;
//   }
// `;

// export const btnWarning = css`
//   color: #212529;
//   background-color: #ffc107;
//   border-color: #ffc107;

//   &:hover {
//     color: #212529;
//     background-color: #e0a800;
//     border-color: #d39e00;
//   }

//   &:focus,
//   &.focus {
//     color: #212529;
//     background-color: #e0a800;
//     border-color: #d39e00;
//     box-shadow: 0 0 0 0.2rem rgba(222, 170, 12, 0.5);
//   }

//   &.disabled,
//   &:disabled {
//     color: #212529;
//     background-color: #ffc107;
//     border-color: #ffc107;
//   }

//   &:not(:disabled):not(.disabled):active,
//   &:not(:disabled):not(.disabled)${active} {
//     color: #212529;
//     background-color: #d39e00;
//     border-color: #c69500;
//   }

//   &:not(:disabled):not(.disabled):active:focus,
//   &:not(:disabled):not(.disabled)${active}:focus {
//     box-shadow: 0 0 0 0.2rem rgba(222, 170, 12, 0.5);
//   }
// `;

// export const cardBody = css`
//   -ms-flex: 1 1 auto;
//   flex: 1 1 auto;
//   min-height: 1px;
//   padding: 1.25rem;
// `;

// export const cardColumns = css`
//   & ${card} {
//     margin-bottom: 0.75rem;
//   }

//   @media (min-width: 576px) {
//     & {
//       -webkit-column-count: 3;
//       -moz-column-count: 3;
//       column-count: 3;
//       -webkit-column-gap: 1.25rem;
//       -moz-column-gap: 1.25rem;
//       column-gap: 1.25rem;
//       orphans: 1;
//       widows: 1;
//     }

//     & ${card} {
//       display: inline-block;
//       width: 100%;
//     }
//   }
// `;

// export const cardDeck = css`
//   & ${card} {
//     margin-bottom: 15px;
//   }

//   @media (min-width: 576px) {
//     & {
//       display: -ms-flexbox;
//       display: flex;
//       -ms-flex-flow: row wrap;
//       flex-flow: row wrap;
//       margin-right: -15px;
//       margin-left: -15px;
//     }

//     & ${card} {
//       -ms-flex: 1 0 0%;
//       flex: 1 0 0%;
//       margin-right: 15px;
//       margin-bottom: 0;
//       margin-left: 15px;
//     }
//   }
// `;

// export const cardImgTop = css`
//   -ms-flex-negative: 0;
//   flex-shrink: 0;
//   width: 100%;

//   border-top-left-radius: calc(0.25rem - 1px);
//   border-top-right-radius: calc(0.25rem - 1px);
// `;

// export const cardImgBottom = css`
//   -ms-flex-negative: 0;
//   flex-shrink: 0;
//   width: 100%;

//   border-bottom-right-radius: calc(0.25rem - 1px);
//   border-bottom-left-radius: calc(0.25rem - 1px);
// `;

// export const cardGroup = css`
//   & > ${card} {
//     margin-bottom: 15px;
//   }

//   @media (min-width: 576px) {
//     & {
//       display: -ms-flexbox;
//       display: flex;
//       -ms-flex-flow: row wrap;
//       flex-flow: row wrap;
//     }

//     & > ${card} {
//       -ms-flex: 1 0 0%;
//       flex: 1 0 0%;
//       margin-bottom: 0;
//     }

//     & > ${card} + ${card} {
//       margin-left: 0;
//       border-left: 0;
//     }

//     & > ${card}:not(:last-child) {
//       border-top-right-radius: 0;
//       border-bottom-right-radius: 0;
//     }

//     & > ${card}:not(:last-child) ${cardImgTop}, & > ${card}:not(:last-child) ${cardHeader} {
//       border-top-right-radius: 0;
//     }

//     & > ${card}:not(:last-child) ${cardImgBottom}, & > ${card}:not(:last-child) ${cardFooter} {
//       border-bottom-right-radius: 0;
//     }

//     & > ${card}:not(:first-child) {
//       border-top-left-radius: 0;
//       border-bottom-left-radius: 0;
//     }

//     & > ${card}:not(:first-child) ${cardImgTop}, & > ${card}:not(:first-child) ${cardHeader} {
//       border-top-left-radius: 0;
//     }

//     & > ${card}:not(:first-child) ${cardImgBottom}, & > ${card}:not(:first-child) ${cardFooter} {
//       border-bottom-left-radius: 0;
//     }
//   }
// `;

// export const cardHeaderPills = css`
//   margin-right: -0.625rem;
//   margin-left: -0.625rem;
// `;

// export const cardHeaderTabs = css`
//   margin-right: -0.625rem;
//   margin-bottom: -0.75rem;
//   margin-left: -0.625rem;
//   border-bottom: 0;
// `;

// export const cardImg = css`
//   -ms-flex-negative: 0;
//   flex-shrink: 0;
//   width: 100%;

//   border-top-left-radius: calc(0.25rem - 1px);
//   border-top-right-radius: calc(0.25rem - 1px);

//   border-bottom-right-radius: calc(0.25rem - 1px);
//   border-bottom-left-radius: calc(0.25rem - 1px);
// `;

// export const cardImgOverlay = css`
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   padding: 1.25rem;
//   border-radius: calc(0.25rem - 1px);
// `;

// export const cardLink = css`
//   &:hover {
//     text-decoration: none;
//   }

//   & + & {
//     margin-left: 1.25rem;
//   }
// `;

// export const cardSubtitle = css`
//   margin-top: -0.375rem;
//   margin-bottom: 0;
// `;

// export const cardText = css`
//   &:last-child {
//     margin-bottom: 0;
//   }
// `;

// export const cardTitle = css`
//   margin-bottom: 0.75rem;
// `;

// export const carousel = css`
//   position: relative;

//   &.pointer-event {
//     -ms-touch-action: pan-y;
//     touch-action: pan-y;
//   }
// `;

// export const carouselCaption = css`
//   position: absolute;
//   right: 15%;
//   bottom: 20px;
//   left: 15%;
//   z-index: 10;
//   padding-top: 20px;
//   padding-bottom: 20px;
//   color: #fff;
//   text-align: center;
// `;

// export const carouselControlNext = css`
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   z-index: 1;
//   display: -ms-flexbox;
//   display: flex;
//   -ms-flex-align: center;
//   align-items: center;
//   -ms-flex-pack: center;
//   justify-content: center;
//   width: 15%;
//   color: #fff;
//   text-align: center;
//   opacity: 0.5;
//   transition: opacity 0.15s ease;

//   @media (prefers-reduced-motion: reduce) {
//     & {
//       transition: none;
//     }
//   }

//   &:hover,
//   &:focus {
//     color: #fff;
//     text-decoration: none;
//     outline: 0;
//     opacity: 0.9;
//   }

//   right: 0;
// `;

// export const carouselControlNextIcon = css`
//   display: inline-block;
//   width: 20px;
//   height: 20px;
//   background: no-repeat 50% / 100% 100%;

//   background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e");
// `;

// export const carouselControlPrev = css`
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   z-index: 1;
//   display: -ms-flexbox;
//   display: flex;
//   -ms-flex-align: center;
//   align-items: center;
//   -ms-flex-pack: center;
//   justify-content: center;
//   width: 15%;
//   color: #fff;
//   text-align: center;
//   opacity: 0.5;
//   transition: opacity 0.15s ease;

//   @media (prefers-reduced-motion: reduce) {
//     & {
//       transition: none;
//     }
//   }

//   &:hover,
//   &:focus {
//     color: #fff;
//     text-decoration: none;
//     outline: 0;
//     opacity: 0.9;
//   }

//   left: 0;
// `;

// export const carouselControlPrevIcon = css`
//   display: inline-block;
//   width: 20px;
//   height: 20px;
//   background: no-repeat 50% / 100% 100%;

//   background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e");
// `;

// export const carouselItem = css`
//   position: relative;
//   display: none;
//   float: left;
//   width: 100%;
//   margin-right: -100%;
//   -webkit-backface-visibility: hidden;
//   backface-visibility: hidden;
//   transition: -webkit-transform 0.6s ease-in-out;
//   transition: transform 0.6s ease-in-out;
//   transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;

//   @media (prefers-reduced-motion: reduce) {
//     & {
//       transition: none;
//     }
//   }

//   &${active} {
//     display: block;
//   }
// `;

// export const carouselItemNext = css`
//   display: block;

//   &:not(.carousel-item-left) {
//     -webkit-transform: translateX(100%);
//     transform: translateX(100%);
//   }
// `;

// export const carouselItemPrev = css`
//   display: block;

//   &:not(.carousel-item-right) {
//     -webkit-transform: translateX(-100%);
//     transform: translateX(-100%);
//   }
// `;

// export const carouselFade = css`
//   & ${carouselItem} {
//     opacity: 0;
//     transition-property: opacity;
//     -webkit-transform: none;
//     transform: none;
//   }

//   &
//     ${carouselItem}${active},
//     &
//     ${carouselItemNext}.carousel-item-left,
//     &
//     ${carouselItemPrev}.carousel-item-right {
//     z-index: 1;
//     opacity: 1;
//   }

//   & ${active}.carousel-item-left, & ${active}.carousel-item-right {
//     z-index: 0;
//     opacity: 0;
//     transition: opacity 0s 0.6s;
//   }

//   @media (prefers-reduced-motion: reduce) {
//     & ${active}.carousel-item-left, & ${active}.carousel-item-right {
//       transition: none;
//     }
//   }
// `;

// export const carouselIndicators = css`
//   position: absolute;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   z-index: 15;
//   display: -ms-flexbox;
//   display: flex;
//   -ms-flex-pack: center;
//   justify-content: center;
//   padding-left: 0;
//   margin-right: 15%;
//   margin-left: 15%;
//   list-style: none;

//   & li {
//     box-sizing: content-box;
//     -ms-flex: 0 1 auto;
//     flex: 0 1 auto;
//     width: 30px;
//     height: 3px;
//     margin-right: 3px;
//     margin-left: 3px;
//     text-indent: -999px;
//     cursor: pointer;
//     background-color: #fff;
//     background-clip: padding-box;
//     border-top: 10px solid transparent;
//     border-bottom: 10px solid transparent;
//     opacity: 0.5;
//     transition: opacity 0.6s ease;
//   }

//   @media (prefers-reduced-motion: reduce) {
//     & li {
//       transition: none;
//     }
//   }

//   & ${active} {
//     opacity: 1;
//   }
// `;

// export const carouselInner = css`
//   position: relative;
//   width: 100%;
//   overflow: hidden;

//   &::after {
//     display: block;
//     clear: both;
//     content: '';
//   }
// `;

// export const clearfix = css`
//   &::after {
//     display: block;
//     clear: both;
//     content: '';
//   }
// `;

// export const col = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   -ms-flex-preferred-size: 0;
//   flex-basis: 0;
//   -ms-flex-positive: 1;
//   flex-grow: 1;
//   max-width: 100%;
// `;

// export const col1 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   -ms-flex: 0 0 8.333333%;
//   flex: 0 0 8.333333%;
//   max-width: 8.333333%;
// `;

// export const col2 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   -ms-flex: 0 0 16.666667%;
//   flex: 0 0 16.666667%;
//   max-width: 16.666667%;
// `;

// export const col3 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   -ms-flex: 0 0 25%;
//   flex: 0 0 25%;
//   max-width: 25%;
// `;

// export const col4 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   -ms-flex: 0 0 33.333333%;
//   flex: 0 0 33.333333%;
//   max-width: 33.333333%;
// `;

// export const col5 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   -ms-flex: 0 0 41.666667%;
//   flex: 0 0 41.666667%;
//   max-width: 41.666667%;
// `;

// export const col6 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   -ms-flex: 0 0 50%;
//   flex: 0 0 50%;
//   max-width: 50%;
// `;

// export const col7 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   -ms-flex: 0 0 58.333333%;
//   flex: 0 0 58.333333%;
//   max-width: 58.333333%;
// `;

// export const col8 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   -ms-flex: 0 0 66.666667%;
//   flex: 0 0 66.666667%;
//   max-width: 66.666667%;
// `;

// export const col9 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   -ms-flex: 0 0 75%;
//   flex: 0 0 75%;
//   max-width: 75%;
// `;

// export const col10 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   -ms-flex: 0 0 83.333333%;
//   flex: 0 0 83.333333%;
//   max-width: 83.333333%;
// `;

// export const col11 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   -ms-flex: 0 0 91.666667%;
//   flex: 0 0 91.666667%;
//   max-width: 91.666667%;
// `;

// export const col12 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   -ms-flex: 0 0 100%;
//   flex: 0 0 100%;
//   max-width: 100%;
// `;

// export const colAuto = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   -ms-flex: 0 0 auto;
//   flex: 0 0 auto;
//   width: auto;
//   max-width: 100%;
// `;

// export const colFormLabel = css`
//   padding-top: calc(0.375rem + 1px);
//   padding-bottom: calc(0.375rem + 1px);
//   margin-bottom: 0;
//   font-size: inherit;
//   line-height: 1.5;
// `;

// export const colFormLabelLg = css`
//   padding-top: calc(0.5rem + 1px);
//   padding-bottom: calc(0.5rem + 1px);
//   font-size: 1.25rem;
//   line-height: 1.5;
// `;

// export const colFormLabelSm = css`
//   padding-top: calc(0.25rem + 1px);
//   padding-bottom: calc(0.25rem + 1px);
//   font-size: 0.875rem;
//   line-height: 1.5;
// `;

// export const colLg = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 992px) {
//     & {
//       -ms-flex-preferred-size: 0;
//       flex-basis: 0;
//       -ms-flex-positive: 1;
//       flex-grow: 1;
//       max-width: 100%;
//     }
//   }
// `;

// export const colLg1 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 992px) {
//     & {
//       -ms-flex: 0 0 8.333333%;
//       flex: 0 0 8.333333%;
//       max-width: 8.333333%;
//     }
//   }
// `;

// export const colLg2 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 992px) {
//     & {
//       -ms-flex: 0 0 16.666667%;
//       flex: 0 0 16.666667%;
//       max-width: 16.666667%;
//     }
//   }
// `;

// export const colLg3 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 992px) {
//     & {
//       -ms-flex: 0 0 25%;
//       flex: 0 0 25%;
//       max-width: 25%;
//     }
//   }
// `;

// export const colLg4 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 992px) {
//     & {
//       -ms-flex: 0 0 33.333333%;
//       flex: 0 0 33.333333%;
//       max-width: 33.333333%;
//     }
//   }
// `;

// export const colLg5 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 992px) {
//     & {
//       -ms-flex: 0 0 41.666667%;
//       flex: 0 0 41.666667%;
//       max-width: 41.666667%;
//     }
//   }
// `;

// export const colLg6 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 992px) {
//     & {
//       -ms-flex: 0 0 50%;
//       flex: 0 0 50%;
//       max-width: 50%;
//     }
//   }
// `;

// export const colLg7 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 992px) {
//     & {
//       -ms-flex: 0 0 58.333333%;
//       flex: 0 0 58.333333%;
//       max-width: 58.333333%;
//     }
//   }
// `;

// export const colLg8 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 992px) {
//     & {
//       -ms-flex: 0 0 66.666667%;
//       flex: 0 0 66.666667%;
//       max-width: 66.666667%;
//     }
//   }
// `;

// export const colLg9 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 992px) {
//     & {
//       -ms-flex: 0 0 75%;
//       flex: 0 0 75%;
//       max-width: 75%;
//     }
//   }
// `;

// export const colLg10 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 992px) {
//     & {
//       -ms-flex: 0 0 83.333333%;
//       flex: 0 0 83.333333%;
//       max-width: 83.333333%;
//     }
//   }
// `;

// export const colLg11 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 992px) {
//     & {
//       -ms-flex: 0 0 91.666667%;
//       flex: 0 0 91.666667%;
//       max-width: 91.666667%;
//     }
//   }
// `;

// export const colLg12 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 992px) {
//     & {
//       -ms-flex: 0 0 100%;
//       flex: 0 0 100%;
//       max-width: 100%;
//     }
//   }
// `;

// export const colLgAuto = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 992px) {
//     & {
//       -ms-flex: 0 0 auto;
//       flex: 0 0 auto;
//       width: auto;
//       max-width: 100%;
//     }
//   }
// `;

// export const colMd = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 768px) {
//     & {
//       -ms-flex-preferred-size: 0;
//       flex-basis: 0;
//       -ms-flex-positive: 1;
//       flex-grow: 1;
//       max-width: 100%;
//     }
//   }
// `;

// export const colMd1 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 768px) {
//     & {
//       -ms-flex: 0 0 8.333333%;
//       flex: 0 0 8.333333%;
//       max-width: 8.333333%;
//     }
//   }
// `;

// export const colMd2 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 768px) {
//     & {
//       -ms-flex: 0 0 16.666667%;
//       flex: 0 0 16.666667%;
//       max-width: 16.666667%;
//     }
//   }
// `;

// export const colMd3 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 768px) {
//     & {
//       -ms-flex: 0 0 25%;
//       flex: 0 0 25%;
//       max-width: 25%;
//     }
//   }
// `;

// export const colMd4 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 768px) {
//     & {
//       -ms-flex: 0 0 33.333333%;
//       flex: 0 0 33.333333%;
//       max-width: 33.333333%;
//     }
//   }
// `;

// export const colMd5 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 768px) {
//     & {
//       -ms-flex: 0 0 41.666667%;
//       flex: 0 0 41.666667%;
//       max-width: 41.666667%;
//     }
//   }
// `;

// export const colMd6 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 768px) {
//     & {
//       -ms-flex: 0 0 50%;
//       flex: 0 0 50%;
//       max-width: 50%;
//     }
//   }
// `;

// export const colMd7 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 768px) {
//     & {
//       -ms-flex: 0 0 58.333333%;
//       flex: 0 0 58.333333%;
//       max-width: 58.333333%;
//     }
//   }
// `;

// export const colMd8 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 768px) {
//     & {
//       -ms-flex: 0 0 66.666667%;
//       flex: 0 0 66.666667%;
//       max-width: 66.666667%;
//     }
//   }
// `;

// export const colMd9 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 768px) {
//     & {
//       -ms-flex: 0 0 75%;
//       flex: 0 0 75%;
//       max-width: 75%;
//     }
//   }
// `;

// export const colMd10 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 768px) {
//     & {
//       -ms-flex: 0 0 83.333333%;
//       flex: 0 0 83.333333%;
//       max-width: 83.333333%;
//     }
//   }
// `;

// export const colMd11 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 768px) {
//     & {
//       -ms-flex: 0 0 91.666667%;
//       flex: 0 0 91.666667%;
//       max-width: 91.666667%;
//     }
//   }
// `;

// export const colMd12 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 768px) {
//     & {
//       -ms-flex: 0 0 100%;
//       flex: 0 0 100%;
//       max-width: 100%;
//     }
//   }
// `;

// export const colMdAuto = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 768px) {
//     & {
//       -ms-flex: 0 0 auto;
//       flex: 0 0 auto;
//       width: auto;
//       max-width: 100%;
//     }
//   }
// `;

// export const colSm = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 576px) {
//     & {
//       -ms-flex-preferred-size: 0;
//       flex-basis: 0;
//       -ms-flex-positive: 1;
//       flex-grow: 1;
//       max-width: 100%;
//     }
//   }
// `;

// export const colSm1 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 576px) {
//     & {
//       -ms-flex: 0 0 8.333333%;
//       flex: 0 0 8.333333%;
//       max-width: 8.333333%;
//     }
//   }
// `;

// export const colSm2 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 576px) {
//     & {
//       -ms-flex: 0 0 16.666667%;
//       flex: 0 0 16.666667%;
//       max-width: 16.666667%;
//     }
//   }
// `;

// export const colSm3 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 576px) {
//     & {
//       -ms-flex: 0 0 25%;
//       flex: 0 0 25%;
//       max-width: 25%;
//     }
//   }
// `;

// export const colSm4 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 576px) {
//     & {
//       -ms-flex: 0 0 33.333333%;
//       flex: 0 0 33.333333%;
//       max-width: 33.333333%;
//     }
//   }
// `;

// export const colSm5 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 576px) {
//     & {
//       -ms-flex: 0 0 41.666667%;
//       flex: 0 0 41.666667%;
//       max-width: 41.666667%;
//     }
//   }
// `;

// export const colSm6 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 576px) {
//     & {
//       -ms-flex: 0 0 50%;
//       flex: 0 0 50%;
//       max-width: 50%;
//     }
//   }
// `;

// export const colSm7 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 576px) {
//     & {
//       -ms-flex: 0 0 58.333333%;
//       flex: 0 0 58.333333%;
//       max-width: 58.333333%;
//     }
//   }
// `;

// export const colSm8 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 576px) {
//     & {
//       -ms-flex: 0 0 66.666667%;
//       flex: 0 0 66.666667%;
//       max-width: 66.666667%;
//     }
//   }
// `;

// export const colSm9 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 576px) {
//     & {
//       -ms-flex: 0 0 75%;
//       flex: 0 0 75%;
//       max-width: 75%;
//     }
//   }
// `;

// export const colSm10 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 576px) {
//     & {
//       -ms-flex: 0 0 83.333333%;
//       flex: 0 0 83.333333%;
//       max-width: 83.333333%;
//     }
//   }
// `;

// export const colSm11 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 576px) {
//     & {
//       -ms-flex: 0 0 91.666667%;
//       flex: 0 0 91.666667%;
//       max-width: 91.666667%;
//     }
//   }
// `;

// export const colSm12 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 576px) {
//     & {
//       -ms-flex: 0 0 100%;
//       flex: 0 0 100%;
//       max-width: 100%;
//     }
//   }
// `;

// export const colSmAuto = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 576px) {
//     & {
//       -ms-flex: 0 0 auto;
//       flex: 0 0 auto;
//       width: auto;
//       max-width: 100%;
//     }
//   }
// `;

// export const colXl = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-preferred-size: 0;
//       flex-basis: 0;
//       -ms-flex-positive: 1;
//       flex-grow: 1;
//       max-width: 100%;
//     }
//   }
// `;

// export const colXl1 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 1200px) {
//     & {
//       -ms-flex: 0 0 8.333333%;
//       flex: 0 0 8.333333%;
//       max-width: 8.333333%;
//     }
//   }
// `;

// export const colXl2 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 1200px) {
//     & {
//       -ms-flex: 0 0 16.666667%;
//       flex: 0 0 16.666667%;
//       max-width: 16.666667%;
//     }
//   }
// `;

// export const colXl3 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 1200px) {
//     & {
//       -ms-flex: 0 0 25%;
//       flex: 0 0 25%;
//       max-width: 25%;
//     }
//   }
// `;

// export const colXl4 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 1200px) {
//     & {
//       -ms-flex: 0 0 33.333333%;
//       flex: 0 0 33.333333%;
//       max-width: 33.333333%;
//     }
//   }
// `;

// export const colXl5 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 1200px) {
//     & {
//       -ms-flex: 0 0 41.666667%;
//       flex: 0 0 41.666667%;
//       max-width: 41.666667%;
//     }
//   }
// `;

// export const colXl6 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 1200px) {
//     & {
//       -ms-flex: 0 0 50%;
//       flex: 0 0 50%;
//       max-width: 50%;
//     }
//   }
// `;

// export const colXl7 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 1200px) {
//     & {
//       -ms-flex: 0 0 58.333333%;
//       flex: 0 0 58.333333%;
//       max-width: 58.333333%;
//     }
//   }
// `;

// export const colXl8 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 1200px) {
//     & {
//       -ms-flex: 0 0 66.666667%;
//       flex: 0 0 66.666667%;
//       max-width: 66.666667%;
//     }
//   }
// `;

// export const colXl9 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 1200px) {
//     & {
//       -ms-flex: 0 0 75%;
//       flex: 0 0 75%;
//       max-width: 75%;
//     }
//   }
// `;

// export const colXl10 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 1200px) {
//     & {
//       -ms-flex: 0 0 83.333333%;
//       flex: 0 0 83.333333%;
//       max-width: 83.333333%;
//     }
//   }
// `;

// export const colXl11 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 1200px) {
//     & {
//       -ms-flex: 0 0 91.666667%;
//       flex: 0 0 91.666667%;
//       max-width: 91.666667%;
//     }
//   }
// `;

// export const colXl12 = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 1200px) {
//     & {
//       -ms-flex: 0 0 100%;
//       flex: 0 0 100%;
//       max-width: 100%;
//     }
//   }
// `;

// export const colXlAuto = css`
//   position: relative;
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;

//   @media (min-width: 1200px) {
//     & {
//       -ms-flex: 0 0 auto;
//       flex: 0 0 auto;
//       width: auto;
//       max-width: 100%;
//     }
//   }
// `;

// export const show = css`
//   & > ${btnPrimary}${dropdownToggle} {
//     color: #fff;
//     background-color: #0062cc;
//     border-color: #005cbf;
//   }

//   & > ${btnPrimary}${dropdownToggle}:focus {
//     box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
//   }

//   & > ${btnSecondary}${dropdownToggle} {
//     color: #fff;
//     background-color: #545b62;
//     border-color: #4e555b;
//   }

//   & > ${btnSecondary}${dropdownToggle}:focus {
//     box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5);
//   }

//   & > ${btnSuccess}${dropdownToggle} {
//     color: #fff;
//     background-color: #1e7e34;
//     border-color: #1c7430;
//   }

//   & > ${btnSuccess}${dropdownToggle}:focus {
//     box-shadow: 0 0 0 0.2rem rgba(72, 180, 97, 0.5);
//   }

//   & > ${btnInfo}${dropdownToggle} {
//     color: #fff;
//     background-color: #117a8b;
//     border-color: #10707f;
//   }

//   & > ${btnInfo}${dropdownToggle}:focus {
//     box-shadow: 0 0 0 0.2rem rgba(58, 176, 195, 0.5);
//   }

//   & > ${btnWarning}${dropdownToggle} {
//     color: #212529;
//     background-color: #d39e00;
//     border-color: #c69500;
//   }

//   & > ${btnWarning}${dropdownToggle}:focus {
//     box-shadow: 0 0 0 0.2rem rgba(222, 170, 12, 0.5);
//   }

//   & > ${btnDanger}${dropdownToggle} {
//     color: #fff;
//     background-color: #bd2130;
//     border-color: #b21f2d;
//   }

//   & > ${btnDanger}${dropdownToggle}:focus {
//     box-shadow: 0 0 0 0.2rem rgba(225, 83, 97, 0.5);
//   }

//   & > ${btnLight}${dropdownToggle} {
//     color: #212529;
//     background-color: #dae0e5;
//     border-color: #d3d9df;
//   }

//   & > ${btnLight}${dropdownToggle}:focus {
//     box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, 0.5);
//   }

//   & > ${btnDark}${dropdownToggle} {
//     color: #fff;
//     background-color: #1d2124;
//     border-color: #171a1d;
//   }

//   & > ${btnDark}${dropdownToggle}:focus {
//     box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5);
//   }

//   & > ${btnOutlinePrimary}${dropdownToggle} {
//     color: #fff;
//     background-color: #007bff;
//     border-color: #007bff;
//   }

//   & > ${btnOutlinePrimary}${dropdownToggle}:focus {
//     box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
//   }

//   & > ${btnOutlineSecondary}${dropdownToggle} {
//     color: #fff;
//     background-color: #6c757d;
//     border-color: #6c757d;
//   }

//   & > ${btnOutlineSecondary}${dropdownToggle}:focus {
//     box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
//   }

//   & > ${btnOutlineSuccess}${dropdownToggle} {
//     color: #fff;
//     background-color: #28a745;
//     border-color: #28a745;
//   }

//   & > ${btnOutlineSuccess}${dropdownToggle}:focus {
//     box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
//   }

//   & > ${btnOutlineInfo}${dropdownToggle} {
//     color: #fff;
//     background-color: #17a2b8;
//     border-color: #17a2b8;
//   }

//   & > ${btnOutlineInfo}${dropdownToggle}:focus {
//     box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
//   }

//   & > ${btnOutlineWarning}${dropdownToggle} {
//     color: #212529;
//     background-color: #ffc107;
//     border-color: #ffc107;
//   }

//   & > ${btnOutlineWarning}${dropdownToggle}:focus {
//     box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
//   }

//   & > ${btnOutlineDanger}${dropdownToggle} {
//     color: #fff;
//     background-color: #dc3545;
//     border-color: #dc3545;
//   }

//   & > ${btnOutlineDanger}${dropdownToggle}:focus {
//     box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
//   }

//   & > ${btnOutlineLight}${dropdownToggle} {
//     color: #212529;
//     background-color: #f8f9fa;
//     border-color: #f8f9fa;
//   }

//   & > ${btnOutlineLight}${dropdownToggle}:focus {
//     box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
//   }

//   & > ${btnOutlineDark}${dropdownToggle} {
//     color: #fff;
//     background-color: #343a40;
//     border-color: #343a40;
//   }

//   & > ${btnOutlineDark}${dropdownToggle}:focus {
//     box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
//   }
// `;

// export const collapse = css`
//   &:not(${show}) {
//     display: none;
//   }
// `;

// export const collapsing = css`
//   position: relative;
//   height: 0;
//   overflow: hidden;
//   transition: height 0.35s ease;

//   @media (prefers-reduced-motion: reduce) {
//     & {
//       transition: none;
//     }
//   }
// `;

// export const container = css`
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;
//   margin-right: auto;
//   margin-left: auto;

//   @media (min-width: 576px) {
//     & {
//       max-width: 540px;
//     }
//   }

//   @media (min-width: 768px) {
//     & {
//       max-width: 720px;
//     }
//   }

//   @media (min-width: 992px) {
//     & {
//       max-width: 960px;
//     }
//   }

//   @media (min-width: 1200px) {
//     & {
//       max-width: 1140px;
//     }
//   }

//   @media print {
//     & {
//       min-width: 992px;
//     }
//   }
// `;

// export const containerFluid = css`
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;
//   margin-right: auto;
//   margin-left: auto;
// `;

// export const containerLg = css`
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;
//   margin-right: auto;
//   margin-left: auto;

//   @media (min-width: 992px) {
//     & {
//       max-width: 960px;
//     }
//   }

//   @media (min-width: 1200px) {
//     & {
//       max-width: 1140px;
//     }
//   }
// `;

// export const containerMd = css`
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;
//   margin-right: auto;
//   margin-left: auto;

//   @media (min-width: 768px) {
//     & {
//       max-width: 720px;
//     }
//   }

//   @media (min-width: 992px) {
//     & {
//       max-width: 960px;
//     }
//   }

//   @media (min-width: 1200px) {
//     & {
//       max-width: 1140px;
//     }
//   }
// `;

// export const containerSm = css`
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;
//   margin-right: auto;
//   margin-left: auto;

//   @media (min-width: 576px) {
//     & {
//       max-width: 540px;
//     }
//   }

//   @media (min-width: 768px) {
//     & {
//       max-width: 720px;
//     }
//   }

//   @media (min-width: 992px) {
//     & {
//       max-width: 960px;
//     }
//   }

//   @media (min-width: 1200px) {
//     & {
//       max-width: 1140px;
//     }
//   }
// `;

// export const containerXl = css`
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;
//   margin-right: auto;
//   margin-left: auto;

//   @media (min-width: 1200px) {
//     & {
//       max-width: 1140px;
//     }
//   }
// `;

// export const customControlLabel = css`
//   position: relative;
//   margin-bottom: 0;
//   vertical-align: top;

//   &::before {
//     position: absolute;
//     top: 0.25rem;
//     left: -1.5rem;
//     display: block;
//     width: 1rem;
//     height: 1rem;
//     pointer-events: none;
//     content: '';
//     background-color: #fff;
//     border: #adb5bd solid 1px;
//   }

//   &::after {
//     position: absolute;
//     top: 0.25rem;
//     left: -1.5rem;
//     display: block;
//     width: 1rem;
//     height: 1rem;
//     content: '';
//     background: no-repeat 50% / 50% 50%;
//   }

//   &::before {
//     transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
//       box-shadow 0.15s ease-in-out;
//   }

//   @media (prefers-reduced-motion: reduce) {
//     &::before {
//       transition: none;
//     }
//   }
// `;

// export const customControlInput = css`
//   &${isValid} ~ ${customControlLabel} {
//     color: #28a745;
//   }

//   &${isValid} ~ ${customControlLabel}::before {
//     border-color: #28a745;
//   }

//   &${isValid}:checked ~ ${customControlLabel}::before {
//     border-color: #34ce57;
//     background-color: #34ce57;
//   }

//   &${isValid}:focus ~ ${customControlLabel}::before {
//     box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
//   }

//   &${isValid}:focus:not(:checked) ~ ${customControlLabel}::before {
//     border-color: #28a745;
//   }

//   &${isInvalid} ~ ${customControlLabel} {
//     color: #dc3545;
//   }

//   &${isInvalid} ~ ${customControlLabel}::before {
//     border-color: #dc3545;
//   }

//   &${isInvalid}:checked ~ ${customControlLabel}::before {
//     border-color: #e4606d;
//     background-color: #e4606d;
//   }

//   &${isInvalid}:focus ~ ${customControlLabel}::before {
//     box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
//   }

//   &${isInvalid}:focus:not(:checked) ~ ${customControlLabel}::before {
//     border-color: #dc3545;
//   }

//   position: absolute;
//   left: 0;
//   z-index: -1;
//   width: 1rem;
//   height: 1.25rem;
//   opacity: 0;

//   &:checked ~ ${customControlLabel}::before {
//     color: #fff;
//     border-color: #007bff;
//     background-color: #007bff;
//   }

//   &:focus ~ ${customControlLabel}::before {
//     box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
//   }

//   &:focus:not(:checked) ~ ${customControlLabel}::before {
//     border-color: #80bdff;
//   }

//   &:not(:disabled):active ~ ${customControlLabel}::before {
//     color: #fff;
//     background-color: #b3d7ff;
//     border-color: #b3d7ff;
//   }

//   &[disabled] ~ ${customControlLabel}, &:disabled ~ ${customControlLabel} {
//     color: #6c757d;
//   }

//   &[disabled] ~ ${customControlLabel}::before, &:disabled ~ ${customControlLabel}::before {
//     background-color: #e9ecef;
//   }
// `;

// export const customCheckbox = css`
//   & ${customControlLabel}::before {
//     border-radius: 0.25rem;
//   }

//   & ${customControlInput}:checked ~ ${customControlLabel}::after {
//     background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3e%3c/svg%3e");
//   }

//   & ${customControlInput}:indeterminate ~ ${customControlLabel}::before {
//     border-color: #007bff;
//     background-color: #007bff;
//   }

//   & ${customControlInput}:indeterminate ~ ${customControlLabel}::after {
//     background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e");
//   }

//   & ${customControlInput}:disabled:checked ~ ${customControlLabel}::before {
//     background-color: rgba(0, 123, 255, 0.5);
//   }

//   & ${customControlInput}:disabled:indeterminate ~ ${customControlLabel}::before {
//     background-color: rgba(0, 123, 255, 0.5);
//   }
// `;

// export const customControl = css`
//   position: relative;
//   z-index: 1;
//   display: block;
//   min-height: 1.5rem;
//   padding-left: 1.5rem;
//   -webkit-print-color-adjust: exact;
//   color-adjust: exact;
// `;

// export const customControlInline = css`
//   display: -ms-inline-flexbox;
//   display: inline-flex;
//   margin-right: 1rem;
// `;

// export const isValid = css`
//   & ~ ${validFeedback}, & ~ ${validTooltip} {
//     display: block;
//   }
// `;

// export const isInvalid = css`
//   & ~ ${invalidFeedback}, & ~ ${invalidTooltip} {
//     display: block;
//   }
// `;

// export const customFile = css`
//   position: relative;
//   display: inline-block;
//   width: 100%;
//   height: calc(1.5em + 0.75rem + 2px);
//   margin-bottom: 0;
// `;

// export const customFileLabel = css`
//   position: absolute;
//   top: 0;
//   right: 0;
//   left: 0;
//   z-index: 1;
//   height: calc(1.5em + 0.75rem + 2px);
//   padding: 0.375rem 0.75rem;
//   font-weight: 400;
//   line-height: 1.5;
//   color: #495057;
//   background-color: #fff;
//   border: 1px solid #ced4da;
//   border-radius: 0.25rem;

//   &::after {
//     position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     z-index: 3;
//     display: block;
//     height: calc(1.5em + 0.75rem);
//     padding: 0.375rem 0.75rem;
//     line-height: 1.5;
//     color: #495057;
//     content: 'Browse';
//     background-color: #e9ecef;
//     border-left: inherit;
//     border-radius: 0 0.25rem 0.25rem 0;
//   }

//   transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
//     box-shadow 0.15s ease-in-out;

//   @media (prefers-reduced-motion: reduce) {
//     & {
//       transition: none;
//     }
//   }
// `;

// export const customFileInput = css`
//   &${isValid} ~ ${customFileLabel} {
//     border-color: #28a745;
//   }

//   &${isValid}:focus ~ ${customFileLabel} {
//     border-color: #28a745;
//     box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
//   }

//   &${isInvalid} ~ ${customFileLabel} {
//     border-color: #dc3545;
//   }

//   &${isInvalid}:focus ~ ${customFileLabel} {
//     border-color: #dc3545;
//     box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
//   }

//   position: relative;
//   z-index: 2;
//   width: 100%;
//   height: calc(1.5em + 0.75rem + 2px);
//   margin: 0;
//   opacity: 0;

//   &:focus ~ ${customFileLabel} {
//     border-color: #80bdff;
//     box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
//   }

//   &[disabled] ~ ${customFileLabel}, &:disabled ~ ${customFileLabel} {
//     background-color: #e9ecef;
//   }

//   &:lang(en) ~ ${customFileLabel}::after {
//     content: 'Browse';
//   }

//   & ~ ${customFileLabel}[data-browse]::after {
//     content: attr(data-browse);
//   }
// `;

// export const customRadio = css`
//   & ${customControlLabel}::before {
//     border-radius: 50%;
//   }

//   & ${customControlInput}:checked ~ ${customControlLabel}::after {
//     background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
//   }

//   & ${customControlInput}:disabled:checked ~ ${customControlLabel}::before {
//     background-color: rgba(0, 123, 255, 0.5);
//   }
// `;

// export const customRange = css`
//   width: 100%;
//   height: 1.4rem;
//   padding: 0;
//   background-color: transparent;
//   -webkit-appearance: none;
//   -moz-appearance: none;
//   appearance: none;

//   &:focus {
//     outline: none;
//   }

//   &:focus::-webkit-slider-thumb {
//     box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
//   }

//   &:focus::-moz-range-thumb {
//     box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
//   }

//   &:focus::-ms-thumb {
//     box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
//   }

//   &::-moz-focus-outer {
//     border: 0;
//   }

//   &::-webkit-slider-thumb {
//     width: 1rem;
//     height: 1rem;
//     margin-top: -0.25rem;
//     background-color: #007bff;
//     border: 0;
//     border-radius: 1rem;
//     -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
//       box-shadow 0.15s ease-in-out;
//     transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
//       box-shadow 0.15s ease-in-out;
//     -webkit-appearance: none;
//     appearance: none;
//   }

//   @media (prefers-reduced-motion: reduce) {
//     &::-webkit-slider-thumb {
//       -webkit-transition: none;
//       transition: none;
//     }
//   }

//   &::-webkit-slider-thumb:active {
//     background-color: #b3d7ff;
//   }

//   &::-webkit-slider-runnable-track {
//     width: 100%;
//     height: 0.5rem;
//     color: transparent;
//     cursor: pointer;
//     background-color: #dee2e6;
//     border-color: transparent;
//     border-radius: 1rem;
//   }

//   &::-moz-range-thumb {
//     width: 1rem;
//     height: 1rem;
//     background-color: #007bff;
//     border: 0;
//     border-radius: 1rem;
//     -moz-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
//       box-shadow 0.15s ease-in-out;
//     transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
//       box-shadow 0.15s ease-in-out;
//     -moz-appearance: none;
//     appearance: none;
//   }

//   @media (prefers-reduced-motion: reduce) {
//     &::-moz-range-thumb {
//       -moz-transition: none;
//       transition: none;
//     }
//   }

//   &::-moz-range-thumb:active {
//     background-color: #b3d7ff;
//   }

//   &::-moz-range-track {
//     width: 100%;
//     height: 0.5rem;
//     color: transparent;
//     cursor: pointer;
//     background-color: #dee2e6;
//     border-color: transparent;
//     border-radius: 1rem;
//   }

//   &::-ms-thumb {
//     width: 1rem;
//     height: 1rem;
//     margin-top: 0;
//     margin-right: 0.2rem;
//     margin-left: 0.2rem;
//     background-color: #007bff;
//     border: 0;
//     border-radius: 1rem;
//     -ms-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
//       box-shadow 0.15s ease-in-out;
//     transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
//       box-shadow 0.15s ease-in-out;
//     appearance: none;
//   }

//   @media (prefers-reduced-motion: reduce) {
//     &::-ms-thumb {
//       -ms-transition: none;
//       transition: none;
//     }
//   }

//   &::-ms-thumb:active {
//     background-color: #b3d7ff;
//   }

//   &::-ms-track {
//     width: 100%;
//     height: 0.5rem;
//     color: transparent;
//     cursor: pointer;
//     background-color: transparent;
//     border-color: transparent;
//     border-width: 0.5rem;
//   }

//   &::-ms-fill-lower {
//     background-color: #dee2e6;
//     border-radius: 1rem;
//   }

//   &::-ms-fill-upper {
//     margin-right: 15px;
//     background-color: #dee2e6;
//     border-radius: 1rem;
//   }

//   &:disabled::-webkit-slider-thumb {
//     background-color: #adb5bd;
//   }

//   &:disabled::-webkit-slider-runnable-track {
//     cursor: default;
//   }

//   &:disabled::-moz-range-thumb {
//     background-color: #adb5bd;
//   }

//   &:disabled::-moz-range-track {
//     cursor: default;
//   }

//   &:disabled::-ms-thumb {
//     background-color: #adb5bd;
//   }
// `;

// export const customSelect = css`
//   &${isValid} {
//     border-color: #28a745;
//     padding-right: calc(0.75em + 2.3125rem);
//     background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e")
//         no-repeat right 0.75rem center/8px 10px,
//       url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e")
//         #fff no-repeat center right 1.75rem / calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
//   }

//   &${isValid}:focus {
//     border-color: #28a745;
//     box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
//   }

//   &${isInvalid} {
//     border-color: #dc3545;
//     padding-right: calc(0.75em + 2.3125rem);
//     background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e")
//         no-repeat right 0.75rem center/8px 10px,
//       url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e")
//         #fff no-repeat center right 1.75rem / calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
//   }

//   &${isInvalid}:focus {
//     border-color: #dc3545;
//     box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
//   }

//   display: inline-block;
//   width: 100%;
//   height: calc(1.5em + 0.75rem + 2px);
//   padding: 0.375rem 1.75rem 0.375rem 0.75rem;
//   font-size: 1rem;
//   font-weight: 400;
//   line-height: 1.5;
//   color: #495057;
//   vertical-align: middle;
//   background: #fff
//     url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e")
//     no-repeat right 0.75rem center/8px 10px;
//   border: 1px solid #ced4da;
//   border-radius: 0.25rem;
//   -webkit-appearance: none;
//   -moz-appearance: none;
//   appearance: none;

//   &:focus {
//     border-color: #80bdff;
//     outline: 0;
//     box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
//   }

//   &:focus::-ms-value {
//     color: #495057;
//     background-color: #fff;
//   }

//   &[multiple],
//   &[size]:not([size='1']) {
//     height: auto;
//     padding-right: 0.75rem;
//     background-image: none;
//   }

//   &:disabled {
//     color: #6c757d;
//     background-color: #e9ecef;
//   }

//   &::-ms-expand {
//     display: none;
//   }

//   &:-moz-focusring {
//     color: transparent;
//     text-shadow: 0 0 0 #495057;
//   }

//   transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
//     box-shadow 0.15s ease-in-out;

//   @media (prefers-reduced-motion: reduce) {
//     & {
//       transition: none;
//     }
//   }
// `;

// export const customSelectLg = css`
//   height: calc(1.5em + 1rem + 2px);
//   padding-top: 0.5rem;
//   padding-bottom: 0.5rem;
//   padding-left: 1rem;
//   font-size: 1.25rem;
// `;

// export const customSelectSm = css`
//   height: calc(1.5em + 0.5rem + 2px);
//   padding-top: 0.25rem;
//   padding-bottom: 0.25rem;
//   padding-left: 0.5rem;
//   font-size: 0.875rem;
// `;

// export const customSwitch = css`
//   padding-left: 2.25rem;

//   & ${customControlLabel}::before {
//     left: -2.25rem;
//     width: 1.75rem;
//     pointer-events: all;
//     border-radius: 0.5rem;
//   }

//   & ${customControlLabel}::after {
//     top: calc(0.25rem + 2px);
//     left: calc(-2.25rem + 2px);
//     width: calc(1rem - 4px);
//     height: calc(1rem - 4px);
//     background-color: #adb5bd;
//     border-radius: 0.5rem;
//     transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
//       box-shadow 0.15s ease-in-out, -webkit-transform 0.15s ease-in-out;
//     transition: transform 0.15s ease-in-out, background-color 0.15s ease-in-out,
//       border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
//     transition: transform 0.15s ease-in-out, background-color 0.15s ease-in-out,
//       border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
//       -webkit-transform 0.15s ease-in-out;
//   }

//   @media (prefers-reduced-motion: reduce) {
//     & ${customControlLabel}::after {
//       transition: none;
//     }
//   }

//   & ${customControlInput}:checked ~ ${customControlLabel}::after {
//     background-color: #fff;
//     -webkit-transform: translateX(0.75rem);
//     transform: translateX(0.75rem);
//   }

//   & ${customControlInput}:disabled:checked ~ ${customControlLabel}::before {
//     background-color: rgba(0, 123, 255, 0.5);
//   }
// `;

// export const dBlock = css`
//   display: block;
// `;

// export const dFlex = css`
//   display: -ms-flexbox;
//   display: flex;
// `;

// export const dInline = css`
//   display: inline;
// `;

// export const dInlineBlock = css`
//   display: inline-block;
// `;

// export const dInlineFlex = css`
//   display: -ms-inline-flexbox;
//   display: inline-flex;
// `;

// export const dLgBlock = css`
//   @media (min-width: 992px) {
//     & {
//       display: block;
//     }
//   }
// `;

// export const dLgFlex = css`
//   @media (min-width: 992px) {
//     & {
//       display: -ms-flexbox;
//       display: flex;
//     }
//   }
// `;

// export const dLgInline = css`
//   @media (min-width: 992px) {
//     & {
//       display: inline;
//     }
//   }
// `;

// export const dLgInlineBlock = css`
//   @media (min-width: 992px) {
//     & {
//       display: inline-block;
//     }
//   }
// `;

// export const dLgInlineFlex = css`
//   @media (min-width: 992px) {
//     & {
//       display: -ms-inline-flexbox;
//       display: inline-flex;
//     }
//   }
// `;

// export const dLgNone = css`
//   @media (min-width: 992px) {
//     & {
//       display: none;
//     }
//   }
// `;

// export const dLgTable = css`
//   @media (min-width: 992px) {
//     & {
//       display: table;
//     }
//   }
// `;

// export const dLgTableCell = css`
//   @media (min-width: 992px) {
//     & {
//       display: table-cell;
//     }
//   }
// `;

// export const dLgTableRow = css`
//   @media (min-width: 992px) {
//     & {
//       display: table-row;
//     }
//   }
// `;

// export const dMdBlock = css`
//   @media (min-width: 768px) {
//     & {
//       display: block;
//     }
//   }
// `;

// export const dMdFlex = css`
//   @media (min-width: 768px) {
//     & {
//       display: -ms-flexbox;
//       display: flex;
//     }
//   }
// `;

// export const dMdInline = css`
//   @media (min-width: 768px) {
//     & {
//       display: inline;
//     }
//   }
// `;

// export const dMdInlineBlock = css`
//   @media (min-width: 768px) {
//     & {
//       display: inline-block;
//     }
//   }
// `;

// export const dMdInlineFlex = css`
//   @media (min-width: 768px) {
//     & {
//       display: -ms-inline-flexbox;
//       display: inline-flex;
//     }
//   }
// `;

// export const dMdNone = css`
//   @media (min-width: 768px) {
//     & {
//       display: none;
//     }
//   }
// `;

// export const dMdTable = css`
//   @media (min-width: 768px) {
//     & {
//       display: table;
//     }
//   }
// `;

// export const dMdTableCell = css`
//   @media (min-width: 768px) {
//     & {
//       display: table-cell;
//     }
//   }
// `;

// export const dMdTableRow = css`
//   @media (min-width: 768px) {
//     & {
//       display: table-row;
//     }
//   }
// `;

// export const dNone = css`
//   display: none;
// `;

// export const dPrintBlock = css`
//   @media print {
//     & {
//       display: block;
//     }
//   }
// `;

// export const dPrintFlex = css`
//   @media print {
//     & {
//       display: -ms-flexbox;
//       display: flex;
//     }
//   }
// `;

// export const dPrintInline = css`
//   @media print {
//     & {
//       display: inline;
//     }
//   }
// `;

// export const dPrintInlineBlock = css`
//   @media print {
//     & {
//       display: inline-block;
//     }
//   }
// `;

// export const dPrintInlineFlex = css`
//   @media print {
//     & {
//       display: -ms-inline-flexbox;
//       display: inline-flex;
//     }
//   }
// `;

// export const dPrintNone = css`
//   @media print {
//     & {
//       display: none;
//     }
//   }
// `;

// export const dPrintTable = css`
//   @media print {
//     & {
//       display: table;
//     }
//   }
// `;

// export const dPrintTableCell = css`
//   @media print {
//     & {
//       display: table-cell;
//     }
//   }
// `;

// export const dPrintTableRow = css`
//   @media print {
//     & {
//       display: table-row;
//     }
//   }
// `;

// export const dSmBlock = css`
//   @media (min-width: 576px) {
//     & {
//       display: block;
//     }
//   }
// `;

// export const dSmFlex = css`
//   @media (min-width: 576px) {
//     & {
//       display: -ms-flexbox;
//       display: flex;
//     }
//   }
// `;

// export const dSmInline = css`
//   @media (min-width: 576px) {
//     & {
//       display: inline;
//     }
//   }
// `;

// export const dSmInlineBlock = css`
//   @media (min-width: 576px) {
//     & {
//       display: inline-block;
//     }
//   }
// `;

// export const dSmInlineFlex = css`
//   @media (min-width: 576px) {
//     & {
//       display: -ms-inline-flexbox;
//       display: inline-flex;
//     }
//   }
// `;

// export const dSmNone = css`
//   @media (min-width: 576px) {
//     & {
//       display: none;
//     }
//   }
// `;

// export const dSmTable = css`
//   @media (min-width: 576px) {
//     & {
//       display: table;
//     }
//   }
// `;

// export const dSmTableCell = css`
//   @media (min-width: 576px) {
//     & {
//       display: table-cell;
//     }
//   }
// `;

// export const dSmTableRow = css`
//   @media (min-width: 576px) {
//     & {
//       display: table-row;
//     }
//   }
// `;

// export const dTable = css`
//   display: table;
// `;

// export const dTableCell = css`
//   display: table-cell;
// `;

// export const dTableRow = css`
//   display: table-row;
// `;

// export const dXlBlock = css`
//   @media (min-width: 1200px) {
//     & {
//       display: block;
//     }
//   }
// `;

// export const dXlFlex = css`
//   @media (min-width: 1200px) {
//     & {
//       display: -ms-flexbox;
//       display: flex;
//     }
//   }
// `;

// export const dXlInline = css`
//   @media (min-width: 1200px) {
//     & {
//       display: inline;
//     }
//   }
// `;

// export const dXlInlineBlock = css`
//   @media (min-width: 1200px) {
//     & {
//       display: inline-block;
//     }
//   }
// `;

// export const dXlInlineFlex = css`
//   @media (min-width: 1200px) {
//     & {
//       display: -ms-inline-flexbox;
//       display: inline-flex;
//     }
//   }
// `;

// export const dXlNone = css`
//   @media (min-width: 1200px) {
//     & {
//       display: none;
//     }
//   }
// `;

// export const dXlTable = css`
//   @media (min-width: 1200px) {
//     & {
//       display: table;
//     }
//   }
// `;

// export const dXlTableCell = css`
//   @media (min-width: 1200px) {
//     & {
//       display: table-cell;
//     }
//   }
// `;

// export const dXlTableRow = css`
//   @media (min-width: 1200px) {
//     & {
//       display: table-row;
//     }
//   }
// `;

// export const display1 = css`
//   font-size: 6rem;
//   font-weight: 300;
//   line-height: 1.2;
// `;

// export const display2 = css`
//   font-size: 5.5rem;
//   font-weight: 300;
//   line-height: 1.2;
// `;

// export const display3 = css`
//   font-size: 4.5rem;
//   font-weight: 300;
//   line-height: 1.2;
// `;

// export const display4 = css`
//   font-size: 3.5rem;
//   font-weight: 300;
//   line-height: 1.2;
// `;

// export const dropdown = css`
//   position: relative;
// `;

// export const dropdownDivider = css`
//   height: 0;
//   margin: 0.5rem 0;
//   overflow: hidden;
//   border-top: 1px solid #e9ecef;
// `;

// export const dropdownHeader = css`
//   display: block;
//   padding: 0.5rem 1.5rem;
//   margin-bottom: 0;
//   font-size: 0.875rem;
//   color: #6c757d;
//   white-space: nowrap;
// `;

// export const dropdownItem = css`
//   display: block;
//   width: 100%;
//   padding: 0.25rem 1.5rem;
//   clear: both;
//   font-weight: 400;
//   color: #212529;
//   text-align: inherit;
//   white-space: nowrap;
//   background-color: transparent;
//   border: 0;

//   &:hover,
//   &:focus {
//     color: #16181b;
//     text-decoration: none;
//     background-color: #f8f9fa;
//   }

//   &${active}, &:active {
//     color: #fff;
//     text-decoration: none;
//     background-color: #007bff;
//   }

//   &.disabled,
//   &:disabled {
//     color: #6c757d;
//     pointer-events: none;
//     background-color: transparent;
//   }
// `;

// export const dropdownItemText = css`
//   display: block;
//   padding: 0.25rem 1.5rem;
//   color: #212529;
// `;

// export const dropdownMenu = css`
//   position: absolute;
//   top: 100%;
//   left: 0;
//   z-index: 1000;
//   display: none;
//   float: left;
//   min-width: 10rem;
//   padding: 0.5rem 0;
//   margin: 0.125rem 0 0;
//   font-size: 1rem;
//   color: #212529;
//   text-align: left;
//   list-style: none;
//   background-color: #fff;
//   background-clip: padding-box;
//   border: 1px solid rgba(0, 0, 0, 0.15);
//   border-radius: 0.25rem;

//   &[x-placement^='top'],
//   &[x-placement^='right'],
//   &[x-placement^='bottom'],
//   &[x-placement^='left'] {
//     right: auto;
//     bottom: auto;
//   }

//   &${show} {
//     display: block;
//   }
// `;

// export const dropdownMenuLeft = css`
//   right: auto;
//   left: 0;
// `;

// export const dropdownMenuLgLeft = css`
//   @media (min-width: 992px) {
//     & {
//       right: auto;
//       left: 0;
//     }
//   }
// `;

// export const dropdownMenuLgRight = css`
//   @media (min-width: 992px) {
//     & {
//       right: 0;
//       left: auto;
//     }
//   }
// `;

// export const dropdownMenuMdLeft = css`
//   @media (min-width: 768px) {
//     & {
//       right: auto;
//       left: 0;
//     }
//   }
// `;

// export const dropdownMenuMdRight = css`
//   @media (min-width: 768px) {
//     & {
//       right: 0;
//       left: auto;
//     }
//   }
// `;

// export const dropdownMenuRight = css`
//   right: 0;
//   left: auto;
// `;

// export const dropdownMenuSmLeft = css`
//   @media (min-width: 576px) {
//     & {
//       right: auto;
//       left: 0;
//     }
//   }
// `;

// export const dropdownMenuSmRight = css`
//   @media (min-width: 576px) {
//     & {
//       right: 0;
//       left: auto;
//     }
//   }
// `;

// export const dropdownMenuXlLeft = css`
//   @media (min-width: 1200px) {
//     & {
//       right: auto;
//       left: 0;
//     }
//   }
// `;

// export const dropdownMenuXlRight = css`
//   @media (min-width: 1200px) {
//     & {
//       right: 0;
//       left: auto;
//     }
//   }
// `;

// export const dropleft = css`
//   position: relative;

//   & ${dropdownMenu} {
//     top: 0;
//     right: 100%;
//     left: auto;
//     margin-top: 0;
//     margin-right: 0.125rem;
//   }

//   & ${dropdownToggle}::after {
//     display: inline-block;
//     margin-left: 0.255em;
//     vertical-align: 0.255em;
//     content: '';
//   }

//   & ${dropdownToggle}::after {
//     display: none;
//   }

//   & ${dropdownToggle}::before {
//     display: inline-block;
//     margin-right: 0.255em;
//     vertical-align: 0.255em;
//     content: '';
//     border-top: 0.3em solid transparent;
//     border-right: 0.3em solid;
//     border-bottom: 0.3em solid transparent;
//   }

//   & ${dropdownToggle}:empty::after {
//     margin-left: 0;
//   }

//   & ${dropdownToggle}::before {
//     vertical-align: 0;
//   }

//   & ${dropdownToggleSplit}::before {
//     margin-right: 0;
//   }
// `;

// export const dropright = css`
//   position: relative;

//   & ${dropdownMenu} {
//     top: 0;
//     right: auto;
//     left: 100%;
//     margin-top: 0;
//     margin-left: 0.125rem;
//   }

//   & ${dropdownToggle}::after {
//     display: inline-block;
//     margin-left: 0.255em;
//     vertical-align: 0.255em;
//     content: '';
//     border-top: 0.3em solid transparent;
//     border-right: 0;
//     border-bottom: 0.3em solid transparent;
//     border-left: 0.3em solid;
//   }

//   & ${dropdownToggle}:empty::after {
//     margin-left: 0;
//   }

//   & ${dropdownToggle}::after {
//     vertical-align: 0;
//   }

//   & ${dropdownToggleSplit}::after {
//     margin-left: 0;
//   }
// `;

// export const dropup = css`
//   position: relative;

//   & ${dropdownMenu} {
//     top: auto;
//     bottom: 100%;
//     margin-top: 0;
//     margin-bottom: 0.125rem;
//   }

//   & ${dropdownToggle}::after {
//     display: inline-block;
//     margin-left: 0.255em;
//     vertical-align: 0.255em;
//     content: '';
//     border-top: 0;
//     border-right: 0.3em solid transparent;
//     border-bottom: 0.3em solid;
//     border-left: 0.3em solid transparent;
//   }

//   & ${dropdownToggle}:empty::after {
//     margin-left: 0;
//   }

//   & ${dropdownToggleSplit}::after {
//     margin-left: 0;
//   }
// `;

// export const embedResponsive = css`
//   position: relative;
//   display: block;
//   width: 100%;
//   padding: 0;
//   overflow: hidden;

//   &::before {
//     display: block;
//     content: '';
//   }

//   & .embed-responsive-item,
//   & iframe,
//   & embed,
//   & object,
//   & video {
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     border: 0;
//   }
// `;

// export const embedResponsive1by1 = css`
//   &::before {
//     padding-top: 100%;
//   }
// `;

// export const embedResponsive4by3 = css`
//   &::before {
//     padding-top: 75%;
//   }
// `;

// export const embedResponsive16by9 = css`
//   &::before {
//     padding-top: 56.25%;
//   }
// `;

// export const embedResponsive21by9 = css`
//   &::before {
//     padding-top: 42.857143%;
//   }
// `;

// export const fade = css`
//   transition: opacity 0.15s linear;

//   @media (prefers-reduced-motion: reduce) {
//     & {
//       transition: none;
//     }
//   }

//   &:not(${show}) {
//     opacity: 0;
//   }
// `;

// export const figure = css`
//   display: inline-block;
// `;

// export const figureCaption = css`
//   font-size: 90%;
//   color: #6c757d;
// `;

// export const figureImg = css`
//   margin-bottom: 0.5rem;
//   line-height: 1;
// `;

// export const fixedBottom = css`
//   position: fixed;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   z-index: 1030;
// `;

// export const fixedTop = css`
//   position: fixed;
//   top: 0;
//   right: 0;
//   left: 0;
//   z-index: 1030;
// `;

// export const flexColumn = css`
//   -ms-flex-direction: column;
//   flex-direction: column;
// `;

// export const flexColumnReverse = css`
//   -ms-flex-direction: column-reverse;
//   flex-direction: column-reverse;
// `;

// export const flexFill = css`
//   -ms-flex: 1 1 auto;
//   flex: 1 1 auto;
// `;

// export const flexGrow0 = css`
//   -ms-flex-positive: 0;
//   flex-grow: 0;
// `;

// export const flexGrow1 = css`
//   -ms-flex-positive: 1;
//   flex-grow: 1;
// `;

// export const flexLgColumn = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-direction: column;
//       flex-direction: column;
//     }
//   }
// `;

// export const flexLgColumnReverse = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-direction: column-reverse;
//       flex-direction: column-reverse;
//     }
//   }
// `;

// export const flexLgFill = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex: 1 1 auto;
//       flex: 1 1 auto;
//     }
//   }
// `;

// export const flexLgGrow0 = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-positive: 0;
//       flex-grow: 0;
//     }
//   }
// `;

// export const flexLgGrow1 = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-positive: 1;
//       flex-grow: 1;
//     }
//   }
// `;

// export const flexLgNowrap = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-wrap: nowrap;
//       flex-wrap: nowrap;
//     }
//   }
// `;

// export const flexLgRow = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-direction: row;
//       flex-direction: row;
//     }
//   }
// `;

// export const flexLgRowReverse = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-direction: row-reverse;
//       flex-direction: row-reverse;
//     }
//   }
// `;

// export const flexLgShrink0 = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-negative: 0;
//       flex-shrink: 0;
//     }
//   }
// `;

// export const flexLgShrink1 = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-negative: 1;
//       flex-shrink: 1;
//     }
//   }
// `;

// export const flexLgWrap = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-wrap: wrap;
//       flex-wrap: wrap;
//     }
//   }
// `;

// export const flexLgWrapReverse = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-wrap: wrap-reverse;
//       flex-wrap: wrap-reverse;
//     }
//   }
// `;

// export const flexMdColumn = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-direction: column;
//       flex-direction: column;
//     }
//   }
// `;

// export const flexMdColumnReverse = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-direction: column-reverse;
//       flex-direction: column-reverse;
//     }
//   }
// `;

// export const flexMdFill = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex: 1 1 auto;
//       flex: 1 1 auto;
//     }
//   }
// `;

// export const flexMdGrow0 = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-positive: 0;
//       flex-grow: 0;
//     }
//   }
// `;

// export const flexMdGrow1 = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-positive: 1;
//       flex-grow: 1;
//     }
//   }
// `;

// export const flexMdNowrap = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-wrap: nowrap;
//       flex-wrap: nowrap;
//     }
//   }
// `;

// export const flexMdRow = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-direction: row;
//       flex-direction: row;
//     }
//   }
// `;

// export const flexMdRowReverse = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-direction: row-reverse;
//       flex-direction: row-reverse;
//     }
//   }
// `;

// export const flexMdShrink0 = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-negative: 0;
//       flex-shrink: 0;
//     }
//   }
// `;

// export const flexMdShrink1 = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-negative: 1;
//       flex-shrink: 1;
//     }
//   }
// `;

// export const flexMdWrap = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-wrap: wrap;
//       flex-wrap: wrap;
//     }
//   }
// `;

// export const flexMdWrapReverse = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-wrap: wrap-reverse;
//       flex-wrap: wrap-reverse;
//     }
//   }
// `;

// export const flexNowrap = css`
//   -ms-flex-wrap: nowrap;
//   flex-wrap: nowrap;
// `;

// export const flexRow = css`
//   -ms-flex-direction: row;
//   flex-direction: row;
// `;

// export const flexRowReverse = css`
//   -ms-flex-direction: row-reverse;
//   flex-direction: row-reverse;
// `;

// export const flexShrink0 = css`
//   -ms-flex-negative: 0;
//   flex-shrink: 0;
// `;

// export const flexShrink1 = css`
//   -ms-flex-negative: 1;
//   flex-shrink: 1;
// `;

// export const flexSmColumn = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-direction: column;
//       flex-direction: column;
//     }
//   }
// `;

// export const flexSmColumnReverse = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-direction: column-reverse;
//       flex-direction: column-reverse;
//     }
//   }
// `;

// export const flexSmFill = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex: 1 1 auto;
//       flex: 1 1 auto;
//     }
//   }
// `;

// export const flexSmGrow0 = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-positive: 0;
//       flex-grow: 0;
//     }
//   }
// `;

// export const flexSmGrow1 = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-positive: 1;
//       flex-grow: 1;
//     }
//   }
// `;

// export const flexSmNowrap = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-wrap: nowrap;
//       flex-wrap: nowrap;
//     }
//   }
// `;

// export const flexSmRow = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-direction: row;
//       flex-direction: row;
//     }
//   }
// `;

// export const flexSmRowReverse = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-direction: row-reverse;
//       flex-direction: row-reverse;
//     }
//   }
// `;

// export const flexSmShrink0 = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-negative: 0;
//       flex-shrink: 0;
//     }
//   }
// `;

// export const flexSmShrink1 = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-negative: 1;
//       flex-shrink: 1;
//     }
//   }
// `;

// export const flexSmWrap = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-wrap: wrap;
//       flex-wrap: wrap;
//     }
//   }
// `;

// export const flexSmWrapReverse = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-wrap: wrap-reverse;
//       flex-wrap: wrap-reverse;
//     }
//   }
// `;

// export const flexWrap = css`
//   -ms-flex-wrap: wrap;
//   flex-wrap: wrap;
// `;

// export const flexWrapReverse = css`
//   -ms-flex-wrap: wrap-reverse;
//   flex-wrap: wrap-reverse;
// `;

// export const flexXlColumn = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-direction: column;
//       flex-direction: column;
//     }
//   }
// `;

// export const flexXlColumnReverse = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-direction: column-reverse;
//       flex-direction: column-reverse;
//     }
//   }
// `;

// export const flexXlFill = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex: 1 1 auto;
//       flex: 1 1 auto;
//     }
//   }
// `;

// export const flexXlGrow0 = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-positive: 0;
//       flex-grow: 0;
//     }
//   }
// `;

// export const flexXlGrow1 = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-positive: 1;
//       flex-grow: 1;
//     }
//   }
// `;

// export const flexXlNowrap = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-wrap: nowrap;
//       flex-wrap: nowrap;
//     }
//   }
// `;

// export const flexXlRow = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-direction: row;
//       flex-direction: row;
//     }
//   }
// `;

// export const flexXlRowReverse = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-direction: row-reverse;
//       flex-direction: row-reverse;
//     }
//   }
// `;

// export const flexXlShrink0 = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-negative: 0;
//       flex-shrink: 0;
//     }
//   }
// `;

// export const flexXlShrink1 = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-negative: 1;
//       flex-shrink: 1;
//     }
//   }
// `;

// export const flexXlWrap = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-wrap: wrap;
//       flex-wrap: wrap;
//     }
//   }
// `;

// export const flexXlWrapReverse = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-wrap: wrap-reverse;
//       flex-wrap: wrap-reverse;
//     }
//   }
// `;

// export const floatLeft = css`
//   float: left;
// `;

// export const floatLgLeft = css`
//   @media (min-width: 992px) {
//     & {
//       float: left;
//     }
//   }
// `;

// export const floatLgNone = css`
//   @media (min-width: 992px) {
//     & {
//       float: none;
//     }
//   }
// `;

// export const floatLgRight = css`
//   @media (min-width: 992px) {
//     & {
//       float: right;
//     }
//   }
// `;

// export const floatMdLeft = css`
//   @media (min-width: 768px) {
//     & {
//       float: left;
//     }
//   }
// `;

// export const floatMdNone = css`
//   @media (min-width: 768px) {
//     & {
//       float: none;
//     }
//   }
// `;

// export const floatMdRight = css`
//   @media (min-width: 768px) {
//     & {
//       float: right;
//     }
//   }
// `;

// export const floatNone = css`
//   float: none;
// `;

// export const floatRight = css`
//   float: right;
// `;

// export const floatSmLeft = css`
//   @media (min-width: 576px) {
//     & {
//       float: left;
//     }
//   }
// `;

// export const floatSmNone = css`
//   @media (min-width: 576px) {
//     & {
//       float: none;
//     }
//   }
// `;

// export const floatSmRight = css`
//   @media (min-width: 576px) {
//     & {
//       float: right;
//     }
//   }
// `;

// export const floatXlLeft = css`
//   @media (min-width: 1200px) {
//     & {
//       float: left;
//     }
//   }
// `;

// export const floatXlNone = css`
//   @media (min-width: 1200px) {
//     & {
//       float: none;
//     }
//   }
// `;

// export const floatXlRight = css`
//   @media (min-width: 1200px) {
//     & {
//       float: right;
//     }
//   }
// `;

// export const fontItalic = css`
//   font-style: italic;
// `;

// export const fontWeightBold = css`
//   font-weight: 700;
// `;

// export const fontWeightBolder = css`
//   font-weight: bolder;
// `;

// export const fontWeightLight = css`
//   font-weight: 300;
// `;

// export const fontWeightLighter = css`
//   font-weight: lighter;
// `;

// export const fontWeightNormal = css`
//   font-weight: 400;
// `;

// export const formCheck = css`
//   position: relative;
//   display: block;
//   padding-left: 1.25rem;
// `;

// export const formCheckInput = css`
//   position: absolute;
//   margin-top: 0.3rem;
//   margin-left: -1.25rem;

//   &[disabled] ~ ${formCheckLabel}, &:disabled ~ ${formCheckLabel} {
//     color: #6c757d;
//   }

//   &${isValid} ~ ${formCheckLabel} {
//     color: #28a745;
//   }

//   &${isValid} ~ ${validFeedback}, &${isValid} ~ ${validTooltip} {
//     display: block;
//   }

//   &${isInvalid} ~ ${formCheckLabel} {
//     color: #dc3545;
//   }

//   &${isInvalid} ~ ${invalidFeedback}, &${isInvalid} ~ ${invalidTooltip} {
//     display: block;
//   }
// `;

// export const formCheckInline = css`
//   display: -ms-inline-flexbox;
//   display: inline-flex;
//   -ms-flex-align: center;
//   align-items: center;
//   padding-left: 0;
//   margin-right: 0.75rem;

//   & ${formCheckInput} {
//     position: static;
//     margin-top: 0;
//     margin-right: 0.3125rem;
//     margin-left: 0;
//   }
// `;

// export const formCheckLabel = css`
//   margin-bottom: 0;
// `;

// export const validFeedback = css`
//   display: none;
//   width: 100%;
//   margin-top: 0.25rem;
//   font-size: 80%;
//   color: #28a745;
// `;

// export const validTooltip = css`
//   position: absolute;
//   top: 100%;
//   left: 0;
//   z-index: 5;
//   display: none;
//   max-width: 100%;
//   padding: 0.25rem 0.5rem;
//   margin-top: 0.1rem;
//   font-size: 0.875rem;
//   line-height: 1.5;
//   color: #fff;
//   background-color: rgba(40, 167, 69, 0.9);
//   border-radius: 0.25rem;
// `;

// export const invalidFeedback = css`
//   display: none;
//   width: 100%;
//   margin-top: 0.25rem;
//   font-size: 80%;
//   color: #dc3545;
// `;

// export const invalidTooltip = css`
//   position: absolute;
//   top: 100%;
//   left: 0;
//   z-index: 5;
//   display: none;
//   max-width: 100%;
//   padding: 0.25rem 0.5rem;
//   margin-top: 0.1rem;
//   font-size: 0.875rem;
//   line-height: 1.5;
//   color: #fff;
//   background-color: rgba(220, 53, 69, 0.9);
//   border-radius: 0.25rem;
// `;

// export const formControl = css`
//   display: block;
//   width: 100%;
//   height: calc(1.5em + 0.75rem + 2px);
//   padding: 0.375rem 0.75rem;
//   font-size: 1rem;
//   font-weight: 400;
//   line-height: 1.5;
//   color: #495057;
//   background-color: #fff;
//   background-clip: padding-box;
//   border: 1px solid #ced4da;
//   border-radius: 0.25rem;
//   transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

//   @media (prefers-reduced-motion: reduce) {
//     & {
//       transition: none;
//     }
//   }

//   &::-ms-expand {
//     background-color: transparent;
//     border: 0;
//   }

//   &:-moz-focusring {
//     color: transparent;
//     text-shadow: 0 0 0 #495057;
//   }

//   &:focus {
//     color: #495057;
//     background-color: #fff;
//     border-color: #80bdff;
//     outline: 0;
//     box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
//   }

//   &::-webkit-input-placeholder {
//     color: #6c757d;
//     opacity: 1;
//   }

//   &::-moz-placeholder {
//     color: #6c757d;
//     opacity: 1;
//   }

//   &:-ms-input-placeholder {
//     color: #6c757d;
//     opacity: 1;
//   }

//   &::-ms-input-placeholder {
//     color: #6c757d;
//     opacity: 1;
//   }

//   &::placeholder {
//     color: #6c757d;
//     opacity: 1;
//   }

//   &:disabled,
//   &[readonly] {
//     background-color: #e9ecef;
//     opacity: 1;
//   }

//   input[type='date']&,
//   input[type='time']&,
//   input[type='datetime-local']&,
//   input[type='month']& {
//     -webkit-appearance: none;
//     -moz-appearance: none;
//     appearance: none;
//   }

//   select&:focus::-ms-value {
//     color: #495057;
//     background-color: #fff;
//   }

//   select&[size],
//   select&[multiple] {
//     height: auto;
//   }

//   textarea& {
//     height: auto;
//   }

//   &${isValid} {
//     border-color: #28a745;
//     padding-right: calc(1.5em + 0.75rem);
//     background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
//     background-repeat: no-repeat;
//     background-position: right calc(0.375em + 0.1875rem) center;
//     background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
//   }

//   &${isValid}:focus {
//     border-color: #28a745;
//     box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
//   }

//   textarea&${isValid} {
// padding-right: calc(1.5em + 0.75rem);
// background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
//   }

//   &${isInvalid} {
//     border-color: #dc3545;
//     padding-right: calc(1.5em + 0.75rem);
//     background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
//     background-repeat: no-repeat;
//     background-position: right calc(0.375em + 0.1875rem) center;
//     background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
//   }

//   &${isInvalid}:focus {
//     border-color: #dc3545;
//     box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
//   }

//   textarea&${isInvalid} {
//     padding-right: calc(1.5em + 0.75rem);
//     background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
//   }
// `;

// export const formControlFile = css`
//   display: block;
//   width: 100%;
// `;

// export const formControlLg = css`
//   height: calc(1.5em + 1rem + 2px);
//   padding: 0.5rem 1rem;
//   font-size: 1.25rem;
//   line-height: 1.5;
//   border-radius: 0.3rem;
// `;

// export const formControlSm = css`
//   height: calc(1.5em + 0.5rem + 2px);
//   padding: 0.25rem 0.5rem;
//   font-size: 0.875rem;
//   line-height: 1.5;
//   border-radius: 0.2rem;
// `;

// export const formControlPlaintext = css`
//   display: block;
//   width: 100%;
//   padding: 0.375rem 0;
//   margin-bottom: 0;
//   font-size: 1rem;
//   line-height: 1.5;
//   color: #212529;
//   background-color: transparent;
//   border: solid transparent;
//   border-width: 1px 0;

//   &${formControlSm}, &${formControlLg} {
//     padding-right: 0;
//     padding-left: 0;
//   }
// `;

// export const formControlRange = css`
//   display: block;
//   width: 100%;
// `;

// export const formGroup = css`
//   margin-bottom: 1rem;
// `;

// export const formInline = css`
//   display: -ms-flexbox;
//   display: flex;
//   -ms-flex-flow: row wrap;
//   flex-flow: row wrap;
//   -ms-flex-align: center;
//   align-items: center;

//   & ${formCheck} {
//     width: 100%;
//   }

//   @media (min-width: 576px) {
//     & label {
//       display: -ms-flexbox;
//       display: flex;
//       -ms-flex-align: center;
//       align-items: center;
//       -ms-flex-pack: center;
//       justify-content: center;
//       margin-bottom: 0;
//     }

//     & ${formGroup} {
//       display: -ms-flexbox;
//       display: flex;
//       -ms-flex: 0 0 auto;
//       flex: 0 0 auto;
//       -ms-flex-flow: row wrap;
//       flex-flow: row wrap;
//       -ms-flex-align: center;
//       align-items: center;
//       margin-bottom: 0;
//     }

//     & ${formControl} {
//       display: inline-block;
//       width: auto;
//       vertical-align: middle;
//     }

//     & ${formControlPlaintext} {
//       display: inline-block;
//     }

//     & ${inputGroup}, & ${customSelect} {
//       width: auto;
//     }

//     & ${formCheck} {
//       display: -ms-flexbox;
//       display: flex;
//       -ms-flex-align: center;
//       align-items: center;
//       -ms-flex-pack: center;
//       justify-content: center;
//       width: auto;
//       padding-left: 0;
//     }

//     & ${formCheckInput} {
//       position: relative;
//       -ms-flex-negative: 0;
//       flex-shrink: 0;
//       margin-top: 0;
//       margin-right: 0.25rem;
//       margin-left: 0;
//     }

//     & ${customControl} {
//       -ms-flex-align: center;
//       align-items: center;
//       -ms-flex-pack: center;
//       justify-content: center;
//     }

//     & ${customControlLabel} {
//       margin-bottom: 0;
//     }
//   }
// `;

// export const formRow = css`
//   display: -ms-flexbox;
//   display: flex;
//   -ms-flex-wrap: wrap;
//   flex-wrap: wrap;
//   margin-right: -5px;
//   margin-left: -5px;

//   & > ${col}, & > [class*='col-'] {
//     padding-right: 5px;
//     padding-left: 5px;
//   }
// `;

// export const formText = css`
//   display: block;
//   margin-top: 0.25rem;
// `;

// export const h25 = css`
//   height: 25%;
// `;

// export const h50 = css`
//   height: 50%;
// `;

// export const h75 = css`
//   height: 75%;
// `;

// export const h100 = css`
//   height: 100%;
// `;

// export const hAuto = css`
//   height: auto;
// `;

// export const h1 = css`
//   margin-bottom: 0.5rem;
//   font-weight: 500;
//   line-height: 1.2;

//   font-size: 2.5rem;
// `;

// export const h2 = css`
//   margin-bottom: 0.5rem;
//   font-weight: 500;
//   line-height: 1.2;

//   font-size: 2rem;
// `;

// export const h3 = css`
//   margin-bottom: 0.5rem;
//   font-weight: 500;
//   line-height: 1.2;

//   font-size: 1.75rem;
// `;

// export const h4 = css`
//   margin-bottom: 0.5rem;
//   font-weight: 500;
//   line-height: 1.2;

//   font-size: 1.5rem;
// `;

// export const h5 = css`
//   margin-bottom: 0.5rem;
//   font-weight: 500;
//   line-height: 1.2;

//   font-size: 1.25rem;
// `;

// export const h6 = css`
//   margin-bottom: 0.5rem;
//   font-weight: 500;
//   line-height: 1.2;

//   font-size: 1rem;
// `;

// export const imgFluid = css`
//   max-width: 100%;
//   height: auto;
// `;

// export const imgThumbnail = css`
//   padding: 0.25rem;
//   background-color: #fff;
//   border: 1px solid #dee2e6;
//   border-radius: 0.25rem;
//   max-width: 100%;
//   height: auto;
// `;

// export const initialism = css`
//   font-size: 90%;
//   text-transform: uppercase;
// `;

// export const inputGroupPrepend = css`
//   display: -ms-flexbox;
//   display: flex;

//   & ${btn} {
//     position: relative;
//     z-index: 2;
//   }

//   & ${btn}:focus {
//     z-index: 3;
//   }

//   &
//     ${btn}
//     + ${btn},
//     &
//     ${btn}
//     + ${inputGroupText},
//     &
//     ${inputGroupText}
//     + ${inputGroupText},
//     &
//     ${inputGroupText}
//     + ${btn} {
//     margin-left: -1px;
//   }

//   margin-right: -1px;
// `;

// export const inputGroupText = css`
//   display: -ms-flexbox;
//   display: flex;
//   -ms-flex-align: center;
//   align-items: center;
//   padding: 0.375rem 0.75rem;
//   margin-bottom: 0;
//   font-size: 1rem;
//   font-weight: 400;
//   line-height: 1.5;
//   color: #495057;
//   text-align: center;
//   white-space: nowrap;
//   background-color: #e9ecef;
//   border: 1px solid #ced4da;
//   border-radius: 0.25rem;

//   & input[type='radio'],
//   & input[type='checkbox'] {
//     margin-top: 0;
//   }
// `;

// export const inputGroupAppend = css`
//   display: -ms-flexbox;
//   display: flex;

//   & ${btn} {
//     position: relative;
//     z-index: 2;
//   }

//   & ${btn}:focus {
//     z-index: 3;
//   }

//   &
//     ${btn}
//     + ${btn},
//     &
//     ${btn}
//     + ${inputGroupText},
//     &
//     ${inputGroupText}
//     + ${inputGroupText},
//     &
//     ${inputGroupText}
//     + ${btn} {
//     margin-left: -1px;
//   }

//   margin-left: -1px;
// `;

// export const inputGroupLg = css`
//   & > ${formControl}:not(textarea),
//   & > ${customSelect} {
//     height: calc(1.5em + 1rem + 2px);
//   }

//   &
//     > ${formControl},
//     &
//     > ${customSelect},
//     &
//     > ${inputGroupPrepend}
//     > ${inputGroupText},
//     &
//     > ${inputGroupAppend}
//     > ${inputGroupText},
//     &
//     > ${inputGroupPrepend}
//     > ${btn},
//     &
//     > ${inputGroupAppend}
//     > ${btn} {
//     padding: 0.5rem 1rem;
//     font-size: 1.25rem;
//     line-height: 1.5;
//     border-radius: 0.3rem;
//   }

//   & > ${customSelect} {
//     padding-right: 1.75rem;
//   }
// `;

// export const inputGroupSm = css`
//   & > ${formControl}:not(textarea),
//   & > ${customSelect} {
//     height: calc(1.5em + 0.5rem + 2px);
//   }

//   &
//     > ${formControl},
//     &
//     > ${customSelect},
//     &
//     > ${inputGroupPrepend}
//     > ${inputGroupText},
//     &
//     > ${inputGroupAppend}
//     > ${inputGroupText},
//     &
//     > ${inputGroupPrepend}
//     > ${btn},
//     &
//     > ${inputGroupAppend}
//     > ${btn} {
//     padding: 0.25rem 0.5rem;
//     font-size: 0.875rem;
//     line-height: 1.5;
//     border-radius: 0.2rem;
//   }

//   & > ${customSelect} {
//     padding-right: 1.75rem;
//   }
// `;

// export const invisible = css`
//   visibility: hidden;
// `;

// export const jumbotron = css`
//   padding: 2rem 1rem;
//   margin-bottom: 2rem;
//   background-color: #e9ecef;
//   border-radius: 0.3rem;

//   @media (min-width: 576px) {
//     & {
//       padding: 4rem 2rem;
//     }
//   }
// `;

// export const jumbotronFluid = css`
//   padding-right: 0;
//   padding-left: 0;
//   border-radius: 0;
// `;

// export const justifyContentAround = css`
//   -ms-flex-pack: distribute;
//   justify-content: space-around;
// `;

// export const justifyContentBetween = css`
//   -ms-flex-pack: justify;
//   justify-content: space-between;
// `;

// export const justifyContentCenter = css`
//   -ms-flex-pack: center;
//   justify-content: center;
// `;

// export const justifyContentEnd = css`
//   -ms-flex-pack: end;
//   justify-content: flex-end;
// `;

// export const justifyContentLgAround = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-pack: distribute;
//       justify-content: space-around;
//     }
//   }
// `;

// export const justifyContentLgBetween = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-pack: justify;
//       justify-content: space-between;
//     }
//   }
// `;

// export const justifyContentLgCenter = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-pack: center;
//       justify-content: center;
//     }
//   }
// `;

// export const justifyContentLgEnd = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-pack: end;
//       justify-content: flex-end;
//     }
//   }
// `;

// export const justifyContentLgStart = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-pack: start;
//       justify-content: flex-start;
//     }
//   }
// `;

// export const justifyContentMdAround = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-pack: distribute;
//       justify-content: space-around;
//     }
//   }
// `;

// export const justifyContentMdBetween = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-pack: justify;
//       justify-content: space-between;
//     }
//   }
// `;

// export const justifyContentMdCenter = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-pack: center;
//       justify-content: center;
//     }
//   }
// `;

// export const justifyContentMdEnd = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-pack: end;
//       justify-content: flex-end;
//     }
//   }
// `;

// export const justifyContentMdStart = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-pack: start;
//       justify-content: flex-start;
//     }
//   }
// `;

// export const justifyContentSmAround = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-pack: distribute;
//       justify-content: space-around;
//     }
//   }
// `;

// export const justifyContentSmBetween = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-pack: justify;
//       justify-content: space-between;
//     }
//   }
// `;

// export const justifyContentSmCenter = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-pack: center;
//       justify-content: center;
//     }
//   }
// `;

// export const justifyContentSmEnd = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-pack: end;
//       justify-content: flex-end;
//     }
//   }
// `;

// export const justifyContentSmStart = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-pack: start;
//       justify-content: flex-start;
//     }
//   }
// `;

// export const justifyContentStart = css`
//   -ms-flex-pack: start;
//   justify-content: flex-start;
// `;

// export const justifyContentXlAround = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-pack: distribute;
//       justify-content: space-around;
//     }
//   }
// `;

// export const justifyContentXlBetween = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-pack: justify;
//       justify-content: space-between;
//     }
//   }
// `;

// export const justifyContentXlCenter = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-pack: center;
//       justify-content: center;
//     }
//   }
// `;

// export const justifyContentXlEnd = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-pack: end;
//       justify-content: flex-end;
//     }
//   }
// `;

// export const justifyContentXlStart = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-pack: start;
//       justify-content: flex-start;
//     }
//   }
// `;

// export const lead = css`
//   font-size: 1.25rem;
//   font-weight: 300;
// `;

// export const listGroupItem = css`
//   position: relative;
//   display: block;
//   padding: 0.75rem 1.25rem;
//   background-color: #fff;
//   border: 1px solid rgba(0, 0, 0, 0.125);

//   &:first-child {
//     border-top-left-radius: inherit;
//     border-top-right-radius: inherit;
//   }

//   &:last-child {
//     border-bottom-right-radius: inherit;
//     border-bottom-left-radius: inherit;
//   }

//   &.disabled,
//   &:disabled {
//     color: #6c757d;
//     pointer-events: none;
//     background-color: #fff;
//   }

//   &${active} {
//     z-index: 2;
//     color: #fff;
//     background-color: #007bff;
//     border-color: #007bff;
//   }

//   & + & {
//     border-top-width: 0;
//   }

//   & + &${active} {
//     margin-top: -1px;
//     border-top-width: 1px;
//   }
// `;

// export const listGroupFlush = css`
//   border-radius: 0;

//   & > ${listGroupItem} {
//     border-width: 0 0 1px;
//   }

//   & > ${listGroupItem}:last-child {
//     border-bottom-width: 0;
//   }
// `;

// export const listGroupHorizontal = css`
//   -ms-flex-direction: row;
//   flex-direction: row;

//   & > ${listGroupItem}:first-child {
//     border-bottom-left-radius: 0.25rem;
//     border-top-right-radius: 0;
//   }

//   & > ${listGroupItem}:last-child {
//     border-top-right-radius: 0.25rem;
//     border-bottom-left-radius: 0;
//   }

//   & > ${listGroupItem}${active} {
//     margin-top: 0;
//   }

//   & > ${listGroupItem} + ${listGroupItem} {
//     border-top-width: 1px;
//     border-left-width: 0;
//   }

//   & > ${listGroupItem} + ${listGroupItem}${active} {
//     margin-left: -1px;
//     border-left-width: 1px;
//   }
// `;

// export const listGroupHorizontalLg = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-direction: row;
//       flex-direction: row;
//     }

//     & > ${listGroupItem}:first-child {
//       border-bottom-left-radius: 0.25rem;
//       border-top-right-radius: 0;
//     }

//     & > ${listGroupItem}:last-child {
//       border-top-right-radius: 0.25rem;
//       border-bottom-left-radius: 0;
//     }

//     & > ${listGroupItem}${active} {
//       margin-top: 0;
//     }

//     & > ${listGroupItem} + ${listGroupItem} {
//       border-top-width: 1px;
//       border-left-width: 0;
//     }

//     & > ${listGroupItem} + ${listGroupItem}${active} {
//       margin-left: -1px;
//       border-left-width: 1px;
//     }
//   }
// `;

// export const listGroupHorizontalMd = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-direction: row;
//       flex-direction: row;
//     }

//     & > ${listGroupItem}:first-child {
//       border-bottom-left-radius: 0.25rem;
//       border-top-right-radius: 0;
//     }

//     & > ${listGroupItem}:last-child {
//       border-top-right-radius: 0.25rem;
//       border-bottom-left-radius: 0;
//     }

//     & > ${listGroupItem}${active} {
//       margin-top: 0;
//     }

//     & > ${listGroupItem} + ${listGroupItem} {
//       border-top-width: 1px;
//       border-left-width: 0;
//     }

//     & > ${listGroupItem} + ${listGroupItem}${active} {
//       margin-left: -1px;
//       border-left-width: 1px;
//     }
//   }
// `;

// export const listGroupHorizontalSm = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-direction: row;
//       flex-direction: row;
//     }

//     & > ${listGroupItem}:first-child {
//       border-bottom-left-radius: 0.25rem;
//       border-top-right-radius: 0;
//     }

//     & > ${listGroupItem}:last-child {
//       border-top-right-radius: 0.25rem;
//       border-bottom-left-radius: 0;
//     }

//     & > ${listGroupItem}${active} {
//       margin-top: 0;
//     }

//     & > ${listGroupItem} + ${listGroupItem} {
//       border-top-width: 1px;
//       border-left-width: 0;
//     }

//     & > ${listGroupItem} + ${listGroupItem}${active} {
//       margin-left: -1px;
//       border-left-width: 1px;
//     }
//   }
// `;

// export const listGroupHorizontalXl = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-direction: row;
//       flex-direction: row;
//     }

//     & > ${listGroupItem}:first-child {
//       border-bottom-left-radius: 0.25rem;
//       border-top-right-radius: 0;
//     }

//     & > ${listGroupItem}:last-child {
//       border-top-right-radius: 0.25rem;
//       border-bottom-left-radius: 0;
//     }

//     & > ${listGroupItem}${active} {
//       margin-top: 0;
//     }

//     & > ${listGroupItem} + ${listGroupItem} {
//       border-top-width: 1px;
//       border-left-width: 0;
//     }

//     & > ${listGroupItem} + ${listGroupItem}${active} {
//       margin-left: -1px;
//       border-left-width: 1px;
//     }
//   }
// `;

// export const listGroupItemAction = css`
//   width: 100%;
//   color: #495057;
//   text-align: inherit;

//   &:hover,
//   &:focus {
//     z-index: 1;
//     color: #495057;
//     text-decoration: none;
//     background-color: #f8f9fa;
//   }

//   &:active {
//     color: #212529;
//     background-color: #e9ecef;
//   }
// `;

// export const listGroupItemDanger = css`
//   color: #721c24;
//   background-color: #f5c6cb;

//   &${listGroupItemAction}:hover, &${listGroupItemAction}:focus {
//     color: #721c24;
//     background-color: #f1b0b7;
//   }

//   &${listGroupItemAction}${active} {
//     color: #fff;
//     background-color: #721c24;
//     border-color: #721c24;
//   }
// `;

// export const listGroupItemDark = css`
//   color: #1b1e21;
//   background-color: #c6c8ca;

//   &${listGroupItemAction}:hover, &${listGroupItemAction}:focus {
//     color: #1b1e21;
//     background-color: #b9bbbe;
//   }

//   &${listGroupItemAction}${active} {
//     color: #fff;
//     background-color: #1b1e21;
//     border-color: #1b1e21;
//   }
// `;

// export const listGroupItemInfo = css`
//   color: #0c5460;
//   background-color: #bee5eb;

//   &${listGroupItemAction}:hover, &${listGroupItemAction}:focus {
//     color: #0c5460;
//     background-color: #abdde5;
//   }

//   &${listGroupItemAction}${active} {
//     color: #fff;
//     background-color: #0c5460;
//     border-color: #0c5460;
//   }
// `;

// export const listGroupItemLight = css`
//   color: #818182;
//   background-color: #fdfdfe;

//   &${listGroupItemAction}:hover, &${listGroupItemAction}:focus {
//     color: #818182;
//     background-color: #ececf6;
//   }

//   &${listGroupItemAction}${active} {
//     color: #fff;
//     background-color: #818182;
//     border-color: #818182;
//   }
// `;

// export const listGroupItemPrimary = css`
//   color: #004085;
//   background-color: #b8daff;

//   &${listGroupItemAction}:hover, &${listGroupItemAction}:focus {
//     color: #004085;
//     background-color: #9fcdff;
//   }

//   &${listGroupItemAction}${active} {
//     color: #fff;
//     background-color: #004085;
//     border-color: #004085;
//   }
// `;

// export const listGroupItemSecondary = css`
//   color: #383d41;
//   background-color: #d6d8db;

//   &${listGroupItemAction}:hover, &${listGroupItemAction}:focus {
//     color: #383d41;
//     background-color: #c8cbcf;
//   }

//   &${listGroupItemAction}${active} {
//     color: #fff;
//     background-color: #383d41;
//     border-color: #383d41;
//   }
// `;

// export const listGroupItemSuccess = css`
//   color: #155724;
//   background-color: #c3e6cb;

//   &${listGroupItemAction}:hover, &${listGroupItemAction}:focus {
//     color: #155724;
//     background-color: #b1dfbb;
//   }

//   &${listGroupItemAction}${active} {
//     color: #fff;
//     background-color: #155724;
//     border-color: #155724;
//   }
// `;

// export const listGroupItemWarning = css`
//   color: #856404;
//   background-color: #ffeeba;

//   &${listGroupItemAction}:hover, &${listGroupItemAction}:focus {
//     color: #856404;
//     background-color: #ffe8a1;
//   }

//   &${listGroupItemAction}${active} {
//     color: #fff;
//     background-color: #856404;
//     border-color: #856404;
//   }
// `;

// export const listInline = css`
//   padding-left: 0;
//   list-style: none;
// `;

// export const listInlineItem = css`
//   display: inline-block;

//   &:not(:last-child) {
//     margin-right: 0.5rem;
//   }
// `;

// export const listUnstyled = css`
//   padding-left: 0;
//   list-style: none;
// `;

// export const m0 = css`
//   margin: 0;
// `;

// export const m1 = css`
//   margin: 0.25rem;
// `;

// export const m2 = css`
//   margin: 0.5rem;
// `;

// export const m3 = css`
//   margin: 1rem;
// `;

// export const m4 = css`
//   margin: 1.5rem;
// `;

// export const m5 = css`
//   margin: 3rem;
// `;

// export const mAuto = css`
//   margin: auto;
// `;

// export const mLg0 = css`
//   @media (min-width: 992px) {
//     & {
//       margin: 0;
//     }
//   }
// `;

// export const mLg1 = css`
//   @media (min-width: 992px) {
//     & {
//       margin: 0.25rem;
//     }
//   }
// `;

// export const mLg2 = css`
//   @media (min-width: 992px) {
//     & {
//       margin: 0.5rem;
//     }
//   }
// `;

// export const mLg3 = css`
//   @media (min-width: 992px) {
//     & {
//       margin: 1rem;
//     }
//   }
// `;

// export const mLg4 = css`
//   @media (min-width: 992px) {
//     & {
//       margin: 1.5rem;
//     }
//   }
// `;

// export const mLg5 = css`
//   @media (min-width: 992px) {
//     & {
//       margin: 3rem;
//     }
//   }
// `;

// export const mLgAuto = css`
//   @media (min-width: 992px) {
//     & {
//       margin: auto;
//     }
//   }
// `;

// export const mLgN1 = css`
//   @media (min-width: 992px) {
//     & {
//       margin: -0.25rem;
//     }
//   }
// `;

// export const mLgN2 = css`
//   @media (min-width: 992px) {
//     & {
//       margin: -0.5rem;
//     }
//   }
// `;

// export const mLgN3 = css`
//   @media (min-width: 992px) {
//     & {
//       margin: -1rem;
//     }
//   }
// `;

// export const mLgN4 = css`
//   @media (min-width: 992px) {
//     & {
//       margin: -1.5rem;
//     }
//   }
// `;

// export const mLgN5 = css`
//   @media (min-width: 992px) {
//     & {
//       margin: -3rem;
//     }
//   }
// `;

// export const mMd0 = css`
//   @media (min-width: 768px) {
//     & {
//       margin: 0;
//     }
//   }
// `;

// export const mMd1 = css`
//   @media (min-width: 768px) {
//     & {
//       margin: 0.25rem;
//     }
//   }
// `;

// export const mMd2 = css`
//   @media (min-width: 768px) {
//     & {
//       margin: 0.5rem;
//     }
//   }
// `;

// export const mMd3 = css`
//   @media (min-width: 768px) {
//     & {
//       margin: 1rem;
//     }
//   }
// `;

// export const mMd4 = css`
//   @media (min-width: 768px) {
//     & {
//       margin: 1.5rem;
//     }
//   }
// `;

// export const mMd5 = css`
//   @media (min-width: 768px) {
//     & {
//       margin: 3rem;
//     }
//   }
// `;

// export const mMdAuto = css`
//   @media (min-width: 768px) {
//     & {
//       margin: auto;
//     }
//   }
// `;

// export const mMdN1 = css`
//   @media (min-width: 768px) {
//     & {
//       margin: -0.25rem;
//     }
//   }
// `;

// export const mMdN2 = css`
//   @media (min-width: 768px) {
//     & {
//       margin: -0.5rem;
//     }
//   }
// `;

// export const mMdN3 = css`
//   @media (min-width: 768px) {
//     & {
//       margin: -1rem;
//     }
//   }
// `;

// export const mMdN4 = css`
//   @media (min-width: 768px) {
//     & {
//       margin: -1.5rem;
//     }
//   }
// `;

// export const mMdN5 = css`
//   @media (min-width: 768px) {
//     & {
//       margin: -3rem;
//     }
//   }
// `;

// export const mN1 = css`
//   margin: -0.25rem;
// `;

// export const mN2 = css`
//   margin: -0.5rem;
// `;

// export const mN3 = css`
//   margin: -1rem;
// `;

// export const mN4 = css`
//   margin: -1.5rem;
// `;

// export const mN5 = css`
//   margin: -3rem;
// `;

// export const mSm0 = css`
//   @media (min-width: 576px) {
//     & {
//       margin: 0;
//     }
//   }
// `;

// export const mSm1 = css`
//   @media (min-width: 576px) {
//     & {
//       margin: 0.25rem;
//     }
//   }
// `;

// export const mSm2 = css`
//   @media (min-width: 576px) {
//     & {
//       margin: 0.5rem;
//     }
//   }
// `;

// export const mSm3 = css`
//   @media (min-width: 576px) {
//     & {
//       margin: 1rem;
//     }
//   }
// `;

// export const mSm4 = css`
//   @media (min-width: 576px) {
//     & {
//       margin: 1.5rem;
//     }
//   }
// `;

// export const mSm5 = css`
//   @media (min-width: 576px) {
//     & {
//       margin: 3rem;
//     }
//   }
// `;

// export const mSmAuto = css`
//   @media (min-width: 576px) {
//     & {
//       margin: auto;
//     }
//   }
// `;

// export const mSmN1 = css`
//   @media (min-width: 576px) {
//     & {
//       margin: -0.25rem;
//     }
//   }
// `;

// export const mSmN2 = css`
//   @media (min-width: 576px) {
//     & {
//       margin: -0.5rem;
//     }
//   }
// `;

// export const mSmN3 = css`
//   @media (min-width: 576px) {
//     & {
//       margin: -1rem;
//     }
//   }
// `;

// export const mSmN4 = css`
//   @media (min-width: 576px) {
//     & {
//       margin: -1.5rem;
//     }
//   }
// `;

// export const mSmN5 = css`
//   @media (min-width: 576px) {
//     & {
//       margin: -3rem;
//     }
//   }
// `;

// export const mXl0 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin: 0;
//     }
//   }
// `;

// export const mXl1 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin: 0.25rem;
//     }
//   }
// `;

// export const mXl2 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin: 0.5rem;
//     }
//   }
// `;

// export const mXl3 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin: 1rem;
//     }
//   }
// `;

// export const mXl4 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin: 1.5rem;
//     }
//   }
// `;

// export const mXl5 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin: 3rem;
//     }
//   }
// `;

// export const mXlAuto = css`
//   @media (min-width: 1200px) {
//     & {
//       margin: auto;
//     }
//   }
// `;

// export const mXlN1 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin: -0.25rem;
//     }
//   }
// `;

// export const mXlN2 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin: -0.5rem;
//     }
//   }
// `;

// export const mXlN3 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin: -1rem;
//     }
//   }
// `;

// export const mXlN4 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin: -1.5rem;
//     }
//   }
// `;

// export const mXlN5 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin: -3rem;
//     }
//   }
// `;

// export const mark = css`
//   padding: 0.2em;
//   background-color: #fcf8e3;
// `;

// export const mb0 = css`
//   margin-bottom: 0;
// `;

// export const mb1 = css`
//   margin-bottom: 0.25rem;
// `;

// export const mb2 = css`
//   margin-bottom: 0.5rem;
// `;

// export const mb3 = css`
//   margin-bottom: 1rem;
// `;

// export const mb4 = css`
//   margin-bottom: 1.5rem;
// `;

// export const mb5 = css`
//   margin-bottom: 3rem;
// `;

// export const mbAuto = css`
//   margin-bottom: auto;
// `;

// export const mbLg0 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-bottom: 0;
//     }
//   }
// `;

// export const mbLg1 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-bottom: 0.25rem;
//     }
//   }
// `;

// export const mbLg2 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-bottom: 0.5rem;
//     }
//   }
// `;

// export const mbLg3 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-bottom: 1rem;
//     }
//   }
// `;

// export const mbLg4 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-bottom: 1.5rem;
//     }
//   }
// `;

// export const mbLg5 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-bottom: 3rem;
//     }
//   }
// `;

// export const mbLgAuto = css`
//   @media (min-width: 992px) {
//     & {
//       margin-bottom: auto;
//     }
//   }
// `;

// export const mbLgN1 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-bottom: -0.25rem;
//     }
//   }
// `;

// export const mbLgN2 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-bottom: -0.5rem;
//     }
//   }
// `;

// export const mbLgN3 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-bottom: -1rem;
//     }
//   }
// `;

// export const mbLgN4 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-bottom: -1.5rem;
//     }
//   }
// `;

// export const mbLgN5 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-bottom: -3rem;
//     }
//   }
// `;

// export const mbMd0 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-bottom: 0;
//     }
//   }
// `;

// export const mbMd1 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-bottom: 0.25rem;
//     }
//   }
// `;

// export const mbMd2 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-bottom: 0.5rem;
//     }
//   }
// `;

// export const mbMd3 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-bottom: 1rem;
//     }
//   }
// `;

// export const mbMd4 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-bottom: 1.5rem;
//     }
//   }
// `;

// export const mbMd5 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-bottom: 3rem;
//     }
//   }
// `;

// export const mbMdAuto = css`
//   @media (min-width: 768px) {
//     & {
//       margin-bottom: auto;
//     }
//   }
// `;

// export const mbMdN1 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-bottom: -0.25rem;
//     }
//   }
// `;

// export const mbMdN2 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-bottom: -0.5rem;
//     }
//   }
// `;

// export const mbMdN3 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-bottom: -1rem;
//     }
//   }
// `;

// export const mbMdN4 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-bottom: -1.5rem;
//     }
//   }
// `;

// export const mbMdN5 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-bottom: -3rem;
//     }
//   }
// `;

// export const mbN1 = css`
//   margin-bottom: -0.25rem;
// `;

// export const mbN2 = css`
//   margin-bottom: -0.5rem;
// `;

// export const mbN3 = css`
//   margin-bottom: -1rem;
// `;

// export const mbN4 = css`
//   margin-bottom: -1.5rem;
// `;

// export const mbN5 = css`
//   margin-bottom: -3rem;
// `;

// export const mbSm0 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-bottom: 0;
//     }
//   }
// `;

// export const mbSm1 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-bottom: 0.25rem;
//     }
//   }
// `;

// export const mbSm2 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-bottom: 0.5rem;
//     }
//   }
// `;

// export const mbSm3 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-bottom: 1rem;
//     }
//   }
// `;

// export const mbSm4 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-bottom: 1.5rem;
//     }
//   }
// `;

// export const mbSm5 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-bottom: 3rem;
//     }
//   }
// `;

// export const mbSmAuto = css`
//   @media (min-width: 576px) {
//     & {
//       margin-bottom: auto;
//     }
//   }
// `;

// export const mbSmN1 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-bottom: -0.25rem;
//     }
//   }
// `;

// export const mbSmN2 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-bottom: -0.5rem;
//     }
//   }
// `;

// export const mbSmN3 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-bottom: -1rem;
//     }
//   }
// `;

// export const mbSmN4 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-bottom: -1.5rem;
//     }
//   }
// `;

// export const mbSmN5 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-bottom: -3rem;
//     }
//   }
// `;

// export const mbXl0 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-bottom: 0;
//     }
//   }
// `;

// export const mbXl1 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-bottom: 0.25rem;
//     }
//   }
// `;

// export const mbXl2 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-bottom: 0.5rem;
//     }
//   }
// `;

// export const mbXl3 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-bottom: 1rem;
//     }
//   }
// `;

// export const mbXl4 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-bottom: 1.5rem;
//     }
//   }
// `;

// export const mbXl5 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-bottom: 3rem;
//     }
//   }
// `;

// export const mbXlAuto = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-bottom: auto;
//     }
//   }
// `;

// export const mbXlN1 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-bottom: -0.25rem;
//     }
//   }
// `;

// export const mbXlN2 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-bottom: -0.5rem;
//     }
//   }
// `;

// export const mbXlN3 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-bottom: -1rem;
//     }
//   }
// `;

// export const mbXlN4 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-bottom: -1.5rem;
//     }
//   }
// `;

// export const mbXlN5 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-bottom: -3rem;
//     }
//   }
// `;

// export const media = css`
//   display: -ms-flexbox;
//   display: flex;
//   -ms-flex-align: start;
//   align-items: flex-start;
// `;

// export const mediaBody = css`
//   -ms-flex: 1;
//   flex: 1;
// `;

// export const mh100 = css`
//   max-height: 100%;
// `;

// export const minVh100 = css`
//   min-height: 100vh;
// `;

// export const minVw100 = css`
//   min-width: 100vw;
// `;

// export const ml0 = css`
//   margin-left: 0;
// `;

// export const ml1 = css`
//   margin-left: 0.25rem;
// `;

// export const ml2 = css`
//   margin-left: 0.5rem;
// `;

// export const ml3 = css`
//   margin-left: 1rem;
// `;

// export const ml4 = css`
//   margin-left: 1.5rem;
// `;

// export const ml5 = css`
//   margin-left: 3rem;
// `;

// export const mlAuto = css`
//   margin-left: auto;
// `;

// export const mlLg0 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-left: 0;
//     }
//   }
// `;

// export const mlLg1 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-left: 0.25rem;
//     }
//   }
// `;

// export const mlLg2 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-left: 0.5rem;
//     }
//   }
// `;

// export const mlLg3 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-left: 1rem;
//     }
//   }
// `;

// export const mlLg4 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-left: 1.5rem;
//     }
//   }
// `;

// export const mlLg5 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-left: 3rem;
//     }
//   }
// `;

// export const mlLgAuto = css`
//   @media (min-width: 992px) {
//     & {
//       margin-left: auto;
//     }
//   }
// `;

// export const mlLgN1 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-left: -0.25rem;
//     }
//   }
// `;

// export const mlLgN2 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-left: -0.5rem;
//     }
//   }
// `;

// export const mlLgN3 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-left: -1rem;
//     }
//   }
// `;

// export const mlLgN4 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-left: -1.5rem;
//     }
//   }
// `;

// export const mlLgN5 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-left: -3rem;
//     }
//   }
// `;

// export const mlMd0 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-left: 0;
//     }
//   }
// `;

// export const mlMd1 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-left: 0.25rem;
//     }
//   }
// `;

// export const mlMd2 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-left: 0.5rem;
//     }
//   }
// `;

// export const mlMd3 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-left: 1rem;
//     }
//   }
// `;

// export const mlMd4 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-left: 1.5rem;
//     }
//   }
// `;

// export const mlMd5 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-left: 3rem;
//     }
//   }
// `;

// export const mlMdAuto = css`
//   @media (min-width: 768px) {
//     & {
//       margin-left: auto;
//     }
//   }
// `;

// export const mlMdN1 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-left: -0.25rem;
//     }
//   }
// `;

// export const mlMdN2 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-left: -0.5rem;
//     }
//   }
// `;

// export const mlMdN3 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-left: -1rem;
//     }
//   }
// `;

// export const mlMdN4 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-left: -1.5rem;
//     }
//   }
// `;

// export const mlMdN5 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-left: -3rem;
//     }
//   }
// `;

// export const mlN1 = css`
//   margin-left: -0.25rem;
// `;

// export const mlN2 = css`
//   margin-left: -0.5rem;
// `;

// export const mlN3 = css`
//   margin-left: -1rem;
// `;

// export const mlN4 = css`
//   margin-left: -1.5rem;
// `;

// export const mlN5 = css`
//   margin-left: -3rem;
// `;

// export const mlSm0 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-left: 0;
//     }
//   }
// `;

// export const mlSm1 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-left: 0.25rem;
//     }
//   }
// `;

// export const mlSm2 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-left: 0.5rem;
//     }
//   }
// `;

// export const mlSm3 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-left: 1rem;
//     }
//   }
// `;

// export const mlSm4 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-left: 1.5rem;
//     }
//   }
// `;

// export const mlSm5 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-left: 3rem;
//     }
//   }
// `;

// export const mlSmAuto = css`
//   @media (min-width: 576px) {
//     & {
//       margin-left: auto;
//     }
//   }
// `;

// export const mlSmN1 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-left: -0.25rem;
//     }
//   }
// `;

// export const mlSmN2 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-left: -0.5rem;
//     }
//   }
// `;

// export const mlSmN3 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-left: -1rem;
//     }
//   }
// `;

// export const mlSmN4 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-left: -1.5rem;
//     }
//   }
// `;

// export const mlSmN5 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-left: -3rem;
//     }
//   }
// `;

// export const mlXl0 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-left: 0;
//     }
//   }
// `;

// export const mlXl1 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-left: 0.25rem;
//     }
//   }
// `;

// export const mlXl2 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-left: 0.5rem;
//     }
//   }
// `;

// export const mlXl3 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-left: 1rem;
//     }
//   }
// `;

// export const mlXl4 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-left: 1.5rem;
//     }
//   }
// `;

// export const mlXl5 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-left: 3rem;
//     }
//   }
// `;

// export const mlXlAuto = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-left: auto;
//     }
//   }
// `;

// export const mlXlN1 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-left: -0.25rem;
//     }
//   }
// `;

// export const mlXlN2 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-left: -0.5rem;
//     }
//   }
// `;

// export const mlXlN3 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-left: -1rem;
//     }
//   }
// `;

// export const mlXlN4 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-left: -1.5rem;
//     }
//   }
// `;

// export const mlXlN5 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-left: -3rem;
//     }
//   }
// `;

// export const modalDialog = css`
//   position: relative;
//   width: auto;
//   margin: 0.5rem;
//   pointer-events: none;

//   @media (min-width: 576px) {
//     & {
//       max-width: 500px;
//       margin: 1.75rem auto;
//     }
//   }
// `;

// export const modal = css`
//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: 1050;
//   display: none;
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
//   outline: 0;

//   &${fade} ${modalDialog} {
//     transition: -webkit-transform 0.3s ease-out;
//     transition: transform 0.3s ease-out;
//     transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
//     -webkit-transform: translate(0, -50px);
//     transform: translate(0, -50px);
//   }

//   @media (prefers-reduced-motion: reduce) {
//     &${fade} ${modalDialog} {
//       transition: none;
//     }
//   }

//   &${show} ${modalDialog} {
//     -webkit-transform: none;
//     transform: none;
//   }

//   &.modal-static ${modalDialog} {
//     -webkit-transform: scale(1.02);
//     transform: scale(1.02);
//   }
// `;

// export const modalBackdrop = css`
//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: 1040;
//   width: 100vw;
//   height: 100vh;
//   background-color: #000;

//   &${fade} {
//     opacity: 0;
//   }

//   &${show} {
//     opacity: 0.5;
//   }
// `;

// export const modalBody = css`
//   position: relative;
//   -ms-flex: 1 1 auto;
//   flex: 1 1 auto;
//   padding: 1rem;
// `;

// export const modalContent = css`
//   position: relative;
//   display: -ms-flexbox;
//   display: flex;
//   -ms-flex-direction: column;
//   flex-direction: column;
//   width: 100%;
//   pointer-events: auto;
//   background-color: #fff;
//   background-clip: padding-box;
//   border: 1px solid rgba(0, 0, 0, 0.2);
//   border-radius: 0.3rem;
//   outline: 0;
// `;

// export const modalDialogScrollable = css`
//   display: -ms-flexbox;
//   display: flex;
//   max-height: calc(100% - 1rem);

//   & ${modalContent} {
//     max-height: calc(100vh - 1rem);
//     overflow: hidden;
//   }

//   & ${modalHeader}, & ${modalFooter} {
//     -ms-flex-negative: 0;
//     flex-shrink: 0;
//   }

//   & ${modalBody} {
//     overflow-y: auto;
//   }

//   @media (min-width: 576px) {
//     & {
//       max-height: calc(100% - 3.5rem);
//     }

//     & ${modalContent} {
//       max-height: calc(100vh - 3.5rem);
//     }
//   }
// `;

// export const modalDialogCentered = css`
//   display: -ms-flexbox;
//   display: flex;
//   -ms-flex-align: center;
//   align-items: center;
//   min-height: calc(100% - 1rem);

//   &::before {
//     display: block;
//     height: calc(100vh - 1rem);
//     height: -webkit-min-content;
//     height: -moz-min-content;
//     height: min-content;
//     content: '';
//   }

//   &${modalDialogScrollable} {
//     -ms-flex-direction: column;
//     flex-direction: column;
//     -ms-flex-pack: center;
//     justify-content: center;
//     height: 100%;
//   }

//   &${modalDialogScrollable} ${modalContent} {
//     max-height: none;
//   }

//   &${modalDialogScrollable}::before {
//     content: none;
//   }

//   @media (min-width: 576px) {
//     & {
//       min-height: calc(100% - 3.5rem);
//     }

//     &::before {
//       height: calc(100vh - 3.5rem);
//       height: -webkit-min-content;
//       height: -moz-min-content;
//       height: min-content;
//     }
//   }
// `;

// export const modalHeader = css`
//   display: -ms-flexbox;
//   display: flex;
//   -ms-flex-align: start;
//   align-items: flex-start;
//   -ms-flex-pack: justify;
//   justify-content: space-between;
//   padding: 1rem 1rem;
//   border-bottom: 1px solid #dee2e6;
//   border-top-left-radius: calc(0.3rem - 1px);
//   border-top-right-radius: calc(0.3rem - 1px);

//   & ${close} {
//     padding: 1rem 1rem;
//     margin: -1rem -1rem -1rem auto;
//   }
// `;

// export const modalFooter = css`
//   display: -ms-flexbox;
//   display: flex;
//   -ms-flex-wrap: wrap;
//   flex-wrap: wrap;
//   -ms-flex-align: center;
//   align-items: center;
//   -ms-flex-pack: end;
//   justify-content: flex-end;
//   padding: 0.75rem;
//   border-top: 1px solid #dee2e6;
//   border-bottom-right-radius: calc(0.3rem - 1px);
//   border-bottom-left-radius: calc(0.3rem - 1px);

//   & > * {
//     margin: 0.25rem;
//   }
// `;

// export const modalLg = css`
//   @media (min-width: 992px) {
//     & {
//       max-width: 800px;
//     }
//   }
// `;

// export const modalOpen = css`
//   overflow: hidden;

//   & ${modal} {
//     overflow-x: hidden;
//     overflow-y: auto;
//   }
// `;

// export const modalScrollbarMeasure = css`
//   position: absolute;
//   top: -9999px;
//   width: 50px;
//   height: 50px;
//   overflow: scroll;
// `;

// export const modalSm = css`
//   @media (min-width: 576px) {
//     & {
//       max-width: 300px;
//     }
//   }
// `;

// export const modalTitle = css`
//   margin-bottom: 0;
//   line-height: 1.5;
// `;

// export const modalXl = css`
//   @media (min-width: 992px) {
//     & {
//       max-width: 800px;
//     }
//   }

//   @media (min-width: 1200px) {
//     & {
//       max-width: 1140px;
//     }
//   }
// `;

// export const mr0 = css`
//   margin-right: 0;
// `;

// export const mr1 = css`
//   margin-right: 0.25rem;
// `;

// export const mr2 = css`
//   margin-right: 0.5rem;
// `;

// export const mr3 = css`
//   margin-right: 1rem;
// `;

// export const mr4 = css`
//   margin-right: 1.5rem;
// `;

// export const mr5 = css`
//   margin-right: 3rem;
// `;

// export const mrAuto = css`
//   margin-right: auto;
// `;

// export const mrLg0 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-right: 0;
//     }
//   }
// `;

// export const mrLg1 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-right: 0.25rem;
//     }
//   }
// `;

// export const mrLg2 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-right: 0.5rem;
//     }
//   }
// `;

// export const mrLg3 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-right: 1rem;
//     }
//   }
// `;

// export const mrLg4 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-right: 1.5rem;
//     }
//   }
// `;

// export const mrLg5 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-right: 3rem;
//     }
//   }
// `;

// export const mrLgAuto = css`
//   @media (min-width: 992px) {
//     & {
//       margin-right: auto;
//     }
//   }
// `;

// export const mrLgN1 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-right: -0.25rem;
//     }
//   }
// `;

// export const mrLgN2 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-right: -0.5rem;
//     }
//   }
// `;

// export const mrLgN3 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-right: -1rem;
//     }
//   }
// `;

// export const mrLgN4 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-right: -1.5rem;
//     }
//   }
// `;

// export const mrLgN5 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-right: -3rem;
//     }
//   }
// `;

// export const mrMd0 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-right: 0;
//     }
//   }
// `;

// export const mrMd1 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-right: 0.25rem;
//     }
//   }
// `;

// export const mrMd2 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-right: 0.5rem;
//     }
//   }
// `;

// export const mrMd3 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-right: 1rem;
//     }
//   }
// `;

// export const mrMd4 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-right: 1.5rem;
//     }
//   }
// `;

// export const mrMd5 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-right: 3rem;
//     }
//   }
// `;

// export const mrMdAuto = css`
//   @media (min-width: 768px) {
//     & {
//       margin-right: auto;
//     }
//   }
// `;

// export const mrMdN1 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-right: -0.25rem;
//     }
//   }
// `;

// export const mrMdN2 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-right: -0.5rem;
//     }
//   }
// `;

// export const mrMdN3 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-right: -1rem;
//     }
//   }
// `;

// export const mrMdN4 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-right: -1.5rem;
//     }
//   }
// `;

// export const mrMdN5 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-right: -3rem;
//     }
//   }
// `;

// export const mrN1 = css`
//   margin-right: -0.25rem;
// `;

// export const mrN2 = css`
//   margin-right: -0.5rem;
// `;

// export const mrN3 = css`
//   margin-right: -1rem;
// `;

// export const mrN4 = css`
//   margin-right: -1.5rem;
// `;

// export const mrN5 = css`
//   margin-right: -3rem;
// `;

// export const mrSm0 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-right: 0;
//     }
//   }
// `;

// export const mrSm1 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-right: 0.25rem;
//     }
//   }
// `;

// export const mrSm2 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-right: 0.5rem;
//     }
//   }
// `;

// export const mrSm3 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-right: 1rem;
//     }
//   }
// `;

// export const mrSm4 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-right: 1.5rem;
//     }
//   }
// `;

// export const mrSm5 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-right: 3rem;
//     }
//   }
// `;

// export const mrSmAuto = css`
//   @media (min-width: 576px) {
//     & {
//       margin-right: auto;
//     }
//   }
// `;

// export const mrSmN1 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-right: -0.25rem;
//     }
//   }
// `;

// export const mrSmN2 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-right: -0.5rem;
//     }
//   }
// `;

// export const mrSmN3 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-right: -1rem;
//     }
//   }
// `;

// export const mrSmN4 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-right: -1.5rem;
//     }
//   }
// `;

// export const mrSmN5 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-right: -3rem;
//     }
//   }
// `;

// export const mrXl0 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-right: 0;
//     }
//   }
// `;

// export const mrXl1 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-right: 0.25rem;
//     }
//   }
// `;

// export const mrXl2 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-right: 0.5rem;
//     }
//   }
// `;

// export const mrXl3 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-right: 1rem;
//     }
//   }
// `;

// export const mrXl4 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-right: 1.5rem;
//     }
//   }
// `;

// export const mrXl5 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-right: 3rem;
//     }
//   }
// `;

// export const mrXlAuto = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-right: auto;
//     }
//   }
// `;

// export const mrXlN1 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-right: -0.25rem;
//     }
//   }
// `;

// export const mrXlN2 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-right: -0.5rem;
//     }
//   }
// `;

// export const mrXlN3 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-right: -1rem;
//     }
//   }
// `;

// export const mrXlN4 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-right: -1.5rem;
//     }
//   }
// `;

// export const mrXlN5 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-right: -3rem;
//     }
//   }
// `;

// export const mt0 = css`
//   margin-top: 0;
// `;

// export const mt1 = css`
//   margin-top: 0.25rem;
// `;

// export const mt2 = css`
//   margin-top: 0.5rem;
// `;

// export const mt3 = css`
//   margin-top: 1rem;
// `;

// export const mt4 = css`
//   margin-top: 1.5rem;
// `;

// export const mt5 = css`
//   margin-top: 3rem;
// `;

// export const mtAuto = css`
//   margin-top: auto;
// `;

// export const mtLg0 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-top: 0;
//     }
//   }
// `;

// export const mtLg1 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-top: 0.25rem;
//     }
//   }
// `;

// export const mtLg2 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-top: 0.5rem;
//     }
//   }
// `;

// export const mtLg3 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-top: 1rem;
//     }
//   }
// `;

// export const mtLg4 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-top: 1.5rem;
//     }
//   }
// `;

// export const mtLg5 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-top: 3rem;
//     }
//   }
// `;

// export const mtLgAuto = css`
//   @media (min-width: 992px) {
//     & {
//       margin-top: auto;
//     }
//   }
// `;

// export const mtLgN1 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-top: -0.25rem;
//     }
//   }
// `;

// export const mtLgN2 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-top: -0.5rem;
//     }
//   }
// `;

// export const mtLgN3 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-top: -1rem;
//     }
//   }
// `;

// export const mtLgN4 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-top: -1.5rem;
//     }
//   }
// `;

// export const mtLgN5 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-top: -3rem;
//     }
//   }
// `;

// export const mtMd0 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-top: 0;
//     }
//   }
// `;

// export const mtMd1 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-top: 0.25rem;
//     }
//   }
// `;

// export const mtMd2 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-top: 0.5rem;
//     }
//   }
// `;

// export const mtMd3 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-top: 1rem;
//     }
//   }
// `;

// export const mtMd4 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-top: 1.5rem;
//     }
//   }
// `;

// export const mtMd5 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-top: 3rem;
//     }
//   }
// `;

// export const mtMdAuto = css`
//   @media (min-width: 768px) {
//     & {
//       margin-top: auto;
//     }
//   }
// `;

// export const mtMdN1 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-top: -0.25rem;
//     }
//   }
// `;

// export const mtMdN2 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-top: -0.5rem;
//     }
//   }
// `;

// export const mtMdN3 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-top: -1rem;
//     }
//   }
// `;

// export const mtMdN4 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-top: -1.5rem;
//     }
//   }
// `;

// export const mtMdN5 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-top: -3rem;
//     }
//   }
// `;

// export const mtN1 = css`
//   margin-top: -0.25rem;
// `;

// export const mtN2 = css`
//   margin-top: -0.5rem;
// `;

// export const mtN3 = css`
//   margin-top: -1rem;
// `;

// export const mtN4 = css`
//   margin-top: -1.5rem;
// `;

// export const mtN5 = css`
//   margin-top: -3rem;
// `;

// export const mtSm0 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-top: 0;
//     }
//   }
// `;

// export const mtSm1 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-top: 0.25rem;
//     }
//   }
// `;

// export const mtSm2 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-top: 0.5rem;
//     }
//   }
// `;

// export const mtSm3 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-top: 1rem;
//     }
//   }
// `;

// export const mtSm4 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-top: 1.5rem;
//     }
//   }
// `;

// export const mtSm5 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-top: 3rem;
//     }
//   }
// `;

// export const mtSmAuto = css`
//   @media (min-width: 576px) {
//     & {
//       margin-top: auto;
//     }
//   }
// `;

// export const mtSmN1 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-top: -0.25rem;
//     }
//   }
// `;

// export const mtSmN2 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-top: -0.5rem;
//     }
//   }
// `;

// export const mtSmN3 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-top: -1rem;
//     }
//   }
// `;

// export const mtSmN4 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-top: -1.5rem;
//     }
//   }
// `;

// export const mtSmN5 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-top: -3rem;
//     }
//   }
// `;

// export const mtXl0 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-top: 0;
//     }
//   }
// `;

// export const mtXl1 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-top: 0.25rem;
//     }
//   }
// `;

// export const mtXl2 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-top: 0.5rem;
//     }
//   }
// `;

// export const mtXl3 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-top: 1rem;
//     }
//   }
// `;

// export const mtXl4 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-top: 1.5rem;
//     }
//   }
// `;

// export const mtXl5 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-top: 3rem;
//     }
//   }
// `;

// export const mtXlAuto = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-top: auto;
//     }
//   }
// `;

// export const mtXlN1 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-top: -0.25rem;
//     }
//   }
// `;

// export const mtXlN2 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-top: -0.5rem;
//     }
//   }
// `;

// export const mtXlN3 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-top: -1rem;
//     }
//   }
// `;

// export const mtXlN4 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-top: -1.5rem;
//     }
//   }
// `;

// export const mtXlN5 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-top: -3rem;
//     }
//   }
// `;

// export const mw100 = css`
//   max-width: 100%;
// `;

// export const mx0 = css`
//   margin-right: 0;

//   margin-left: 0;
// `;

// export const mx1 = css`
//   margin-right: 0.25rem;

//   margin-left: 0.25rem;
// `;

// export const mx2 = css`
//   margin-right: 0.5rem;

//   margin-left: 0.5rem;
// `;

// export const mx3 = css`
//   margin-right: 1rem;

//   margin-left: 1rem;
// `;

// export const mx4 = css`
//   margin-right: 1.5rem;

//   margin-left: 1.5rem;
// `;

// export const mx5 = css`
//   margin-right: 3rem;

//   margin-left: 3rem;
// `;

// export const mxAuto = css`
//   margin-right: auto;

//   margin-left: auto;
// `;

// export const mxLg0 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-right: 0;
//     }

//     & {
//       margin-left: 0;
//     }
//   }
// `;

// export const mxLg1 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-right: 0.25rem;
//     }

//     & {
//       margin-left: 0.25rem;
//     }
//   }
// `;

// export const mxLg2 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-right: 0.5rem;
//     }

//     & {
//       margin-left: 0.5rem;
//     }
//   }
// `;

// export const mxLg3 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-right: 1rem;
//     }

//     & {
//       margin-left: 1rem;
//     }
//   }
// `;

// export const mxLg4 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-right: 1.5rem;
//     }

//     & {
//       margin-left: 1.5rem;
//     }
//   }
// `;

// export const mxLg5 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-right: 3rem;
//     }

//     & {
//       margin-left: 3rem;
//     }
//   }
// `;

// export const mxLgAuto = css`
//   @media (min-width: 992px) {
//     & {
//       margin-right: auto;
//     }

//     & {
//       margin-left: auto;
//     }
//   }
// `;

// export const mxLgN1 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-right: -0.25rem;
//     }

//     & {
//       margin-left: -0.25rem;
//     }
//   }
// `;

// export const mxLgN2 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-right: -0.5rem;
//     }

//     & {
//       margin-left: -0.5rem;
//     }
//   }
// `;

// export const mxLgN3 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-right: -1rem;
//     }

//     & {
//       margin-left: -1rem;
//     }
//   }
// `;

// export const mxLgN4 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-right: -1.5rem;
//     }

//     & {
//       margin-left: -1.5rem;
//     }
//   }
// `;

// export const mxLgN5 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-right: -3rem;
//     }

//     & {
//       margin-left: -3rem;
//     }
//   }
// `;

// export const mxMd0 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-right: 0;
//     }

//     & {
//       margin-left: 0;
//     }
//   }
// `;

// export const mxMd1 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-right: 0.25rem;
//     }

//     & {
//       margin-left: 0.25rem;
//     }
//   }
// `;

// export const mxMd2 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-right: 0.5rem;
//     }

//     & {
//       margin-left: 0.5rem;
//     }
//   }
// `;

// export const mxMd3 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-right: 1rem;
//     }

//     & {
//       margin-left: 1rem;
//     }
//   }
// `;

// export const mxMd4 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-right: 1.5rem;
//     }

//     & {
//       margin-left: 1.5rem;
//     }
//   }
// `;

// export const mxMd5 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-right: 3rem;
//     }

//     & {
//       margin-left: 3rem;
//     }
//   }
// `;

// export const mxMdAuto = css`
//   @media (min-width: 768px) {
//     & {
//       margin-right: auto;
//     }

//     & {
//       margin-left: auto;
//     }
//   }
// `;

// export const mxMdN1 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-right: -0.25rem;
//     }

//     & {
//       margin-left: -0.25rem;
//     }
//   }
// `;

// export const mxMdN2 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-right: -0.5rem;
//     }

//     & {
//       margin-left: -0.5rem;
//     }
//   }
// `;

// export const mxMdN3 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-right: -1rem;
//     }

//     & {
//       margin-left: -1rem;
//     }
//   }
// `;

// export const mxMdN4 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-right: -1.5rem;
//     }

//     & {
//       margin-left: -1.5rem;
//     }
//   }
// `;

// export const mxMdN5 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-right: -3rem;
//     }

//     & {
//       margin-left: -3rem;
//     }
//   }
// `;

// export const mxN1 = css`
//   margin-right: -0.25rem;

//   margin-left: -0.25rem;
// `;

// export const mxN2 = css`
//   margin-right: -0.5rem;

//   margin-left: -0.5rem;
// `;

// export const mxN3 = css`
//   margin-right: -1rem;

//   margin-left: -1rem;
// `;

// export const mxN4 = css`
//   margin-right: -1.5rem;

//   margin-left: -1.5rem;
// `;

// export const mxN5 = css`
//   margin-right: -3rem;

//   margin-left: -3rem;
// `;

// export const mxSm0 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-right: 0;
//     }

//     & {
//       margin-left: 0;
//     }
//   }
// `;

// export const mxSm1 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-right: 0.25rem;
//     }

//     & {
//       margin-left: 0.25rem;
//     }
//   }
// `;

// export const mxSm2 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-right: 0.5rem;
//     }

//     & {
//       margin-left: 0.5rem;
//     }
//   }
// `;

// export const mxSm3 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-right: 1rem;
//     }

//     & {
//       margin-left: 1rem;
//     }
//   }
// `;

// export const mxSm4 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-right: 1.5rem;
//     }

//     & {
//       margin-left: 1.5rem;
//     }
//   }
// `;

// export const mxSm5 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-right: 3rem;
//     }

//     & {
//       margin-left: 3rem;
//     }
//   }
// `;

// export const mxSmAuto = css`
//   @media (min-width: 576px) {
//     & {
//       margin-right: auto;
//     }

//     & {
//       margin-left: auto;
//     }
//   }
// `;

// export const mxSmN1 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-right: -0.25rem;
//     }

//     & {
//       margin-left: -0.25rem;
//     }
//   }
// `;

// export const mxSmN2 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-right: -0.5rem;
//     }

//     & {
//       margin-left: -0.5rem;
//     }
//   }
// `;

// export const mxSmN3 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-right: -1rem;
//     }

//     & {
//       margin-left: -1rem;
//     }
//   }
// `;

// export const mxSmN4 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-right: -1.5rem;
//     }

//     & {
//       margin-left: -1.5rem;
//     }
//   }
// `;

// export const mxSmN5 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-right: -3rem;
//     }

//     & {
//       margin-left: -3rem;
//     }
//   }
// `;

// export const mxXl0 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-right: 0;
//     }

//     & {
//       margin-left: 0;
//     }
//   }
// `;

// export const mxXl1 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-right: 0.25rem;
//     }

//     & {
//       margin-left: 0.25rem;
//     }
//   }
// `;

// export const mxXl2 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-right: 0.5rem;
//     }

//     & {
//       margin-left: 0.5rem;
//     }
//   }
// `;

// export const mxXl3 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-right: 1rem;
//     }

//     & {
//       margin-left: 1rem;
//     }
//   }
// `;

// export const mxXl4 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-right: 1.5rem;
//     }

//     & {
//       margin-left: 1.5rem;
//     }
//   }
// `;

// export const mxXl5 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-right: 3rem;
//     }

//     & {
//       margin-left: 3rem;
//     }
//   }
// `;

// export const mxXlAuto = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-right: auto;
//     }

//     & {
//       margin-left: auto;
//     }
//   }
// `;

// export const mxXlN1 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-right: -0.25rem;
//     }

//     & {
//       margin-left: -0.25rem;
//     }
//   }
// `;

// export const mxXlN2 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-right: -0.5rem;
//     }

//     & {
//       margin-left: -0.5rem;
//     }
//   }
// `;

// export const mxXlN3 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-right: -1rem;
//     }

//     & {
//       margin-left: -1rem;
//     }
//   }
// `;

// export const mxXlN4 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-right: -1.5rem;
//     }

//     & {
//       margin-left: -1.5rem;
//     }
//   }
// `;

// export const mxXlN5 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-right: -3rem;
//     }

//     & {
//       margin-left: -3rem;
//     }
//   }
// `;

// export const my0 = css`
//   margin-top: 0;

//   margin-bottom: 0;
// `;

// export const my1 = css`
//   margin-top: 0.25rem;

//   margin-bottom: 0.25rem;
// `;

// export const my2 = css`
//   margin-top: 0.5rem;

//   margin-bottom: 0.5rem;
// `;

// export const my3 = css`
//   margin-top: 1rem;

//   margin-bottom: 1rem;
// `;

// export const my4 = css`
//   margin-top: 1.5rem;

//   margin-bottom: 1.5rem;
// `;

// export const my5 = css`
//   margin-top: 3rem;

//   margin-bottom: 3rem;
// `;

// export const myAuto = css`
//   margin-top: auto;

//   margin-bottom: auto;
// `;

// export const myLg0 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-top: 0;
//     }

//     & {
//       margin-bottom: 0;
//     }
//   }
// `;

// export const myLg1 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-top: 0.25rem;
//     }

//     & {
//       margin-bottom: 0.25rem;
//     }
//   }
// `;

// export const myLg2 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-top: 0.5rem;
//     }

//     & {
//       margin-bottom: 0.5rem;
//     }
//   }
// `;

// export const myLg3 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-top: 1rem;
//     }

//     & {
//       margin-bottom: 1rem;
//     }
//   }
// `;

// export const myLg4 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-top: 1.5rem;
//     }

//     & {
//       margin-bottom: 1.5rem;
//     }
//   }
// `;

// export const myLg5 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-top: 3rem;
//     }

//     & {
//       margin-bottom: 3rem;
//     }
//   }
// `;

// export const myLgAuto = css`
//   @media (min-width: 992px) {
//     & {
//       margin-top: auto;
//     }

//     & {
//       margin-bottom: auto;
//     }
//   }
// `;

// export const myLgN1 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-top: -0.25rem;
//     }

//     & {
//       margin-bottom: -0.25rem;
//     }
//   }
// `;

// export const myLgN2 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-top: -0.5rem;
//     }

//     & {
//       margin-bottom: -0.5rem;
//     }
//   }
// `;

// export const myLgN3 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-top: -1rem;
//     }

//     & {
//       margin-bottom: -1rem;
//     }
//   }
// `;

// export const myLgN4 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-top: -1.5rem;
//     }

//     & {
//       margin-bottom: -1.5rem;
//     }
//   }
// `;

// export const myLgN5 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-top: -3rem;
//     }

//     & {
//       margin-bottom: -3rem;
//     }
//   }
// `;

// export const myMd0 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-top: 0;
//     }

//     & {
//       margin-bottom: 0;
//     }
//   }
// `;

// export const myMd1 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-top: 0.25rem;
//     }

//     & {
//       margin-bottom: 0.25rem;
//     }
//   }
// `;

// export const myMd2 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-top: 0.5rem;
//     }

//     & {
//       margin-bottom: 0.5rem;
//     }
//   }
// `;

// export const myMd3 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-top: 1rem;
//     }

//     & {
//       margin-bottom: 1rem;
//     }
//   }
// `;

// export const myMd4 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-top: 1.5rem;
//     }

//     & {
//       margin-bottom: 1.5rem;
//     }
//   }
// `;

// export const myMd5 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-top: 3rem;
//     }

//     & {
//       margin-bottom: 3rem;
//     }
//   }
// `;

// export const myMdAuto = css`
//   @media (min-width: 768px) {
//     & {
//       margin-top: auto;
//     }

//     & {
//       margin-bottom: auto;
//     }
//   }
// `;

// export const myMdN1 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-top: -0.25rem;
//     }

//     & {
//       margin-bottom: -0.25rem;
//     }
//   }
// `;

// export const myMdN2 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-top: -0.5rem;
//     }

//     & {
//       margin-bottom: -0.5rem;
//     }
//   }
// `;

// export const myMdN3 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-top: -1rem;
//     }

//     & {
//       margin-bottom: -1rem;
//     }
//   }
// `;

// export const myMdN4 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-top: -1.5rem;
//     }

//     & {
//       margin-bottom: -1.5rem;
//     }
//   }
// `;

// export const myMdN5 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-top: -3rem;
//     }

//     & {
//       margin-bottom: -3rem;
//     }
//   }
// `;

// export const myN1 = css`
//   margin-top: -0.25rem;

//   margin-bottom: -0.25rem;
// `;

// export const myN2 = css`
//   margin-top: -0.5rem;

//   margin-bottom: -0.5rem;
// `;

// export const myN3 = css`
//   margin-top: -1rem;

//   margin-bottom: -1rem;
// `;

// export const myN4 = css`
//   margin-top: -1.5rem;

//   margin-bottom: -1.5rem;
// `;

// export const myN5 = css`
//   margin-top: -3rem;

//   margin-bottom: -3rem;
// `;

// export const mySm0 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-top: 0;
//     }

//     & {
//       margin-bottom: 0;
//     }
//   }
// `;

// export const mySm1 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-top: 0.25rem;
//     }

//     & {
//       margin-bottom: 0.25rem;
//     }
//   }
// `;

// export const mySm2 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-top: 0.5rem;
//     }

//     & {
//       margin-bottom: 0.5rem;
//     }
//   }
// `;

// export const mySm3 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-top: 1rem;
//     }

//     & {
//       margin-bottom: 1rem;
//     }
//   }
// `;

// export const mySm4 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-top: 1.5rem;
//     }

//     & {
//       margin-bottom: 1.5rem;
//     }
//   }
// `;

// export const mySm5 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-top: 3rem;
//     }

//     & {
//       margin-bottom: 3rem;
//     }
//   }
// `;

// export const mySmAuto = css`
//   @media (min-width: 576px) {
//     & {
//       margin-top: auto;
//     }

//     & {
//       margin-bottom: auto;
//     }
//   }
// `;

// export const mySmN1 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-top: -0.25rem;
//     }

//     & {
//       margin-bottom: -0.25rem;
//     }
//   }
// `;

// export const mySmN2 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-top: -0.5rem;
//     }

//     & {
//       margin-bottom: -0.5rem;
//     }
//   }
// `;

// export const mySmN3 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-top: -1rem;
//     }

//     & {
//       margin-bottom: -1rem;
//     }
//   }
// `;

// export const mySmN4 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-top: -1.5rem;
//     }

//     & {
//       margin-bottom: -1.5rem;
//     }
//   }
// `;

// export const mySmN5 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-top: -3rem;
//     }

//     & {
//       margin-bottom: -3rem;
//     }
//   }
// `;

// export const myXl0 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-top: 0;
//     }

//     & {
//       margin-bottom: 0;
//     }
//   }
// `;

// export const myXl1 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-top: 0.25rem;
//     }

//     & {
//       margin-bottom: 0.25rem;
//     }
//   }
// `;

// export const myXl2 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-top: 0.5rem;
//     }

//     & {
//       margin-bottom: 0.5rem;
//     }
//   }
// `;

// export const myXl3 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-top: 1rem;
//     }

//     & {
//       margin-bottom: 1rem;
//     }
//   }
// `;

// export const myXl4 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-top: 1.5rem;
//     }

//     & {
//       margin-bottom: 1.5rem;
//     }
//   }
// `;

// export const myXl5 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-top: 3rem;
//     }

//     & {
//       margin-bottom: 3rem;
//     }
//   }
// `;

// export const myXlAuto = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-top: auto;
//     }

//     & {
//       margin-bottom: auto;
//     }
//   }
// `;

// export const myXlN1 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-top: -0.25rem;
//     }

//     & {
//       margin-bottom: -0.25rem;
//     }
//   }
// `;

// export const myXlN2 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-top: -0.5rem;
//     }

//     & {
//       margin-bottom: -0.5rem;
//     }
//   }
// `;

// export const myXlN3 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-top: -1rem;
//     }

//     & {
//       margin-bottom: -1rem;
//     }
//   }
// `;

// export const myXlN4 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-top: -1.5rem;
//     }

//     & {
//       margin-bottom: -1.5rem;
//     }
//   }
// `;

// export const myXlN5 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-top: -3rem;
//     }

//     & {
//       margin-bottom: -3rem;
//     }
//   }
// `;

// export const nav = css`
//   display: -ms-flexbox;
//   display: flex;
//   -ms-flex-wrap: wrap;
//   flex-wrap: wrap;
//   padding-left: 0;
//   margin-bottom: 0;
//   list-style: none;
// `;

// export const navLink = css`
//   display: block;
//   padding: 0.5rem 1rem;

//   &:hover,
//   &:focus {
//     text-decoration: none;
//   }

//   &.disabled {
//     color: #6c757d;
//     pointer-events: none;
//     cursor: default;
//   }
// `;

// export const navFill = css`
//   & > ${navLink}, & .nav-item {
//     -ms-flex: 1 1 auto;
//     flex: 1 1 auto;
//     text-align: center;
//   }
// `;

// export const navJustified = css`
//   & > ${navLink}, & .nav-item {
//     -ms-flex-preferred-size: 0;
//     flex-basis: 0;
//     -ms-flex-positive: 1;
//     flex-grow: 1;
//     text-align: center;
//   }
// `;

// export const navPills = css`
//   & ${navLink} {
//     border-radius: 0.25rem;
//   }

//   & ${navLink}${active}, & ${show} > ${navLink} {
//     color: #fff;
//     background-color: #007bff;
//   }
// `;

// export const navTabs = css`
//   border-bottom: 1px solid #dee2e6;

//   & .nav-item {
//     margin-bottom: -1px;
//   }

//   & ${navLink} {
//     border: 1px solid transparent;
//     border-top-left-radius: 0.25rem;
//     border-top-right-radius: 0.25rem;
//   }

//   & ${navLink}:hover, & ${navLink}:focus {
//     border-color: #e9ecef #e9ecef #dee2e6;
//   }

//   & ${navLink}.disabled {
//     color: #6c757d;
//     background-color: transparent;
//     border-color: transparent;
//   }

//   & ${navLink}${active}, & .nav-item${show} ${navLink} {
//     color: #495057;
//     background-color: #fff;
//     border-color: #dee2e6 #dee2e6 #fff;
//   }

//   & ${dropdownMenu} {
//     margin-top: -1px;
//     border-top-left-radius: 0;
//     border-top-right-radius: 0;
//   }
// `;

// export const navbar = css`
//   position: relative;
//   display: -ms-flexbox;
//   display: flex;
//   -ms-flex-wrap: wrap;
//   flex-wrap: wrap;
//   -ms-flex-align: center;
//   align-items: center;
//   -ms-flex-pack: justify;
//   justify-content: space-between;
//   padding: 0.5rem 1rem;

//   &
//     ${container},
//     &
//     ${containerFluid},
//     &
//     ${containerSm},
//     &
//     ${containerMd},
//     &
//     ${containerLg},
//     &
//     ${containerXl} {
//     display: -ms-flexbox;
//     display: flex;
//     -ms-flex-wrap: wrap;
//     flex-wrap: wrap;
//     -ms-flex-align: center;
//     align-items: center;
//     -ms-flex-pack: justify;
//     justify-content: space-between;
//   }

//   @media print {
//     & {
//       display: none;
//     }
//   }
// `;

// export const navbarBrand = css`
//   display: inline-block;
//   padding-top: 0.3125rem;
//   padding-bottom: 0.3125rem;
//   margin-right: 1rem;
//   font-size: 1.25rem;
//   line-height: inherit;
//   white-space: nowrap;

//   &:hover,
//   &:focus {
//     text-decoration: none;
//   }
// `;

// export const navbarCollapse = css`
//   -ms-flex-preferred-size: 100%;
//   flex-basis: 100%;
//   -ms-flex-positive: 1;
//   flex-grow: 1;
//   -ms-flex-align: center;
//   align-items: center;
// `;

// export const navbarNav = css`
//   display: -ms-flexbox;
//   display: flex;
//   -ms-flex-direction: column;
//   flex-direction: column;
//   padding-left: 0;
//   margin-bottom: 0;
//   list-style: none;

//   & ${navLink} {
//     padding-right: 0;
//     padding-left: 0;
//   }

//   & ${dropdownMenu} {
//     position: static;
//     float: none;
//   }
// `;

// export const navbarToggler = css`
//   padding: 0.25rem 0.75rem;
//   font-size: 1.25rem;
//   line-height: 1;
//   background-color: transparent;
//   border: 1px solid transparent;
//   border-radius: 0.25rem;

//   &:hover,
//   &:focus {
//     text-decoration: none;
//   }
// `;

// export const navbarTogglerIcon = css`
//   display: inline-block;
//   width: 1.5em;
//   height: 1.5em;
//   vertical-align: middle;
//   content: '';
//   background: no-repeat center center;
//   background-size: 100% 100%;
// `;

// export const navbarText = css`
//   display: inline-block;
//   padding-top: 0.5rem;
//   padding-bottom: 0.5rem;
// `;

// export const navbarDark = css`
//   & ${navbarBrand} {
//     color: #fff;
//   }

//   & ${navbarBrand}:hover, & ${navbarBrand}:focus {
//     color: #fff;
//   }

//   & ${navbarNav} ${navLink} {
//     color: rgba(255, 255, 255, 0.5);
//   }

//   & ${navbarNav} ${navLink}:hover, & ${navbarNav} ${navLink}:focus {
//     color: rgba(255, 255, 255, 0.75);
//   }

//   & ${navbarNav} ${navLink}.disabled {
//     color: rgba(255, 255, 255, 0.25);
//   }

//   &
//     ${navbarNav}
//     ${show}
//     > ${navLink},
//     &
//     ${navbarNav}
//     ${active}
//     > ${navLink},
//     &
//     ${navbarNav}
//     ${navLink}${show},
//     &
//     ${navbarNav}
//     ${navLink}${active} {
//     color: #fff;
//   }

//   & ${navbarToggler} {
//     color: rgba(255, 255, 255, 0.5);
//     border-color: rgba(255, 255, 255, 0.1);
//   }

//   & ${navbarTogglerIcon} {
//     background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
//   }

//   & ${navbarText} {
//     color: rgba(255, 255, 255, 0.5);
//   }

//   & ${navbarText} a {
//     color: #fff;
//   }

//   & ${navbarText} a:hover,
//   & ${navbarText} a:focus {
//     color: #fff;
//   }
// `;

// export const navbarExpand = css`
//   -ms-flex-flow: row nowrap;
//   flex-flow: row nowrap;
//   -ms-flex-pack: start;
//   justify-content: flex-start;

//   &
//     > ${container},
//     &
//     > ${containerFluid},
//     &
//     > ${containerSm},
//     &
//     > ${containerMd},
//     &
//     > ${containerLg},
//     &
//     > ${containerXl} {
//     padding-right: 0;
//     padding-left: 0;
//   }

//   & ${navbarNav} {
//     -ms-flex-direction: row;
//     flex-direction: row;
//   }

//   & ${navbarNav} ${dropdownMenu} {
//     position: absolute;
//   }

//   & ${navbarNav} ${navLink} {
//     padding-right: 0.5rem;
//     padding-left: 0.5rem;
//   }

//   &
//     > ${container},
//     &
//     > ${containerFluid},
//     &
//     > ${containerSm},
//     &
//     > ${containerMd},
//     &
//     > ${containerLg},
//     &
//     > ${containerXl} {
//     -ms-flex-wrap: nowrap;
//     flex-wrap: nowrap;
//   }

//   & ${navbarCollapse} {
//     display: -ms-flexbox;
//     display: flex;
//     -ms-flex-preferred-size: auto;
//     flex-basis: auto;
//   }

//   & ${navbarToggler} {
//     display: none;
//   }
// `;

// export const navbarExpandLg = css`
//   @media (max-width: 991.98px) {
//     &
//       > ${container},
//       &
//       > ${containerFluid},
//       &
//       > ${containerSm},
//       &
//       > ${containerMd},
//       &
//       > ${containerLg},
//       &
//       > ${containerXl} {
//       padding-right: 0;
//       padding-left: 0;
//     }
//   }

//   @media (min-width: 992px) {
//     & {
//       -ms-flex-flow: row nowrap;
//       flex-flow: row nowrap;
//       -ms-flex-pack: start;
//       justify-content: flex-start;
//     }

//     & ${navbarNav} {
//       -ms-flex-direction: row;
//       flex-direction: row;
//     }

//     & ${navbarNav} ${dropdownMenu} {
//       position: absolute;
//     }

//     & ${navbarNav} ${navLink} {
//       padding-right: 0.5rem;
//       padding-left: 0.5rem;
//     }

//     &
//       > ${container},
//       &
//       > ${containerFluid},
//       &
//       > ${containerSm},
//       &
//       > ${containerMd},
//       &
//       > ${containerLg},
//       &
//       > ${containerXl} {
//       -ms-flex-wrap: nowrap;
//       flex-wrap: nowrap;
//     }

//     & ${navbarCollapse} {
//       display: -ms-flexbox;
//       display: flex;
//       -ms-flex-preferred-size: auto;
//       flex-basis: auto;
//     }

//     & ${navbarToggler} {
//       display: none;
//     }
//   }
// `;

// export const navbarExpandMd = css`
//   @media (max-width: 767.98px) {
//     &
//       > ${container},
//       &
//       > ${containerFluid},
//       &
//       > ${containerSm},
//       &
//       > ${containerMd},
//       &
//       > ${containerLg},
//       &
//       > ${containerXl} {
//       padding-right: 0;
//       padding-left: 0;
//     }
//   }

//   @media (min-width: 768px) {
//     & {
//       -ms-flex-flow: row nowrap;
//       flex-flow: row nowrap;
//       -ms-flex-pack: start;
//       justify-content: flex-start;
//     }

//     & ${navbarNav} {
//       -ms-flex-direction: row;
//       flex-direction: row;
//     }

//     & ${navbarNav} ${dropdownMenu} {
//       position: absolute;
//     }

//     & ${navbarNav} ${navLink} {
//       padding-right: 0.5rem;
//       padding-left: 0.5rem;
//     }

//     &
//       > ${container},
//       &
//       > ${containerFluid},
//       &
//       > ${containerSm},
//       &
//       > ${containerMd},
//       &
//       > ${containerLg},
//       &
//       > ${containerXl} {
//       -ms-flex-wrap: nowrap;
//       flex-wrap: nowrap;
//     }

//     & ${navbarCollapse} {
//       display: -ms-flexbox;
//       display: flex;
//       -ms-flex-preferred-size: auto;
//       flex-basis: auto;
//     }

//     & ${navbarToggler} {
//       display: none;
//     }
//   }
// `;

// export const navbarExpandSm = css`
//   @media (max-width: 575.98px) {
//     &
//       > ${container},
//       &
//       > ${containerFluid},
//       &
//       > ${containerSm},
//       &
//       > ${containerMd},
//       &
//       > ${containerLg},
//       &
//       > ${containerXl} {
//       padding-right: 0;
//       padding-left: 0;
//     }
//   }

//   @media (min-width: 576px) {
//     & {
//       -ms-flex-flow: row nowrap;
//       flex-flow: row nowrap;
//       -ms-flex-pack: start;
//       justify-content: flex-start;
//     }

//     & ${navbarNav} {
//       -ms-flex-direction: row;
//       flex-direction: row;
//     }

//     & ${navbarNav} ${dropdownMenu} {
//       position: absolute;
//     }

//     & ${navbarNav} ${navLink} {
//       padding-right: 0.5rem;
//       padding-left: 0.5rem;
//     }

//     &
//       > ${container},
//       &
//       > ${containerFluid},
//       &
//       > ${containerSm},
//       &
//       > ${containerMd},
//       &
//       > ${containerLg},
//       &
//       > ${containerXl} {
//       -ms-flex-wrap: nowrap;
//       flex-wrap: nowrap;
//     }

//     & ${navbarCollapse} {
//       display: -ms-flexbox;
//       display: flex;
//       -ms-flex-preferred-size: auto;
//       flex-basis: auto;
//     }

//     & ${navbarToggler} {
//       display: none;
//     }
//   }
// `;

// export const navbarExpandXl = css`
//   @media (max-width: 1199.98px) {
//     &
//       > ${container},
//       &
//       > ${containerFluid},
//       &
//       > ${containerSm},
//       &
//       > ${containerMd},
//       &
//       > ${containerLg},
//       &
//       > ${containerXl} {
//       padding-right: 0;
//       padding-left: 0;
//     }
//   }

//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-flow: row nowrap;
//       flex-flow: row nowrap;
//       -ms-flex-pack: start;
//       justify-content: flex-start;
//     }

//     & ${navbarNav} {
//       -ms-flex-direction: row;
//       flex-direction: row;
//     }

//     & ${navbarNav} ${dropdownMenu} {
//       position: absolute;
//     }

//     & ${navbarNav} ${navLink} {
//       padding-right: 0.5rem;
//       padding-left: 0.5rem;
//     }

//     &
//       > ${container},
//       &
//       > ${containerFluid},
//       &
//       > ${containerSm},
//       &
//       > ${containerMd},
//       &
//       > ${containerLg},
//       &
//       > ${containerXl} {
//       -ms-flex-wrap: nowrap;
//       flex-wrap: nowrap;
//     }

//     & ${navbarCollapse} {
//       display: -ms-flexbox;
//       display: flex;
//       -ms-flex-preferred-size: auto;
//       flex-basis: auto;
//     }

//     & ${navbarToggler} {
//       display: none;
//     }
//   }
// `;

// export const navbarLight = css`
//   & ${navbarBrand} {
//     color: rgba(0, 0, 0, 0.9);
//   }

//   & ${navbarBrand}:hover, & ${navbarBrand}:focus {
//     color: rgba(0, 0, 0, 0.9);
//   }

//   & ${navbarNav} ${navLink} {
//     color: rgba(0, 0, 0, 0.5);
//   }

//   & ${navbarNav} ${navLink}:hover, & ${navbarNav} ${navLink}:focus {
//     color: rgba(0, 0, 0, 0.7);
//   }

//   & ${navbarNav} ${navLink}.disabled {
//     color: rgba(0, 0, 0, 0.3);
//   }

//   &
//     ${navbarNav}
//     ${show}
//     > ${navLink},
//     &
//     ${navbarNav}
//     ${active}
//     > ${navLink},
//     &
//     ${navbarNav}
//     ${navLink}${show},
//     &
//     ${navbarNav}
//     ${navLink}${active} {
//     color: rgba(0, 0, 0, 0.9);
//   }

//   & ${navbarToggler} {
//     color: rgba(0, 0, 0, 0.5);
//     border-color: rgba(0, 0, 0, 0.1);
//   }

//   & ${navbarTogglerIcon} {
//     background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
//   }

//   & ${navbarText} {
//     color: rgba(0, 0, 0, 0.5);
//   }

//   & ${navbarText} a {
//     color: rgba(0, 0, 0, 0.9);
//   }

//   & ${navbarText} a:hover,
//   & ${navbarText} a:focus {
//     color: rgba(0, 0, 0, 0.9);
//   }
// `;

// export const noGutters = css`
//   margin-right: 0;
//   margin-left: 0;

//   & > ${col}, & > [class*='col-'] {
//     padding-right: 0;
//     padding-left: 0;
//   }
// `;

// export const offset1 = css`
//   margin-left: 8.333333%;
// `;

// export const offset2 = css`
//   margin-left: 16.666667%;
// `;

// export const offset3 = css`
//   margin-left: 25%;
// `;

// export const offset4 = css`
//   margin-left: 33.333333%;
// `;

// export const offset5 = css`
//   margin-left: 41.666667%;
// `;

// export const offset6 = css`
//   margin-left: 50%;
// `;

// export const offset7 = css`
//   margin-left: 58.333333%;
// `;

// export const offset8 = css`
//   margin-left: 66.666667%;
// `;

// export const offset9 = css`
//   margin-left: 75%;
// `;

// export const offset10 = css`
//   margin-left: 83.333333%;
// `;

// export const offset11 = css`
//   margin-left: 91.666667%;
// `;

// export const offsetLg0 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-left: 0;
//     }
//   }
// `;

// export const offsetLg1 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-left: 8.333333%;
//     }
//   }
// `;

// export const offsetLg2 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-left: 16.666667%;
//     }
//   }
// `;

// export const offsetLg3 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-left: 25%;
//     }
//   }
// `;

// export const offsetLg4 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-left: 33.333333%;
//     }
//   }
// `;

// export const offsetLg5 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-left: 41.666667%;
//     }
//   }
// `;

// export const offsetLg6 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-left: 50%;
//     }
//   }
// `;

// export const offsetLg7 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-left: 58.333333%;
//     }
//   }
// `;

// export const offsetLg8 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-left: 66.666667%;
//     }
//   }
// `;

// export const offsetLg9 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-left: 75%;
//     }
//   }
// `;

// export const offsetLg10 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-left: 83.333333%;
//     }
//   }
// `;

// export const offsetLg11 = css`
//   @media (min-width: 992px) {
//     & {
//       margin-left: 91.666667%;
//     }
//   }
// `;

// export const offsetMd0 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-left: 0;
//     }
//   }
// `;

// export const offsetMd1 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-left: 8.333333%;
//     }
//   }
// `;

// export const offsetMd2 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-left: 16.666667%;
//     }
//   }
// `;

// export const offsetMd3 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-left: 25%;
//     }
//   }
// `;

// export const offsetMd4 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-left: 33.333333%;
//     }
//   }
// `;

// export const offsetMd5 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-left: 41.666667%;
//     }
//   }
// `;

// export const offsetMd6 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-left: 50%;
//     }
//   }
// `;

// export const offsetMd7 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-left: 58.333333%;
//     }
//   }
// `;

// export const offsetMd8 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-left: 66.666667%;
//     }
//   }
// `;

// export const offsetMd9 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-left: 75%;
//     }
//   }
// `;

// export const offsetMd10 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-left: 83.333333%;
//     }
//   }
// `;

// export const offsetMd11 = css`
//   @media (min-width: 768px) {
//     & {
//       margin-left: 91.666667%;
//     }
//   }
// `;

// export const offsetSm0 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-left: 0;
//     }
//   }
// `;

// export const offsetSm1 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-left: 8.333333%;
//     }
//   }
// `;

// export const offsetSm2 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-left: 16.666667%;
//     }
//   }
// `;

// export const offsetSm3 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-left: 25%;
//     }
//   }
// `;

// export const offsetSm4 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-left: 33.333333%;
//     }
//   }
// `;

// export const offsetSm5 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-left: 41.666667%;
//     }
//   }
// `;

// export const offsetSm6 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-left: 50%;
//     }
//   }
// `;

// export const offsetSm7 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-left: 58.333333%;
//     }
//   }
// `;

// export const offsetSm8 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-left: 66.666667%;
//     }
//   }
// `;

// export const offsetSm9 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-left: 75%;
//     }
//   }
// `;

// export const offsetSm10 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-left: 83.333333%;
//     }
//   }
// `;

// export const offsetSm11 = css`
//   @media (min-width: 576px) {
//     & {
//       margin-left: 91.666667%;
//     }
//   }
// `;

// export const offsetXl0 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-left: 0;
//     }
//   }
// `;

// export const offsetXl1 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-left: 8.333333%;
//     }
//   }
// `;

// export const offsetXl2 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-left: 16.666667%;
//     }
//   }
// `;

// export const offsetXl3 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-left: 25%;
//     }
//   }
// `;

// export const offsetXl4 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-left: 33.333333%;
//     }
//   }
// `;

// export const offsetXl5 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-left: 41.666667%;
//     }
//   }
// `;

// export const offsetXl6 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-left: 50%;
//     }
//   }
// `;

// export const offsetXl7 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-left: 58.333333%;
//     }
//   }
// `;

// export const offsetXl8 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-left: 66.666667%;
//     }
//   }
// `;

// export const offsetXl9 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-left: 75%;
//     }
//   }
// `;

// export const offsetXl10 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-left: 83.333333%;
//     }
//   }
// `;

// export const offsetXl11 = css`
//   @media (min-width: 1200px) {
//     & {
//       margin-left: 91.666667%;
//     }
//   }
// `;

// export const order0 = css`
//   -ms-flex-order: 0;
//   order: 0;
// `;

// export const order1 = css`
//   -ms-flex-order: 1;
//   order: 1;
// `;

// export const order2 = css`
//   -ms-flex-order: 2;
//   order: 2;
// `;

// export const order3 = css`
//   -ms-flex-order: 3;
//   order: 3;
// `;

// export const order4 = css`
//   -ms-flex-order: 4;
//   order: 4;
// `;

// export const order5 = css`
//   -ms-flex-order: 5;
//   order: 5;
// `;

// export const order6 = css`
//   -ms-flex-order: 6;
//   order: 6;
// `;

// export const order7 = css`
//   -ms-flex-order: 7;
//   order: 7;
// `;

// export const order8 = css`
//   -ms-flex-order: 8;
//   order: 8;
// `;

// export const order9 = css`
//   -ms-flex-order: 9;
//   order: 9;
// `;

// export const order10 = css`
//   -ms-flex-order: 10;
//   order: 10;
// `;

// export const order11 = css`
//   -ms-flex-order: 11;
//   order: 11;
// `;

// export const order12 = css`
//   -ms-flex-order: 12;
//   order: 12;
// `;

// export const orderFirst = css`
//   -ms-flex-order: -1;
//   order: -1;
// `;

// export const orderLast = css`
//   -ms-flex-order: 13;
//   order: 13;
// `;

// export const orderLg0 = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-order: 0;
//       order: 0;
//     }
//   }
// `;

// export const orderLg1 = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-order: 1;
//       order: 1;
//     }
//   }
// `;

// export const orderLg2 = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-order: 2;
//       order: 2;
//     }
//   }
// `;

// export const orderLg3 = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-order: 3;
//       order: 3;
//     }
//   }
// `;

// export const orderLg4 = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-order: 4;
//       order: 4;
//     }
//   }
// `;

// export const orderLg5 = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-order: 5;
//       order: 5;
//     }
//   }
// `;

// export const orderLg6 = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-order: 6;
//       order: 6;
//     }
//   }
// `;

// export const orderLg7 = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-order: 7;
//       order: 7;
//     }
//   }
// `;

// export const orderLg8 = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-order: 8;
//       order: 8;
//     }
//   }
// `;

// export const orderLg9 = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-order: 9;
//       order: 9;
//     }
//   }
// `;

// export const orderLg10 = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-order: 10;
//       order: 10;
//     }
//   }
// `;

// export const orderLg11 = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-order: 11;
//       order: 11;
//     }
//   }
// `;

// export const orderLg12 = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-order: 12;
//       order: 12;
//     }
//   }
// `;

// export const orderLgFirst = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-order: -1;
//       order: -1;
//     }
//   }
// `;

// export const orderLgLast = css`
//   @media (min-width: 992px) {
//     & {
//       -ms-flex-order: 13;
//       order: 13;
//     }
//   }
// `;

// export const orderMd0 = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-order: 0;
//       order: 0;
//     }
//   }
// `;

// export const orderMd1 = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-order: 1;
//       order: 1;
//     }
//   }
// `;

// export const orderMd2 = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-order: 2;
//       order: 2;
//     }
//   }
// `;

// export const orderMd3 = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-order: 3;
//       order: 3;
//     }
//   }
// `;

// export const orderMd4 = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-order: 4;
//       order: 4;
//     }
//   }
// `;

// export const orderMd5 = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-order: 5;
//       order: 5;
//     }
//   }
// `;

// export const orderMd6 = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-order: 6;
//       order: 6;
//     }
//   }
// `;

// export const orderMd7 = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-order: 7;
//       order: 7;
//     }
//   }
// `;

// export const orderMd8 = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-order: 8;
//       order: 8;
//     }
//   }
// `;

// export const orderMd9 = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-order: 9;
//       order: 9;
//     }
//   }
// `;

// export const orderMd10 = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-order: 10;
//       order: 10;
//     }
//   }
// `;

// export const orderMd11 = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-order: 11;
//       order: 11;
//     }
//   }
// `;

// export const orderMd12 = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-order: 12;
//       order: 12;
//     }
//   }
// `;

// export const orderMdFirst = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-order: -1;
//       order: -1;
//     }
//   }
// `;

// export const orderMdLast = css`
//   @media (min-width: 768px) {
//     & {
//       -ms-flex-order: 13;
//       order: 13;
//     }
//   }
// `;

// export const orderSm0 = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-order: 0;
//       order: 0;
//     }
//   }
// `;

// export const orderSm1 = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-order: 1;
//       order: 1;
//     }
//   }
// `;

// export const orderSm2 = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-order: 2;
//       order: 2;
//     }
//   }
// `;

// export const orderSm3 = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-order: 3;
//       order: 3;
//     }
//   }
// `;

// export const orderSm4 = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-order: 4;
//       order: 4;
//     }
//   }
// `;

// export const orderSm5 = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-order: 5;
//       order: 5;
//     }
//   }
// `;

// export const orderSm6 = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-order: 6;
//       order: 6;
//     }
//   }
// `;

// export const orderSm7 = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-order: 7;
//       order: 7;
//     }
//   }
// `;

// export const orderSm8 = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-order: 8;
//       order: 8;
//     }
//   }
// `;

// export const orderSm9 = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-order: 9;
//       order: 9;
//     }
//   }
// `;

// export const orderSm10 = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-order: 10;
//       order: 10;
//     }
//   }
// `;

// export const orderSm11 = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-order: 11;
//       order: 11;
//     }
//   }
// `;

// export const orderSm12 = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-order: 12;
//       order: 12;
//     }
//   }
// `;

// export const orderSmFirst = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-order: -1;
//       order: -1;
//     }
//   }
// `;

// export const orderSmLast = css`
//   @media (min-width: 576px) {
//     & {
//       -ms-flex-order: 13;
//       order: 13;
//     }
//   }
// `;

// export const orderXl0 = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-order: 0;
//       order: 0;
//     }
//   }
// `;

// export const orderXl1 = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-order: 1;
//       order: 1;
//     }
//   }
// `;

// export const orderXl2 = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-order: 2;
//       order: 2;
//     }
//   }
// `;

// export const orderXl3 = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-order: 3;
//       order: 3;
//     }
//   }
// `;

// export const orderXl4 = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-order: 4;
//       order: 4;
//     }
//   }
// `;

// export const orderXl5 = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-order: 5;
//       order: 5;
//     }
//   }
// `;

// export const orderXl6 = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-order: 6;
//       order: 6;
//     }
//   }
// `;

// export const orderXl7 = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-order: 7;
//       order: 7;
//     }
//   }
// `;

// export const orderXl8 = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-order: 8;
//       order: 8;
//     }
//   }
// `;

// export const orderXl9 = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-order: 9;
//       order: 9;
//     }
//   }
// `;

// export const orderXl10 = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-order: 10;
//       order: 10;
//     }
//   }
// `;

// export const orderXl11 = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-order: 11;
//       order: 11;
//     }
//   }
// `;

// export const orderXl12 = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-order: 12;
//       order: 12;
//     }
//   }
// `;

// export const orderXlFirst = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-order: -1;
//       order: -1;
//     }
//   }
// `;

// export const orderXlLast = css`
//   @media (min-width: 1200px) {
//     & {
//       -ms-flex-order: 13;
//       order: 13;
//     }
//   }
// `;

// export const overflowAuto = css`
//   overflow: auto;
// `;

// export const overflowHidden = css`
//   overflow: hidden;
// `;

// export const p0 = css`
//   padding: 0;
// `;

// export const p1 = css`
//   padding: 0.25rem;
// `;

// export const p2 = css`
//   padding: 0.5rem;
// `;

// export const p3 = css`
//   padding: 1rem;
// `;

// export const p4 = css`
//   padding: 1.5rem;
// `;

// export const p5 = css`
//   padding: 3rem;
// `;

// export const pLg0 = css`
//   @media (min-width: 992px) {
//     & {
//       padding: 0;
//     }
//   }
// `;

// export const pLg1 = css`
//   @media (min-width: 992px) {
//     & {
//       padding: 0.25rem;
//     }
//   }
// `;

// export const pLg2 = css`
//   @media (min-width: 992px) {
//     & {
//       padding: 0.5rem;
//     }
//   }
// `;

// export const pLg3 = css`
//   @media (min-width: 992px) {
//     & {
//       padding: 1rem;
//     }
//   }
// `;

// export const pLg4 = css`
//   @media (min-width: 992px) {
//     & {
//       padding: 1.5rem;
//     }
//   }
// `;

// export const pLg5 = css`
//   @media (min-width: 992px) {
//     & {
//       padding: 3rem;
//     }
//   }
// `;

// export const pMd0 = css`
//   @media (min-width: 768px) {
//     & {
//       padding: 0;
//     }
//   }
// `;

// export const pMd1 = css`
//   @media (min-width: 768px) {
//     & {
//       padding: 0.25rem;
//     }
//   }
// `;

// export const pMd2 = css`
//   @media (min-width: 768px) {
//     & {
//       padding: 0.5rem;
//     }
//   }
// `;

// export const pMd3 = css`
//   @media (min-width: 768px) {
//     & {
//       padding: 1rem;
//     }
//   }
// `;

// export const pMd4 = css`
//   @media (min-width: 768px) {
//     & {
//       padding: 1.5rem;
//     }
//   }
// `;

// export const pMd5 = css`
//   @media (min-width: 768px) {
//     & {
//       padding: 3rem;
//     }
//   }
// `;

// export const pSm0 = css`
//   @media (min-width: 576px) {
//     & {
//       padding: 0;
//     }
//   }
// `;

// export const pSm1 = css`
//   @media (min-width: 576px) {
//     & {
//       padding: 0.25rem;
//     }
//   }
// `;

// export const pSm2 = css`
//   @media (min-width: 576px) {
//     & {
//       padding: 0.5rem;
//     }
//   }
// `;

// export const pSm3 = css`
//   @media (min-width: 576px) {
//     & {
//       padding: 1rem;
//     }
//   }
// `;

// export const pSm4 = css`
//   @media (min-width: 576px) {
//     & {
//       padding: 1.5rem;
//     }
//   }
// `;

// export const pSm5 = css`
//   @media (min-width: 576px) {
//     & {
//       padding: 3rem;
//     }
//   }
// `;

// export const pXl0 = css`
//   @media (min-width: 1200px) {
//     & {
//       padding: 0;
//     }
//   }
// `;

// export const pXl1 = css`
//   @media (min-width: 1200px) {
//     & {
//       padding: 0.25rem;
//     }
//   }
// `;

// export const pXl2 = css`
//   @media (min-width: 1200px) {
//     & {
//       padding: 0.5rem;
//     }
//   }
// `;

// export const pXl3 = css`
//   @media (min-width: 1200px) {
//     & {
//       padding: 1rem;
//     }
//   }
// `;

// export const pXl4 = css`
//   @media (min-width: 1200px) {
//     & {
//       padding: 1.5rem;
//     }
//   }
// `;

// export const pXl5 = css`
//   @media (min-width: 1200px) {
//     & {
//       padding: 3rem;
//     }
//   }
// `;

// export const pageLink = css`
//   position: relative;
//   display: block;
//   padding: 0.5rem 0.75rem;
//   margin-left: -1px;
//   line-height: 1.25;
//   color: #007bff;
//   background-color: #fff;
//   border: 1px solid #dee2e6;

//   &:hover {
//     z-index: 2;
//     color: #0056b3;
//     text-decoration: none;
//     background-color: #e9ecef;
//     border-color: #dee2e6;
//   }

//   &:focus {
//     z-index: 3;
//     outline: 0;
//     box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
//   }
// `;

// export const pageItem = css`
//   &:first-child ${pageLink} {
//     margin-left: 0;
//     border-top-left-radius: 0.25rem;
//     border-bottom-left-radius: 0.25rem;
//   }

//   &:last-child ${pageLink} {
//     border-top-right-radius: 0.25rem;
//     border-bottom-right-radius: 0.25rem;
//   }

//   &${active} ${pageLink} {
//     z-index: 3;
//     color: #fff;
//     background-color: #007bff;
//     border-color: #007bff;
//   }

//   &.disabled ${pageLink} {
//     color: #6c757d;
//     pointer-events: none;
//     cursor: auto;
//     background-color: #fff;
//     border-color: #dee2e6;
//   }
// `;

// export const pagination = css`
//   display: -ms-flexbox;
//   display: flex;
//   padding-left: 0;
//   list-style: none;
//   border-radius: 0.25rem;
// `;

// export const paginationLg = css`
//   & ${pageLink} {
//     padding: 0.75rem 1.5rem;
//     font-size: 1.25rem;
//     line-height: 1.5;
//   }

//   & ${pageItem}:first-child ${pageLink} {
//     border-top-left-radius: 0.3rem;
//     border-bottom-left-radius: 0.3rem;
//   }

//   & ${pageItem}:last-child ${pageLink} {
//     border-top-right-radius: 0.3rem;
//     border-bottom-right-radius: 0.3rem;
//   }
// `;

// export const paginationSm = css`
//   & ${pageLink} {
//     padding: 0.25rem 0.5rem;
//     font-size: 0.875rem;
//     line-height: 1.5;
//   }

//   & ${pageItem}:first-child ${pageLink} {
//     border-top-left-radius: 0.2rem;
//     border-bottom-left-radius: 0.2rem;
//   }

//   & ${pageItem}:last-child ${pageLink} {
//     border-top-right-radius: 0.2rem;
//     border-bottom-right-radius: 0.2rem;
//   }
// `;

// export const pb0 = css`
//   padding-bottom: 0;
// `;

// export const pb1 = css`
//   padding-bottom: 0.25rem;
// `;

// export const pb2 = css`
//   padding-bottom: 0.5rem;
// `;

// export const pb3 = css`
//   padding-bottom: 1rem;
// `;

// export const pb4 = css`
//   padding-bottom: 1.5rem;
// `;

// export const pb5 = css`
//   padding-bottom: 3rem;
// `;

// export const pbLg0 = css`
//   @media (min-width: 992px) {
//     & {
//       padding-bottom: 0;
//     }
//   }
// `;

// export const pbLg1 = css`
//   @media (min-width: 992px) {
//     & {
//       padding-bottom: 0.25rem;
//     }
//   }
// `;

// export const pbLg2 = css`
//   @media (min-width: 992px) {
//     & {
//       padding-bottom: 0.5rem;
//     }
//   }
// `;

// export const pbLg3 = css`
//   @media (min-width: 992px) {
//     & {
//       padding-bottom: 1rem;
//     }
//   }
// `;

// export const pbLg4 = css`
//   @media (min-width: 992px) {
//     & {
//       padding-bottom: 1.5rem;
//     }
//   }
// `;

// export const pbLg5 = css`
//   @media (min-width: 992px) {
//     & {
//       padding-bottom: 3rem;
//     }
//   }
// `;

// export const pbMd0 = css`
//   @media (min-width: 768px) {
//     & {
//       padding-bottom: 0;
//     }
//   }
// `;

// export const pbMd1 = css`
//   @media (min-width: 768px) {
//     & {
//       padding-bottom: 0.25rem;
//     }
//   }
// `;

// export const pbMd2 = css`
//   @media (min-width: 768px) {
//     & {
//       padding-bottom: 0.5rem;
//     }
//   }
// `;

// export const pbMd3 = css`
//   @media (min-width: 768px) {
//     & {
//       padding-bottom: 1rem;
//     }
//   }
// `;

// export const pbMd4 = css`
//   @media (min-width: 768px) {
//     & {
//       padding-bottom: 1.5rem;
//     }
//   }
// `;

// export const pbMd5 = css`
//   @media (min-width: 768px) {
//     & {
//       padding-bottom: 3rem;
//     }
//   }
// `;

// export const pbSm0 = css`
//   @media (min-width: 576px) {
//     & {
//       padding-bottom: 0;
//     }
//   }
// `;

// export const pbSm1 = css`
//   @media (min-width: 576px) {
//     & {
//       padding-bottom: 0.25rem;
//     }
//   }
// `;

// export const pbSm2 = css`
//   @media (min-width: 576px) {
//     & {
//       padding-bottom: 0.5rem;
//     }
//   }
// `;

// export const pbSm3 = css`
//   @media (min-width: 576px) {
//     & {
//       padding-bottom: 1rem;
//     }
//   }
// `;

// export const pbSm4 = css`
//   @media (min-width: 576px) {
//     & {
//       padding-bottom: 1.5rem;
//     }
//   }
// `;

// export const pbSm5 = css`
//   @media (min-width: 576px) {
//     & {
//       padding-bottom: 3rem;
//     }
//   }
// `;

// export const pbXl0 = css`
//   @media (min-width: 1200px) {
//     & {
//       padding-bottom: 0;
//     }
//   }
// `;

// export const pbXl1 = css`
//   @media (min-width: 1200px) {
//     & {
//       padding-bottom: 0.25rem;
//     }
//   }
// `;

// export const pbXl2 = css`
//   @media (min-width: 1200px) {
//     & {
//       padding-bottom: 0.5rem;
//     }
//   }
// `;

// export const pbXl3 = css`
//   @media (min-width: 1200px) {
//     & {
//       padding-bottom: 1rem;
//     }
//   }
// `;

// export const pbXl4 = css`
//   @media (min-width: 1200px) {
//     & {
//       padding-bottom: 1.5rem;
//     }
//   }
// `;

// export const pbXl5 = css`
//   @media (min-width: 1200px) {
//     & {
//       padding-bottom: 3rem;
//     }
//   }
// `;

// export const pl0 = css`
//   padding-left: 0;
// `;

// export const pl1 = css`
//   padding-left: 0.25rem;
// `;

// export const pl2 = css`
//   padding-left: 0.5rem;
// `;

// export const pl3 = css`
//   padding-left: 1rem;
// `;

// export const pl4 = css`
//   padding-left: 1.5rem;
// `;

// export const pl5 = css`
//   padding-left: 3rem;
// `;

// export const plLg0 = css`
//   @media (min-width: 992px) {
//     & {
//       padding-left: 0;
//     }
//   }
// `;

// export const plLg1 = css`
//   @media (min-width: 992px) {
//     & {
//       padding-left: 0.25rem;
//     }
//   }
// `;

// export const plLg2 = css`
//   @media (min-width: 992px) {
//     & {
//       padding-left: 0.5rem;
//     }
//   }
// `;

// export const plLg3 = css`
//   @media (min-width: 992px) {
//     & {
//       padding-left: 1rem;
//     }
//   }
// `;

// export const plLg4 = css`
//   @media (min-width: 992px) {
//     & {
//       padding-left: 1.5rem;
//     }
//   }
// `;

// export const plLg5 = css`
//   @media (min-width: 992px) {
//     & {
//       padding-left: 3rem;
//     }
//   }
// `;

// export const plMd0 = css`
//   @media (min-width: 768px) {
//     & {
//       padding-left: 0;
//     }
//   }
// `;

// export const plMd1 = css`
//   @media (min-width: 768px) {
//     & {
//       padding-left: 0.25rem;
//     }
//   }
// `;

// export const plMd2 = css`
//   @media (min-width: 768px) {
//     & {
//       padding-left: 0.5rem;
//     }
//   }
// `;

// export const plMd3 = css`
//   @media (min-width: 768px) {
//     & {
//       padding-left: 1rem;
//     }
//   }
// `;

// export const plMd4 = css`
//   @media (min-width: 768px) {
//     & {
//       padding-left: 1.5rem;
//     }
//   }
// `;

// export const plMd5 = css`
//   @media (min-width: 768px) {
//     & {
//       padding-left: 3rem;
//     }
//   }
// `;

// export const plSm0 = css`
//   @media (min-width: 576px) {
//     & {
//       padding-left: 0;
//     }
//   }
// `;

// export const plSm1 = css`
//   @media (min-width: 576px) {
//     & {
//       padding-left: 0.25rem;
//     }
//   }
// `;

// export const plSm2 = css`
//   @media (min-width: 576px) {
//     & {
//       padding-left: 0.5rem;
//     }
//   }
// `;

// export const plSm3 = css`
//   @media (min-width: 576px) {
//     & {
//       padding-left: 1rem;
//     }
//   }
// `;

// export const plSm4 = css`
//   @media (min-width: 576px) {
//     & {
//       padding-left: 1.5rem;
//     }
//   }
// `;

// export const plSm5 = css`
//   @media (min-width: 576px) {
//     & {
//       padding-left: 3rem;
//     }
//   }
// `;

// export const plXl0 = css`
//   @media (min-width: 1200px) {
//     & {
//       padding-left: 0;
//     }
//   }
// `;

// export const plXl1 = css`
//   @media (min-width: 1200px) {
//     & {
//       padding-left: 0.25rem;
//     }
//   }
// `;

// export const plXl2 = css`
//   @media (min-width: 1200px) {
//     & {
//       padding-left: 0.5rem;
//     }
//   }
// `;

// export const plXl3 = css`
//   @media (min-width: 1200px) {
//     & {
//       padding-left: 1rem;
//     }
//   }
// `;

// export const plXl4 = css`
//   @media (min-width: 1200px) {
//     & {
//       padding-left: 1.5rem;
//     }
//   }
// `;

// export const plXl5 = css`
//   @media (min-width: 1200px) {
//     & {
//       padding-left: 3rem;
//     }
//   }
// `;

// export const popover = css`
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: 1060;
//   display: block;
//   max-width: 276px;
//   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
//     'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
//     'Noto Color Emoji';
//   font-style: normal;
//   font-weight: 400;
//   line-height: 1.5;
//   text-align: left;
//   text-align: start;
//   text-decoration: none;
//   text-shadow: none;
//   text-transform: none;
//   letter-spacing: normal;
//   word-break: normal;
//   word-spacing: normal;
//   white-space: normal;
//   line-break: auto;
//   font-size: 0.875rem;
//   word-wrap: break-word;
//   background-color: #fff;
//   background-clip: padding-box;
//   border: 1px solid rgba(0, 0, 0, 0.2);
//   border-radius: 0.3rem;

//   & .arrow {
//     position: absolute;
//     display: block;
//     width: 1rem;
//     height: 0.5rem;
//     margin: 0 0.3rem;
//   }

//   & .arrow::before,
//   & .arrow::after {
//     position: absolute;
//     display: block;
//     content: '';
//     border-color: transparent;
//     border-style: solid;
//   }
// `;

// export const popoverBody = css`
//   padding: 0.5rem 0.75rem;
//   color: #212529;
// `;

// export const positionAbsolute = css`
//   position: absolute;
// `;

// export const positionFixed = css`
//   position: fixed;
// `;

// export const positionRelative = css`
//   position: relative;
// `;

// export const positionStatic = css`
//   position: static;
// `;

// export const positionSticky = css`
//   position: -webkit-sticky;
//   position: sticky;
// `;

// export const pr0 = css`
//   padding-right: 0;
// `;

// export const pr1 = css`
//   padding-right: 0.25rem;
// `;

// export const pr2 = css`
//   padding-right: 0.5rem;
// `;

// export const pr3 = css`
//   padding-right: 1rem;
// `;

// export const pr4 = css`
//   padding-right: 1.5rem;
// `;

// export const pr5 = css`
//   padding-right: 3rem;
// `;

// export const prLg0 = css`
//   @media (min-width: 992px) {
//     & {
//       padding-right: 0;
//     }
//   }
// `;

// export const prLg1 = css`
//   @media (min-width: 992px) {
//     & {
//       padding-right: 0.25rem;
//     }
//   }
// `;

// export const prLg2 = css`
//   @media (min-width: 992px) {
//     & {
//       padding-right: 0.5rem;
//     }
//   }
// `;

// export const prLg3 = css`
//   @media (min-width: 992px) {
//     & {
//       padding-right: 1rem;
//     }
//   }
// `;

// export const prLg4 = css`
//   @media (min-width: 992px) {
//     & {
//       padding-right: 1.5rem;
//     }
//   }
// `;

// export const prLg5 = css`
//   @media (min-width: 992px) {
//     & {
//       padding-right: 3rem;
//     }
//   }
// `;

// export const prMd0 = css`
//   @media (min-width: 768px) {
//     & {
//       padding-right: 0;
//     }
//   }
// `;

// export const prMd1 = css`
//   @media (min-width: 768px) {
//     & {
//       padding-right: 0.25rem;
//     }
//   }
// `;

// export const prMd2 = css`
//   @media (min-width: 768px) {
//     & {
//       padding-right: 0.5rem;
//     }
//   }
// `;

// export const prMd3 = css`
//   @media (min-width: 768px) {
//     & {
//       padding-right: 1rem;
//     }
//   }
// `;

// export const prMd4 = css`
//   @media (min-width: 768px) {
//     & {
//       padding-right: 1.5rem;
//     }
//   }
// `;

// export const prMd5 = css`
//   @media (min-width: 768px) {
//     & {
//       padding-right: 3rem;
//     }
//   }
// `;

// export const prSm0 = css`
//   @media (min-width: 576px) {
//     & {
//       padding-right: 0;
//     }
//   }
// `;

// export const prSm1 = css`
//   @media (min-width: 576px) {
//     & {
//       padding-right: 0.25rem;
//     }
//   }
// `;

// export const prSm2 = css`
//   @media (min-width: 576px) {
//     & {
//       padding-right: 0.5rem;
//     }
//   }
// `;

// export const prSm3 = css`
//   @media (min-width: 576px) {
//     & {
//       padding-right: 1rem;
//     }
//   }
// `;

// export const prSm4 = css`
//   @media (min-width: 576px) {
//     & {
//       padding-right: 1.5rem;
//     }
//   }
// `;

// export const prSm5 = css`
//   @media (min-width: 576px) {
//     & {
//       padding-right: 3rem;
//     }
//   }
// `;

// export const prXl0 = css`
//   @media (min-width: 1200px) {
//     & {
//       padding-right: 0;
//     }
//   }
// `;

// export const prXl1 = css`
//   @media (min-width: 1200px) {
//     & {
//       padding-right: 0.25rem;
//     }
//   }
// `;

// export const prXl2 = css`
//   @media (min-width: 1200px) {
//     & {
//       padding-right: 0.5rem;
//     }
//   }
// `;

// export const prXl3 = css`
//   @media (min-width: 1200px) {
//     & {
//       padding-right: 1rem;
//     }
//   }
// `;

// export const prXl4 = css`
//   @media (min-width: 1200px) {
//     & {
//       padding-right: 1.5rem;
//     }
//   }
// `;

// export const prXl5 = css`
//   @media (min-width: 1200px) {
//     & {
//       padding-right: 3rem;
//     }
//   }
// `;

// export const preScrollable = css`
//   max-height: 340px;
//   overflow-y: scroll;
// `;

// export const progress = css`
//   display: -ms-flexbox;
//   display: flex;
//   height: 1rem;
//   overflow: hidden;
//   line-height: 0;
//   font-size: 0.75rem;
//   background-color: #e9ecef;
//   border-radius: 0.25rem;
// `;

// export const progressBar = css`
//   display: -ms-flexbox;
//   display: flex;
//   -ms-flex-direction: column;
//   flex-direction: column;
//   -ms-flex-pack: center;
//   justify-content: center;
//   overflow: hidden;
//   color: #fff;
//   text-align: center;
//   white-space: nowrap;
//   background-color: #007bff;
//   transition: width 0.6s ease;

//   @media (prefers-reduced-motion: reduce) {
//     & {
//       transition: none;
//     }
//   }
// `;

// export const progressBarAnimated = css`
//   -webkit-animation: progress-bar-stripes 1s linear infinite;
//   animation: progress-bar-stripes 1s linear infinite;

//   @media (prefers-reduced-motion: reduce) {
//     & {
//       -webkit-animation: none;
//       animation: none;
//     }
//   }
// `;

// export const progressBarStriped = css`
//   background-image: linear-gradient(
//     45deg,
//     rgba(255, 255, 255, 0.15) 25%,
//     transparent 25%,
//     transparent 50%,
//     rgba(255, 255, 255, 0.15) 50%,
//     rgba(255, 255, 255, 0.15) 75%,
//     transparent 75%,
//     transparent
//   );
//   background-size: 1rem 1rem;
// `;

// export const pt0 = css`
//   padding-top: 0;
// `;

// export const pt1 = css`
//   padding-top: 0.25rem;
// `;

// export const pt2 = css`
//   padding-top: 0.5rem;
// `;

// export const pt3 = css`
//   padding-top: 1rem;
// `;

// export const pt4 = css`
//   padding-top: 1.5rem;
// `;

// export const pt5 = css`
//   padding-top: 3rem;
// `;

// export const ptLg0 = css`
//   @media (min-width: 992px) {
//     & {
//       padding-top: 0;
//     }
//   }
// `;

// export const ptLg1 = css`
//   @media (min-width: 992px) {
//     & {
//       padding-top: 0.25rem;
//     }
//   }
// `;

// export const ptLg2 = css`
//   @media (min-width: 992px) {
//     & {
//       padding-top: 0.5rem;
//     }
//   }
// `;

// export const ptLg3 = css`
//   @media (min-width: 992px) {
//     & {
//       padding-top: 1rem;
//     }
//   }
// `;

// export const ptLg4 = css`
//   @media (min-width: 992px) {
//     & {
//       padding-top: 1.5rem;
//     }
//   }
// `;

// export const ptLg5 = css`
//   @media (min-width: 992px) {
//     & {
//       padding-top: 3rem;
//     }
//   }
// `;

// export const ptMd0 = css`
//   @media (min-width: 768px) {
//     & {
//       padding-top: 0;
//     }
//   }
// `;

// export const ptMd1 = css`
//   @media (min-width: 768px) {
//     & {
//       padding-top: 0.25rem;
//     }
//   }
// `;

// export const ptMd2 = css`
//   @media (min-width: 768px) {
//     & {
//       padding-top: 0.5rem;
//     }
//   }
// `;

// export const ptMd3 = css`
//   @media (min-width: 768px) {
//     & {
//       padding-top: 1rem;
//     }
//   }
// `;

// export const ptMd4 = css`
//   @media (min-width: 768px) {
//     & {
//       padding-top: 1.5rem;
//     }
//   }
// `;

// export const ptMd5 = css`
//   @media (min-width: 768px) {
//     & {
//       padding-top: 3rem;
//     }
//   }
// `;

// export const ptSm0 = css`
//   @media (min-width: 576px) {
//     & {
//       padding-top: 0;
//     }
//   }
// `;

// export const ptSm1 = css`
//   @media (min-width: 576px) {
//     & {
//       padding-top: 0.25rem;
//     }
//   }
// `;

// export const ptSm2 = css`
//   @media (min-width: 576px) {
//     & {
//       padding-top: 0.5rem;
//     }
//   }
// `;

// export const ptSm3 = css`
//   @media (min-width: 576px) {
//     & {
//       padding-top: 1rem;
//     }
//   }
// `;

// export const ptSm4 = css`
//   @media (min-width: 576px) {
//     & {
//       padding-top: 1.5rem;
//     }
//   }
// `;

// export const ptSm5 = css`
//   @media (min-width: 576px) {
//     & {
//       padding-top: 3rem;
//     }
//   }
// `;

// export const ptXl0 = css`
//   @media (min-width: 1200px) {
//     & {
//       padding-top: 0;
//     }
//   }
// `;

// export const ptXl1 = css`
//   @media (min-width: 1200px) {
//     & {
//       padding-top: 0.25rem;
//     }
//   }
// `;

// export const ptXl2 = css`
//   @media (min-width: 1200px) {
//     & {
//       padding-top: 0.5rem;
//     }
//   }
// `;

// export const ptXl3 = css`
//   @media (min-width: 1200px) {
//     & {
//       padding-top: 1rem;
//     }
//   }
// `;

// export const ptXl4 = css`
//   @media (min-width: 1200px) {
//     & {
//       padding-top: 1.5rem;
//     }
//   }
// `;

// export const ptXl5 = css`
//   @media (min-width: 1200px) {
//     & {
//       padding-top: 3rem;
//     }
//   }
// `;

// export const px0 = css`
//   padding-right: 0;

//   padding-left: 0;
// `;

// export const px1 = css`
//   padding-right: 0.25rem;

//   padding-left: 0.25rem;
// `;

// export const px2 = css`
//   padding-right: 0.5rem;

//   padding-left: 0.5rem;
// `;

// export const px3 = css`
//   padding-right: 1rem;

//   padding-left: 1rem;
// `;

// export const px4 = css`
//   padding-right: 1.5rem;

//   padding-left: 1.5rem;
// `;

// export const px5 = css`
//   padding-right: 3rem;

//   padding-left: 3rem;
// `;

// export const pxLg0 = css`
//   @media (min-width: 992px) {
//     & {
//       padding-right: 0;
//     }

//     & {
//       padding-left: 0;
//     }
//   }
// `;

// export const pxLg1 = css`
//   @media (min-width: 992px) {
//     & {
//       padding-right: 0.25rem;
//     }

//     & {
//       padding-left: 0.25rem;
//     }
//   }
// `;

// export const pxLg2 = css`
//   @media (min-width: 992px) {
//     & {
//       padding-right: 0.5rem;
//     }

//     & {
//       padding-left: 0.5rem;
//     }
//   }
// `;

// export const pxLg3 = css`
//   @media (min-width: 992px) {
//     & {
//       padding-right: 1rem;
//     }

//     & {
//       padding-left: 1rem;
//     }
//   }
// `;

// export const pxLg4 = css`
//   @media (min-width: 992px) {
//     & {
//       padding-right: 1.5rem;
//     }

//     & {
//       padding-left: 1.5rem;
//     }
//   }
// `;

// export const pxLg5 = css`
//   @media (min-width: 992px) {
//     & {
//       padding-right: 3rem;
//     }

//     & {
//       padding-left: 3rem;
//     }
//   }
// `;

// export const pxMd0 = css`
//   @media (min-width: 768px) {
//     & {
//       padding-right: 0;
//     }

//     & {
//       padding-left: 0;
//     }
//   }
// `;

// export const pxMd1 = css`
//   @media (min-width: 768px) {
//     & {
//       padding-right: 0.25rem;
//     }

//     & {
//       padding-left: 0.25rem;
//     }
//   }
// `;

// export const pxMd2 = css`
//   @media (min-width: 768px) {
//     & {
//       padding-right: 0.5rem;
//     }

//     & {
//       padding-left: 0.5rem;
//     }
//   }
// `;

// export const pxMd3 = css`
//   @media (min-width: 768px) {
//     & {
//       padding-right: 1rem;
//     }

//     & {
//       padding-left: 1rem;
//     }
//   }
// `;

// export const pxMd4 = css`
//   @media (min-width: 768px) {
//     & {
//       padding-right: 1.5rem;
//     }

//     & {
//       padding-left: 1.5rem;
//     }
//   }
// `;

// export const pxMd5 = css`
//   @media (min-width: 768px) {
//     & {
//       padding-right: 3rem;
//     }

//     & {
//       padding-left: 3rem;
//     }
//   }
// `;

// export const pxSm0 = css`
//   @media (min-width: 576px) {
//     & {
//       padding-right: 0;
//     }

//     & {
//       padding-left: 0;
//     }
//   }
// `;

// export const pxSm1 = css`
//   @media (min-width: 576px) {
//     & {
//       padding-right: 0.25rem;
//     }

//     & {
//       padding-left: 0.25rem;
//     }
//   }
// `;

// export const pxSm2 = css`
//   @media (min-width: 576px) {
//     & {
//       padding-right: 0.5rem;
//     }

//     & {
//       padding-left: 0.5rem;
//     }
//   }
// `;

// export const pxSm3 = css`
//   @media (min-width: 576px) {
//     & {
//       padding-right: 1rem;
//     }

//     & {
//       padding-left: 1rem;
//     }
//   }
// `;

// export const pxSm4 = css`
//   @media (min-width: 576px) {
//     & {
//       padding-right: 1.5rem;
//     }

//     & {
//       padding-left: 1.5rem;
//     }
//   }
// `;

// export const pxSm5 = css`
//   @media (min-width: 576px) {
//     & {
//       padding-right: 3rem;
//     }

//     & {
//       padding-left: 3rem;
//     }
//   }
// `;

// export const pxXl0 = css`
//   @media (min-width: 1200px) {
//     & {
//       padding-right: 0;
//     }

//     & {
//       padding-left: 0;
//     }
//   }
// `;

// export const pxXl1 = css`
//   @media (min-width: 1200px) {
//     & {
//       padding-right: 0.25rem;
//     }

//     & {
//       padding-left: 0.25rem;
//     }
//   }
// `;

// export const pxXl2 = css`
//   @media (min-width: 1200px) {
//     & {
//       padding-right: 0.5rem;
//     }

//     & {
//       padding-left: 0.5rem;
//     }
//   }
// `;

// export const pxXl3 = css`
//   @media (min-width: 1200px) {
//     & {
//       padding-right: 1rem;
//     }

//     & {
//       padding-left: 1rem;
//     }
//   }
// `;

// export const pxXl4 = css`
//   @media (min-width: 1200px) {
//     & {
//       padding-right: 1.5rem;
//     }

//     & {
//       padding-left: 1.5rem;
//     }
//   }
// `;

// export const pxXl5 = css`
//   @media (min-width: 1200px) {
//     & {
//       padding-right: 3rem;
//     }

//     & {
//       padding-left: 3rem;
//     }
//   }
// `;

// export const py0 = css`
//   padding-top: 0;

//   padding-bottom: 0;
// `;

// export const py1 = css`
//   padding-top: 0.25rem;

//   padding-bottom: 0.25rem;
// `;

// export const py2 = css`
//   padding-top: 0.5rem;

//   padding-bottom: 0.5rem;
// `;

// export const py3 = css`
//   padding-top: 1rem;

//   padding-bottom: 1rem;
// `;

// export const py4 = css`
//   padding-top: 1.5rem;

//   padding-bottom: 1.5rem;
// `;

// export const py5 = css`
//   padding-top: 3rem;

//   padding-bottom: 3rem;
// `;

// export const pyLg0 = css`
//   @media (min-width: 992px) {
//     & {
//       padding-top: 0;
//     }

//     & {
//       padding-bottom: 0;
//     }
//   }
// `;

// export const pyLg1 = css`
//   @media (min-width: 992px) {
//     & {
//       padding-top: 0.25rem;
//     }

//     & {
//       padding-bottom: 0.25rem;
//     }
//   }
// `;

// export const pyLg2 = css`
//   @media (min-width: 992px) {
//     & {
//       padding-top: 0.5rem;
//     }

//     & {
//       padding-bottom: 0.5rem;
//     }
//   }
// `;

// export const pyLg3 = css`
//   @media (min-width: 992px) {
//     & {
//       padding-top: 1rem;
//     }

//     & {
//       padding-bottom: 1rem;
//     }
//   }
// `;

// export const pyLg4 = css`
//   @media (min-width: 992px) {
//     & {
//       padding-top: 1.5rem;
//     }

//     & {
//       padding-bottom: 1.5rem;
//     }
//   }
// `;

// export const pyLg5 = css`
//   @media (min-width: 992px) {
//     & {
//       padding-top: 3rem;
//     }

//     & {
//       padding-bottom: 3rem;
//     }
//   }
// `;

// export const pyMd0 = css`
//   @media (min-width: 768px) {
//     & {
//       padding-top: 0;
//     }

//     & {
//       padding-bottom: 0;
//     }
//   }
// `;

// export const pyMd1 = css`
//   @media (min-width: 768px) {
//     & {
//       padding-top: 0.25rem;
//     }

//     & {
//       padding-bottom: 0.25rem;
//     }
//   }
// `;

// export const pyMd2 = css`
//   @media (min-width: 768px) {
//     & {
//       padding-top: 0.5rem;
//     }

//     & {
//       padding-bottom: 0.5rem;
//     }
//   }
// `;

// export const pyMd3 = css`
//   @media (min-width: 768px) {
//     & {
//       padding-top: 1rem;
//     }

//     & {
//       padding-bottom: 1rem;
//     }
//   }
// `;

// export const pyMd4 = css`
//   @media (min-width: 768px) {
//     & {
//       padding-top: 1.5rem;
//     }

//     & {
//       padding-bottom: 1.5rem;
//     }
//   }
// `;

// export const pyMd5 = css`
//   @media (min-width: 768px) {
//     & {
//       padding-top: 3rem;
//     }

//     & {
//       padding-bottom: 3rem;
//     }
//   }
// `;

// export const pySm0 = css`
//   @media (min-width: 576px) {
//     & {
//       padding-top: 0;
//     }

//     & {
//       padding-bottom: 0;
//     }
//   }
// `;

// export const pySm1 = css`
//   @media (min-width: 576px) {
//     & {
//       padding-top: 0.25rem;
//     }

//     & {
//       padding-bottom: 0.25rem;
//     }
//   }
// `;

// export const pySm2 = css`
//   @media (min-width: 576px) {
//     & {
//       padding-top: 0.5rem;
//     }

//     & {
//       padding-bottom: 0.5rem;
//     }
//   }
// `;

// export const pySm3 = css`
//   @media (min-width: 576px) {
//     & {
//       padding-top: 1rem;
//     }

//     & {
//       padding-bottom: 1rem;
//     }
//   }
// `;

// export const pySm4 = css`
//   @media (min-width: 576px) {
//     & {
//       padding-top: 1.5rem;
//     }

//     & {
//       padding-bottom: 1.5rem;
//     }
//   }
// `;

// export const pySm5 = css`
//   @media (min-width: 576px) {
//     & {
//       padding-top: 3rem;
//     }

//     & {
//       padding-bottom: 3rem;
//     }
//   }
// `;

// export const pyXl0 = css`
//   @media (min-width: 1200px) {
//     & {
//       padding-top: 0;
//     }

//     & {
//       padding-bottom: 0;
//     }
//   }
// `;

// export const pyXl1 = css`
//   @media (min-width: 1200px) {
//     & {
//       padding-top: 0.25rem;
//     }

//     & {
//       padding-bottom: 0.25rem;
//     }
//   }
// `;

// export const pyXl2 = css`
//   @media (min-width: 1200px) {
//     & {
//       padding-top: 0.5rem;
//     }

//     & {
//       padding-bottom: 0.5rem;
//     }
//   }
// `;

// export const pyXl3 = css`
//   @media (min-width: 1200px) {
//     & {
//       padding-top: 1rem;
//     }

//     & {
//       padding-bottom: 1rem;
//     }
//   }
// `;

// export const pyXl4 = css`
//   @media (min-width: 1200px) {
//     & {
//       padding-top: 1.5rem;
//     }

//     & {
//       padding-bottom: 1.5rem;
//     }
//   }
// `;

// export const pyXl5 = css`
//   @media (min-width: 1200px) {
//     & {
//       padding-top: 3rem;
//     }

//     & {
//       padding-bottom: 3rem;
//     }
//   }
// `;

// export const rounded = css`
//   border-radius: 0.25rem;
// `;

// export const rounded0 = css`
//   border-radius: 0;
// `;

// export const roundedBottom = css`
//   border-bottom-right-radius: 0.25rem;
//   border-bottom-left-radius: 0.25rem;
// `;

// export const roundedCircle = css`
//   border-radius: 50%;
// `;

// export const roundedLeft = css`
//   border-top-left-radius: 0.25rem;
//   border-bottom-left-radius: 0.25rem;
// `;

// export const roundedLg = css`
//   border-radius: 0.3rem;
// `;

// export const roundedPill = css`
//   border-radius: 50rem;
// `;

// export const roundedRight = css`
//   border-top-right-radius: 0.25rem;
//   border-bottom-right-radius: 0.25rem;
// `;

// export const roundedSm = css`
//   border-radius: 0.2rem;
// `;

// export const roundedTop = css`
//   border-top-left-radius: 0.25rem;
//   border-top-right-radius: 0.25rem;
// `;

// export const row = css`
//   display: -ms-flexbox;
//   display: flex;
//   -ms-flex-wrap: wrap;
//   flex-wrap: wrap;
//   margin-right: -15px;
//   margin-left: -15px;
// `;

// export const rowCols1 = css`
//   & > * {
//     -ms-flex: 0 0 100%;
//     flex: 0 0 100%;
//     max-width: 100%;
//   }
// `;

// export const rowCols2 = css`
//   & > * {
//     -ms-flex: 0 0 50%;
//     flex: 0 0 50%;
//     max-width: 50%;
//   }
// `;

// export const rowCols3 = css`
//   & > * {
//     -ms-flex: 0 0 33.333333%;
//     flex: 0 0 33.333333%;
//     max-width: 33.333333%;
//   }
// `;

// export const rowCols4 = css`
//   & > * {
//     -ms-flex: 0 0 25%;
//     flex: 0 0 25%;
//     max-width: 25%;
//   }
// `;

// export const rowCols5 = css`
//   & > * {
//     -ms-flex: 0 0 20%;
//     flex: 0 0 20%;
//     max-width: 20%;
//   }
// `;

// export const rowCols6 = css`
//   & > * {
//     -ms-flex: 0 0 16.666667%;
//     flex: 0 0 16.666667%;
//     max-width: 16.666667%;
//   }
// `;

// export const rowColsLg1 = css`
//   @media (min-width: 992px) {
//     & > * {
//       -ms-flex: 0 0 100%;
//       flex: 0 0 100%;
//       max-width: 100%;
//     }
//   }
// `;

// export const rowColsLg2 = css`
//   @media (min-width: 992px) {
//     & > * {
//       -ms-flex: 0 0 50%;
//       flex: 0 0 50%;
//       max-width: 50%;
//     }
//   }
// `;

// export const rowColsLg3 = css`
//   @media (min-width: 992px) {
//     & > * {
//       -ms-flex: 0 0 33.333333%;
//       flex: 0 0 33.333333%;
//       max-width: 33.333333%;
//     }
//   }
// `;

// export const rowColsLg4 = css`
//   @media (min-width: 992px) {
//     & > * {
//       -ms-flex: 0 0 25%;
//       flex: 0 0 25%;
//       max-width: 25%;
//     }
//   }
// `;

// export const rowColsLg5 = css`
//   @media (min-width: 992px) {
//     & > * {
//       -ms-flex: 0 0 20%;
//       flex: 0 0 20%;
//       max-width: 20%;
//     }
//   }
// `;

// export const rowColsLg6 = css`
//   @media (min-width: 992px) {
//     & > * {
//       -ms-flex: 0 0 16.666667%;
//       flex: 0 0 16.666667%;
//       max-width: 16.666667%;
//     }
//   }
// `;

// export const rowColsMd1 = css`
//   @media (min-width: 768px) {
//     & > * {
//       -ms-flex: 0 0 100%;
//       flex: 0 0 100%;
//       max-width: 100%;
//     }
//   }
// `;

// export const rowColsMd2 = css`
//   @media (min-width: 768px) {
//     & > * {
//       -ms-flex: 0 0 50%;
//       flex: 0 0 50%;
//       max-width: 50%;
//     }
//   }
// `;

// export const rowColsMd3 = css`
//   @media (min-width: 768px) {
//     & > * {
//       -ms-flex: 0 0 33.333333%;
//       flex: 0 0 33.333333%;
//       max-width: 33.333333%;
//     }
//   }
// `;

// export const rowColsMd4 = css`
//   @media (min-width: 768px) {
//     & > * {
//       -ms-flex: 0 0 25%;
//       flex: 0 0 25%;
//       max-width: 25%;
//     }
//   }
// `;

// export const rowColsMd5 = css`
//   @media (min-width: 768px) {
//     & > * {
//       -ms-flex: 0 0 20%;
//       flex: 0 0 20%;
//       max-width: 20%;
//     }
//   }
// `;

// export const rowColsMd6 = css`
//   @media (min-width: 768px) {
//     & > * {
//       -ms-flex: 0 0 16.666667%;
//       flex: 0 0 16.666667%;
//       max-width: 16.666667%;
//     }
//   }
// `;

// export const rowColsSm1 = css`
//   @media (min-width: 576px) {
//     & > * {
//       -ms-flex: 0 0 100%;
//       flex: 0 0 100%;
//       max-width: 100%;
//     }
//   }
// `;

// export const rowColsSm2 = css`
//   @media (min-width: 576px) {
//     & > * {
//       -ms-flex: 0 0 50%;
//       flex: 0 0 50%;
//       max-width: 50%;
//     }
//   }
// `;

// export const rowColsSm3 = css`
//   @media (min-width: 576px) {
//     & > * {
//       -ms-flex: 0 0 33.333333%;
//       flex: 0 0 33.333333%;
//       max-width: 33.333333%;
//     }
//   }
// `;

// export const rowColsSm4 = css`
//   @media (min-width: 576px) {
//     & > * {
//       -ms-flex: 0 0 25%;
//       flex: 0 0 25%;
//       max-width: 25%;
//     }
//   }
// `;

// export const rowColsSm5 = css`
//   @media (min-width: 576px) {
//     & > * {
//       -ms-flex: 0 0 20%;
//       flex: 0 0 20%;
//       max-width: 20%;
//     }
//   }
// `;

// export const rowColsSm6 = css`
//   @media (min-width: 576px) {
//     & > * {
//       -ms-flex: 0 0 16.666667%;
//       flex: 0 0 16.666667%;
//       max-width: 16.666667%;
//     }
//   }
// `;

// export const rowColsXl1 = css`
//   @media (min-width: 1200px) {
//     & > * {
//       -ms-flex: 0 0 100%;
//       flex: 0 0 100%;
//       max-width: 100%;
//     }
//   }
// `;

// export const rowColsXl2 = css`
//   @media (min-width: 1200px) {
//     & > * {
//       -ms-flex: 0 0 50%;
//       flex: 0 0 50%;
//       max-width: 50%;
//     }
//   }
// `;

// export const rowColsXl3 = css`
//   @media (min-width: 1200px) {
//     & > * {
//       -ms-flex: 0 0 33.333333%;
//       flex: 0 0 33.333333%;
//       max-width: 33.333333%;
//     }
//   }
// `;

// export const rowColsXl4 = css`
//   @media (min-width: 1200px) {
//     & > * {
//       -ms-flex: 0 0 25%;
//       flex: 0 0 25%;
//       max-width: 25%;
//     }
//   }
// `;

// export const rowColsXl5 = css`
//   @media (min-width: 1200px) {
//     & > * {
//       -ms-flex: 0 0 20%;
//       flex: 0 0 20%;
//       max-width: 20%;
//     }
//   }
// `;

// export const rowColsXl6 = css`
//   @media (min-width: 1200px) {
//     & > * {
//       -ms-flex: 0 0 16.666667%;
//       flex: 0 0 16.666667%;
//       max-width: 16.666667%;
//     }
//   }
// `;

// export const shadow = css`
//   box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
// `;

// export const shadowLg = css`
//   box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
// `;

// export const shadowNone = css`
//   box-shadow: none;
// `;

// export const shadowSm = css`
//   box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
// `;

// export const small = css`
//   font-size: 80%;
//   font-weight: 400;
// `;

// export const spinnerBorder = css`
//   display: inline-block;
//   width: 2rem;
//   height: 2rem;
//   vertical-align: text-bottom;
//   border: 0.25em solid currentColor;
//   border-right-color: transparent;
//   border-radius: 50%;
//   -webkit-animation: spinner-border 0.75s linear infinite;
//   animation: spinner-border 0.75s linear infinite;
// `;

// export const spinnerBorderSm = css`
//   width: 1rem;
//   height: 1rem;
//   border-width: 0.2em;
// `;

// export const spinnerGrow = css`
//   display: inline-block;
//   width: 2rem;
//   height: 2rem;
//   vertical-align: text-bottom;
//   background-color: currentColor;
//   border-radius: 50%;
//   opacity: 0;
//   -webkit-animation: spinner-grow 0.75s linear infinite;
//   animation: spinner-grow 0.75s linear infinite;
// `;

// export const spinnerGrowSm = css`
//   width: 1rem;
//   height: 1rem;
// `;

// export const srOnly = css`
//   position: absolute;
//   width: 1px;
//   height: 1px;
//   padding: 0;
//   margin: -1px;
//   overflow: hidden;
//   clip: rect(0, 0, 0, 0);
//   white-space: nowrap;
//   border: 0;
// `;

// export const srOnlyFocusable = css`
//   &:active,
//   &:focus {
//     position: static;
//     width: auto;
//     height: auto;
//     overflow: visible;
//     clip: auto;
//     white-space: normal;
//   }
// `;

// export const stickyTop = css`
//   @supports ((position: -webkit-sticky) or (position: sticky)) {
//     & {
//       position: -webkit-sticky;
//       position: sticky;
//       top: 0;
//       z-index: 1020;
//     }
//   }
// `;

// export const stretchedLink = css`
//   &::after {
//     position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     z-index: 1;
//     pointer-events: auto;
//     content: '';
//     background-color: rgba(0, 0, 0, 0);
//   }
// `;

// export const tabContent = css`
//   & > .tab-pane {
//     display: none;
//   }

//   & > ${active} {
//     display: block;
//   }
// `;

// export const table = css`
//   width: 100%;
//   margin-bottom: 1rem;
//   color: #212529;

//   & th,
//   & td {
//     padding: 0.75rem;
//     vertical-align: top;
//     border-top: 1px solid #dee2e6;
//   }

//   & thead th {
//     vertical-align: bottom;
//     border-bottom: 2px solid #dee2e6;
//   }

//   & tbody + tbody {
//     border-top: 2px solid #dee2e6;
//   }

//   & .thead-dark th {
//     color: #fff;
//     background-color: #343a40;
//     border-color: #454d55;
//   }

//   & .thead-light th {
//     color: #495057;
//     background-color: #e9ecef;
//     border-color: #dee2e6;
//   }

//   @media print {
//     & {
//       border-collapse: collapse;
//     }

//     & td,
//     & th {
//       background-color: #fff;
//     }

//     & .thead-dark th {
//       color: inherit;
//       border-color: #dee2e6;
//     }
//   }
// `;

// export const tableActive = css`
//   &,
//   & > th,
//   & > td {
//     background-color: rgba(0, 0, 0, 0.075);
//   }
// `;

// export const tableBordered = css`
//   border: 1px solid #dee2e6;

//   & th,
//   & td {
//     border: 1px solid #dee2e6;
//   }

//   & thead th,
//   & thead td {
//     border-bottom-width: 2px;
//   }

//   @media print {
//     & th,
//     & td {
//       border: 1px solid #dee2e6;
//     }
//   }
// `;

// export const tableBorderless = css`
//   & th,
//   & td,
//   & thead th,
//   & tbody + tbody {
//     border: 0;
//   }
// `;

// export const tableDanger = css`
//   &,
//   & > th,
//   & > td {
//     background-color: #f5c6cb;
//   }

//   & th,
//   & td,
//   & thead th,
//   & tbody + tbody {
//     border-color: #ed969e;
//   }
// `;

// export const tableStriped = css`
//   & tbody tr:nth-of-type(odd) {
//     background-color: rgba(0, 0, 0, 0.05);
//   }
// `;

// export const tableHover = css`
//   & tbody tr:hover {
//     color: #212529;
//     background-color: rgba(0, 0, 0, 0.075);
//   }

//   & ${tablePrimary}:hover {
//     background-color: #9fcdff;
//   }

//   & ${tablePrimary}:hover > td,
//   & ${tablePrimary}:hover > th {
//     background-color: #9fcdff;
//   }

//   & ${tableSecondary}:hover {
//     background-color: #c8cbcf;
//   }

//   & ${tableSecondary}:hover > td,
//   & ${tableSecondary}:hover > th {
//     background-color: #c8cbcf;
//   }

//   & ${tableSuccess}:hover {
//     background-color: #b1dfbb;
//   }

//   & ${tableSuccess}:hover > td,
//   & ${tableSuccess}:hover > th {
//     background-color: #b1dfbb;
//   }

//   & ${tableInfo}:hover {
//     background-color: #abdde5;
//   }

//   & ${tableInfo}:hover > td,
//   & ${tableInfo}:hover > th {
//     background-color: #abdde5;
//   }

//   & ${tableWarning}:hover {
//     background-color: #ffe8a1;
//   }

//   & ${tableWarning}:hover > td,
//   & ${tableWarning}:hover > th {
//     background-color: #ffe8a1;
//   }

//   & ${tableDanger}:hover {
//     background-color: #f1b0b7;
//   }

//   & ${tableDanger}:hover > td,
//   & ${tableDanger}:hover > th {
//     background-color: #f1b0b7;
//   }

//   & ${tableLight}:hover {
//     background-color: #ececf6;
//   }

//   & ${tableLight}:hover > td,
//   & ${tableLight}:hover > th {
//     background-color: #ececf6;
//   }

//   & ${tableDark}:hover {
//     background-color: #b9bbbe;
//   }

//   & ${tableDark}:hover > td,
//   & ${tableDark}:hover > th {
//     background-color: #b9bbbe;
//   }

//   & ${tableActive}:hover {
//     background-color: rgba(0, 0, 0, 0.075);
//   }

//   & ${tableActive}:hover > td,
//   & ${tableActive}:hover > th {
//     background-color: rgba(0, 0, 0, 0.075);
//   }
// `;

// export const tableDark = css`
//   &,
//   & > th,
//   & > td {
//     background-color: #c6c8ca;
//   }

//   & th,
//   & td,
//   & thead th,
//   & tbody + tbody {
//     border-color: #95999c;
//   }

//   color: #fff;
//   background-color: #343a40;

//   & th,
//   & td,
//   & thead th {
//     border-color: #454d55;
//   }

//   &${tableBordered} {
//     border: 0;
//   }

//   &${tableStriped} tbody tr:nth-of-type(odd) {
//     background-color: rgba(255, 255, 255, 0.05);
//   }

//   &${tableHover} tbody tr:hover {
//     color: #fff;
//     background-color: rgba(255, 255, 255, 0.075);
//   }

//   @media print {
//     & {
//       color: inherit;
//     }

//     & th,
//     & td,
//     & thead th,
//     & tbody + tbody {
//       border-color: #dee2e6;
//     }
//   }
// `;

// export const tablePrimary = css`
//   &,
//   & > th,
//   & > td {
//     background-color: #b8daff;
//   }

//   & th,
//   & td,
//   & thead th,
//   & tbody + tbody {
//     border-color: #7abaff;
//   }
// `;

// export const tableSecondary = css`
//   &,
//   & > th,
//   & > td {
//     background-color: #d6d8db;
//   }

//   & th,
//   & td,
//   & thead th,
//   & tbody + tbody {
//     border-color: #b3b7bb;
//   }
// `;

// export const tableSuccess = css`
//   &,
//   & > th,
//   & > td {
//     background-color: #c3e6cb;
//   }

//   & th,
//   & td,
//   & thead th,
//   & tbody + tbody {
//     border-color: #8fd19e;
//   }
// `;

// export const tableInfo = css`
//   &,
//   & > th,
//   & > td {
//     background-color: #bee5eb;
//   }

//   & th,
//   & td,
//   & thead th,
//   & tbody + tbody {
//     border-color: #86cfda;
//   }
// `;

// export const tableWarning = css`
//   &,
//   & > th,
//   & > td {
//     background-color: #ffeeba;
//   }

//   & th,
//   & td,
//   & thead th,
//   & tbody + tbody {
//     border-color: #ffdf7e;
//   }
// `;

// export const tableLight = css`
//   &,
//   & > th,
//   & > td {
//     background-color: #fdfdfe;
//   }

//   & th,
//   & td,
//   & thead th,
//   & tbody + tbody {
//     border-color: #fbfcfc;
//   }
// `;

// export const tableResponsive = css`
//   display: block;
//   width: 100%;
//   overflow-x: auto;
//   -webkit-overflow-scrolling: touch;

//   & > ${tableBordered} {
//     border: 0;
//   }
// `;

// export const tableResponsiveLg = css`
//   @media (max-width: 991.98px) {
//     & {
//       display: block;
//       width: 100%;
//       overflow-x: auto;
//       -webkit-overflow-scrolling: touch;
//     }

//     & > ${tableBordered} {
//       border: 0;
//     }
//   }
// `;

// export const tableResponsiveMd = css`
//   @media (max-width: 767.98px) {
//     & {
//       display: block;
//       width: 100%;
//       overflow-x: auto;
//       -webkit-overflow-scrolling: touch;
//     }

//     & > ${tableBordered} {
//       border: 0;
//     }
//   }
// `;

// export const tableResponsiveSm = css`
//   @media (max-width: 575.98px) {
//     & {
//       display: block;
//       width: 100%;
//       overflow-x: auto;
//       -webkit-overflow-scrolling: touch;
//     }

//     & > ${tableBordered} {
//       border: 0;
//     }
//   }
// `;

// export const tableResponsiveXl = css`
//   @media (max-width: 1199.98px) {
//     & {
//       display: block;
//       width: 100%;
//       overflow-x: auto;
//       -webkit-overflow-scrolling: touch;
//     }

//     & > ${tableBordered} {
//       border: 0;
//     }
//   }
// `;

// export const tableSm = css`
//   & th,
//   & td {
//     padding: 0.3rem;
//   }
// `;

// export const textBlack50 = css`
//   color: rgba(0, 0, 0, 0.5);
// `;

// export const textBody = css`
//   color: #212529;
// `;

// export const textBreak = css`
//   word-break: break-word;
//   word-wrap: break-word;
// `;

// export const textCapitalize = css`
//   text-transform: capitalize;
// `;

// export const textCenter = css`
//   text-align: center;
// `;

// export const textDanger = css`
//   color: #dc3545;

//   a&:hover,
//   a&:focus {
//     color: #a71d2a;
//   }
// `;

// export const textDark = css`
//   color: #343a40;

//   a&:hover,
//   a&:focus {
//     color: #121416;
//   }
// `;

// export const textDecorationNone = css`
//   text-decoration: none;
// `;

// export const textHide = css`
//   font: 0/0 a;
//   color: transparent;
//   text-shadow: none;
//   background-color: transparent;
//   border: 0;
// `;

// export const textInfo = css`
//   color: #17a2b8;

//   a&:hover,
//   a&:focus {
//     color: #0f6674;
//   }
// `;

// export const textJustify = css`
//   text-align: justify;
// `;

// export const textLeft = css`
//   text-align: left;
// `;

// export const textLgCenter = css`
//   @media (min-width: 992px) {
//     & {
//       text-align: center;
//     }
//   }
// `;

// export const textLgLeft = css`
//   @media (min-width: 992px) {
//     & {
//       text-align: left;
//     }
//   }
// `;

// export const textLgRight = css`
//   @media (min-width: 992px) {
//     & {
//       text-align: right;
//     }
//   }
// `;

// export const textLight = css`
//   color: #f8f9fa;

//   a&:hover,
//   a&:focus {
//     color: #cbd3da;
//   }
// `;

// export const textLowercase = css`
//   text-transform: lowercase;
// `;

// export const textMdCenter = css`
//   @media (min-width: 768px) {
//     & {
//       text-align: center;
//     }
//   }
// `;

// export const textMdLeft = css`
//   @media (min-width: 768px) {
//     & {
//       text-align: left;
//     }
//   }
// `;

// export const textMdRight = css`
//   @media (min-width: 768px) {
//     & {
//       text-align: right;
//     }
//   }
// `;

// export const textMonospace = css`
//   font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
// `;

// export const textMuted = css`
//   color: #6c757d;
// `;

// export const textNowrap = css`
//   white-space: nowrap;
// `;

// export const textPrimary = css`
//   color: #007bff;

//   a&:hover,
//   a&:focus {
//     color: #0056b3;
//   }
// `;

// export const textReset = css`
//   color: inherit;
// `;

// export const textRight = css`
//   text-align: right;
// `;

// export const textSecondary = css`
//   color: #6c757d;

//   a&:hover,
//   a&:focus {
//     color: #494f54;
//   }
// `;

// export const textSmCenter = css`
//   @media (min-width: 576px) {
//     & {
//       text-align: center;
//     }
//   }
// `;

// export const textSmLeft = css`
//   @media (min-width: 576px) {
//     & {
//       text-align: left;
//     }
//   }
// `;

// export const textSmRight = css`
//   @media (min-width: 576px) {
//     & {
//       text-align: right;
//     }
//   }
// `;

// export const textSuccess = css`
//   color: #28a745;

//   a&:hover,
//   a&:focus {
//     color: #19692c;
//   }
// `;

// export const textTruncate = css`
//   overflow: hidden;
//   text-overflow: ellipsis;
//   white-space: nowrap;
// `;

// export const textUppercase = css`
//   text-transform: uppercase;
// `;

// export const textWarning = css`
//   color: #ffc107;

//   a&:hover,
//   a&:focus {
//     color: #ba8b00;
//   }
// `;

// export const textWhite = css`
//   color: #fff;
// `;

// export const textWhite50 = css`
//   color: rgba(255, 255, 255, 0.5);
// `;

// export const textWrap = css`
//   white-space: normal;
// `;

// export const textXlCenter = css`
//   @media (min-width: 1200px) {
//     & {
//       text-align: center;
//     }
//   }
// `;

// export const textXlLeft = css`
//   @media (min-width: 1200px) {
//     & {
//       text-align: left;
//     }
//   }
// `;

// export const textXlRight = css`
//   @media (min-width: 1200px) {
//     & {
//       text-align: right;
//     }
//   }
// `;

// export const toast = css`
//   -ms-flex-preferred-size: 350px;
//   flex-basis: 350px;
//   max-width: 350px;
//   font-size: 0.875rem;
//   background-color: rgba(255, 255, 255, 0.85);
//   background-clip: padding-box;
//   border: 1px solid rgba(0, 0, 0, 0.1);
//   box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);
//   opacity: 0;
//   border-radius: 0.25rem;

//   &:not(:last-child) {
//     margin-bottom: 0.75rem;
//   }

//   &.showing {
//     opacity: 1;
//   }

//   &${show} {
//     display: block;
//     opacity: 1;
//   }

//   &.hide {
//     display: none;
//   }
// `;

// export const toastBody = css`
//   padding: 0.75rem;
// `;

// export const toastHeader = css`
//   display: -ms-flexbox;
//   display: flex;
//   -ms-flex-align: center;
//   align-items: center;
//   padding: 0.25rem 0.75rem;
//   color: #6c757d;
//   background-color: rgba(255, 255, 255, 0.85);
//   background-clip: padding-box;
//   border-bottom: 1px solid rgba(0, 0, 0, 0.05);
//   border-top-left-radius: calc(0.25rem - 1px);
//   border-top-right-radius: calc(0.25rem - 1px);
// `;

// export const tooltip = css`
//   position: absolute;
//   z-index: 1070;
//   display: block;
//   margin: 0;
//   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
//     'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
//     'Noto Color Emoji';
//   font-style: normal;
//   font-weight: 400;
//   line-height: 1.5;
//   text-align: left;
//   text-align: start;
//   text-decoration: none;
//   text-shadow: none;
//   text-transform: none;
//   letter-spacing: normal;
//   word-break: normal;
//   word-spacing: normal;
//   white-space: normal;
//   line-break: auto;
//   font-size: 0.875rem;
//   word-wrap: break-word;
//   opacity: 0;

//   &${show} {
//     opacity: 0.9;
//   }

//   & .arrow {
//     position: absolute;
//     display: block;
//     width: 0.8rem;
//     height: 0.4rem;
//   }

//   & .arrow::before {
//     position: absolute;
//     content: '';
//     border-color: transparent;
//     border-style: solid;
//   }
// `;

// export const tooltipInner = css`
//   max-width: 200px;
//   padding: 0.25rem 0.5rem;
//   color: #fff;
//   text-align: center;
//   background-color: #000;
//   border-radius: 0.25rem;
// `;

// export const userSelectAll = css`
//   -webkit-user-select: all;
//   -moz-user-select: all;
//   -ms-user-select: all;
//   user-select: all;
// `;

// export const userSelectAuto = css`
//   -webkit-user-select: auto;
//   -moz-user-select: auto;
//   -ms-user-select: auto;
//   user-select: auto;
// `;

// export const userSelectNone = css`
//   -webkit-user-select: none;
//   -moz-user-select: none;
//   -ms-user-select: none;
//   user-select: none;
// `;

// export const vh100 = css`
//   height: 100vh;
// `;

// export const visible = css`
//   visibility: visible;
// `;

// export const vw100 = css`
//   width: 100vw;
// `;

// export const w25 = css`
//   width: 25%;
// `;

// export const w50 = css`
//   width: 50%;
// `;

// export const w75 = css`
//   width: 75%;
// `;

// export const w100 = css`
//   width: 100%;
// `;

// export const wAuto = css`
//   width: auto;
// `;

// export const wasValidated = css`
//   & :valid ~ ${validFeedback}, & :valid ~ ${validTooltip} {
//     display: block;
//   }

//   & ${formControl}:valid {
//     border-color: #28a745;
//     padding-right: calc(1.5em + 0.75rem);
//     background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
//     background-repeat: no-repeat;
//     background-position: right calc(0.375em + 0.1875rem) center;
//     background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
//   }

//   & ${formControl}:valid:focus {
//     border-color: #28a745;
//     box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
//   }

//   & textarea${formControl}:valid {
//     padding-right: calc(1.5em + 0.75rem);
//     background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
//   }

//   & ${customSelect}:valid {
//     border-color: #28a745;
//     padding-right: calc(0.75em + 2.3125rem);
//     background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e")
//         no-repeat right 0.75rem center/8px 10px,
//       url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e")
//         #fff no-repeat center right 1.75rem / calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
//   }

//   & ${customSelect}:valid:focus {
//     border-color: #28a745;
//     box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
//   }

//   & ${formCheckInput}:valid ~ ${formCheckLabel} {
//     color: #28a745;
//   }

//   & ${formCheckInput}:valid ~ ${validFeedback}, & ${formCheckInput}:valid ~ ${validTooltip} {
//     display: block;
//   }

//   & ${customControlInput}:valid ~ ${customControlLabel} {
//     color: #28a745;
//   }

//   & ${customControlInput}:valid ~ ${customControlLabel}::before {
//     border-color: #28a745;
//   }

//   & ${customControlInput}:valid:checked ~ ${customControlLabel}::before {
//     border-color: #34ce57;
//     background-color: #34ce57;
//   }

//   & ${customControlInput}:valid:focus ~ ${customControlLabel}::before {
//     box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
//   }

//   & ${customControlInput}:valid:focus:not(:checked) ~ ${customControlLabel}::before {
//     border-color: #28a745;
//   }

//   & ${customFileInput}:valid ~ ${customFileLabel} {
//     border-color: #28a745;
//   }

//   & ${customFileInput}:valid:focus ~ ${customFileLabel} {
//     border-color: #28a745;
//     box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
//   }

//   & :invalid ~ ${invalidFeedback}, & :invalid ~ ${invalidTooltip} {
//     display: block;
//   }

//   & ${formControl}:invalid {
//     border-color: #dc3545;
//     padding-right: calc(1.5em + 0.75rem);
//     background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
//     background-repeat: no-repeat;
//     background-position: right calc(0.375em + 0.1875rem) center;
//     background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
//   }

//   & ${formControl}:invalid:focus {
//     border-color: #dc3545;
//     box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
//   }

//   & textarea${formControl}:invalid {
//     padding-right: calc(1.5em + 0.75rem);
//     background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
//   }

//   & ${customSelect}:invalid {
//     border-color: #dc3545;
//     padding-right: calc(0.75em + 2.3125rem);
//     background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e")
//         no-repeat right 0.75rem center/8px 10px,
//       url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e")
//         #fff no-repeat center right 1.75rem / calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
//   }

//   & ${customSelect}:invalid:focus {
//     border-color: #dc3545;
//     box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
//   }

//   & ${formCheckInput}:invalid ~ ${formCheckLabel} {
//     color: #dc3545;
//   }

//   &
//     ${formCheckInput}:invalid
//     ~ ${invalidFeedback},
//     &
//     ${formCheckInput}:invalid
//     ~ ${invalidTooltip} {
//     display: block;
//   }

//   & ${customControlInput}:invalid ~ ${customControlLabel} {
//     color: #dc3545;
//   }

//   & ${customControlInput}:invalid ~ ${customControlLabel}::before {
//     border-color: #dc3545;
//   }

//   & ${customControlInput}:invalid:checked ~ ${customControlLabel}::before {
//     border-color: #e4606d;
//     background-color: #e4606d;
//   }

//   & ${customControlInput}:invalid:focus ~ ${customControlLabel}::before {
//     box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
//   }

//   & ${customControlInput}:invalid:focus:not(:checked) ~ ${customControlLabel}::before {
//     border-color: #dc3545;
//   }

//   & ${customFileInput}:invalid ~ ${customFileLabel} {
//     border-color: #dc3545;
//   }

//   & ${customFileInput}:invalid:focus ~ ${customFileLabel} {
//     border-color: #dc3545;
//     box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
//   }
// `;

// export const global = css`
//   :root {
//     --blue: #007bff;
//     --indigo: #6610f2;
//     --purple: #6f42c1;
//     --pink: #e83e8c;
//     --red: #dc3545;
//     --orange: #fd7e14;
//     --yellow: #ffc107;
//     --green: #28a745;
//     --teal: #20c997;
//     --cyan: #17a2b8;
//     --white: #fff;
//     --gray: #6c757d;
//     --gray-dark: #343a40;
//     --primary: #007bff;
//     --secondary: #6c757d;
//     --success: #28a745;
//     --info: #17a2b8;
//     --warning: #ffc107;
//     --danger: #dc3545;
//     --light: #f8f9fa;
//     --dark: #343a40;
//     --breakpoint-xs: 0;
//     --breakpoint-sm: 576px;
//     --breakpoint-md: 768px;
//     --breakpoint-lg: 992px;
//     --breakpoint-xl: 1200px;
//     --font-family-sans-serif: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
//       'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
//       'Segoe UI Symbol', 'Noto Color Emoji';
//     --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
//       'Courier New', monospace;
//   }

//   *,
//   *::before,
//   *::after {
//     box-sizing: border-box;
//   }

//   html {
//     font-family: sans-serif;
//     line-height: 1.15;
//     -webkit-text-size-adjust: 100%;
//     -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
//   }

//   article,
//   aside,
//   figcaption,
//   figure,
//   footer,
//   header,
//   hgroup,
//   main,
//   nav,
//   section {
//     display: block;
//   }

//   body {
//     margin: 0;
//     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
//       'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
//       'Noto Color Emoji';
//     font-size: 1rem;
//     font-weight: 400;
//     line-height: 1.5;
//     color: #212529;
//     text-align: left;
//     background-color: #fff;
//   }

//   [tabindex='-1']:focus:not(:focus-visible) {
//     outline: 0;
//   }

//   hr {
//     box-sizing: content-box;
//     height: 0;
//     overflow: visible;
//   }

//   h1,
//   h2,
//   h3,
//   h4,
//   h5,
//   h6 {
//     margin-top: 0;
//     margin-bottom: 0.5rem;
//   }

//   p {
//     margin-top: 0;
//     margin-bottom: 1rem;
//   }

//   abbr[title],
//   abbr[data-original-title] {
//     text-decoration: underline;
//     -webkit-text-decoration: underline dotted;
//     text-decoration: underline dotted;
//     cursor: help;
//     border-bottom: 0;
//     -webkit-text-decoration-skip-ink: none;
//     text-decoration-skip-ink: none;
//   }

//   address {
//     margin-bottom: 1rem;
//     font-style: normal;
//     line-height: inherit;
//   }

//   ol,
//   ul,
//   dl {
//     margin-top: 0;
//     margin-bottom: 1rem;
//   }

//   ol ol,
//   ul ul,
//   ol ul,
//   ul ol {
//     margin-bottom: 0;
//   }

//   dt {
//     font-weight: 700;
//   }

//   dd {
//     margin-bottom: 0.5rem;
//     margin-left: 0;
//   }

//   blockquote {
//     margin: 0 0 1rem;
//   }

//   b,
//   strong {
//     font-weight: bolder;
//   }

//   small {
//     font-size: 80%;
//   }

//   sub,
//   sup {
//     position: relative;
//     font-size: 75%;
//     line-height: 0;
//     vertical-align: baseline;
//   }

//   sub {
//     bottom: -0.25em;
//   }

//   sup {
//     top: -0.5em;
//   }

//   a {
//     color: #007bff;
//     text-decoration: none;
//     background-color: transparent;
//   }

//   a:hover {
//     color: #0056b3;
//     text-decoration: underline;
//   }

//   a:not([href]):not([class]) {
//     color: inherit;
//     text-decoration: none;
//   }

//   a:not([href]):not([class]):hover {
//     color: inherit;
//     text-decoration: none;
//   }

//   pre,
//   code,
//   kbd,
//   samp {
//     font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
//       monospace;
//     font-size: 1em;
//   }

//   pre {
//     margin-top: 0;
//     margin-bottom: 1rem;
//     overflow: auto;
//     -ms-overflow-style: scrollbar;
//   }

//   figure {
//     margin: 0 0 1rem;
//   }

//   img {
//     vertical-align: middle;
//     border-style: none;
//   }

//   svg {
//     overflow: hidden;
//     vertical-align: middle;
//   }

//   table {
//     border-collapse: collapse;
//   }

//   caption {
//     padding-top: 0.75rem;
//     padding-bottom: 0.75rem;
//     color: #6c757d;
//     text-align: left;
//     caption-side: bottom;
//   }

//   th {
//     text-align: inherit;
//     text-align: -webkit-match-parent;
//   }

//   label {
//     display: inline-block;
//     margin-bottom: 0.5rem;
//   }

//   button {
//     border-radius: 0;
//   }

//   button:focus {
//     outline: 1px dotted;
//     outline: 5px auto -webkit-focus-ring-color;
//   }

//   input,
//   button,
//   select,
//   optgroup,
//   textarea {
//     margin: 0;
//     font-family: inherit;
//     font-size: inherit;
//     line-height: inherit;
//   }

//   button,
//   input {
//     overflow: visible;
//   }

//   button,
//   select {
//     text-transform: none;
//   }

//   [role='button'] {
//     cursor: pointer;
//   }

//   select {
//     word-wrap: normal;
//   }

//   button,
//   [type='button'],
//   [type='reset'],
//   [type='submit'] {
//     -webkit-appearance: button;
//   }

//   button:not(:disabled),
//   [type='button']:not(:disabled),
//   [type='reset']:not(:disabled),
//   [type='submit']:not(:disabled) {
//     cursor: pointer;
//   }

//   button::-moz-focus-inner,
//   [type='button']::-moz-focus-inner,
//   [type='reset']::-moz-focus-inner,
//   [type='submit']::-moz-focus-inner {
//     padding: 0;
//     border-style: none;
//   }

//   input[type='radio'],
//   input[type='checkbox'] {
//     box-sizing: border-box;
//     padding: 0;
//   }

//   textarea {
//     overflow: auto;
//     resize: vertical;
//   }

//   fieldset {
//     min-width: 0;
//     padding: 0;
//     margin: 0;
//     border: 0;
//   }

//   legend {
//     display: block;
//     width: 100%;
//     max-width: 100%;
//     padding: 0;
//     margin-bottom: 0.5rem;
//     font-size: 1.5rem;
//     line-height: inherit;
//     color: inherit;
//     white-space: normal;
//   }

//   progress {
//     vertical-align: baseline;
//   }

//   [type='number']::-webkit-inner-spin-button,
//   [type='number']::-webkit-outer-spin-button {
//     height: auto;
//   }

//   [type='search'] {
//     outline-offset: -2px;
//     -webkit-appearance: none;
//   }

//   [type='search']::-webkit-search-decoration {
//     -webkit-appearance: none;
//   }

//   ::-webkit-file-upload-button {
//     font: inherit;
//     -webkit-appearance: button;
//   }

//   output {
//     display: inline-block;
//   }

//   summary {
//     display: list-item;
//     cursor: pointer;
//   }

//   template {
//     display: none;
//   }

//   [hidden] {
//     display: none;
//   }

//   h1,
//   h2,
//   h3,
//   h4,
//   h5,
//   h6 {
//     margin-bottom: 0.5rem;
//     font-weight: 500;
//     line-height: 1.2;
//   }

//   h1 {
//     font-size: 2.5rem;
//   }

//   h2 {
//     font-size: 2rem;
//   }

//   h3 {
//     font-size: 1.75rem;
//   }

//   h4 {
//     font-size: 1.5rem;
//   }

//   h5 {
//     font-size: 1.25rem;
//   }

//   h6 {
//     font-size: 1rem;
//   }

//   hr {
//     margin-top: 1rem;
//     margin-bottom: 1rem;
//     border: 0;
//     border-top: 1px solid rgba(0, 0, 0, 0.1);
//   }

//   small {
//     font-size: 80%;
//     font-weight: 400;
//   }

//   mark {
//     padding: 0.2em;
//     background-color: #fcf8e3;
//   }

//   code {
//     font-size: 87.5%;
//     color: #e83e8c;
//     word-wrap: break-word;
//   }

//   a > code {
//     color: inherit;
//   }

//   kbd {
//     padding: 0.2rem 0.4rem;
//     font-size: 87.5%;
//     color: #fff;
//     background-color: #212529;
//     border-radius: 0.2rem;
//   }

//   kbd kbd {
//     padding: 0;
//     font-size: 100%;
//     font-weight: 700;
//   }

//   pre {
//     display: block;
//     font-size: 87.5%;
//     color: #212529;
//   }

//   pre code {
//     font-size: inherit;
//     color: inherit;
//     word-break: normal;
//   }

//   @-webkit-keyframes progress-bar-stripes {
//     from {
//       background-position: 1rem 0;
//     }

//     to {
//       background-position: 0 0;
//     }
//   }

//   @keyframes progress-bar-stripes {
//     from {
//       background-position: 1rem 0;
//     }

//     to {
//       background-position: 0 0;
//     }
//   }

//   @-webkit-keyframes spinner-border {
//     to {
//       -webkit-transform: rotate(360deg);
//       transform: rotate(360deg);
//     }
//   }

//   @keyframes spinner-border {
//     to {
//       -webkit-transform: rotate(360deg);
//       transform: rotate(360deg);
//     }
//   }

//   @-webkit-keyframes spinner-grow {
//     0% {
//       -webkit-transform: scale(0);
//       transform: scale(0);
//     }

//     50% {
//       opacity: 1;
//       -webkit-transform: none;
//       transform: none;
//     }
//   }

//   @keyframes spinner-grow {
//     0% {
//       -webkit-transform: scale(0);
//       transform: scale(0);
//     }

//     50% {
//       opacity: 1;
//       -webkit-transform: none;
//       transform: none;
//     }
//   }

//   @media print {
//     *,
//     *::before,
//     *::after {
//       text-shadow: none;
//       box-shadow: none;
//     }

//     a:not(${btn}) {
//       text-decoration: underline;
//     }

//     abbr[title]::after {
//       content: ' (' attr(title) ')';
//     }

//     pre {
//       white-space: pre-wrap;
//     }

//     pre,
//     blockquote {
//       border: 1px solid #adb5bd;
//       page-break-inside: avoid;
//     }

//     thead {
//       display: table-header-group;
//     }

//     tr,
//     img {
//       page-break-inside: avoid;
//     }

//     p,
//     h2,
//     h3 {
//       orphans: 3;
//       widows: 3;
//     }

//     h2,
//     h3 {
//       page-break-after: avoid;
//     }

//     @page {
//       size: a3;
//     }

//     body {
//       min-width: 992px;
//     }
//   }
// `;
