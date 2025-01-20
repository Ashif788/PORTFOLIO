import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { AiOutlineDownload } from 'react-icons/ai';
import { Document, Page, pdfjs } from 'react-pdf';

// If needed, uncomment this to configure pdf.js for better compatibility with certain browsers.
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const pdfUrl = '/ASHIF-RESUME-2025.pdf';  // Path to the PDF file in the public folder

  return (
    <div>
      <Container fluid className="resume-section">
        {/* Top Section with Download Button */}
        <Row className="justify-content-center my-4">
          <Col md={6}>
            <Button
              variant="primary"
              href={pdfUrl}
              target="_blank"
              className="w-90 shadow-lg"
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Col>
        </Row>

        {/* PDF Viewer - Render the first page */}
        <Row className="justify-content-center mb-5">
          <Col md={6}>
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
