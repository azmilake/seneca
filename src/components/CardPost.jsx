import { Link } from 'react-router-dom';
import InfoPost from './InfoPost';

// eslint-disable-next-line react/prop-types
const CardPost = ({ thumbnail, ...infoPost }) => {
  return (
    <article>
      <Link to="/post/detail">
        <img src={thumbnail} className="w-full mb-4" />
      </Link>
      <InfoPost {...infoPost} />
    </article>
  );
};

export default CardPost;
