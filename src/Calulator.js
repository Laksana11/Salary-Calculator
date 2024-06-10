import React, { useEffect, useState, useContext, useRef } from 'react'
// import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import './index.css';
import { useForm } from "react-hook-form";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome

const Calulator = () => {
  const [add, setadd] = useState(false);
  const [isChecked, setIsChecked] = useState(true);

  const {
    register,
    formState:{value, errors},
    handleSubmit,
    getValues,
    control,
    watch,
    reset,
    setValue,
  } = useForm({
    mode:'onChange',
  }); 

  
  const addAllowance = () => {
    setadd(true);
  }

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <div className=' align-items-center'style={{width:"100%"}}>
          <div className="row" style={{paddingBottom:'10.0rem',margin:'5rem'}}>
              <div className="col-md-8"  >
                <div className="card card-outline card-warning">
                  <div className="card-header " style={{paddingBottom:'10.0rem'}}>
                    <div className="client-header">
                      <button className='btn text-primary btn-reset float-right'>Reset</button>
                      <h5>Calculate Your Salary</h5>
                
                      <div class="col-md-8" style={{padding:'10px 5px'}}>
                            <label >Basic Salary</label>
                            <input
                                    type="text"
                                    name="BasicSalary"
                                    id="BasicSalary"
                                    {...register("BasicSalary")}
                                    className={`form-control ${errors.BasicSalary?.message? "is-invalid" : ""}`}      
                                  />
                          </div>
                      <h5>Earnings</h5>
                      <p className='text-secondary'><small>Allowance, Fixed Allowence, Bonus and etc.</small></p>
                      <button className="btn text-primary"  onClick={addAllowance}>
                        <i className="fas fa-plus"></i> Add New Allowance
                      </button>                    
                      <hr />
                      <h5>Deductions</h5>
                      <p>Salary Advances, Loan Deductions and Allowance</p>
                      <button className='btn text-primary pb-3'>+ Add New Deduction</button>
                    </div>
                  </div>
                </div>
              </div>
        
              <div className="col-md-4" >
                <div className="card card-outline card-warning">
                  <div className="card-header "style={{paddingBottom:'4.0rem'}}>
                    <div className="client-header ">
                      <h4>Your Salary</h4>
                        <div className="d-flex justify-content-between">
                          <div className='col-md-6 '>
                            <p className="text-secondary small">Items</p>
                            <p className="small">Basic Salary</p>
                            <p className=" small">Gross Earning</p>
                            <p className=" small">Gross Deduction</p>
                            <p className=" small">Employee EPF (8%) </p>
                            <p className=" small">APIT</p>
                          </div>
                          <div className='col-md-6 text-end'>
                            <p className="text-secondary small">Amount</p>
                            <p className=" small">100,000.00</p>
                            <p className=" small">100,000.00</p>
                            <p className=" small">0.00</p>
                            <p className=" small">-8,000.00</p>
                            <p className=" small">0.00</p>
                          </div>
                      </div>
                <div className="card card-outline card-warning ">
                  <div className="d-flex justify-content-between p-1">
                    <div className='col-md-6'>
                      <p className='small '>Net Salary(Take Home)</p>
                    </div>
                    <div className='col-md-6 text-end'>
                      <p className=" small">92,000.00</p>
                    </div>
                  </div>
                </div>
                  <div className='text-secondary small py-3'>
                    Contribution from the Employer
                  </div>
                  <div className="d-flex justify-content-between p-1">
                    <div className='col-md-6'>
                      <p className='small '>Employer EPF (12%)</p>
                      <p className='small '>Employer ETF (3%)</p>
                      <p className='small '>CTC (Cost to Company)</p>
                    </div>
                    <div className='col-md-6 text-end'>
                      <p className=" small">12,000.00</p>
                      <p className=" small">3,000.00</p>
                      <p className=" small">107,000.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
      </div>
     
      {add && (
        <div className="modal d-flex align-items-center  justify-content-center"  style={{display: "block", background: "rgba(0,0,0,0.8)"}}>
          <div className="col-md-4" role="document">

            <div className="modal-content card card-outline card-warning">
              <div className="modal-header">
                <h5 className="modal-title">Add New Earnings</h5>
                <button type="button" className="close "  >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body card-body">
                <div class="row" style={{padding:'5px 5px'}}>
      
                  <div class="col-md-12" style={{padding:'5px 5px'}}>
                  <label style={{color:'blue'}}>Earning Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="EarningName"
                        placeholder='Eg: Travel'
                        // value={emailDetails.subject}
                        // onChange={handleEmailInputChange}
                      />
                  </div>
             
                 
                  <div className="col-md-12" style={{ padding: '5px 5px' }}>
                  <label style={{color:'blue'}}>Amount</label>
                      <input
                        type="text"
                        className="form-control"
                        name="EarningName"
                        placeholder='Eg:10,000'
                        // value={emailDetails.subject}
                        // onChange={handleEmailInputChange}
                      />
                  </div>
                </div>
                <div className="form-check mt-3">
                          <input
                            type="checkbox"
                            name="isChecked"
                            id="inputIsChecked"
                            className="form-check-input"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                          />
                          <label className="form-check-label">
                            EPF/ETF
                          </label>
                    </div>
        
              </div>
              <div className="modal-footer">
                <button type="button" className="btn text-primary" style={{padding:"5px 40px",margin: "0.5rem" }} >Cancel</button>
                <button type="button" className="btn btn-primary" style={{padding:"5px 40px",margin: "0.5rem" }} >Add</button>
              </div>
            </div>
      
          </div>
        </div>
      )}
 
    </div>
  )
}

export default Calulator