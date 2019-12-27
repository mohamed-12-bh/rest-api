import React, { Component } from "react";
import axios from "axios";
import CardList from "./CardList";
import "./Contact.css";
import AddContact from "./modal";
import { Button } from "react-bootstrap";
class ListContact extends Component {
  state = {
    modal: false,
    list: [],
    name: "",
    phone: "",
    email: ""
  };
  newContact = nContact => {
    axios
      .post("/add_contact", {
        name: nContact.name,
        phone: nContact.phone,
        email: nContact.email
      })
      .then(this.getUsers);
  };
  toggle = () => this.setState({ ...this.state, modal: !this.state.modal });

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    axios
      .get("/getcontacts")
      .then(res =>
        this.setState({
          list: res.data
        })
      )
      .catch(err => console.error(err));
  };

  deleteContact = id => {
    axios.delete(`/delete_contact/${id}`).then(this.getUsers);
  };

  modifyContact = modifContact =>
    axios
      .put(`/modifyContact/${modifContact._id}`, {
        name: modifContact.name,
        phone: modifContact.phone,
        email: modifContact.email
      })
      .then(this.getUsers());

  render() {
    console.log(this.state.list);
    return (
      <>
        <div className="button">
          <div className="contact">
            {this.state.list.map((el, key) => (
              <div key={key}>
                <CardList
                  contact={el}
                  deleteContact={this.deleteContact}
                  handleAdd={this.modifyContact}
                  isEdite={true}
                />
              </div>
            ))}
          </div>
          <div>
            <Button
              className="btn btn-success"
              variant="primary"
              onClick={() => this.toggle()}
            >
              Add Contact
            </Button>
            <AddContact
              handleAdd={this.newContact}
              modal={this.state.modal}
              toggle={this.toggle}
            />
          </div>
        </div>
      </>
    );
  }
}
export default ListContact;
