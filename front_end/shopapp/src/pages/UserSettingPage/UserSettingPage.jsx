import { useState } from 'react';
import './UserSettingPage.css';
import { changeProfile, userProfile } from '../../Utilities/api'
import { useEffect } from 'react'


export default function UserSettingPage() {


    const [profile, setProfile] = useState({
        first_name: '',
        last_name: '',
        city: '',
        address: '',
        phone: '',
    });
    function componentDidMount() {


        userProfile()
            .then(profile => setProfile(profile));
        ;
    }
    useEffect(() => {
        componentDidMount();
    }, []);

    function handleChangeProfile(evt) {
        // console.log("new username: " + evt.target.value);
        setProfile({ ...profile, [evt.target.name]: evt.target.value });
    }

    async function handleSubmitProfile(evt) {
        evt.preventDefault();
        try {
            await changeProfile(profile);
            alert('Profile change is saved successfully');
        } catch (error) {
            //   setError('Change username failed - Try Again');
            console.log("error: ", error);
            alert('Change username failed - Try Again');
        }
    }


    return (
        <>
            <div autoComplete="off" className="form-username">
                <h3>Profile page</h3>
                <form autoComplete="off" className="form-username" onSubmit={handleSubmitProfile}>
                    <label>First name</label>
                    <input type="text" placeholder="First name" name="first_name" value={profile.first_name} onChange={handleChangeProfile} />


                    <label>Last name</label>
                    <input type="text" placeholder="Last name" name="last_name" value={profile.last_name} onChange={handleChangeProfile} />


                    <label>City</label>
                    <input type="text" placeholder="City" name="city" value={profile.city} onChange={handleChangeProfile} />


                    <label>Address</label>
                    <input type='text'
                        name='address'
                        placeholder='Address'
                        value={profile.address}
                        onChange={handleChangeProfile}
                    />

                    <label>Phone Number</label>
                    <input
                        name='phone'
                        placeholder='Phone'
                        value={profile.phone}
                        onChange={handleChangeProfile}
                    />
                    <button type="submit" >Submit</button>
                    <div className="dummy" />
                </form>

            </div>
            <div className="dummy" />
            <div className="dummy" />
        </>


    );
}