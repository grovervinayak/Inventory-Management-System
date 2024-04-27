import React from "react";
import {render} from "react-dom";

export class SingleTable extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<table>
				<thead className="thead-style bkground-dc-green-wh color-dc-white text-trans-upper">
					<tr>
						{this.props.tableHeading.map((heading, index)=>
							<th>{heading}</th>)}
					</tr>
				</thead>
				<tbody className="tbody-style">
					{this.props.tableData.map((single_row, index)=>
						<tr>
							{Object.values(single_row).map((single_item,index_1)=>
								<td style={this.props.tableName==="Total Orders" ? 
									{'borderBottom':'1px solid #b8b8b8'} : {'borderBottom':'0'}}>
								{this.props.tableName === "Total Orders" && index_1 === 1 ? 
									<div className="div-item-oiten margin-dc-10-pxl-t margin-dc-10-pxl-b">
									{single_row.ordered_items.map((one_item, index_2)=>
										<div className="item-info-info-item display-dc-flex jst-fy-dc-sp-btwn">
											<span className="flex-dc-0-0-60">{one_item.item_name}</span>
											<span className="flex-dc-0-0-20">{one_item.item_quantity} * {one_item.item_price}</span>
											<span className="flex-dc-0-0-20">{one_item.item_total_price}</span>
										</div> )}
									</div> : single_item }
								{this.props.tableName === "Total Expenses" && index_1 == 2 && single_row.revenue_used === true ?
							 		<i class="fa fa-check check-icon-fa"></i> : null}
								</td>
							)}
							
						</tr>
					)}
					
				</tbody>
			</table>
		);
	}
}