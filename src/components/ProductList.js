import React from "react";
import { Link } from "react-router-dom";
import Master from "./layouts/Master";
const ProductList = () => {
  return (
    <Master>
     <div class="page-wrapper">
			<div class="content container-fluid">
				<div class="page-header">
					<div class="row">
						<div class="col">
							<h3 class="page-title">Lista de productos</h3>
						</div>
						<div class="col-auto text-right">
							<Link class="btn btn-white filter-btn"  id="filter_search">
								<i class="fas fa-filter"></i>
							</Link>
						</div>
					</div>
				</div>

				<div class="card filter-card" id="">
					<div class="card-body pb-0">
						<form action="#">
							<div class="row filter-row">
								<div class="col-sm-6 col-md-3">
									<div class="form-group">
										<label>Provider</label>
										<select class="form-control select">
											<option>Select Provider</option>
											<option>Thomas Herzberg</option>
											<option>Matthew Garcia</option>
											<option>Yolanda Potter</option>
											<option>Ricardo Flemings</option>
											<option>Maritza Wasson</option>
										</select>
									</div>
								</div>
								<div class="col-sm-6 col-md-3">
									<div class="form-group">
										<label>Status</label>
										<select class="form-control select">
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
								<div class="col-sm-6 col-md-3">
									<div class="form-group">
										<label>From Date</label>
										<div class="cal-icon">
											<input class="form-control datetimepicker" type="text" />
										</div>
									</div>
								</div>
								<div class="col-sm-6 col-md-3">
									<div class="form-group">
										<label>To Date</label>
										<div class="cal-icon">
											<input class="form-control datetimepicker" type="text" />
										</div>
									</div>
								</div>
								<div class="col-sm-6 col-md-3">
									<div class="form-group">
										<button class="btn btn-primary btn-block" type="submit">Submit</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>

				<div class="row">
					<div class="col-md-12">
						<div class="card">
							<div class="card-body">
								<div class="table-responsive">
									<table class="table table-hover table-center mb-0 datatable">
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
													<span class="table-avatar">
														<Link href="#" class="avatar avatar-sm mr-2">
															<img class="avatar-img rounded-circle" alt=""
																src="assets/img/customer/user-02.jpg" />
														</Link>
														<Link >Nancy Olson</Link>
													</span>
												</td>
												<td>
													<span class="table-avatar">
														<Link href="#" class="avatar avatar-sm mr-2">
															<img class="avatar-img rounded-circle" alt=""
																src="assets/img/provider/provider-02.jpg" />
														</Link>
														<Link >Matthew Garcia</Link>
													</span>
												</td>
												<td>Car Repair Services</td>
												<td>$50</td>
												<td>
													<Link href="edit-ratingstype.html"
														class="table-action-btn btn btn-sm bg-success-light">
														<i class="far fa-edit mr-1"></i> &nbsp; Edit &nbsp;&nbsp;
													</Link>
													<br/>
													<Link href="edit-ratingstype.html"
														class="table-action-btn btn btn-sm bg-danger-light">
														<i class="far fa-edit mr-1"></i> Delete
													</Link>
												</td>
											</tr>

										</tbody>
									</table>

								</div>
								<div class="row mt-5	">
									<div class="col-sm-12 col-md-4">
										<div class="" id="" role="status" aria-live="polite">
											Showing 1 to 10 of 10 entries
										</div>
									</div>
									<div class="col-sm-12 col-md-8">
										<div class="dataTables_paginate paging_simple_numbers" id="">
											<ul class="pagination">
												<li class="paginate_button page-item previous disabled">
													<Link href="#" class="page-link">Previous</Link>
												</li>
												<li class="paginate_button page-item active">
													<Link href="#" class="page-link">1</Link>
												</li>
												<li class="paginate_button page-item">
													<Link href="#" class="page-link">2</Link>
												</li>
												<li class="paginate_button page-item next disabled">
													<Link href="#" class="page-link">Next</Link>
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
