import TeamCard from "./(components)/taemCard/teamCard";

import card1 from "../../public/assets/lady d.jpg"
import card2 from "../../public/assets/glasses d.jpeg"
import card3 from "../../public/assets/nature d.jpg"


export default function Team() {
  return (
    <>
      <div className="py-14 bg-blue-100">
        <div className="max-w-[1010px] m-auto mb-10">
          <span className="flex justify-center text-lg text-blue-600">
            Our Departments
          </span>
          <h1 className="flex justify-center text-4xl font-bold">
            Our Top Dedicated Professionals
          </h1>
        </div>

        <div className="flex justify-center flex-wrap">
          <div className="mx-9">
            <TeamCard
              src={card1}
              heading={"SAFIA GUL"}
              skill={"SURGEON"}
            />
          </div>

          <div className="mx-9">
            <TeamCard
              src={card2}
              heading={"MATHEW WADE"}
              skill={"PEDRIATER"}
            />
          </div>

          <div className="mx-9">
            <TeamCard
              src={card3}
              heading={"MICHAEL SAM"}
              skill={"DERMATOLOGIST"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
