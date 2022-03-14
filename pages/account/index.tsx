import Link from "next/link";
import React from "react";

export default class Account extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>Account Information</h1>
          <Link href="/account/login">
            <h3>Login</h3>
          </Link>
        </div>
      </div>
    );
  }
}
