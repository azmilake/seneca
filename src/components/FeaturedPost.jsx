import InfoPost from './InfoPost';
import { Link } from 'react-router-dom';

const FeaturedPost = () => {
  return (
    <article>
      <div className="flex -mx-4 items-start lg:items-center flex-wrap">
        <div className="px-4 md:w-7/12 lg:w-8/12 w-full">
          <Link to="/post/detail">
            <img src="/images/featured-thumbnail.png" className="w-full" />
          </Link>
        </div>

        <div className="w-full md:w-5/12 lg:w-4/12 px-4 mt-5 md:mt-0">
          <InfoPost
            category="UI DESIGN"
            date="July 2, 2023"
            title="Understanding color theory: the color wheel and finding complementary colors"
            shortDescription="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
            authorAvatar="/images/author-1.png"
            authorName="Leslie Alexander"
            authorJob="UI Designer"
          />
        </div>
      </div>
      <hr className="border-white/20 mt-10 md:hidden" />
    </article>
  );
};

export default FeaturedPost;
