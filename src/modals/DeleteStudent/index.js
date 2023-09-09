import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import Form from "react-bootstrap/Form";

const DeleteStudent = ({ btnDeleteStudent, row }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const [student, setEditStudent] = useState({
  //   id: id,
  //   fullName: fullName,
  // });

  // useEffect(() => {
  //   setEditStudent({
  //     id: id,
  //     fullName: fullName,
  //   });
  // }, [row]);

  // const saveDelete = (e) => {
  //   e.preventDefault();
  //   deleteStudent(id);
  //   handleClose();
  // };

  const { id, fullName } = row;

  // const [student, setStudent] = useState({
  //   id: id,
  //   fullName: fullName,
  // });

  // useEffect(() => {
  //   setStudent({
  //     id: row.id,
  //     fullName: row.fullName,
  //   });
  // }, [row]);

  const saveDelete = (e) => {
    e.preventDefault();
    btnDeleteStudent(id);
    toast.success("Delete success");
    handleClose();
  };
  const handelOnlickDelete = () => {
    handleShow();
  };

  return (
    <>
      <Button variant="danger" onClick={handelOnlickDelete}>
        Delete
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Bạn có chắc muốn xoá student:</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: "200px" }}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter id"
                name="id"
                value={row.id}
                disabled={true}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter FullName"
                name="fullName"
                value={row.fullName}
                disabled={true}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" variant="primary" onClick={saveDelete}>
            Accept
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteStudent;
