import { useState, useEffect } from 'react';

import Container from '@/components/Container';
import Layout from '@/components/Layout';
import CardPost from '@/components/CardPost';
import postsData from '../utils/posts.json';
import SectionHeader from '../components/SectionHeader';

const Posts = () => {
  useEffect(() => {
    document.title = `Posts - Seneca`;
  }, []);

  const [posts, setPosts] = useState(postsData);

  return (
    <Layout>
      <Container>
        <SectionHeader>UI Design</SectionHeader>
        {!posts.length ? (
          <div className="text-center py-20">
            <h1 className="text-5xl">No result 😥</h1>
            <p className="text-xl mt-4 w-full md:w-6/12 mx-auto text-center">
              We couldn’t find any posts with the keyword `yahahahayuk`. Please
              try another keyword.
            </p>
          </div>
        ) : (
          <div className="flex -mx-4 mt-5 flex-wrap">
            {posts.map((post) => (
              <div className="w-full md:w-4/12 px-4 py-6" key={post.id}>
                <CardPost {...post} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </Layout>
  );
};

export default Posts;
