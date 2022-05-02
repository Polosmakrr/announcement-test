import { useDeleteAnnouncementMutation, useFetchAnnouncementIdQuery } from '../../redux/announcementApi';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useState } from 'react';

export const Info = () => {
    
    const [fetch, setFetch] = useState(false);

    const navigate = useNavigate()
    const { id } = useParams();
    
    const { data, isFetching } = useFetchAnnouncementIdQuery(id,{skip:fetch===true});
     
    const [deleteAnnouncement, { isLoading: isDeleting}] = useDeleteAnnouncementMutation();
    const re = /T/;

    const onClick = () => {
        navigate(`/announcement-test/edit${id}`)
    }
  
    const onDelete = () => {
        toast.success('Announcement was deleted!');
        deleteAnnouncement(id);
        setFetch(true)
        setTimeout(goHome,1500)
    }

     const goHome = () => {
        navigate('/announcement-test')
    }
    
    return (
        <>  
            <div className='container info_container'>
                {!isFetching && (
                    <>
                        <h3 className='info_title'>{data.title}</h3>
                        <div className='info_description_container'>
                            <p className='info_description'> {data.description}</p>
                            <p className='info_date'> Date Added:{data.created.replace(re, ' Time: ').slice(0, -5)}</p>
                        </div>
                        <div className='info_buttons'>
                            <button className='info_btn' onClick={onDelete} type="button" disabled={isDeleting}>Remove</button>
                            <button className='info_btn' onClick={onClick} type='button' >Edit</button>
                        </div>
                        <ToastContainer autoClose={1000} />
                    </>
                )
            }
            </div>
        </>
    )
}

