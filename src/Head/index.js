import React, {Component}  from 'react';

class Head extends Component {

    change(option){
        localStorage.setItem('lang', option.target.value);
        window.location.reload();  
    }

    render(){
        const lang=localStorage.getItem('lang') || 'en';
        return (
            <nav className="container mb-4 mt-4">
            <div className="row">
                <div className="col-10"></div>
                <div className="col-2">
                    <select className="custom-select pull-right" onChange={this.change} value={lang}>
                        <option value="en">English</option>
                        <option value="fr">Francais</option>
                        <option value="ar">عربي</option>
                    </select>
                    </div>
            </div>
            </nav>
        )
    }
}
export default Head;