import React, {useState} from "react";
import emailjs from "emailjs-com";
import {useForm} from "react-hook-form";

const Contact = () => {
    const [succesMessage, setSuccesMessage] = useState("");
    const { register, handleSubmit, errors } = useForm();

    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_99QjH9l2p1tiBS2K6zy1G";

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
        )
        r.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
    
        emailjs.send(serviceID, templateID, variables, userID)
          .then(() => {
              setSuccesMessage("Form sent successfully! I'll contact you as soon as possible.");
          }).catch(err => console.error(`Something went wrong ${err}`));
      }
    

    return (
        <div className="contacts">
            <div className="text-center">
                <h1>Contact Me</h1>
                <p>Please fill out form and I will contact you as soon as possible.</p>
                <span className="succes-message">{succesMessage}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <div className="text-center">
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        ref = {
                            register({
                                required: "Please enter your name",
                                maxLength: {
                                    value: 30,
                                    message: "Please enter max 30 characters"
                                }
                            })
                        }
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.name && errors.name.message}
                        </span>
                        <div className="text-center">
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Phone number"
                        name="phone"
                        ref = {
                            register({
                                required: "Please enter your phone number",
                            })
                        }
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.phone && errors.phone.message}
                        </span>
                        <div className="text-center">
                        <input
                        type="email"
                        className="form-control"
                        placeholder="Email adress"
                        name="email"
                        ref = {
                            register({
                                required: "Please enter your email adress",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9._%-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email"
                                }
                            })
                        }
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.email && errors.email.message}
                        </span>
                        <div className="text-center">
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        name="subject"
                        ref = {
                            register({
                                required: "OOPS, you forget to add the subject",
                            })
                        }
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.subject && errors.subject.message}
                        </span>
                    </div>
                    <div className="col-md-6 col-cs-12">
                    <div className="text-center">
                        <textarea
                            type="text"
                            className="form-control"
                            placeholder="Enter your text here..."
                            name="description"
                            ref = {
                                register({
                                    required: "Please enter some more details... ",
                                })
                            }
                        ></textarea>
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.description && errors.description.message}
                        </span>
                        <button className="btn-main-offer contact-btn" type="submit">contact me</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;
