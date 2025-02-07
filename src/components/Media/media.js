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
              <li className="sm:relative group flex flex-col">
                <a
                  href="https://drive.google.com/file/d/1_cT8p79Al1FLbC6_Os8gwZR2WmCTzgdT/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  AlwaysOn Company & Product One Pager
                </a>
              </li>
              <li>AlwaysOn Company & Product Presentation</li>
              <li className="sm:relative group flex flex-col">
                <a
                  href="https://docs.google.com/document/d/1QVoSMoqmykyT3tgJ8EDfDfDxcEJ4OvoZ/edit?usp=sharing&ouid=109346983324867277230&rtpof=true&sd=true"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="preview AlwaysOn Voluntary Product Accessibility Template (VPAT)"
                  className="hover:underline"
                >
                  AlwaysOn Voluntary Product Accessibility Template (VPAT)
                </a>
              </li>
            </ul>
          </div>
        </section>
        <div className="flex-grow h-0 border-t border-black mt-4"></div>
        <section className="videos p-4">
          <div className="flex flex-col space-y-4 mt-4">
            <h1 className="text-2xl sm:text-5xl poppins-bold">Videos</h1>
            <ul className="text-lg sm:text-2xl open-sans-light list-none space-y-4">
              <li className="sm:relative group flex flex-col">
                <a
                  href="https://www.loom.com/share/ad49b8627f174d23a59a8449dec2120b?sid=0a334d1b-2722-4e7f-bd16-b9dc61711e6e"
                  target="_blank"
                  rel="noreferrer"
                  className=" hover:underline"
                >
                  AlwaysOn Company & Product Overview
                </a>
              </li>
              <li className="sm:relative group flex flex-col">
                <a
                  href="https://drive.google.com/file/d/1U-FDfrlBzzH4lX0q7IHPtCbYWL-ur8Da/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="preview Website Chatbot + Analytics informational video"
                  className=" hover:underline"
                >
                  Website Chatbot + Analytics
                </a>
              </li>
              <li className="sm:relative group flex flex-col">
                <a
                  href="https://drive.google.com/file/d/1hPrIF1vuGs1GVjsElvSFN0mRPti5kfcZ/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="preview Document Chatbot + Analytics informational video"
                  className="hover:underline"
                >
                  Document Chatbot + Analytics
                </a>
              </li>
              <li className="sm:relative group flex flex-col">
                <a
                  href="https://drive.google.com/file/d/10VFMDj1ezhnKduWebAARIG-pA_v4vHMN/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="preview Survey Tool informational video"
                  className=" hover:underline"
                >
                  Survey Tool
                </a>
              </li>
              <li className="sm:relative group flex flex-col">
                <a
                  href="https://drive.google.com/file/d/1IHtwoPwamkKC6ARNIM-aNLJWKneScLfD/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="preview Conact Us Routing informational video"
                  className="hover:underline"
                >
                  Contact Us Routing
                </a>
              </li>
              <li className="sm:relative group flex flex-col">
                <a
                  href="https://drive.google.com/file/d/1u7uGj_LIL3sKuu_9AAe5Ky0kmv37uRLM/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="preview Prefessional Services informational video"
                  className="hover:underline"
                >
                  Professional Services
                </a>
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
        <section className="articles p-4">
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
