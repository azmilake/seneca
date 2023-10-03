const PostAuthor = ({ authorAvatar, authorName, authorJob }) => {
  return (
    <>
      <div className="flex items-center mt-5">
        <img
          src={authorAvatar}
          alt="author-1"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="ml-4">
          <h3>{authorName}</h3>
          <div className="text-gray-500 text-sm mt-1">{authorJob}</div>
        </div>
      </div>
    </>
  );
};

export default PostAuthor;
