import FeaturedPost from '@/components/FeaturedPost';
import CardPost from '@/components/CardPost';
import { useState, useEffect } from 'react';
import Container from '@/components/Container';
import Layout from '@/components/Layout';
import postsData from '../utils/posts.json';

const Home = () => {
  useEffect(() => {
    document.title = `Home - Seneca`;
  }, []);

  const [posts, setPosts] = useState(postsData);

  return (
    <>
      {' '}
      <Layout>
        <Container>
          <FeaturedPost />
          <div className="flex -mx-4 mt-5 flex-wrap">
            {posts.map((post) => (
              <div className="w-full md:w-4/12 px-4 py-6" key={post.id}>
                <CardPost {...post} />
              </div>
            ))}
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default Home;
