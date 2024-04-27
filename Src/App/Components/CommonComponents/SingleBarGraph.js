import React from "react";
import {render} from "react-dom";
import {Bar} from "react-chartjs-2";
import Chart from "chart.js";

export class SingleBarGraph extends React.Component{
	chartRef = React.createRef();
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
    	const myChartRef = this.chartRef.current;
        new Chart(myChartRef, {
            type: "bar",
            data: {
                //Bring in data
                labels: ["Total Amounts"],
                datasets: this.props.data
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }
	render(){
		return(
			<canvas id="myChart" ref={this.chartRef}/>
		);
	}
}