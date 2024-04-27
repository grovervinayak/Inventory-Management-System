import React from "react";
import {render} from "react-dom";
import {Bar} from "react-chartjs-2";
import Chart from "chart.js";

export class SingleDoughnutGraph extends React.Component{
	chartDoughRef = React.createRef();
	constructor(props){
		super(props);
	}
	componentDidUpdate(){
    	this.buildChart();
    }
    componentDidMount() {
        this.buildChart();
        
    }
    buildChart = () => {
    	const myChartDoughRef = this.chartDoughRef.current;
        const {total_revenue, total_expenses, used_revenue, earned_revenue} = this.props;
        new Chart(myChartDoughRef, {
            type: "doughnut",
            data: {
                //Bring in data
                labels: ["Total Expenses", "Total Revenue", "Used Revenue", "Earned Revenue"],
                datasets: this.props.data
            },
            options: {
            }
        });
    }
	render(){
		return(
			<canvas id="myChart" ref={this.chartDoughRef}/>
		);
	}
}