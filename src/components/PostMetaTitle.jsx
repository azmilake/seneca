import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const PostMetaTitle = ({ category, date, title, center }) => {
  return (
    <>
      <div className="flex items-center space-x-4">
        <div className="uppercase">{category}</div>
        <span>&bull;</span>
        <div>{date}</div>
      </div>
      <Link to="/post/detail">
        <h2 className={`text-2xl mt-5 ${center ? 'text-center' : ''}`}>
          {title}
        </h2>
      </Link>
    </>
  );
};

export default PostMetaTitle;
