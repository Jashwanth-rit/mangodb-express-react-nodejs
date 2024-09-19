import { Modal, Button, Form } from 'react-bootstrap';
import React, { useState } from 'react';

const AddModal = ({ show, handleClose, handleAddProduct }) => {
  const [id, setId] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = () => {
    if (!id || !price || !name || !brand || !category) {
      alert("Please fill all fields");
      return;
    }
    handleAddProduct({ id, price, name, brand, category });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>ID</Form.Label>
            <Form.Control type="text" placeholder="Enter ID" onChange={(e) => setId(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" placeholder="Enter Price" onChange={(e) => setPrice(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Brand</Form.Label>
            <Form.Control type="text" placeholder="Enter Brand" onChange={(e) => setBrand(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Control type="text" placeholder="Enter Category" onChange={(e) => setCategory(e.target.value)} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="primary" onClick={handleSubmit}>Add Product</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddModal;
