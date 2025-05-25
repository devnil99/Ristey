import React, { useEffect, useState } from 'react'
import { Form, Input, Button } from 'antd'
import image from './beautiful-woman-long-red-dress-walks-around-city-with-her-husband.jpg'
import { UserDataGetwt, User_StateGet, User_CasteGet } from '../Api/CoreApi'
import { Select } from 'antd';
import { FaLocationDot } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { formatDistanceToNow as timeAgo } from "date-fns";
import { Link } from "react-router-dom";
import { PiStudentFill } from "react-icons/pi";
import { MdOutlineWork } from "react-icons/md";

import success_story_img from './indian-couple-celebrating-propose-day-by-being-romantic-with-each-other (2).jpg'


function Home_Page_WLog() {
  const id = localStorage.getItem("user_id");

  const baseurl = "http://127.0.0.1:8000/";

  const [data, setData] = useState([])
  const [district, setDistrict] = useState([])
  const [state, setState] = useState([])
  const [caste, setCaste] = useState([])
  // console.log(data, '******district****')

  const get = async (value) => {
    const response = await UserDataGetwt();
    console.log(response, '***** response *****');
    console.log(value, '**** selected filters *****');

    const filteredData = response.filter((item) => {
      return (
        (!value.gender || item.gender === value.gender) &&
        (!value.state || item.state === value.state) &&
        (!value.caste || item.caste === value.caste) &&
        (!value.religion || item.religion === value.religion) &&
        (!value.district || item.district === value.district) &&
        (!value.min_age || item.age >= value.min_age) &&
        (!value.max_age || item.age <= value.max_age)
      );
    });

    console.log(filteredData, '****** filteredData ******');
    setData(filteredData);
  };

  const handleStateChange = async (value) => {
    setState(setState)
    const response = await User_StateGet()
    const filter = response.filter(i => i.state === value)
    const datamap = filter.map(i => i.district)
    setDistrict(datamap)
  }

  const handlereligionChange = async (value) => {
    const response = await User_CasteGet()
    const filter = response.filter(i => i.religion === value || i.state === state)
    const mapcaste = filter.map(i => i.caste)
    setCaste(mapcaste.sort())
    console.log(response, '99999', mapcaste)
  }

  return (

    <div>
      <div style={{width: '100%', height: '50px', backgroundColor: 'rgba(7, 110, 148,1)', position: 'fixed', zIndex: '999', display: 'flex' }}>
        <Link to='/Home_Page_wLog'>
          <p style={{ fontSize: '30px', color: 'white', marginLeft: '20px', marginTop: '-1px' }}>Ristey</p>
        </Link>

        {id ? (
          <Link to='/User_panel'>
            <p style={{ fontSize: '15px', color: 'white', marginTop: '13px', marginLeft: '1300px' }}>Profile</p>
          </Link>
        ) : (
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to='/User_Reg/885695'>
              <p style={{ fontSize: '15px', color: 'white', marginTop: '13px', marginLeft: '1200px' }}>Sign Up</p>
            </Link>
            <Link to='/User_Login'>
              <p style={{ fontSize: '15px', color: 'white', marginTop: '13px', marginLeft: '30px' }}>Login</p>
            </Link>
          </div>
        )}
      </div>
      <div style={{ height: '500px' }}>
        <img src={image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="banner" />
      </div>
      <div style={{ height: '45px', width: '68%', marginLeft: '17.5%', marginTop: '5px', borderRadius: '5px', paddingLeft: '30px', paddingTop: '1px' }}>
        <Form style={{ display: 'flex' }} onFinish={get}>
          <Form.Item name="gender">
            <Select placeholder="Gender" style={{ width: '100px', marginTop: '5px', height: '35px' }}>
              <Select.Option value="Male">Male</Select.Option>
              <Select.Option value="Female">Female</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name='min_age'>
            <Input type='number' placeholder='min_age' style={{ width: '100px', marginTop: '5px', height: '35px' }} />
          </Form.Item>
          <Form.Item name='max_age'>
            <Input type='number' placeholder='max_age' style={{ width: '100px', marginTop: '5px', height: '35px' }} />
          </Form.Item>

          <Form.Item name="state">
            <Select placeholder="State" onChange={handleStateChange} style={{ width: '200px', marginTop: '5px', height: '35px' }}>
              {/* States */}
              <Select.Option value="andhra_pradesh">Andhra Pradesh</Select.Option>
              <Select.Option value="arunachal_pradesh">Arunachal Pradesh</Select.Option>
              <Select.Option value="assam">Assam</Select.Option>
              <Select.Option value="bihar">Bihar</Select.Option>
              <Select.Option value="Chhattisgarh">Chhattisgarh</Select.Option>
              <Select.Option value="goa">Goa</Select.Option>
              <Select.Option value="gujarat">Gujarat</Select.Option>
              <Select.Option value="haryana">Haryana</Select.Option>
              <Select.Option value="himachal_pradesh">Himachal Pradesh</Select.Option>
              <Select.Option value="jharkhand">Jharkhand</Select.Option>
              <Select.Option value="karnataka">Karnataka</Select.Option>
              <Select.Option value="kerala">Kerala</Select.Option>
              <Select.Option value="madhya_pradesh">Madhya Pradesh</Select.Option>
              <Select.Option value="maharashtra">Maharashtra</Select.Option>
              <Select.Option value="manipur">Manipur</Select.Option>
              <Select.Option value="meghalaya">Meghalaya</Select.Option>
              <Select.Option value="mizoram">Mizoram</Select.Option>
              <Select.Option value="nagaland">Nagaland</Select.Option>
              <Select.Option value="odisha">Odisha</Select.Option>
              <Select.Option value="punjab">Punjab</Select.Option>
              <Select.Option value="rajasthan">Rajasthan</Select.Option>
              <Select.Option value="sikkim">Sikkim</Select.Option>
              <Select.Option value="tamil_nadu">Tamil Nadu</Select.Option>
              <Select.Option value="telangana">Telangana</Select.Option>
              <Select.Option value="tripura">Tripura</Select.Option>
              <Select.Option value="uttar_pradesh">Uttar Pradesh</Select.Option>
              <Select.Option value="uttarakhand">Uttarakhand</Select.Option>
              <Select.Option value="west_bengal">West Bengal</Select.Option>

              {/* Union Territories */}
              <Select.Option value="andaman_nicobar">Andaman and Nicobar Islands</Select.Option>
              <Select.Option value="chandigarh">Chandigarh</Select.Option>
              <Select.Option value="dadra_nagar_haveli_daman_diu">Dadra and Nagar Haveli and Daman and Diu</Select.Option>
              <Select.Option value="delhi">Delhi</Select.Option>
              <Select.Option value="jammu_kashmir">Jammu and Kashmir</Select.Option>
              <Select.Option value="ladakh">Ladakh</Select.Option>
              <Select.Option value="lakshadweep">Lakshadweep</Select.Option>
              <Select.Option value="puducherry">Puducherry</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="disttrict">
            <Select placeholder="District" style={{ width: '150px', marginTop: '5px', height: '35px' }}>
              {district.length > 0 &&
                district[0]?.map((item, index) => (
                  <Select.Option key={index} value={item}>
                    {item}
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>

          <Form.Item name="religion">
            <Select placeholder="Religion" onChange={handlereligionChange} style={{ width: '100px', marginTop: '5px', height: '35px' }}>
              <Select.Option value="Hindu">Hindu</Select.Option>
              <Select.Option value="muslim">Muslim</Select.Option>
              <Select.Option value="christian">Christian</Select.Option>
              <Select.Option value="sikh">Sikh</Select.Option>
              <Select.Option value="buddhist">Buddhist</Select.Option>
              <Select.Option value="jain">Jain</Select.Option>
              <Select.Option value="other">Other</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item name="caste">
            <Select
              placeholder="Caste"
              style={{ width: '150px', marginTop: '5px', height: '35px' }}
              showSearch
              allowClear
              optionFilterProp="children"
              filterOption={(input, option) =>
                option?.children?.toLowerCase().includes(input.toLowerCase())
              }
            >
              {Array.isArray(caste[0])
                ? caste[0].map((item, index) => (
                  <Select.Option key={index} value={item}>
                    {item}
                  </Select.Option>
                ))
                : caste.map((item, index) => (
                  <Select.Option key={index} value={item}>
                    {item}
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit' style={{ marginTop: '6px', marginLeft: '10px', height: '32px' }} >Find</Button>
          </Form.Item>
        </Form>
      </div>

      <div style={{ marginTop: '10px', width: '80%', marginLeft: '10%', borderRadius: '5px', height: 'auto' }}>

        <div style={{ paddingTop: "10px" }}>
          <div
            style={{
              // border: "2px solid",
              // width: "1600px",
              width: '900px',
              // height: "600px",
              marginLeft: "170px",
              display: "flex",
              columnGap: "20px",
            }}
          >
            {data.map((i) => (
              <div
                style={{
                  paddingTop: "1px",
                  paddingLeft: "7px",
                  height: "150px",
                  width: "430px",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  boxShadow: "1px 0.5px 4px gray",
                }}
              >
                <Link
                  to={`/User_Data_wl/${i.User_id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <p>
                    <img
                      src={`${baseurl}${i.pic}`}
                      style={{
                        width: "140px",
                        height: "130px",
                        borderRadius: "5%",
                        marginLeft: "2px",
                        // marginTop: "-13px",
                        marginTop: "5px",
                        marginBottom: "10px",
                        // border: '2px solid'
                      }}
                    />
                  </p>

                  <p
                    style={{
                      marginTop: "-158px",
                      marginLeft: "170px",
                      fontSize: "24px",
                      color: "black",
                    }}
                  >
                    {i.firstname}
                  </p>
                  <p
                    style={{
                      marginTop: "-10px",
                      marginLeft: "170px",
                      fontSize: "16px",
                      color: "black",
                    }}
                  >
                    Age : {i.age}
                  </p>
                  <p
                    style={{
                      marginTop: "-30px",
                      marginLeft: "255px",
                      fontSize: "16px",
                      color: "black",
                    }}
                  >
                    {i.religion}
                  </p>
                  {/* <p
                            style={{
                              marginTop: "-30px",
                              marginLeft: "325px",
                              fontSize: "16px",
                              color: "black",
                            }}
                          >
                            {i.gender}
                          </p> */}

                  <p
                    style={{
                      marginTop: "-5px",
                      marginLeft: "170px",
                      fontSize: "16px",
                      color: "black"
                    }}
                  >
                    <PiStudentFill style={{ fontSize: "16px" }} /> {i.course}
                  </p>
                  <p
                    style={{
                      marginTop: "-5px",
                      marginLeft: "170px",
                      fontSize: "16px",
                      color: "black",
                    }}
                  >
                    <MdOutlineWork style={{ fontSize: "16px" }} /> {i.job_title}
                  </p>
                </Link>
                <FaLocationDot
                  style={{
                    marginTop: "-5px",
                    marginLeft: "170px",
                    fontSize: "16px",
                    color: "black",
                  }}
                />
                <p
                  style={{
                    marginTop: "-27px",
                    marginLeft: "190px",
                    fontSize: "16px",
                    color: "black",
                  }}
                >
                  {i.disttrict}
                </p>
                <p
                  style={{
                    marginTop: "-4px",
                    marginLeft: "170px",
                    fontSize: "16px",
                    color: "black",
                  }}
                >
                  {/* {" "} */}
                  {timeAgo(new Date(i.create_date), {
                    addSuffix: true,
                  }).replace("about ", "")}
                </p>
                {/* <p style={{ marginTop: "-40px", marginLeft: "385px" }}>
                  <Button style={{ height: "33px", width: "100px" }}>
                    <IoSend
                      style={{ fontSize: "25px" }}
                    // onClick={() => alert_popup(i)}
                    />
                  </Button>
                </p> */}

              </div>
            ))}
          </div>

        </div>

      </div>

      <div style={{ paddingTop: '20px', marginTop: '20px', width: '100%', paddingLeft: '12%', borderRadius: '5px', height: 'auto', display: 'flex', columnGap: '50px', backgroundColor: 'white' }}>
        <div style={{ backgroundColor: 'white', width: '260px', paddingTop: '13px', paddingLeft: '13px', borderRadius: '5px', boxShadow: "1px 0.5px 4px gray" }}>
          <img src={success_story_img} style={{ height: '210px', width: '232px', borderRadius: '5px' }} />
          <p style={{ textAlign: 'center', fontSize: '20px', marginTop: '-5px', color: 'black' }}>Neha Gaorav</p>
          <p style={{ color: 'black', textAlign: 'justify', width: '229px' }}>We met through the site, connected instantly, built trust, shared dreams, and now live a joyful life together forever.</p>
        </div>

        <div style={{ backgroundColor: 'white', width: '260px', paddingTop: '13px', paddingLeft: '13px', borderRadius: '5px', boxShadow: "1px 0.5px 4px gray" }}>
          <img src={success_story_img} style={{ height: '210px', width: '232px', borderRadius: '5px' }} />
          <p style={{ textAlign: 'center', fontSize: '20px', marginTop: '-5px', color: 'black' }}>Neha Gaorav</p>
          <p style={{ color: 'black', textAlign: 'justify', width: '229px' }}>We met through the site, connected instantly, built trust, shared dreams, and now live a joyful life together forever.</p>
        </div>

        <div style={{ backgroundColor: 'white', width: '260px', paddingTop: '13px', paddingLeft: '13px', borderRadius: '5px', boxShadow: "1px 0.5px 4px gray" }}>
          <img src={success_story_img} style={{ height: '210px', width: '232px', borderRadius: '5px' }} />
          <p style={{ textAlign: 'center', fontSize: '20px', marginTop: '-5px', color: 'black' }}>Neha Gaorav</p>
          <p style={{ color: 'black', textAlign: 'justify', width: '229px' }}>We met through the site, connected instantly, built trust, shared dreams, and now live a joyful life together forever.</p>
        </div>

        <div style={{ backgroundColor: 'white', width: '260px', paddingTop: '13px', paddingLeft: '13px', borderRadius: '5px', boxShadow: "1px 0.5px 4px gray" }}>
          <img src={success_story_img} style={{ height: '210px', width: '232px', borderRadius: '5px' }} />
          <p style={{ textAlign: 'center', fontSize: '20px', marginTop: '-5px', color: 'black' }}>Neha Gaorav</p>
          <p style={{ color: 'black', textAlign: 'justify', width: '229px' }}>We met through the site, connected instantly, built trust, shared dreams, and now live a joyful life together forever.</p>
        </div>
      </div>

    </div>
  )
}

export default Home_Page_WLog