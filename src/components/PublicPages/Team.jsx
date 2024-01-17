import React from "react";

const Team = () => {
  return (
    <div>
      <div class="flex items-center justify-center text-center my-8">
        <div class="flex flex-col p-2 m-2  max-w-7xl">
          <div class="text-3xl font-medium">
            คณาจารย์ประจำหลักสูตรรัฐประศาสนศาสตร์
          </div>
          <div class="text-lg mx-2 md:text-xl text-stone-500">
            หลักสูตรรัฐประศานศาสตร์ มีอาจารย์ผู้รับผิดชอบหลักสูตร ดังนี้ Meet
            the team member who have contributed their designs for this
            websites.
          </div>
          <div class="text-lg mx-2 md:text-xl mb-2 text-stone-500">
            Resource person of Tailblocks communinty
          </div>

          <div class="flex items-center justify-center md:flex-row flex-col-3 space-x-4  p-2">
            <div class="flex items-center ml-4 md:ml-0 space-x-2 px-6 py-2 md:w-1/3 w-full  ">
              <div class="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="https://source.unsplash.com/300x300/?man,businessman"
                  alt=""
                  class=""
                />
              </div>
              <div class="flex-col">
                <div class="text-lg font-medium text-stone-800 cursor-pointer hover:text-stone-400">
                  อ.ดร.เตชทัช คลายโศกก์
                </div>
                <div class=" italic text-gray-800">CEO, Tailblocks</div>
              </div>
            </div>
            <div class="flex items-center  space-x-2 px-6 py-2 md:w-1/3 w-full  ">
              <div class="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="https://source.unsplash.com/300x300/?boy"
                  alt=""
                  class=""
                />
              </div>
              <div class="flex-col">
                <div class="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Arkay
                </div>
                <div class=" italic text-gray-500">Executive </div>
              </div>
            </div>
            <div class="flex items-center  space-x-2 px-6 py-2 md:w-1/3 w-full  ">
              <div class="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="https://source.unsplash.com/300x300/?girl"
                  alt=""
                  class=""
                />
              </div>
              <div class="flex-col">
                <div class="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Elina Gilbert
                </div>
                <div class=" italic text-gray-500">HR</div>
              </div>
            </div>
          </div>
          <div class="flex space-x-4  p-2 items-center justify-center md:flex-row flex-col-3">
            <div class="flex items-center ml-4 md:ml-0 space-x-2 px-6 py-2 md:w-1/3 w-full  ">
              <div class="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="https://source.unsplash.com/300x300/?kid"
                  alt=""
                  class=""
                />
              </div>
              <div class="flex-col">
                <div class="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Clay Johnson
                </div>
                <div class=" italic text-gray-500">Manager</div>
              </div>
            </div>
            <div class="flex items-center  space-x-2 px-6 py-2 md:w-1/3 w-full  ">
              <div class="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="https://source.unsplash.com/300x300/?girl,woman"
                  alt=""
                  class=""
                />
              </div>
              <div class="flex-col">
                <div class="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Hannah Saw
                </div>
                <div class=" italic text-gray-500">Marketing </div>
              </div>
            </div>
            <div class="flex items-center  space-x-2 px-6 py-2 md:w-1/3 w-full  ">
              <div class="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="https://source.unsplash.com/300x300/?woman"
                  alt=""
                  class=""
                />
              </div>
              <div class="flex-col">
                <div class="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Wednesday{" "}
                </div>
                <div class=" italic text-gray-500">Financer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </div>
  );
};

export default Team;
