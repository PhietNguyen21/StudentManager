import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import Form from "react-bootstrap/Form";

const CreateStudent = ({ data, btnAddStudent }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [student, setEditStudent] = useState({
    id: "",
    fullName: "",
    birthYear: "",
    address: "",
    gender: "",
  });

  const handelChange = (e) => {
    const { name, value } = e.target;

    setEditStudent({
      ...student,
      [name]: name === "id" || name === "gender" ? parseInt(value) : value,
    });
  };

  useEffect(() => {
    console.log("Student change====>", student);
  }, [student]);

  const saveStudentNew = (e) => {
    e.preventDefault();
    let index = data.findIndex((item) => item.id === student.id);
    //khong tim dc thi tra ve -1
    if (index !== -1) {
      toast.error("Trung ID");
      return;
    }
    btnAddStudent(student);
    toast.success("Add success");
    handleClose();
  };

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Add student
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Student</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: "450px" }}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>ID</Form.Label>
              <Form.Control
                onChange={handelChange}
                type="text"
                placeholder="Enter id"
                name="id"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                onChange={handelChange}
                type="text"
                placeholder="Enter FullName"
                name="fullName"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Birth Year</Form.Label>
              <Form.Control
                onChange={handelChange}
                placeholder="Enter BirthYear"
                name="birthYear"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                onChange={handelChange}
                placeholder="1234 Main St"
                name="address"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Gender</Form.Label>
              <Form.Select
                onChange={handelChange}
                name="gender"
                defaultValue="Choose..."
              >
                <option>Chose</option>
                <option value={1}>Nam</option>
                <option value={2}>Nữ</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" variant="primary" onClick={saveStudentNew}>
            Save Changes
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateStudent;
