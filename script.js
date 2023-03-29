function generatePDF() {
	// Get form data
	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;
	const phone = document.getElementById("phone").value;
	const message = document.getElementById("message").value;

	// Create PDF document
	const doc = new jsPDF();

	// Add content
	doc.setFontSize(20);
	doc.text("Form Data", 10, 20);

	doc.setFontSize(14);
	doc.text(`Name: ${name}`, 10, 30);
	doc.text(`Email: ${email}`, 10, 40);
	doc.text(`Phone: ${phone}`, 10, 50);
	doc.text(`Message: ${message}`, 10, 60);

	// Save PDF
	doc.save("form.pdf");
}
