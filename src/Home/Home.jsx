import { useState } from 'react'
import '@home/Home.css'
import LeftNav from '@/assets/Leftnav/LeftNav'
import Feed from '@/assets/Feed/Feed';
import Labels from '@/assets/Labels/Labels';
import PropTypes from 'prop-types';

function Home(props) {
  const { sidebar, showNav,searchQuery,setSearchQuery } = props;
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <LeftNav sidebar={sidebar} showNav={showNav}/>
      <div className={`container show-resp-container ${sidebar ? "": "Large-Container"}  ${showNav ? "": "show-resp-container"} `}>
        <Labels handleCategoryFilter={handleCategoryFilter} />
        <Feed selectedCategory={selectedCategory} searchQuery={searchQuery} setSearchQuery={{setSearchQuery}}/>
      </div>
    </>
  )
}

Home.propTypes = {
  sidebar: PropTypes.bool.isRequired,
  showNav: PropTypes.bool.isRequired,
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
};

export default Home