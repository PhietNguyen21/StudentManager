import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import Form from "react-bootstrap/Form";

const UpdateStudent = ({ btnEditStudent, row }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [student, setStudent] = useState(row);

  const { fullName, address, birthYear, gender } = student;

  useEffect(() => {
    setStudent(row);
  }, [row]);
  const handelChange = (e) => {
    const { value, name } = e.target;
    setStudent({
      ...student,
      [name]: name === "gender" ? parseInt(value) : value,
    });
  };

  // useEffect(() => {
  //   console.log("STUDENT EDIT", student);
  // }, [student]);
  const saveStudentEdit = (e) => {
    e.preventDefault();
    btnEditStudent(student);
    toast.success("Edit Sucess");
    handleClose();
  };
  return (
    <>
      <Button
        variant="primary"
        style={{ marginRight: "10px" }}
        onClick={handleShow}
      >
        Edit
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Student</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: "380px" }}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                onChange={handelChange}
                type="text"
                placeholder="Enter FullName"
                name="fullName"
                value={fullName}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Birth Year</Form.Label>
              <Form.Control
                onChange={handelChange}
                placeholder="Enter BirthYear"
                name="birthYear"
                value={birthYear}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                onChange={handelChange}
                placeholder="1234 Main St"
                name="address"
                value={address}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Gender</Form.Label>
              <Form.Select
                onChange={handelChange}
                name="gender"
                defaultValue={gender}
              >
                <option>Chose</option>
                <option value={1}>Nam</option>
                <option value={2}>Nữ</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" variant="primary" onClick={saveStudentEdit}>
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

export default UpdateStudent;
