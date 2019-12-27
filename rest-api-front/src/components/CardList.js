import React, { Component } from "react";
import { Button } from "react-bootstrap";
import AddContact from "./modal";
import "./Contact.css";

class CardList extends Component {
  state = {
    modal: false
  };
  toggle = () => this.setState({ modal: !this.state.modal });
  render() {
    const { contact, handleAdd } = this.props;
    return (
      <div>
        <div className="card">
          <div  className="cardL">
            <p className="card-text">Name: {contact.name}</p>
            <p className="card-text">Phone{contact.phone}</p>
            <p className="card-text">Email{contact.email}</p>
            <Button
              variant="danger"
              className="buttonDanger"
              onClick={() => this.props.deleteContact(contact._id)}
            >
              Delete Contact
            </Button>

            <Button
              className="btn-warning"
              variant="danger"
              onClick={this.toggle}
            >
              Edite Contact
            </Button>
            {this.state.modal ? (
              <AddContact
                modal={this.state.modal}
                toggle={this.toggle}
                isEdit={true}
                contact={contact}
                handleAdd={handleAdd}
              />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
export default CardList;
