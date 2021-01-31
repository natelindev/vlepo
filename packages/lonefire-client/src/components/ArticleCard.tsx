import React from 'react';

import { Card, CardBody, CardImgOverlay } from './base';
import Tag from './Tag';

export interface ArticleCardProps {
  title: string;
  headerImage: string;
  abstract: string;
  date: Date;
  link: string;
  tags: string[];
}
const ArticleCard: React.FC<ArticleCardProps> = (props: ArticleCardProps) => {
  const { title, headerImage, abstract, date, link, tags } = props;
  return (
    <Card className="my-3 mx-auto mx-md-3 border-0 animated--shadow-translate">
      <img
        className="card-img-top darken-20 text-economica"
        src={headerImage}
        alt="Speed up your build by putting node_modules in ram Header"
      />
      <CardImgOverlay>
        {['Javascript', 'Node'].map((t) => (
          <Tag name={t} href={`/Tag/${t}`} />
        ))}
      </CardImgOverlay>
      <CardBody className="d-flex flex-column">
        <div className="d-flex">
          <h4 className="mx-auto text-economica">{title}</h4>
        </div>
        <div className="text-titillium d-flex my-3 flex-wrap flex-grow-1 text-break">
          After a day of diligently copying from Stackoverflow and Google searches, you finally
          ready to build...
        </div>
        <div className="d-flex align-self-center text-economica justify-content-between">
          <div className="mt-auto mb-2"> 2020-04-03 </div>
          <a className="btn border-draw-within mx-2 z-2" href="/Article/View/54">
            More
          </a>
          <div className="mt-auto mb-2">
            <i className="material-icons img-h-32">remove_red_eye</i>
            20
          </div>
        </div>
        <a className="full-div-link z-1" href="/Article/View/54" />
      </CardBody>
    </Card>
  );
};

export default ArticleCard;
