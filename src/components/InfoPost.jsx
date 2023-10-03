import PostAuthor from './PostAuthor';
import PostMetaTitle from './PostMetaTitle';

/* eslint-disable react/prop-types */
const InfoPost = ({
  category,
  date,
  title,
  shortDescription,
  authorAvatar,
  authorName,
  authorJob,
}) => {
  return (
    <>
      <PostMetaTitle category={category} title={title} date={date} />
      <p className="mt-4 w-10/12 text-sm text-gray-400">{shortDescription}</p>
      <PostAuthor
        authorAvatar={authorAvatar}
        authorJob={authorJob}
        authorName={authorName}
      />
    </>
  );
};

export default InfoPost;
