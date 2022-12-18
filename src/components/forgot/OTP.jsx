// importations
import React from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import OTP from '../../assets/otp.png';
// ----------------------------------------------------------------

function otp () {
  return (
    <Container>
      <div className="forget_page mt-3">
        <Row xm={12} sm={12} md={12} lg={12}>
          <Col xm={12} sm={12} md={6}>
          <div data-aos="fade-right">
            <img className="d-block w-100" src={OTP} alt="product_image" />
            </div>
          </Col>
          <Col className=" layout_panel xm={12} sm={12} md={6} px-0">
          <div data-aos="fade-left">
            <Form className="form_panel">
              <div className="opt_text flex flex-row justify-center text-center ">Enter OTP</div>
              <div
                id="otp"
                className="flex flex-row justify-center text-center px-2 mt-2"
              >
                <input
                  className="m-2 border h-10 w-10 text-center form-control rounded"
                  placeholder="_"
                  type="text"
                  id="first"
                  maxlength="1"
                />
                <input
                  className="m-2 border h-10 w-10 text-center form-control rounded"
                  placeholder="_"
                  type="text"
                  id="second"
                  maxlength="1"
                />
                <input
                  className="m-2 border h-10 w-10 text-center form-control rounded"
                  placeholder="_"
                  type="text"
                  id="first"
                  maxlength="1"
                />
                <input
                  className="m-2 border h-10 w-10 text-center form-control rounded"
                  placeholder="_"
                  type="text"
                  id="second"
                  maxlength="1"
                />
                <input
                  className="m-2 border h-10 w-10 text-center form-control rounded"
                  placeholder="_"
                  type="text"
                  id="first"
                  maxlength="1"
                />
                <input
                  className="m-2 border h-10 w-10 text-center form-control rounded"
                  placeholder="_"
                  type="text"
                  id="second"
                  maxlength="1"
                />
              </div>
{/* ----------------Submit button for OTP------------------- */}
              <Button variant="light" className="btn_login_page" type="submit" >
                Verify
              </Button>
            </Form>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default otp;
