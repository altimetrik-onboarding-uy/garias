import React  from 'react';


class Filter extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-4">
                    <label> Filter | {this.props.count} products found.
                        <select className="form-control" value={this.props.type} onChange={(e) => this.props.handleProductChange(e)} >
                            <option value="celulares">Select</option>
                            <option value="iphone">iPhone</option>
                            <option value="videogames">Video Games</option>
                            <option value="topseller">Top Seller</option>
                        </select>
                    </label>
                </div>
            </div>
        )
    }
}


export default Filter


