import React from 'react'

const TemplatePage = () => {
  return (
    <div className="container-fluid">
				<div className="row page-titles">
					<ol className="breadcrumb">
						<li className="breadcrumb-item"><a href="#">Form</a></li>
						<li className="breadcrumb-item active"><a href="#">Validation</a></li>
					</ol>
                </div>
              
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Form Validation</h4>
                            </div>
                            <div className="card-body">
                                <div className="form-validation">
                                    <form className="needs-validation" >
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="mb-3 row">
                                                    <label className="col-lg-4 col-form-label form-label required" htmlFor="validationCustom01">Username
                                                    </label>
                                                    <div className="col-lg-6">
														<input type="text" className="form-control" id="validationCustom01" placeholder="Enter a username.." />
														<div className="invalid-feedback">
															Please enter a username.
														</div>
                                                    </div>
                                                </div>
                                                <div className="mb-3 row">
                                                    <label className="col-lg-4 col-form-label form-label required" htmlFor="validationCustom02">Email
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <input type="text" className="form-control" id="validationCustom02" placeholder="Your valid email.." />
														<div className="invalid-feedback">
															Please enter a Email.
														</div>
                                                    </div>
                                                </div>
                                                <div className="mb-3 row">
                                                    <label className="col-lg-4 col-form-label form-label required" htmlFor="validationCustom03">Password
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <input type="password" className="form-control" id="validationCustom03" placeholder="Choose a safe one.." />
														<div className="invalid-feedback">
															Please enter a password.
														</div>
                                                    </div>
                                                </div>
                                                <div className="mb-3 row">
                                                    <label className="col-lg-4 col-form-label form-label required" htmlFor="validationCustom04">Suggestions
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <textarea className="form-control" id="validationCustom04"  placeholder="What would you like to see?" ></textarea>
														<div className="invalid-feedback">
															Please enter a Suggestions.
														</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="mb-3 row">
                                                    <label className="col-lg-4 col-form-label form-label required" htmlFor="validationCustom05">Best Skill
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <select className="default-select wide form-control" id="validationCustom05">
                                                            <option data-display="Select">Please select</option>
                                                            <option value="html">HTML</option>
                                                            <option value="css">CSS</option>
                                                            <option value="javascript">JavaScript</option>
                                                            <option value="angular">Angular</option>
                                                            <option value="angular">React</option>
                                                            <option value="vuejs">Vue.js</option>
                                                            <option value="ruby">Ruby</option>
                                                            <option value="php">PHP</option>
                                                            <option value="asp">ASP.NET</option>
                                                            <option value="python">Python</option>
                                                            <option value="mysql">MySQL</option>
                                                        </select>
														<div className="invalid-feedback">
															Please select a one.
														</div>
                                                    </div>
                                                </div>
                                                <div className="mb-3 row">
                                                    <label className="col-lg-4 col-form-label form-label required" htmlFor="validationCustom06">Currency
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <input type="text" className="form-control" id="validationCustom06" placeholder="$21.60" />
														<div className="invalid-feedback">
															Please enter a Currency.
														</div>
                                                    </div>
                                                </div>
                                                <div className="mb-3 row">
                                                    <label className="col-lg-4 col-form-label form-label required" htmlFor="validationCustom07">Website
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <input type="text" className="form-control" id="validationCustom07" placeholder="http://example.com" />
														<div className="invalid-feedback">
															Please enter a url.
														</div>
                                                    </div>
                                                </div>
                                                <div className="mb-3 row">
                                                    <label className="col-lg-4 col-form-label form-label required" htmlFor="validationCustom08">Phone (US)
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <input type="text" className="form-control" id="validationCustom08" placeholder="212-999-0000" />
														<div className="invalid-feedback">
															Please enter a phone no.
														</div>
                                                    </div>
                                                </div>
                                                <div className="mb-3 row">
                                                    <label className="col-lg-4 col-form-label form-label required" htmlFor="validationCustom09">Digits
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <input type="text" className="form-control" id="validationCustom09" placeholder="5" />
														<div className="invalid-feedback">
															Please enter a digits.
														</div>
                                                    </div>
                                                </div>
                                                <div className="mb-3 row">
                                                    <label className="col-lg-4 col-form-label form-label required" htmlFor="validationCustom10">Number
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <input type="text" className="form-control" id="validationCustom10" placeholder="5.0" />
														<div className="invalid-feedback">
															Please enter a num.
														</div>
                                                    </div>
                                                </div>
                                                <div className="mb-3 row">
                                                    <label className="col-lg-4 col-form-label form-label required" htmlFor="validationCustom11">Range [1, 5]
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <input type="text" className="form-control" id="validationCustom11" placeholder="4" />
														<div className="invalid-feedback">
															Please select a range.
														</div>
                                                    </div>
                                                </div>
                                                <div className="mb-3 row">
                                                    <label className="col-lg-4 col-form-label form-label required"><a href="#">Terms &amp; Conditions</a>
                                                    </label>
                                                    <div className="col-lg-8">
                                                        <div className="form-check">
														  <input className="form-check-input" type="checkbox" value="" id="validationCustom12" />
														  <label className="form-check-label" htmlFor="validationCustom12">
															Agree to terms and conditions
														  </label>
														</div>
                                                    </div>
                                                </div>
                                                <div className="mb-3 row">
                                                    <div className="col-lg-8 ms-auto">
                                                        <button type="submit" className="btn btn-primary">Submit</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                </div>
            </div>
  )
}

export default TemplatePage