import React from 'react'

class Exercise03 extends React.Component {
    constructor(props) {
        super(props);
        this.amount = React.createRef(); 
        this.form = React.createRef();
        this.to = React.createRef();
        this.state = { result: 0 }
    }

    getValue() {
        let temp;
        temp = this.form.current.value;
        this.form.current.value = this.to.current.value
        this.to.current.value = temp;
        this.Convert();
    }

    convert() {
        // VND <-> USD
        if (this.form.current.value == 'VNĐ' && this.to.current.value == 'USD') { 
            this.setState({result: this.amount.current.value / 22702 + '$'});
        } else if (this.form.current.value == 'USD' && this.to.current.value == 'VNĐ') { 
            this.setState({result: this.amount.current.value * 22702 + ' VNĐ'});

        // VND <-> EUR
        } else if (this.form.current.value == 'VNĐ' && this.to.current.value == 'EUR') { 
            this.setState({result: this.amount.current.value / 25712 + ' Euros'});
        } else if (this.form.current.value == 'EUR' && this.to.current.value == 'VNĐ') { 
            this.setState({result: this.amount.current.value * 25654 + ' VNĐ'});

        // USD <-> EUR
        } else if (this.form.current.value == 'USD' && this.to.current.value == 'EUR') {
            this.setState({result: this.amount.current.value / 1.13236 + ' Euros'});
        } else if (this.form.current.value == 'EUR' && this.to.current.value == 'USD') { 
            this.setState({result: this.amount.current.value * 1.13236 + ' Euros'});

        } else {
            this.setState({result: this.amount.current.value + ' ' + this.to.current.value});
        }
    }

    render() { 
        return (
            <div class='container my-5 ' >
                <form class=" border border-primary row shadow-sm rounded-3 converter-form">
                  <div class="form-group col-md-3 my-2">
                      <label for="name">Amount</label>
                      <input ref={this.amount} type="number" class="form-control"  />
                  </div>

                  <div class="form-group col-md-4 my-2">
                      <label>From</label>
                      <select  ref={this.form} class="form-select" aria-label="Default select example">
                        <option value="VNĐ">VNĐ - Vietnamese Dong</option>
                        <option value="USD">USD - US Dollar</option>
                        <option value="EUR">EUR - Euro</option>
                      </select>
                  </div>

                  <div onClick={()=>this.getValue()} class="form-group col-md-1 my-4 div-icon" >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left-right icon-swap" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"/>
                      </svg>
                  </div>

                  <div class="form-group col-md-4 my-2">
                      <label>To</label>
                      <select class="form-select" aria-label="Default select example" ref={this.to}>
                        <option value="USD">USD - US Dollar</option>
                        <option value="VNĐ">VNĐ - Vietnamese Dong</option>
                        <option value="EUR">EUR - Euro</option>
                      </select>
                  </div>

                  <div class="form-group col-md-12 my-2">
                      <label >Result</label>
                      <h1>{this.state.result}</h1>
                  </div>

                  <div>
                    <div class="form-group col-md-6 mt-4 button">
                        <button  onClick={() => this.convert()} type="button" class="btn btn-primary">Convert</button>
                    </div>
                  </div>
                </form>
            </div>
        );
    }
}
 
export default Exercise03;
