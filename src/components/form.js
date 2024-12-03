import React, { useState, useEffect } from 'react'
import '../styles/global.css';
import '../styles/form.css';

const Form = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [dataError, setError] = useState(null);


    const login = async (event) => {
        event.preventDefault();

        try {
            const reqData = {
                email: 'dpdavdapritam@gmail.com',
                password: 'Admin@123'
            }
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reqData),
            })

            if (response.ok) {
                const result = await response.json();
                console.log("result", result)
                setData(result);
            }
        } catch (error) {

        }
    }

    // useEffect(() => {
    //     const fetchData = async (event) => {

    //         const reqData = {
    //             email: 'dpdavdapritam@gmail.com',
    //             password: 'Admin@123'
    //         }
    //         const response = await fetch('http://localhost:5000/login', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(reqData),
    //         })

    //         if (response.ok) {
    //             const result = await response.json();
    //             console.log("result", result)
    //             setData(result);
    //         }
    //     }
    // })

    useEffect(() => {
        const reqData = {
            email: 'dpdavdapritam@gmail.com',
            password: 'Admin@123'
        }

        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reqData),
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setData(result)
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const getInitialData = () => {
        const storedData = localStorage.getItem('formData');
        return storedData ? JSON.parse(storedData) : {
            personalDetail: {
                name: '',
                email: '',
                mobileNumber: '',
                role: '',
                linkedinLink: '',
                githubLink: '',
                address: '',
                aboutYourself: ''
            },
            expertiseList: [],
            skillList: [],
            experienceDetail: {
                jobTitle: '',
                companyName: '',
                position: '',
                country: '',
                startDate: '',
                endDate: '',
            },
            educationDetail: {
                schoolName: '',
                schoolLocation: '',
                Degree: '',
                fieldOfStudy: '',
                graduationYear: ''
            }
        };
    };

    const [formData, setFormData] = useState(getInitialData());

    // Function to update form data and localStorage
    const updateFormData = (newData) => {
        setFormData(newData);
        localStorage.setItem('formData', JSON.stringify(newData));
    };
    useEffect(() => {
        const initialData = getInitialData();
        setFormData(initialData);
    }, []);

    // ... Rest of your code

    const onChangeDetails = (e) => {

        const { name, value } = e.target;
        updateFormData({
            ...formData,
            personalDetail: {
                ...formData.personalDetail,
                [name]: value,
            },
        });
    };


    const handleAddExpertise = () => {
        // Update expertiseList in formData
        const newExpertiseList = [...formData.expertiseList, expertise];
        updateFormData({
            ...formData,
            expertiseList: newExpertiseList,
        });

        setExpertise('');
    };

    const [expertise, setExpertise] = useState('');

    const handleExpertiseChange = (e) => {
        setExpertise(e.target.value);
    };

    const handleRemoveExpertise = (index) => {
        const newExpertiseList = [...formData.expertiseList];
        newExpertiseList.splice(index, 1);
        updateFormData({
            ...formData,
            expertiseList: newExpertiseList,
        });
    };

    // Skills
    const [skill, setSkill] = useState('');
    const [skillList, setSkillList] = useState([]);

    const handleskillChange = (e) => {
        setSkill(e.target.value);
    };

    const handleAddskill = () => {

        const newSkillList = [...formData.skillList, skill];

        updateFormData({
            ...formData,
            skillList: newSkillList,
        });

        setSkill('');
    };

    const handleRemoveskill = (index) => {
        // Remove skill at the specified index
        const newSkillList = [...skillList];
        newSkillList.splice(index, 1);
        setSkillList(newSkillList);
    };

    // Experience
    const [currentExperience, setCurrentExperience] = useState({});
    const [experience, setExperience] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentExperience({
            ...currentExperience,
            [name]: value,
        });
    };

    const handleAddExperience = () => {
        // Add currentExperience to the experience list
        setExperience([...experience, currentExperience]);
        // Clear the currentExperience state
        setCurrentExperience({});
    };

    const handleDeleteExperience = (index) => {
        // Remove experience at the specified index
        const newExperience = [...experience];
        newExperience.splice(index, 1);
        setExperience(newExperience);
    };

    return (
        <div className="mainContainer pd-btm-40">
            <div className="main-box">
                {/* PERSONAL DETAILS */}
                <div className="detailContainer">
                    <div className="title">Personal Details</div>
                    <div className="details">
                        <div className="row">
                            <div className="input-fields">
                                <label className='inputLabel' onClick={login}>Name</label>
                                <input type="text" placeholder='Name' name='name' value={formData.personalDetail.name} onChange={onChangeDetails} className='form-control input-field' />
                            </div>
                            <div className="input-fields">
                                <label className='inputLabel'>Email</label>
                                <input type="email" placeholder='Email' name='email' value={formData.personalDetail.email} onChange={onChangeDetails} className='form-control input-field' />
                            </div>
                            <div className="input-fields">
                                <label className='inputLabel'>Mobile Number</label>
                                <input type="text" placeholder='Mobile Number' name='mobileNumber' value={formData.personalDetail.mobileNumber} onChange={onChangeDetails} className='form-control input-field' />
                            </div>
                        </div>
                        <div className="row mrg-top-20">
                            <div className="input-fields">
                                <label className='inputLabel'>Role</label>
                                <input type="text" placeholder='Ex. Full Stack Web Developer' name='role' value={formData.personalDetail.role} onChange={onChangeDetails} className='form-control input-field' />
                            </div>
                            <div className="input-fields">
                                <label className='inputLabel'>linkedin</label>
                                <input type="text" placeholder='Ex. https://linkedin/' name='linkedinLink' value={formData.personalDetail.linkedinLink} onChange={onChangeDetails} className='form-control input-field' />
                            </div>
                            <div className="input-fields">
                                <label className='inputLabel'>github</label>
                                <input type="text" placeholder='Ex. https://github/' name='githubLink' value={formData.personalDetail.githubLink} onChange={onChangeDetails} className='form-control input-field' />
                            </div>
                        </div>
                        <div className="row mrg-top-20">
                            <div className="input-fields w-50">
                                <label className='inputLabel'>Address</label>
                                <textarea className='form-control' cols="30" name='address' value={formData.personalDetail.address} onChange={onChangeDetails} rows="4"></textarea>

                            </div>
                            <div className="input-fields w-50">
                                <label className='inputLabel'>About Yourself</label>
                                <textarea className='form-control' cols="30" name='aboutYourself' value={formData.personalDetail.aboutYourself} onChange={onChangeDetails} rows="4"></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Add Expertise */}
                <div className="detailContainer">
                    <div className="title">Add Your Expertise</div>
                    <div className="details">
                        <div className="row justify-content-start">
                            <div className="input-fields">
                                <input type="text" value={expertise}
                                    onChange={handleExpertiseChange} placeholder='Ex. Frontend' className='form-control input-field' />
                            </div>
                            <div className="input-fields justify-content-end">
                                <button className="btn addBtn" onClick={handleAddExpertise}>+ Add</button>
                            </div>
                        </div>
                        <div className="row mrg-top-20">
                            <ul className='d-flex'>
                                {formData.expertiseList.map((item, index) => (
                                    <li key={index} className='d-flex mrg-right-13 expertiseli'>
                                        {item}
                                        <div className='cancelBtn mrg-left-5' onClick={() => handleRemoveExpertise(index)}>X</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Add Sklls */}
                <div className="detailContainer">
                    <div className="title">Add Your Skills</div>
                    <div className="details">
                        <div className="row justify-content-start">
                            <div className="input-fields">
                                <input type="text" value={skill}
                                    onChange={handleskillChange} placeholder='Ex. Project Management' className='form-control input-field' />
                            </div>
                            <div className="input-fields justify-content-end">
                                <button className="btn addBtn" onClick={handleAddskill}>+ Add</button>
                            </div>
                        </div>
                        <div className="row mrg-top-20">
                            <ul className='d-flex'>
                                {formData.skillList.map((item, index) => (
                                    <li key={index} className='d-flex mrg-right-13 expertiseli'>
                                        {item}
                                        <div className='cancelBtn mrg-left-5' onClick={() => handleRemoveskill(index)}>X</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Experience DETAILS */}
                <div className="detailContainer">
                    <div className="title">Experience</div>
                    <div className="addExperienceButton">
                        <button className="btn addBtn" onClick={handleAddExperience}>+ Add Experience</button>
                    </div>
                    <div className="details">
                        <div className="row">
                            <div className="input-fields">
                                <label className='inputLabel'>Job Title</label>
                                <input type="text" value={formData.experienceDetail.jobTitle}
                                    name="jobTitle" onChange={handleInputChange} placeholder='Ex. Full Stack Web Developer' className='form-control input-field' />
                            </div>
                            <div className="input-fields">
                                <label className='inputLabel'>Company Name</label>
                                <input type="text" name="companyName" placeholder='Ex. Prodigious Technologies' value={formData.experienceDetail.companyName}
                                    onChange={handleInputChange} className='form-control input-field' />
                            </div>
                            <div className="input-fields">
                                <label className='inputLabel'>Position</label>
                                <input type="text" name="position" placeholder='Ex. Surat' value={formData.experienceDetail.position}
                                    onChange={handleInputChange} className='form-control input-field' />
                            </div>
                        </div>
                        <div className="row mrg-top-20">
                            <div className="input-fields">
                                <label className='inputLabel'>Country</label>
                                <input type="text" name="country" placeholder='Ex. India' value={formData.experienceDetail.country}
                                    onChange={handleInputChange} className='form-control input-field' />
                            </div>
                            <div className="input-fields">
                                <label className='inputLabel'>Start Date</label>
                                <input type="date" name="startDate" value={formData.experienceDetail.startDate}
                                    onChange={handleInputChange} className='form-control input-field' />
                            </div>
                            <div className="input-fields">
                                <label className='inputLabel'>End Date</label>
                                <input type="date" name="endDate" value={formData.experienceDetail.endDate}
                                    onChange={handleInputChange} className='form-control input-field' />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Display experiences in a tabular form */}
                <table>
                    <thead>
                        <tr>
                            <th>Job Title</th>
                            <th>Company Name</th>
                            <th>Position</th>
                            <th>Country</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {experience.map((exp, index) => (
                            <tr key={index}>
                                <td>{exp.jobTitle}</td>
                                <td>{exp.companyName}</td>
                                <td>{exp.position}</td>
                                <td>{exp.country}</td>
                                <td>{exp.startDate}</td>
                                <td>{exp.endDate}</td>
                                <td>
                                    <button onClick={() => handleDeleteExperience(index)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Educations DETAILS */}
                <div className="detailContainer">
                    <div className="title">Education</div>
                    <div className="addExperienceButton">
                        <button className="btn addBtn">+ Add Education</button>
                    </div>
                    <div className="details">
                        <div className="row">
                            <div className="input-fields">
                                <label className='inputLabel'>School Name</label>
                                <input type="text" placeholder='Ex. Oxford University' className='form-control input-field' />
                            </div>
                            <div className="input-fields">
                                <label className='inputLabel'>School Location</label>
                                <input type="text" placeholder='Ex. London' className='form-control input-field' />
                            </div>
                            <div className="input-fields">
                                <label className='inputLabel'>Degree</label>
                                <input type="text" placeholder='Ex. Surat' className='form-control input-field' />
                            </div>
                        </div>
                        <div className="row mrg-top-20">
                            <div className="input-fields">
                                <label className='inputLabel'>Field Of Study</label>
                                <input type="text" placeholder='Ex. Computer Engineering' className='form-control input-field' />
                            </div>
                            <div className="input-fields">
                                <label className='inputLabel'>Graduation Year</label>
                                <input type="number" className='form-control input-field' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form