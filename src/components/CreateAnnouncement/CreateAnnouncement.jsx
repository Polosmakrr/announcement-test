
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useCreateAnnouncementMutation } from '../../redux/announcementApi';

export const CreateAnnouncement = () => {

    const navigate = useNavigate();
    const [createAnnouncement,{isLoading}] = useCreateAnnouncementMutation();

    const handleSubmit = e => {
        e.preventDefault();

        const createdAnnouncement = {
            title: e.currentTarget.elements.title.value,
            description: e.currentTarget.elements.description.value
        }      
        createAnnouncement(createdAnnouncement)
        toast.success('Announcement was added!')
        
        e.currentTarget.reset();
    }    

    const goBack = () => {
        navigate(-1);
    }

    return (
        <>
            <div className='container create_container'>
                <button className='create_btn btn_goBack' onClick={goBack}>go back</button>
                <h2 className='create_title'>Workshop of Announcement </h2>
                <form className='create_form' autoComplete='off' onSubmit={handleSubmit}>
                <label className='create_label' for="title">Title</label>
                    <textarea
                        className='create_feald'
                        type='text'
                        name='title'
                        placeholder='Enter a title'
                        rows="5"
                        required
                    />
                <label className='create_label' for="description">Description</label>
                    <textarea
                        className='create_feald'
                        type='text'
                        name='description'
                        placeholder='Enter a description'
                        rows="10"
                        required
                    />
                <button className='create_btn' type='submit' disabled={isLoading}>Create</button>
            </form>
            </div>
            <ToastContainer autoClose={2000}/>
        </>
    )
}
