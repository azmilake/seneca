import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Posts from './pages/posts';
import Detail from './pages/detail';

function App() {
  // const [posts, setPosts] = useState([
  //   {
  //     id: 1,
  //     thumbnail: '/images/thumbnail-2.png',
  //     category: 'Internet',
  //     date: 'June 28, 2021',
  //     title: 'How to design a product that can grow itself 10x in year',
  //     shortDescription:
  //       'Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor.',
  //     authorAvatar: '/images/author-2.png',
  //     authorName: 'Jenny Wilson',
  //     authorJob: 'Product Designer',
  //   },
  //   {
  //     id: 2,
  //     thumbnail: '/images/thumbnail-3.png',
  //     category: '9 to 5',
  //     date: 'June 25, 2023',
  //     title: 'The More Important the Work, the More Important the Rest',
  //     shortDescription:
  //       'Suitable Quality is determined by product users, clients or customers, not by society in general. For example, a low priced product may be viewed as having high.',
  //     authorAvatar: '/images/author-3.png',
  //     authorName: 'Esther Howard',
  //     authorJob: 'Entrepreneur',
  //   },
  //   {
  //     id: 3,
  //     thumbnail: '/images/thumbnail-4.png',
  //     category: 'Inspirations',
  //     date: 'April 30, 2023',
  //     title: 'Email Love - Email Inspiration, Templates and Discovery',
  //     shortDescription:
  //       'Consider that for a moment: everything we see around us is assumed to have had a cause and is contingent upon something else.',
  //     authorAvatar: '/images/author-4.png',
  //     authorName: 'Robert Fox',
  //     authorJob: 'Front-end Engineer',
  //   },
  //   {
  //     id: 4,
  //     thumbnail: '/images/thumbnail-5.png',
  //     category: 'Internet',
  //     date: 'June 28, 2021',
  //     title: 'How to design a product that can grow itself 10x in year',
  //     shortDescription:
  //       'Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor.',
  //     authorAvatar: '/images/author-2.png',
  //     authorName: 'Jenny Wilson',
  //     authorJob: 'Product Designer',
  //   },
  //   {
  //     id: 5,
  //     thumbnail: '/images/thumbnail-6.png',
  //     category: '9 to 5',
  //     date: 'June 25, 2023',
  //     title: 'The More Important the Work, the More Important the Rest',
  //     shortDescription:
  //       'Suitable Quality is determined by product users, clients or customers, not by society in general. For example, a low priced product may be viewed as having high.',
  //     authorAvatar: '/images/author-3.png',
  //     authorName: 'Esther Howard',
  //     authorJob: 'Entrepreneur',
  //   },
  //   {
  //     id: 6,
  //     thumbnail: '/images/thumbnail-7.png',
  //     category: 'Inspirations',
  //     date: 'April 30, 2023',
  //     title: 'Email Love - Email Inspiration, Templates and Discovery',
  //     shortDescription:
  //       'Consider that for a moment: everything we see around us is assumed to have had a cause and is contingent upon something else.',
  //     authorAvatar: '/images/author-4.png',
  //     authorName: 'Robert Fox',
  //     authorJob: 'Front-end Engineer',
  //   },
  // ]);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/post/detail" element={<Detail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
