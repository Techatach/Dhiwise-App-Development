import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  Text,
} from "components";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-white-A700 flex flex-col font-inter gap-[50px] items-center justify-start mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className=" bg-green-900 flex flex-row items-center justify-center p-[26px] sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[94%]">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[-0.50px] cursor-pointer"
                size="txtInterSemiBold36"
                onClick={() => navigate("/")}
              >
                รัฐประศาสนศาสตร์
              </Text>
              <div className="flex md:flex-col flex-row gap-6 items-center justify-center md:ml-[0] ml-[173px] w-[47%] md:w-full">
                <a href="/">
                  <Text
                    className="text-lg text-white-A700 tracking-[-0.50px]"
                    size="txtInterSemiBold18"
                  >
                    หน้าหลัก
                  </Text>
                </a>

                <a
                  href="http://localhost:5174/"
                  target="_blank"
                  rel="noopener,noreferer"
                >
                  <Text
                    className="text-lg text-white-A700 tracking-[-0.50px]"
                    size="txtInterSemiBold18"
                  >
                    การประเมินนโยบาย
                  </Text>
                </a>

                {/* <a href="/sigleblog">
                  <Text
                    className="text-lg text-white-A700 tracking-[-0.50px]"
                    size="txtInterSemiBold18"
                  >
                    เกี่ยวกับ
                  </Text>
                </a> */}

                <a
                  href="http://127.0.0.1:5000/index"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Text
                    className="text-lg text-white-A700 tracking-[-0.50px] cursor-pointer"
                    size="txtInterSemiBold18"
                  >
                    AI ตรวจมะเร็งผิวหนัง
                  </Text>
                </a>

                {/* <a href="/allblog">
                  <Text
                    className="text-lg text-white-A700 tracking-[-0.50px]"
                    size="txtInterSemiBold18"
                  >
                    การเรียนการสอน
                  </Text>
                </a> */}

                <a
                  href="http://localhost:5000"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Text
                    className="text-lg text-white-A700 tracking-[-0.50px]"
                    size="txtInterSemiBold18"
                  >
                    ทรัพยากรมนุษย์
                  </Text>
                </a>

                {/* <a href="/subscribe">
                  <Text
                    className="text-lg text-white-A700 tracking-[-0.50px]"
                    size="txtInterSemiBold18"
                  >
                    การบริการวิชาการ
                  </Text>
                </a> */}

                <a href="/team">
                  <Text
                    className="text-lg text-white-A700 tracking-[-0.50px]"
                    size="txtInterSemiBold18"
                  >
                    คณาจารย์
                  </Text>
                </a>

                {/* <a href="/sigleblog">
                  <Text
                    className="text-lg text-white-A700 tracking-[-0.50px]"
                    size="txtInterSemiBold18"
                  >
                    ข่าวสารและกิจกรรม
                  </Text>
                  </a> */}

                <a
                  href="http://localhost:5173/user"
                  target="_blank"
                  rel="noopener, noreferer"
                >
                  <Text
                    className="text-lg text-white-A700 tracking-[-0.50px]"
                    size="txtInterSemiBold18"
                  >
                    การประเมินผล
                  </Text>
                </a>

                <a href="/dhiwise-dashboard">
                  <Text
                    className="text-lg text-white-A700 tracking-[-0.50px]"
                    size="txtInterSemiBold18"
                  >
                    ติดต่อ
                  </Text>
                </a>
              </div>
              <div className="flex flex-row items-center justify-between md:ml-[0] ml-[214px] w-[15%] md:w-full">
                <a href="/search">
                  <Img
                    className="common-pointer h-6 w-6"
                    src="images/img_search.svg"
                    alt="search"
                  />
                </a>
                <Line className="bg-white-A700 h-[26px] w-px" />
                <div className="flex flex-row gap-5 items-center justify-between w-[56%]">
                  <a href="/login">
                    <Text
                      className="cursor-pointer text-xl text-white-A700 tracking-[-0.50px]"
                      size="txtInterRegular14"
                    >
                      Login
                    </Text>
                  </a>
                  <a href="/register">
                    <Text
                      className="cursor-pointer text-xl text-white-A700 tracking-[-0.50px]"
                      size="txtInterRegular14"
                    >
                      Register
                    </Text>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
