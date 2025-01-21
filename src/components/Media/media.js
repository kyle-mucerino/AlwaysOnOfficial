import React from "react";
import "./media.css";

function Media() {
  return (
    <>
      <div>
        {/* Sections */}
        <section className="documents border-t-2 border-black p-4">
          <div className="flex flex-col space-y-4 mt-4">
            <h1 className="text-2xl sm:text-5xl poppins-bold">Documents</h1>
            <ul className="text-lg sm:text-2xl open-sans-light list-none space-y-4">
              <li className="relative group">
                <span>AlwaysOn Company & Product One Pager</span>
                <div className="absolute hidden group-hover:flex gap-2 bg-white border p-2 top-0 left-0 shadow-lg z-10">
                  <a
                    href="https://drive.google.com/file/d/1hibn-C-CKZyNMoVd8tVoU2iJ021519QZ/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Preview
                  </a>
                  <a
                    href="https://drive.google.com/uc?export=download&id=1hibn-C-CKZyNMoVd8tVoU2iJ021519QZ"
                    target="_blank"
                    rel="noreferrer"
                    className="text-green-500 hover:underline"
                  >
                    Download
                  </a>
                </div>
              </li>
              <li>AlwaysOn Company & Product Presentation</li>
              <li className="relative group">
                <span>
                  AlwaysOn Voluntary Product Accessibility Template (VPAT)
                </span>
                <div className="absolute hidden group-hover:flex gap-2 bg-white border p-2 top-0 left-0 shadow-lg z-10">
                  <a
                    href="https://docs.google.com/document/d/14Ge_HYk8Jx4wok_TReOIHD1zBkLazZBe/edit?usp=sharing&ouid=109346983324867277230&rtpof=true&sd=true"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="preview AlwaysOn Voluntary Product Accessibility Template (VPAT)"
                    className="text-blue-500 hover:underline"
                  >
                    Preview
                  </a>
                  <a
                    href="https://drive.google.com/uc?export=download&id=14Ge_HYk8Jx4wok_TReOIHD1zBkLazZBe"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="download AlwaysOn Voluntary Product Accessibility Template (VPAT)"
                    className="text-green-500 hover:underline"
                  >
                    Download
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <div className="flex-grow h-0 border-t border-black mt-4"></div>
        <section className="videos p-4">
          <div className="flex flex-col space-y-4 mt-4">
            <h1 className="text-2xl sm:text-5xl poppins-bold">Videos</h1>
            <ul className="text-lg sm:text-2xl open-sans-light list-none space-y-4">
              <li className="relative group">
                <span>AlwaysOn Company & Product Overview</span>
                <div className="absolute hidden group-hover:flex gap-2 bg-white border p-2 top-0 left-0 shadow-lg z-10">
                  <a
                    href="https://www.loom.com/share/ad49b8627f174d23a59a8449dec2120b?sid=0a334d1b-2722-4e7f-bd16-b9dc61711e6e"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Preview
                  </a>
                  <a
                    href="https://drive.google.com/uc?export=download&id=1hibn-C-CKZyNMoVd8tVoU2iJ021519QZ"
                    target="_blank"
                    rel="noreferrer"
                    className="text-green-500 hover:underline"
                  >
                    Download
                  </a>
                </div>
              </li>
              <li className="relative group">
                <span>Website Chatbot + Analytics</span>
                <div className="absolute hidden group-hover:flex gap-2 bg-white border p-2 top-0 left-0 shadow-lg z-10">
                  <a
                    href="https://drive.google.com/uc?export=download&id=1oxgBV4jG-leG0OSpSJEDez418ejrJM8Q"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="preview Website Chatbot + Analytics informational video"
                    className="text-blue-500 hover:underline"
                  >
                    Preview
                  </a>
                  <a
                    href="https://drive.google.com/uc?export=download&id=1oxgBV4jG-leG0OSpSJEDez418ejrJM8Q"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="download Website Chatbot + Analytics informational video"
                    className="text-green-500 hover:underline"
                  >
                    Download
                  </a>
                </div>
              </li>
              <li className="relative group">
                <span>Document Chatbot + Analytics</span>
                <div className="absolute hidden group-hover:flex gap-2 bg-white border p-2 top-0 left-0 shadow-lg z-10">
                  <a
                    href="https://drive.google.com/uc?export=download&id=1Hk2Q0g1xo8e0t1r0ZY1zh_p1WgXHbKiY"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="preview Document Chatbot + Analytics informational video"
                    className="text-blue-500 hover:underline"
                  >
                    Preview
                  </a>
                  <a
                    href="https://drive.google.com/uc?export=download&id=1Hk2Q0g1xo8e0t1r0ZY1zh_p1WgXHbKiY"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="download Document Chabot + Analytics informational video"
                    className="text-green-500 hover:underline"
                  >
                    Download
                  </a>
                </div>
              </li>
              <li className="relative group">
                <span>Survey Tool</span>
                <div className="absolute hidden group-hover:flex gap-2 bg-white border p-2 top-0 left-0 shadow-lg z-10">
                  <a
                    href="https://drive.google.com/uc?export=download&id=1zDmETSHHrRfpU-zbv0Hq4NaJFEro6BGJ"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="preview Survey Tool informational video"
                    className="text-blue-500 hover:underline"
                  >
                    Preview
                  </a>
                  <a
                    href="https://drive.google.com/uc?export=download&id=1zDmETSHHrRfpU-zbv0Hq4NaJFEro6BGJ"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="download Survey Tool informational video"
                    className="text-green-500 hover:underline"
                  >
                    Download
                  </a>
                </div>
              </li>
              <li className="relative group">
                <span>Contact Us Routing</span>
                <div className="absolute hidden group-hover:flex gap-2 bg-white border p-2 top-0 left-0 shadow-lg z-10">
                  <a
                    href="https://drive.google.com/uc?export=download&id=1oxgBV4jG-leG0OSpSJEDez418ejrJM8Q"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="preview Conact Us Routing informational video"
                    className="text-blue-500 hover:underline"
                  >
                    Preview
                  </a>
                  <a
                    href="https://drive.google.com/uc?export=download&id=1oxgBV4jG-leG0OSpSJEDez418ejrJM8Q"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="download Conact Us Routing informational video"
                    className="text-green-500 hover:underline"
                  >
                    Download
                  </a>
                </div>
              </li>
              <li className="relative group">
                <span>Professional Services</span>
                <div className="absolute hidden group-hover:flex gap-2 bg-white border p-2 top-0 left-0 shadow-lg z-10">
                  <a
                    href="https://drive.google.com/uc?export=download&id=1G2LmHjtjNv7ugg_naD5oieX8Z-fO1Rlv"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="preview Prefessional Services informational video"
                    className="text-blue-500 hover:underline"
                  >
                    Preview
                  </a>
                  <a
                    href="https://drive.google.com/uc?export=download&id=1G2LmHjtjNv7ugg_naD5oieX8Z-fO1Rlv"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="download Prefessional Services informational video"
                    className="text-green-500 hover:underline"
                  >
                    Download
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <div className="flex-grow h-0 border-t border-black mt-4"></div>
        <section className="podcasts p-4">
          <div className="flex flex-col space-y-4 mt-4">
            <h1 className="text-2xl sm:text-5xl poppins-bold">Podcasts</h1>
            <ul className="text-lg sm:text-2xl open-sans-light list-none space-y-4">
              <li>
                <a
                  href="https://podcasts.apple.com/us/podcast/mastering-social-media-for-schools/id1509779834?i=1000655391023"
                  aria-label="listen to podcast"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
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
            <ul className="text-lg sm:text-2xl open-sans-light list-none space-y-4">
              <li>
                <a
                  href="https://apptegy.wistia.com/medias/qrkk5sjpco"
                  aria-label="watch webinar"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
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
            <ul className="text-lg sm:text-2xl open-sans-light list-none space-y-12">
              <li>
                <a
                  href="https://www.greenwichtime.com/news/education/article/greenwich-sleuthhound-chatbot-schools-19988778.php"
                  aria-label="read article"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Greenwich Time: "Meet Greenwich Public Schools new chatbot who
                  won't say why the district got rid of tacos at lunch"
                </a>
              </li>
              <li>
                <a
                  href="https://patch.com/pennsylvania/warminster/ai-chatbot-pilot-launched-centennial-website"
                  aria-label="read article"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Patch: “AI Chatbot Pilot Launched On Centennial Website”
                </a>
              </li>
              <li>
                <a
                  href="https://www.psusd.us/site/handlers/filedownload.ashx?moduleinstanceid=18882&dataid=20975&FileName=WEB_OctNov%202021%20English.pdf"
                  aria-label="read article"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Palm Springs: “PSUSD Website Has New Chat Option for Quick,
                  Easy Responses”
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

export default Media;
