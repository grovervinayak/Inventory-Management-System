import React from "react";
import {render} from "react-dom";
import {Bar} from "react-chartjs-2";
import Chart from "chart.js";
import {SingleDataCard, SingleItemInfoCard, SingleEmployeeInfoCard} from "./CommonComponents/SingleDataCard";
import {SingleBarGraph} from "./CommonComponents/SingleBarGraph";
import {SingleDoughnutGraph} from "./CommonComponents/SingleDoughnutGraph";

import {connect} from "react-redux";

import {
   fetchTotalExpenses, fetchUsedRevenue, fetchTotalRevenue, fetchProducts, fetchProductCount,
   fetchOrdersCount, fetchEarnedRevenue, fetchUniqueCustomers
} from "../Actions/getMethodActions";

class DashboardPage extends React.Component{

    constructor(props){
    	super(props);
    	this.props.fetchProducts();
    	this.props.fetchTotalExpenses();
    	this.props.fetchTotalRevenue();
    	this.props.fetchUsedRevenue();
    	this.props.fetchProductCount();
    	this.props.fetchOrdersCount();
    	this.props.fetchEarnedRevenue();
    	this.props.fetchUniqueCustomers();
    }
	render(){
		const {total_revenue, total_expenses, used_revenue, total_earned_revenue} = this.props;
		const style_card_one = {
			'flex':'0 0 24%'
		};
		const style_card_two = {
			'flex':'0 0 31%'
		}
		const upper_bar_data = [
                    {
                        label: ["Total Expenses"],
                        data: [total_expenses],
                        backgroundColor:['red']
                    },
                    {
                        label: ["Total Revenue"],
                        data: [total_revenue],
                        backgroundColor:['blue']
                    },
                    {
                        label: ["Used Revenue"],
                        data: [used_revenue],
                        backgroundColor:['green']
                    },
                    {
                        label: ["Earned Revenue"],
                        data: [total_earned_revenue],
                        backgroundColor:['#ff9800']
                    }
                ];
        const upper_dough_graph =[{
                        label: ["Total Expenses", "Total Revenue", "Used Revenue", "Earned Revenue"],
                        data: [total_expenses,total_revenue,used_revenue, total_earned_revenue],
                        backgroundColor:['red','blue','green','#ff9800']
                    }];

        const lower_bar_data = [
                    {
                        label: ["Total Orders"],
                        data: [this.props.total_orders],
                        backgroundColor:['red']
                    },
                    {
                        label: ["Total Unique Customers"],
                        data: [this.props.total_unique_customers],
                        backgroundColor:['blue']
                    },
                    {
                        label: ["Total Items"],
                        data: [this.props.total_items],
                        backgroundColor:['green']
                    }
                ];
        const lower_dough_graph =[{
                        label: ["Total Orders","Total Unique Customers", "Total Items"],
                        data: [this.props.total_orders, this.props.total_unique_customers, this.props.total_items],
                        backgroundColor:['red','blue','green']
                    }];
		return(
			<div className="dashoard-page">
				<div className="dashboard-page-in">
					<div className="upper-phase">
						<SingleDataCard card_color={"bkground-img-purple"}
						                card_heading={"Total Expenses"}
						                card_data={"₹"+this.props.total_expenses}
						                card_style={style_card_one}/>
						<SingleDataCard card_color={"bkground-img-lt-blue"}
						                card_heading={"Total Revenue"}
						                card_data={"₹"+this.props.total_revenue}
						                card_style={style_card_one}/>
						<SingleDataCard card_color={"bkground-img-green"}
						                card_heading={"Total Used Revenue"}
						                card_data={"₹"+this.props.used_revenue}
						                card_style={style_card_one}/>
						<SingleDataCard card_color={"bkground-img-black"}
						                card_heading={"Total Earned Revenue"}
						                card_data={"₹"+this.props.total_earned_revenue.toFixed(2)}
						                card_style={style_card_one}/>
					</div>
					<div className="upper-graph-phase margin-dc-30-pxl-b">
						<div className="total-phase-upper">
							<div className="upper-graph-phase-in box-dc-shadow-big">
								<div className="sales-report">
									<p className="margin-dc-0-pxl">Sales Report (bar graph)</p>
								</div>
								<div className="sales-graph">
									<SingleBarGraph data={upper_bar_data}/>
								</div>
							</div>
							<div className="graph-other-pie upper-graph-phase-in box-dc-shadow-big">
								<div className="sales-report">
									<p className="margin-dc-0-pxl">Sales Report (Pie Chart)</p>
								</div>
								<div className="sales-graph">
									<SingleDoughnutGraph data={upper_dough_graph}/>
								</div>
							</div>
						</div>
						<div className="upper-phase-in-graph box-dc-shadow-big">
							<div className="sales-report">
								<p className="margin-dc-0-pxl">Total Items Report (in Stock)</p>
							</div>
							<div className="upper-phase-info-in">
								{this.props.product_list.map((single_product,index)=>
									<SingleItemInfoCard single_product={single_product}/>
								)}

							</div>
						</div>	
					</div>
					<div className="upper-phase">
						<SingleDataCard card_color={"bkground-dc-btn-crimson"}
						                card_heading={"Total Orders"}
						                card_data={this.props.total_orders}
						                card_style={style_card_two}/>
						<SingleDataCard card_color={"bkground-lt-yl-crd"}
						                card_heading={"Total Unique Customers"}
						                card_data={this.props.total_unique_customers}
						                card_style={style_card_two}/>
						<SingleDataCard card_color={"bkground-dc-lt-orange"}
						                card_heading={"Total Items"}
						                card_data={this.props.total_items}
						                card_style={style_card_two}/>
					</div>
					<div className="lower-info-cards display-dc-flex jst-fy-dc-sp-btwn margin-dc-50-pxl-b">
						<div className="upper-graph-phase-in box-dc-shadow-big">
								<div className="sales-report">
									<p className="margin-dc-0-pxl">Sales Report (bar graph)</p>
								</div>
								<div className="sales-graph">
									<SingleBarGraph data={lower_bar_data}/>
								</div>
							</div>
							<div className="graph-other-pie upper-graph-phase-in box-dc-shadow-big">
								<div className="sales-report">
									<p className="margin-dc-0-pxl">Sales Report (Pie Chart)</p>
								</div>
								<div className="sales-graph">
									<SingleDoughnutGraph data={lower_dough_graph}/>
								</div>
							</div>
					</div>
					<div className="sales-report bkground-dc-white margin-dc-20-pxl-b" style={{'border':'0'}}>
								<p className="margin-dc-0-pxl">Individual reports (Expenses and Revenue)</p>
							</div>
					<div className="display-dc-flex jst-fy-dc-sp-btwn lower-emp-icons margin-dc-50-pxl-b">

						<SingleEmployeeInfoCard background_color={"#0f9aee"} name={"Vinayak Grover"}/>
						<SingleEmployeeInfoCard background_color={"#ff5722"} name={"Viplove Tyagi"}/>
					</div>
					<div className="display-dc-flex jst-fy-dc-sp-btwn lower-emp-icons margin-dc-30-pxl-b">
						<SingleEmployeeInfoCard background_color={"#267313"} name={"Abhishek Kumar"}/>
						<SingleEmployeeInfoCard background_color={"#7d0ab2"} name={"Rudraksh Ahuja"}/>
					</div>
				</div>
			</div>)
	}
}

const WrappedComponent = connect(({getMethodReducer, addProductPageReducer}) => {
  return {
  	product_list: getMethodReducer.product_list,
  	total_expenses: getMethodReducer.total_expenses,
  	used_revenue: getMethodReducer.used_revenue,
  	total_revenue: getMethodReducer.total_revenue,
  	total_items: getMethodReducer.total_items,
  	total_orders: getMethodReducer.total_orders,
  	total_earned_revenue: getMethodReducer.total_earned_revenue,
  	total_unique_customers: getMethodReducer.total_unique_customers
  };
}, (dispatch) => {
	return {
	fetchProducts:() => dispatch(fetchProducts()),
    fetchTotalExpenses:() => dispatch(fetchTotalExpenses()),
    fetchUsedRevenue:() => dispatch(fetchUsedRevenue()),
    fetchTotalRevenue:() => dispatch(fetchTotalRevenue()),
    fetchProductCount:() => dispatch(fetchProductCount()),
    fetchOrdersCount:() => dispatch(fetchOrdersCount()),
    fetchEarnedRevenue:() => dispatch(fetchEarnedRevenue()),
    fetchUniqueCustomers:() => dispatch(fetchUniqueCustomers())
}})(DashboardPage);

export default WrappedComponent