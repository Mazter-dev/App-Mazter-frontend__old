import React from "react";
import Master from "./layouts/Master";
import { Link } from "react-router-dom";
const Mydata = () => {
  return (
    <Master>
      <div class="page-wrapper">
			<div class="content container-fluid">
					<div class="page-header">
						<div class="row">
							<div class="col">
								<h3 class="page-title">Profile</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><Link href="index.html">Mi cuenta</Link></li>
									<li class="breadcrumb-item active">Mis datos</li>
								</ul>
							</div>
						</div>
					</div>
					
					<div class="row">
						<div class="col-md-12">
							<div class="profile-header">
								<div class="row align-items-center">
									<div class="col-auto profile-image">
										<Link href="#">
											{/* <img class="rounded-circle" alt="User Image" src="assets/img/profiles/avatar-02.jpg" /> */}
										</Link>
									</div>
									<div class="col ml-md-n2 profile-user-info">
										<h4 class="user-name mb-0">John Doe</h4>
										<h6 class="text-muted">UI/UX Design Team</h6>
										<div class="user-Location"><i class="fa fa-map-marker"></i> Florida, United States</div>
										<div class="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
									</div>
									<div class="col-auto profile-btn">
										<Link href="#" class="btn btn-primary">
											Message
										</Link>
										<Link href="#" class="btn btn-primary">
											Edit
										</Link>
									</div>
								</div>
							</div>
							<div class="profile-menu">
								<ul class="nav nav-tabs nav-tabs-solid">
									<li class="nav-item">
										<Link class="nav-link active" data-toggle="tab" href="#per_details_tab">About</Link>
									</li>
									<li class="nav-item">
										<Link class="nav-link" data-toggle="tab" href="#password_tab">Password</Link>
									</li>
								</ul>
							</div>	
							<div class="tab-content profile-tab-cont">
								
								<div class="tab-pane fade show active" id="per_details_tab">
								
									<div class="row">
										<div class="col-lg-9">
											<div class="card">
												<div class="card-body">
													<h5 class="card-title d-flex justify-content-between">
														<span>Personal Details</span> 
														<Link class="edit-link" data-toggle="modal" href="#edit_personal_details"><i class="fa fa-edit mr-1"></i>Edit</Link>
													</h5>
													<div class="row">
														<p class="col-sm-3 text-muted text-sm-right mb-0 mb-sm-3">Name</p>
														<p class="col-sm-9">John Doe</p>
													</div>
													<div class="row">
														<p class="col-sm-3 text-muted text-sm-right mb-0 mb-sm-3">Date of Birth</p>
														<p class="col-sm-9">24 Jul 1983</p>
													</div>
													<div class="row">
														<p class="col-sm-3 text-muted text-sm-right mb-0 mb-sm-3">Email ID</p>
														<p class="col-sm-9">johndoe@example.com</p>
													</div>
													<div class="row">
														<p class="col-sm-3 text-muted text-sm-right mb-0 mb-sm-3">Mobile</p>
														<p class="col-sm-9">305-310-5857</p>
													</div>
													<div class="row">
														<p class="col-sm-3 text-muted text-sm-right mb-0">Address</p>
														<p class="col-sm-9 mb-0">4663  Agriculture Lane,<br/>
														Miami,<br/>
														Florida - 33165,<br/>
														United States.</p>
													</div>
												</div>
											</div>
											
											<div class="modal fade" id="edit_personal_details" aria-hidden="true" role="dialog">
												<div class="modal-dialog modal-dialog-centered" role="document" >
													<div class="modal-content">
														<div class="modal-header">
															<h5 class="modal-title">Personal Details</h5>
															<button type="button" class="close" data-dismiss="modal" aria-label="Close">
																<span aria-hidden="true">&times;</span>
															</button>
														</div>
														<div class="modal-body">
															<form>
																<div class="row form-row">
																	<div class="col-12 col-sm-6">
																		<div class="form-group">
																			<label>First Name</label>
																			<input type="text" class="form-control" value="John" />
																		</div>
																	</div>
																	<div class="col-12 col-sm-6">
																		<div class="form-group">
																			<label>Last Name</label>
																			<input type="text"  class="form-control" value="Doe" />
																		</div>
																	</div>
																	<div class="col-12">
																		<div class="form-group">
																			<label>Date of Birth</label>
																			<div class="cal-icon">
																				<input type="text" class="form-control" value="24-07-1983" />
																			</div>
																		</div>
																	</div>
																	<div class="col-12 col-sm-6">
																		<div class="form-group">
																			<label>Email ID</label>
																			<input type="email" class="form-control" value="johndoe@example.com" />
																		</div>
																	</div>
																	<div class="col-12 col-sm-6">
																		<div class="form-group">
																			<label>Mobile</label>
																			<input type="text" value="+1 202-555-0125" class="form-control" />
																		</div>
																	</div>
																	<div class="col-12">
																		<h5 class="form-title"><span>Address</span></h5>
																	</div>
																	<div class="col-12">
																		<div class="form-group">
																		<label>Address</label>
																			<input type="text" class="form-control" value="4663 Agriculture Lane" />
																		</div>
																	</div>
																	<div class="col-12 col-sm-6">
																		<div class="form-group">
																			<label>City</label>
																			<input type="text" class="form-control" value="Miami" />
																		</div>
																	</div>
																	<div class="col-12 col-sm-6">
																		<div class="form-group">
																			<label>State</label>
																			<input type="text" class="form-control" value="Florida" />
																		</div>
																	</div>
																	<div class="col-12 col-sm-6">
																		<div class="form-group">
																			<label>Zip Code</label>
																			<input type="text" class="form-control" value="22434" />
																		</div>
																	</div>
																	<div class="col-12 col-sm-6">
																		<div class="form-group">
																			<label>Country</label>
																			<input type="text" class="form-control" value="United States" />
																		</div>
																	</div>
																</div>
																<button type="submit" class="btn btn-primary btn-block">Save Changes</button>
															</form>
														</div>
													</div>
												</div>
											</div>
											
										</div>

										<div class="col-lg-3">
											
											<div class="card">
												<div class="card-body">
													<h5 class="card-title d-flex justify-content-between">
														<span>Account Status</span>
														<Link class="edit-link" href="#"><i class="fa fa-edit mr-1"></i> Edit</Link>
													</h5>
													<button class="btn btn-success" type="button"><i class="fe fe-check-verified"></i> Active</button>
												</div>
											</div>

											<div class="card">
												<div class="card-body">
													<h5 class="card-title d-flex justify-content-between">
														<span>Skills </span> 
														<Link class="edit-link" href="#"><i class="fa fa-edit mr-1"></i> Edit</Link>
													</h5>
													<div class="skill-tags">
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
								
								<div id="password_tab" class="tab-pane fade">
								
									<div class="card">
										<div class="card-body">
											<h5 class="card-title">Change Password</h5>
											<div class="row">
												<div class="col-md-10 col-lg-6">
													<form>
														<div class="form-group">
															<label>Old Password</label>
															<input type="password" class="form-control" />
														</div>
														<div class="form-group">
															<label>New Password</label>
															<input type="password" class="form-control" />
														</div>
														<div class="form-group">
															<label>Confirm Password</label>
															<input type="password" class="form-control" />
														</div>
														<button class="btn btn-primary" type="submit">Save Changes</button>
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
