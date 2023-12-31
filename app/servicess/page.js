import VerifyPage from "../components/verifyPage/verifyPage";
import CoursesCard from "../components/coursesCard/coursesCard";

// import img1 from "../../public/img/website-designing-icon-14.jpg";
// import img2 from "../../public/img/gd.png";
// import img3 from "../../public/img/Digital_Marketing_logo.png";

export default function Services() {
  return (
    <>
      <div className="mt-12 mb-12 p-5">
        <div className="flex justify-center">
          <VerifyPage verifyPage={"Service Page"} />
        </div>

        <h1 className="flex justify-center font-bold text-3xl mb-5">
          WE ARE PROVIDING HEALTH SERVICES
        </h1>

        <div className="flex justify-center flex-wrap">
          <div className="mx-9 my-3">
            <CoursesCard 
            // src={img1} 
            heading="SURGERY" />
          </div>
          <div className="mx-9 my-3">
            <CoursesCard 
            // src={img2} 
            heading="PEDIATRICS" />
          </div>
          <div className="mx-9 my-3">
            <CoursesCard 
            // src={img3} 
            heading="DERMATOLOGY" />
          </div>
        </div>
      </div>
    </>
  );
}
