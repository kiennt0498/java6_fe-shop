import React, { useEffect, useState } from "react";
import { MdHome, MdManageAccounts } from "react-icons/md";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import {
  Layout,
  Menu,
  Button,
  theme,
  Breadcrumb,
  Avatar,
  Space,
  Dropdown,
  message,
  Row,
  Col,
} from "antd";
import { Footer } from "antd/es/layout/layout";
import "./style.scss";
import ButtonCart from "../components/common/ButtonCart";
import Login from "../components/auth/Login";
import HomePage from "../components/home/HomePage";
import Register from "../components/auth/Register";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { FaCartArrowDown } from "react-icons/fa";
import ProductPage from "../components/product/ProductPage";
import ProductDetailPage from "../components/productDetail/ProductDetailPage";
import ListOrder from "../components/Order/ListOrder";

import CartItem from "../components/cart/CartItem";
import Profile from "../components/profile/Profile";

import ProductSPService from "../services/ProductSPService";
import ProfileService from "../services/ProfileService";

const { Header, Sider, Content } = Layout;

const DashboardPage = () => {
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");
  const [profile, setProfile] = useState({});
  useEffect(() => {
    async function fetchProfile() {
      if (username) {
        const pf = await ProfileService.getProfile(username, token);
        setProfile(pf);
      }
    }

    fetchProfile();
  }, [username]);

  const navigate = useNavigate();
  const handleMenuClick = (e) => {
    console.log(e.key);
    switch (e.key) {
      case "1":
        navigate("/dangnhap");
        break;

      case "2":
        navigate("/dangky");
        break;
      case "3":
        navigate("/taikhoan");
        break;

      case "4":
        navigate("/order");
        break;
      case "5":
        localStorage.setItem("username", "");
        localStorage.setItem("token", "");
        break;

      default:
        break;
    }
  };
  const items = [
    {
      label: "Đăng nhập",
      key: "1",
      icon: <AiOutlineLogin />,
    },
    {
      label: "Đăng ký",
      key: "2",
      icon: <MdManageAccounts />,
    },
    {
      label: "Tài khoản",
      key: "3",
      icon: <UserOutlined />,
    },
    {
      label: "Order",
      key: "4",
      icon: <FaCartArrowDown />,
    },
    {
      label: "Đăng xuất",
      key: "5",
      icon: <AiOutlineLogout />,
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <MdHome />,
              label: "Trang chủ",
              onClick: () => navigate("/"),
            },
            {
              key: "2",
              icon: <MdHome />,
              label: "Sản phẩm",
              onClick: () => navigate("/sanpham"),
            },

            {
              key: "3",
              icon: <MdHome />,
              label: "Cẩm nang yến sào",
              // onClick: () => navigate("/"),
            },
          ]}
        />
        <ButtonCart></ButtonCart>
        <Row className="userBar">
          <Col>
            <Avatar
              className="avata"
              src={
                profile.photoImage
                  ? ProductSPService.getProductImageUrl(profile.photoImage)
                  : ""
              }
            ></Avatar>
            <Space wrap>
              <Dropdown menu={menuProps}>
                <Button style={{ height: "40px" }}>
                  <Space>
                    {username ? username : "Login"}
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
            </Space>
          </Col>
        </Row>
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <div className="content-panel">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dangnhap" element={<Login />} />
            <Route path="/dangky" element={<Register />} />
            <Route path="/sanpham" element={<ProductPage />} />
            <Route path="/sanphamchitiet" element={<ProductDetailPage />} />
            <Route path="/giohang" element={<CartItem />} />
            <Route path="/taikhoan" element={<Profile />} />
            <Route path="/order" element={<ListOrder />} />
          </Routes>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default DashboardPage;
