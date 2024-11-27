import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const [profile, setProfile] = useState({
        firstName: '',
        lastName: ' ',
        position: '',
        phone: '',
        address: '',
        interests: '',
        profileLink: ' ',
        avatar: '',
        visibility: 'private',
    })

    const navigate = useNavigate()

    useEffect(() => {
        const savedProfile = localStorage.getItem('profile');
        if (savedProfile) {
            setProfile(JSON.parse(savedProfile));
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProfile(prevProfile => ({ ...prevProfile, [name]: value }));
    };

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setProfile(prevProfile => ({ ...prevProfile, avatar: event.target?.result as string }));
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    }
    const handleVisibilityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProfile(prevProfile => ({ ...prevProfile, visibility: e.target.value }));
    }

    const handleBackClick = () => {
        navigate('/');
    }

    return (
        <div>
            <div className='profile-header'>
                <span className="back-arrow" onClick={handleBackClick}>&larr;</span>
                <h1>TROOD.</h1>
                <p>Profile</p>
            </div>
            <div className='profile-container'>
                <div className="sidebar">
                    <div className="projects">
                        <div className="projects-title">
                            <h2 >Projects:</h2>
                        </div>
                        <div className='project-create'>
                            <p>Create project</p>
                        </div>
                    </div>
                    <div className="tasks">
                        <div className="tasks-title">
                            <h2>Tasks:</h2>
                        </div>
                        <div className='task-create'>
                            <p>Create task</p>
                        </div>
                    </div>
                </div>
                <div className="profile">
                    <div className="profile-avatar">
                        <img src={profile.avatar || 'default-avatar.png'} alt="Avatar" />
                        <label htmlFor="avatar-upload" className="avatar-upload-label">
                            <span className="avatar-upload-icon">+</span>
                        </label>
                        <input
                            id="avatar-upload"
                            type="file"
                            onChange={handleAvatarChange}
                            style={{ display: 'none' }}
                        />
                    </div>
                <div className="profile-fields">
                    <label>
                        <input
                            type="text"
                            name="firstName"
                            value={profile.firstName}
                            onChange={handleChange}
                            placeholder='Name' />
                    </label>
                    <label>
                        <input
                            type="text"
                            name="lastName"
                            value={profile.lastName}
                            onChange={handleChange}
                            placeholder='Lastname' />
                    </label>
                    <label>
                        <input
                            type="text"
                            name="position"
                            value={profile.position}
                            onChange={handleChange}
                            placeholder='Position' />
                    </label>
                    <label>
                        <input
                            type="text"
                            name="phone"
                            value={profile.phone}
                            onChange={handleChange}
                            placeholder='Phone' />
                    </label>
                    <label>
                        <textarea
                            name="address"
                            value={profile.address}
                            onChange={handleChange}
                            placeholder='Address'>
                            
                        </textarea>
                    </label>
                    <label>
                        <textarea
                            name="interests"
                            value={profile.interests}
                            onChange={handleChange}
                            placeholder='Pitch'>
                            
                        </textarea>
                    </label>
                </div>

                <div className="profile-visibility">
                    <p>Show your profile in Launchpad?</p>
                    <div className="radio-group">
                        <label>
                            <input
                                type="radio"
                                name="visibility"
                                value="private"
                                checked={profile.visibility === 'private'}
                                onChange={handleVisibilityChange}
                            />
                            Private
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="visibility"
                                value="public"
                                checked={profile.visibility === 'public'}
                                onChange={handleVisibilityChange}
                            />
                            Public
                        </label>
                    </div>
                </div>
                <div className="interest-scopes">
                    <p>The scopes of your interest:</p>
                    <button className="add-scope-button">+</button>
                </div>
                    <div className="interest-scopes">
                    <p>Potential interests:</p>
                    <button className="add-scope-button">+</button>
                </div>
                    <div className="interest-scopes">
                    <p>Your links:</p>
                    <button className="add-scope-button">+</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Profile