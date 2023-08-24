import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
    name: string;
    email: string;
    message: string;
    select: string;
}

function Form(): JSX.Element {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
        select: ''
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <h2>Write a Review</h2>
                    <label className='label'>
                        Your Name:
                        <br />
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className='input'
                        />
                    </label>
                    <br />
                    <label>
                        Your Email:
                        <br />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className='input'
                        />
                    </label>
                    <br />
                    <label>
                        Rating:
                    </label>
                    <br />
                    <select className='input' value={formData.select} onChange={handleChange} name='select'>
                        <option value="">Choose Rating</option>
                        {Array.from({ length: 5 }, (_, index) => index + 1).map((value) => (
                            <option key={value} value={value}>
                                {value}
                            </option>
                        ))}
                    </select>
                    <br />

                    <label>
                        Message:
                        <br />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className='input '
                        />
                    </label>
                    <br />
                    <button className='btn' type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}

export default Form;
