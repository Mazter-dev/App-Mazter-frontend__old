import React from "react";
import { Link } from "react-router-dom";
import Master from "./layouts/Master";
const ProductList = () => {
  return (
    <Master>
     <div className="page-wrapper">
			<div className="content container-fluid">
				<div className="page-header">
					<div className="row">
						<div className="col">
							<h3 className="page-title">Lista de productos</h3>
						</div>
						<div className="col-auto text-right">
							<Link className="btn btn-white filter-btn"  id="filter_search">
								<i className="fas fa-filter"></i>
							</Link>
						</div>
					</div>
				</div>

				<div className="card filter-card" id="">
					<div className="card-body pb-0">
						<form action="#">
							<div className="row filter-row">
								<div className="col-sm-6 col-md-3">
									<div className="form-group">
										<label>Provider</label>
										<select className="form-control select">
											<option>Select Provider</option>
											<option>Thomas Herzberg</option>
											<option>Matthew Garcia</option>
											<option>Yolanda Potter</option>
											<option>Ricardo Flemings</option>
											<option>Maritza Wasson</option>
										</select>
									</div>
								</div>
								<div className="col-sm-6 col-md-3">
									<div className="form-group">
										<label>Status</label>
										<select className="form-control select">
											<option>Select Status</option>
											<option>Pending</option>
											<option>Inprogress</option>
											<option>Completed (Provider)</option>
											<option>Accepted</option>
											<option>Rejected</option>
											<option>Cancelled (Provider)</option>
										</select>
									</div>
								</div>
								<div className="col-sm-6 col-md-3">
									<div className="form-group">
										<label>From Date</label>
										<div className="cal-icon">
											<input className="form-control datetimepicker" type="text" />
										</div>
									</div>
								</div>
								<div className="col-sm-6 col-md-3">
									<div className="form-group">
										<label>To Date</label>
										<div className="cal-icon">
											<input className="form-control datetimepicker" type="text" />
										</div>
									</div>
								</div>
								<div className="col-sm-6 col-md-3">
									<div className="form-group">
										<button className="btn btn-primary btn-block" type="submit">Submit</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>

				<div className="row">
					<div className="col-md-12">
						<div className="card">
							<div className="card-body">
								<div className="table-responsive">
									<table className="table table-hover table-center mb-0 datatable">
										<thead>
											<tr>
												<th>#</th>
												<th>Producto</th>
												<th>Precio</th>
												<th>U. disponibles</th>
												<th>Ventas</th>
												<th>Estado</th>
												<th>Acciones</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>1</td>
												<td>15 Sep 2020</td>
												<td>
													<span className="table-avatar">
														<Link href="#" className="avatar avatar-sm mr-2">
															<img className="avatar-img rounded-circle" alt=""
																src="assets/img/customer/user-02.jpg" />
														</Link>
														<Link >Nancy Olson</Link>
													</span>
												</td>
												<td>
													<span className="table-avatar">
														<Link href="#" className="avatar avatar-sm mr-2">
															<img className="avatar-img rounded-circle" alt=""
																src="assets/img/provider/provider-02.jpg" />
														</Link>
														<Link >Matthew Garcia</Link>
													</span>
												</td>
												<td>Car Repair Services</td>
												<td>$50</td>
												<td>
													<Link href="edit-ratingstype.html"
														className="table-action-btn btn btn-sm bg-success-light">
														<i className="far fa-edit mr-1"></i> &nbsp; Edit &nbsp;&nbsp;
													</Link>
													<br/>
													<Link href="edit-ratingstype.html"
														className="table-action-btn btn btn-sm bg-danger-light">
														<i className="far fa-edit mr-1"></i> Delete
													</Link>
												</td>
											</tr>

										</tbody>
									</table>

								</div>
								<div className="row mt-5	">
									<div className="col-sm-12 col-md-4">
										<div className="" id="" role="status" aria-live="polite">
											Showing 1 to 10 of 10 entries
										</div>
									</div>
									<div className="col-sm-12 col-md-8">
										<div className="dataTables_paginate paging_simple_numbers" id="">
											<ul className="pagination">
												<li className="paginate_button page-item previous disabled">
													<Link href="#" className="page-link">Previous</Link>
												</li>
												<li className="paginate_button page-item active">
													<Link href="#" className="page-link">1</Link>
												</li>
												<li className="paginate_button page-item">
													<Link href="#" className="page-link">2</Link>
												</li>
												<li className="paginate_button page-item next disabled">
													<Link href="#" className="page-link">Next</Link>
												</li>
											</ul>
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

export default ProductList;
