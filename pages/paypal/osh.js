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

    render() {
            return (
                <div>
                    <Header />
                    <div className={styles.center}>
                        <h1>Purchase the Old School Hymnal</h1>
                        <button><em>P U R C H A S E</em></button>
                    </div>
                </div>
            )
        }
}

export default PaypalButton;