import { Form, ErrorMessage, Field, FieldArray, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

export default function App(){

    const fInitialValues = {
        friends : [
            {
                name: "",
                email: ""
            },
        ]
    }

    
    return (
        <div className="main-container">
            <h1>Friends invitation</h1>
            <Formik
            initialValues={fInitialValues}
            validationSchema={Yup.object({
                friends: Yup.array()
                    .of(
                        Yup.object({
                            name: Yup.string().max(15, "Max 15 characters or less").required("Required"),
                            email: Yup.string().email("Invalid email address").required("Required")
                        })
                    )
                    .min(1, "No friend is invited")
                    .required("Must have friends")
            })}
            onSubmit={async (values) => {
                await new Promise(resolve => setTimeout(resolve, 1000))
                alert(JSON.stringify(values, null, 2))
            }}
            >
                {({values}) => (
                    <Form>
                        <FieldArray name="friends">
                            {({insert, push, remove}) => (
                                <div>
                                    {
                                        values.friends.length > 0 &&
                                        values.friends.map((friend, index) => (
                                            <div className="row" key={index}>
                                                <div className="col">
                                                    <label htmlFor={`friends.${index}.name`}>Name</label>
                                                    <Field type="text"
                                                    name={`friends.${index}.name`}
                                                    placeholder="Jane Doe" />
                                                    <ErrorMessage name={`friends.${index}.name`} 
                                                    component="div"
                                                    className="disp-error"
                                                    />
                                                </div>
                                                <div className="col">
                                                    <label htmlFor={`friends.${index}.email`}>Email</label>
                                                    <Field type="email"
                                                    name={`friends.${index}.email`}
                                                    placeholder="JaneDoe@janedoe.com" />
                                                    <ErrorMessage name={`friends.${index}.name`} 
                                                    component="div"
                                                    className="disp-error"
                                                    />
                                                </div>
                                                <div className="col">
                                                    <button type="button"
                                                    className="remove"
                                                    onClick={() => remove(index)}>x</button>
                                                </div>
                                            </div>
                                        ))
                                    }
                                
                                <button type="button"
                                className="add"
                                onClick={()=> push({name: "", email: ""})}>Add friend</button>
                                </div>
                            )}
                            
                        </FieldArray>
                        <button type="submit">Invite</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}