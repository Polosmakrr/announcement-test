import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useFetchAnnouncementIdQuery, useUpdateAnnouncementMutation } from "../../redux/announcementApi";

export const Edit = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const { data } = useFetchAnnouncementIdQuery(id);

    const [updateAnnouncement] = useUpdateAnnouncementMutation();

    const handleSubmit = e => {
        e.preventDefault();
        let changedAnnouncement = {
            title: e.currentTarget.elements.title.value,
            description: e.currentTarget.elements.description.value,
            id: id
        }       
        toast.success('Announcement was changed!');
        updateAnnouncement(changedAnnouncement);
        setTimeout(goHome, 2500)
        e.currentTarget.reset();
    }
    const goBack = () => {
        navigate(-1);
    }
    const goHome = () => {
        navigate('/announcement-test')
    }

    return (
        <>  
            <div className="container edit_container">
                <button className="edit_btn" onClick={goBack}>go back</button>
                <h2 className="edit_title">Editing an Announcement</h2>
                <form className="edit_form" autoComplete='off' onSubmit={handleSubmit}>
                <label className="edit_label" for="title">Title</label>
                    <textarea
                        className="edit_feald"
                        type="text" name='title'
                        defaultValue={data.title}
                        rows="5"
                        required>
                    </textarea>
                
                <label className="edit_label" for="description">Description</label>
                    <textarea
                        className="edit_feald"
                        type='text'
                        name='description'
                        defaultValue={data.description}
                        rows="10"
                        required>
                        </textarea>

                <button className="edit_btn" type="submit">Edit</button>
            </form>
            </div>
            <ToastContainer autoClose={1000}/>
        </>
    )
}
