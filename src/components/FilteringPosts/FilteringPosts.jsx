import MySelect from '../MySelect/MySelect';
import PostSearch from '../PostSearch/PostSearch';

const FilteringPosts = ({ filter, setFilter }) => {

  return (
    <>
      <PostSearch
        type='search'
        value={filter.query}
        onChange={(evt) => setFilter({...filter, query: evt.target.value})}
        placeholder='Поиск...' />
      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue='Сортировать по'
        options={[
          { value: 'date', name: 'времени' },
          { value: 'title', name: 'заголовку' },
          { value: 'content', name: 'содержанию' }
        ]}
      />
    </>
  )
}

export default FilteringPosts;
