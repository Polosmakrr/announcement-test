
import { useEffect, useState } from 'react';
import { useFetchAnnouncementQuery} from '../../redux/announcementApi';
import AnnouncementList from '../AnnouncementList/AnnouncementList';
import { Filter } from '../Filter/Filter';
import { ThreeDots } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Home = () => {

    const { data, isFetching } = useFetchAnnouncementQuery([],
        {refetchOnFocus: true,}
        );
    
    const [announcement, setAnnouncement] = useState([])
    const [filter, setFilter] = useState('');

    useEffect(() => {

        if (filter) {       
            
            if (announcement.length === 0) {
                toast.error("Oops, nothing to found! =(")
                return
            } else
            setAnnouncement(announcement);
            return
        }
            if (data) {
            setAnnouncement(data)
        }
        
    },[announcement, data, filter])    

const onChangeFilter = e => {
                    
    const filter = e.target.value;
    const filterNormalize = filter.toLowerCase();
    setFilter(filterNormalize)

    const filteredAnnouncement = data.filter(item => (item.title.toLowerCase().includes(filterNormalize)))
    
    setAnnouncement(filteredAnnouncement) 
}
        
    return (
        <>  
            <Filter onChangeFilter={onChangeFilter} />
            {isFetching
                ? <ThreeDots color="black" />
                : <>
                    <AnnouncementList
                        announcement={announcement}
                        isFetching={isFetching} />
                    <ToastContainer autoClose={2500} />
                    </>
            }
        </>
    )  
}