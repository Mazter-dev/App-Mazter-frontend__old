import React from "react";
import Master from "./layouts/Master";
import { Link } from "react-router-dom";
const Mydata = () => {
  return (
    <Master>
      <div className="page-wrapper">
			<div className="content container-fluid">
					<div className="page-header">
						<div className="row">
							<div className="col">
								<h3 className="page-title">Profile</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link href="index.html">Mi cuenta</Link></li>
									<li className="breadcrumb-item active">Mis datos</li>
								</ul>
							</div>
						</div>
					</div>
					
					<div className="row">
						<div className="col-md-12">
							<div className="profile-header">
								<div className="row align-items-center">
									<div className="col-auto profile-image">
										<Link href="#">
											{/* <img className="rounded-circle" alt="User Image" src="assets/img/profiles/avatar-02.jpg" /> */}
										</Link>
									</div>
									<div className="col ml-md-n2 profile-user-info">
										<h4 className="user-name mb-0">John Doe</h4>
										<h6 className="text-muted">UI/UX Design Team</h6>
										<div className="user-Location"><i className="fa fa-map-marker"></i> Florida, United States</div>
										<div className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
									</div>
									<div className="col-auto profile-btn">
										<Link href="#" className="btn btn-primary">
											Message
										</Link>
										<Link href="#" className="btn btn-primary">
											Edit
										</Link>
									</div>
								</div>
							</div>
							<div className="profile-menu">
								<ul className="nav nav-tabs nav-tabs-solid">
									<li className="nav-item">
										<Link className="nav-link active" data-toggle="tab" href="#per_details_tab">About</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" data-toggle="tab" href="#password_tab">Password</Link>
									</li>
								</ul>
							</div>	
							<div className="tab-content profile-tab-cont">
								
								<div className="tab-pane fade show active" id="per_details_tab">
								
									<div className="row">
										<div className="col-lg-9">
											<div className="card">
												<div className="card-body">
													<h5 className="card-title d-flex justify-content-between">
														<span>Personal Details</span> 
														<Link className="edit-link" data-toggle="modal" href="#edit_personal_details"><i className="fa fa-edit mr-1"></i>Edit</Link>
													</h5>
													<div className="row">
														<p className="col-sm-3 text-muted text-sm-right mb-0 mb-sm-3">Name</p>
														<p className="col-sm-9">John Doe</p>
													</div>
													<div className="row">
														<p className="col-sm-3 text-muted text-sm-right mb-0 mb-sm-3">Date of Birth</p>
														<p className="col-sm-9">24 Jul 1983</p>
													</div>
													<div className="row">
														<p className="col-sm-3 text-muted text-sm-right mb-0 mb-sm-3">Email ID</p>
														<p className="col-sm-9">johndoe@example.com</p>
													</div>
													<div className="row">
														<p className="col-sm-3 text-muted text-sm-right mb-0 mb-sm-3">Mobile</p>
														<p className="col-sm-9">305-310-5857</p>
													</div>
													<div className="row">
														<p className="col-sm-3 text-muted text-sm-right mb-0">Address</p>
														<p className="col-sm-9 mb-0">4663  Agriculture Lane,<br/>
														Miami,<br/>
														Florida - 33165,<br/>
														United States.</p>
													</div>
												</div>
											</div>
											
											<div className="modal fade" id="edit_personal_details" aria-hidden="true" role="dialog">
												<div className="modal-dialog modal-dialog-centered" role="document" >
													<div className="modal-content">
														<div className="modal-header">
															<h5 className="modal-title">Personal Details</h5>
															<button type="button" className="close" data-dismiss="modal" aria-label="Close">
																<span aria-hidden="true">&times;</span>
															</button>
														</div>
														<div className="modal-body">
															<form>
																<div className="row form-row">
																	<div className="col-12 col-sm-6">
																		<div className="form-group">
																			<label>First Name</label>
																			<input type="text" className="form-control" />
																		</div>
																	</div>
																	<div className="col-12 col-sm-6">
																		<div className="form-group">
																			<label>Last Name</label>
																			<input type="text"  className="form-control" />
																		</div>
																	</div>
																	<div className="col-12">
																		<div className="form-group">
																			<label>Date of Birth</label>
																			<div className="cal-icon">
																				<input type="text" className="form-control" />
																			</div>
																		</div>
																	</div>
																	<div className="col-12 col-sm-6">
																		<div className="form-group">
																			<label>Email ID</label>
																			<input type="email" className="form-control" />
																		</div>
																	</div>
																	<div className="col-12 col-sm-6">
																		<div className="form-group">
																			<label>Mobile</label>
																			<input type="text" className="form-control" />
																		</div>
																	</div>
																	<div className="col-12">
																		<h5 className="form-title"><span>Address</span></h5>
																	</div>
																	<div className="col-12">
																		<div className="form-group">
																		<label>Address</label>
																			<input type="text" className="form-control" />
																		</div>
																	</div>
																	<div className="col-12 col-sm-6">
																		<div className="form-group">
																			<label>City</label>
																			<input type="text" className="form-control" />
																		</div>
																	</div>
																	<div className="col-12 col-sm-6">
																		<div className="form-group">
																			<label>State</label>
																			<input type="text" className="form-control" />
																		</div>
																	</div>
																	<div className="col-12 col-sm-6">
																		<div className="form-group">
																			<label>Zip Code</label>
																			<input type="text" className="form-control" />
																		</div>
																	</div>
																	<div className="col-12 col-sm-6">
																		<div className="form-group">
																			<label>Country</label>
																			<input type="text" className="form-control" />
																		</div>
																	</div>
																</div>
																<button type="submit" className="btn btn-primary btn-block">Save Changes</button>
															</form>
														</div>
													</div>
												</div>
											</div>
											
										</div>

										<div className="col-lg-3">
											
											<div className="card">
												<div className="card-body">
													<h5 className="card-title d-flex justify-content-between">
														<span>Account Status</span>
														<Link className="edit-link" href="#"><i className="fa fa-edit mr-1"></i> Edit</Link>
													</h5>
													<button className="btn btn-success" type="button"><i className="fe fe-check-verified"></i> Active</button>
												</div>
											</div>

											<div className="card">
												<div className="card-body">
													<h5 className="card-title d-flex justify-content-between">
														<span>Skills </span> 
														<Link className="edit-link" href="#"><i className="fa fa-edit mr-1"></i> Edit</Link>
													</h5>
													<div className="skill-tags">
														<span>Html5</span>
														<span>CSS3</span>
														<span>WordPress</span>
														<span>Javascript</span>
														<span>Android</span>
														<span>iOS</span>
														<span>Angular</span>
														<span>PHP</span>
													</div>
												</div>
											</div>

										</div>
									</div>

								</div>
								
								<div id="password_tab" className="tab-pane fade">
								
									<div className="card">
										<div className="card-body">
											<h5 className="card-title">Change Password</h5>
											<div className="row">
												<div className="col-md-10 col-lg-6">
													<form>
														<div className="form-group">
															<label>Old Password</label>
															<input type="password" className="form-control" />
														</div>
														<div className="form-group">
															<label>New Password</label>
															<input type="password" className="form-control" />
														</div>
														<div className="form-group">
															<label>Confirm Password</label>
															<input type="password" className="form-control" />
														</div>
														<button className="btn btn-primary" type="submit">Save Changes</button>
													</form>
												</div>
											</div>
										</div>
									</div>
								</div>
								
							</div>
						</div>
					</div>

			</div>
		</div>
    </Master>
  );
};

export default Mydata;
