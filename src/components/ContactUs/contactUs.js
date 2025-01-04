import CalendlyWidget from "../CalendlyWidget";

const ContactUs = () => {
  return (
    <div>
      <h1 className="text-2xl sm:text-6xl poppins-bold p-2 sm:p-4 mt-2">Schedule a Meeting</h1>
      <p className="text-md sm:text-3xl open-sans-light p-2 sm:p-0">
        We are always here to help. If you have any questions or need assistance, please contact us.
      </p>
      <CalendlyWidget />
    </div>
  );
}

export default ContactUs;