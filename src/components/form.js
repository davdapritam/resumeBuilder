import React, { useState } from 'react'
import '../styles/global.css';
import '../styles/form.css';

const Form = () => {

    const [expertise, setExpertise] = useState('');
    const [expertiseList, setExpertiseList] = useState([]);

    const handleExpertiseChange = (event) => {
        setExpertise(event.target.value);
    };

    const handleAddExpertise = () => {
        if (expertise.trim() !== '') {
            setExpertiseList([...expertiseList, expertise]);
            setExpertise('');
        }
    };

    const handleRemoveExpertise = (index) => {
        const updatedExpertiseList = expertiseList.filter((item, i) => i !== index);
        setExpertiseList(updatedExpertiseList);
    };

    const [skill, setskill] = useState('');
    const [skillList, setskillList] = useState([]);

    const handleskillChange = (event) => {
        setskill(event.target.value);
    };

    const handleAddskill = () => {
        if (skill.trim() !== '') {
            setskillList([...skillList, skill]);
            setskill('');
        }
    };

    const handleRemoveskill = (index) => {
        const updatedskillList = skillList.filter((item, i) => i !== index);
        setskillList(updatedskillList);
    };


    const [data, setData] = useState(null);

    const fetchData = async () => {
        try {
            const formData = {
                email: "davdapritam@gmail.com",
                password: "Admin@123"
            }
            const response = await fetch('http://62.72.57.175:7081/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            console.log("response", response);

            if (response.ok) {
                console.log('Data submitted successfully');
            } else {
                console.error('Failed to submit data');
            }
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    return (
        <div className="mainContainer">
            <div className="main-box">
                {/* PERSONAL DETAILS */}
                <div className="detailContainer">
                    <div className="title">Personal Details</div>
                    <div className="details">
                        <div className="row">
                            <button onClick={fetchData}>Fetch Data</button>
                            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
                            <div className="input-fields">
                                <label className='inputLabel'>Name</label>
                                <input type="text" placeholder='Name' className='form-control input-field' />
                            </div>
                            <div className="input-fields">
                                <label className='inputLabel'>Email</label>
                                <input type="email" placeholder='Email' className='form-control input-field' />
                            </div>
                            <div className="input-fields">
                                <label className='inputLabel'>Mobile Number</label>
                                <input type="text" placeholder='Mobile Number' className='form-control input-field' />
                            </div>
                        </div>
                        <div className="row mrg-top-20">
                            <div className="input-fields">
                                <label className='inputLabel'>Role</label>
                                <input type="text" placeholder='Ex. Full Stack Web Developer' className='form-control input-field' />
                            </div>
                            <div className="input-fields">
                                <label className='inputLabel'>linkedin</label>
                                <input type="text" placeholder='Ex. https://linkedin/' className='form-control input-field' />
                            </div>
                            <div className="input-fields">
                                <label className='inputLabel'>github</label>
                                <input type="text" placeholder='Ex. https://github/' className='form-control input-field' />
                            </div>
                        </div>
                        <div className="row mrg-top-20">
                            <div className="input-fields w-50">
                                <label className='inputLabel'>Address</label>
                                <textarea className='form-control' cols="30" rows="4"></textarea>

                            </div>
                            <div className="input-fields w-50">
                                <label className='inputLabel'>About Yourself</label>
                                <textarea className='form-control' cols="30" rows="4"></textarea>
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
                                {expertiseList.map((item, index) => (
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
                                    onChange={handleskillChange} placeholder='Ex. Angular' className='form-control input-field' />
                            </div>
                            <div className="input-fields justify-content-end">
                                <button className="btn addBtn" onClick={handleAddskill}>+ Add</button>
                            </div>
                        </div>
                        <div className="row mrg-top-20">
                            <ul className='d-flex'>
                                {skillList.map((item, index) => (
                                    <li key={index} className='d-flex mrg-right-13 expertiseli'>
                                        {item}
                                        <div className='cancelBtn mrg-left-5' onClick={() => handleRemoveskill(index)}>X</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Education DETAILS */}
                <div className="detailContainer">
                    <div className="title">Education</div>
                    <div className="details">
                        <div className="row">
                            <div className="input-fields">
                                <label className='inputLabel'>Name</label>
                                <input type="text" placeholder='Name' className='form-control input-field' />
                            </div>
                            <div className="input-fields">
                                <label className='inputLabel'>Email</label>
                                <input type="email" placeholder='Email' className='form-control input-field' />
                            </div>
                            <div className="input-fields">
                                <label className='inputLabel'>Mobile Number</label>
                                <input type="text" placeholder='Mobile Number' className='form-control input-field' />
                            </div>
                        </div>
                        <div className="row mrg-top-20">
                            <div className="input-fields">
                                <label className='inputLabel'>Role</label>
                                <input type="text" placeholder='Ex. Full Stack Web Developer' className='form-control input-field' />
                            </div>
                            <div className="input-fields">
                                <label className='inputLabel'>linkedin</label>
                                <input type="text" placeholder='Ex. https://linkedin/' className='form-control input-field' />
                            </div>
                            <div className="input-fields">
                                <label className='inputLabel'>github</label>
                                <input type="text" placeholder='Ex. https://github/' className='form-control input-field' />
                            </div>
                        </div>
                        <div className="row mrg-top-20">
                            <div className="input-fields w-50">
                                <label className='inputLabel'>Address</label>
                                <textarea className='form-control' cols="30" rows="4"></textarea>

                            </div>
                            <div className="input-fields w-50">
                                <label className='inputLabel'>About Yourself</label>
                                <textarea className='form-control' cols="30" rows="4"></textarea>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Form