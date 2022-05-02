
import AnnouncementItem from "../AnnouncementItem/AnnouncementItem";


const AnnouncementList = ({ announcement, isFetching }) => {
    
    return (
        <div className="container mainBlock_container">
            <h2 className="mainBlock_title"> Announcement </h2>
            <ul className="mainBlock_list">
                {isFetching === false && announcement.map(announce => (<AnnouncementItem key={announce.id} announcement={announce}/> )) }  
            </ul>
        </div>
    )
}

export default AnnouncementList
