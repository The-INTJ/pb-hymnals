import React from "react";
import Header from "../../components/Header";
import styles from "../../styles/Home.module.css";

class PaypalButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isEnabled: false
        }
    }

    // componentDidMount() {
    //     this.setState({
    //         isEnabled: true
    //     })
    //     paypal.Button.render(
    //         {
    //             env: 'sandbox',
    //             client: {
    //                 sandbox: "thenumber",
    //                 production: 'xxxxxxxxxxxxxxxx'
    //             },

    //             payment: function (data, actions) {
    //                 return actions.payment.create({
    //                     transactions: [
    //                         {
    //                             amount: {
    //                                 total: '1.00',
    //                                 currency: 'USD'
    //                             }
    //                         }
    //                     ]
    //                 })
    //             },
    //             commit: true,

    //             onAuthorize: function (data, actions) {
    //                 return actions.payment.execute().then(function (response) {
    //                     console.log('Payment completed.')
    //                 })
    //             },

    //             onCancel: function (data) {
    //                 console.log('The payment was canceled')
    //             }
    //         },
    //         '#paypal-express-btn'
    //     )
    // }
    // render() {
    //     return (
    //         <div>
    //             <Header />
    //             {this.state.isEnabled ?
    //                 <div id="paypal-express-btn" />
    //             :
    //                 'Loading...'
    //             }
    //         </div>
    //     )
    // }

    render() {
            return (
                <div>
                    <Header />
                    <div className={styles.center}>
                        <h1>Paypal</h1>
                    </div>
                </div>
            )
        }
}

export default PaypalButton;