import React from "react";

export function SingleDataCard(props){
	return(
	<div className={`single-data-card box-dc-shadow-big ${props.card_color}`} style={props.card_style}>
		<div className="single-data-card-in">
			<div className="card-heading">
				<p className="margin-dc-0-pxl">{props.card_heading}</p>
			</div>
			<div className="card-data-value">
				<p className="margin-dc-0-pxl">{props.card_data}</p>
			</div>
		</div>
	</div>)
}

export function SingleItemInfoCard(props){
	return(
		<div className="single-item-info-page">
			<div className="item-info-name display-dc-flex jst-fy-dc-sp-btwn">
				<p className="margin-dc-0-pxl item-name-info-name">{props.single_product.product_name}</p>
				<p className="margin-dc-0-pxl">
					{props.single_product.details.in_stock} Out of {props.single_product.details.total_quantities} Left
				</p>
			</div>
			<div className="progress-bar-info">
				<div className="progressed-bar-info"
				     style={{'width':props.single_product.width_style, 'backgroundColor': props.single_product.color_style}}>
				</div>
			</div>
		</div>
	);
}

export function SingleEmployeeInfoCard(props) {
	return(
		<div className="single-card-emp-det box-dc-shadow-big bkground-dc-white">
							<div className="single-card-emp-det-in">
								<div className="left-sidebar-emp" style={{'backgroundColor':props.background_color}}>
									<div className="left-sidebar-emp-in">
										<div className="img-sidebar-emp text-dc-ctr-align">
											<img className="img-insidebar" src="../../Images/user_image.svg"/>
										</div>
										<div className="name-sidebar-emp">
											{props.name}
										</div>
										<div className="desig-sidebar-emp">
											C.E.O and Co-Founder
										</div>
									</div>
								</div>
								<div className="right-sidebar-data">
									<div className="right-sidebar-data-in">
										<div className="total-revenue">
											<span className="text-total-rev">
												Total Expenses
											</span>
											<span className="number-emp-tota-rev">
												₹4350
											</span>
										</div>
										<div className="total-revenue">
											<span className="text-total-rev">
												Total Revenue
											</span>
											<span className="number-emp-tota-rev">
												₹435
											</span>
										</div>
										<div className="total-revenue">
											<span className="text-total-rev">
												Total Used Revenue
											</span>
											<span className="number-emp-tota-rev">
												₹200
											</span>
										</div>
										<div className="total-revenue">
											<span className="text-total-rev">
												Total Net Profit
											</span>
											<span className="number-emp-tota-rev">
												₹43
											</span>
										</div>
										<div className="total-revenue">
											<span className="text-total-rev">
												Total Ownership
											</span>
											<span className="number-emp-tota-rev">
												25%
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>)
}