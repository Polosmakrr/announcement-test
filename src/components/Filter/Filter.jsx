
export const Filter = ({value, onChangeFilter}) => {

  return (
    <div className="container filter_container">
        <h1 className="filter_title">Announcement Board</h1>
        <form className="filter_form">
          <input className="filter_input" type="text" value={value} onChange={onChangeFilter} placeholder={'Let`s find announcement'}></input>
      </form>
    </div>
  );
};
