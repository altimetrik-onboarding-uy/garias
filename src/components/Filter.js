import React  from 'react';


export default class Filter extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-4">
                    {this.props.count} products found.
                </div>
                <div className="col-md-4">
                    <label> Filter
                        <select className="form-control" value={this.props.type} >
                            <option value="">Select</option>
                            <option value="computers">Computers</option>
                            <option value="videogame">Video Games</option>
                            <option value="topseller">Top Seller</option>
                        </select>
                    </label>
                </div>
            </div>
        )
    }
}


