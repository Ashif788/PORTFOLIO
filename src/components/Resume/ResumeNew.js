import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { AiOutlineDownload } from 'react-icons/ai';
import { Document, Page, pdfjs } from 'react-pdf';

// Configure the PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const pdfUrl = '/RESUME.pdf'; // Make sure the PDF is in the public folder

  return (
    <div>
      <Container fluid className="resume-section d-flex flex-column align-items-center justify-content-center min-vh-100">
        {/* Download Button */}
        <Row className="justify-content-center my-4 w-100">
          <Col md={6} className="text-center">
            <Button
              variant="primary"
              href={pdfUrl}
              target="_blank"
              className="shadow-lg"
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Col>
        </Row>

        {/* PDF Viewer */}
        <Row className="justify-content-center w-100">
          <Col md={6} className="text-center">
            <Document file={pdfUrl}>
              <Page pageNumber={1} />
            </Document>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
