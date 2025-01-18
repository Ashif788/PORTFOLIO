import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { AiOutlineDownload } from 'react-icons/ai';
import * as pdfjsLib from 'pdfjs-dist';

function ResumeNew() {
  const [pdf, setPdf] = useState(null);
  const [isRendering, setIsRendering] = useState(false);  // To track rendering status

  const pdfUrl = '/ASHIF-RESUME-2025.pdf';  // Path to your PDF file in the public folder

  // Set the workerSrc in useEffect
  useEffect(() => {
    pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;
  }, []);

  // Load the PDF when component mounts
  useEffect(() => {
    const loadPdf = async () => {
      const loadedPdf = await pdfjsLib.getDocument(pdfUrl).promise;
      setPdf(loadedPdf);
    };
    loadPdf();
  }, [pdfUrl]);

  // Render the first page of the PDF
  const renderPage = () => {
    if (pdf && !isRendering) {
      setIsRendering(true); // Set rendering status to true

      pdf.getPage(1).then((page) => {  // Always get the first page
        const canvas = document.getElementById('pdf-canvas');
        const context = canvas.getContext('2d');
        const viewport = page.getViewport({ scale: 1.5 });

        // Set canvas size to match the PDF page dimensions
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        // Render PDF page to canvas
        page.render({
          canvasContext: context,
          viewport: viewport,
        }).promise.then(() => {
          setIsRendering(false);  // After rendering is done, reset the status
        }).catch((error) => {
          setIsRendering(false);  // In case of error, reset rendering status
          console.error("Error during rendering:", error);
        });
      });
    }
  };

  useEffect(() => {
    renderPage(); // Render the first page when the PDF is loaded
  }, [pdf]);

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
              className="w-100 shadow-lg"
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Col>
        </Row>

        {/* PDF Viewer - Render the first page only */}
        <Row className="justify-content-center mb-5">
          <Col md={8}>
            {/* Canvas to render the first PDF page */}
            <canvas id="pdf-canvas" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
