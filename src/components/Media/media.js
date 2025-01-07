import React, { useState } from "react";
import "./media.css";
import onePager from "../../assets/onePager.pdf";
import onePagerImg from "../../assets/onePager.png";

function Media() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={isOpen ? "blur-background" : ""}>
        {/* Sections */}
        <section className="documents border-t-2 border-black p-4">
          <div className="flex flex-col space-y-4 mt-4">
            <h1 className="text-2xl sm:text-5xl poppins-bold">Documents</h1>
            <ul className="text-sm sm:text-2xl open-sans-light list-none space-y-4">
              <li>
                <button
                  onClick={toggleModal}
                  aria-label="open one pager"
                  className=""
                >
                  AlwaysOn Company & Product One Pager
                </button>
              </li>
              <li>
                <button
                  onClick={toggleModal}
                  aria-label="open one pager"
                  className=""
                >
                  AlwaysOn Company & Product Presentation
                </button>
              </li>
              <li>
                <button
                  onClick={toggleModal}
                  aria-label="open one pager"
                  className=""
                >
                  AlwaysOn Voluntary Product Accessibility Template (VPAT)
                </button>
              </li>
            </ul>
          </div>
        </section>
        <div className="flex-grow h-0 border-t border-black mt-4"></div>
        <section className="videos p-4">
          <div className="flex flex-col space-y-4 mt-4">
            <h1 className="text-2xl sm:text-5xl poppins-bold">Videos</h1>
            <ul className="text-sm sm:text-2xl open-sans-light list-none space-y-4">
              <li>
                <a
                  href="https://www.loom.com/share/ad49b8627f174d23a59a8449dec2120b?sid=0a334d1b-2722-4e7f-bd16-b9dc61711e6e"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="open one pager"
                  className=""
                >
                  AlwaysOn Company & Product Overview
                </a>
              </li>
              <li>
                <button
                  onClick={toggleModal}
                  aria-label="open one pager"
                  className=""
                >
                  Website Chatbot + Analytics
                </button>
              </li>
              <li>
                <button
                  onClick={toggleModal}
                  aria-label="open one pager"
                  className=""
                >
                  Document Chatbot + Analytics
                </button>
              </li>
              <li>
                <button
                  onClick={toggleModal}
                  aria-label="open one pager"
                  className=""
                >
                  Survey Tool
                </button>
              </li>
              <li>
                <button
                  onClick={toggleModal}
                  aria-label="open one pager"
                  className=""
                >
                  Contact Us Routing
                </button>
              </li>
              <li>
                <button
                  onClick={toggleModal}
                  aria-label="open one pager"
                  className=""
                >
                  Professional Services
                </button>
              </li>
            </ul>
          </div>
        </section>
        <div className="flex-grow h-0 border-t border-black mt-4"></div>
        <section className="podcasts p-4">
          <div className="flex flex-col space-y-4 mt-4">
            <h1 className="text-2xl sm:text-5xl poppins-bold">Podcasts</h1>
            <ul className="text-sm sm:text-2xl open-sans-light list-none space-y-4">
              <li>
                <a
                  href="https://podcasts.apple.com/us/podcast/mastering-social-media-for-schools/id1509779834?i=1000655391023"
                  aria-label="open one pager"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  Mastering Social Media for Schools: Using AI to Improve School
                  Customer Service with Teddy Daiber
                </a>
              </li>
            </ul>
          </div>
        </section>
        <div className="flex-grow h-0 border-t border-black mt-4"></div>
        <section className="Webinars p-4">
          <div className="flex flex-col space-y-4 mt-4">
            <h1 className="text-2xl sm:text-5xl poppins-bold">Webinars</h1>
            <ul className="text-sm sm:text-2xl open-sans-light list-none space-y-4">
              <li>
                <a
                  href="https://apptegy.wistia.com/medias/qrkk5sjpco"
                  aria-label="open one pager"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  AlwaysOn AI Chatbot with Apptegy Websites
                </a>
              </li>
            </ul>
          </div>
        </section>
        <div className="flex-grow h-0 border-t border-black mt-4"></div>
        <section className="Articles p-4">
          <div className="flex flex-col space-y-4 my-4">
            <h1 className="text-2xl sm:text-5xl poppins-bold">Articles</h1>
            <ul className="text-sm sm:text-2xl open-sans-light list-none space-y-12">
              <li>
                <a
                  href="https://www.greenwichtime.com/news/education/article/greenwich-sleuthhound-chatbot-schools-19988778.php"
                  aria-label="open one pager"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  Greenwich Time: "Meet Greenwich Public Schools new chatbot who
                  won't say why the district got rid of tacos at lunch"
                </a>
              </li>
              <li>
                <a
                  href="https://patch.com/pennsylvania/warminster/ai-chatbot-pilot-launched-centennial-website"
                  aria-label="open one pager"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  Patch: “AI Chatbot Pilot Launched On Centennial Website”
                </a>
              </li>
              <li>
                <a
                  href="https://www.psusd.us/site/handlers/filedownload.ashx?moduleinstanceid=18882&dataid=20975&FileName=WEB_OctNov%202021%20English.pdf"
                  aria-label="open one pager"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  Palm Springs: “PSUSD Website Has New Chat Option for Quick,
                  Easy Responses”
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="pdf-modal">
          <div className="pdf-modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <iframe src={onePager} width="100%" title="PDF Viewer"></iframe>
          </div>
        </div>
      )}
    </>
  );
}

export default Media;
