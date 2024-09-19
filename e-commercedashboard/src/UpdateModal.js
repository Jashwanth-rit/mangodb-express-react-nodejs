import { Modal, Button, Form } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

const UpdateModal = ({ show, handleClose, productData, handleUpdateProduct }) => {
  const [id, setId] = useState(productData.id || "");
  const [price, setPrice] = useState(productData.price || "");
  const [name, setName] = useState(productData.name || "");
  const [brand, setBrand] = useState(productData.brand || "");
  const [category, setCategory] = useState(productData.category || "");

  useEffect(() => {
    if (productData) {
      setId(productData.id);
      setPrice(productData.price);
      setName(productData.name);
      setBrand(productData.brand);
      setCategory(productData.category);
    }
  }, [productData]);

  const handleSubmit = () => {
    handleUpdateProduct({ id, price, name, brand, category });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>ID</Form.Label>
            <Form.Control type="text" value={id} onChange={(e) => setId(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Brand</Form.Label>
            <Form.Control type="text" value={brand} onChange={(e) => setBrand(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Control type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="primary" onClick={handleSubmit}>Update Product</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateModal;
