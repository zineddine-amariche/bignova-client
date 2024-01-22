import ReCAPTCHA from "react-google-recaptcha";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";

import styles from "../styles/service-details-1.module.css";




const validationSchema = Yup.object().shape({
  name: Yup.string().required("Nom est requis"),
  prenom: Yup.string().required("prénom est requis"),
  phone: Yup.string().required("Numéro de téléphone est requis"),
  project_title: Yup.string().required("titre du l'offre est requis"),
  Message: Yup.string().required("Message du l'offre est requis"),
  cv: Yup.mixed().required("CV est requis"),
  lettreMotivation: Yup.mixed().required("lettreMotivation est requis"),
  
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  // Add more validation rules for other fields as needed
});

function onChange(value) {
  console.log("Captcha value:", value);
}

function Quote3() {

	const handleSubmit = async (event,data) => {
		// Stop the form from submitting and refreshing the page.
		event.preventDefault()
	 
		// Send the data to the server in JSON format.
		const JSONdata = JSON.stringify(data)
	 
		// API endpoint where we send form data.
		const endpoint = 'http://localhost:5000/api/registerJob'
	 
		// Form the request for sending data to the server.
		const options = {
		  // The method is POST because we are sending data.
		  method: 'POST',
		  // Tell the server we're sending JSON.
		  headers: {
			'Content-Type': 'application/json',
		  },
		  // Body of the request is the JSON data we created above.
		  body: JSONdata,
		}
	 
		// Send the form data to our forms API on Vercel and get a response.
		const response = await fetch(endpoint, options)
	 
		// Get the response data from server as JSON.
		// If server returns the name submitted, that means the form works.
		const result = await response.json()
		console.log(`Is this your data: ${result.data}`)
	  }


  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
	  prenom:'',
	  phone:'',
	  project_title:'',
	  cv:'',
	  lettreMotivation:'',
	  pays:'',
	  Message:''
      // Add initial values for other fields as needed
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
	  handleSubmit(e,values)
    },
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bhgtuqz",
        "template_6ed06ym",
        form.current,
        "neQj30tEtxgpuNbAV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const [selectedFile, setSelectedFile] = useState(null);

  //   const handleFileInputChange = (event) => {
  //     if (event.target.files.length > 0) {
  //       setSelectedFile(event.target.files[0]);
  //     }
  //   };

//   const handleFileInputChange = (event, fieldName) => {

// 	console.log('fieldName', fieldName)
//     // formik.setFieldValue(fieldName, event.currentTarget.files[0]);
// 	// formik.setFieldTouched(fieldName, true); 
//   };

  const handleFileInputChange = (file, fieldName) => {
	formik.setFieldValue(fieldName, file);
	formik.setFieldTouched(fieldName, false);
  };

  // const [errorMsg, setErrorMsg] = useState(false);
  // const [isSuccess, setIsSuccess] = useState(false);

  // const validateSelectedFile = () => {
  //   const MIN_FILE_SIZE = 1024 // 1MB
  //   const MAX_FILE_SIZE = 5120 // 5MB

  //   if (!selectedFile) {
  //     setErrorMsg("Please choose a file");
  //     setIsSuccess(false)
  //     return
  //   }

  //   const fileSizeKiloBytes = selectedFile.size / 1024

  //   if(fileSizeKiloBytes < MIN_FILE_SIZE){
  //     setErrorMsg("File size is less than minimum limit");
  //     setIsSuccess(false)
  //     return
  //   }
  //   if(fileSizeKiloBytes > MAX_FILE_SIZE){
  //     setErrorMsg("File size is greater than maximum limit");
  //     setIsSuccess(false)
  //     return
  //   }

  //   setErrorMsg("")
  //   setIsSuccess(true)
  // };

//   console.log("formik.errors.name", formik.errors.cv);
//   console.log("formik.touched.name", formik.touched.cv);
// console.log('formik.touched.pays ', formik.touched.pays )
// console.log('formik.values.pays ', formik.values.pays )

//  console.log('res', props)

  return (
    <>
      <div className="content-inner">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-xl-6 m-b30 wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div className="dlab-media">
                <img src="images/about/hiring.png" className="move-3" alt="" />
              </div>
            </div>
            <div
              className="col-xl-6 m-b30 wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            >
{/* 
              {
                res?.length === 0 ?(<div>loading ... </div>):(
                  res?.map((r,index)=>(
                    <div key={index}>  
                    <p>
                      {r}
                    </p>
                    </div>
                  ))
                )
              } */}
              <form
                className="dlab-form dzForm"
                method="POST"
                action="script/contact.php"
                ref={form}
                onSubmit={formik.handleSubmit}
                // onSubmit={sendEmail}
              >
                <input
                  type="hidden"
                  className="form-control"
                  name="dzToDo"
                  value="Contact"
                />
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="la la-user"></i>
                        </span>
                      </div>
                      <input
                        name="name"
                        type="text"
                        required
                        className="form-control"
                        placeholder="Nom"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                    </div>
                    {formik.touched.name && formik.errors.name ? (
                      <div className={styles.error}>{formik.errors.name}</div>
                    ) : null}
                  </div>
                  <div className="col-sm-6">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="la la-user"></i>
                        </span>
                      </div>
                      <input
                        name="prenom"
                        type="text"
                        className="form-control"
                        required
                        placeholder="Prénom"
                        value={formik.values.prenom}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                    </div>
                    {formik.touched.prenom && formik.errors.prenom ? (
                      <div className={styles.error}>{formik.errors.prenom}</div>
                    ) : null}
                  </div>
                  <div className="col-sm-6">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="la la-envelope"></i>
                        </span>
                      </div>
                      <input
                        name="email"
                        type="text"
                        required
                        className="form-control"
                        placeholder="Adresse e-mail"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                    </div>
                    {formik.touched.email && formik.errors.email ? (
                      <div className={styles.error}>{formik.errors.email}</div>
                    ) : null}
                  </div>
                  <div className="col-sm-6">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="la la-phone"></i>
                        </span>
                      </div>
                      <input
                        name="phone"
                        type="text"
                        required
                        className="form-control"
                        placeholder="Numéro de téléphone "
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                    </div>
                    {formik.touched.phone && formik.errors.phone ? (
                      <div className={styles.error}>{formik.errors.phone}</div>
                    ) : null}
                  </div>
                  <div className="col-sm-6">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="la la-file-alt"></i>
                        </span>
                      </div>
                      <input
                        name="project_title"
                        type="text"
                        className="form-control"
                        required
                        placeholder="Titre du l'offre"
                        value={formik.values.project_title}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                    </div>
                    {formik.touched.project_title &&
                    formik.errors.project_title ? (
                      <div className={styles.error}>
                        {formik.errors.project_title}
                      </div>
                    ) : null}
                  </div>
                  <div className="col-sm-6">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="la la-list"></i>
                        </span>
                      </div>
                      <select
                        name="pays"
                        className="form-control"
                        required
                        value={formik.values.pays}
                        onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
						onBlur={() => { 
							formik.setFieldTouched("pays")
						  }}
                      >
                        <option selected value={""} disabled>
                          Pays
                        </option>
                        <option value="1">Algerie</option>
                        <option value="2">france</option>
                        <option value="3">Canada</option>
                      </select>
                    </div>
                    {formik.touched.pays && formik.errors.pays  ? (
                      <div className={styles.error}>{formik.errors.pays}</div>
                    ) : null}
                  </div>
                  <div className="col-sm-6">
                    <div className="input-group">
                      <input
                        name="cv"
                        type="file"
                        required
                        className="form-control custom-file-input"
                        // onChange={handleFileInputChange}
                        onChange={(event) => handleFileInputChange(event.target.files[0], "cv")}
                        onBlur={formik.handleBlur}

                      />
                      <label htmlFor="cv" className="custom-file-label">
                        CV
                      </label>
                    </div>
                    {formik.touched.cv && formik.errors.cv ? (
                      <div className={styles.error}>{formik.errors["cv"]}</div>
                    ) : null}
                  </div>

                  <div className="col-sm-6">
                    <div className="input-group">
                      <input
                        name="lettreMotivation"
                        type="file"
                        className="form-control custom-file-input"
                        onChange={(event) =>
                          handleFileInputChange(event.target.files[0], "lettreMotivation")
                        }
                        onBlur={formik.handleBlur}
						
                      />
                      <label className="custom-file-label">
                        Lettre de motivation
                      </label>
                    </div>
                    {formik.touched.lettreMotivation &&
                    formik.errors.lettreMotivation ? (
                      <div className={styles.error}>
                        {formik.errors.lettreMotivation}
                      </div>
                    ) : null}
                  </div>
                  <div className="col-sm-12">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="la la-sms"></i>
                        </span>
                      </div>
                      <textarea
                        name="Message"
                        className="form-control"
                        placeholder="Message"
                        value={formik.values.Message}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      ></textarea>
                    </div>
                    {formik.touched.Message && formik.errors.Message ? (
                      <div className={styles.error}>
                        {formik.errors.Message}
                      </div>
                    ) : null}
                  </div>
                  {/* <div className="col-sm-12">
										<div className="input-group">
											<div className="g-recaptcha" data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
											<input className="form-control d-none" style={{ "display": "none" }} data-recaptcha="true" required data-error="Please complete the Captcha" />
										</div>
									</div> */}
                  <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={onChange}
                  />
                  <div className="col-sm-12 mt-2">
                    <button
                      //   name="submit"
                      type="submit"
                      //   value="Submit"
                      className="btn btn-corner gradient btn-primary"
                    >
                      Soumettre ma candidature
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Quote3;
