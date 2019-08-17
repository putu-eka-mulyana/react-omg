import React, { Component } from "react";
class Item extends Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="card mb-3" >
                {/* style={{maxWidth: '540px'}} */}
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={this.props.img} className="card-img" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{this.props.name}</h5>
                                <p>Persentase : {this.props.persentease} %</p>
                                <p>Kategori : {this.props.kategori}</p>
                                <div>
                                    <span>Harga {this.props.price}</span>
                                    <a href={this.props.link} target="blank" className="btn btn-outline-primary btn-sm float-right">Cek Ke Toko</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Item;