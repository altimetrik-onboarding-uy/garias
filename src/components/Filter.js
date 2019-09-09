import React  from 'react';
import { connect } from 'react-redux';
import { filterProducts } from '../actions/productActions';


class Filter extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-4">
                    {this.props.count} products found.
                </div>
                <div className="col-md-4">
                    <label> Filter
                        <select className="form-control" value={this.props.type} onChange={(e) => this.props.filterProducts(e.target.value)} >
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

const mapStateToProps = state => ({
    type: state.type
})

export default connect(mapStateToProps,{ filterProducts })(Filter)


